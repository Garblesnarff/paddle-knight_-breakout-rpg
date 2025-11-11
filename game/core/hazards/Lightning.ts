/**
 * Lightning Chains resolution
 * Distributes lightning damage across random non-clone bricks based on trigger count.
 */
import { Brick } from '../../../types';
import { BRICK_PROPERTIES } from '../../../constants';

export interface StepLightningChainsArgs {
  bricks: Brick[];
  triggers: number;
  magicDamageModifier: number;
  playerWisdom: number;
}

export interface StepLightningChainsResult {
  bricks: Brick[];
  bricksDestroyedThisTick: number;
  earnedXp: number;
  earnedScore: number;
}

export function stepLightningChains(args: StepLightningChainsArgs): StepLightningChainsResult {
  const { bricks, triggers, magicDamageModifier, playerWisdom } = args;

  if (triggers <= 0) {
    return {
      bricks: bricks.map((b) => ({ ...b })),
      bricksDestroyedThisTick: 0,
      earnedXp: 0,
      earnedScore: 0,
    };
  }

  const lightningDamage = 2 * magicDamageModifier;
  const chainsPerStrike = 1 + Math.floor(playerWisdom / 10);
  const totalLightningChains = triggers * chainsPerStrike;

  let workingBricks = bricks.map((b) => ({ ...b }));
  const lightningDamageMap = new Map<number, number>();

  for (let i = 0; i < totalLightningChains; i++) {
    const availableTargets = workingBricks.filter((b) => !b.isClone);
    if (availableTargets.length > 0) {
      const target = availableTargets[Math.floor(Math.random() * availableTargets.length)];
      lightningDamageMap.set(target.id, (lightningDamageMap.get(target.id) || 0) + lightningDamage);
    }
  }

  let bricksDestroyedThisTick = 0;
  let earnedXp = 0;
  let earnedScore = 0;

  if (lightningDamageMap.size > 0) {
    workingBricks = workingBricks
      .map((brick) => {
        let damage = lightningDamageMap.get(brick.id) || 0;
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
