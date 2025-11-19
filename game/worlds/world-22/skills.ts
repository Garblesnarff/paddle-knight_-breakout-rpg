/**
 * World 22 (Ancient Ruins) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_22_SKILLS: Record<string, SkillNode> = {
    'pharaohsCurse': {
        id: 'pharaohsCurse',
        name: "Pharaoh's Curse",
        description: (level) => `Enemies hit have ${10 + (level * 10)}% chance to be cursed for ${3 + level}s, taking ${level * 15}% more damage and moving ${level * 10}% slower`,
        maxLevel: 4,
        cost: (level) => 6 + level * 2,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'hieroglyphicWard': {
        id: 'hieroglyphicWard',
        name: 'Hieroglyphic Ward',
        description: (level) => `Ancient symbols protect you. Take ${level * 10}% less damage. When hit, ${level * 8}% chance to reflect ${level * 30}% damage back`,
        maxLevel: 5,
        cost: (level) => 6 + level * 2,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'tombGuardian': {
        id: 'tombGuardian',
        name: 'Tomb Guardian',
        description: (level) => `Summon spectral guardians. ${level * 12}% chance on brick destroy to spawn a guardian that attacks enemies for ${level * 20} damage`,
        maxLevel: 3,
        cost: (level) => 5 + level * 2,
        dependencies: ['vitality'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'resurrectionRite': {
        id: 'resurrectionRite',
        name: 'Resurrection Rite',
        description: (level) => `Active: Perform ancient resurrection ritual for ${4 + level}s. Restore ${15 + (level * 10)}% max HP, revive destroyed bricks as allies dealing ${level * 40}% damage to enemies, gain ${level * 20}% damage boost. Cooldown: ${Math.max(100 - level * 15, 55)}s`,
        maxLevel: 4,
        cost: (level) => 10 + level * 2,
        dependencies: ['pharaohsCurse', 'tombGuardian'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'sandstormFury': {
        id: 'sandstormFury',
        name: 'Sandstorm Fury',
        description: (level) => `Active: Summon a raging sandstorm for ${5 + level}s. Blinds enemies (${level * 20}% miss chance), deals ${20 + (level * 15)} damage/s, and slows by ${30 + (level * 10)}%. Cooldown: ${Math.max(80 - level * 12, 50)}s`,
        maxLevel: 4,
        cost: (level) => 8 + level * 2,
        dependencies: ['hieroglyphicWard'],
        type: SkillType.Active,
        position: { row: 4, col: 0 }
    },

    'scarabSwarm': {
        id: 'scarabSwarm',
        name: 'Scarab Swarm',
        description: (level) => `When bricks are destroyed, ${15 + (level * 12)}% chance to spawn ${level} scarab beetles that seek enemies, each dealing ${25 + (level * 15)} damage and reducing enemy attack by ${level * 5}% for 4s`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['tombGuardian'],
        type: SkillType.Triggered,
        position: { row: 4, col: 2 }
    },

    'anubisJudgment': {
        id: 'anubisJudgment',
        name: "Anubis's Judgment",
        description: (level) => `Enemies below ${30 + (level * 10)}% HP are marked for judgment. Deal ${25 + (level * 20)}% bonus damage to marked enemies. Killing marked enemies restores ${5 + level * 3} HP`,
        maxLevel: 5,
        cost: (level) => 6 + level * 2,
        dependencies: ['pharaohsCurse'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    }
};

export const WORLD_22_SKILL_ENHANCEMENTS = {
    'powerups': {
        description: 'In Ancient Ruins: Powerups last 30% longer and have enhanced golden effects'
    }
};
