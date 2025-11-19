/**
 * World 20 (The Final Gate) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_20_SKILLS: Record<string, SkillNode> = {
    'absolutePower': {
        id: 'absolutePower',
        name: 'Absolute Power',
        description: (level) => `Gain ${level * 15}% to ALL stats. Your power knows no limits`,
        maxLevel: 5,
        cost: (level) => 10 + level * 2,
        dependencies: ['powerBoost', 'defenseBoost', 'agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'primordialForce': {
        id: 'primordialForce',
        name: 'Primordial Force',
        description: (level) => `Attacks deal ${20 + (level * 20)}% more damage. Ignore ${level * 15}% of enemy defenses`,
        maxLevel: 5,
        cost: (level) => 8 + level * 2,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 3 }
    },

    'eternalResilience': {
        id: 'eternalResilience',
        name: 'Eternal Resilience',
        description: (level) => `Take ${level * 12}% less damage. Regenerate ${level * 4}% max HP every 5s`,
        maxLevel: 5,
        cost: (level) => 8 + level * 2,
        dependencies: ['vitality', 'defenseBoost'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'finalJudgment': {
        id: 'finalJudgment',
        name: 'Final Judgment',
        description: (level) => `Active: Unleash ultimate power for ${6 + level}s. Triple all damage, become invincible, instant cooldowns. Cooldown: ${Math.max(120 - level * 20, 60)}s`,
        maxLevel: 3,
        cost: (level) => 15 + level * 3,
        dependencies: ['absolutePower', 'primordialForce', 'eternalResilience'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'transcendentMastery': {
        id: 'transcendentMastery',
        name: 'Transcendent Mastery',
        description: (level) => `Gain ${level * 5}% bonus to all stats for each skill at maximum level. Your mastery transcends mortal limits`,
        maxLevel: 5,
        cost: (level) => 8 + level * 3,
        dependencies: ['absolutePower'],
        type: SkillType.Passive,
        position: { row: 2, col: 2 }
    },

    'omegaStrike': {
        id: 'omegaStrike',
        name: 'Omega Strike',
        description: (level) => `Critical hits deal ${50 + (level * 30)}% bonus damage, ignore all armor, and have ${level * 15}% chance to instantly destroy weakened enemies (<${20 + level * 10}% HP)`,
        maxLevel: 4,
        cost: (level) => 9 + level * 2,
        dependencies: ['primordialForce'],
        type: SkillType.Triggered,
        position: { row: 4, col: 4 }
    },

    'ascensionAura': {
        id: 'ascensionAura',
        name: 'Ascension Aura',
        description: (level) => `Convert ${level * 15}% of damage taken into pure energy. At ${100 - (level * 10)} energy, release a devastating shockwave dealing ${level * 100} damage to all enemies`,
        maxLevel: 5,
        cost: (level) => 10 + level * 2,
        dependencies: ['eternalResilience', 'absolutePower'],
        type: SkillType.Passive,
        position: { row: 4, col: 0 }
    }
};

export const WORLD_20_SKILL_ENHANCEMENTS = {
    'allSkills': {
        description: 'In The Final Gate: All skills have 50% reduced cooldowns and increased potency'
    }
};
