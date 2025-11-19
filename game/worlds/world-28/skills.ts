/**
 * World 28 (Dragon's Domain) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_28_SKILLS: Record<string, SkillNode> = {
    'dragonScales': {
        id: 'dragonScales',
        name: 'Dragon Scales',
        description: (level) => `Gain ${level * 10} defense and ${level * 30} max HP. Your armor is as tough as dragon scales`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['defenseBoost', 'vitality'],
        type: SkillType.Passive,
        position: { row: 3, col: 0 }
    },

    'wyrmsFury': {
        id: 'wyrmsFury',
        name: 'Wyrm\'s Fury',
        description: (level) => `Increase ball damage by ${15 + (level * 12)}%. Ball speed increases by ${level * 5}%`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['powerBoost', 'agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 4 }
    },

    'draconicResilience': {
        id: 'draconicResilience',
        name: 'Draconic Resilience',
        description: (level) => `Reduce all damage taken by ${level * 10}%. Gain ${level * 5}% lifesteal on ball hits`,
        maxLevel: 4,
        cost: (level) => 8 + level * 2,
        dependencies: ['dragonScales'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'dragonfireBreath': {
        id: 'dragonfireBreath',
        name: 'Dragonfire Breath',
        description: (level) => `Active: Unleash a wave of dragonfire dealing ${100 + (level * 50)}% ball damage to all bricks on screen. Burns for ${3 + level}s. Cooldown: ${Math.max(100 - level * 15, 55)}s`,
        maxLevel: 4,
        cost: (level) => 9 + level * 2,
        dependencies: ['wyrmsFury', 'draconicResilience'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'treasureHoard': {
        id: 'treasureHoard',
        name: 'Treasure Hoard',
        description: (level) => `Gain ${level * 2}% to all stats for every ${500} gold accumulated. Dragons grow stronger with their hoard (max ${level * 50}% bonus)`,
        maxLevel: 5,
        cost: (level) => 8 + level * 2,
        dependencies: ['dragonScales'],
        type: SkillType.Passive,
        position: { row: 4, col: 0 }
    },

    'wingBuffet': {
        id: 'wingBuffet',
        name: 'Wing Buffet',
        description: (level) => `When ball hits paddle, ${level * 15}% chance to unleash a wing gust that knocks back and stuns nearby enemies for ${1 + (level * 0.5)}s, dealing ${level * 25}% damage`,
        maxLevel: 4,
        cost: (level) => 7 + level * 2,
        dependencies: ['wyrmsFury'],
        type: SkillType.Triggered,
        position: { row: 4, col: 4 }
    },

    'ancientWisdom': {
        id: 'ancientWisdom',
        name: 'Ancient Wisdom',
        description: (level) => `Gain ${level * 15}% more experience from all sources. Dragons learn from eons of existence. Skill points awarded ${level * 10}% more frequently`,
        maxLevel: 5,
        cost: (level) => 6 + level * 2,
        dependencies: ['dragonScales', 'vitality'],
        type: SkillType.Passive,
        position: { row: 5, col: 0 }
    }
};

export const WORLD_28_SKILL_ENHANCEMENTS = {
    'allSkills': {
        description: 'In Dragon\'s Domain: Draconic power enhances all fire-based abilities by 30%'
    }
};
