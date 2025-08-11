import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameState, SystemUpdate } from '@/src/types';

export class PhysicsSystem implements IGameSystem {
  name = 'PhysicsSystem';
  priority = 10;
  dependencies: string[] = [];

  initialize(_gameState: GameState): void {}
  update(_deltaTimeMs: number): SystemUpdate { return {}; }
  destroy(): void {}
}


