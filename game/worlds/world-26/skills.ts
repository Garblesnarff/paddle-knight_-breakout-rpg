/**
 * World 26 (Machine Core) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_26_SKILLS: Record<string, SkillNode> = {
    'systemHack': {
        id: 'systemHack',
        name: 'System Hack',
        description: (level) => `Attacks have ${level * 8}% chance to bypass ${level * 20}% of enemy defenses and deal bonus damage`,
        maxLevel: 5,
        cost: (level) => 8 + level * 2,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'nanomachineSwarm': {
        id: 'nanomachineSwarm',
        name: 'Nanomachine Swarm',
        description: (level) => `Each hit spawns ${level} nanobots that deal ${level * 5}% weapon damage over 3s. Max ${level * 3} active swarms`,
        maxLevel: 4,
        cost: (level) => 9 + level * 2,
        dependencies: ['ballDamageBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'firewallBypass': {
        id: 'firewallBypass',
        name: 'Firewall Bypass',
        description: (level) => `Gain ${level * 10}% penetration against armored enemies. Deal ${level * 15}% bonus damage to Firewall and Encryption types`,
        maxLevel: 4,
        cost: (level) => 7 + level * 2,
        dependencies: ['systemHack', 'nanomachineSwarm'],
        type: SkillType.Passive,
        position: { row: 5, col: 2 }
    },

    'protocolOverride': {
        id: 'protocolOverride',
        name: 'Protocol Override',
        description: (level) => `Active: Override system protocols for ${4 + level}s. Attacks ignore all defenses, gain ${level * 30}% attack speed, and ${level * 25}% critical chance. Cooldown: ${Math.max(90 - level * 15, 45)}s`,
        maxLevel: 3,
        cost: (level) => 13 + level * 3,
        dependencies: ['firewallBypass'],
        type: SkillType.Active,
        position: { row: 6, col: 2 }
    },

    'quantumProcessing': {
        id: 'quantumProcessing',
        name: 'Quantum Processing',
        description: (level) => `Process ${level + 1} parallel computations. Each attack calculates ${level} additional trajectories that deal ${25 + (level * 10)}% damage`,
        maxLevel: 4,
        cost: (level) => 9 + level * 2,
        dependencies: ['systemHack'],
        type: SkillType.Passive,
        position: { row: 5, col: 4 }
    },

    'adaptiveAlgorithm': {
        id: 'adaptiveAlgorithm',
        name: 'Adaptive Algorithm',
        description: (level) => `Learn enemy patterns. Deal ${level * 5}% more damage to each enemy type you've hit, stacking up to ${level * 40}% per type`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['nanomachineSwarm'],
        type: SkillType.Passive,
        position: { row: 5, col: 0 }
    },

    'dataCorruption': {
        id: 'dataCorruption',
        name: 'Data Corruption',
        description: (level) => `Attacks have ${level * 12}% chance to corrupt enemy data, reducing their defense by ${level * 15}% and dealing ${level * 20}% DOT for 4s`,
        maxLevel: 4,
        cost: (level) => 8 + level * 2,
        dependencies: ['firewallBypass'],
        type: SkillType.Triggered,
        position: { row: 6, col: 0 }
    }
};

export const WORLD_26_SKILL_ENHANCEMENTS = {
    'allSkills': {
        description: 'In the Machine Core: All attacks have +25% armor penetration and abilities cooldown 30% faster'
    }
};
