/**
 * World 19 (Chaos Dimension) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_19_SKILLS: Record<string, SkillNode> = {
    'chaosEmbrace': {
        id: 'chaosEmbrace',
        name: 'Chaos Embrace',
        description: (level) => `Gain random buff every ${8 - level}s: ${level * 30}% damage, ${level * 20}% speed, or ${level * 15} HP regen`,
        maxLevel: 3,
        cost: (level) => 6 + level,
        dependencies: ['luck'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'chaotic Mutation': {
        id: 'chaoticMutation',
        name: 'Chaotic Mutation',
        description: (level) => `${10 + (level * 10)}% chance on hit to mutate enemy, reducing all stats by ${level * 15}% for ${level + 3}s`,
        maxLevel: 4,
        cost: (level) => 5 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'entropyShield': {
        id: 'entropyShield',
        name: 'Entropy Shield',
        description: (level) => `Chaos protects you. ${level * 12}% of damage taken is redistributed randomly to enemies`,
        maxLevel: 4,
        cost: (level) => 5 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'realityBreak': {
        id: 'realityBreak',
        name: 'Reality Break',
        description: (level) => `Active: Shatter reality for ${5 + level}s. Random chaos effects: enemies teleport, explode, freeze, or take massive damage. Cooldown: ${Math.max(85 - level * 15, 50)}s`,
        maxLevel: 3,
        cost: (level) => 10 + level,
        dependencies: ['chaosEmbrace', 'chaoticMutation'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

export const WORLD_19_SKILL_ENHANCEMENTS = {
    'multiBall': {
        description: 'In Chaos Dimension: Balls randomly split, merge, or change properties'
    }
};
