import React, { useEffect, useCallback, useRef } from 'react';
import { GameStatus, PlayerStats } from '../types/game.types';
import { SkillType } from '../types/ui.types';
import { GAME_WIDTH, PADDLE_Y, BALL_RADIUS, INITIAL_PLAYER_STATS, INITIAL_SKILLS, ARCHMAGE_MANA_BURN_DURATION } from '../constants/game.constants';
import { SKILL_TREE_DATA } from '../game/data/skills/skills';
import { createBricksForStage } from '../game/level-manager';
import { STAGE_CONFIG } from '../game/data/stage-config';
import { StartScreen } from './ui/StartScreen';
import { GameOverScreen } from './ui/GameOverScreen';
import { VictoryScreen } from './ui/VictoryScreen';
import { TopUI, BottomUI } from './ui/GameUI';
import { SkillTree } from './ui/SkillTree';
import { StageSelector } from './ui/StageSelector';
import { GameBoard } from './game/GameBoard';
import { runGameIteration } from '../game/gameEngine';
import { useGameLoop } from '../hooks/useGameLoop';
import { useGameState } from '../hooks/useGameState';
import SaveManager from '../services/SaveManager';

export const GameContainer: React.FC = () => {
    const {
        gameStatus, setGameStatus,
        paddleX, setPaddleX,
        balls, setBalls,
        bricks, setBricks,
        projectiles, setProjectiles,
        homingProjectiles, setHomingProjectiles,
        explosions, setExplosions,
        arcaneOrbs, setArcaneOrbs,
        elementalBeams, setElementalBeams,
        fireRainZones, setFireRainZones,
        iceSpikeFields, setIceSpikeFields,
        lightningStrikes, setLightningStrikes,
        arcaneOverloadRings, setArcaneOverloadRings,
        finalGambitBeams, setFinalGambitBeams,
        ballHistory, setBallHistory,
        hp, setHp,
        xp, setXp,
        level, setLevel,
        stage, setStage,
        gold, setGold,
        score, setScore,
        skills, setSkills,
        levelUpMessage, setLevelUpMessage,
        isBallLaunched, setIsBallLaunched,
        skillPoints, setSkillPoints,
        unlockedSkills, setUnlockedSkills,
        runicEmpowermentCounter, setRunicEmpowermentCounter,
        activeBuffs, setActiveBuffs,
        targetingSkillId, setTargetingSkillId,
        mousePos, setMousePos,
        manaBurnActiveUntil, setManaBurnActiveUntil,
        maxActiveSkills, setMaxActiveSkills,
        equippedSkills, setEquippedSkills,
        permanentStats, setPermanentStats,
        cosmetics, setCosmetics,
        currentStageId, setCurrentStageId,
        stageBricksTotal, setStageBricksTotal,
        stageInitialHp, setStageInitialHp,
        lastStageGold, setLastStageGold,
        lastStageStars, setLastStageStars,
        stageStartTime, setStageStartTime,
    } = useGameState();

    const calculateStars = (): number => {
        const stageConfig = STAGE_CONFIG.find(s => s.id === currentStageId);
        if (!stageConfig) return 1;

        let stars = 1;

        const hpPercent = (hp / stageInitialHp) * 100;
        if (hpPercent >= stageConfig.starCriteria.minHpPercent) {
            stars++;
        }

        const timeTaken = Date.now() - stageStartTime;
        const allBricksDestroyed = bricks.length === 0;
        if (timeTaken <= stageConfig.starCriteria.time && allBricksDestroyed) {
            stars++;
        }

        return stars;
    };

    useEffect(() => {
        const savedData = SaveManager.load();
        setGold(savedData.player.gold);
        setSkillPoints(savedData.player.skillPoints);
        setUnlockedSkills(savedData.player.unlockedSkills);
        console.log('Game loaded:', savedData);
    }, []);

    const handleStageComplete = (stageId: number, stars: number, score: number) => {
        const completionTime = Date.now() - stageStartTime;

        SaveManager.updateStageData(stageId, {
            stars: Math.max(stars, SaveManager.load().stages[stageId]?.stars || 0),
            bestScore: Math.max(score, SaveManager.load().stages[stageId]?.bestScore || 0),
            bestTime: Math.min(completionTime, SaveManager.load().stages[stageId]?.bestTime || Infinity),
            completed: true
        });

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
    
    const paddleWidth = 100;

    const resetGame = useCallback(() => {
        setUnlockedSkills({});
        setSkillPoints(0);
        setHp(INITIAL_PLAYER_STATS.vitality + (permanentStats.vitality || 0));
        setXp(0);
        setLevel(1);
        setStage(1);
        setGold(0);
        setScore(0);
        setSkills(JSON.parse(JSON.stringify(INITIAL_SKILLS)));
        setGameStatus(GameStatus.Playing);
        setBricks(createBricksForStage(1));
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
    }, [permanentStats, cosmetics]);
    
    useEffect(() => {
        setMana(maxMana);
    }, [maxMana]);

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
                return;
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
                        return ball;
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

            setBallHistory(currentHistory => {
                const now = Date.now();
                const nextHistory: Record<number, BallHistoryEntry[]> = {};

                for (const ball of updates.balls!) {
                    const historyEntry: BallHistoryEntry = { x: ball.x, y: ball.y, vx: ball.vx, vy: ball.vy, timestamp: now };
                    const oldHistory = currentHistory[ball.id] || [];
                    const newHistory = [...oldHistory, historyEntry].filter(entry => now - entry.timestamp < 3000);
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
            finalHp = newMaxHp;
            setMana(maxMana);
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
        if (updates.manaSpent !== undefined) setMana((m: number) => Math.max(0, m - updates.manaSpent));
        if (updates.manaGained !== undefined) setMana((m: number) => Math.min(maxMana, m + updates.manaGained));

        if (updates.goldGained !== undefined) setGold((g: number) => g + updates.goldGained);
        if (updates.scoreGained !== undefined) setScore((s: number) => s + updates.scoreGained);

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
                <div className="flex flex-col gap-2 p-2 bg-gradient-to-b from-gray-800 to-black/80 border-4 border-slate-900/80 rounded-xl shadow-2xl shadow-purple-900/50" style={{ width: GAME_WIDTH + 32 }} ref={gameAreaRef} onClick={handleGameClick}>
                    
                    <TopUI hp={hp} maxHp={maxHp} mana={mana} maxMana={maxMana} xp={xp} level={level} gold={gold} stage={stage}/>
                    
                    <GameBoard
                        balls={balls}
                        bricks={bricks}
                        projectiles={projectiles}
                        homingProjectiles={homingProjectiles}
                        explosions={explosions}
                        arcaneOrbs={arcaneOrbs}
                        elementalBeams={elementalBeams}
                        fireRainZones={fireRainZones}
                        iceSpikeFields={iceSpikeFields}
                        lightningStrikes={lightningStrikes}
                        arcaneOverloadRings={arcaneOverloadRings}
                        finalGambitBeams={finalGambitBeams}
                        paddleX={paddleX}
                        paddleWidth={paddleWidth}
                        cosmetics={cosmetics}
                        activeBuffs={activeBuffs}
                        skills={skills}
                        isBallLaunched={isBallLaunched}
                        gameStatus={gameStatus}
                        levelUpMessage={levelUpMessage}
                        mousePos={mousePos}
                    />
                    
                    <BottomUI stats={playerStats} skills={skills} equippedSkills={equippedSkills} maxActiveSkills={maxActiveSkills} onActivateSkill={handleSkillActivation} onOpenSkillTree={handleOpenSkillTree} skillPoints={skillPoints} unlockedSkills={unlockedSkills} stage={stage} activeBuffs={activeBuffs} manaBurnActiveUntil={manaBurnActiveUntil} />
                </div>
            )}

            {(gameStatus === GameStatus.GameOver || gameStatus === GameStatus.Victory) && <GameOverScreen score={score} isVictory={gameStatus === GameStatus.Victory} onRestart={handleStart} />}
            {gameStatus === GameStatus.VictoryScreen && <VictoryScreen stars={lastStageStars} score={score} goldEarned={lastStageGold} onContinue={() => setGameStatus(GameStatus.StageSelect)} />}
            <SkillTree isOpen={gameStatus === GameStatus.SkillTree} onClose={handleCloseSkillTree} skillPoints={skillPoints} unlockedSkills={unlockedSkills} onLearnSkill={handleLearnSkill} />
        </div>
    );
};
