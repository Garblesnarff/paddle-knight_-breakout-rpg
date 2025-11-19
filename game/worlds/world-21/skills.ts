/**
 * World 21 (Quantum Realm) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_21_SKILLS: Record<string, SkillNode> = {
    'quantumEntanglement': {
        id: 'quantumEntanglement',
        name: 'Quantum Entanglement',
        description: (level) => `Attacks have ${15 + (level * 10)}% chance to entangle enemies. Entangled enemies share ${level * 20}% of damage taken`,
        maxLevel: 4,
        cost: (level) => 6 + level * 2,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'superpositionState': {
        id: 'superpositionState',
        name: 'Superposition State',
        description: (level) => `Exist in multiple states simultaneously. ${level * 15}% chance to dodge attacks and deal double damage`,
        maxLevel: 4,
        cost: (level) => 6 + level * 2,
        dependencies: ['agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'uncertaintyPrinciple': {
        id: 'uncertaintyPrinciple',
        name: 'Uncertainty Principle',
        description: (level) => `Enemy positions become uncertain. ${level * 12}% chance enemies hit by ball teleport randomly, taking ${level * 25}% more damage`,
        maxLevel: 3,
        cost: (level) => 5 + level * 2,
        dependencies: ['luck'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'waveParticleDuality': {
        id: 'waveParticleDuality',
        name: 'Wave-Particle Duality',
        description: (level) => `Active: Transform ball between wave and particle states for ${6 + level}s. Wave passes through enemies dealing ${40 + (level * 20)}% damage. Particle deals ${level * 50}% bonus damage. Cooldown: ${Math.max(90 - level * 15, 45)}s`,
        maxLevel: 4,
        cost: (level) => 10 + level * 2,
        dependencies: ['quantumEntanglement', 'superpositionState'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'quantumCollapse': {
        id: 'quantumCollapse',
        name: 'Quantum Collapse',
        description: (level) => `Enemies below ${25 + (level * 10)}% health have ${20 + (level * 15)}% chance to instantly collapse when observed (hit by ball), dealing ${level * 30}% of their remaining HP as area damage`,
        maxLevel: 4,
        cost: (level) => 7 + level * 2,
        dependencies: ['quantumEntanglement', 'uncertaintyPrinciple'],
        type: SkillType.Triggered,
        position: { row: 4, col: 2 }
    },

    'observerEffect': {
        id: 'observerEffect',
        name: 'Observer Effect',
        description: (level) => `Enemies within ${150 + (level * 50)}px of the paddle are observed, reducing their damage by ${level * 12}% and defense by ${level * 10}%. Observed enemies glow faintly`,
        maxLevel: 5,
        cost: (level) => 6 + level * 2,
        dependencies: ['superpositionState'],
        type: SkillType.Passive,
        position: { row: 2, col: 2 }
    },

    'quantumTunneling': {
        id: 'quantumTunneling',
        name: 'Quantum Tunneling',
        description: (level) => `Active: Ball tunnels through quantum space for ${3 + level}s, phasing through all bricks and enemies while dealing ${60 + (level * 30)}% damage per pass. Cooldown: ${Math.max(75 - level * 12, 45)}s`,
        maxLevel: 4,
        cost: (level) => 10 + level * 2,
        dependencies: ['waveParticleDuality', 'uncertaintyPrinciple'],
        type: SkillType.Active,
        position: { row: 6, col: 1 }
    }
};

export const WORLD_21_SKILL_ENHANCEMENTS = {
    'ballPhysics': {
        description: 'In Quantum Realm: Ball exhibits quantum tunneling, occasionally passing through bricks'
    }
};
