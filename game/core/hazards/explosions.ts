/**
 * Explosions AoE post-processing
 * Applies explosion damage to bricks and awards XP/score.
 */
import { Brick, Explosion } from '../../../types';
import { BRICK_PROPERTIES } from '../../../constants';

export interface StepExplosionsArgs {
  bricks: Brick[];
  explosions: Explosion[];
  magicDamageModifier: number;
}

export interface StepExplosionsResult {
  bricks: Brick[];
  bricksDestroyedThisTick: number;
  earnedXp: number;
  earnedScore: number;
}

export function stepExplosionsAoE(args: StepExplosionsArgs): StepExplosionsResult {
  const { bricks, explosions, magicDamageModifier } = args;
  const explosionDamage = 1 * magicDamageModifier;
  const explosionDamageMap = new Map<number, number>();

  let workingBricks = bricks.map((b) => ({ ...b }));
  let bricksDestroyedThisTick = 0;
  let earnedXp = 0;
  let earnedScore = 0;

  for (const explosion of explosions) {
    for (const brick of workingBricks) {
      if (brick.isClone) continue;
      const dist = Math.hypot(
        brick.x + brick.width / 2 - explosion.x,
        brick.y + brick.height / 2 - explosion.y
      );
      if (dist < explosion.radius + brick.width / 2) {
        explosionDamageMap.set(
          brick.id,
          (explosionDamageMap.get(brick.id) || 0) + explosionDamage
        );
      }
    }
  }

  if (explosionDamageMap.size > 0) {
    workingBricks = workingBricks
      .map((brick) => {
        let damage = explosionDamageMap.get(brick.id) || 0;
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
          }
          bricksDestroyedThisTick++;
          return null;
        }
        return { ...brick, hp: newHp };
      })
      .filter((b): b is Brick => b !== null);
  }

  return { bricks: workingBricks, bricksDestroyedThisTick, earnedXp, earnedScore };
}
