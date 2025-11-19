/**
 * World 17 (Neon Metropolis) Specific Skills
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD_17_SKILLS: Record<string, SkillNode> = {
    'techUpgrade': {
        id: 'techUpgrade',
        name: 'Tech Upgrade',
        description: (level) => `Gain ${level * 10}% bonus to all stats. Mechanical enemies drop ${level * 15}% more tech parts`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['ingenuity'],
        type: SkillType.Passive,
        position: { row: 3, col: 2 }
    },

    'nanoBots': {
        id: 'nanoBots',
        name: 'Nano Bots',
        description: (level) => `Regenerate ${level * 3} HP/s. Nanobots repair ${level * 5}% max HP when out of combat for 3s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['vitality'],
        type: SkillType.Passive,
        position: { row: 4, col: 1 }
    },

    'cyberAttack': {
        id: 'cyberAttack',
        name: 'Cyber Attack',
        description: (level) => `${15 + (level * 10)}% chance to hack enemies, disabling their abilities for ${2 + level}s and dealing ${level * 15} damage`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['wisdom'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },

    'systemOverload': {
        id: 'systemOverload',
        name: 'System Overload',
        description: (level) => `Active: Overload all electronic enemies for ${4 + level}s, dealing ${25 + (level * 20)} damage/s and causing chain reactions. Cooldown: ${Math.max(70 - level * 10, 45)}s`,
        maxLevel: 3,
        cost: (level) => 7 + level,
        dependencies: ['techUpgrade', 'cyberAttack'],
        type: SkillType.Active,
        position: { row: 5, col: 2 }
    },

    'digitalGhost': {
        id: 'digitalGhost',
        name: 'Digital Ghost',
        description: (level) => `Create ${level} digital copies of yourself every ${10 - level * 2}s. Each copy attacks independently for ${30 + (level * 15)}% damage for ${4 + level}s`,
        maxLevel: 3,
        cost: (level) => 5 + level,
        dependencies: ['techUpgrade', 'nanoBots'],
        type: SkillType.Passive,
        position: { row: 4, col: 2 }
    },

    'empPulse': {
        id: 'empPulse',
        name: 'EMP Pulse',
        description: (level) => `Active: Emit electromagnetic pulse, disabling all electronics for ${3 + level}s and dealing ${35 + (level * 25)} damage. ${level * 20}% to destroy projectiles. Cooldown: ${Math.max(55 - level * 5, 40)}s`,
        maxLevel: 3,
        cost: (level) => 6 + level,
        dependencies: ['cyberAttack'],
        type: SkillType.Active,
        position: { row: 4, col: 3 }
    },

    'neuralLink': {
        id: 'neuralLink',
        name: 'Neural Link',
        description: (level) => `Link to enemies' neural networks. Gain ${level * 10}% dodge chance and see attack patterns ${0.5 + (level * 0.3)}s in advance`,
        maxLevel: 4,
        cost: (level) => 4 + level,
        dependencies: ['agility'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    }
};

export const WORLD_17_SKILL_ENHANCEMENTS = {
    'overclockSkill': {
        description: 'In Neon Metropolis: Overclock also hacks enemies and disables their systems'
    }
};
