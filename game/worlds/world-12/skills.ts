/**
 * World 12 (Desert Tombs) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_12_SKILLS: Record<string, SkillNode> = {
    'sandstorm': {
        id: 'sandstorm',
        name: 'Sandstorm',
        description: (level) => `Hits create sand clouds reducing enemy accuracy by ${15 + (level * 10)}% for ${level + 2}s`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'ancientCurse': {
        id: 'ancientCurse',
        name: 'Ancient Curse',
        description: (level) => `Enemies killed have ${20 + (level * 15)}% chance to rise as weak allies for ${level * 3}s`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['wisdom'],
        type: SkillType.Passive,
        position: { row: 4, col: 2 }
    },

    'mirageCloak': {
        id: 'mirageCloak',
        name: 'Mirage Cloak',
        description: (level) => `${15 + (level * 10)}% chance to dodge attacks. Creates ${level} decoy on dodge`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'pharaohsJudgment': {
        id: 'pharaohsJudgment',
        name: "Pharaoh's Judgment",
        description: (level) => `Active: Summon ancient power to curse all enemies, reducing their HP by ${15 + (level * 10)}% and speed by 30%. Cooldown: ${Math.max(70 - level * 10, 45)}s`,
        maxLevel: 3,
        cost: (level) => 6 + level,
        dependencies: ['sandstorm', 'ancientCurse'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'scarabSwarm': {
        id: 'scarabSwarm',
        name: 'Scarab Swarm',
        description: (level) => `Killing enemies summons ${level} scarabs that seek other enemies, dealing ${15 + (level * 10)} damage each`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['ancientCurse'],
        type: SkillType.Triggered,
        position: { row: 5, col: 3 }
    },

    'desertMirage': {
        id: 'desertMirage',
        name: 'Desert Mirage',
        description: (level) => `Create ${level} illusory duplicates that confuse enemies. Each duplicate has ${20 + (level * 15)}% chance to dodge attacks`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['mirageCloak'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'tombGuardian': {
        id: 'tombGuardian',
        name: 'Tomb Guardian',
        description: (level) => `Active: Summon an ancient guardian for ${8 + (level * 2)}s. Guardian has ${100 + (level * 50)} HP and taunts enemies. Cooldown: ${Math.max(55 - level * 5, 40)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['sandstorm', 'mirageCloak'],
        type: SkillType.Active,
        position: { row: 5, col: 1 }
    }
};

export const WORLD_12_SKILL_ENHANCEMENTS = {
    'barrier': {
        description: 'In Desert Tombs: Barrier creates a sandstorm that blinds attackers'
    }
};
