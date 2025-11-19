/**
 * World 14 (Void Nexus) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_14_SKILLS: Record<string, SkillNode> = {
    'voidMastery': {
        id: 'voidMastery',
        name: 'Void Mastery',
        description: (level) => `Deal ${15 + (level * 10)}% more damage to void enemies. ${level * 10}% chance to absorb their essence on kill`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'realityAnchor': {
        id: 'realityAnchor',
        name: 'Reality Anchor',
        description: (level) => `Immune to ${20 + (level * 20)}% of void effects. Reduce dimensional damage by ${level * 15}%`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'entropyHarvest': {
        id: 'entropyHarvest',
        name: 'Entropy Harvest',
        description: (level) => `Void enemy kills restore ${level * 3}% HP and ${level * 2}% of max skill cooldowns`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['wisdom'],
        type: SkillType.Passive,
        position: { row: 4, col: 2 }
    },

    'voidCollapse': {
        id: 'voidCollapse',
        name: 'Void Collapse',
        description: (level) => `Active: Collapse reality in a zone for ${3 + level}s. Enemies inside take ${25 + (level * 20)} damage/s and are pulled to center. Cooldown: ${Math.max(75 - level * 10, 50)}s`,
        maxLevel: 3,
        cost: (level) => 7 + level,
        dependencies: ['voidMastery', 'realityAnchor'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    }
};

export const WORLD_14_SKILL_ENHANCEMENTS = {
    'timeWarp': {
        description: 'In Void Nexus: Also tears rifts in spacetime that damage enemies'
    },
    'arcaneOrb': {
        description: 'In Void Nexus: Orbs become void energy that phases through reality'
    }
};
