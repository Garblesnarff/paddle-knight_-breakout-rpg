/**
 * World 5 (Shadow Realm) Specific Skills
 *
 * These skills are unlocked or enhanced when playing in World 5
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_5_SKILLS: Record<string, SkillNode> = {
    'umbralStrike': {
        id: 'umbralStrike',
        name: 'Umbral Strike',
        description: (level) => `Ball gains +${level * 8}% damage. Shadow-type enemies take ${level * 15}% additional damage from all sources.`,
        maxLevel: 4,
        cost: (level) => 1 + level,
        dependencies: [],
        type: SkillType.Passive,
        position: { row: 0, col: 2 }
    },

    'soulReaper': {
        id: 'soulReaper',
        name: 'Soul Reaper',
        description: (level) => `Destroying a brick restores ${level * 2} HP. Killing shadow enemies grants ${level * 5}% temporary damage boost for 5s.`,
        maxLevel: 3,
        cost: (level) => 2 + level,
        dependencies: ['umbralStrike'],
        type: SkillType.Passive,
        position: { row: 1, col: 2 }
    },

    'phantomBall': {
        id: 'phantomBall',
        name: 'Phantom Ball',
        description: (level) => `Active: Your next ball becomes invisible to enemies for ${2 + level}s and phases through ${level} bricks before dealing damage.`,
        maxLevel: 3,
        cost: (level) => 3 + level,
        dependencies: ['soulReaper'],
        type: SkillType.Active,
        position: { row: 2, col: 2 }
    },

    'shadowStep': {
        id: 'shadowStep',
        name: 'Shadow Step',
        description: (level) => `${10 + (level * 5)}% chance to become untargetable for 1s after taking damage. Cooldown: ${Math.max(8 - level, 4)}s`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'darkEmbrace': {
        id: 'darkEmbrace',
        name: 'Dark Embrace',
        description: (level) => `Absorb ${level * 5}% of damage dealt to enemies as HP. Effectiveness doubled against Shadow enemies`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['vitality'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'voidPierce': {
        id: 'voidPierce',
        name: 'Void Pierce',
        description: (level) => `Ball gains ${level * 15}% chance to ignore enemy defenses and deal true damage`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'nightfall': {
        id: 'nightfall',
        name: 'Nightfall',
        description: (level) => `Active: Reduce all enemy vision and accuracy by ${20 + (level * 10)}% for ${3 + level}s. Cooldown: ${Math.max(40 - level * 5, 25)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['shadowStep', 'voidPierce'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

// Skills that get enhanced effects in World 5
export const WORLD_5_SKILL_ENHANCEMENTS = {
    'barrier': {
        description: 'In Shadow Realm: Also grants stealth, making you untargetable'
    },
    'timeSlow': {
        description: 'In Shadow Realm: Doubles effectiveness against shadow enemies'
    }
};
