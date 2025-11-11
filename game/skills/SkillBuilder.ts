/**
 * Skill Builder - Factory Pattern for Skill Definitions
 *
 * Provides a fluent API for creating skill nodes with sensible defaults,
 * reducing boilerplate and duplication across skill definition files.
 *
 * @example
 * // Before:
 * 'powerBoost': {
 *   id: 'powerBoost',
 *   name: 'Power Boost',
 *   description: (level) => `Increases Power by ${level * 2}. Next: +2 Power.`,
 *   maxLevel: 5,
 *   cost: (level) => level + 1,
 *   dependencies: [],
 *   type: SkillType.Passive,
 *   position: { row: 0, col: 0 },
 * }
 *
 * // After:
 * 'powerBoost': SkillBuilder
 *   .passive('powerBoost', 'Power Boost', (level) => `Increases Power by ${level * 2}. Next: +2 Power.`)
 *   .at(0, 0)
 *   .build()
 */

import { SkillNode, SkillType } from '../../src/types';

type CostFunction = (level: number) => number;
type DescriptionFunction = (level: number) => string;

/**
 * Builder class for creating SkillNode objects with a fluent API
 */
export class SkillBuilder {
  private node: SkillNode;

  private constructor(
    id: string,
    name: string,
    description: DescriptionFunction,
    type: SkillType,
    defaultMaxLevel: number,
    defaultCost: CostFunction
  ) {
    this.node = {
      id,
      name,
      description,
      type,
      maxLevel: defaultMaxLevel,
      cost: defaultCost,
      dependencies: [],
      position: { row: 0, col: 0 },
    };
  }

  /**
   * Create a Passive skill
   * Defaults: maxLevel=5, cost=(level)=>level+1
   *
   * @example
   * SkillBuilder.passive('powerBoost', 'Power Boost',
   *   (level) => `+${level * 2} Power`)
   */
  static passive(
    id: string,
    name: string,
    description: DescriptionFunction
  ): SkillBuilder {
    return new SkillBuilder(
      id,
      name,
      description,
      SkillType.Passive,
      5, // Default max level for passives
      (level) => level + 1 // Default scaling cost
    );
  }

  /**
   * Create an Active skill
   * Defaults: maxLevel=1, cost=()=>3
   *
   * @example
   * SkillBuilder.active('multiball', 'Multi-Ball',
   *   () => 'Fire two extra balls')
   */
  static active(
    id: string,
    name: string,
    description: DescriptionFunction
  ): SkillBuilder {
    return new SkillBuilder(
      id,
      name,
      description,
      SkillType.Active,
      1, // Active skills are usually 1 level
      () => 3 // Fixed moderate cost
    );
  }

  /**
   * Create a Triggered skill (automatically activates on certain conditions)
   * Defaults: maxLevel=1, cost=()=>2
   *
   * @example
   * SkillBuilder.triggered('manaShield', 'Mana Shield',
   *   () => 'Block 50% damage with mana')
   */
  static triggered(
    id: string,
    name: string,
    description: DescriptionFunction
  ): SkillBuilder {
    return new SkillBuilder(
      id,
      name,
      description,
      SkillType.Triggered,
      1, // Triggered skills are usually 1 level
      () => 2 // Fixed lower cost than actives
    );
  }

  /**
   * Create an Ultimate skill (powerful, high-cost active)
   * Defaults: maxLevel=1, cost=()=>5
   *
   * @example
   * SkillBuilder.ultimate('timeWarp', 'Time Warp',
   *   () => 'Rewind balls by 2 seconds')
   */
  static ultimate(
    id: string,
    name: string,
    description: DescriptionFunction
  ): SkillBuilder {
    return new SkillBuilder(
      id,
      name,
      description,
      SkillType.Active,
      1, // Ultimate skills are 1 level
      () => 5 // High cost for ultimate abilities
    );
  }

  /**
   * Set the maximum level for this skill
   *
   * @example
   * .withMaxLevel(3)
   */
  withMaxLevel(maxLevel: number): SkillBuilder {
    this.node.maxLevel = maxLevel;
    return this;
  }

  /**
   * Set a fixed cost (same at all levels)
   *
   * @example
   * .withFixedCost(4)
   */
  withFixedCost(cost: number): SkillBuilder {
    this.node.cost = () => cost;
    return this;
  }

  /**
   * Set a custom cost function
   *
   * @example
   * .withCost((level) => level * 2)
   */
  withCost(costFn: CostFunction): SkillBuilder {
    this.node.cost = costFn;
    return this;
  }

  /**
   * Set skill dependencies (prerequisite skill IDs)
   *
   * @example
   * .requires('powerBoost')
   * .requires('powerBoost', 'defenseBoost')
   */
  requires(...skillIds: string[]): SkillBuilder {
    this.node.dependencies = skillIds;
    return this;
  }

  /**
   * Set the position in the skill tree grid
   *
   * @example
   * .at(0, 0) // row 0, column 0
   */
  at(row: number, col: number): SkillBuilder {
    this.node.position = { row, col };
    return this;
  }

  /**
   * Build and return the final SkillNode
   */
  build(): SkillNode {
    return this.node;
  }
}

/**
 * Convenience function for creating a record of skills
 * Automatically uses the skill ID as the record key
 *
 * @example
 * export const WORLD_1_SKILLS = createSkillRecord([
 *   SkillBuilder.passive('powerBoost', 'Power Boost', ...).at(0, 0).build(),
 *   SkillBuilder.passive('vitality', 'Vitality', ...).at(0, 2).build(),
 * ]);
 */
export function createSkillRecord(skills: SkillNode[]): Record<string, SkillNode> {
  return skills.reduce((acc, skill) => {
    acc[skill.id] = skill;
    return acc;
  }, {} as Record<string, SkillNode>);
}
