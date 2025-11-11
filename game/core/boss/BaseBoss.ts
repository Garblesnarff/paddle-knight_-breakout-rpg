/**
 * BaseBoss - Common boss logic and utilities
 *
 * This class extracts shared patterns from all boss implementations:
 * - Brick cloning and initialization
 * - Cooldown/timing checks
 * - Phase transition logic
 * - HP percentage calculations
 *
 * Each boss can use these helpers to reduce code duplication.
 */

import { Brick, BrickType } from '../../../types';

export class BaseBoss {
  /**
   * Clone bricks array to create working copy
   * Pattern: let workingBricks = bricks.map((b) => ({ ...b }))
   */
  static cloneBricks<T extends Brick>(bricks: T[]): T[] {
    return bricks.map((b) => ({ ...b }));
  }

  /**
   * Check if a cooldown is ready
   * Pattern: if (!lastTime || now > lastTime + cooldown)
   *
   * @param lastTime - Last time the action was performed (undefined if never)
   * @param cooldown - Cooldown duration in milliseconds
   * @param now - Current timestamp
   * @returns true if cooldown is ready
   */
  static isCooldownReady(
    lastTime: number | undefined,
    cooldown: number,
    now: number
  ): boolean {
    return !lastTime || now > lastTime + cooldown;
  }

  /**
   * Alternative cooldown check using subtraction
   * Pattern: if (!lastTime || (now - lastTime >= cooldown))
   *
   * @param lastTime - Last time the action was performed (undefined if never)
   * @param cooldown - Cooldown duration in milliseconds
   * @param now - Current timestamp
   * @returns true if cooldown is ready
   */
  static isCooldownReadySubtract(
    lastTime: number | undefined,
    cooldown: number,
    now: number
  ): boolean {
    return !lastTime || now - lastTime >= cooldown;
  }

  /**
   * Calculate HP percentage
   * Pattern: const hpPct = hp / maxHp
   *
   * @param brick - The brick to check
   * @returns HP percentage (0.0 to 1.0)
   */
  static getHpPercentage(brick: Brick): number {
    return brick.hp / brick.maxHp;
  }

  /**
   * Determine current phase based on HP thresholds
   * Phases are 1-indexed
   *
   * Example:
   *   thresholds = [0.66, 0.33] means:
   *   - Phase 1: hp > 66%
   *   - Phase 2: 33% < hp <= 66%
   *   - Phase 3: hp <= 33%
   *
   * @param brick - The boss brick
   * @param thresholds - HP percentage thresholds (descending order)
   * @returns Current phase number (1-indexed)
   */
  static getPhaseByThresholds(brick: Brick, thresholds: number[]): number {
    const hpPct = this.getHpPercentage(brick);

    for (let i = 0; i < thresholds.length; i++) {
      if (hpPct <= thresholds[i]) {
        return i + 2; // Phase 2, 3, 4, etc.
      }
    }

    return 1; // Phase 1 (above all thresholds)
  }

  /**
   * Check if boss is alive and of expected type
   * Pattern: if (brick.type !== BrickType.X || brick.hp <= 0)
   *
   * @param brick - The brick to check
   * @param expectedType - Expected boss type
   * @returns true if boss is alive and correct type
   */
  static isBossAlive(brick: Brick, expectedType: BrickType): boolean {
    return brick.type === expectedType && brick.hp > 0;
  }

  /**
   * Update phase on brick if it changed
   * Automatically handles phase transitions based on thresholds
   *
   * @param brick - The boss brick to update
   * @param thresholds - HP percentage thresholds (descending order)
   * @returns The new phase number
   */
  static updatePhase(brick: Brick, thresholds: number[]): number {
    const newPhase = this.getPhaseByThresholds(brick, thresholds);
    brick.phase = newPhase;
    return newPhase;
  }

  /**
   * Check if boss just transitioned to a new phase
   *
   * @param brick - The boss brick
   * @param targetPhase - The phase to check for
   * @param previousPhase - The previous phase (optional)
   * @returns true if just entered targetPhase
   */
  static justEnteredPhase(
    brick: Brick,
    targetPhase: number,
    previousPhase?: number
  ): boolean {
    if (previousPhase !== undefined) {
      return brick.phase === targetPhase && previousPhase === targetPhase - 1;
    }
    return brick.phase === targetPhase;
  }

  /**
   * Calculate enrage multiplier based on HP threshold
   * Pattern: const multiplier = hpPct <= threshold ? enragedValue : normalValue
   *
   * @param brick - The boss brick
   * @param threshold - HP percentage threshold for enrage
   * @param normalValue - Normal multiplier value
   * @param enragedValue - Enraged multiplier value
   * @returns Current multiplier
   */
  static getEnrageMultiplier(
    brick: Brick,
    threshold: number,
    normalValue: number,
    enragedValue: number
  ): number {
    const hpPct = this.getHpPercentage(brick);
    return hpPct <= threshold ? enragedValue : normalValue;
  }

  /**
   * Initialize timestamp if not set
   * Pattern: if (!brick.lastXTime) brick.lastXTime = now;
   *
   * @param brick - The brick to initialize
   * @param property - The property name to initialize
   * @param now - Current timestamp
   */
  static initializeTimestamp(
    brick: any,
    property: string,
    now: number
  ): void {
    if (!(property in brick) || brick[property] === undefined) {
      brick[property] = now;
    }
  }

  /**
   * Check if an HP threshold was just crossed
   * Useful for one-time triggers at specific HP percentages
   *
   * @param currentHp - Current HP
   * @param previousHp - Previous HP (before damage)
   * @param maxHp - Maximum HP
   * @param threshold - HP percentage threshold
   * @returns true if threshold was just crossed (going downward)
   */
  static didCrossThreshold(
    currentHp: number,
    previousHp: number,
    maxHp: number,
    threshold: number
  ): boolean {
    const currentPct = currentHp / maxHp;
    const previousPct = previousHp / maxHp;
    return previousPct > threshold && currentPct <= threshold;
  }
}
