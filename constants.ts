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

// Aegis Parry constants
export const PARRY_WINDOW_DURATION = 150; // ms
export const PARRY_EMPOWERMENT_DURATION = 3000; // ms
export const PARRY_DAMAGE_MULTIPLIER = 2.0;
export const PARRY_SPEED_MULTIPLIER = 1.25;
export const PARRY_PIERCING_HITS = 1;

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
    aegisParry: { id: 'aegisParry', name: 'Aegis Parry', cooldown: 5000, lastUsed: -5000, duration: PARRY_WINDOW_DURATION },
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
    // World 5 - Shadow Realm
    [BrickType.Shade]: { color: 'bg-gray-800', maxHp: 3, points: 100 },
    [BrickType.Phantom]: { color: 'bg-purple-900', maxHp: 4, points: 115 },
    [BrickType.Wraith]: { color: 'bg-indigo-900', maxHp: 5, points: 130 },
    [BrickType.Specter]: { color: 'bg-violet-800', maxHp: 4, points: 140 },
    [BrickType.Nightstalker]: { color: 'bg-slate-900', maxHp: 6, points: 165 },
    [BrickType.Voidwalker]: { color: 'bg-black', maxHp: 5, points: 180 },
    [BrickType.ShadowLordBoss]: { color: 'bg-gradient-to-r from-black via-purple-950 to-black', maxHp: 320, points: 9000 },
    // World 6 - Crystal Caverns
    [BrickType.Ruby]: { color: 'bg-red-600', maxHp: 4, points: 110 },
    [BrickType.Sapphire]: { color: 'bg-blue-600', maxHp: 4, points: 110 },
    [BrickType.Emerald]: { color: 'bg-green-600', maxHp: 4, points: 110 },
    [BrickType.Diamond]: { color: 'bg-white', maxHp: 7, points: 200 },
    [BrickType.Quartz]: { color: 'bg-pink-300', maxHp: 5, points: 145 },
    [BrickType.Obsidian]: { color: 'bg-gray-900', maxHp: 8, points: 190 },
    [BrickType.CrystalKingBoss]: { color: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600', maxHp: 340, points: 9500 },
    // World 7 - Volcanic Forge
    [BrickType.Ember]: { color: 'bg-orange-500', maxHp: 3, points: 120 },
    [BrickType.Magma]: { color: 'bg-red-700', maxHp: 5, points: 140 },
    [BrickType.Inferno]: { color: 'bg-yellow-600', maxHp: 4, points: 155 },
    [BrickType.Pyroclast]: { color: 'bg-orange-800', maxHp: 6, points: 170 },
    [BrickType.Lavabeast]: { color: 'bg-red-900', maxHp: 7, points: 200 },
    [BrickType.Ashen]: { color: 'bg-gray-700', maxHp: 5, points: 150 },
    [BrickType.VolcanoTitanBoss]: { color: 'bg-gradient-to-r from-red-900 via-orange-700 to-yellow-600', maxHp: 360, points: 10000 },
    // World 8 - Celestial Observatory
    [BrickType.Starling]: { color: 'bg-yellow-300', maxHp: 3, points: 130 },
    [BrickType.Comet]: { color: 'bg-cyan-400', maxHp: 4, points: 150 },
    [BrickType.Nebula]: { color: 'bg-purple-400', maxHp: 5, points: 165 },
    [BrickType.Pulsar]: { color: 'bg-blue-400', maxHp: 6, points: 180 },
    [BrickType.Asteroid]: { color: 'bg-stone-600', maxHp: 8, points: 210 },
    [BrickType.Supernova]: { color: 'bg-white', maxHp: 5, points: 220 },
    [BrickType.CosmosGuardianBoss]: { color: 'bg-gradient-to-r from-indigo-900 via-purple-600 to-pink-500', maxHp: 380, points: 11000 },
    // World 9 - Abyssal Depths
    [BrickType.Tide]: { color: 'bg-blue-500', maxHp: 4, points: 135 },
    [BrickType.Whirlpool]: { color: 'bg-cyan-600', maxHp: 5, points: 160 },
    [BrickType.Leviathan]: { color: 'bg-teal-800', maxHp: 8, points: 220 },
    [BrickType.Deepcrawler]: { color: 'bg-slate-700', maxHp: 6, points: 175 },
    [BrickType.Brine]: { color: 'bg-emerald-700', maxHp: 5, points: 155 },
    [BrickType.Trench]: { color: 'bg-blue-950', maxHp: 7, points: 200 },
    [BrickType.AbyssalHorrorBoss]: { color: 'bg-gradient-to-r from-blue-950 via-teal-800 to-cyan-900', maxHp: 400, points: 12000 },
    // World 10 - Verdant Wilds
    [BrickType.Sprout]: { color: 'bg-lime-400', maxHp: 3, points: 140 },
    [BrickType.Thorn]: { color: 'bg-green-700', maxHp: 4, points: 165 },
    [BrickType.Blossom]: { color: 'bg-pink-400', maxHp: 5, points: 170 },
    [BrickType.Rootguard]: { color: 'bg-amber-800', maxHp: 7, points: 195 },
    [BrickType.Canopy]: { color: 'bg-green-600', maxHp: 6, points: 185 },
    [BrickType.Wildvine]: { color: 'bg-emerald-600', maxHp: 5, points: 175 },
    [BrickType.ForestKeeperBoss]: { color: 'bg-gradient-to-r from-green-800 via-emerald-600 to-lime-500', maxHp: 420, points: 13000 },
    // World 11 - Frost Citadel
    [BrickType.Snowflake]: { color: 'bg-blue-100', maxHp: 3, points: 145 },
    [BrickType.Icicle]: { color: 'bg-cyan-200', maxHp: 4, points: 160 },
    [BrickType.Blizzard]: { color: 'bg-blue-300', maxHp: 5, points: 180 },
    [BrickType.Frostbite]: { color: 'bg-sky-600', maxHp: 6, points: 195 },
    [BrickType.Glacial]: { color: 'bg-cyan-700', maxHp: 8, points: 230 },
    [BrickType.Permafrost]: { color: 'bg-blue-900', maxHp: 7, points: 210 },
    [BrickType.IceQueenBoss]: { color: 'bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500', maxHp: 440, points: 14000 },
    // World 12 - Desert Tombs
    [BrickType.Sand]: { color: 'bg-yellow-200', maxHp: 3, points: 150 },
    [BrickType.Dust]: { color: 'bg-amber-300', maxHp: 4, points: 165 },
    [BrickType.Mirage]: { color: 'bg-orange-200', maxHp: 5, points: 185 },
    [BrickType.Scarab]: { color: 'bg-teal-500', maxHp: 6, points: 200 },
    [BrickType.Mummy]: { color: 'bg-stone-500', maxHp: 7, points: 220 },
    [BrickType.Obelisk]: { color: 'bg-amber-900', maxHp: 9, points: 250 },
    [BrickType.PharaohBoss]: { color: 'bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600', maxHp: 460, points: 15000 },
    // World 13 - Storm Peaks
    [BrickType.Breeze]: { color: 'bg-sky-200', maxHp: 3, points: 155 },
    [BrickType.Gust]: { color: 'bg-gray-300', maxHp: 4, points: 170 },
    [BrickType.Tempest]: { color: 'bg-slate-500', maxHp: 6, points: 195 },
    [BrickType.Thunder]: { color: 'bg-yellow-500', maxHp: 5, points: 210 },
    [BrickType.Hurricane]: { color: 'bg-blue-700', maxHp: 7, points: 235 },
    [BrickType.Cyclone]: { color: 'bg-gray-700', maxHp: 8, points: 240 },
    [BrickType.StormKingBoss]: { color: 'bg-gradient-to-r from-gray-800 via-blue-600 to-yellow-500', maxHp: 480, points: 16000 },
    // World 14 - Void Nexus
    [BrickType.Anomaly]: { color: 'bg-purple-950', maxHp: 5, points: 180 },
    [BrickType.Riftborn]: { color: 'bg-fuchsia-900', maxHp: 6, points: 200 },
    [BrickType.Voidspawn]: { color: 'bg-violet-950', maxHp: 7, points: 220 },
    [BrickType.Ethereal]: { color: 'bg-indigo-950', maxHp: 6, points: 215 },
    [BrickType.Nullifier]: { color: 'bg-slate-950', maxHp: 8, points: 250 },
    [BrickType.Paradox]: { color: 'bg-pink-950', maxHp: 9, points: 270 },
    [BrickType.VoidLordBoss]: { color: 'bg-gradient-to-r from-purple-950 via-fuchsia-900 to-black', maxHp: 500, points: 20000 },
    // World 15 - Ethereal Gardens
    [BrickType.Wisp]: { color: 'bg-pink-200', maxHp: 4, points: 190 },
    [BrickType.Dreamwalker]: { color: 'bg-purple-300', maxHp: 6, points: 210 },
    [BrickType.Illusion]: { color: 'bg-fuchsia-300', maxHp: 5, points: 205 },
    [BrickType.Phantasm]: { color: 'bg-violet-400', maxHp: 7, points: 230 },
    [BrickType.Mirage]: { color: 'bg-pink-400', maxHp: 6, points: 225 },
    [BrickType.Reverie]: { color: 'bg-purple-500', maxHp: 8, points: 260 },
    [BrickType.DreamLordBoss]: { color: 'bg-gradient-to-r from-pink-400 via-purple-500 to-fuchsia-600', maxHp: 520, points: 22000 },
    // World 16 - Infernal Abyss
    [BrickType.Imp]: { color: 'bg-red-600', maxHp: 5, points: 200 },
    [BrickType.Hellhound]: { color: 'bg-orange-900', maxHp: 7, points: 220 },
    [BrickType.Demon]: { color: 'bg-red-800', maxHp: 8, points: 240 },
    [BrickType.Succubus]: { color: 'bg-pink-700', maxHp: 6, points: 235 },
    [BrickType.Tormentor]: { color: 'bg-red-950', maxHp: 9, points: 270 },
    [BrickType.ArchDemon]: { color: 'bg-orange-950', maxHp: 10, points: 290 },
    [BrickType.LordOfHellBoss]: { color: 'bg-gradient-to-r from-red-950 via-orange-800 to-yellow-700', maxHp: 540, points: 24000 },
    // World 17 - Neon Metropolis
    [BrickType.Drone]: { color: 'bg-cyan-500', maxHp: 5, points: 210 },
    [BrickType.Turret]: { color: 'bg-slate-600', maxHp: 8, points: 230 },
    [BrickType.Mech]: { color: 'bg-zinc-700', maxHp: 9, points: 250 },
    [BrickType.Hacker]: { color: 'bg-green-500', maxHp: 6, points: 245 },
    [BrickType.Cyborg]: { color: 'bg-purple-600', maxHp: 10, points: 280 },
    [BrickType.AI_Core]: { color: 'bg-blue-600', maxHp: 11, points: 300 },
    [BrickType.MegaCorporationBoss]: { color: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700', maxHp: 560, points: 26000 },
    // World 18 - Astral Plane
    [BrickType.Seraph]: { color: 'bg-yellow-200', maxHp: 6, points: 220 },
    [BrickType.Celestial]: { color: 'bg-amber-300', maxHp: 8, points: 240 },
    [BrickType.Ascended]: { color: 'bg-yellow-400', maxHp: 9, points: 260 },
    [BrickType.Divinity]: { color: 'bg-amber-500', maxHp: 10, points: 285 },
    [BrickType.Transcendent]: { color: 'bg-yellow-600', maxHp: 11, points: 310 },
    [BrickType.Eternal]: { color: 'bg-amber-700', maxHp: 12, points: 330 },
    [BrickType.OvermindBoss]: { color: 'bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600', maxHp: 580, points: 28000 },
    // World 19 - Chaos Dimension
    [BrickType.Chaosling]: { color: 'bg-gradient-to-r from-red-500 to-blue-500', maxHp: 6, points: 230 },
    [BrickType.Warper]: { color: 'bg-gradient-to-r from-green-500 to-purple-500', maxHp: 8, points: 250 },
    [BrickType.Unstable]: { color: 'bg-gradient-to-r from-yellow-500 to-pink-500', maxHp: 7, points: 245 },
    [BrickType.Mutation]: { color: 'bg-gradient-to-r from-cyan-500 to-orange-500', maxHp: 10, points: 290 },
    [BrickType.Aberration]: { color: 'bg-gradient-to-r from-purple-600 to-red-600', maxHp: 11, points: 320 },
    [BrickType.ChaosBeast]: { color: 'bg-gradient-to-r from-pink-600 to-green-600', maxHp: 12, points: 340 },
    [BrickType.ChaosEmperorBoss]: { color: 'bg-gradient-to-r from-red-600 via-purple-600 to-blue-600', maxHp: 600, points: 30000 },
    // World 20 - The Final Gate
    [BrickType.Guardian]: { color: 'bg-stone-300', maxHp: 8, points: 250 },
    [BrickType.Sentinel]: { color: 'bg-stone-400', maxHp: 10, points: 270 },
    [BrickType.Warden]: { color: 'bg-stone-500', maxHp: 11, points: 295 },
    [BrickType.Keeper]: { color: 'bg-stone-600', maxHp: 12, points: 320 },
    [BrickType.Primordial]: { color: 'bg-stone-700', maxHp: 14, points: 350 },
    [BrickType.Absolute]: { color: 'bg-stone-900', maxHp: 15, points: 380 },
    [BrickType.FinalBoss]: { color: 'bg-gradient-to-r from-stone-900 via-zinc-800 to-slate-900', maxHp: 750, points: 50000 },
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
