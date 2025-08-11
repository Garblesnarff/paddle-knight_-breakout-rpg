import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameState, SystemUpdate } from '@/src/types';

export class ProgressionSystem implements IGameSystem {
  name = 'ProgressionSystem';
  priority = 60;
  dependencies: string[] = ['BuffSystem'];

  initialize(_gameState: GameState): void {}
  update(_deltaTimeMs: number): SystemUpdate { return {}; }
  destroy(): void {}
}


