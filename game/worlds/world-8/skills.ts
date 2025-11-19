/**
 * World 8 (Celestial Observatory) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_8_SKILLS: Record<string, SkillNode> = {
    'stellarGravity': {
        id: 'stellarGravity',
        name: 'Stellar Gravity',
        description: (level) => `Ball has ${15 + (level * 10)}% increased homing toward enemies and pulls them slightly`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'cosmicShield': {
        id: 'cosmicShield',
        name: 'Cosmic Shield',
        description: (level) => `Orbiting cosmic debris blocks ${level} projectile every ${Math.max(10 - level, 5)}s`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'supernovaBlast': {
        id: 'supernovaBlast',
        name: 'Supernova Blast',
        description: (level) => `When ball speed exceeds threshold, explosions deal ${20 + (level * 15)}% more damage in ${level * 20}% larger area`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'warpDrive': {
        id: 'warpDrive',
        name: 'Warp Drive',
        description: (level) => `Active: Ball teleports through enemies for ${3 + level}s, dealing damage on passage. Cooldown: ${Math.max(45 - level * 5, 30)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['stellarGravity', 'cosmicShield'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

export const WORLD_8_SKILL_ENHANCEMENTS = {
    'arcaneOrb': {
        description: 'In Celestial Observatory: Orbs orbit like planets and have gravitational pull'
    }
};
