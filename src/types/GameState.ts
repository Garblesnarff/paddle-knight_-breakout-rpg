/**
 * Game State Definition
 * Central game state interface (to be expanded during migration)
 */

export interface GameState {
  timeMs: number;
  entitiesById: Record<string, unknown>;
}

export interface SystemUpdate {
  events?: string[];
}
