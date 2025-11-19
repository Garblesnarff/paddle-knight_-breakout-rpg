/**
 * World 10 (Verdant Wilds) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_10_SKILLS: Record<string, SkillNode> = {
    'thornArmor': {
        id: 'thornArmor',
        name: 'Thorn Armor',
        description: (level) => `Attackers take ${10 + (level * 8)} damage. ${level * 10}% chance to root them for 2s`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'wildGrowth': {
        id: 'wildGrowth',
        name: 'Wild Growth',
        description: (level) => `Regenerate ${level * 2} HP every 5s. Gain ${level}% increased size and damage`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['vitality'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'poisonThorns': {
        id: 'poisonThorns',
        name: 'Poison Thorns',
        description: (level) => `Hits inflict poison dealing ${8 + (level * 5)} damage over 4s. Stacks up to ${level + 2} times`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'naturesFury': {
        id: 'naturesFury',
        name: "Nature's Fury",
        description: (level) => `Active: Summon ${level + 2} vine whips that attack enemies for ${5 + level}s. Cooldown: ${Math.max(50 - level * 5, 35)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['thornArmor', 'poisonThorns'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'photosynthesis': {
        id: 'photosynthesis',
        name: 'Photosynthesis',
        description: (level) => `Heal for ${8 + (level * 4)}% of damage dealt. Healing increased by ${level * 10}% at full health (converts to shield)`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['wildGrowth'],
        type: SkillType.Passive,
        position: { row: 5, col: 1 }
    },

    'entanglingRoots': {
        id: 'entanglingRoots',
        name: 'Entangling Roots',
        description: (level) => `${15 + (level * 10)}% chance on hit to root enemy for ${1.5 + (level * 0.5)}s. Rooted enemies take ${level * 10}% more damage`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['thornArmor'],
        type: SkillType.Triggered,
        position: { row: 4, col: 2 }
    },

    'sporeBloom': {
        id: 'sporeBloom',
        name: 'Spore Bloom',
        description: (level) => `Poisoned enemies spread ${level * 20}% of poison damage to nearby enemies. Creates toxic clouds on death`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['poisonThorns'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    }
};

export const WORLD_10_SKILL_ENHANCEMENTS = {
    'barrier': {
        description: 'In Verdant Wilds: Barrier is made of thorny vines that damage attackers'
    }
};
