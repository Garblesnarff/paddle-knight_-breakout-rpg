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
    },

    'crushingDepths': {
        id: 'crushingDepths',
        name: 'Crushing Depths',
        description: (level) => `Enemies take ${3 + (level * 2)} pressure damage/s, increasing by ${level}% every second (max ${50 + (level * 25)}%)`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['pressureAdapt'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'predatorsFrenzy': {
        id: 'predatorsFrenzy',
        name: "Predator's Frenzy",
        description: (level) => `Killing an enemy grants ${15 + (level * 10)}% attack speed for ${3 + level}s. Stacks up to ${level + 1} times`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['tidalForce'],
        type: SkillType.Triggered,
        position: { row: 4, col: 3 }
    },

    'sonarPulse': {
        id: 'sonarPulse',
        name: 'Sonar Pulse',
        description: (level) => `Active: Emit pulse revealing all enemies and stunning them for ${1 + (level * 0.5)}s within range. Cooldown: ${Math.max(40 - level * 5, 25)}s`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['bioluminescence'],
        type: SkillType.Active,
        position: { row: 5, col: 1 }
    }
};

export const WORLD_9_SKILL_ENHANCEMENTS = {
    'timeSlow': {
        description: 'In Abyssal Depths: Also creates pressure zones that crush enemies'
    }
};
