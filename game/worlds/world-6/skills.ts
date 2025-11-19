/**
 * World 6 (Crystal Caverns) Specific Skills
 *
 * These skills are unlocked or enhanced when playing in World 6
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_6_SKILLS: Record<string, SkillNode> = {
    'crystalResonance': {
        id: 'crystalResonance',
        name: 'Crystal Resonance',
        description: (level) => `Each hit builds resonance. At max stacks, deal ${50 + (level * 25)}% bonus damage in an AoE. Stacks: ${3 + level}`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'prismShield': {
        id: 'prismShield',
        name: 'Prism Shield',
        description: (level) => `Gain a shield that absorbs ${20 + (level * 15)} damage. Reflects ${level * 10}% of absorbed damage back`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'gemHarvest': {
        id: 'gemHarvest',
        name: 'Gem Harvest',
        description: (level) => `Destroying crystal enemies has ${10 + (level * 10)}% chance to spawn bonus gold gems worth ${level * 5} gold`,
        maxLevel: 3,
        cost: (level) => 2 + level,
        dependencies: ['luck'],
        type: SkillType.Passive,
        position: { row: 4, col: 2 }
    },

    'diamondEdge': {
        id: 'diamondEdge',
        name: 'Diamond Edge',
        description: (level) => `Ball becomes unbreakable for ${2 + level}s and pierces through all enemies. Cooldown: ${Math.max(60 - level * 10, 35)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['crystalResonance', 'prismShield'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

export const WORLD_6_SKILL_ENHANCEMENTS = {
    'barrier': {
        description: 'In Crystal Caverns: Reflects 50% of projectile damage back to attackers'
    },
    'multiBall': {
        description: 'In Crystal Caverns: Each ball has chance to split on crystal enemy hits'
    }
};
