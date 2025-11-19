/**
 * World 16 (Infernal Abyss) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_16_SKILLS: Record<string, SkillNode> = {
    'hellfire': {
        id: 'hellfire',
        name: 'Hellfire',
        description: (level) => `Attacks deal ${10 + (level * 8)}% of damage as hellfire DoT over 5s. Hellfire ignores armor`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'demonic Pact': {
        id: 'demonicPact',
        name: 'Demonic Pact',
        description: (level) => `Sacrifice ${5 - level}% HP to gain ${20 + (level * 15)}% damage and lifesteal for ${level * 5}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['vitality'],
        type: SkillType.Active,
        position: { row: 4, col: 2 }
    },

    'infernalArmor': {
        id: 'infernalArmor',
        name: 'Infernal Armor',
        description: (level) => `Gain ${15 + (level * 12)} armor. Attackers take ${level * 8} fire damage per hit`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'apocalypse': {
        id: 'apocalypse',
        name: 'Apocalypse',
        description: (level) => `Active: Rain hellfire on all enemies for ${5 + level}s, dealing ${20 + (level * 15)} damage/s. Cooldown: ${Math.max(90 - level * 10, 60)}s`,
        maxLevel: 3,
        cost: (level) => 8 + level,
        dependencies: ['hellfire', 'infernalArmor'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'soulHarvest': {
        id: 'soulHarvest',
        name: 'Soul Harvest',
        description: (level) => `Collect souls from kills. Each soul grants ${level * 2}% damage (max ${level * 20} souls). Lose ${level * 5} souls when hit`,
        maxLevel: 4,
        cost: (level) => 5 + level,
        dependencies: ['hellfire'],
        type: SkillType.Triggered,
        position: { row: 4, col: 3 }
    },

    'brimstoneCascade': {
        id: 'brimstoneCascade',
        name: 'Brimstone Cascade',
        description: (level) => `Enemies killed by hellfire explode for ${40 + (level * 25)} AoE damage and leave molten ground that deals ${level * 8} damage/s for ${3 + level}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['vitality'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'demonSummon': {
        id: 'demonSummon',
        name: 'Demon Summon',
        description: (level) => `Active: Summon a ${level === 1 ? 'lesser' : level === 2 ? 'greater' : 'arch'} demon for ${8 + (level * 4)}s that deals ${15 + (level * 20)} damage/s. Cooldown: ${Math.max(60 - level * 8, 40)}s`,
        maxLevel: 3,
        cost: (level) => 6 + level,
        dependencies: ['demonicPact'],
        type: SkillType.Active,
        position: { row: 4, col: 1 }
    }
};

export const WORLD_16_SKILL_ENHANCEMENTS = {
    'elementalInfusion': {
        description: 'In Infernal Abyss: Fire becomes hellfire, dealing true damage'
    }
};
