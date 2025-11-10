/**
 * Projectiles and Attack Effects
 * All types of projectiles, beams, zones, and attack effects
 */

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

// Bio-Forge Nexus Environmental Hazards
export interface OvergrowthZone {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  ballSpeedReduction: number;
  paddleSpeedReduction: number;
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
  replicationTimer: number;
  bricksInField: number[];
}
