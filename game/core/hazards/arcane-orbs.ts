/**
 * Arcane Orbs logic (movement, brick collision, damage application)
 * Extracted from hazards.ts to keep files small and pure.
 */
import { ArcaneOrb, Brick, Explosion } from '../../../types';
import { GAME_HEIGHT, GAME_WIDTH } from '../../../constants';
import { BRICK_PROPERTIES } from '../../../constants';
import { BrickType } from '../../../types';

export interface StepArcaneOrbsArgs {
  orbs: ArcaneOrb[];
  bricks: Brick[];
  timeFactor: number;
  magicDamageModifier: number;
  now: number;
  playerWisdom: number;
}

export interface StepArcaneOrbsResult {
  bricks: Brick[];
  orbs: ArcaneOrb[];
  newExplosions: Explosion[];
  bricksDestroyedThisTick: number;
  earnedXp: number;
  earnedScore: number;
  destroyedLightningBricks: number;
  bricksToTeleportIds: Set<number>;
}

export function stepArcaneOrbs(args: StepArcaneOrbsArgs): StepArcaneOrbsResult {
  const { orbs, bricks, timeFactor, magicDamageModifier, now, playerWisdom } = args;

  let newOrbs = orbs
    .map((orb) => ({
      ...orb,
      x: orb.x + (orb.vx || 0) * timeFactor,
      y: orb.y + orb.vy * timeFactor,
    }))
    .filter(
      (orb) =>
        orb.y + orb.radius * 2 > 0 &&
        orb.y < GAME_HEIGHT &&
        orb.x + orb.radius * 2 > 0 &&
        orb.x < GAME_WIDTH
    );

  let workingBricks = bricks.map((b) => ({ ...b }));
  const orbDamageMap = new Map<number, number>();

  for (const orb of newOrbs) {
    const orbDamage = orb.damage * magicDamageModifier;
    for (const brick of workingBricks) {
      if ((orbDamageMap.get(brick.id) || 0) >= brick.hp) continue;

      const orbCenterX = orb.x + orb.radius;
      const orbCenterY = orb.y + orb.radius;
      const brickCenterX = brick.x + brick.width / 2;
      const brickCenterY = brick.y + brick.height / 2;
      const dx = orbCenterX - brickCenterX;
      const dy = orbCenterY - brickCenterY;
      const combinedHalfWidths = orb.radius + brick.width / 2;
      const combinedHalfHeights = orb.radius + brick.height / 2;

      if (Math.abs(dx) < combinedHalfWidths && Math.abs(dy) < combinedHalfHeights) {
        if (brick.isClone) {
          orbDamageMap.set(brick.id, 1); // piercing vs clones
        } else {
          orbDamageMap.set(brick.id, (orbDamageMap.get(brick.id) || 0) + orbDamage);
        }
      }
    }
  }

  let newExplosions: Explosion[] = [];
  let bricksDestroyedThisTick = 0;
  let earnedXp = 0;
  let earnedScore = 0;
  let destroyedLightningBricks = 0;
  const bricksToTeleportIds = new Set<number>();

  if (orbDamageMap.size > 0) {
    workingBricks = workingBricks
      .map((brick) => {
        let damage = orbDamageMap.get(brick.id) || 0;
        if (damage <= 0) return brick;

        if (brick.shieldHp && brick.shieldHp > 0) {
          const shieldDamage = Math.min(damage, brick.shieldHp);
          brick.shieldHp -= shieldDamage;
          damage -= shieldDamage;
        }
        if (damage <= 0) return brick;

        const newHp = brick.hp - damage;
        if (newHp <= 0) {
          if (!brick.isClone) {
            const brickProps = BRICK_PROPERTIES[brick.type];
            earnedXp += brickProps.points;
            earnedScore += brickProps.points;
            const explosionRadius = 50 + playerWisdom * 2;
            if (brick.type === BrickType.Fire) {
              newExplosions.push({
                id: now + Math.random(),
                x: brick.x + brick.width / 2,
                y: brick.y + brick.height / 2,
                radius: explosionRadius,
                duration: 300,
                createdAt: now,
              });
            }
            if (brick.type === BrickType.Apprentice) bricksToTeleportIds.add(brick.id);
            if (brick.type === BrickType.Lightning) destroyedLightningBricks++;
          }
          bricksDestroyedThisTick++;
          return null;
        }
        return { ...brick, hp: newHp };
      })
      .filter((b): b is Brick => b !== null);
  }

  return {
    bricks: workingBricks,
    orbs: newOrbs,
    newExplosions,
    bricksDestroyedThisTick,
    earnedXp,
    earnedScore,
    destroyedLightningBricks,
    bricksToTeleportIds,
  };
}
