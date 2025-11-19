/**
 * World 11 (Frost Citadel) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_11_SKILLS: Record<string, SkillNode> = {
    'frostbite': {
        id: 'frostbite',
        name: 'Frostbite',
        description: (level) => `Hits slow enemies by ${15 + (level * 10)}% for ${2 + level}s. Slowed enemies take ${level * 5}% more damage`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'iceArmor': {
        id: 'iceArmor',
        name: 'Ice Armor',
        description: (level) => `Gain ${15 + (level * 10)} shield that regenerates ${level * 3} per second when not taking damage`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'permafrost': {
        id: 'permafrost',
        name: 'Permafrost',
        description: (level) => `Frozen enemies take ${level * 15}% more damage and shatter on kill, damaging nearby enemies`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['frostbite'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'absoluteZero': {
        id: 'absoluteZero',
        name: 'Absolute Zero',
        description: (level) => `Active: Freeze all enemies for ${2 + level}s. Frozen enemies are immobile and take ${30 + (level * 20)}% more damage. Cooldown: ${Math.max(60 - level * 5, 40)}s`,
        maxLevel: 3,
        cost: (level) => 6 + level,
        dependencies: ['frostbite', 'iceArmor'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

export const WORLD_11_SKILL_ENHANCEMENTS = {
    'elementalInfusion': {
        description: 'In Frost Citadel: Ice infusion creates freezing zones'
    }
};
