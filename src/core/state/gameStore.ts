import { create } from 'zustand';
import {
  GameStatus,
  Ball,
  Brick,
  Projectile,
  HomingProjectile,
  Explosion,
  ArcaneOrb,
  ElementalBeam,
  FireRainZone,
  IceSpikeField,
  LightningStrike,
  ArcaneOverloadRing,
  FinalGambitBeam,
  PlayerStats,
  Skill,
  RunicEmpowermentBuffs,
  BallHistoryEntry,
  PlayerDebuff,
  OvergrowthZone,
  EnergySurge,
  ReplicationField,
  Cosmetics
} from '@/types';
import { GAME_WIDTH, INITIAL_PLAYER_STATS, INITIAL_SKILLS } from '@/constants';

export interface UIState {
  gameStatus: GameStatus;
  selectedWorldId: number | null;
  selectedStageId: number | null;
}

export interface GameState {
  // Core game entities
  paddleX: number;
  paddleWidth: number;
  balls: Ball[];
  bricks: Brick[];
  projectiles: Projectile[];
  homingProjectiles: HomingProjectile[];
  explosions: Explosion[];
  arcaneOrbs: ArcaneOrb[];
  elementalBeams: ElementalBeam[];
  fireRainZones: FireRainZone[];
  iceSpikeFields: IceSpikeField[];
  lightningStrikes: LightningStrike[];
  arcaneOverloadRings: ArcaneOverloadRing[];
  finalGambitBeams: FinalGambitBeam[];
  ballHistory: Record<number, BallHistoryEntry[]>;

  // Player stats
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  xp: number;
  level: number;
  gold: number;
  score: number;
  playerStats: PlayerStats;
  skills: Record<string, Skill>;
  skillPoints: number;
  unlockedSkills: Record<string, number>;
  equippedSkills: string[];
  maxActiveSkills: number;

  // Game state flags
  isBallLaunched: boolean;
  runicEmpowermentCounter: number;
  activeBuffs: RunicEmpowermentBuffs;
  targetingSkillId: string | null;
  mousePos: { x: number; y: number };
  manaBurnActiveUntil: number | null;

  // Cosmetics
  cosmetics: Cosmetics;

  // Bio-Forge Nexus state
  playerDebuffs: PlayerDebuff[];
  overgrowthZones: OvergrowthZone[];
  energySurges: EnergySurge[];
  replicationFields: ReplicationField[];

  // Stage tracking
  startHp: number;
  elapsedTime: number;
  stageStartTime: number;
}

export interface GameStore {
  ui: UIState;
  game: GameState;
  
  // UI actions
  setGameStatus: (status: GameStatus) => void;
  selectWorld: (worldId: number) => void;
  selectStage: (stageId: number) => void;
  
  // Game actions
  initializeGame: (worldId: number, stageId: number) => void;
  updateGameState: (updates: Partial<GameState>) => void;
  setPaddleX: (x: number) => void;
  launchBall: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  ui: {
    gameStatus: GameStatus.Start,
    selectedWorldId: null,
    selectedStageId: null,
  },
  
  game: {
    paddleX: GAME_WIDTH / 2 - 50,
    paddleWidth: 100,
    balls: [],
    bricks: [],
    projectiles: [],
    homingProjectiles: [],
    explosions: [],
    arcaneOrbs: [],
    elementalBeams: [],
    fireRainZones: [],
    iceSpikeFields: [],
    lightningStrikes: [],
    arcaneOverloadRings: [],
    finalGambitBeams: [],
    ballHistory: {},
    hp: INITIAL_PLAYER_STATS.vitality,
    maxHp: INITIAL_PLAYER_STATS.vitality,
    mana: 100,
    maxMana: 100,
    xp: 0,
    level: 1,
    gold: 0,
    score: 0,
    playerStats: { ...INITIAL_PLAYER_STATS },
    skills: JSON.parse(JSON.stringify(INITIAL_SKILLS)),
    skillPoints: 0,
    unlockedSkills: {},
    equippedSkills: [],
    maxActiveSkills: 3,
    isBallLaunched: false,
    runicEmpowermentCounter: 0,
    activeBuffs: { haste: false, power: false, shield: false },
    targetingSkillId: null,
    mousePos: { x: 0, y: 0 },
    manaBurnActiveUntil: null,
    cosmetics: { ballEffect: 'none', paddleEffect: 'none' },
    playerDebuffs: [],
    overgrowthZones: [],
    energySurges: [],
    replicationFields: [],
    startHp: INITIAL_PLAYER_STATS.vitality,
    elapsedTime: 0,
    stageStartTime: Date.now(),
  },
  
  setGameStatus: (status: GameStatus) => set((state) => ({ 
    ui: { ...state.ui, gameStatus: status } 
  })),
  
  selectWorld: (worldId: number) => set((state) => ({ 
    ui: { ...state.ui, selectedWorldId: worldId } 
  })),
  
  selectStage: (stageId: number) => set((state) => ({ 
    ui: { ...state.ui, selectedStageId: stageId } 
  })),
  
  initializeGame: (worldId: number, stageId: number) => {
    // This will be implemented to set up the game state for a specific stage
    set((state) => ({
      game: {
        ...state.game,
        stageStartTime: Date.now(),
        startHp: state.game.hp,
        elapsedTime: 0,
      }
    }));
  },
  
  updateGameState: (updates: Partial<GameState>) => set((state) => ({
    game: { ...state.game, ...updates }
  })),
  
  setPaddleX: (x: number) => set((state) => ({
    game: { ...state.game, paddleX: x }
  })),
  
  launchBall: () => set((state) => ({
    game: { ...state.game, isBallLaunched: true }
  })),
  
  resetGame: () => set((state) => ({
    game: {
      ...state.game,
      balls: [],
      bricks: [],
      projectiles: [],
      homingProjectiles: [],
      explosions: [],
      isBallLaunched: false,
    }
  })),
}));
