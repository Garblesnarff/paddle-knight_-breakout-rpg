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
    }
};

export const WORLD_16_SKILL_ENHANCEMENTS = {
    'elementalInfusion': {
        description: 'In Infernal Abyss: Fire becomes hellfire, dealing true damage'
    }
};
