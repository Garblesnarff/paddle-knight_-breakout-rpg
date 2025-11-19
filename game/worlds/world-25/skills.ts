/**
 * World 25 (Blood Moon) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_25_SKILLS: Record<string, SkillNode> = {
    'bloodHarvest': {
        id: 'bloodHarvest',
        name: 'Blood Harvest',
        description: (level) => `Gain ${level * 3}% lifesteal on all damage. Heal ${level * 2}% of damage dealt`,
        maxLevel: 5,
        cost: (level) => 8 + level * 2,
        dependencies: ['vitality'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'lycanthropicRage': {
        id: 'lycanthropicRage',
        name: 'Lycanthropic Rage',
        description: (level) => `When below ${50 - level * 5}% HP, gain ${level * 20}% attack speed and ${level * 15}% damage`,
        maxLevel: 4,
        cost: (level) => 7 + level * 2,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'soulReaping': {
        id: 'soulReaping',
        name: 'Soul Reaping',
        description: (level) => `Each enemy killed grants a soul charge. At ${10 - level} charges, next attack deals ${level * 50}% bonus damage and heals ${level * 10}% max HP`,
        maxLevel: 3,
        cost: (level) => 9 + level * 2,
        dependencies: ['bloodHarvest', 'lycanthropicRage'],
        type: SkillType.Passive,
        position: { row: 5, col: 2 }
    },

    'crimsonEclipse': {
        id: 'crimsonEclipse',
        name: 'Crimson Eclipse',
        description: (level) => `Active: Invoke the Blood Moon for ${5 + level}s. All attacks drain life, gain ${level * 25}% damage, become immune to death (cannot drop below 1 HP). Cooldown: ${Math.max(100 - level * 15, 55)}s`,
        maxLevel: 3,
        cost: (level) => 12 + level * 3,
        dependencies: ['soulReaping'],
        type: SkillType.Active,
        position: { row: 6, col: 2 }
    },

    'hemophage': {
        id: 'hemophage',
        name: 'Hemophage',
        description: (level) => `On enemy kill, unleash a blood explosion dealing ${level * 30}% ball damage to nearby bricks. Heal ${level * 5}% max HP per enemy hit`,
        maxLevel: 4,
        cost: (level) => 8 + level * 2,
        dependencies: ['bloodHarvest'],
        type: SkillType.Triggered,
        position: { row: 5, col: 0 }
    },

    'lunarFrenzy': {
        id: 'lunarFrenzy',
        name: 'Lunar Frenzy',
        description: (level) => `Gain ${level * 4}% attack speed for every ${10}% missing HP. At low health, become a relentless predator`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['lycanthropicRage'],
        type: SkillType.Passive,
        position: { row: 5, col: 4 }
    },

    'sanguinePact': {
        id: 'sanguinePact',
        name: 'Sanguine Pact',
        description: (level) => `Sacrifice ${level * 2}% max HP every 5s to gain ${level * 20}% damage and ${level * 10}% lifesteal. Blood fuels power`,
        maxLevel: 3,
        cost: (level) => 9 + level * 2,
        dependencies: ['soulReaping'],
        type: SkillType.Passive,
        position: { row: 6, col: 0 }
    }
};

export const WORLD_25_SKILL_ENHANCEMENTS = {
    'allSkills': {
        description: 'Under the Blood Moon: All healing effects increased by 50%, damage taken converted to healing at night'
    }
};
