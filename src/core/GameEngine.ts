import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameLogger } from '@/src/core/debug/Logger';
import { GameState, SystemUpdate } from '@/src/types';
import { PhysicsSystem } from '@/src/core/systems/PhysicsSystem';
import { CollisionSystem } from '@/src/core/systems/CollisionSystem';
import { CombatSystem } from '@/src/core/systems/CombatSystem';
import { SkillSystem } from '@/src/core/systems/SkillSystem';
import { BuffSystem } from '@/src/core/systems/BuffSystem';
import { ProgressionSystem } from '@/src/core/systems/ProgressionSystem';
import { SaveSystem } from '@/src/core/systems/SaveSystem';
import { AudioSystem } from '@/src/core/systems/AudioSystem';

export class GameEngine {
  private systems: IGameSystem[] = [];
  private gameState: GameState;

  constructor(initialState?: Partial<GameState>) {
    this.gameState = {
      timeMs: 0,
      entitiesById: {},
      ...initialState,
    } as GameState;
    this.initializeSystems();
  }

  private initializeSystems(): void {
    // Placeholder systems; will be filled during migration
    this.systems = [
      new AudioSystem(),
      new SaveSystem(),
      new PhysicsSystem(),
      new CollisionSystem(),
      new CombatSystem(),
      new SkillSystem(),
      new BuffSystem(),
      new ProgressionSystem(),
    ].sort((a, b) => a.priority - b.priority);

    for (const system of this.systems) {
      system.initialize(this.gameState);
    }
  }

  update(deltaTimeMs: number): void {
    GameLogger.enterContext('GameEngine.update');
    this.gameState.timeMs += deltaTimeMs;
    for (const system of this.systems) {
      const update: SystemUpdate = system.update(deltaTimeMs);
      void update; // reserved for future system event handling
    }
    GameLogger.exitContext();
  }

  listSystems(): Array<{ name: string; priority: number; deps: string[] }> {
    return this.systems.map((s) => ({ name: s.name, priority: s.priority, deps: s.dependencies }));
  }

  getAudioSystem(): AudioSystem | null {
    return this.systems.find(s => s.name === 'AudioSystem') as AudioSystem || null;
  }
}

// Noop systems removed; using structured system stubs


