/**
 * Ball movement and collision/resolution with bricks, including elemental procs.
 * Returns updated balls plus damage maps and side-effect artifacts to be consumed by the engine.
 *
 * Behavior parity focused; this module is pure with respect to inputs.
 */

import { Ball, Brick, Explosion, ElementalBeam, RunicEmpowermentBuffs, FireRainZone, IceSpikeField, LightningStrike, ArcaneOverloadRing, FinalGambitBeam } from '../../types';
import { GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_Y, BALL_RADIUS, BRICK_PROPERTIES, BRICK_WIDTH, BRICK_HEIGHT, LIGHTNING_STRIKE_WARNING_DURATION, LIGHTNING_STRIKE_STRIKE_DURATION, LIGHTNING_STRIKE_DAMAGE, LIGHTNING_STRIKE_WIDTH, FIRE_RAIN_DURATION, FIRE_RAIN_DAMAGE, FIRE_RAIN_RADIUS, ICE_SPIKE_DURATION, ICE_SPIKE_HEIGHT, ICE_SPIKE_WIDTH, ARCHMAGE_FINAL_GAMBIT_THRESHOLD, FINAL_GAMBIT_BEAM_WARNING_DURATION, FINAL_GAMBIT_BEAM_STRIKE_DURATION } from '../../constants';
import { BrickType } from '../../types';
import { lineRectCollision } from './collisions';
import { handleGearspriteDodge } from './bio-forge';

export interface UpdateBallsArgs {
  balls: Ball[];
  bricks: Brick[];
  paddleX: number;
  paddleWidth: number;
  playerPower: number;
  playerAgility: number;
  playerWisdom: number;
  unlockedSkills: Record<string, number>;
  activeBuffs: RunicEmpowermentBuffs;
  skills: Record<string, { activeUntil?: number; charges?: number }>;
  now: number;
  timeFactor: number;
  isBallLaunched: boolean;
  maxMana: number;
  hp: number;
}

export interface UpdateBallsResult {
  updatedBalls: Ball[];
  workingBricks: Brick[];
  nextBallLaunchedState: boolean;
  damageToPlayerDelta: number;
  damageMap: Map<number, number>;
  triggeredLightningStrikes: number;
  newExplosions: Explosion[];
  newBeams: ElementalBeam[];
  bricksDestroyedThisTick: number;
  chaosMagicWasTriggered: boolean;
  scrapGolemExplosionBricks?: Brick[];
}

/**
 * Update ball positions, handle paddle/wall bounces and brick impacts.
 * Produces a per-brick damage map and beam/explosion side-effects matching original behavior.
 */
export function updateBallsAndCollisions(args: UpdateBallsArgs): UpdateBallsResult {
  let {
    balls,
    bricks,
    paddleX,
    paddleWidth,
    playerPower,
    playerAgility,
    playerWisdom,
    unlockedSkills,
    activeBuffs,
    skills,
    now,
    timeFactor,
    isBallLaunched,
    maxMana,
    hp
  } = args;

  let workingBricks: Brick[] = bricks.map(b => ({ ...b }));
  let updatedBalls = [...balls];
  let nextBallLaunchedState = isBallLaunched;
  let damageToPlayerDelta = 0;

  const isTimeSlowed = skills.timeSlow?.activeUntil && now < (skills.timeSlow.activeUntil || 0);
  const localTimeFactor = isTimeSlowed ? 0.25 : 1;
  const hasteMultiplier = activeBuffs.haste ? 1.5 : 1;

  const magicDamageModifier = 1 + (playerWisdom * 0.05) + ((unlockedSkills.spellPower || 0) * 0.15);
  const ingenuity = (args as any).playerIngenuity || 0;

  let newExplosions: Explosion[] = [];
  let newBeams: ElementalBeam[] = [];
  let damageMap = new Map<number, number>();
  let triggeredLightningStrikes = 0;
  let bricksDestroyedThisTick = 0;
  let chaosMagicWasTriggered = false;
  let scrapGolemExplosionBricks: Brick[] = [];

  if (!isBallLaunched) {
    if (updatedBalls.length > 0) {
      updatedBalls = [{
        ...updatedBalls[0],
        x: paddleX + paddleWidth / 2,
        y: PADDLE_Y - updatedBalls[0].size,
      }];
    }
    return {
      updatedBalls,
      workingBricks,
      nextBallLaunchedState,
      damageToPlayerDelta,
      damageMap,
      triggeredLightningStrikes,
      newExplosions,
      newBeams,
      bricksDestroyedThisTick,
      chaosMagicWasTriggered
    };
  }

  // Move balls and basic world/paddle collision
  updatedBalls = updatedBalls.map(ball => {
    let { x, y, vx, vy, damage, slowedUntil, isSpikeSlowedUntil } = ball;

    const isSlowed = slowedUntil && now < slowedUntil;
    const isSpikeSlowed = isSpikeSlowedUntil && now < isSpikeSlowedUntil;
    const ballTimeFactor = localTimeFactor * timeFactor * (isSlowed ? 0.8 : 1) * (isSpikeSlowed ? 0.3 : 1);
    const isOverclocked = (ball as any).overclockUntil && now < (ball as any).overclockUntil;
    const overclockStacks = (ball as any).overclockStacks || 0;
    const overclockMultiplier = isOverclocked ? (1 + 0.5) : 1; // 50% faster when Overclock active
    const stackMultiplier = 1 + overclockStacks * 0.25; // each stack +25%
    const ballSpeedMultiplier = (1 + (playerAgility - 1) * 0.05) * ballTimeFactor * hasteMultiplier * overclockMultiplier * stackMultiplier;

    x += vx * ballSpeedMultiplier;
    y += vy * ballSpeedMultiplier;

    if (x <= 0 || x >= GAME_WIDTH - ball.size * 2) vx = -vx;
    if (y <= 0) vy = -vy;

    if (y >= PADDLE_Y - ball.size && y <= PADDLE_Y + PADDLE_HEIGHT && x + ball.size > paddleX && x < paddleX + paddleWidth) {
      vy = -Math.abs(vy) * 1.02;
      let hitPos = (x - (paddleX + paddleWidth / 2)) / (paddleWidth / 2);
      vx = hitPos * 5;
      damage = playerPower;
      // Precision Timing: center 20% doubles damage
      const hasPrecisionTiming = (unlockedSkills.precisionTiming || 0) > 0;
      if (hasPrecisionTiming && Math.abs(hitPos) <= 0.2) {
        damage = playerPower * 2;
      }
    }

    return { ...ball, x, y, vx, vy, damage };
  }).filter(ball => ball.y < GAME_HEIGHT);

  // Lose ball -> damage player and relaunch if alive
  if (balls.length > 0 && updatedBalls.length === 0) {
    damageToPlayerDelta += 10;
    if (hp - damageToPlayerDelta > 0) {
      nextBallLaunchedState = false;
      updatedBalls.push({ id: Date.now(), x: paddleX + paddleWidth / 2, y: PADDLE_Y - 20, vx: 0, vy: 0, size: BALL_RADIUS, damage: 0 });
    }
  }

  // Process Ice Spike Fields on balls (passed in via skills elsewhere; left here for parity hook)
  // This module expects callers to have provided applied fields via args if needed. Caller in engine applies fields separately.

  const hasBreakthrough = (unlockedSkills.breakthrough || 0) > 0;
  const hasMasterOfElements = (unlockedSkills.masterOfElements || 0) > 0;
  const ballDamageBoostLevel = unlockedSkills.ballDamageBoost || 0;
  const ballDamageMultiplier = 1 + ballDamageBoostLevel * 0.1;
  const ballDamage = playerPower * (activeBuffs.power ? 2 : 1) * ballDamageMultiplier;

  updatedBalls = updatedBalls.map(ball => {
    if (ball.vx === 0 && ball.vy === 0) return ball;
    let mutableBall = { ...ball };

    for (const brick of workingBricks) {
      const totalDamageToBrick = damageMap.get(brick.id) || 0;
      if (totalDamageToBrick >= brick.hp) continue;

      const ballCenterX = mutableBall.x + mutableBall.size;
      const ballCenterY = mutableBall.y + mutableBall.size;
      const brickCenterX = brick.x + brick.width / 2;
      const brickCenterY = brick.y + brick.height / 2;
      const dx = ballCenterX - brickCenterX;
      const dy = ballCenterY - brickCenterY;
      const combinedHalfWidths = mutableBall.size + brick.width / 2;
      const combinedHalfHeights = mutableBall.size + brick.height / 2;

      if (Math.abs(dx) < combinedHalfWidths && Math.abs(dy) < combinedHalfHeights) {
        const overlapX = combinedHalfWidths - Math.abs(dx);
        const overlapY = combinedHalfHeights - Math.abs(dy);

        // Bio-Forge Nexus: Gearsprite dodge mechanic
        if (brick.type === BrickType.Gearsprite) {
          if (handleGearspriteDodge(brick, now)) {
            // Gearsprite dodged the ball - no collision occurs
            continue;
          }
        }

        if (brick.isClone) {
          damageMap.set(brick.id, 1);
          if (overlapX < overlapY) { mutableBall.vx = -mutableBall.vx; } else { mutableBall.vy = -mutableBall.vy; }
          newExplosions.push({ id: Date.now() + Math.random(), x: brick.x + brick.width / 2, y: brick.y + brick.height / 2, radius: brick.width / 2, duration: 200, createdAt: now });
          break;
        }

        const elementalInfusionSkill = (skills as any).elementalInfusion;
        if (elementalInfusionSkill && (elementalInfusionSkill.charges || 0) > 0) {
          // Note: chargesConsumed is recorded in engine wrapper to keep public API stable.
          const randomEffect = Math.random();
          if (randomEffect < 0.33) { // Fire
            const explosionRadius = 50 + playerWisdom * 2;
            newExplosions.push({ id: Date.now() + Math.random(), x: brick.x + brick.width / 2, y: brick.y + brick.height / 2, radius: explosionRadius, duration: 300, createdAt: now });
          } else if (randomEffect < 0.66) { // Ice
            mutableBall.slowedUntil = now + 3000;
          } else { // Lightning
            triggeredLightningStrikes++;
          }
        }

        // Shield logic takes precedence
        if ((brick as any).shieldHp && (brick as any).shieldHp > 0) {
          (brick as any).shieldHp -= 1;
          if (overlapX < overlapY) { mutableBall.vx = -mutableBall.vx; } else { mutableBall.vy = -mutableBall.vy; }
          break;
        }

        if (brick.type === BrickType.Mirror) {
          damageMap.set(brick.id, totalDamageToBrick + ballDamage);
          mutableBall.vx *= -1;
          mutableBall.vy *= -1;
          mutableBall.x += mutableBall.vx;
          mutableBall.y += mutableBall.vy;
          break;
        }
        if (brick.type === BrickType.Ice) {
          mutableBall.slowedUntil = now + 2000;
        }
        // Clockwork Spire mechanics
        if (brick.type === BrickType.Clockwork) {
          // Speed up ball on hit (stacks)
          mutableBall.overclockStacks = (mutableBall.overclockStacks || 0) + 1;
        }
        if (brick.type === BrickType.Piston) {
          // Knock back ball harder
          if (overlapX < overlapY) { mutableBall.vx = -mutableBall.vx * 1.5; } else { mutableBall.vy = -mutableBall.vy * 1.5; }
        }

        if (hasBreakthrough && mutableBall.damage > 0) {
          const damageToDeal = Math.min(mutableBall.damage, brick.hp - totalDamageToBrick);
          const brickDestroyed = (totalDamageToBrick + damageToDeal) >= brick.hp;

          damageMap.set(brick.id, totalDamageToBrick + damageToDeal);
          mutableBall.damage -= damageToDeal;

          if (brickDestroyed && hasMasterOfElements) {
            const beamDamage = playerWisdom * 0.5 * magicDamageModifier;
            const beamRange = 250;
            const ballVelMag = Math.hypot(mutableBall.vx, mutableBall.vy);
            if (ballVelMag > 0) {
              const normalizedVx = mutableBall.vx / ballVelMag;
              const normalizedVy = mutableBall.vy / ballVelMag;

              const beamStartX = brick.x + brick.width / 2;
              const beamStartY = brick.y + brick.height / 2;
              const beamEndX = beamStartX + normalizedVx * beamRange;
              const beamEndY = beamStartY + normalizedVy * beamRange;

              newBeams.push({ id: Date.now() + Math.random(), x1: beamStartX, y1: beamStartY, x2: beamEndX, y2: beamEndY, createdAt: now, duration: 150 });

              // Find all bricks hit by this beam
              for (const otherBrick of workingBricks) {
                if (otherBrick.id === brick.id) continue;
                if (lineRectCollision(beamStartX, beamStartY, beamEndX, beamEndY, otherBrick)) {
                  const currentDamage = damageMap.get(otherBrick.id) || 0;
                  damageMap.set(otherBrick.id, currentDamage + beamDamage);
                }
              }
            }
          }
        } else {
          // Crit chance via Ingenuity
          const ingenuity = (args as any).playerIngenuity || 0;
          const baseDamage = ballDamage;
          const critChance = Math.min(0.75, ingenuity * 0.02 + ((args as any).playerLuck || 0) * 0.01);
          const isCrit = Math.random() < critChance;
          const critMultiplier = isCrit ? 2 : 1;
          damageMap.set(brick.id, totalDamageToBrick + baseDamage * critMultiplier);
          if (overlapX < overlapY) { mutableBall.vx = -mutableBall.vx; } else { mutableBall.vy = -mutableBall.vy; }
          break;
        }
      }
    }
    return mutableBall;
  });

  return {
    updatedBalls,
    workingBricks,
    nextBallLaunchedState,
    damageToPlayerDelta,
    damageMap,
    triggeredLightningStrikes,
    newExplosions,
    newBeams,
    bricksDestroyedThisTick,
    chaosMagicWasTriggered,
    scrapGolemExplosionBricks: scrapGolemExplosionBricks.length > 0 ? scrapGolemExplosionBricks : undefined
  };
}
