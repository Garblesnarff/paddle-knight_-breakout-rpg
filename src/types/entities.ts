/**
 * Core Game Entities
 * Defines the main game objects: Bricks and Balls
 */

import { BrickType } from './enums';

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
  // Boss attack timers
  lastAttackTime?: number;
  lastMissileTime?: number;
  lastSummonTime?: number;
  shieldHp?: number;
  phase?: number;
  // Archmage Boss abilities
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
  // Clockwork Spire properties
  lastRebuildTime?: number;
  // Catalyst empowerment properties
  isEmpowered?: boolean;
  empowermentType?: 'fire' | 'ice' | 'lightning' | 'rune';
  empoweredUntil?: number;
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
  // Clockwork Spire temporary speed-up (overclock) window and stacks
  overclockUntil?: number;
  overclockStacks?: number;
  // Aegis Parry enhancement properties
  isEmpowered?: boolean;
  empowermentType?: 'damage' | 'piercing' | 'speed';
  empoweredUntil?: number;
  piercingHitsRemaining?: number;
}

export interface BallHistoryEntry {
  x: number;
  y: number;
  vx: number;
  vy: number;
  timestamp: number;
}
