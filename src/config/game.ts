/**
 * Core Game Configuration
 * Dimensions, physics, and gameplay constants
 */

// Game dimensions
export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;

// Paddle configuration
export const PADDLE_HEIGHT = 20;
export const PADDLE_Y = GAME_HEIGHT - 40;

// Ball configuration
export const BALL_RADIUS = 8;

// Brick configuration
export const BRICK_WIDTH = 60;
export const BRICK_HEIGHT = 25;
export const BRICK_GAP = 4;

// Progression
export const LEVEL_UP_XP = 200;

// Parry system (Aegis Parry skill)
export const PARRY_WINDOW_DURATION = 150; // ms
export const PARRY_EMPOWERMENT_DURATION = 3000; // ms
export const PARRY_DAMAGE_MULTIPLIER = 2.0;
export const PARRY_SPEED_MULTIPLIER = 1.25;
export const PARRY_PIERCING_HITS = 1;
