/**
 * Archmage boss phases and abilities.
 * Extracted from boss.ts to keep files focused and small.
 */
import {
  Brick,
  HomingProjectile,
  Projectile,
  FireRainZone,
  IceSpikeField,
  LightningStrike,
  ArcaneOverloadRing,
  FinalGambitBeam,
} from '../../../types';
import {
  GAME_WIDTH,
  GAME_HEIGHT,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  ARCHMAGE_TELEPORT_COOLDOWN,
  ARCHMAGE_SUMMON_COOLDOWN,
  ARCHMAGE_MAX_APPRENTICES,
  ARCHMAGE_MISSILE_COOLDOWN,
  ARCHMAGE_MISSILE_SPEED,
  ARCHMAGE_PHASE2_THRESHOLD,
  ARCHMAGE_ELEMENTAL_STORM_COOLDOWN,
  FIRE_RAIN_DURATION,
  FIRE_RAIN_RADIUS,
  ICE_SPIKE_DURATION,
  ICE_SPIKE_HEIGHT,
  ICE_SPIKE_WIDTH,
  LIGHTNING_STRIKE_WARNING_DURATION,
  LIGHTNING_STRIKE_STRIKE_DURATION,
  LIGHTNING_STRIKE_WIDTH,
  ARCHMAGE_MIRROR_IMAGE_COOLDOWN,
  ARCHMAGE_MAX_CLONES,
  ARCHMAGE_MANA_BURN_COOLDOWN,
  ARCHMAGE_PHASE3_THRESHOLD,
  ARCHMAGE_FINAL_GAMBIT_THRESHOLD,
  ARCHMAGE_CHAOS_MAGIC_COOLDOWN,
  ARCHMAGE_ARCANE_OVERLOAD_COOLDOWN,
  ARCANE_OVERLOAD_RING_DURATION,
} from '../../../constants';
import { BRICK_PROPERTIES } from '../../../constants';
import { BrickType } from '../../../types';

export interface StepBossArchmageArgs {
  bricks: Brick[];
  now: number;
  timeFactor: number;
  paddleX: number;
  paddleWidth: number;
}

export interface StepBossArchmageResult {
  bricks: Brick[];
  projectiles: Projectile[];
  homingProjectiles: HomingProjectile[];
  fireRainZones: FireRainZone[];
  iceSpikeFields: IceSpikeField[];
  lightningStrikes: LightningStrike[];
  arcaneOverloadRings: ArcaneOverloadRing[];
  finalGambitBeams: FinalGambitBeam[];
  chaosMagicTriggered: boolean;
  manaBurnActivated: boolean;
  clonesCleanedUp: boolean;
}

export function stepBossArchmage(args: StepBossArchmageArgs): StepBossArchmageResult {
  const { bricks, now, timeFactor, paddleX, paddleWidth } = args;

  let workingBricks = bricks.map((b) => ({ ...b }));
  let newProjectiles: Projectile[] = [];
  let newHomingProjectiles: HomingProjectile[] = [];
  let newFireRainZones: FireRainZone[] = [];
  let newIceSpikeFields: IceSpikeField[] = [];
  let newLightningStrikes: LightningStrike[] = [];
  let newArcaneOverloadRings: ArcaneOverloadRing[] = [];
  let newFinalGambitBeams: FinalGambitBeam[] = [];
  let chaosMagicTriggered = false;
  let manaBurnActivated = false;

  const bricksToAdd: Brick[] = [];
  const ringsToCreate: ArcaneOverloadRing[] = [];
  const beamsToCreate: FinalGambitBeam[] = [];

  workingBricks = workingBricks.map((brick) => {
    if (brick.type !== BrickType.ArchmageBoss || brick.hp <= 0) return brick;

    // Phase transitions
    if (brick.phase === 1 && brick.hp / brick.maxHp <= ARCHMAGE_PHASE2_THRESHOLD) {
      brick.phase = 2;
      brick.lastElementalStormTime = now;
      brick.lastMirrorImageTime = now;
      brick.lastManaBurnTime = now;
    }
    if (brick.phase === 2 && brick.hp / brick.maxHp <= ARCHMAGE_PHASE3_THRESHOLD) {
      brick.phase = 3;
      brick.lastChaosMagicTime = now;
      brick.lastArcaneOverloadTime = now;
    }
    if (brick.phase === 3 && !brick.isFinalGambit && brick.hp / brick.maxHp <= ARCHMAGE_FINAL_GAMBIT_THRESHOLD) {
      brick.isFinalGambit = true;
      brick.vx = 0;
      newFireRainZones = [];
      newIceSpikeFields = [];
      newLightningStrikes = [];
      newArcaneOverloadRings = [];
    }

    if (brick.phase === 3) {
      if (brick.isFinalGambit) {
        if (newFinalGambitBeams.length === 0) {
          beamsToCreate.push({
            id: now,
            x: GAME_WIDTH / 2 - 50,
            width: 100,
            createdAt: now,
            warningDuration: 1000, // FINAL_GAMBIT handled by engine constants for damage
            strikeDuration: 1500,
          } as any);
        }
      } else {
        // Chaos Magic
        if (!brick.lastChaosMagicTime) brick.lastChaosMagicTime = now;
        if (now > brick.lastChaosMagicTime + ARCHMAGE_CHAOS_MAGIC_COOLDOWN) {
          chaosMagicTriggered = true;
          brick.lastChaosMagicTime = now;
        }
        // Arcane Overload
        if (!brick.lastArcaneOverloadTime) brick.lastArcaneOverloadTime = now;
        if (now > brick.lastArcaneOverloadTime + ARCHMAGE_ARCANE_OVERLOAD_COOLDOWN) {
          ringsToCreate.push({
            id: now,
            x: brick.x + brick.width / 2,
            y: brick.y + brick.height / 2,
            createdAt: now,
            duration: ARCANE_OVERLOAD_RING_DURATION,
            maxRadius: 250,
          });
          brick.lastArcaneOverloadTime = now;
        }
      }
    } else if (brick.phase === 2) {
      // Elemental Storm
      if (!brick.lastElementalStormTime) brick.lastElementalStormTime = now;
      if (now > brick.lastElementalStormTime + ARCHMAGE_ELEMENTAL_STORM_COOLDOWN) {
        const attackType = (brick as any).currentElementalAttack || 'fire';
        switch (attackType) {
          case 'fire':
            for (let i = 0; i < 4; i++) {
              newFireRainZones.push({
                id: now + i,
                x: Math.random() * (GAME_WIDTH - FIRE_RAIN_RADIUS * 2) + FIRE_RAIN_RADIUS,
                y: Math.random() * (GAME_HEIGHT - FIRE_RAIN_RADIUS * 2) + FIRE_RAIN_RADIUS,
                radius: FIRE_RAIN_RADIUS,
                createdAt: now,
                duration: FIRE_RAIN_DURATION,
              });
            }
            (brick as any).currentElementalAttack = 'ice';
            break;
          case 'ice':
            for (let i = 0; i < 2; i++) {
              newIceSpikeFields.push({
                id: now + i,
                x: Math.random() * (GAME_WIDTH - ICE_SPIKE_WIDTH),
                y: Math.random() * (GAME_HEIGHT - ICE_SPIKE_HEIGHT),
                width: ICE_SPIKE_WIDTH,
                height: ICE_SPIKE_HEIGHT,
                createdAt: now,
                duration: ICE_SPIKE_DURATION,
              });
            }
            (brick as any).currentElementalAttack = 'lightning';
            break;
          case 'lightning':
            newLightningStrikes.push({
              id: now,
              x: paddleX + paddleWidth / 2 - LIGHTNING_STRIKE_WIDTH / 2,
              y: 0,
              width: LIGHTNING_STRIKE_WIDTH,
              height: GAME_HEIGHT,
              createdAt: now,
              warningDuration: LIGHTNING_STRIKE_WARNING_DURATION,
              strikeDuration: LIGHTNING_STRIKE_STRIKE_DURATION,
            });
            (brick as any).currentElementalAttack = 'fire';
            break;
        }
        brick.lastElementalStormTime = now;
      }

      // Mirror Image
      if (!brick.lastMirrorImageTime) brick.lastMirrorImageTime = now;
      const existingClones = workingBricks.filter((b) => b.isClone && b.realBossId === brick.id).length;
      if (existingClones < ARCHMAGE_MAX_CLONES && now > (brick.lastMirrorImageTime || 0) + ARCHMAGE_MIRROR_IMAGE_COOLDOWN) {
        const clonesToSummon = ARCHMAGE_MAX_CLONES - existingClones;
        for (let i = 0; i < clonesToSummon; i++) {
          const newSpot = findEmptySpotForBrick([...workingBricks, ...bricksToAdd], brick.width, brick.height);
          if (newSpot) {
            bricksToAdd.push({
              id: now + Math.random() + i,
              ...newSpot,
              width: brick.width,
              height: brick.height,
              type: BrickType.ArchmageBoss,
              hp: 1,
              maxHp: 1,
              isClone: true,
              realBossId: brick.id,
              phase: 2,
            });
          }
        }
        brick.lastMirrorImageTime = now;
      }

      // Mana Burn
      if (!brick.lastManaBurnTime) brick.lastManaBurnTime = now;
      if (now > (brick.lastManaBurnTime || 0) + ARCHMAGE_MANA_BURN_COOLDOWN) {
        manaBurnActivated = true;
        brick.lastManaBurnTime = now;
      }
    } else {
      // Phase 1 (teleport, summon apprentices, homing missiles)
      if (brick.lastAttackTime && now > brick.lastAttackTime + ARCHMAGE_TELEPORT_COOLDOWN) {
        const otherBricks = workingBricks.filter((b) => b.id !== brick.id);
        const newSpot = findEmptySpotForBrick(otherBricks, brick.width, brick.height);
        if (newSpot) {
          brick.x = newSpot.x;
          brick.y = newSpot.y;
        }
        brick.lastAttackTime = now;
      }

      if (!brick.lastSummonTime) brick.lastSummonTime = now;
      if (!brick.lastMissileTime) brick.lastMissileTime = now;

      if (now > brick.lastSummonTime + ARCHMAGE_SUMMON_COOLDOWN) {
        const apprenticeCount = workingBricks.filter((b) => b.type === BrickType.Apprentice).length + bricksToAdd.length;
        const summonsNeeded = ARCHMAGE_MAX_APPRENTICES - apprenticeCount;
        if (summonsNeeded > 0) {
          const apprenticeProps = BRICK_PROPERTIES[BrickType.Apprentice];
          for (let i = 0; i < summonsNeeded; i++) {
            const newSpot = findEmptySpotForBrick([...workingBricks, ...bricksToAdd], BRICK_WIDTH, BRICK_HEIGHT);
            if (newSpot) {
              bricksToAdd.push({
                id: now + Math.random() + i,
                x: newSpot.x,
                y: newSpot.y,
                width: BRICK_WIDTH,
                height: BRICK_HEIGHT,
                type: BrickType.Apprentice,
                hp: apprenticeProps.maxHp,
                maxHp: apprenticeProps.maxHp,
              });
            }
          }
        }
        brick.lastSummonTime = now;
      }

      if (now > brick.lastMissileTime + ARCHMAGE_MISSILE_COOLDOWN) {
        for (let i = 0; i < 2; i++) {
          const startX = brick.x + brick.width / 2;
          const startY = brick.y + brick.height;
          const angle = Math.PI / 4 + (i * Math.PI) / 2;
          newHomingProjectiles.push({
            id: now + Math.random() + i,
            x: startX,
            y: startY,
            vx: Math.cos(angle) * ARCHMAGE_MISSILE_SPEED,
            vy: Math.sin(angle) * ARCHMAGE_MISSILE_SPEED,
            size: 12,
          });
        }
        brick.lastMissileTime = now;
      }
    }

    return brick;
  });

  if (bricksToAdd.length > 0) workingBricks.push(...bricksToAdd);
  if (ringsToCreate.length > 0) newArcaneOverloadRings.push(...ringsToCreate);
  if (beamsToCreate.length > 0) newFinalGambitBeams.push(...beamsToCreate);

  // Cleanup clones if boss is defeated
  const bossIsAlive = workingBricks.some((b) => b.type === BrickType.ArchmageBoss && !b.isClone);
  let clonesCleanedUp = false;
  if (!bossIsAlive && workingBricks.some((b) => b.isClone)) {
    workingBricks = workingBricks.filter((b) => !b.isClone);
    clonesCleanedUp = true;
  }

  return {
    bricks: workingBricks,
    projectiles: newProjectiles,
    homingProjectiles: newHomingProjectiles,
    fireRainZones: newFireRainZones,
    iceSpikeFields: newIceSpikeFields,
    lightningStrikes: newLightningStrikes,
    arcaneOverloadRings: newArcaneOverloadRings,
    finalGambitBeams: newFinalGambitBeams,
    chaosMagicTriggered,
    manaBurnActivated,
    clonesCleanedUp,
  };
}

/**
 * Utility: find empty spot for spawning bricks/clones without overlapping.
 */
function findEmptySpotForBrick(bricks: Brick[], width: number, height: number): { x: number; y: number } | null {
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * (GAME_WIDTH - width);
    const y = Math.random() * (GAME_HEIGHT / 2 - height) + 60;

    let overlaps = false;
    for (const brick of bricks) {
      if (x < brick.x + brick.width && x + width > brick.x && y < brick.y + brick.height && y + height > brick.y) {
        overlaps = true;
        break;
      }
    }
    if (!overlaps) return { x, y };
  }
  return null;
}
