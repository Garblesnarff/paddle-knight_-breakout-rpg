/**
 * Classic boss movement and projectile volleys.
 * Extracted from boss.ts to keep files focused and small.
 */
import { Brick, Projectile } from '../../../types';
import {
  GAME_WIDTH,
  BOSS_MOVE_SPEED,
  BOSS_ATTACK_COOLDOWN,
  BOSS_PROJECTILE_SPEED,
  BOSS_ENRAGE_THRESHOLD,
} from '../../../constants';
import { BRICK_PROPERTIES } from '../../../constants';
import { BrickType } from '../../../types';

export interface StepBossClassicArgs {
  bricks: Brick[];
  now: number;
  timeFactor: number;
}

export interface StepBossClassicResult {
  bricks: Brick[];
  projectiles: Projectile[];
}

export function stepBossClassic(args: StepBossClassicArgs): StepBossClassicResult {
  const { bricks, now, timeFactor } = args;

  let workingBricks = bricks.map((b) => ({ ...b }));
  let newProjectiles: Projectile[] = [];

  workingBricks = workingBricks.map((brick) => {
    if (brick.type !== BrickType.Boss || brick.hp <= 0) return brick;

    const isEnraged = brick.hp / brick.maxHp <= BOSS_ENRAGE_THRESHOLD;
    const currentMoveSpeed = BOSS_MOVE_SPEED * (isEnraged ? 1.75 : 1);
    const currentAttackCooldown = BOSS_ATTACK_COOLDOWN / (isEnraged ? 2 : 1);

    if (brick.vx) {
      brick.x += brick.vx * timeFactor;
      if (brick.x <= 0) {
        brick.x = 0;
        brick.vx = Math.abs(currentMoveSpeed);
      } else if (brick.x >= GAME_WIDTH - brick.width) {
        brick.x = GAME_WIDTH - brick.width;
        brick.vx = -Math.abs(currentMoveSpeed);
      }
    }
    if (brick.lastAttackTime && now > brick.lastAttackTime + currentAttackCooldown) {
      newProjectiles.push({ id: now + 1, x: brick.x + brick.width * 0.25, y: brick.y + brick.height, vy: BOSS_PROJECTILE_SPEED, size: 10 });
      newProjectiles.push({ id: now + 2, x: brick.x + brick.width * 0.5, y: brick.y + brick.height, vy: BOSS_PROJECTILE_SPEED, size: 10 });
      newProjectiles.push({ id: now + 3, x: brick.x + brick.width * 0.75, y: brick.y + brick.height, vy: BOSS_PROJECTILE_SPEED, size: 10 });
      brick.lastAttackTime = now;
    }

    return brick;
  });

  return { bricks: workingBricks, projectiles: newProjectiles };
}
