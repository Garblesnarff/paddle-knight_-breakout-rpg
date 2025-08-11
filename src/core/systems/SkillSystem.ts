import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameState, SystemUpdate } from '@/src/types';

export class SkillSystem implements IGameSystem {
  name = 'SkillSystem';
  priority = 40;
  dependencies: string[] = ['CombatSystem'];

  initialize(_gameState: GameState): void {}
  update(_deltaTimeMs: number): SystemUpdate { return {}; }
  destroy(): void {}
}


