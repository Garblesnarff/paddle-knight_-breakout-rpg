import { GameState, SystemUpdate } from '@/src/types';

/**
 * Base Game System Contract
 * All game systems must implement this interface.
 */
export interface IGameSystem {
  name: string;
  priority: number; // Execution order; lower runs earlier
  dependencies: string[]; // Names of systems that must run before this one

  initialize(gameState: GameState): void;
  update(deltaTimeMs: number): SystemUpdate;
  destroy(): void;
}


