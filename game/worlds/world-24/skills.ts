/**
 * World 24 (Lightning Realm) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_24_SKILLS: Record<string, SkillNode> = {
    'chainLightning': {
        id: 'chainLightning',
        name: 'Chain Lightning',
        description: (level) => `Ball hits have ${20 + level * 15}% chance to chain to ${level + 1} nearby enemies for ${40 + level * 20}% damage`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'staticCharge': {
        id: 'staticCharge',
        name: 'Static Charge',
        description: (level) => `Every ${5 - level} hits, release a shock dealing ${25 + level * 15} damage to all enemies. Gain ${level * 5}% attack speed`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'conductiveArmor': {
        id: 'conductiveArmor',
        name: 'Conductive Armor',
        description: (level) => `When damaged, return ${20 + level * 15}% as lightning damage. Store up to ${level * 50} charge for increased ball speed`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'thunderstrike': {
        id: 'thunderstrike',
        name: 'Thunderstrike',
        description: (level) => `Active: Call down ${level + 2} lightning bolts dealing ${50 + level * 30} damage each to random enemies. Cooldown: ${Math.max(55 - level * 5, 40)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['chainLightning', 'conductiveArmor'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'overcharge': {
        id: 'overcharge',
        name: 'Overcharge',
        description: (level) => `Build ${level * 3} charge per hit (max ${100 + (level * 50)}). At max charge, next attack releases all energy dealing ${level * 80}% bonus damage and stunning enemies for ${1 + level * 0.5}s`,
        maxLevel: 5,
        cost: (level) => 6 + level * 2,
        dependencies: ['staticCharge'],
        type: SkillType.Passive,
        position: { row: 5, col: 4 }
    },

    'stormSurge': {
        id: 'stormSurge',
        name: 'Storm Surge',
        description: (level) => `Active: Become a living storm for ${4 + level}s. Chain lightning hits ${level + 2} additional targets, gain ${level * 15}% movement speed, and attacks can't miss. Cooldown: ${Math.max(70 - level * 10, 45)}s`,
        maxLevel: 4,
        cost: (level) => 9 + level * 2,
        dependencies: ['chainLightning', 'thunderstrike'],
        type: SkillType.Active,
        position: { row: 6, col: 3 }
    },

    'voltageAmplifier': {
        id: 'voltageAmplifier',
        name: 'Voltage Amplifier',
        description: (level) => `Each consecutive lightning effect (chain, shock, bolt) on the same enemy deals ${level * 12}% more damage (max ${level * 60}%). Resets ${2 - level * 0.3}s after no lightning hits`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['chainLightning', 'staticCharge'],
        type: SkillType.Triggered,
        position: { row: 2, col: 3 }
    }
};

export const WORLD_24_SKILL_ENHANCEMENTS = {
    'barrier': {
        description: 'In Lightning Realm: Barrier shocks enemies that touch it with chain lightning'
    }
};
