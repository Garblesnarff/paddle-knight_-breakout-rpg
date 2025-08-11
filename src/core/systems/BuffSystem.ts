import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameState, SystemUpdate } from '@/src/types';

export class BuffSystem implements IGameSystem {
  name = 'BuffSystem';
  priority = 50;
  dependencies: string[] = ['SkillSystem'];

  initialize(_gameState: GameState): void {}
  update(_deltaTimeMs: number): SystemUpdate { return {}; }
  destroy(): void {}
}


