/**
 * World 13 (Storm Peaks) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_13_SKILLS: Record<string, SkillNode> = {
    'stormRider': {
        id: 'stormRider',
        name: 'Storm Rider',
        description: (level) => `Ball speed increases by ${10 + (level * 10)}% during storms. Lightning strikes have ${level * 15}% chance on hit`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'windBarrier': {
        id: 'windBarrier',
        name: 'Wind Barrier',
        description: (level) => `Wind deflects ${20 + (level * 15)}% of projectiles. Deflected projectiles have ${level * 20}% chance to hit enemies`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'chainLightning': {
        id: 'chainLightning',
        name: 'Chain Lightning',
        description: (level) => `Lightning chains to ${1 + level} additional enemies, dealing ${70 + (level * 10)}% damage per chain`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'catastrophicStorm': {
        id: 'catastrophicStorm',
        name: 'Catastrophic Storm',
        description: (level) => `Active: Summon a massive storm for ${4 + level}s. Lightning strikes random enemies, winds push them around. Cooldown: ${Math.max(65 - level * 10, 40)}s`,
        maxLevel: 3,
        cost: (level) => 6 + level,
        dependencies: ['stormRider', 'chainLightning'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'thunderLord': {
        id: 'thunderLord',
        name: 'Thunder Lord',
        description: (level) => `When hit, ${25 + (level * 15)}% chance to strike attacker with lightning for ${30 + (level * 20)} damage. Lightning also arcs to ${level} nearby enemies`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['windBarrier'],
        type: SkillType.Triggered,
        position: { row: 4, col: 1 }
    },

    'atmosphericPressure': {
        id: 'atmosphericPressure',
        name: 'Atmospheric Pressure',
        description: (level) => `Heavy air pressure slows all enemies by ${15 + (level * 10)}%. Slow increases to ${30 + (level * 20)}% during storms`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['windBarrier', 'stormRider'],
        type: SkillType.Passive,
        position: { row: 4, col: 2 }
    },

    'staticDischarge': {
        id: 'staticDischarge',
        name: 'Static Discharge',
        description: (level) => `Build ${level * 2} static charge per hit. At 100 charge, release ${50 + (level * 30)} AoE lightning damage and reset`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    }
};

export const WORLD_13_SKILL_ENHANCEMENTS = {
    'multiBall': {
        description: 'In Storm Peaks: Each ball generates its own lightning storm'
    }
};
