/**
 * Purpose: Single-tick simulation for the Breakout RPG game world.
 * Inputs:
 *   - state: GameState snapshot containing entities (balls, bricks, hazards), player stats, skills, and UI state.
 * Outputs:
 *   - GameStateUpdate: A delta to be merged into React state by the caller (App.tsx).
 * Invariants:
 *   - Does not mutate the input state object; uses local copies (e.g., workingBricks).
 *   - Public API remains runGameIteration(state) with the same types and behavior (behavior parity).
 * Side-effects:
 *   - None directly (pure w.r.t. caller), but reads wall-clock time via internal timeNow() that defaults to Date.now().
 * Notes:
 *   - For future determinism, timeNow can be replaced with an injected time source without changing the public signature.
 */
import { Ball, Brick, Projectile, PlayerStats, Skill, BrickType, Explosion, RunicEmpowermentBuffs, ArcaneOrb, ElementalBeam, HomingProjectile, FireRainZone, IceSpikeField, LightningStrike, ArcaneOverloadRing, FinalGambitBeam, OvergrowthZone, EnergySurge, ReplicationField, PlayerDebuff } from '../types';
import { GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_Y, BALL_RADIUS, BRICK_PROPERTIES, LEVEL_UP_XP, BOSS_MOVE_SPEED, BOSS_ATTACK_COOLDOWN, BOSS_PROJECTILE_SPEED, BOSS_PROJECTILE_DAMAGE, BOSS_ENRAGE_THRESHOLD, ARCHMAGE_TELEPORT_COOLDOWN, ARCHMAGE_SUMMON_COOLDOWN, ARCHMAGE_MAX_APPRENTICES, ARCHMAGE_MISSILE_COOLDOWN, ARCHMAGE_MISSILE_SPEED, ARCHMAGE_MISSILE_TURN_RATE, ARCHMAGE_MISSILE_DAMAGE, BRICK_WIDTH, BRICK_HEIGHT, ARCHMAGE_PHASE2_THRESHOLD, ARCHMAGE_ELEMENTAL_STORM_COOLDOWN, FIRE_RAIN_DURATION, FIRE_RAIN_DAMAGE, FIRE_RAIN_RADIUS, ICE_SPIKE_DURATION, ICE_SPIKE_HEIGHT, ICE_SPIKE_WIDTH, LIGHTNING_STRIKE_WARNING_DURATION, LIGHTNING_STRIKE_STRIKE_DURATION, LIGHTNING_STRIKE_DAMAGE, LIGHTNING_STRIKE_WIDTH, ARCHMAGE_MIRROR_IMAGE_COOLDOWN, ARCHMAGE_MAX_CLONES, ARCHMAGE_MANA_BURN_COOLDOWN, ARCHMAGE_PHASE3_THRESHOLD, ARCHMAGE_FINAL_GAMBIT_THRESHOLD, ARCHMAGE_CHAOS_MAGIC_COOLDOWN, ARCHMAGE_ARCANE_OVERLOAD_COOLDOWN, ARCANE_OVERLOAD_RING_DURATION, ARCANE_OVERLOAD_RING_DAMAGE, FINAL_GAMBIT_BEAM_WARNING_DURATION, FINAL_GAMBIT_BEAM_STRIKE_DURATION, FINAL_GAMBIT_BEAM_DAMAGE } from '../constants';
import { lineRectCollision } from './core/collisions';
import { stepProjectiles, stepHomingProjectiles } from './core/projectiles';
import { updateBallsAndCollisions } from './core/balls';
import {
    stepArcaneOrbs,
    stepExplosionsAoE,
    stepLightningChains,
    stepEnvironmentalHazards,
} from './core/hazards';
import { stepBossArchmage, stepBossClassic } from './core/boss';
import { stepBioForgeMechanics, handleScrapGolemExplosion } from './core/bio-forge';
import { stepEnvironmentalHazards as stepBioForgeEnvironmental } from './core/bio-forge/environmental';
import { stepPrimeSynthesizer } from './core/boss/prime-synthesizer';
import { stepDebuffSystem } from './core/debuffs';

interface GameState {
    balls: Ball[];
    bricks: Brick[];
    projectiles: Projectile[];
    homingProjectiles: HomingProjectile[];
    arcaneOrbs: ArcaneOrb[];
    fireRainZones: FireRainZone[];
    iceSpikeFields: IceSpikeField[];
    lightningStrikes: LightningStrike[];
    arcaneOverloadRings: ArcaneOverloadRing[];
    finalGambitBeams: FinalGambitBeam[];
    paddleX: number;
    paddleWidth: number;
    playerStats: PlayerStats;
    skills: Record<string, Skill>;
    isBallLaunched: boolean;
    hp: number;
    xp: number;
    level: number;
    unlockedSkills: Record<string, number>;
    mana: number;
    maxMana: number;
    activeBuffs: RunicEmpowermentBuffs;
    maxActiveSkills: number;
    equippedSkills: string[];
    // Bio-Forge Nexus state
    overgrowthZones?: OvergrowthZone[];
    energySurges?: EnergySurge[];
    replicationFields?: ReplicationField[];
    playerDebuffs?: PlayerDebuff[];
}

interface GameStateUpdate {
    balls?: Ball[];
    bricks?: Brick[];
    projectiles?: Projectile[];
    homingProjectiles?: HomingProjectile[];
    arcaneOrbs?: ArcaneOrb[];
    fireRainZones?: FireRainZone[];
    iceSpikeFields?: IceSpikeField[];
    lightningStrikes?: LightningStrike[];
    arcaneOverloadRings?: ArcaneOverloadRing[];
    finalGambitBeams?: FinalGambitBeam[];
    isBallLaunched?: boolean;
    damageToPlayer?: number;
    xpGained?: number;
    xp?: number;
    goldGained?: number;
    scoreGained?: number;
    levelUps?: number;
    worldCompleted?: boolean;
    manaSpent?: number;
    manaGained?: number;
    newExplosions?: Explosion[];
    newElementalBeams?: ElementalBeam[];
    chargesConsumed?: { skillId: string, amount: number }[];
    bricksDestroyed?: number;
    shieldUsed?: boolean;
    manaBurnActivated?: boolean;
    // Bio-Forge Nexus state updates
    overgrowthZones?: OvergrowthZone[];
    energySurges?: EnergySurge[];
    replicationFields?: ReplicationField[];
    playerDebuffs?: PlayerDebuff[];
}

/** Internal time getter to centralize wall-clock access for future testability. */
const timeNow = (): number => Date.now();



const findEmptySpotForBrick = (bricks: Brick[], width: number, height: number): {x: number, y: number} | null => {
    for (let i = 0; i < 20; i++) { // Try 20 times to find a spot
        const x = Math.random() * (GAME_WIDTH - width);
        const y = Math.random() * (GAME_HEIGHT / 2 - height) + 60;

        let overlaps = false;
        for (const brick of bricks) {
            if (x < brick.x + brick.width && x + width > brick.x && y < brick.y + brick.height && y + height > brick.y) {
                overlaps = true;
                break;
            }
        }
        if (!overlaps) return { x, y };
    }
    return null; // Could not find a spot
};

export const runGameIteration = (state: GameState): GameStateUpdate => {
    let { balls, bricks: originalBricks, projectiles, homingProjectiles, arcaneOrbs, fireRainZones, iceSpikeFields, lightningStrikes, arcaneOverloadRings, finalGambitBeams, paddleX, paddleWidth, playerStats, skills, isBallLaunched, hp, xp, level, unlockedSkills, mana, maxMana, activeBuffs, overgrowthZones = [], energySurges = [], replicationFields = [], playerDebuffs = [] } = state;

    let workingBricks: Brick[] = originalBricks.map(b => ({ ...b }));

    const now = timeNow();
    const isTimeSlowed = skills.timeSlow.activeUntil && now < skills.timeSlow.activeUntil;
    const timeFactor = isTimeSlowed ? 0.25 : 1;

    const spellPowerLevel = unlockedSkills.spellPower || 0;
    const magicDamageModifier = 1 + (playerStats.wisdom * 0.05) + (spellPowerLevel * 0.15);

    let newProjectiles = [...projectiles];
    let newHomingProjectiles = [...homingProjectiles];
    let newArcaneOrbs = [...arcaneOrbs];
    let newFireRainZones = [...fireRainZones];
    let newIceSpikeFields = [...iceSpikeFields];
    let newLightningStrikes = [...lightningStrikes];
    let newArcaneOverloadRings = [...arcaneOverloadRings];
    let newFinalGambitBeams = [...finalGambitBeams];
    let newExplosions: Explosion[] = [];
    let newElementalBeams: ElementalBeam[] = [];
    let chargesConsumed: { skillId: string, amount: number }[] = [];
    let damageToPlayer = 0;
    let manaSpent = 0;
    let manaGained = 0;
    let earnedXp = 0;
    let earnedGold = 0;
    let earnedScore = 0;
    let nextBallLaunchedState = isBallLaunched;
    let updatedBalls = [...balls];
    let bricksDestroyedThisTick = 0;
    let shieldWasUsed = false;
    let manaBurnWasActivated = false;
    let chaosMagicWasTriggered = false;

    // Bio-Forge Nexus working state
    let newOvergrowthZones = [...overgrowthZones];
    let newEnergySurges = [...energySurges];
    let newReplicationFields = [...replicationFields];
    let newPlayerDebuffs = [...playerDebuffs];
    
    const updates: GameStateUpdate = {};
    
    // Mana Regeneration
    if (maxMana > 0) {
        const manaRegen = (1 + playerStats.wisdom * 0.1) * 0.1 * timeFactor;
        manaGained += manaRegen;
    }
    
    if (!isBallLaunched) {
         if(updatedBalls.length > 0) {
            updatedBalls = [{
                ...updatedBalls[0],
                x: paddleX + paddleWidth / 2,
                y: PADDLE_Y - updatedBalls[0].size,
            }];
        }
    } else {
        // 1) Balls and brick collisions
        const ballsResult = updateBallsAndCollisions({
            balls,
            bricks: workingBricks,
            paddleX,
            paddleWidth,
            playerPower: playerStats.power,
            playerAgility: playerStats.agility,
            playerWisdom: playerStats.wisdom,
            unlockedSkills,
            activeBuffs,
            skills: {
                timeSlow: skills.timeSlow,
                elementalInfusion: skills.elementalInfusion
            } as any,
            now,
            timeFactor,
            isBallLaunched,
            maxMana,
            hp
        });
        updatedBalls = ballsResult.updatedBalls;
        workingBricks = ballsResult.workingBricks;
        nextBallLaunchedState = ballsResult.nextBallLaunchedState;
        damageToPlayer += ballsResult.damageToPlayerDelta;
        const damageMap = ballsResult.damageMap;
        const triggeredLightningStrikesFromBalls = ballsResult.triggeredLightningStrikes;
        newExplosions.push(...ballsResult.newExplosions);
        newElementalBeams.push(...ballsResult.newBeams);
        
        // Handle ScrapGolem explosion bricks from balls
        if (ballsResult.scrapGolemExplosionBricks) {
            workingBricks.push(...ballsResult.scrapGolemExplosionBricks);
        }

        // Apply damage map to bricks (XP/score/gold handling)
        workingBricks = workingBricks.map(brick => {
            const totalDamage = damageMap.get(brick.id) || 0;
            if (totalDamage <= 0) return brick;
            const newHp = brick.hp - totalDamage;
            if (newHp <= 0) {
                if (!brick.isClone) {
                    const brickProps = BRICK_PROPERTIES[brick.type];
                    earnedXp += brickProps.points;
                    earnedGold += Math.ceil(brickProps.points / 10 * (1 + playerStats.luck * 0.05));
                    earnedScore += brickProps.points;
                    if (brick.type === BrickType.Fire) {
                        const explosionRadius = 50 + playerStats.wisdom * 2;
                        newExplosions.push({ id: now + Math.random(), x: brick.x + brick.width/2, y: brick.y + brick.height/2, radius: explosionRadius, duration: 300, createdAt: now });
                    }
                    // Bio-Forge Nexus: ScrapGolem explosion spawning
                    if (brick.type === BrickType.ScrapGolem) {
                        const explosionBricks = handleScrapGolemExplosion(brick, workingBricks);
                        workingBricks.push(...explosionBricks);
                    }
                }
                bricksDestroyedThisTick++;
                return null;
            }
            return { ...brick, hp: newHp };
        }).filter((b): b is Brick => b !== null);

        // 2) Projectiles
        const isBarrierActive = skills.barrier.activeUntil && now < skills.barrier.activeUntil;
        const projStep = stepProjectiles({
            projectiles: newProjectiles,
            paddleX,
            paddleWidth,
            timeFactor,
            isBarrierActive: !!isBarrierActive,
            playerDefense: playerStats.defense
        });
        newProjectiles = projStep.projectiles;
        damageToPlayer += projStep.damageToPlayer;

        // 3) Homing projectiles
        const homingStep = stepHomingProjectiles({
            homingProjectiles: newHomingProjectiles,
            paddleX,
            paddleWidth,
            timeFactor,
            playerDefense: playerStats.defense
        });
        newHomingProjectiles = homingStep.homingProjectiles;
        damageToPlayer += homingStep.damageToPlayer;

        // 4) Hazards: Arcane Orbs
        if (newArcaneOrbs.length > 0) {
            const orbsStep = stepArcaneOrbs({
                orbs: newArcaneOrbs,
                bricks: workingBricks,
                timeFactor,
                magicDamageModifier,
                now,
                playerWisdom: playerStats.wisdom
            });
            workingBricks = orbsStep.bricks;
            newArcaneOrbs = orbsStep.orbs;
            newExplosions.push(...orbsStep.newExplosions);
            bricksDestroyedThisTick += orbsStep.bricksDestroyedThisTick;
            earnedXp += orbsStep.earnedXp;
            earnedScore += orbsStep.earnedScore;

            // Lightning triggers: destroyed lightning bricks + any from balls world
            const totalLightningTriggers = orbsStep.destroyedLightningBricks + triggeredLightningStrikesFromBalls;
            if (totalLightningTriggers > 0) {
                const lightningStep = stepLightningChains({
                    bricks: workingBricks,
                    triggers: totalLightningTriggers,
                    magicDamageModifier,
                    playerWisdom: playerStats.wisdom
                });
                workingBricks = lightningStep.bricks;
                bricksDestroyedThisTick += lightningStep.bricksDestroyedThisTick;
                earnedXp += lightningStep.earnedXp;
                earnedScore += lightningStep.earnedScore;
            }
        } else {
            // Still resolve chains if balls world triggered them
            const totalLightningTriggers = triggeredLightningStrikesFromBalls;
            if (totalLightningTriggers > 0) {
                const lightningStep = stepLightningChains({
                    bricks: workingBricks,
                    triggers: totalLightningTriggers,
                    magicDamageModifier,
                    playerWisdom: playerStats.wisdom
                });
                workingBricks = lightningStep.bricks;
                bricksDestroyedThisTick += lightningStep.bricksDestroyedThisTick;
                earnedXp += lightningStep.earnedXp;
                earnedScore += lightningStep.earnedScore;
            }
        }

        // 5) Explosions AoE post-processing (from balls/orbs)
        if (newExplosions.length > 0) {
            const aoeStep = stepExplosionsAoE({
                bricks: workingBricks,
                explosions: newExplosions,
                magicDamageModifier
            });
            workingBricks = aoeStep.bricks;
            bricksDestroyedThisTick += aoeStep.bricksDestroyedThisTick;
            earnedXp += aoeStep.earnedXp;
            earnedScore += aoeStep.earnedScore;
        }

        // 6) Bio-Forge Nexus mechanics (world 3)
        const bioForgeStep = stepBioForgeMechanics({
            bricks: workingBricks,
            balls: updatedBalls,
            now,
            playerDebuffs: newPlayerDebuffs,
            paddleX,
            paddleWidth
        });
        workingBricks = bioForgeStep.bricks; // This already includes cleaned up bricks
        if (bioForgeStep.newBricks) {
            workingBricks.push(...bioForgeStep.newBricks);
        }
        newPlayerDebuffs = bioForgeStep.playerDebuffs;
        
        // Handle Bio-Forge environmental hazards
        const bioForgeEnvStep = stepBioForgeEnvironmental({
            overgrowthZones: newOvergrowthZones,
            energySurges: newEnergySurges,
            replicationFields: newReplicationFields,
            balls: updatedBalls,
            bricks: workingBricks,
            paddleX,
            paddleWidth,
            now
        });
        newOvergrowthZones = bioForgeEnvStep.overgrowthZones;
        newEnergySurges = bioForgeEnvStep.energySurges;
        newReplicationFields = bioForgeEnvStep.replicationFields;
        if (bioForgeEnvStep.newBricks) {
            workingBricks.push(...bioForgeEnvStep.newBricks);
        }
        if (bioForgeEnvStep.paddleDamage) {
            damageToPlayer += bioForgeEnvStep.paddleDamage;
        }
        
        // Handle Prime Synthesizer boss (Bio-Forge world boss)
        const primeSynthesizerBosses = workingBricks.filter(b => b.type === BrickType.PrimeSynthesizer);
        for (const boss of primeSynthesizerBosses) {
            const primeSynthesizerStep = stepPrimeSynthesizer({
                boss,
                bricks: workingBricks,
                balls: updatedBalls,
                paddleX,
                paddleWidth,
                playerDebuffs: newPlayerDebuffs,
                now
            });
            
            // Update boss in working bricks
            const bossIndex = workingBricks.findIndex(b => b.id === boss.id);
            if (bossIndex !== -1) {
                workingBricks[bossIndex] = primeSynthesizerStep.boss;
            }
            
            if (primeSynthesizerStep.newBricks) {
                workingBricks.push(...primeSynthesizerStep.newBricks);
            }
            if (primeSynthesizerStep.playerDebuffs) {
                newPlayerDebuffs = primeSynthesizerStep.playerDebuffs;
            }
            
            // Clean up spawned bricks if boss is dead
            if (primeSynthesizerStep.cleanupSpawned) {
                workingBricks = workingBricks.filter(b => !b.isSpawned || b.parentId !== boss.id);
            }
        }
        
        // Process debuff system
        const debuffStep = stepDebuffSystem({
            debuffs: newPlayerDebuffs,
            skills,
            equippedSkills: state.equippedSkills || [],
            now
        });
        newPlayerDebuffs = debuffStep.debuffs;
        
        // 7) Boss behaviors (Archmage phases and Classic)
        // Archmage
        const archmageStep = stepBossArchmage({
            bricks: workingBricks,
            now,
            timeFactor,
            paddleX,
            paddleWidth
        });
        workingBricks = archmageStep.bricks;
        newProjectiles.push(...archmageStep.projectiles);
        newHomingProjectiles.push(...archmageStep.homingProjectiles);
        newFireRainZones.push(...archmageStep.fireRainZones);
        newIceSpikeFields.push(...archmageStep.iceSpikeFields);
        newLightningStrikes.push(...archmageStep.lightningStrikes);
        newArcaneOverloadRings.push(...archmageStep.arcaneOverloadRings);
        if (archmageStep.finalGambitBeams.length > 0) {
            // clear other hazards if final gambit active
            newFireRainZones = [];
            newIceSpikeFields = [];
            newLightningStrikes = [];
            newArcaneOverloadRings = [];
            newFinalGambitBeams = archmageStep.finalGambitBeams;
        }
        if (archmageStep.chaosMagicTriggered) {
            updatedBalls = updatedBalls.map(ball => {
                const speed = Math.hypot(ball.vx, ball.vy) || 4;
                const newAngle = Math.random() * 2 * Math.PI;
                return { ...ball, vx: Math.cos(newAngle) * speed, vy: Math.sin(newAngle) * speed };
            });
        }
        if (archmageStep.manaBurnActivated) {
            manaBurnWasActivated = true;
        }

        // Classic boss
        const classicStep = stepBossClassic({
            bricks: workingBricks,
            now,
            timeFactor
        });
        workingBricks = classicStep.bricks;
        newProjectiles.push(...classicStep.projectiles);
    }

    // Process environmental hazards via core module
    {
        const env = stepEnvironmentalHazards({
            fireRainZones: newFireRainZones,
            iceSpikeFields: newIceSpikeFields,
            lightningStrikes: newLightningStrikes,
            arcaneOverloadRings: newArcaneOverloadRings,
            finalGambitBeams: newFinalGambitBeams,
            now,
            paddleX,
            paddleWidth
        });
        newFireRainZones = env.fireRainZones;
        newIceSpikeFields = env.iceSpikeFields;
        newLightningStrikes = env.lightningStrikes;
        newArcaneOverloadRings = env.arcaneOverloadRings;
        newFinalGambitBeams = env.finalGambitBeams;
        damageToPlayer += env.damageToPlayerDelta;
    }


    if (damageToPlayer > 0 && activeBuffs.shield) {
        damageToPlayer = 0;
        shieldWasUsed = true;
    }

    updates.balls = updatedBalls;
    updates.bricks = workingBricks;
    updates.projectiles = newProjectiles;
    updates.homingProjectiles = newHomingProjectiles;
    updates.arcaneOrbs = newArcaneOrbs;
    updates.fireRainZones = newFireRainZones;
    updates.iceSpikeFields = newIceSpikeFields;
    updates.lightningStrikes = newLightningStrikes;
    updates.arcaneOverloadRings = newArcaneOverloadRings;
    updates.finalGambitBeams = newFinalGambitBeams;
    updates.isBallLaunched = nextBallLaunchedState;


    if (damageToPlayer > 0) {
        const manaShieldLevel = unlockedSkills['manaShield'] || 0;
        if (manaShieldLevel > 0 && mana > 0) {
            const damageToBlock = damageToPlayer * 0.5; // Mana shield blocks 50%
            const manaCost = damageToBlock; // 1 mana per 1 damage blocked
            if (mana >= manaCost) {
                manaSpent += manaCost;
                damageToPlayer -= damageToBlock;
            } else {
                damageToPlayer -= mana * 1;
                manaSpent += mana;
            }
        }
        updates.damageToPlayer = damageToPlayer;
    }
    
    if (earnedXp > 0) {
        let currentXp = xp + earnedXp;
        let levelUps = 0;

        while (currentXp >= LEVEL_UP_XP) {
            currentXp -= LEVEL_UP_XP;
            levelUps++;
        }

        if (levelUps > 0) {
            updates.levelUps = levelUps;
            updates.xp = currentXp;
        } else {
             updates.xpGained = earnedXp;
        }
    }
    
    if (earnedGold > 0) updates.goldGained = earnedGold;
    if (earnedScore > 0) updates.scoreGained = earnedScore;
    if (manaSpent > 0) updates.manaSpent = manaSpent;
    if (manaGained > 0) updates.manaGained = manaGained;
    if (newExplosions.length > 0) updates.newExplosions = newExplosions;
    if (newElementalBeams.length > 0) updates.newElementalBeams = newElementalBeams;
    if (chargesConsumed.length > 0) updates.chargesConsumed = chargesConsumed;
    if (bricksDestroyedThisTick > 0) updates.bricksDestroyed = bricksDestroyedThisTick;
    if (shieldWasUsed) updates.shieldUsed = true;
    if (manaBurnWasActivated) updates.manaBurnActivated = true;

    // Final cleanup: Remove any remaining orphaned spawned bricks
    workingBricks = workingBricks.filter(brick => {
        if (!brick.isSpawned || !brick.parentId) return true;
        
        // Check if parent still exists and is alive
        const parent = workingBricks.find(b => b.id === brick.parentId);
        return parent && parent.hp > 0;
    });
    
    // Update bricks in the result
    updates.bricks = workingBricks;
    
    // Update Bio-Forge Nexus state
    if (newOvergrowthZones.length > 0 || overgrowthZones.length > 0) {
        updates.overgrowthZones = newOvergrowthZones;
    }
    if (newEnergySurges.length > 0 || energySurges.length > 0) {
        updates.energySurges = newEnergySurges;
    }
    if (newReplicationFields.length > 0 || replicationFields.length > 0) {
        updates.replicationFields = newReplicationFields;
    }
    if (newPlayerDebuffs.length > 0 || playerDebuffs.length > 0) {
        updates.playerDebuffs = newPlayerDebuffs;
    }

    if (workingBricks.length === 0 && originalBricks.length > 0 && !originalBricks.some(b => b.type === BrickType.Boss || b.type === BrickType.ArchmageBoss || b.type === BrickType.PrimeSynthesizer)) {
        updates.worldCompleted = true;
    } else if (workingBricks.filter(b => (b.type !== BrickType.ArchmageBoss && b.type !== BrickType.PrimeSynthesizer) || !b.isClone).length === 0 && originalBricks.length > 0) {
         updates.worldCompleted = true;
    }

    return updates;
};
