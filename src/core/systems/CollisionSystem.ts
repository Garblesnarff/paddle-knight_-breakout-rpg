import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameState, SystemUpdate } from '@/src/types';

export class CollisionSystem implements IGameSystem {
  name = 'CollisionSystem';
  priority = 20;
  dependencies: string[] = ['PhysicsSystem'];

  initialize(_gameState: GameState): void {}
  update(_deltaTimeMs: number): SystemUpdate { return {}; }
  destroy(): void {}
}


