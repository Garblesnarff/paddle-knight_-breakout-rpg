/**
 * World 9 (Abyssal Depths) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_9_SKILLS: Record<string, SkillNode> = {
    'tidalForce': {
        id: 'tidalForce',
        name: 'Tidal Force',
        description: (level) => `Ball creates waves that push enemies. ${10 + (level * 10)}% chance to stun for 1s`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'pressureAdapt': {
        id: 'pressureAdapt',
        name: 'Pressure Adapt',
        description: (level) => `Reduce movement penalties by ${20 + (level * 15)}%. Gain ${level * 5}% damage reduction`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'bioluminescence': {
        id: 'bioluminescence',
        name: 'Bioluminescence',
        description: (level) => `Light reveals hidden enemies and reduces their evasion by ${15 + (level * 10)}%`,
        maxLevel: 3,
        cost: (level) => 2 + level,
        dependencies: ['wisdom'],
        type: SkillType.Passive,
        position: { row: 4, col: 2 }
    },

    'maelstrom': {
        id: 'maelstrom',
        name: 'Maelstrom',
        description: (level) => `Active: Create a vortex that pulls and damages enemies for ${4 + level}s. Cooldown: ${Math.max(55 - level * 5, 35)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['tidalForce', 'pressureAdapt'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

export const WORLD_9_SKILL_ENHANCEMENTS = {
    'timeSlow': {
        description: 'In Abyssal Depths: Also creates pressure zones that crush enemies'
    }
};
