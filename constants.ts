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
  vitality: 100,
  ingenuity: 0,
};

export const INITIAL_SKILLS: Record<string, Skill> = {
    multiBall: { id: 'multiBall', name: 'Multi-Ball', cooldown: 20000, lastUsed: -20000, duration: 5000 },
    timeSlow: { id: 'timeSlow', name: 'Time Slow', cooldown: 25000, lastUsed: -25000, duration: 7000 },
    barrier: { id: 'barrier', name: 'Barrier', cooldown: 30000, lastUsed: -30000, duration: 10000 },
    elementalInfusion: { id: 'elementalInfusion', name: 'Elemental Infusion', cooldown: 30000, lastUsed: -30000, charges: 5 },
    arcaneOrb: { id: 'arcaneOrb', name: 'Arcane Orb', cooldown: 20000, lastUsed: -20000 },
    timeWarp: { id: 'timeWarp', name: 'Time Warp', cooldown: 60000, lastUsed: -60000 },
    overclockSkill: { id: 'overclockSkill', name: 'Overclock', cooldown: 30000, lastUsed: -30000, duration: 5000 },
    steamBurst: { id: 'steamBurst', name: 'Steam Burst', cooldown: 45000, lastUsed: -45000 },
    chronoBreak: { id: 'chronoBreak', name: 'Chrono Break', cooldown: 90000, lastUsed: -90000, duration: 3000 },
};

export const BRICK_PROPERTIES: Record<BrickType, { color: string; maxHp: number; points: number }> = {
    // World 1
    [BrickType.Grunt]: { color: 'bg-gray-500', maxHp: 1, points: 10 },
    [BrickType.Soldier]: { color: 'bg-blue-500', maxHp: 2, points: 20 },
    [BrickType.Archer]: { color: 'bg-green-600', maxHp: 1, points: 30 },
    [BrickType.Mage]: { color: 'bg-purple-600', maxHp: 2, points: 40 },
    [BrickType.Tank]: { color: 'bg-gray-400', maxHp: 5, points: 50 },
    [BrickType.Chaos]: { color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500', maxHp: 3, points: 100 },
    [BrickType.Boss]: { color: 'bg-red-800', maxHp: 100, points: 1000 },
    // World 2
    [BrickType.Apprentice]: { color: 'bg-sky-400', maxHp: 3, points: 60 },
    [BrickType.Fire]: { color: 'bg-orange-600', maxHp: 2, points: 50 },
    [BrickType.Ice]: { color: 'bg-cyan-300', maxHp: 4, points: 50 },
    [BrickType.Lightning]: { color: 'bg-yellow-400', maxHp: 2, points: 70 },
    [BrickType.Mirror]: { color: 'bg-slate-300', maxHp: 3, points: 80 },
    [BrickType.Rune]: { color: 'bg-indigo-500', maxHp: 4, points: 90 },
    [BrickType.ArchmageBoss]: { color: 'bg-indigo-700', maxHp: 250, points: 5000 },
    // World 3 - Bio-Forge Nexus
    [BrickType.Gearsprite]: { color: 'bg-cyan-400', maxHp: 3, points: 85 },
    [BrickType.VineBot]: { color: 'bg-green-500', maxHp: 4, points: 95 },
    [BrickType.ScrapGolem]: { color: 'bg-gray-600', maxHp: 6, points: 130 },
    [BrickType.Corruptor]: { color: 'bg-purple-500', maxHp: 5, points: 110 },
    [BrickType.HiveMind]: { color: 'bg-pink-400', maxHp: 7, points: 160 },
    [BrickType.Replicator]: { color: 'bg-blue-400', maxHp: 4, points: 100 },
    [BrickType.PrimeSynthesizer]: { color: 'bg-gradient-to-r from-purple-600 to-pink-600', maxHp: 300, points: 7500 },
    // World 4 - Clockwork Spire
    [BrickType.Gear]: { color: 'bg-gradient-to-br from-amber-700 to-yellow-600', maxHp: 3, points: 90 },
    [BrickType.Steam]: { color: 'bg-gray-400', maxHp: 2, points: 80 },
    [BrickType.Clockwork]: { color: 'bg-amber-600', maxHp: 3, points: 95 },
    [BrickType.Tesla]: { color: 'bg-sky-500', maxHp: 2, points: 110 },
    [BrickType.Piston]: { color: 'bg-zinc-500', maxHp: 4, points: 120 },
    [BrickType.Assembly]: { color: 'bg-orange-800', maxHp: 5, points: 150 },
    [BrickType.ChronoEngineerBoss]: { color: 'bg-yellow-800', maxHp: 280, points: 8000 },
    // Catalyst Bricks
    [BrickType.Catalyst]: { color: 'bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900', maxHp: 1, points: 0 },
};

export const LEVEL_UP_XP = 200;

// World 1 Boss
export const BOSS_MOVE_SPEED = 2;
export const BOSS_ATTACK_COOLDOWN = 2000; // ms
export const BOSS_PROJECTILE_SPEED = 4;
export const BOSS_PROJECTILE_DAMAGE = 15;
export const BOSS_ENRAGE_THRESHOLD = 0.5; // 50% HP

// World 2 Boss
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

// Bio-Forge Nexus Constants
export const GEARSPRITE_DODGE_CHANCE = 0.35; // 35% dodge chance
export const VINEBOT_TENTACLE_COOLDOWN = 4000; // 4 seconds
export const VINEBOT_TRAP_DURATION = 2000; // 2 seconds at 10% speed
export const SCRAPGOLEM_EXPLOSION_COUNT = 3; // Spawn 3 Gearsprites
export const CORRUPTOR_PULSE_COOLDOWN = 10000; // 10 seconds
export const CORRUPTOR_DISABLE_DURATION = 5000; // 5 seconds
export const HIVEMIND_SPAWN_COOLDOWN = 2000; // 2 seconds (reduced for testing)
export const REPLICATOR_REPLICATION_COOLDOWN = 3000; // 3 seconds
export const SELF_REPAIR_COOLDOWN = 5000; // 5 seconds
export const SELF_REPAIR_AMOUNT = 1; // 1 HP

// Environmental Hazards
export const OVERGROWTH_BALL_SPEED_REDUCTION = 0.7; // 30% reduction
export const OVERGROWTH_PADDLE_SPEED_REDUCTION = 0.8; // 20% reduction
export const ENERGY_SURGE_DURATION = 1000; // 1 second
export const ENERGY_SURGE_DAMAGE = 8;
export const REPLICATION_FIELD_TIMER = 15000; // 15 seconds

// Prime Synthesizer Boss
export const PRIME_SYNTHESIZER_PHASE2_THRESHOLD = 0.7; // 70% HP
export const PRIME_SYNTHESIZER_PHASE3_THRESHOLD = 0.4; // 40% HP
export const PRIME_SYNTHESIZER_FINAL_GAMBIT_THRESHOLD = 0.1; // 10% HP
export const TENDRIL_STRIKE_COOLDOWN = 6000; // 6 seconds
export const DRONE_SWARM_COOLDOWN = 3000; // 3 seconds (reduced for testing)
export const ENERGY_BEAM_DURATION = 3000; // 3 seconds
export const CORRUPTING_PULSE_COOLDOWN = 12000; // 12 seconds
export const REPLICATION_CASCADE_CHANCE = 0.25; // 25%

// Clockwork Spire constants
export const CLOCKWORK_GEAR_ROTATE_HITS = 3;
export const STEAM_ZONE_DURATION = 3000; // ms
export const STEAM_ZONE_RADIUS = 60;
export const CLOCKWORK_SPEEDUP_PERCENT = 0.25; // 25% per hit, stacks additively as multiplier
export const TESLA_SHOT_DIRECTIONS = 4;
export const PISTON_KNOCKBACK_MULTIPLIER = 1.5;
export const ASSEMBLY_REBUILD_INTERVAL = 10000; // ms
export const CHRONO_ENGINEER_PHASE2_THRESHOLD = 0.7;
export const CHRONO_ENGINEER_PHASE3_THRESHOLD = 0.4;
export const CHRONO_ENGINEER_FINAL_COUNTDOWN_THRESHOLD = 0.1;
export const CHRONO_ENGINEER_SPEED_ZONE_INTERVAL = 6000;
export const CHRONO_ENGINEER_TIME_DISTORT_INTERVAL = 5000;
