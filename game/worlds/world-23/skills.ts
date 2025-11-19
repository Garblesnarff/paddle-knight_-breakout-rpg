/**
 * World 23 (Plague Lands) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_23_SKILLS: Record<string, SkillNode> = {
    'plagueImmunity': {
        id: 'plagueImmunity',
        name: 'Plague Immunity',
        description: (level) => `Gain ${level * 15}% resistance to damage over time effects. Heal ${5 + level * 3} HP when destroying diseased enemies`,
        maxLevel: 4,
        cost: (level) => 3 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },

    'contagionStrike': {
        id: 'contagionStrike',
        name: 'Contagion Strike',
        description: (level) => `Ball hits spread disease to ${level + 1} nearby bricks, dealing ${10 + level * 8} damage over 3s`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'quarantineZone': {
        id: 'quarantineZone',
        name: 'Quarantine Zone',
        description: (level) => `Active: Create a zone that slows enemies by ${30 + level * 10}% and deals ${15 + level * 5} damage/s for ${4 + level}s. Cooldown: ${Math.max(60 - level * 5, 45)}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['plagueImmunity', 'contagionStrike'],
        type: SkillType.Active,
        position: { row: 4, col: 2 }
    },

    'plagueDoctorsMask': {
        id: 'plagueDoctorsMask',
        name: "Plague Doctor's Mask",
        description: (level) => `When hit, ${20 + level * 15}% chance to spread a disease cloud dealing ${20 + level * 10} damage to all enemies. Gain ${level * 2}% lifesteal`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['vitality'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'virulentEvolution': {
        id: 'virulentEvolution',
        name: 'Virulent Evolution',
        description: (level) => `Diseases mutate over ${3 - level}s, increasing damage by ${level * 15}% every second. Mutated diseases spread ${level * 25}% faster to nearby enemies`,
        maxLevel: 3,
        cost: (level) => 6 + level * 2,
        dependencies: ['contagionStrike'],
        type: SkillType.Passive,
        position: { row: 2, col: 3 }
    },

    'epidemicOutbreak': {
        id: 'epidemicOutbreak',
        name: 'Epidemic Outbreak',
        description: (level) => `When a diseased enemy dies, trigger an outbreak that spreads to all enemies within ${120 + (level * 30)}px, dealing ${30 + (level * 20)} damage and applying ${level + 2}s disease`,
        maxLevel: 4,
        cost: (level) => 8 + level * 2,
        dependencies: ['contagionStrike', 'quarantineZone'],
        type: SkillType.Triggered,
        position: { row: 5, col: 3 }
    },

    'toxicResilience': {
        id: 'toxicResilience',
        name: 'Toxic Resilience',
        description: (level) => `Convert ${level * 20}% of disease damage dealt to enemies into temporary shields (max ${50 + (level * 30)} shield). Shields decay at ${level * 2}/s when not gaining new shield`,
        maxLevel: 5,
        cost: (level) => 7 + level * 2,
        dependencies: ['plagueImmunity', 'plagueDoctorsMask'],
        type: SkillType.Passive,
        position: { row: 5, col: 1 }
    }
};

export const WORLD_23_SKILL_ENHANCEMENTS = {
    'barrier': {
        description: 'In Plague Lands: Barrier spreads disease to enemies that touch it'
    }
};
