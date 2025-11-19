/**
 * World 27 (Spirit Realm) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_27_SKILLS: Record<string, SkillNode> = {
    'etherealForm': {
        id: 'etherealForm',
        name: 'Ethereal Form',
        description: (level) => `Take ${level * 8}% less damage from all sources. Your form shifts between dimensions`,
        maxLevel: 5,
        cost: (level) => 6 + level * 2,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'spiritChanneling': {
        id: 'spiritChanneling',
        name: 'Spirit Channeling',
        description: (level) => `Channel spectral energy to deal ${10 + (level * 15)}% more damage. Ball phases through ${Math.min(level, 3)} bricks`,
        maxLevel: 5,
        cost: (level) => 6 + level * 2,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'poltergeistFury': {
        id: 'poltergeistFury',
        name: 'Poltergeist Fury',
        description: (level) => `Active: Summon ${2 + level} spectral balls that phase through bricks for ${4 + level}s. Cooldown: ${Math.max(90 - level * 10, 50)}s`,
        maxLevel: 4,
        cost: (level) => 8 + level * 2,
        dependencies: ['spiritChanneling', 'etherealForm'],
        type: SkillType.Active,
        position: { row: 4, col: 2 }
    },

    'possessionResistance': {
        id: 'possessionResistance',
        name: 'Possession Resistance',
        description: (level) => `Gain ${level * 10}% resistance to all debuffs. Regenerate ${level * 3}% max HP every 6s`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['etherealForm', 'vitality'],
        type: SkillType.Passive,
        position: { row: 4, col: 0 }
    },

    'astralProjection': {
        id: 'astralProjection',
        name: 'Astral Projection',
        description: (level) => `Active: Project your spirit to attack from ${level + 2} positions simultaneously for ${3 + level}s. Each projection deals ${50 + (level * 15)}% damage. Cooldown: ${Math.max(70 - level * 10, 40)}s`,
        maxLevel: 4,
        cost: (level) => 10 + level * 2,
        dependencies: ['poltergeistFury'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'spectralChains': {
        id: 'spectralChains',
        name: 'Spectral Chains',
        description: (level) => `Hits have ${level * 10}% chance to bind enemies in ethereal chains, reducing their speed by ${level * 20}% and dealing ${level * 15}% damage per second for ${2 + level}s`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['spiritChanneling'],
        type: SkillType.Triggered,
        position: { row: 4, col: 4 }
    },

    'hauntingPresence': {
        id: 'hauntingPresence',
        name: 'Haunting Presence',
        description: (level) => `Emanate a ${level + 2} unit fear aura. Enemies in range take ${level * 10}% more damage and have ${level * 8}% reduced accuracy`,
        maxLevel: 4,
        cost: (level) => 8 + level * 2,
        dependencies: ['etherealForm', 'possessionResistance'],
        type: SkillType.Passive,
        position: { row: 5, col: 0 }
    }
};

export const WORLD_27_SKILL_ENHANCEMENTS = {
    'allSkills': {
        description: 'In the Spirit Realm: Ethereal energies enhance all spectral abilities by 25%'
    }
};
