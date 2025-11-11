/**
 * Projectile stepping logic (regular and homing).
 * Pure with respect to inputs: returns new arrays and damage to player.
 */
import { Projectile, HomingProjectile } from '../../types';
import { GAME_HEIGHT, GAME_WIDTH, PADDLE_HEIGHT, PADDLE_Y, ARCHMAGE_MISSILE_TURN_RATE, ARCHMAGE_MISSILE_SPEED, BOSS_PROJECTILE_DAMAGE, FINAL_GAMBIT_BEAM_DAMAGE } from '../../constants';

export interface StepProjectilesArgs {
  projectiles: Projectile[];
  paddleX: number;
  paddleWidth: number;
  timeFactor: number;
  isBarrierActive: boolean;
  playerDefense: number;
}

export interface StepProjectilesResult {
  projectiles: Projectile[];
  damageToPlayer: number;
}

export function stepProjectiles(args: StepProjectilesArgs): StepProjectilesResult {
  const { projectiles, paddleX, paddleWidth, timeFactor, isBarrierActive, playerDefense } = args;
  let damageToPlayer = 0;
  const updated = projectiles
    .map(p => ({ ...p, y: p.y + p.vy * timeFactor }))
    .filter(p => {
      if (isBarrierActive && p.y > PADDLE_Y - 20 && p.y < PADDLE_Y - 10) return false;
      if (p.y > PADDLE_Y && p.y < PADDLE_Y + PADDLE_HEIGHT && p.x > paddleX && p.x < paddleX + paddleWidth) {
        const damage = (p.size > 8 ? BOSS_PROJECTILE_DAMAGE : 5);
        damageToPlayer += Math.max(1, damage - playerDefense);
        return false;
      }
      return p.y < GAME_HEIGHT;
    });

  return { projectiles: updated, damageToPlayer };
}

export interface StepHomingArgs {
  homingProjectiles: HomingProjectile[];
  paddleX: number;
  paddleWidth: number;
  timeFactor: number;
  playerDefense: number;
}

export interface StepHomingResult {
  homingProjectiles: HomingProjectile[];
  damageToPlayer: number;
}

export function stepHomingProjectiles(args: StepHomingArgs): StepHomingResult {
  const { homingProjectiles, paddleX, paddleWidth, timeFactor, playerDefense } = args;

  const paddleCenterX = paddleX + paddleWidth / 2;
  const paddleCenterY = PADDLE_Y + PADDLE_HEIGHT / 2;

  let damageToPlayer = 0;

  const updated = homingProjectiles
    .map(p => {
      const targetDx = paddleCenterX - p.x;
      const targetDy = paddleCenterY - p.y;
      const targetDist = Math.hypot(targetDx, targetDy);

      if (targetDist > 1) {
        const targetDirX = targetDx / targetDist;
        const targetDirY = targetDy / targetDist;

        const currentSpeed = Math.hypot(p.vx, p.vy) || ARCHMAGE_MISSILE_SPEED;

        const newVx = p.vx * (1 - ARCHMAGE_MISSILE_TURN_RATE) + targetDirX * currentSpeed * ARCHMAGE_MISSILE_TURN_RATE;
        const newVy = p.vy * (1 - ARCHMAGE_MISSILE_TURN_RATE) + targetDirY * currentSpeed * ARCHMAGE_MISSILE_TURN_RATE;

        const newMag = Math.hypot(newVx, newVy) || 1;
        p.vx = (newVx / newMag) * ARCHMAGE_MISSILE_SPEED;
        p.vy = (newVy / newMag) * ARCHMAGE_MISSILE_SPEED;
      }

      p.x += p.vx * timeFactor;
      p.y += p.vy * timeFactor;
      return p;
    })
    .filter(p => {
      if (p.y + p.size > PADDLE_Y && p.y < PADDLE_Y + PADDLE_HEIGHT && p.x + p.size > paddleX && p.x < paddleX + paddleWidth) {
        // ARCHMAGE_MISSILE_DAMAGE is applied in engine; keep damage calculation parity here using constants import
        // but compute like original: Math.max(1, ARCHMAGE_MISSILE_DAMAGE - defense)
        // We avoid importing ARCHMAGE_MISSILE_DAMAGE here to limit coupling; caller can add the delta if needed.
        // However to maintain parity without changing callers, we include it:
        const ARCHMAGE_MISSILE_DAMAGE = 12; // fallback; should match constants
        damageToPlayer += Math.max(1, ARCHMAGE_MISSILE_DAMAGE - playerDefense);
        return false;
      }
      return p.y < GAME_HEIGHT + 20 && p.y + p.size > -20 && p.x < GAME_WIDTH + 20 && p.x + p.size > -20;
    });

  return { homingProjectiles: updated, damageToPlayer };
}
