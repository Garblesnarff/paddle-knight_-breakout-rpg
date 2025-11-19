/**
 * World 29 (Multiverse Nexus) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_29_SKILLS: Record<string, SkillNode> = {
    'realityShift': {
        id: 'realityShift',
        name: 'Reality Shift',
        description: (level) => `${level * 15}% chance to phase through bricks without destroying them, then reappear for ${level * 20}% bonus damage`,
        maxLevel: 4,
        cost: (level) => 8 + level * 2,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'parallelExistence': {
        id: 'parallelExistence',
        name: 'Parallel Existence',
        description: (level) => `Create ${level} parallel copy of yourself. Each copy has ${50 + (level * 10)}% of your stats`,
        maxLevel: 3,
        cost: (level) => 10 + level * 2,
        dependencies: ['vitality', 'defenseBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'dimensionalBreach': {
        id: 'dimensionalBreach',
        name: 'Dimensional Breach',
        description: (level) => `Ball exists in ${level + 1} dimensions simultaneously. Each dimension deals ${25 + (level * 15)}% damage independently`,
        maxLevel: 4,
        cost: (level) => 9 + level * 2,
        dependencies: ['powerBoost', 'agility'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'convergencePoint': {
        id: 'convergencePoint',
        name: 'Convergence Point',
        description: (level) => `Active: All realities converge for ${4 + level}s. Deal ${100 + (level * 50)}% damage, attacks hit ${level + 2} times. Cooldown: ${Math.max(90 - level * 15, 60)}s`,
        maxLevel: 3,
        cost: (level) => 12 + level * 3,
        dependencies: ['realityShift', 'dimensionalBreach', 'parallelExistence'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'temporalEcho': {
        id: 'temporalEcho',
        name: 'Temporal Echo',
        description: (level) => `Every ${Math.max(6 - level, 3)}th attack echoes through time, repeating ${level} times from past trajectories. Each echo deals ${30 + (level * 15)}% damage`,
        maxLevel: 4,
        cost: (level) => 9 + level * 2,
        dependencies: ['realityShift'],
        type: SkillType.Triggered,
        position: { row: 4, col: 4 }
    },

    'quantumEntanglement': {
        id: 'quantumEntanglement',
        name: 'Quantum Entanglement',
        description: (level) => `When you have multiple balls, they become entangled. Hitting with one ball also triggers ${level * 20}% damage at other ball positions`,
        maxLevel: 5,
        cost: (level) => 8 + level * 2,
        dependencies: ['dimensionalBreach'],
        type: SkillType.Passive,
        position: { row: 5, col: 4 }
    },

    'paradoxEngine': {
        id: 'paradoxEngine',
        name: 'Paradox Engine',
        description: (level) => `Conflicting dimensional effects stack instead of cancel. Gain ${level * 8}% to all stats for each active dimensional skill. Reality bends to your will`,
        maxLevel: 4,
        cost: (level) => 10 + level * 2,
        dependencies: ['parallelExistence', 'dimensionalBreach'],
        type: SkillType.Passive,
        position: { row: 5, col: 0 }
    }
};

export const WORLD_29_SKILL_ENHANCEMENTS = {
    'allSkills': {
        description: 'In Multiverse Nexus: All skills have prismatic effects that shift through dimensions'
    }
};
