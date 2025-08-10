/**
 * Player Debuff System
 * 
 * Manages temporary negative effects applied to the player including:
 * - Skill disabling
 * - Movement speed reduction
 * - Damage reduction
 */

import { PlayerDebuff, Skill } from '../../types';

export interface DebuffSystemArgs {
    debuffs: PlayerDebuff[];
    skills: Record<string, Skill>;
    equippedSkills: string[];
    now: number;
}

export interface DebuffSystemResult {
    debuffs: PlayerDebuff[];
    disabledSkills: string[];
    modifiers: {
        paddleSpeedMultiplier: number;
        damageMultiplier: number;
        skillCooldownMultiplier: number;
    };
    debuffMessages: string[];
}

export function stepDebuffSystem(args: DebuffSystemArgs): DebuffSystemResult {
    const { debuffs, skills, equippedSkills, now } = args;
    
    // Remove expired debuffs
    const activeDebuffs = debuffs.filter(debuff => 
        now < debuff.appliedAt + debuff.duration
    );
    
    // Process active debuffs
    const disabledSkills: string[] = [];
    const debuffMessages: string[] = [];
    let paddleSpeedMultiplier = 1.0;
    let damageMultiplier = 1.0;
    let skillCooldownMultiplier = 1.0;
    
    activeDebuffs.forEach(debuff => {
        switch (debuff.type) {
            case 'skillDisable':
                // Disable random equipped skill if not specified
                if (!debuff.skillId && equippedSkills.length > 0) {
                    const randomSkill = equippedSkills[Math.floor(Math.random() * equippedSkills.length)];
                    debuff.skillId = randomSkill;
                }
                
                if (debuff.skillId && equippedSkills.includes(debuff.skillId)) {
                    disabledSkills.push(debuff.skillId);
                    
                    // Add message for newly applied debuffs
                    const isNew = (now - debuff.appliedAt) < 100;
                    if (isNew) {
                        const skillName = getSkillDisplayName(debuff.skillId);
                        debuffMessages.push(`${skillName} disabled!`);
                    }
                }
                break;
                
            case 'slowMovement':
                paddleSpeedMultiplier = Math.min(paddleSpeedMultiplier, debuff.severity || 0.7);
                break;
                
            case 'reducedDamage':
                damageMultiplier = Math.min(damageMultiplier, debuff.severity || 0.8);
                break;
        }
    });
    
    return {
        debuffs: activeDebuffs,
        disabledSkills,
        modifiers: {
            paddleSpeedMultiplier,
            damageMultiplier,
            skillCooldownMultiplier
        },
        debuffMessages
    };
}

export function createSkillDisableDebuff(
    sourceId: string,
    skillId?: string,
    duration: number = 5000,
    now: number = Date.now()
): PlayerDebuff {
    return {
        id: `skill_disable_${sourceId}_${now}`,
        type: 'skillDisable',
        skillId,
        appliedAt: now,
        duration
    };
}

export function createMovementSlowDebuff(
    sourceId: string,
    severity: number = 0.7,
    duration: number = 3000,
    now: number = Date.now()
): PlayerDebuff {
    return {
        id: `movement_slow_${sourceId}_${now}`,
        type: 'slowMovement',
        severity,
        appliedAt: now,
        duration
    };
}

export function createDamageReductionDebuff(
    sourceId: string,
    severity: number = 0.8,
    duration: number = 4000,
    now: number = Date.now()
): PlayerDebuff {
    return {
        id: `damage_reduction_${sourceId}_${now}`,
        type: 'reducedDamage',
        severity,
        appliedAt: now,
        duration
    };
}

export function isSkillDisabled(skillId: string, disabledSkills: string[]): boolean {
    return disabledSkills.includes(skillId);
}

export function getDebuffTimeRemaining(debuff: PlayerDebuff, now: number): number {
    return Math.max(0, (debuff.appliedAt + debuff.duration) - now);
}

export function getDebuffProgress(debuff: PlayerDebuff, now: number): number {
    const elapsed = now - debuff.appliedAt;
    return Math.min(1, elapsed / debuff.duration);
}

function getSkillDisplayName(skillId: string): string {
    const skillNames: Record<string, string> = {
        'multiBall': 'Multi Ball',
        'elementalInfusion': 'Elemental Infusion',
        'arcaneOrb': 'Arcane Orb',
        'timeWarp': 'Time Warp',
        'barrier': 'Barrier',
        'runicEmpowerment': 'Runic Empowerment'
    };
    
    return skillNames[skillId] || skillId;
}