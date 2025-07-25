import { useState, useMemo } from 'react';
import {
  GameStatus,
  Brick,
  Ball,
  PlayerStats,
  Skill,
  Projectile,
  Explosion,
  RunicEmpowermentBuffs,
  ArcaneOrb,
  ElementalBeam,
  BallHistoryEntry,
  HomingProjectile,
  FireRainZone,
  IceSpikeField,
  LightningStrike,
  ArcaneOverloadRing,
  FinalGambitBeam,
  Cosmetics,
} from '../types/game.types';
import { INITIAL_PLAYER_STATS, INITIAL_SKILLS } from '../constants/game.constants';

export const useGameState = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Start);
  const [paddleX, setPaddleX] = useState(0);
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
  const [stageStartTime, setStageStartTime] = useState(0);

  const activeBricks = useMemo(() => bricks.filter((brick) => brick.hp > 0), [bricks]);
  const totalScore = useMemo(
    () =>
      bricks.reduce((sum, brick) => {
        const brickIsDestroyed = !activeBricks.some((activeBrick) => activeBrick.id === brick.id);
        return sum + (brickIsDestroyed ? 10 : 0);
      }, 0),
    [bricks, activeBricks]
  );

  return {
    gameStatus,
    setGameStatus,
    paddleX,
    setPaddleX,
    balls,
    setBalls,
    bricks,
    setBricks,
    projectiles,
    setProjectiles,
    homingProjectiles,
    setHomingProjectiles,
    explosions,
    setExplosions,
    arcaneOrbs,
    setArcaneOrbs,
    elementalBeams,
    setElementalBeams,
    fireRainZones,
    setFireRainZones,
    iceSpikeFields,
    setIceSpikeFields,
    lightningStrikes,
    setLightningStrikes,
    arcaneOverloadRings,
    setArcaneOverloadRings,
    finalGambitBeams,
    setFinalGambitBeams,
    ballHistory,
    setBallHistory,
    hp,
    setHp,
    xp,
    setXp,
    level,
    setLevel,
    stage,
    setStage,
    gold,
    setGold,
    score,
    setScore,
    skills,
    setSkills,
    levelUpMessage,
    setLevelUpMessage,
    isBallLaunched,
    setIsBallLaunched,
    skillPoints,
    setSkillPoints,
    unlockedSkills,
    setUnlockedSkills,
    runicEmpowermentCounter,
    setRunicEmpowermentCounter,
    activeBuffs,
    setActiveBuffs,
    targetingSkillId,
    setTargetingSkillId,
    mousePos,
    setMousePos,
    manaBurnActiveUntil,
    setManaBurnActiveUntil,
    maxActiveSkills,
    setMaxActiveSkills,
    equippedSkills,
    setEquippedSkills,
    permanentStats,
    setPermanentStats,
    cosmetics,
    setCosmetics,
    currentStageId,
    setCurrentStageId,
    stageBricksTotal,
    setStageBricksTotal,
    stageInitialHp,
    setStageInitialHp,
    lastStageGold,
    setLastStageGold,
    lastStageStars,
    setLastStageStars,
    stageStartTime,
    setStageStartTime,
    activeBricks,
    totalScore,
  };
};
