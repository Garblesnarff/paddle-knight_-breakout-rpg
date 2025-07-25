export enum GameStatus {
  Start,
  StageSelect,
  Playing,
  Paused,
  GameOver,
  Victory,
  VictoryScreen,
  SkillTree,
  Targeting,
}

export enum BrickType {
  // Stage 1
  Grunt,
  Soldier,
  Archer,
  Mage,
  Tank,
  Chaos,
  Boss,
  // Stage 2
  Apprentice,
  Fire,
  Ice,
  Lightning,
  Mirror,
  Rune,
  ArchmageBoss,
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

export interface BallHistoryEntry {
  x: number;
  y: number;
  vx: number;
  vy: number;
  timestamp: number;
}

export interface RunicEmpowermentBuffs {
  haste: boolean;
  power: boolean;
  shield: boolean;
}

export interface Cosmetics {
  paddleEffect?: string;
  ballEffect?: string;
}
