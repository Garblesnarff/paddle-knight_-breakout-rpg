/**
 * World 2: Archmage Tower Boss Configuration
 * Constants for the Archmage boss fight with 3 phases
 */

// === Phase 1: Basic abilities ===
export const ARCHMAGE_TELEPORT_COOLDOWN = 5000; // ms
export const ARCHMAGE_MISSILE_COOLDOWN = 3500; // ms
export const ARCHMAGE_SUMMON_COOLDOWN = 10000; // ms
export const ARCHMAGE_MAX_APPRENTICES = 3;
export const ARCHMAGE_MISSILE_SPEED = 2.5;
export const ARCHMAGE_MISSILE_TURN_RATE = 0.04;
export const ARCHMAGE_MISSILE_DAMAGE = 10;

// === Phase 2: Elemental abilities (60% HP threshold) ===
export const ARCHMAGE_PHASE2_THRESHOLD = 0.6;
export const ARCHMAGE_ELEMENTAL_STORM_COOLDOWN = 6000; // ms

// Fire Rain
export const FIRE_RAIN_DURATION = 2500;
export const FIRE_RAIN_DAMAGE = 5;
export const FIRE_RAIN_RADIUS = 50;

// Ice Spike
export const ICE_SPIKE_DURATION = 4000;
export const ICE_SPIKE_WIDTH = 150;
export const ICE_SPIKE_HEIGHT = 150;

// Lightning Strike
export const LIGHTNING_STRIKE_WARNING_DURATION = 1500;
export const LIGHTNING_STRIKE_STRIKE_DURATION = 300;
export const LIGHTNING_STRIKE_DAMAGE = 20;
export const LIGHTNING_STRIKE_WIDTH = 80;

// Mirror Image ability
export const ARCHMAGE_MIRROR_IMAGE_COOLDOWN = 12000; // ms
export const ARCHMAGE_MAX_CLONES = 2;

// Mana Burn ability
export const ARCHMAGE_MANA_BURN_COOLDOWN = 15000; // ms
export const ARCHMAGE_MANA_BURN_DURATION = 10000; // ms

// === Phase 3: Final phase abilities (30% HP threshold) ===
export const ARCHMAGE_PHASE3_THRESHOLD = 0.3;
export const ARCHMAGE_FINAL_GAMBIT_THRESHOLD = 0.1; // 10% HP
export const ARCHMAGE_CHAOS_MAGIC_COOLDOWN = 2000; // ms
export const ARCHMAGE_ARCANE_OVERLOAD_COOLDOWN = 1800; // ms
export const ARCANE_OVERLOAD_RING_DURATION = 1000; // ms
export const ARCANE_OVERLOAD_RING_DAMAGE = 8;
export const FINAL_GAMBIT_BEAM_WARNING_DURATION = 2000; // ms
export const FINAL_GAMBIT_BEAM_STRIKE_DURATION = 5000; // ms
export const FINAL_GAMBIT_BEAM_DAMAGE = 30;
