/**
 * Game State Enums
 * All enum types used throughout the game
 */

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
  // World 1 - Classic
  Grunt,
  Soldier,
  Archer,
  Mage,
  Tank,
  Chaos,
  Boss,
  // World 2 - Archmage Tower
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
  // Special Bricks
  Catalyst,
}

export enum SkillType {
  Passive,
  Active,
  Triggered,
}

export enum ElementType {
  Fire = 'fire',
  Ice = 'ice',
  Lightning = 'lightning',
  Rune = 'rune',
}
