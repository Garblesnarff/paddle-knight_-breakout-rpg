/**
 * World 30 (The Absolute End) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_30_SKILLS: Record<string, SkillNode> = {
    'omegaStrike': {
        id: 'omegaStrike',
        name: 'Omega Strike',
        description: (level) => `Every ${Math.max(10 - level, 5)}th attack becomes an Omega Strike dealing ${200 + (level * 100)}% damage and piercing all targets`,
        maxLevel: 5,
        cost: (level) => 10 + level * 3,
        dependencies: ['powerBoost', 'ballDamageBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'alphaDominance': {
        id: 'alphaDominance',
        name: 'Alpha Dominance',
        description: (level) => `Start each stage with ${level * 25}% power and defense. Gain ${level * 5}% all stats for each brick destroyed`,
        maxLevel: 4,
        cost: (level) => 9 + level * 2,
        dependencies: ['powerBoost', 'defenseBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'infinitePower': {
        id: 'infinitePower',
        name: 'Infinite Power',
        description: (level) => `Ball speed and damage increase infinitely. Gain ${level * 3}% damage and ${level}% speed every 2s (max ${level * 10} stacks)`,
        maxLevel: 5,
        cost: (level) => 10 + level * 2,
        dependencies: ['agility', 'powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'perfectTranscendence': {
        id: 'perfectTranscendence',
        name: 'Perfect Transcendence',
        description: (level) => `Active: Achieve perfect form for ${5 + level}s. Become invincible, ${300 + (level * 100)}% damage, attacks hit all enemies. Cooldown: ${Math.max(150 - level * 25, 90)}s`,
        maxLevel: 3,
        cost: (level) => 15 + level * 5,
        dependencies: ['omegaStrike', 'alphaDominance', 'infinitePower'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'eternalRecursion': {
        id: 'eternalRecursion',
        name: 'Eternal Recursion',
        description: (level) => `When you would die, instead revive with ${level * 25}% HP and gain ${level * 50}% damage for ${10 + (level * 5)}s. Can occur once every ${Math.max(200 - level * 30, 100)}s`,
        maxLevel: 4,
        cost: (level) => 12 + level * 3,
        dependencies: ['alphaDominance'],
        type: SkillType.Triggered,
        position: { row: 5, col: 0 }
    },

    'cosmicAnnihilation': {
        id: 'cosmicAnnihilation',
        name: 'Cosmic Annihilation',
        description: (level) => `Overkill damage chains to nearby enemies at ${50 + (level * 15)}% effectiveness. Destroyed enemies create shockwaves dealing ${level * 30}% AOE damage`,
        maxLevel: 5,
        cost: (level) => 9 + level * 2,
        dependencies: ['omegaStrike'],
        type: SkillType.Passive,
        position: { row: 4, col: 4 }
    },

    'singularity': {
        id: 'singularity',
        name: 'Singularity',
        description: (level) => `Active: Create a singularity that pulls all enemies toward center for ${3 + level}s, dealing ${75 + (level * 35)}% damage per second. Upon collapse, deals ${200 + (level * 100)}% damage. Cooldown: ${Math.max(120 - level * 20, 70)}s`,
        maxLevel: 3,
        cost: (level) => 13 + level * 3,
        dependencies: ['infinitePower', 'cosmicAnnihilation'],
        type: SkillType.Active,
        position: { row: 6, col: 3 }
    }
};

export const WORLD_30_SKILL_ENHANCEMENTS = {
    'allSkills': {
        description: 'In The Absolute End: All skills transcend mortal limits and reach ultimate power'
    }
};
