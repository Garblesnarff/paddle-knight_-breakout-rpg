/**
 * World 18 (Astral Plane) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_18_SKILLS: Record<string, SkillNode> = {
    'divineBlessing': {
        id: 'divineBlessing',
        name: 'Divine Blessing',
        description: (level) => `Gain ${level * 8}% damage reduction and ${level * 10}% increased healing. Immune to ${level * 20}% of debuffs`,
        maxLevel: 4,
        cost: (level) => 5 + level,
        dependencies: ['wisdom'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'ascension': {
        id: 'ascension',
        name: 'Ascension',
        description: (level) => `Every ${10 - level} seconds, transcend briefly to deal ${25 + (level * 20)}% more damage for ${level + 2}s`,
        maxLevel: 3,
        cost: (level) => 6 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'celestialWard': {
        id: 'celestialWard',
        name: 'Celestial Ward',
        description: (level) => `Summon celestial protection that blocks ${level} attacks every ${Math.max(15 - level * 2, 8)}s`,
        maxLevel: 4,
        cost: (level) => 5 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'rapture': {
        id: 'rapture',
        name: 'Rapture',
        description: (level) => `Active: Achieve enlightenment for ${5 + level}s. Deal double damage, take no damage, cleanse all debuffs. Cooldown: ${Math.max(100 - level * 15, 60)}s`,
        maxLevel: 3,
        cost: (level) => 9 + level,
        dependencies: ['divineBlessing', 'ascension'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'starfall': {
        id: 'starfall',
        name: 'Starfall',
        description: (level) => `Active: Call down ${2 + level} cosmic meteors that deal ${45 + (level * 30)} damage each and leave stellar fields dealing ${level * 10} damage/s. Cooldown: ${Math.max(65 - level * 8, 45)}s`,
        maxLevel: 3,
        cost: (level) => 6 + level,
        dependencies: ['celestialWard', 'divineBlessing'],
        type: SkillType.Active,
        position: { row: 4, col: 1 }
    },

    'cosmicInsight': {
        id: 'cosmicInsight',
        name: 'Cosmic Insight',
        description: (level) => `Channel cosmic wisdom to predict enemy movements. Gain ${15 + (level * 12)}% critical hit chance and crits deal ${level * 25}% more damage`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'stellarResonance': {
        id: 'stellarResonance',
        name: 'Stellar Resonance',
        description: (level) => `Every ${8 - level} attacks, harmonize with the cosmos to release ${60 + (level * 40)} burst damage to all nearby enemies and restore ${level * 5}% HP`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['ascension', 'celestialWard'],
        type: SkillType.Triggered,
        position: { row: 4, col: 2 }
    }
};

export const WORLD_18_SKILL_ENHANCEMENTS = {
    'barrier': {
        description: 'In Astral Plane: Barrier becomes divine light that heals you'
    }
};
