/**
 * World 3 (Bio-Forge Nexus) Specific Skills
 * 
 * These skills are unlocked or enhanced when playing in World 3
 */

import { SkillNode, SkillType } from '../../../types';

export const WORLD3_SKILLS: Record<string, SkillNode> = {
    // Defensive skills against Bio-Forge mechanics
    'systemPurge': {
        id: 'systemPurge',
        name: 'System Purge',
        description: (level) => `Instantly removes all debuffs and grants immunity for ${2 + level}s. Cooldown: ${Math.max(15 - level, 10)}s`,
        maxLevel: 5,
        cost: (level) => 3 + level,
        dependencies: ['arcaneIntellect'],
        type: SkillType.Active,
        position: { row: 4, col: 2 }
    },
    
    'adaptiveShielding': {
        id: 'adaptiveShielding',
        name: 'Adaptive Shielding',
        description: (level) => `${10 + (level * 5)}% chance to resist debuffs. Reduces environmental hazard effects by ${level * 10}%`,
        maxLevel: 3,
        cost: (level) => 2 + level,
        dependencies: ['defenseBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 1 }
    },
    
    'technoDisruption': {
        id: 'technoDisruption',
        name: 'Techno Disruption',
        description: (level) => `Ball collisions have ${5 + (level * 5)}% chance to disable enemy special abilities for 3s`,
        maxLevel: 4,
        cost: (level) => 2 + level,
        dependencies: ['powerBoost'],
        type: SkillType.Passive,
        position: { row: 3, col: 3 }
    },
    
    'overdrive': {
        id: 'overdrive',
        name: 'Overdrive Protocol',
        description: (level) => `When below 25% HP, all abilities cooldown ${level * 15}% faster and dodge chance +${level * 10}%`,
        maxLevel: 3,
        cost: (level) => 4 + level,
        dependencies: ['systemPurge', 'technoDisruption'],
        type: SkillType.Passive,
        position: { row: 5, col: 2 }
    }
};

// Skills that get enhanced effects in World 3
export const WORLD3_SKILL_ENHANCEMENTS = {
    'arcaneOrb': {
        description: 'In Bio-Forge Nexus: Orbs can disrupt replication fields and cleanse overgrowth zones'
    },
    'timeWarp': {
        description: 'In Bio-Forge Nexus: Also resets enemy spawn cooldowns and removes environmental hazards'
    },
    'barrier': {
        description: 'In Bio-Forge Nexus: Provides immunity to skill-disabling effects while active'
    }
};