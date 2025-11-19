/**
 * World 15 (Ethereal Gardens) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_15_SKILLS: Record<string, SkillNode> = {
    'dreamWeave': {
        id: 'dreamWeave',
        name: 'Dream Weave',
        description: (level) => `Illusions confuse enemies, reducing their accuracy by ${20 + (level * 15)}% for ${3 + level}s`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['wisdom'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'etherealForm': {
        id: 'etherealForm',
        name: 'Ethereal Form',
        description: (level) => `${15 + (level * 10)}% chance to phase through attacks. While phased, gain ${level * 20}% movement speed`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'phantomStrike': {
        id: 'phantomStrike',
        name: 'Phantom Strike',
        description: (level) => `Attacks have ${10 + (level * 10)}% chance to create phantom copies that deal ${level * 25}% damage`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'lucidDream': {
        id: 'lucidDream',
        name: 'Lucid Dream',
        description: (level) => `Active: Enter dream state for ${4 + level}s. Take no damage, deal ${30 + (level * 20)}% more damage, create illusions. Cooldown: ${Math.max(80 - level * 10, 50)}s`,
        maxLevel: 3,
        cost: (level) => 7 + level,
        dependencies: ['dreamWeave', 'etherealForm'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

export const WORLD_15_SKILL_ENHANCEMENTS = {
    'barrier': {
        description: 'In Ethereal Gardens: Barrier creates illusory copies that confuse enemies'
    }
};
