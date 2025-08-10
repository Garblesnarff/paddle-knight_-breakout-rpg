export enum GameStatus {
  Start,
  WorldSelect,
  StageSelect,
  Playing,
  Paused,
  GameOver,
  Victory,
  VictoryScreen,
  SkillTree,
  Targeting
}

export enum BrickType {
  // World 1
  Grunt,
  Soldier,
  Archer,
  Mage,
  Tank,
  Chaos,
  Boss,
  // World 2
  Apprentice,
  Fire,
  Ice,
  Lightning,
  Mirror,
  Rune,
  ArchmageBoss,
  // World 3 - Bio-Forge Nexus
  Gearsprite,
  VineBot,
  ScrapGolem,
  Corruptor,
  HiveMind,
  Replicator,
  PrimeSynthesizer,
}

export interface Brick {
  id: number;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  type: BrickType;
  width: number;
  height: number;
  vx?: number;
  lastAttackTime?: number;
  lastMissileTime?: number;
  lastSummonTime?: number;
  shieldHp?: number;
  phase?: number;
  lastElementalStormTime?: number;
  currentElementalAttack?: 'fire' | 'ice' | 'lightning';
  isClone?: boolean;
  realBossId?: number;
  lastMirrorImageTime?: number;
  lastManaBurnTime?: number;
  lastArcaneOverloadTime?: number;
  lastChaosMagicTime?: number;
  isFinalGambit?: boolean;
  // Bio-Forge Nexus properties
  dodgeChance?: number;
  lastDodgeTime?: number;
  lastTentacleTime?: number;
  lastSelfRepairTime?: number;
  lastSkillDisableTime?: number;
  lastSpawnTime?: number;
  lastReplicationTime?: number;
  isSpawned?: boolean;
  parentId?: number;
  trapDuration?: number;
  slowedUntil?: number;
}

export interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  damage: number;
  slowedUntil?: number;
  isSpikeSlowedUntil?: number;
}

export interface PlayerStats {
  power: number;
  defense: number;
  agility: number;
  luck: number;
  wisdom: number;
  vitality: number;
}

export interface Skill {
    id: string;
    name: string;
    cooldown: number;
    lastUsed: number;
    duration?: number;
    activeUntil?: number;
    charges?: number;
}

export interface Projectile {
    id: number;
    x: number;
    y: number;
    vy: number;
    size: number;
}

export interface HomingProjectile {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

export interface Explosion {
    id: number;
    x: number;
    y: number;
    radius: number;
    duration: number;
    createdAt: number;
}

export interface ArcaneOrb {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    damage: number;
}

export interface ElementalBeam {
    id: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    createdAt: number;
    duration: number;
}

export interface FireRainZone {
    id: number;
    x: number;
    y: number;
    radius: number;
    createdAt: number;
    duration: number;
}

export interface IceSpikeField {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    createdAt: number;
    duration: number;
}

export interface LightningStrike {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    createdAt: number;
    warningDuration: number;
    strikeDuration: number;
}

export interface ArcaneOverloadRing {
    id: number;
    x: number;
    y: number;
    createdAt: number;
    duration: number;
    maxRadius: number;
}

export interface FinalGambitBeam {
    id: number;
    x: number;
    width: number;
    createdAt: number;
    warningDuration: number;
    strikeDuration: number;
}

export enum SkillType {
    Passive,
    Active,
    Triggered,
}

export interface SkillNode {
    id: string;
    name: string;
    description: (level: number) => string;
    maxLevel: number;
    cost: (level: number) => number;
    dependencies: string[];
    type: SkillType;
    position: { row: number, col: number };
}

export interface RunicEmpowermentBuffs {
    haste: boolean;
    power: boolean;
    shield: boolean;
}

export interface BallHistoryEntry {
    x: number;
    y: number;
    vx: number;
    vy: number;
    timestamp: number;
}

export interface Cosmetics {
    paddleEffect?: string;
    ballEffect?: string;
}

// Bio-Forge Nexus Environmental Hazards
export interface OvergrowthZone {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    ballSpeedReduction: number; // 0.7 for 30% reduction
    paddleSpeedReduction: number; // 0.8 for 20% reduction
}

export interface EnergySurge {
    id: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    createdAt: number;
    duration: number;
    damage: number;
}

export interface ReplicationField {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    replicationTimer: number; // 15000ms
    bricksInField: number[]; // Track brick IDs in the field
}

// Player Debuff System
export interface PlayerDebuff {
    id: string;
    type: 'skillDisable' | 'slowMovement' | 'reducedDamage';
    skillId?: string; // For skill disable debuffs
    severity?: number; // For percentage-based debuffs
    appliedAt: number;
    duration: number;
}