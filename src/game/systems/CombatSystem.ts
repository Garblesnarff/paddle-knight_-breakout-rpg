import { Brick, Ball, PlayerStats } from '../../types/game.types';

/**
 * @class CombatSystem
 * @description Handles all combat-related calculations.
 */
export class CombatSystem {
  /**
   * Calculates the damage dealt to a brick when hit by a ball.
   * @param {Brick} brick - The brick being hit.
   * @param {Ball} ball - The ball that hit the brick.
   * @param {PlayerStats} playerStats - Current player statistics.
   * @returns {number} The calculated damage amount.
   */
  static calculateDamage(brick: Brick, ball: Ball, playerStats: PlayerStats): number {
    const baseDamage = ball.damage;
    const powerMultiplier = 1 + (playerStats.power * 0.1);
    return Math.floor(baseDamage * powerMultiplier);
  }
}
