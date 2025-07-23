import { Ball, Brick, Projectile, PlayerStats, Skill, BrickType, Explosion, RunicEmpowermentBuffs, ArcaneOrb, ElementalBeam, HomingProjectile, FireRainZone, IceSpikeField, LightningStrike, ArcaneOverloadRing, FinalGambitBeam } from '../types';
import { GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_Y, BALL_RADIUS, BRICK_PROPERTIES, LEVEL_UP_XP, BOSS_MOVE_SPEED, BOSS_ATTACK_COOLDOWN, BOSS_PROJECTILE_SPEED, BOSS_PROJECTILE_DAMAGE, BOSS_ENRAGE_THRESHOLD, ARCHMAGE_TELEPORT_COOLDOWN, ARCHMAGE_SUMMON_COOLDOWN, ARCHMAGE_MAX_APPRENTICES, ARCHMAGE_MISSILE_COOLDOWN, ARCHMAGE_MISSILE_SPEED, ARCHMAGE_MISSILE_TURN_RATE, ARCHMAGE_MISSILE_DAMAGE, BRICK_WIDTH, BRICK_HEIGHT, ARCHMAGE_PHASE2_THRESHOLD, ARCHMAGE_ELEMENTAL_STORM_COOLDOWN, FIRE_RAIN_DURATION, FIRE_RAIN_DAMAGE, FIRE_RAIN_RADIUS, ICE_SPIKE_DURATION, ICE_SPIKE_HEIGHT, ICE_SPIKE_WIDTH, LIGHTNING_STRIKE_WARNING_DURATION, LIGHTNING_STRIKE_STRIKE_DURATION, LIGHTNING_STRIKE_DAMAGE, LIGHTNING_STRIKE_WIDTH, ARCHMAGE_MIRROR_IMAGE_COOLDOWN, ARCHMAGE_MAX_CLONES, ARCHMAGE_MANA_BURN_COOLDOWN, ARCHMAGE_PHASE3_THRESHOLD, ARCHMAGE_FINAL_GAMBIT_THRESHOLD, ARCHMAGE_CHAOS_MAGIC_COOLDOWN, ARCHMAGE_ARCANE_OVERLOAD_COOLDOWN, ARCANE_OVERLOAD_RING_DURATION, ARCANE_OVERLOAD_RING_DAMAGE, FINAL_GAMBIT_BEAM_WARNING_DURATION, FINAL_GAMBIT_BEAM_STRIKE_DURATION, FINAL_GAMBIT_BEAM_DAMAGE } from '../constants';

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
    stageCompleted?: boolean;
    manaSpent?: number;
    manaGained?: number;
    newExplosions?: Explosion[];
    newElementalBeams?: ElementalBeam[];
    chargesConsumed?: { skillId: string, amount: number }[];
    bricksDestroyed?: number;
    shieldUsed?: boolean;
    manaBurnActivated?: boolean;
}

// --- Collision Helper Functions ---

function lineLineCollision(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean {
    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den === 0) return false;

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    return t > 0 && t < 1 && u > 0 && u < 1;
}

function lineRectCollision(x1: number, y1: number, x2: number, y2: number, rect: Brick): boolean {
    const left = lineLineCollision(x1, y1, x2, y2, rect.x, rect.y, rect.x, rect.y + rect.height);
    const right = lineLineCollision(x1, y1, x2, y2, rect.x + rect.width, rect.y, rect.x + rect.width, rect.y + rect.height);
    const top = lineLineCollision(x1, y1, x2, y2, rect.x, rect.y, rect.x + rect.width, rect.y);
    const bottom = lineLineCollision(x1, y1, x2, y2, rect.x, rect.y + rect.height, rect.x + rect.width, rect.y + rect.height);

    return left || right || top || bottom;
}


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
    let { balls, bricks: originalBricks, projectiles, homingProjectiles, arcaneOrbs, fireRainZones, iceSpikeFields, lightningStrikes, arcaneOverloadRings, finalGambitBeams, paddleX, paddleWidth, playerStats, skills, isBallLaunched, hp, xp, level, unlockedSkills, mana, maxMana, activeBuffs } = state;

    let workingBricks: Brick[] = originalBricks.map(b => ({ ...b }));

    const now = Date.now();
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
        // 1. Update ball positions and handle wall/paddle collisions
        updatedBalls = balls.map(ball => {
            let { x, y, vx, vy, damage, slowedUntil, isSpikeSlowedUntil } = ball;
            
            const isSlowed = slowedUntil && now < slowedUntil;
            const isSpikeSlowed = isSpikeSlowedUntil && now < isSpikeSlowedUntil;
            const hasteMultiplier = activeBuffs.haste ? 1.5 : 1;
            const ballTimeFactor = timeFactor * (isSlowed ? 0.8 : 1) * (isSpikeSlowed ? 0.3 : 1);
            const ballSpeedMultiplier = (1 + (playerStats.agility - 1) * 0.05) * ballTimeFactor * hasteMultiplier;
        
            x += vx * ballSpeedMultiplier;
            y += vy * ballSpeedMultiplier;

            if (x <= 0 || x >= GAME_WIDTH - ball.size * 2) vx = -vx;
            if (y <= 0) vy = -vy;

            if (y >= PADDLE_Y - ball.size && y <= PADDLE_Y + PADDLE_HEIGHT && x + ball.size > paddleX && x < paddleX + paddleWidth) {
                vy = -Math.abs(vy) * 1.02;
                let hitPos = (x - (paddleX + paddleWidth / 2)) / (paddleWidth / 2);
                vx = hitPos * 5;
                damage = playerStats.power; 
            }
            
            return { ...ball, x, y, vx, vy, damage };
        }).filter(ball => ball.y < GAME_HEIGHT);

        if (balls.length > 0 && updatedBalls.length === 0) {
            damageToPlayer += 10;
            if (hp - damageToPlayer > 0) {
                nextBallLaunchedState = false;
                updatedBalls.push({ id: Date.now(), x: paddleX + paddleWidth / 2, y: PADDLE_Y - 20, vx: 0, vy: 0, size: BALL_RADIUS, damage: 0 });
            }
        }

        // Process Ice Spike Fields on Balls
        if (newIceSpikeFields.length > 0) {
            updatedBalls = updatedBalls.map(ball => {
                for (const field of newIceSpikeFields) {
                    if (ball.x + ball.size > field.x && ball.x < field.x + field.width &&
                        ball.y + ball.size > field.y && ball.y < field.y + field.height)
                    {
                        return { ...ball, isSpikeSlowedUntil: now + 1000 };
                    }
                }
                return ball;
            });
        }
        
        const hasBreakthrough = (unlockedSkills.breakthrough || 0) > 0;
        const hasMasterOfElements = (unlockedSkills.masterOfElements || 0) > 0;
        let damageMap = new Map<number, number>();
        let triggeredLightningStrikes = 0;
        const ballDamage = playerStats.power * (activeBuffs.power ? 2 : 1);

        updatedBalls = updatedBalls.map(ball => {
            if (ball.vx === 0 && ball.vy === 0) return ball;
            let mutableBall = { ...ball };

            for (const brick of workingBricks) {
                const totalDamageToBrick = damageMap.get(brick.id) || 0;
                if (totalDamageToBrick >= brick.hp) continue;

                const ballCenterX = mutableBall.x + mutableBall.size;
                const ballCenterY = mutableBall.y + mutableBall.size;
                const brickCenterX = brick.x + brick.width / 2;
                const brickCenterY = brick.y + brick.height / 2;
                const dx = ballCenterX - brickCenterX;
                const dy = ballCenterY - brickCenterY;
                const combinedHalfWidths = mutableBall.size + brick.width / 2;
                const combinedHalfHeights = mutableBall.size + brick.height / 2;

                if (Math.abs(dx) < combinedHalfWidths && Math.abs(dy) < combinedHalfHeights) {
                    const overlapX = combinedHalfWidths - Math.abs(dx);
                    const overlapY = combinedHalfHeights - Math.abs(dy);

                    if (brick.isClone) {
                        damageMap.set(brick.id, 1);
                        if (overlapX < overlapY) { mutableBall.vx = -mutableBall.vx; } else { mutableBall.vy = -mutableBall.vy; }
                        newExplosions.push({id: Date.now() + Math.random(), x: brick.x + brick.width/2, y: brick.y + brick.height/2, radius: brick.width / 2, duration: 200, createdAt: now});
                        break;
                    }
                    
                    const elementalInfusionSkill = skills.elementalInfusion;
                    if (elementalInfusionSkill && (elementalInfusionSkill.charges || 0) > 0) {
                        chargesConsumed.push({ skillId: 'elementalInfusion', amount: 1 });
                        const randomEffect = Math.random();
                        if (randomEffect < 0.33) { // Fire
                             const explosionRadius = 50 + playerStats.wisdom * 2;
                             newExplosions.push({id: Date.now() + Math.random(), x: brick.x + brick.width/2, y: brick.y + brick.height/2, radius: explosionRadius, duration: 300, createdAt: now});
                        } else if (randomEffect < 0.66) { // Ice
                            mutableBall.slowedUntil = now + 3000;
                        } else { // Lightning
                            triggeredLightningStrikes++;
                        }
                    }

                    // Shield logic takes precedence
                    if (brick.shieldHp && brick.shieldHp > 0) {
                        brick.shieldHp -= 1; // Shield absorbs one hit
                        if (overlapX < overlapY) { mutableBall.vx = -mutableBall.vx; } else { mutableBall.vy = -mutableBall.vy; }
                        break; // Ball bounces, its turn is over for this tick
                    }
                    
                    if (brick.type === BrickType.Mirror) {
                        damageMap.set(brick.id, totalDamageToBrick + ballDamage);
                        mutableBall.vx *= -1;
                        mutableBall.vy *= -1;
                        mutableBall.x += mutableBall.vx;
                        mutableBall.y += mutableBall.vy;
                        break; 
                    }
                    if (brick.type === BrickType.Ice) {
                        mutableBall.slowedUntil = now + 2000;
                    }

                    if (hasBreakthrough && mutableBall.damage > 0) {
                        const damageToDeal = Math.min(mutableBall.damage, brick.hp - totalDamageToBrick);
                        const brickDestroyed = (totalDamageToBrick + damageToDeal) >= brick.hp;

                        damageMap.set(brick.id, totalDamageToBrick + damageToDeal);
                        mutableBall.damage -= damageToDeal;

                        if (brickDestroyed && hasMasterOfElements) {
                            const beamDamage = playerStats.wisdom * 0.5 * magicDamageModifier;
                            const beamRange = 250;
                            const ballVelMag = Math.hypot(mutableBall.vx, mutableBall.vy);
                            if (ballVelMag > 0) {
                                const normalizedVx = mutableBall.vx / ballVelMag;
                                const normalizedVy = mutableBall.vy / ballVelMag;
                                
                                const beamStartX = brick.x + brick.width / 2;
                                const beamStartY = brick.y + brick.height / 2;
                                const beamEndX = beamStartX + normalizedVx * beamRange;
                                const beamEndY = beamStartY + normalizedVy * beamRange;
                                
                                newElementalBeams.push({ id: Date.now() + Math.random(), x1: beamStartX, y1: beamStartY, x2: beamEndX, y2: beamEndY, createdAt: now, duration: 150 });
                                
                                // Find all bricks hit by this beam
                                for (const otherBrick of workingBricks) {
                                    if (otherBrick.id === brick.id) continue;
                                    if (lineRectCollision(beamStartX, beamStartY, beamEndX, beamEndY, otherBrick)) {
                                        const currentDamage = damageMap.get(otherBrick.id) || 0;
                                        damageMap.set(otherBrick.id, currentDamage + beamDamage);
                                    }
                                }
                            }
                        }
                    } else {
                        damageMap.set(brick.id, totalDamageToBrick + ballDamage);
                        if (overlapX < overlapY) { mutableBall.vx = -mutableBall.vx; } else { mutableBall.vy = -mutableBall.vy; }
                        break;
                    }
                }
            }
            return mutableBall;
        });

        let bricksToTeleport = new Set<number>();
        let destroyedLightningBricks = 0;
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
                    
                    const explosionRadius = 50 + playerStats.wisdom * 2;
                    if (brick.type === BrickType.Fire) { newExplosions.push({id: Date.now() + Math.random(), x: brick.x + brick.width/2, y: brick.y + brick.height/2, radius: explosionRadius, duration: 300, createdAt: now}); }
                    if (brick.type === BrickType.Apprentice) { bricksToTeleport.add(brick.id); }
                    if (brick.type === BrickType.Lightning) { destroyedLightningBricks++; }
                }
                bricksDestroyedThisTick++;
                return null;
            }
            return { ...brick, hp: newHp };
        }).filter((b): b is Brick => b !== null);
        
        // Arcane Orb Damage
        if (newArcaneOrbs.length > 0) {
            newArcaneOrbs = newArcaneOrbs.map(orb => ({
                ...orb,
                x: orb.x + (orb.vx || 0) * timeFactor,
                y: orb.y + orb.vy * timeFactor
            })).filter(orb =>
                orb.y + orb.radius * 2 > 0 && orb.y < GAME_HEIGHT &&
                orb.x + orb.radius * 2 > 0 && orb.x < GAME_WIDTH
            );

            let orbDamageMap = new Map<number, number>();
            for (const orb of newArcaneOrbs) {
                const orbDamage = orb.damage * magicDamageModifier;
                for (const brick of workingBricks) {
                    if ((orbDamageMap.get(brick.id) || 0) >= brick.hp) continue;

                    const orbCenterX = orb.x + orb.radius;
                    const orbCenterY = orb.y + orb.radius;
                    const brickCenterX = brick.x + brick.width / 2;
                    const brickCenterY = brick.y + brick.height / 2;
                    const dx = orbCenterX - brickCenterX;
                    const dy = orbCenterY - brickCenterY;
                    const combinedHalfWidths = orb.radius + brick.width / 2;
                    const combinedHalfHeights = orb.radius + brick.height / 2;

                    if (Math.abs(dx) < combinedHalfWidths && Math.abs(dy) < combinedHalfHeights) {
                         if (brick.isClone) {
                            orbDamageMap.set(brick.id, 1); // Piercing orbs destroy clones
                         } else {
                            orbDamageMap.set(brick.id, (orbDamageMap.get(brick.id) || 0) + orbDamage);
                         }
                    }
                }
            }

            if (orbDamageMap.size > 0) {
                workingBricks = workingBricks.map(brick => {
                    let damage = orbDamageMap.get(brick.id) || 0;
                    if (damage <= 0) return brick;

                    if (brick.shieldHp && brick.shieldHp > 0) {
                        const shieldDamage = Math.min(damage, brick.shieldHp);
                        brick.shieldHp -= shieldDamage;
                        damage -= shieldDamage;
                    }
                    if (damage <= 0) return brick;

                    const newHp = brick.hp - damage;
                    if (newHp <= 0) {
                        if (!brick.isClone) {
                            const brickProps = BRICK_PROPERTIES[brick.type];
                            earnedXp += brickProps.points;
                            earnedScore += brickProps.points;
                            const explosionRadius = 50 + playerStats.wisdom * 2;
                            if (brick.type === BrickType.Fire) { newExplosions.push({id: Date.now() + Math.random(), x: brick.x + brick.width/2, y: brick.y + brick.height/2, radius: explosionRadius, duration: 300, createdAt: now}); }
                            if (brick.type === BrickType.Apprentice) { bricksToTeleport.add(brick.id); }
                            if (brick.type === BrickType.Lightning) { destroyedLightningBricks++; }
                        }
                        bricksDestroyedThisTick++;
                        return null;
                    }
                    return { ...brick, hp: newHp };
                }).filter((b): b is Brick => b !== null);
            }
        }


        if (newExplosions.length > 0) {
            const explosionDamage = 1 * magicDamageModifier;
            let explosionDamageMap = new Map<number, number>();
            for(const explosion of newExplosions) {
                for (const brick of workingBricks) {
                    if (brick.isClone) continue;
                    const dist = Math.hypot(brick.x + brick.width/2 - explosion.x, brick.y + brick.height/2 - explosion.y);
                    if (dist < explosion.radius + brick.width/2) {
                        explosionDamageMap.set(brick.id, (explosionDamageMap.get(brick.id) || 0) + explosionDamage);
                    }
                }
            }
            if (explosionDamageMap.size > 0) {
                workingBricks = workingBricks.map(brick => {
                     let damage = explosionDamageMap.get(brick.id) || 0;
                     if(damage <= 0) return brick;
                     
                     if (brick.shieldHp && brick.shieldHp > 0) {
                        const shieldDamage = Math.min(damage, brick.shieldHp);
                        brick.shieldHp -= shieldDamage;
                        damage -= shieldDamage;
                     }
                     if (damage <= 0) return brick;

                     const newHp = brick.hp - damage;
                     if(newHp <= 0) {
                        if (!brick.isClone) {
                            const brickProps = BRICK_PROPERTIES[brick.type];
                            earnedXp += brickProps.points;
                            earnedScore += brickProps.points;
                        }
                        bricksDestroyedThisTick++;
                        return null;
                     }
                     return {...brick, hp: newHp};
                }).filter((b): b is Brick => b !== null);
            }
        }
        
        const totalLightningTriggers = destroyedLightningBricks + triggeredLightningStrikes;
        if (totalLightningTriggers > 0) {
            const lightningDamage = 2 * magicDamageModifier;
            const chainsPerStrike = 1 + Math.floor(playerStats.wisdom / 10);
            const totalLightningChains = totalLightningTriggers * chainsPerStrike;
            let lightningDamageMap = new Map<number, number>();

            for (let i = 0; i < totalLightningChains; i++) {
                const availableTargets = workingBricks.filter(b => !b.isClone);
                if (availableTargets.length > 0) {
                    const target = availableTargets[Math.floor(Math.random() * availableTargets.length)];
                    lightningDamageMap.set(target.id, (lightningDamageMap.get(target.id) || 0) + lightningDamage);
                }
            }
             if (lightningDamageMap.size > 0) {
                workingBricks = workingBricks.map(brick => {
                     let damage = lightningDamageMap.get(brick.id) || 0;
                     if(damage <= 0) return brick;

                     if (brick.shieldHp && brick.shieldHp > 0) {
                        const shieldDamage = Math.min(damage, brick.shieldHp);
                        brick.shieldHp -= shieldDamage;
                        damage -= shieldDamage;
                     }
                     if (damage <= 0) return brick;

                     const newHp = brick.hp - damage;
                     if(newHp <= 0) {
                        if (!brick.isClone) {
                            const brickProps = BRICK_PROPERTIES[brick.type];
                            earnedXp += brickProps.points;
                            earnedScore += brickProps.points;
                        }
                        bricksDestroyedThisTick++;
                        return null;
                     }
                     return {...brick, hp: newHp};
                }).filter((b): b is Brick => b !== null);
            }
        }
        
        if (bricksToTeleport.size > 0) {
            let bricksAfterTeleport: Brick[] = [];
            let nonTeleportingBricks: Brick[] = [];
            workingBricks.forEach(b => bricksToTeleport.has(b.id) ? bricksAfterTeleport.push(b) : nonTeleportingBricks.push(b));
            
            bricksAfterTeleport.forEach(brick => {
                const newSpot = findEmptySpotForBrick(nonTeleportingBricks, brick.width, brick.height);
                if (newSpot) {
                    nonTeleportingBricks.push({ ...brick, hp: brick.maxHp, x: newSpot.x, y: newSpot.y });
                }
            });
            workingBricks = nonTeleportingBricks;
        }

        let bricksToAdd: Brick[] = [];
        let ringsToCreate: ArcaneOverloadRing[] = [];
        let beamsToCreate: FinalGambitBeam[] = [];
        workingBricks = workingBricks.map(brick => {
            if (brick.type === BrickType.Archer && Math.random() < 0.005 * timeFactor) {
                newProjectiles.push({id: Date.now() + Math.random(), x: brick.x + brick.width / 2, y: brick.y + brick.height, vy: 3, size: 6});
            }
            
            if (brick.type === BrickType.ArchmageBoss && brick.hp > 0) {
                // PHASE TRANSITIONS
                if (brick.phase === 1 && (brick.hp / brick.maxHp) <= ARCHMAGE_PHASE2_THRESHOLD) {
                    brick.phase = 2;
                    brick.lastElementalStormTime = now;
                    brick.lastMirrorImageTime = now; 
                    brick.lastManaBurnTime = now;
                }
                 if (brick.phase === 2 && (brick.hp / brick.maxHp) <= ARCHMAGE_PHASE3_THRESHOLD) {
                    brick.phase = 3;
                    brick.lastChaosMagicTime = now;
                    brick.lastArcaneOverloadTime = now;
                }
                if (brick.phase === 3 && !brick.isFinalGambit && (brick.hp / brick.maxHp) <= ARCHMAGE_FINAL_GAMBIT_THRESHOLD) {
                    brick.isFinalGambit = true;
                    brick.vx = 0; // Stop moving
                    // Clear other hazards
                    newFireRainZones = []; newIceSpikeFields = []; newLightningStrikes = []; newArcaneOverloadRings = [];
                }

                if (brick.phase === 3) {
                    if (brick.isFinalGambit) {
                        // FINAL GAMBIT
                        if (newFinalGambitBeams.length === 0) {
                            beamsToCreate.push({
                                id: now,
                                x: GAME_WIDTH / 2 - 50,
                                width: 100,
                                createdAt: now,
                                warningDuration: FINAL_GAMBIT_BEAM_WARNING_DURATION,
                                strikeDuration: FINAL_GAMBIT_BEAM_STRIKE_DURATION,
                            });
                        }
                    } else {
                        // NORMAL PHASE 3
                         // Chaos Magic
                        if (!brick.lastChaosMagicTime) brick.lastChaosMagicTime = now;
                        if (now > brick.lastChaosMagicTime + ARCHMAGE_CHAOS_MAGIC_COOLDOWN) {
                            chaosMagicWasTriggered = true;
                            brick.lastChaosMagicTime = now;
                        }
                        // Arcane Overload
                        if (!brick.lastArcaneOverloadTime) brick.lastArcaneOverloadTime = now;
                        if (now > brick.lastArcaneOverloadTime + ARCHMAGE_ARCANE_OVERLOAD_COOLDOWN) {
                            ringsToCreate.push({
                                id: now,
                                x: brick.x + brick.width / 2,
                                y: brick.y + brick.height / 2,
                                createdAt: now,
                                duration: ARCANE_OVERLOAD_RING_DURATION,
                                maxRadius: 250,
                            });
                            brick.lastArcaneOverloadTime = now;
                        }
                    }
                } else if (brick.phase === 2) {
                    // Elemental Storm
                    if (!brick.lastElementalStormTime) brick.lastElementalStormTime = now;
                    if (now > brick.lastElementalStormTime + ARCHMAGE_ELEMENTAL_STORM_COOLDOWN) {
                        const attackType = brick.currentElementalAttack || 'fire';
                        switch(attackType) {
                            case 'fire':
                                for (let i = 0; i < 4; i++) {
                                    newFireRainZones.push({
                                        id: now + i,
                                        x: Math.random() * (GAME_WIDTH - FIRE_RAIN_RADIUS*2) + FIRE_RAIN_RADIUS,
                                        y: Math.random() * (GAME_HEIGHT - FIRE_RAIN_RADIUS*2) + FIRE_RAIN_RADIUS,
                                        radius: FIRE_RAIN_RADIUS,
                                        createdAt: now,
                                        duration: FIRE_RAIN_DURATION,
                                    });
                                }
                                brick.currentElementalAttack = 'ice';
                                break;
                            case 'ice':
                                for (let i = 0; i < 2; i++) {
                                    newIceSpikeFields.push({
                                        id: now + i,
                                        x: Math.random() * (GAME_WIDTH - ICE_SPIKE_WIDTH),
                                        y: Math.random() * (GAME_HEIGHT - ICE_SPIKE_HEIGHT),
                                        width: ICE_SPIKE_WIDTH,
                                        height: ICE_SPIKE_HEIGHT,
                                        createdAt: now,
                                        duration: ICE_SPIKE_DURATION,
                                    });
                                }
                                brick.currentElementalAttack = 'lightning';
                                break;
                            case 'lightning':
                                newLightningStrikes.push({
                                    id: now,
                                    x: paddleX + (paddleWidth / 2) - (LIGHTNING_STRIKE_WIDTH / 2), // Target player
                                    y: 0,
                                    width: LIGHTNING_STRIKE_WIDTH,
                                    height: GAME_HEIGHT,
                                    createdAt: now,
                                    warningDuration: LIGHTNING_STRIKE_WARNING_DURATION,
                                    strikeDuration: LIGHTNING_STRIKE_STRIKE_DURATION
                                });
                                brick.currentElementalAttack = 'fire';
                                break;
                        }
                        brick.lastElementalStormTime = now;
                    }
                    
                    // Mirror Image
                    if (!brick.lastMirrorImageTime) brick.lastMirrorImageTime = now;
                    const existingClones = workingBricks.filter(b => b.isClone && b.realBossId === brick.id).length;
                    if (existingClones < ARCHMAGE_MAX_CLONES && now > (brick.lastMirrorImageTime || 0) + ARCHMAGE_MIRROR_IMAGE_COOLDOWN) {
                        const clonesToSummon = ARCHMAGE_MAX_CLONES - existingClones;
                        for (let i = 0; i < clonesToSummon; i++) {
                            const newSpot = findEmptySpotForBrick([...workingBricks, ...bricksToAdd], brick.width, brick.height);
                            if (newSpot) {
                                bricksToAdd.push({
                                    id: Date.now() + Math.random() + i,
                                    ...newSpot,
                                    width: brick.width, height: brick.height,
                                    type: BrickType.ArchmageBoss,
                                    hp: 1, maxHp: 1,
                                    isClone: true, realBossId: brick.id, phase: 2,
                                });
                            }
                        }
                        brick.lastMirrorImageTime = now;
                    }

                    // Mana Burn
                    if (!brick.lastManaBurnTime) brick.lastManaBurnTime = now;
                    if (now > (brick.lastManaBurnTime || 0) + ARCHMAGE_MANA_BURN_COOLDOWN) {
                        manaBurnWasActivated = true;
                        brick.lastManaBurnTime = now;
                    }

                } else { // Phase 1 attacks
                    if (brick.lastAttackTime && now > brick.lastAttackTime + ARCHMAGE_TELEPORT_COOLDOWN) {
                        const otherBricks = workingBricks.filter(b => b.id !== brick.id);
                        const newSpot = findEmptySpotForBrick(otherBricks, brick.width, brick.height);
                        if (newSpot) {
                            brick.x = newSpot.x;
                            brick.y = newSpot.y;
                        }
                        brick.lastAttackTime = now;
                    }
                    
                    if (!brick.lastSummonTime) brick.lastSummonTime = now;
                    if (!brick.lastMissileTime) brick.lastMissileTime = now;

                    if (now > brick.lastSummonTime + ARCHMAGE_SUMMON_COOLDOWN) {
                        const apprenticeCount = workingBricks.filter(b => b.type === BrickType.Apprentice).length + bricksToAdd.length;
                        const summonsNeeded = ARCHMAGE_MAX_APPRENTICES - apprenticeCount;
                        if (summonsNeeded > 0) {
                            const apprenticeProps = BRICK_PROPERTIES[BrickType.Apprentice];
                            for (let i = 0; i < summonsNeeded; i++) {
                                const newSpot = findEmptySpotForBrick([...workingBricks, ...bricksToAdd], BRICK_WIDTH, BRICK_HEIGHT);
                                if (newSpot) {
                                    bricksToAdd.push({
                                        id: Date.now() + Math.random() + i,
                                        x: newSpot.x, y: newSpot.y,
                                        width: BRICK_WIDTH, height: BRICK_HEIGHT,
                                        type: BrickType.Apprentice,
                                        hp: apprenticeProps.maxHp, maxHp: apprenticeProps.maxHp
                                    });
                                }
                            }
                        }
                        brick.lastSummonTime = now;
                    }

                    if (now > brick.lastMissileTime + ARCHMAGE_MISSILE_COOLDOWN) {
                        for (let i = 0; i < 2; i++) {
                            const startX = brick.x + brick.width / 2;
                            const startY = brick.y + brick.height;
                            const angle = (Math.PI / 4) + (i * Math.PI / 2); // Eject at 45 and 135 deg
                            newHomingProjectiles.push({
                                id: Date.now() + Math.random() + i,
                                x: startX, y: startY,
                                vx: Math.cos(angle) * ARCHMAGE_MISSILE_SPEED,
                                vy: Math.sin(angle) * ARCHMAGE_MISSILE_SPEED,
                                size: 12,
                            });
                        }
                        brick.lastMissileTime = now;
                    }
                }
            }

            if (brick.type === BrickType.Boss && brick.hp > 0) {
                const isEnraged = brick.hp / brick.maxHp <= BOSS_ENRAGE_THRESHOLD;
                const currentMoveSpeed = BOSS_MOVE_SPEED * (isEnraged ? 1.75 : 1);
                const currentAttackCooldown = BOSS_ATTACK_COOLDOWN / (isEnraged ? 2 : 1);

                if (brick.vx) {
                    brick.x += brick.vx * timeFactor;
                    if (brick.x <= 0) {
                        brick.x = 0;
                        brick.vx = Math.abs(currentMoveSpeed);
                    } else if (brick.x >= GAME_WIDTH - brick.width) {
                        brick.x = GAME_WIDTH - brick.width;
                        brick.vx = -Math.abs(currentMoveSpeed);
                    }
                }
                if (brick.lastAttackTime && now > brick.lastAttackTime + currentAttackCooldown) {
                    newProjectiles.push({id: Date.now() + 1, x: brick.x + brick.width * 0.25, y: brick.y + brick.height, vy: BOSS_PROJECTILE_SPEED, size: 10});
                    newProjectiles.push({id: Date.now() + 2, x: brick.x + brick.width * 0.5, y: brick.y + brick.height, vy: BOSS_PROJECTILE_SPEED, size: 10});
                    newProjectiles.push({id: Date.now() + 3, x: brick.x + brick.width * 0.75, y: brick.y + brick.height, vy: BOSS_PROJECTILE_SPEED, size: 10});
                    brick.lastAttackTime = now;
                }
            }
            
            if (brick.type === BrickType.Soldier && brick.vx) {
                brick.x += brick.vx * timeFactor;
                if (brick.x <= 0 || brick.x >= GAME_WIDTH - brick.width) {
                    brick.vx = -brick.vx;
                    brick.x = Math.max(0, Math.min(brick.x, GAME_WIDTH - brick.width));
                }
            }
            return brick;
        });

        if (chaosMagicWasTriggered) {
            updatedBalls = updatedBalls.map(ball => {
                const speed = Math.hypot(ball.vx, ball.vy) || 4; // Use default speed if it's 0
                const newAngle = Math.random() * 2 * Math.PI;
                return { ...ball, vx: Math.cos(newAngle) * speed, vy: Math.sin(newAngle) * speed };
            });
        }
        
        if (bricksToAdd.length > 0) { workingBricks.push(...bricksToAdd); }
        if (ringsToCreate.length > 0) { newArcaneOverloadRings.push(...ringsToCreate); }
        if (beamsToCreate.length > 0) { newFinalGambitBeams.push(...beamsToCreate); }

        // Cleanup clones if boss is defeated
        const bossIsAlive = workingBricks.some(b => b.type === BrickType.ArchmageBoss && !b.isClone);
        if (!bossIsAlive && workingBricks.some(b => b.isClone)) {
            workingBricks = workingBricks.filter(b => !b.isClone);
        }

        const isBarrierActive = skills.barrier.activeUntil && now < skills.barrier.activeUntil;
        newProjectiles = newProjectiles.map(p => ({...p, y: p.y + p.vy * timeFactor})).filter(p => {
            if(isBarrierActive && p.y > PADDLE_Y - 20 && p.y < PADDLE_Y - 10) return false;
            if(p.y > PADDLE_Y && p.y < PADDLE_Y + PADDLE_HEIGHT && p.x > paddleX && p.x < paddleX + paddleWidth) {
                 const damage = (p.size > 8 ? BOSS_PROJECTILE_DAMAGE : 5);
                 damageToPlayer += Math.max(1, damage - playerStats.defense);
                 return false;
            }
            return p.y < GAME_HEIGHT;
        });

        // Homing Projectiles
        const paddleCenterX = paddleX + paddleWidth / 2;
        const paddleCenterY = PADDLE_Y + PADDLE_HEIGHT / 2;

        newHomingProjectiles = newHomingProjectiles.map(p => {
            const targetDx = paddleCenterX - p.x;
            const targetDy = paddleCenterY - p.y;
            const targetDist = Math.hypot(targetDx, targetDy);

            if (targetDist > 1) {
                const targetDirX = targetDx / targetDist;
                const targetDirY = targetDy / targetDist;
                
                const currentSpeed = Math.hypot(p.vx, p.vy) || ARCHMAGE_MISSILE_SPEED;
                
                const newVx = p.vx * (1 - ARCHMAGE_MISSILE_TURN_RATE) + targetDirX * currentSpeed * ARCHMAGE_MISSILE_TURN_RATE;
                const newVy = p.vy * (1 - ARCHMAGE_MISSILE_TURN_RATE) + targetDirY * currentSpeed * ARCHMAGE_MISSILE_TURN_RATE;
                
                const newMag = Math.hypot(newVx, newVy);
                p.vx = (newVx / newMag) * ARCHMAGE_MISSILE_SPEED;
                p.vy = (newVy / newMag) * ARCHMAGE_MISSILE_SPEED;
            }

            p.x += p.vx * timeFactor;
            p.y += p.vy * timeFactor;
            return p;

        }).filter(p => {
            if (p.y + p.size > PADDLE_Y && p.y < PADDLE_Y + PADDLE_HEIGHT && p.x + p.size > paddleX && p.x < paddleX + paddleWidth) {
                damageToPlayer += Math.max(1, ARCHMAGE_MISSILE_DAMAGE - playerStats.defense);
                return false;
            }
            return p.y < GAME_HEIGHT + 20 && p.y + p.size > -20 && p.x < GAME_WIDTH + 20 && p.x + p.size > -20;
        });
    }

    // Process environmental hazards
    newFireRainZones = newFireRainZones.filter(zone => {
        if (now > zone.createdAt + zone.duration) return false;
        // Check paddle collision - damage over time
        const dist = Math.hypot(paddleX + paddleWidth/2 - zone.x, PADDLE_Y + PADDLE_HEIGHT/2 - zone.y);
        if (dist < zone.radius + Math.max(paddleWidth/2, PADDLE_HEIGHT/2)) {
            damageToPlayer += FIRE_RAIN_DAMAGE / 60; // Damage per frame, assuming 60fps loop
        }
        return true;
    });

    newIceSpikeFields = newIceSpikeFields.filter(field => now < field.createdAt + field.duration);
    
    newLightningStrikes = newLightningStrikes.filter(strike => {
        const strikeStartTime = strike.createdAt + strike.warningDuration;
        const isStrikeOver = now > strikeStartTime + strike.strikeDuration;
        if (isStrikeOver) return false;

        const isStriking = now > strikeStartTime;
        if (isStriking) {
            // Check paddle collision
            if (paddleX < strike.x + strike.width && paddleX + paddleWidth > strike.x) {
                damageToPlayer += LIGHTNING_STRIKE_DAMAGE;
                return false; // Strike hits once and disappears
            }
        }
        return true;
    });

    newArcaneOverloadRings = newArcaneOverloadRings.filter(ring => {
        if (now > ring.createdAt + ring.duration) return false;
        const progress = (now - ring.createdAt) / ring.duration;
        const currentRadius = ring.maxRadius * progress;
        // Check paddle collision - damage on intersection
        const distToPaddleCenter = Math.hypot(paddleX + paddleWidth/2 - ring.x, PADDLE_Y + PADDLE_HEIGHT/2 - ring.y);
        if (Math.abs(distToPaddleCenter - currentRadius) < (PADDLE_HEIGHT + 2)) { // 2 is ring thickness
             damageToPlayer += ARCANE_OVERLOAD_RING_DAMAGE / 60; // Damage per frame while intersecting
        }
        return true;
    });

    newFinalGambitBeams = newFinalGambitBeams.filter(beam => {
        const strikeStartTime = beam.createdAt + beam.warningDuration;
        const isBeamOver = now > strikeStartTime + beam.strikeDuration;
        if (isBeamOver) return false;

        const isStriking = now > strikeStartTime;
        if (isStriking) {
             if (paddleX < beam.x + beam.width && paddleX + paddleWidth > beam.x) {
                damageToPlayer += FINAL_GAMBIT_BEAM_DAMAGE / 60; // Heavy damage over time
            }
        }
        return true;
    });


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

    if (workingBricks.length === 0 && originalBricks.length > 0 && !originalBricks.some(b => b.type === BrickType.Boss || b.type === BrickType.ArchmageBoss)) {
        updates.stageCompleted = true;
    } else if (workingBricks.filter(b => b.type !== BrickType.ArchmageBoss || !b.isClone).length === 0 && originalBricks.length > 0) {
         updates.stageCompleted = true;
    }

    return updates;
};