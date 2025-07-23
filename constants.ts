import { BrickType, PlayerStats, Skill } from './types';

export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;
export const PADDLE_HEIGHT = 20;
export const PADDLE_Y = GAME_HEIGHT - 40;
export const BALL_RADIUS = 8;
export const BRICK_WIDTH = 60;
export const BRICK_HEIGHT = 25;
export const BRICK_GAP = 4;

export const INITIAL_PLAYER_STATS: PlayerStats = {
  power: 1,
  defense: 1,
  agility: 7,
  luck: 1,
  wisdom: 1,
  vitality: 100
};

export const INITIAL_SKILLS: Record<string, Skill> = {
    multiBall: { id: 'multiBall', name: 'Multi-Ball', cooldown: 20000, lastUsed: -20000, duration: 5000 },
    timeSlow: { id: 'timeSlow', name: 'Time Slow', cooldown: 25000, lastUsed: -25000, duration: 7000 },
    barrier: { id: 'barrier', name: 'Barrier', cooldown: 30000, lastUsed: -30000, duration: 10000 },
    elementalInfusion: { id: 'elementalInfusion', name: 'Elemental Infusion', cooldown: 30000, lastUsed: -30000, charges: 5 },
    arcaneOrb: { id: 'arcaneOrb', name: 'Arcane Orb', cooldown: 20000, lastUsed: -20000 },
    timeWarp: { id: 'timeWarp', name: 'Time Warp', cooldown: 60000, lastUsed: -60000 },
};

export const BRICK_PROPERTIES: Record<BrickType, { color: string; maxHp: number; points: number }> = {
    // Stage 1
    [BrickType.Grunt]: { color: 'bg-gray-500', maxHp: 1, points: 10 },
    [BrickType.Soldier]: { color: 'bg-blue-500', maxHp: 2, points: 20 },
    [BrickType.Archer]: { color: 'bg-green-600', maxHp: 1, points: 30 },
    [BrickType.Mage]: { color: 'bg-purple-600', maxHp: 2, points: 40 },
    [BrickType.Tank]: { color: 'bg-gray-400', maxHp: 5, points: 50 },
    [BrickType.Chaos]: { color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500', maxHp: 3, points: 100 },
    [BrickType.Boss]: { color: 'bg-red-800', maxHp: 100, points: 1000 },
    // Stage 2
    [BrickType.Apprentice]: { color: 'bg-sky-400', maxHp: 3, points: 60 },
    [BrickType.Fire]: { color: 'bg-orange-600', maxHp: 2, points: 50 },
    [BrickType.Ice]: { color: 'bg-cyan-300', maxHp: 4, points: 50 },
    [BrickType.Lightning]: { color: 'bg-yellow-400', maxHp: 2, points: 70 },
    [BrickType.Mirror]: { color: 'bg-slate-300', maxHp: 3, points: 80 },
    [BrickType.Rune]: { color: 'bg-indigo-500', maxHp: 4, points: 90 },
    [BrickType.ArchmageBoss]: { color: 'bg-indigo-700', maxHp: 250, points: 5000 },
};

export const LEVEL_UP_XP = 200;

// Stage 1 Boss
export const BOSS_MOVE_SPEED = 2;
export const BOSS_ATTACK_COOLDOWN = 2000; // ms
export const BOSS_PROJECTILE_SPEED = 4;
export const BOSS_PROJECTILE_DAMAGE = 15;
export const BOSS_ENRAGE_THRESHOLD = 0.5; // 50% HP

// Stage 2 Boss
export const ARCHMAGE_TELEPORT_COOLDOWN = 5000; // ms
export const ARCHMAGE_MISSILE_COOLDOWN = 3500; // ms
export const ARCHMAGE_SUMMON_COOLDOWN = 10000; // ms
export const ARCHMAGE_MAX_APPRENTICES = 3;
export const ARCHMAGE_MISSILE_SPEED = 2.5;
export const ARCHMAGE_MISSILE_TURN_RATE = 0.04; // How strongly it homes
export const ARCHMAGE_MISSILE_DAMAGE = 10;

// Archmage Phase 2
export const ARCHMAGE_PHASE2_THRESHOLD = 0.6;
export const ARCHMAGE_ELEMENTAL_STORM_COOLDOWN = 6000; // ms
export const FIRE_RAIN_DURATION = 2500;
export const FIRE_RAIN_DAMAGE = 5;
export const FIRE_RAIN_RADIUS = 50;
export const ICE_SPIKE_DURATION = 4000;
export const ICE_SPIKE_WIDTH = 150;
export const ICE_SPIKE_HEIGHT = 150;
export const LIGHTNING_STRIKE_WARNING_DURATION = 1500;
export const LIGHTNING_STRIKE_STRIKE_DURATION = 300;
export const LIGHTNING_STRIKE_DAMAGE = 20;
export const LIGHTNING_STRIKE_WIDTH = 80;
export const ARCHMAGE_MIRROR_IMAGE_COOLDOWN = 12000; // ms
export const ARCHMAGE_MAX_CLONES = 2;
export const ARCHMAGE_MANA_BURN_COOLDOWN = 15000; // ms
export const ARCHMAGE_MANA_BURN_DURATION = 10000; // ms

// Archmage Phase 3
export const ARCHMAGE_PHASE3_THRESHOLD = 0.3; // 30% HP
export const ARCHMAGE_FINAL_GAMBIT_THRESHOLD = 0.1; // 10% HP
export const ARCHMAGE_CHAOS_MAGIC_COOLDOWN = 2000; // ms
export const ARCHMAGE_ARCANE_OVERLOAD_COOLDOWN = 1800; // ms
export const ARCANE_OVERLOAD_RING_DURATION = 1000; // ms
export const ARCANE_OVERLOAD_RING_DAMAGE = 8;
export const FINAL_GAMBIT_BEAM_WARNING_DURATION = 2000; // ms
export const FINAL_GAMBIT_BEAM_STRIKE_DURATION = 5000; // ms
export const FINAL_GAMBIT_BEAM_DAMAGE = 30;
