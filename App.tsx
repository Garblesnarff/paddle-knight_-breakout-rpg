import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameStatus, Brick, Ball, PlayerStats, Skill, BrickType, Projectile, Explosion, RunicEmpowermentBuffs, ArcaneOrb, ElementalBeam, BallHistoryEntry, HomingProjectile, FireRainZone, IceSpikeField, LightningStrike, ArcaneOverloadRing, FinalGambitBeam, SkillType, Cosmetics } from './types';
import { GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_Y, BALL_RADIUS, INITIAL_PLAYER_STATS, INITIAL_SKILLS, BRICK_PROPERTIES, LEVEL_UP_XP, BOSS_ENRAGE_THRESHOLD, ARCHMAGE_MANA_BURN_DURATION } from './constants';
import { SKILL_TREE_DATA } from './game/skills';
import { MAX_LEVELS, createBricksForStage } from './game/level-manager';
import { STAGE_CONFIG } from './game/stage-config';
import { StartScreen } from './components/StartScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { VictoryScreen } from './components/VictoryScreen';
import { Shop } from './components/Shop';
import { TopUI, BottomUI } from './components/GameUI';
import { SkillTree } from './components/SkillTree';
import { StageSelector } from './components/StageSelector';
import { runGameIteration } from './game/gameEngine';
import { useGameLoop } from './hooks/useGameLoop';
import SaveManager from './services/SaveManager';

const App: React.FC = () => {
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Start);
    const [paddleX, setPaddleX] = useState(GAME_WIDTH / 2 - 50);
    const [balls, setBalls] = useState<Ball[]>([]);
    const [bricks, setBricks] = useState<Brick[]>([]);
    const [projectiles, setProjectiles] = useState<Projectile[]>([]);
    const [homingProjectiles, setHomingProjectiles] = useState<HomingProjectile[]>([]);
    const [explosions, setExplosions] = useState<Explosion[]>([]);
    const [arcaneOrbs, setArcaneOrbs] = useState<ArcaneOrb[]>([]);
    const [elementalBeams, setElementalBeams] = useState<ElementalBeam[]>([]);
    const [fireRainZones, setFireRainZones] = useState<FireRainZone[]>([]);
    const [iceSpikeFields, setIceSpikeFields] = useState<IceSpikeField[]>([]);
    const [lightningStrikes, setLightningStrikes] = useState<LightningStrike[]>([]);
    const [arcaneOverloadRings, setArcaneOverloadRings] = useState<ArcaneOverloadRing[]>([]);
    const [finalGambitBeams, setFinalGambitBeams] = useState<FinalGambitBeam[]>([]);
    const [ballHistory, setBallHistory] = useState<Record<number, BallHistoryEntry[]>>({});
    const [hp, setHp] = useState(INITIAL_PLAYER_STATS.vitality);
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [stage, setStage] = useState(1);
    const [gold, setGold] = useState(0);
    const [score, setScore] = useState(0);
    const [skills, setSkills] = useState<Record<string, Skill>>(JSON.parse(JSON.stringify(INITIAL_SKILLS)));
    const [levelUpMessage, setLevelUpMessage] = useState<string | null>(null);
    const [isBallLaunched, setIsBallLaunched] = useState(false);
    const [skillPoints, setSkillPoints] = useState(0);
    const [unlockedSkills, setUnlockedSkills] = useState<Record<string, number>>({});
    const [runicEmpowermentCounter, setRunicEmpowermentCounter] = useState(0);
    const [activeBuffs, setActiveBuffs] = useState<RunicEmpowermentBuffs>({ haste: false, power: false, shield: false });
    const [targetingSkillId, setTargetingSkillId] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [manaBurnActiveUntil, setManaBurnActiveUntil] = useState<number | null>(null);
    const [maxActiveSkills, setMaxActiveSkills] = useState(2);
    const [equippedSkills, setEquippedSkills] = useState<string[]>([]);
    const [permanentStats, setPermanentStats] = useState<Partial<PlayerStats>>({});
    const [cosmetics, setCosmetics] = useState<Cosmetics>({ ballEffect: 'none' });
    const [currentStageId, setCurrentStageId] = useState(1);
    const [stageBricksTotal, setStageBricksTotal] = useState(0);
    const [stageInitialHp, setStageInitialHp] = useState(0);
    const [lastStageGold, setLastStageGold] = useState(0);
    const [lastStageStars, setLastStageStars] = useState(0);
    const [stageStartTime, setStageStartTime] = useState(0); // Add this line

    const calculateStars = (): number => {
        const stageConfig = STAGE_CONFIG.find(s => s.id === currentStageId);
        if (!stageConfig) return 1;

        let stars = 1; // Always get 1 star for completing

        // Star 2: HP requirement
        const hpPercent = (hp / stageInitialHp) * 100;
        if (hpPercent >= stageConfig.starCriteria.minHpPercent) {
            stars++;
        }

        // Star 3: Time requirement + all bricks
        const timeTaken = Date.now() - stageStartTime;
        const allBricksDestroyed = bricks.length === 0;
        if (timeTaken <= stageConfig.starCriteria.time && allBricksDestroyed) {
            stars++;
        }

        return stars;
    };

    useEffect(() => {
        // Load saved data on component mount
        const savedData = SaveManager.load();

        // Apply saved player data
        setGold(savedData.player.gold);
        setSkillPoints(savedData.player.skillPoints);
        setUnlockedSkills(savedData.player.unlockedSkills);

        // You'll use stage data when we build the stage selector
        console.log('Game loaded:', savedData);
    }, []);

    const handleStageComplete = (stageId: number, stars: number, score: number) => {
        const completionTime = Date.now() - stageStartTime; // You'll need to track this

        SaveManager.updateStageData(stageId, {
            stars: Math.max(stars, SaveManager.load().stages[stageId]?.stars || 0),
            bestScore: Math.max(score, SaveManager.load().stages[stageId]?.bestScore || 0),
            bestTime: Math.min(completionTime, SaveManager.load().stages[stageId]?.bestTime || Infinity),
            completed: true
        });

        // Unlock next stage
        SaveManager.unlockNextStage(stageId + 1);
    };
    
    const gameAreaRef = useRef<HTMLDivElement>(null);

    const playerStats = React.useMemo(() => {
        const stats: PlayerStats = { ...INITIAL_PLAYER_STATS };
        Object.entries(unlockedSkills).forEach(([skillId, sLevel]: [string, number]) => {
            if (sLevel > 0) {
                const skillData = SKILL_TREE_DATA[skillId];
                if (skillData) {
                    switch (skillId) {
                        case 'powerBoost': stats.power += sLevel * 2; break;
                        case 'vitalityBoost': stats.vitality += sLevel * 20; break;
                        case 'defenseBoost': stats.defense += sLevel * 1; break;
                        case 'arcaneIntellect': stats.wisdom += sLevel * 3; break;
                    }
                }
            }
        });
        return stats;
    }, [unlockedSkills]);
    
    const maxHp = playerStats.vitality + (level > 1 ? (level - 1) * 10 : 0);
    const maxMana = React.useMemo(() => {
        const arcaneIntellectLevel = unlockedSkills['arcaneIntellect'] || 0;
        if (stage > 1 || arcaneIntellectLevel > 0) {
            return 100 + (arcaneIntellectLevel * 20);
        }
        return 0;
    }, [unlockedSkills, stage]);

    const [mana, setMana] = useState(maxMana);
    
    const paddleWidth = 100; // Default paddle width, adjust as needed

    const paddleStyle: React.CSSProperties = {
        left: paddleX,
        top: PADDLE_Y,
        width: paddleWidth,
        height: PADDLE_HEIGHT,
    };

    const resetGame = useCallback(() => {
        setHp(maxHp);
        setMana(maxMana);
        setXp(0);
        setLevel(1);
        setScore(0);
        // Preserve purchased skills (unlockedSkills) across stages, but reset per-run skill runtime state.
        // Do NOT overwrite to INITIAL_SKILLS which would clear lastUsed/charges state incorrectly relative to unlocks.
        setSkills(prev => {
            const next = { ...prev };
            // Reset runtime-only fields on skills for a new run
            Object.keys(next).forEach((key) => {
                const s = next[key];
                // Reset cooldowns and durations
                next[key] = {
                    ...s,
                    lastUsed: 0,
                    activeUntil: undefined,
                    // Reset charges to their initial per-run value if the skill defines charges
                    ...(INITIAL_SKILLS[key as keyof typeof INITIAL_SKILLS]?.charges !== undefined
                        ? { charges: INITIAL_SKILLS[key as keyof typeof INITIAL_SKILLS]!.charges }
                        : {})
                };
            });
            return next;
        });
        setGameStatus(GameStatus.Playing);
        setBalls([{ id: 0, x: GAME_WIDTH / 2, y: PADDLE_Y - 20, vx: 0, vy: 0, size: BALL_RADIUS, damage: 0 }]);
        setIsBallLaunched(false);
        setProjectiles([]);
        setHomingProjectiles([]);
        setExplosions([]);
        setArcaneOrbs([]);
        setElementalBeams([]);
        setFireRainZones([]);
        setIceSpikeFields([]);
        setLightningStrikes([]);
        setArcaneOverloadRings([]);
        setFinalGambitBeams([]);
        setBallHistory({});
        setActiveBuffs({ haste: false, power: false, shield: false });
        setRunicEmpowermentCounter(0);
        setTargetingSkillId(null);
        setManaBurnActiveUntil(null);
        setMaxActiveSkills(2);
        setEquippedSkills([]);
    }, [maxHp, maxMana, cosmetics, INITIAL_SKILLS]);
    
    useEffect(() => {
        setMana(maxMana);
    }, [maxMana]);

    // Effect to handle timed buffs from Runic Empowerment
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | undefined;
        if (activeBuffs.haste || activeBuffs.power) {
            timer = setTimeout(() => {
                setActiveBuffs((b: RunicEmpowermentBuffs) => ({ ...b, haste: false, power: false }));
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [activeBuffs.haste, activeBuffs.power]);

    const handleStart = () => {
        setGameStatus(GameStatus.StageSelect);
    };

    const handleStageSelect = (stageId: number) => {
        setCurrentStageId(stageId);
        setStage(stageId);
        resetGame();
        const stageBricks = createBricksForStage(stageId);
        setBricks(stageBricks);
        setStageBricksTotal(stageBricks.length);
        setStageStartTime(Date.now());
        setStageInitialHp(maxHp);
        setGameStatus(GameStatus.Playing);
    };

    const handleOpenSkillTree = useCallback(() => {
        if (gameStatus === GameStatus.Playing) {
            setGameStatus(GameStatus.SkillTree);
        }
    }, [gameStatus]);
    
    const handleCloseSkillTree = useCallback(() => {
        if (gameStatus === GameStatus.SkillTree) {
            setHp((currentHp: number) => Math.min(currentHp, maxHp));
            setMana((currentMana: number) => Math.min(currentMana, maxMana));
            setGameStatus(GameStatus.Playing);
        }
    }, [gameStatus, maxHp, maxMana]);

    const handleLearnSkill = (skillId: string) => {
        const skill = SKILL_TREE_DATA[skillId];
        if (!skill) return;

        const currentLevel = unlockedSkills[skillId] || 0;
        const cost = skill.cost(currentLevel);

        if (skillPoints >= cost && currentLevel < skill.maxLevel) {
            const areDependenciesMet = skill.dependencies.every(depId => (unlockedSkills[depId] || 0) > 0);
            if (areDependenciesMet) {
                setSkillPoints((sp: number) => sp - cost);
                setUnlockedSkills((prev: Record<string, number>) => ({
                    ...prev,
                    [skillId]: (prev[skillId] || 0) + 1,
                }));

                // Auto-equip active skills if there's space
                if (skill.type === SkillType.Active && !equippedSkills.includes(skillId) && equippedSkills.length < maxActiveSkills) {
                    setEquippedSkills((prev: string[]) => [...prev, skillId]);
                }
            }
        }
    };
    
    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (!gameAreaRef.current) return;
            const rect = gameAreaRef.current.getBoundingClientRect();
            let newX = e.clientX - rect.left - paddleWidth / 2;
            newX = Math.max(0, Math.min(newX, GAME_WIDTH - paddleWidth));
            setPaddleX(newX);
        };

        if (gameStatus === GameStatus.Playing) {
            window.addEventListener('mousemove', handleGlobalMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, [gameStatus, paddleWidth]);

    useEffect(() => {
        const gameArea = gameAreaRef.current;
        if (!gameArea) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = gameArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({ x, y });
        };

        if (gameStatus === GameStatus.Targeting) {
            gameArea.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (gameArea) {
                gameArea.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [gameStatus]);
    
    const handleSkillActivation = useCallback((skillId: string) => {
        const now = Date.now();
        const skill = skills[skillId];
        if (!skill) return;
        
        const isManaBurned = manaBurnActiveUntil && now < manaBurnActiveUntil;
        const effectiveCooldown = isManaBurned ? skill.cooldown * 2 : skill.cooldown;

        if (skillId !== 'arcaneOrb' && now - skill.lastUsed < effectiveCooldown) return;

        let updatedSkill: Skill | null = null;
        
        const baseDuration = skill.duration || 0;
        // Each point of wisdom increases skill duration by 5%
        const wisdomBonus = 1 + (playerStats.wisdom * 0.05);
        const effectiveDuration = baseDuration * wisdomBonus;

        switch(skillId) {
            case 'multiBall':
                setBalls((prev: Ball[]) => {
                    if (prev.length > 0 && isBallLaunched) {
                        const originalBall = prev.find((b: Ball) => b.vy !== 0) || prev[0];
                        return [
                            ...prev,
                            { ...originalBall, id: Date.now(), vx: -originalBall.vx, vy: originalBall.vy, damage: originalBall.damage },
                            { ...originalBall, id: Date.now()+1, vy: -originalBall.vy, damage: originalBall.damage }
                        ]
                    }
                    return prev;
                });
                updatedSkill = { ...skill, lastUsed: now, activeUntil: skill.duration ? now + effectiveDuration : undefined };
                break;
            case 'arcaneOrb': {
                const MANA_COST = 50;
                const isArcaneOrbOnCooldown = now - skill.lastUsed < effectiveCooldown;
                if (mana < MANA_COST || isArcaneOrbOnCooldown) return;

                setGameStatus(GameStatus.Targeting);
                setTargetingSkillId('arcaneOrb');
                return; // Logic moves to handleGameClick
            }
            case 'elementalInfusion':
                updatedSkill = { ...skill, lastUsed: now, charges: INITIAL_SKILLS.elementalInfusion.charges };
                break;
            case 'timeWarp': {
                const MANA_COST = 150;
                if (mana < MANA_COST || balls.length === 0) return;
                setMana((m: number) => m - MANA_COST);

                const rewindTime = now - 2000;
                const newBalls = balls.map((ball: Ball) => {
                    const history = ballHistory[ball.id];
                    if (!history || history.length === 0) {
                        return ball; // No history, return as is
                    }
                    
                    const targetEntry = history.reduce((prev: BallHistoryEntry, curr: BallHistoryEntry) => {
                        return Math.abs(curr.timestamp - rewindTime) < Math.abs(prev.timestamp - rewindTime) ? curr : prev;
                    });

                    return { ...ball, x: targetEntry.x, y: targetEntry.y, vx: targetEntry.vx, vy: targetEntry.vy };
                });
                
                setBalls(newBalls);
                updatedSkill = { ...skill, lastUsed: now };
                break;
            }
            default:
                 updatedSkill = { ...skill, lastUsed: now, activeUntil: skill.duration ? now + effectiveDuration : undefined };
        }

        if (updatedSkill) {
            setSkills((prev: Record<string, Skill>) => ({...prev, [skillId]: updatedSkill as Skill }));
        }

    }, [skills, isBallLaunched, playerStats, mana, paddleX, paddleWidth, balls, ballHistory, manaBurnActiveUntil]);
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();
            if (gameStatus === GameStatus.Playing) {
                if (key === 't') {
                    handleOpenSkillTree();
                } else if (key === '1') {
                    if ((unlockedSkills['multiBallUnlock'] || 0) > 0) {
                        handleSkillActivation('multiBall');
                    }
                } else if (key === '2') {
                    if ((unlockedSkills['elementalInfusion'] || 0) > 0) {
                        handleSkillActivation('elementalInfusion');
                    }
                } else if (key === '3') {
                    if ((unlockedSkills['arcaneOrb'] || 0) > 0) {
                        handleSkillActivation('arcaneOrb');
                    }
                } else if (key === '4') {
                    if ((unlockedSkills['timeWarp'] || 0) > 0) {
                        handleSkillActivation('timeWarp');
                    }
                }
            } else if (gameStatus === GameStatus.SkillTree) {
                 if (key === 't' || key === 'escape') {
                    handleCloseSkillTree();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [gameStatus, unlockedSkills, handleSkillActivation, handleOpenSkillTree, handleCloseSkillTree]);


    const handleGameClick = useCallback(() => {
        if (gameStatus === GameStatus.Targeting) {
            if (targetingSkillId === 'arcaneOrb') {
                const MANA_COST = 50;
                if (mana < MANA_COST) {
                    setGameStatus(GameStatus.Playing);
                    setTargetingSkillId(null);
                    return;
                }

                setMana((m: number) => m - MANA_COST);

                const startX = paddleX + paddleWidth / 2;
                const startY = PADDLE_Y - 24;
                const targetX = mousePos.x;
                const targetY = mousePos.y;

                const dx = targetX - startX;
                const dy = targetY - startY;
                const dist = Math.hypot(dx, dy);
                const orbSpeed = 3;

                const vx = dist > 0 ? (dx / dist) * orbSpeed : 0;
                const vy = dist > 0 ? (dy / dist) * orbSpeed : -orbSpeed;
                
                const orbDamage = 2 + playerStats.wisdom * 0.5;

                const newOrb: ArcaneOrb = {
                    id: Date.now(),
                    x: startX - 12,
                    y: startY,
                    vx: vx,
                    vy: vy,
                    radius: 12,
                    damage: orbDamage,
                };
                setArcaneOrbs((prev: ArcaneOrb[]) => [...prev, newOrb]);

                setSkills((prev: Record<string, Skill>) => ({
                    ...prev,
                    arcaneOrb: { ...prev.arcaneOrb, lastUsed: Date.now() }
                }));

                setGameStatus(GameStatus.Playing);
                setTargetingSkillId(null);
            }
        } else if (!isBallLaunched && gameStatus === GameStatus.Playing) {
            setIsBallLaunched(true);
            setBalls((prevBalls: Ball[]) => prevBalls.map((ball: Ball, index: number) => index === 0 ? { ...ball, vx: 4, vy: -4, damage: playerStats.power } : ball));
        }
    }, [isBallLaunched, gameStatus, playerStats.power, targetingSkillId, mana, paddleX, paddleWidth, mousePos, playerStats.wisdom]);

    const gameTick = useCallback(() => {
        const updates = runGameIteration({
            balls,
            bricks,
            projectiles,
            homingProjectiles,
            arcaneOrbs,
            fireRainZones,
            iceSpikeFields,
            lightningStrikes,
            arcaneOverloadRings,
            finalGambitBeams,
            paddleX,
            paddleWidth,
            playerStats,
            skills,
            isBallLaunched,
            hp,
            xp,
            level,
            unlockedSkills,
            mana,
            maxMana,
            activeBuffs,
            maxActiveSkills,
            equippedSkills,
        });

        if (updates.balls) {
            setBalls(updates.balls);

            // Update ball history for rewind skill
            setBallHistory(currentHistory => {
                const now = Date.now();
                const nextHistory: Record<number, BallHistoryEntry[]> = {};

                for (const ball of updates.balls!) {
                    const historyEntry: BallHistoryEntry = { x: ball.x, y: ball.y, vx: ball.vx, vy: ball.vy, timestamp: now };
                    const oldHistory = currentHistory[ball.id] || [];
                    const newHistory = [...oldHistory, historyEntry].filter(entry => now - entry.timestamp < 3000); // 3s history
                    nextHistory[ball.id] = newHistory;
                }
                return nextHistory;
            });
        }
        if (updates.bricks) setBricks(updates.bricks);
        if (updates.projectiles) setProjectiles(updates.projectiles);
        if (updates.homingProjectiles) setHomingProjectiles(updates.homingProjectiles);
        if (updates.arcaneOrbs) setArcaneOrbs(updates.arcaneOrbs);
        if (updates.fireRainZones) setFireRainZones(updates.fireRainZones);
        if (updates.iceSpikeFields) setIceSpikeFields(updates.iceSpikeFields);
        if (updates.lightningStrikes) setLightningStrikes(updates.lightningStrikes);
        if (updates.arcaneOverloadRings) setArcaneOverloadRings(updates.arcaneOverloadRings);
        if (updates.finalGambitBeams) setFinalGambitBeams(updates.finalGambitBeams);
        if (updates.isBallLaunched !== undefined) setIsBallLaunched(updates.isBallLaunched);
        
        if (updates.newExplosions) {
            setExplosions((current: Explosion[]) => [...current, ...updates.newExplosions!]);
        }
        if (updates.newElementalBeams) {
            setElementalBeams((current: ElementalBeam[]) => [...current, ...updates.newElementalBeams!]);
        }

        if (updates.manaBurnActivated) {
            setManaBurnActiveUntil(Date.now() + ARCHMAGE_MANA_BURN_DURATION);
        }

        setExplosions((current: Explosion[]) => current.filter((e: Explosion) => Date.now() - e.createdAt < e.duration));
        setElementalBeams((current: ElementalBeam[]) => current.filter((b: ElementalBeam) => Date.now() - b.createdAt < b.duration));


        let finalHp = hp;
        if (updates.levelUps && updates.levelUps > 0) {
            setSkillPoints((sp: number) => sp + updates.levelUps!);
            const newMaxHp = playerStats.vitality + ((level + updates.levelUps!) - 1) * 10;
            finalHp = newMaxHp; // Full heal on level up
            setMana(maxMana); // Full mana on level up
            setLevel((l: number) => l + updates.levelUps!);
            setLevelUpMessage(`Level Up! +${updates.levelUps} Skill Point!`);
            setTimeout(() => setLevelUpMessage(null), 2500);
        }
        if (updates.xpGained) setXp(xp + updates.xpGained);
        if (updates.xp) setXp(updates.xp);
        
        if (updates.damageToPlayer) {
            finalHp = Math.max(0, finalHp - updates.damageToPlayer);
        }
        
        setHp(finalHp);
        const manaSpentVal = (updates as any).manaSpent as number | undefined;
        const manaGainedVal = (updates as any).manaGained as number | undefined;
        const goldGainedVal = (updates as any).goldGained as number | undefined;
        const scoreGainedVal = (updates as any).scoreGained as number | undefined;

        if (typeof manaSpentVal === 'number') setMana((m: number) => Math.max(0, m - manaSpentVal));
        if (typeof manaGainedVal === 'number') setMana((m: number) => Math.min(maxMana, m + manaGainedVal));

        if (typeof goldGainedVal === 'number') setGold((g: number) => g + goldGainedVal);
        if (typeof scoreGainedVal === 'number') setScore((s: number) => s + scoreGainedVal);

        if (updates.chargesConsumed) {
            setSkills((prev: Record<string, Skill>) => {
                const nextSkills = {...prev};
                updates.chargesConsumed?.forEach(({skillId, amount}) => {
                    const skill = nextSkills[skillId];
                    if (skill && skill.charges) {
                        nextSkills[skillId] = {...skill, charges: Math.max(0, skill.charges - amount)};
                    }
                });
                return nextSkills;
            })
        }

        // Runic Empowerment Logic
        if ((unlockedSkills.runicEmpowerment || 0) > 0) {
            if (updates.bricksDestroyed && updates.bricksDestroyed > 0) {
                const counter = runicEmpowermentCounter + updates.bricksDestroyed;
                if (counter >= 5) {
                    const newCount = counter % 5;
                    setRunicEmpowermentCounter(newCount);

                    const rand = Math.random();
                    if (rand < 0.33) {
                        setActiveBuffs((b: RunicEmpowermentBuffs) => ({ haste: true, power: false, shield: false }));
                    } else if (rand < 0.66) {
                        setActiveBuffs((b: RunicEmpowermentBuffs) => ({ haste: false, power: true, shield: false }));
                    } else {
                        setActiveBuffs((b: RunicEmpowermentBuffs) => ({ ...b, shield: true }));
                    }
                } else {
                    setRunicEmpowermentCounter(counter);
                }
            }
            if (updates.shieldUsed) {
                setActiveBuffs((b: RunicEmpowermentBuffs) => ({ ...b, shield: false }));
            }
        }

        if (hp > 0 && finalHp <= 0) {
            setGameStatus(GameStatus.GameOver);
        } else if (updates.stageCompleted) {
            const stars = calculateStars();
            const goldEarned = 100 + (stars * 25) + (stars === 3 ? 50 : 0);
            setLastStageGold(goldEarned);
            setLastStageStars(stars);
            handleStageComplete(currentStageId, stars, score);
            setGameStatus(GameStatus.VictoryScreen);
        }
    }, [balls, bricks, projectiles, homingProjectiles, arcaneOrbs, fireRainZones, iceSpikeFields, lightningStrikes, arcaneOverloadRings, finalGambitBeams, paddleX, paddleWidth, playerStats, skills, isBallLaunched, hp, mana, maxMana, xp, level, unlockedSkills, stage, score, gold, activeBuffs, runicEmpowermentCounter]);

    useGameLoop(gameTick, gameStatus === GameStatus.Playing);

    const renderBrick = (brick: Brick) => {
        const brickProps = BRICK_PROPERTIES[brick.type];
        const hpPercentage = (brick.hp / brick.maxHp) * 100;
        let isEnraged = brick.type === BrickType.Boss && (brick.hp / brick.maxHp) <= BOSS_ENRAGE_THRESHOLD;
        if (brick.type === BrickType.ArchmageBoss && (brick.phase === 2 || brick.phase === 3)) {
            isEnraged = true;
        }

        let brickColor = isEnraged ? 'bg-red-600' : brickProps.color;
        
        if (brick.type === BrickType.Chaos) {
             brickColor = 'bg-gradient-to-br from-purple-600 via-pink-600 to-red-700';
        } else if (brick.type === BrickType.Mirror) {
            brickColor = 'bg-gradient-to-br from-slate-100 to-slate-400';
        } else if (brick.type === BrickType.Rune) {
            brickColor = 'bg-gradient-to-br from-purple-600 to-indigo-800';
        }

        const brickClasses = `absolute rounded-md shadow-inner shadow-black/40 ${brickColor} border-t-2 border-l-2 border-gray-500/30 border-b-2 border-r-2 border-black/30`;
        const brickStyle: React.CSSProperties = { left: brick.x, top: brick.y, width: brick.width, height: brick.height, transition: 'opacity 0.3s' };

        if (brick.isClone) {
            brickStyle.opacity = 0.6;
            brickStyle.filter = 'saturate(0.5)';
        }

        // Shield visual takes precedence
        if (brick.shieldHp && brick.shieldHp > 0) {
            brickStyle.boxShadow = '0 0 12px 5px #67e8f9'; // Bright cyan glow
            brickStyle.border = '1px solid #cffafe';
        } else if (brick.type === BrickType.Apprentice) {
            Object.assign(brickStyle, { boxShadow: '0 0 8px 2px #38bdf8' });
        } else if (brick.type === BrickType.Ice) {
             Object.assign(brickStyle, { boxShadow: '0 0 10px 3px #67e8f9' });
        } else if (brick.type === BrickType.Lightning) {
             Object.assign(brickStyle, { boxShadow: '0 0 12px 3px #facc15' });
        } else if (brick.type === BrickType.Mirror) {
            Object.assign(brickStyle, { boxShadow: '0 0 15px 4px #e2e8f0' });
        }

        if(isEnraged) {
            brickStyle.animation = 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite';
            brickStyle.boxShadow = '0 0 20px 8px #a855f7';
        }

        return (
            <div key={brick.id} style={brickStyle} className={brickClasses}>
                {brick.type === BrickType.Rune && <span className="text-xl text-yellow-300 font-medieval absolute inset-0 flex items-center justify-center select-none opacity-80">❖</span>}
                {brick.maxHp > 1 && !brick.isClone && (
                    <div className="absolute -bottom-1 w-full h-1 bg-gray-900/50 rounded-full p-px">
                        <div className="bg-green-500 h-full rounded-full" style={{width: `${hpPercentage}%`}}></div>
                    </div>
                )}
            </div>
        )
    };
    
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-900">
            {gameStatus === GameStatus.Start && <StartScreen onStart={handleStart} />}
            {gameStatus === GameStatus.StageSelect && (
                <StageSelector 
                    onSelectStage={handleStageSelect}
                    onBack={() => setGameStatus(GameStatus.Start)}
                />
            )}
            
            {(gameStatus !== GameStatus.Start) && (
                 <div className="absolute inset-0 bg-gray-800 -z-10" style={{backgroundImage: "repeating-linear-gradient(0deg, #374151, #374151 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #374151, #374151 1px, transparent 1px, transparent 20px)", backgroundSize: '40px 40px', opacity: 0.1}}></div>
            )}

            {(gameStatus === GameStatus.Playing || gameStatus === GameStatus.Paused || gameStatus === GameStatus.SkillTree || gameStatus === GameStatus.Targeting) && (
                <div className="flex flex-col gap-2 p-2 bg-gradient-to-b from-gray-800 to-black/80 border-4 border-slate-900/80 rounded-xl shadow-2xl shadow-purple-900/50" style={{ width: GAME_WIDTH + 32 }}>
                    
                    <TopUI hp={hp} maxHp={maxHp} mana={mana} maxMana={maxMana} xp={xp} level={level} gold={gold} stage={stage}/>
                    
                    <div className="relative shadow-inner cursor-pointer bg-black/50 border-2 border-slate-900" style={{ width: GAME_WIDTH, height: GAME_HEIGHT }} ref={gameAreaRef} onClick={handleGameClick}>
                        
                        {fireRainZones.map(zone => {
                            const progress = (Date.now() - zone.createdAt) / zone.duration;
                            return <div key={zone.id} className="absolute rounded-full bg-red-600/50 border-2 border-red-400 animate-pulse" style={{
                                left: zone.x - zone.radius,
                                top: zone.y - zone.radius,
                                width: zone.radius * 2,
                                height: zone.radius * 2,
                                opacity: 0.8 - (progress * 0.5),
                                zIndex: 5,
                            }} />;
                        })}
                        {iceSpikeFields.map(field => {
                            const progress = (Date.now() - field.createdAt) / field.duration;
                            return <div key={field.id} className="absolute rounded-lg bg-cyan-500/30 backdrop-blur-sm border-2 border-cyan-300" style={{
                                left: field.x,
                                top: field.y,
                                width: field.width,
                                height: field.height,
                                opacity: 0.6 - (progress * 0.4),
                                boxShadow: 'inset 0 0 15px rgba(207, 250, 254, 0.5)',
                                zIndex: 5,
                            }}>
                                <div className="absolute w-full h-full bg-no-repeat opacity-50" style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 20'%3e%3cpath d='M5 0 L0 20 L10 20 Z' fill='rgba(255,255,255,0.2)'/%3e%3c/svg%3e")`, backgroundSize: '20px 20px'}}></div>
                            </div>
                        })}
                        {lightningStrikes.map(strike => {
                            const now = Date.now();
                            const warningProgress = (now - strike.createdAt) / strike.warningDuration;
                            const isWarning = warningProgress < 1;
                            const strikeProgress = (now - (strike.createdAt + strike.warningDuration)) / strike.strikeDuration;
                            const isStriking = !isWarning && strikeProgress < 1;

                            if (isWarning) {
                                return <div key={strike.id} className="absolute border-4 border-dashed border-yellow-400/80 rounded-lg animate-pulse" style={{
                                    left: strike.x,
                                    top: strike.y,
                                    width: strike.width,
                                    height: strike.height,
                                    zIndex: 5,
                                }} />;
                            }
                            if (isStriking) {
                                return <div key={strike.id} className="absolute bg-yellow-300 rounded-lg" style={{
                                    left: strike.x,
                                    top: strike.y,
                                    width: strike.width,
                                    height: strike.height,
                                    boxShadow: '0 0 30px 15px #fef08a',
                                    opacity: 1 - strikeProgress,
                                    zIndex: 5,
                                }} />;
                            }
                            return null;
                        })}
                        {arcaneOverloadRings.map(ring => {
                            const progress = (Date.now() - ring.createdAt) / ring.duration;
                            const currentRadius = ring.maxRadius * progress;
                             return <div key={ring.id} className="absolute rounded-full border-2 border-purple-400" style={{
                                left: ring.x - currentRadius,
                                top: ring.y - currentRadius,
                                width: currentRadius * 2,
                                height: currentRadius * 2,
                                opacity: 1 - progress,
                                zIndex: 5,
                            }} />;
                        })}
                        {finalGambitBeams.map(beam => {
                            const now = Date.now();
                            const warningProgress = (now - beam.createdAt) / beam.warningDuration;
                            const isWarning = warningProgress < 1;
                            const strikeProgress = (now - (beam.createdAt + beam.warningDuration)) / beam.strikeDuration;
                            const isStriking = !isWarning && strikeProgress < 1;

                             if (isWarning) {
                                return <div key={beam.id} className="absolute border-y-4 border-x-8 border-dashed border-red-500/80 animate-pulse" style={{
                                    left: beam.x,
                                    top: 0,
                                    width: beam.width,
                                    height: GAME_HEIGHT,
                                    zIndex: 5,
                                    opacity: (Math.sin(now/100) + 1) / 2,
                                }} />;
                            }
                            if (isStriking) {
                                return <div key={beam.id} className="absolute bg-gradient-to-t from-red-600 via-pink-500 to-purple-800" style={{
                                    left: beam.x,
                                    top: 0,
                                    width: beam.width,
                                    height: GAME_HEIGHT,
                                    boxShadow: '0 0 60px 30px #ef4444',
                                    opacity: 0.9,
                                    zIndex: 5,
                                    animation: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                                }} />;
                            }
                            return null;
                        })}

                        {bricks.map(renderBrick)}
                        {explosions.map(exp => {
                            const progress = (Date.now() - exp.createdAt) / exp.duration;
                            return <div key={exp.id} className="absolute rounded-full bg-orange-500/70" style={{
                                left: exp.x - exp.radius,
                                top: exp.y - exp.radius,
                                width: exp.radius * 2,
                                height: exp.radius * 2,
                                transform: `scale(${progress})`,
                                opacity: 1 - progress,
                            }} />;
                        })}
                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                            {elementalBeams.map(beam => {
                                const progress = (Date.now() - beam.createdAt) / beam.duration;
                                return <line
                                    key={beam.id}
                                    x1={beam.x1} y1={beam.y1}
                                    x2={beam.x2} y2={beam.y2}
                                    stroke="#fbbf24"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    style={{ opacity: 1 - progress, filter: 'drop-shadow(0 0 8px #f59e0b)' }}
                                />
                            })}
                        </svg>
                        {arcaneOrbs.map(orb => (
                            <div key={orb.id} className="absolute rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-600 shadow-xl border-2 border-purple-200/50" style={{ 
                                left: orb.x, 
                                top: orb.y, 
                                width: orb.radius * 2, 
                                height: orb.radius * 2,
                                boxShadow: '0 0 15px 5px #a855f7',
                                animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                            }}></div>
                        ))}
                        {homingProjectiles.map(p => (
                            <div key={p.id} className="absolute rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-700 shadow-lg" style={{
                                left: p.x,
                                top: p.y,
                                width: p.size,
                                height: p.size,
                                boxShadow: '0 0 8px 3px #d946ef'
                            }}></div>
                        ))}
                        {balls.map(ball => {
                             const ballStyle: React.CSSProperties = { left: ball.x, top: ball.y, width: ball.size * 2, height: ball.size * 2 };
                             if (ball.slowedUntil && Date.now() < ball.slowedUntil) {
                                 ballStyle.filter = 'brightness(0.7) saturate(1.5)';
                                 ballStyle.boxShadow = '0 0 8px 2px #67e8f9';
                             }
                             if (ball.isSpikeSlowedUntil && Date.now() < ball.isSpikeSlowedUntil) {
                                 ballStyle.filter = 'brightness(0.5) saturate(2)';
                                 ballStyle.boxShadow = '0 0 12px 4px #93c5fd';
                             }
                             if(activeBuffs.power) {
                                 ballStyle.boxShadow = '0 0 10px 4px #f87171';
                             }
                              if(activeBuffs.haste) {
                                 ballStyle.boxShadow = '0 0 10px 4px #38bdf8';
                             }
                             if (cosmetics.ballEffect === 'magical') {
                                ballStyle.boxShadow = (ballStyle.boxShadow ? ballStyle.boxShadow + ', ' : '') + '0 0 15px 5px #a855f7';
                             }
                             return <div key={ball.id} className="absolute rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-xl border-2 border-yellow-100/50" style={ballStyle}></div>
                        })}
                        {projectiles.map(p => (
                             <div key={p.id} className={`absolute rounded ${p.size > 8 ? 'bg-orange-500 shadow-lg shadow-orange-500/50' : 'bg-pink-500 rounded-full'}`} style={{ left: p.x, top: p.y, width: p.size, height: p.size * 2 }}></div>
                        ))}
                        <div className="absolute bg-gradient-to-b from-slate-400 to-slate-600 rounded-sm shadow-lg border-t-2 border-slate-300 border-b-2 border-slate-700" style={paddleStyle}></div>
                        {skills.barrier.activeUntil && Date.now() < skills.barrier.activeUntil && (
                            <div className="absolute bg-cyan-400/30 border-t-2 border-cyan-200 animate-pulse" style={{ left: 0, top: PADDLE_Y - 10, width: GAME_WIDTH, height: 10 }}></div>
                        )}

                        {!isBallLaunched && gameStatus === GameStatus.Playing && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white/80 animate-pulse pointer-events-none font-medieval tracking-wider" style={{textShadow: '2px 2px 4px #000'}}>
                                Click to Launch
                            </div>
                        )}
                        
                         {levelUpMessage && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-medieval text-yellow-300 animate-bounce drop-shadow-lg z-50">
                                {levelUpMessage}
                            </div>
                        )}

                        {gameStatus === GameStatus.Targeting && (
                            <div className="pointer-events-none absolute inset-0 z-20 backdrop-blur-sm bg-black/30">
                                <div className="absolute transition-transform duration-150" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}>
                                    <div className="w-8 h-8 -m-4 rounded-full border-2 border-dashed border-cyan-300 animate-spin-slow"></div>
                                    <div className="absolute top-0 left-0 w-px h-4 -mt-4 bg-cyan-300"></div>
                                    <div className="absolute bottom-0 left-0 w-px h-4 -mb-4 bg-cyan-300"></div>
                                    <div className="absolute top-0 left-0 h-px w-4 -ml-4 bg-cyan-300"></div>
                                    <div className="absolute top-0 right-0 h-px w-4 -mr-4 bg-cyan-300"></div>
                                </div>
                                <svg className="absolute top-0 left-0 w-full h-full">
                                    <line
                                        x1={paddleX + paddleWidth / 2}
                                        y1={PADDLE_Y}
                                        x2={mousePos.x}
                                        y2={mousePos.y}
                                        stroke="rgba(103, 232, 249, 0.5)"
                                        strokeWidth="2"
                                        strokeDasharray="5, 5"
                                    />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-24 text-2xl font-bold text-white/90 font-medieval tracking-wider" style={{textShadow: '2px 2px 4px #000'}}>
                                    Aim and Click to Fire Orb
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <BottomUI stats={playerStats} skills={skills} equippedSkills={equippedSkills} maxActiveSkills={maxActiveSkills} onActivateSkill={handleSkillActivation} onOpenSkillTree={handleOpenSkillTree} skillPoints={skillPoints} unlockedSkills={unlockedSkills} stage={stage} activeBuffs={activeBuffs} manaBurnActiveUntil={manaBurnActiveUntil} />
                </div>
            )}

            {(gameStatus === GameStatus.GameOver || gameStatus === GameStatus.Victory) && <GameOverScreen score={score} isVictory={gameStatus === GameStatus.Victory} onRestart={handleStart} />}
            {gameStatus === GameStatus.VictoryScreen && <VictoryScreen stars={lastStageStars} score={score} goldEarned={lastStageGold} onContinue={() => setGameStatus(GameStatus.StageSelect)} />}
            <SkillTree isOpen={gameStatus === GameStatus.SkillTree} onClose={handleCloseSkillTree} skillPoints={skillPoints} unlockedSkills={unlockedSkills} onLearnSkill={handleLearnSkill} />
        </div>
    );
};

export default App;
