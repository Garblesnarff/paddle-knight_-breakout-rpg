/**
 * DEPRECATED: This file is being phased out
 * Import from ./src/config/ instead
 *
 * All constants have been organized into focused config files:
 * - src/config/game.ts (30 lines) - Core game dimensions and physics
 * - src/config/player.ts (28 lines) - Player initial stats and skills
 * - src/config/bricks.ts (42 lines) - Brick properties
 * - src/config/worlds/world1.ts (14 lines) - World 1 boss constants
 * - src/config/worlds/world2.ts (54 lines) - World 2 Archmage constants
 * - src/config/worlds/world3.ts (33 lines) - World 3 Bio-Forge constants
 * - src/config/worlds/world4.ts (16 lines) - World 4 Clockwork constants
 *
 * This file re-exports everything for backward compatibility
 */

export * from './src/config';
