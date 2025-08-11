import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameState, SystemUpdate } from '@/src/types';

export class SaveSystem implements IGameSystem {
  name = 'SaveSystem';
  priority = 5;
  dependencies: string[] = [];

  initialize(_gameState: GameState): void {}
  update(_deltaTimeMs: number): SystemUpdate { return {}; }
  destroy(): void {}
}


