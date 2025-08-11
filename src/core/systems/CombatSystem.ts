import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameState, SystemUpdate } from '@/src/types';

export class CombatSystem implements IGameSystem {
  name = 'CombatSystem';
  priority = 30;
  dependencies: string[] = ['CollisionSystem'];

  initialize(_gameState: GameState): void {}
  update(_deltaTimeMs: number): SystemUpdate { return {}; }
  destroy(): void {}
}


