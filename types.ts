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
  // World 4 - Clockwork Spire
  Gear,
  Steam,
  Clockwork,
  Tesla,
  Piston,
  Assembly,
  ChronoEngineerBoss,
  // World 5 - Shadow Realm
  Shade,
  Phantom,
  Wraith,
  Specter,
  Nightstalker,
  Voidwalker,
  ShadowLordBoss,
  // World 6 - Crystal Caverns
  Ruby,
  Sapphire,
  Emerald,
  Diamond,
  Quartz,
  Obsidian,
  CrystalKingBoss,
  // World 7 - Volcanic Forge
  Ember,
  Magma,
  Inferno,
  Pyroclast,
  Lavabeast,
  Ashen,
  VolcanoTitanBoss,
  // World 8 - Celestial Observatory
  Starling,
  Comet,
  Nebula,
  Pulsar,
  Asteroid,
  Supernova,
  CosmosGuardianBoss,
  // World 9 - Abyssal Depths
  Tide,
  Whirlpool,
  Leviathan,
  Deepcrawler,
  Brine,
  Trench,
  AbyssalHorrorBoss,
  // World 10 - Verdant Wilds
  Sprout,
  Thorn,
  Blossom,
  Rootguard,
  Canopy,
  Wildvine,
  ForestKeeperBoss,
  // World 11 - Frost Citadel
  Snowflake,
  Icicle,
  Blizzard,
  Frostbite,
  Glacial,
  Permafrost,
  IceQueenBoss,
  // World 12 - Desert Tombs
  Sand,
  Dust,
  Mirage,
  Scarab,
  Mummy,
  Obelisk,
  PharaohBoss,
  // World 13 - Storm Peaks
  Breeze,
  Gust,
  Tempest,
  Thunder,
  Hurricane,
  Cyclone,
  StormKingBoss,
  // World 14 - Void Nexus
  Anomaly,
  Riftborn,
  Voidspawn,
  Ethereal,
  Nullifier,
  Paradox,
  VoidLordBoss,
  // World 15 - Ethereal Gardens
  Wisp,
  Dreamwalker,
  Illusion,
  Phantasm,
  Mirage,
  Reverie,
  DreamLordBoss,
  // World 16 - Infernal Abyss
  Imp,
  Hellhound,
  Demon,
  Succubus,
  Tormentor,
  ArchDemon,
  LordOfHellBoss,
  // World 17 - Neon Metropolis
  Drone,
  Turret,
  Mech,
  Hacker,
  Cyborg,
  AI_Core,
  MegaCorporationBoss,
  // World 18 - Astral Plane
  Seraph,
  Celestial,
  Ascended,
  Divinity,
  Transcendent,
  Eternal,
  OvermindBoss,
  // World 19 - Chaos Dimension
  Chaosling,
  Warper,
  Unstable,
  Mutation,
  Aberration,
  ChaosBeast,
  ChaosEmperorBoss,
  // World 20 - The Final Gate
  Guardian,
  Sentinel,
  Warden,
  Keeper,
  Primordial,
  Absolute,
  FinalBoss,
  // World 21 - Quantum Realm
  QuantumFlux,
  Superposition,
  Entangled,
  WaveFunction,
  Observer,
  Uncertainty,
  QuantumSingularityBoss,
  // World 22 - Ancient Ruins
  RuneStone,
  AncientGolem,
  Sphinx,
  Anubis,
  AncientMummy,
  Hieroglyph,
  AncientOneBoss,
  // World 23 - Plague Lands
  Infected,
  Carrier,
  Diseased,
  Plaguebearer,
  Quarantine,
  Epidemic,
  PlagueDoctorBoss,
  // World 24 - Lightning Realm
  Spark,
  Charge,
  Static,
  Voltage,
  Conductor,
  Thunderbolt,
  LightningGodBoss,
  // World 25 - Blood Moon
  Vampire,
  Werewolf,
  Ghoul,
  Banshee,
  Reaper,
  Lich,
  BloodLordBoss,
  // World 26 - Machine Core
  Nanobot,
  Automaton,
  Mainframe,
  Protocol,
  Firewall,
  Encryption,
  CoreAIBoss,
  // World 27 - Spirit Realm
  Ghost,
  Poltergeist,
  Spirit,
  Haunt,
  Ectoplasm,
  Possession,
  SpiritKingBoss,
  // World 28 - Dragon's Domain
  Wyvern,
  Drake,
  Wyrm,
  Serpent,
  Dragon,
  ElderDragon,
  DragonEmperorBoss,
  // World 29 - Multiverse Nexus
  Alternate,
  Parallel,
  Divergent,
  Convergence,
  Dimensional,
  Multiverse,
  NexusEntityBoss,
  // World 30 - The Absolute End
  Omega,
  Alpha,
  EndEternal,
  Infinite,
  EndAbsolute,
  Perfection,
  TheEndBoss,
  // Catalyst Bricks
  Catalyst,
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

export interface PlayerStats {
  power: number;
  defense: number;
  agility: number;
  luck: number;
  wisdom: number;
  vitality: number;
  ingenuity?: number; // New stat for Clockwork Spire
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
