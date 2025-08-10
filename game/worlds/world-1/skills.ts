import { SkillNode, SkillType } from '../../../types';

export const WORLD_1_SKILLS: Record<string, SkillNode> = {
    'powerBoost': {
        id: 'powerBoost',
        name: 'Power Boost',
        description: (level) => `Increases Power by ${level * 2}. Next: +2 Power.`,
        maxLevel: 5,
        cost: (level) => level + 1,
        dependencies: [],
        type: SkillType.Passive,
        position: { row: 0, col: 0 },
    },
    'vitalityBoost': {
        id: 'vitalityBoost',
        name: 'Vitality Boost',
        description: (level) => `Increases max HP by ${level * 20}. Next: +20 HP.`,
        maxLevel: 5,
        cost: (level) => level + 1,
        dependencies: [],
        type: SkillType.Passive,
        position: { row: 0, col: 2 },
    },
    'breakthrough': {
        id: 'breakthrough',
        name: 'Breakthrough',
        description: () => 'Ball pierces destroyed bricks, carrying remaining damage to the next target.',
        maxLevel: 1,
        cost: () => 3,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 1, col: 0 },
    },
    'defenseBoost': {
        id: 'defenseBoost',
        name: 'Defense Boost',
        description: (level) => `Increases Defense by ${level * 1}. Next: +1 Defense.`,
        maxLevel: 5,
        cost: (level) => level + 1,
        dependencies: ['vitalityBoost'],
        type: SkillType.Passive,
        position: { row: 1, col: 2 },
    },
     'multiBallUnlock': {
        id: 'multiBallUnlock',
        name: 'Unlock Multi-Ball',
        description: () => 'Unlocks the Multi-Ball active skill. Lets you fire two extra balls.',
        maxLevel: 1,
        cost: () => 2,
        dependencies: ['breakthrough'],
        type: SkillType.Active,
        position: { row: 2, col: 0 },
    },
};


