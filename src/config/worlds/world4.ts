/**
 * World 4: Clockwork Spire Configuration
 * Constants for Clockwork enemies and Chrono Engineer boss
 */

// === Enemy brick abilities ===
export const CLOCKWORK_GEAR_ROTATE_HITS = 3; // Hits to complete rotation
export const STEAM_ZONE_DURATION = 3000; // ms
export const STEAM_ZONE_RADIUS = 60;
export const CLOCKWORK_SPEEDUP_PERCENT = 0.25; // 25% speed boost per hit (stacks)
export const TESLA_SHOT_DIRECTIONS = 4; // Shoots in 4 directions
export const PISTON_KNOCKBACK_MULTIPLIER = 1.5;
export const ASSEMBLY_REBUILD_INTERVAL = 10000; // ms (rebuilds destroyed bricks)

// === Chrono Engineer boss ===
export const CHRONO_ENGINEER_PHASE2_THRESHOLD = 0.7; // 70% HP
export const CHRONO_ENGINEER_PHASE3_THRESHOLD = 0.4; // 40% HP
export const CHRONO_ENGINEER_FINAL_COUNTDOWN_THRESHOLD = 0.1; // 10% HP
export const CHRONO_ENGINEER_SPEED_ZONE_INTERVAL = 6000; // ms
export const CHRONO_ENGINEER_TIME_DISTORT_INTERVAL = 5000; // ms
