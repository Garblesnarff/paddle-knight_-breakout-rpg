/**
 * World 7 (Volcanic Forge) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_7_SKILLS: Record<string, SkillNode> = {
    'burningSoul': {
        id: 'burningSoul',
        name: 'Burning Soul',
        description: (level) => `Deal ${5 + (level * 3)}% of enemy max HP as burn damage over 3s on hit`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'moltenArmor': {
        id: 'moltenArmor',
        name: 'Molten Armor',
        description: (level) => `Reduce fire damage by ${20 + (level * 15)}%. Attackers take ${level * 5} burn damage`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'pyroclasticSurge': {
        id: 'pyroclasticSurge',
        name: 'Pyroclastic Surge',
        description: (level) => `Every ${5 - level} hits triggers an explosion dealing ${15 + (level * 10)} AoE damage`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['burningSoul'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'eruptionStrike': {
        id: 'eruptionStrike',
        name: 'Eruption Strike',
        description: (level) => `Active: Unleash volcanic fury for ${4 + level}s. All attacks deal ${50 + (level * 25)}% bonus fire damage. Cooldown: ${Math.max(50 - level * 5, 30)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['burningSoul', 'moltenArmor'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

export const WORLD_7_SKILL_ENHANCEMENTS = {
    'elementalInfusion': {
        description: 'In Volcanic Forge: Fire infusion lasts 50% longer and deals increased damage'
    }
};
