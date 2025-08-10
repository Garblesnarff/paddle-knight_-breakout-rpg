# LLM-Optimized Refactoring Plan for Paddle Knight

## Executive Summary

This refactoring plan transforms the Paddle Knight codebase from a monolithic structure into a modular, LLM-navigable architecture. The goal is to enable efficient AI-assisted development through clear separation of concerns, explicit interfaces, and comprehensive documentation.

## Current Pain Points

1. **Monolithic App.tsx** - 1000+ lines mixing game logic, UI, and state management
2. **Implicit Type Dependencies** - Types spread across files without clear boundaries
3. **Mixed Concerns** - Physics, rendering, and game logic intertwined
4. **Sparse Documentation** - Limited context for complex game mechanics
5. **Deep Nesting** - Complex conditional logic and callback chains
6. **Magic Numbers** - Constants scattered throughout implementation

## Phase 1: File Structure Reorganization

### New Directory Structure

```
/src
├── /core                    # Core game engine (pure logic)
│   ├── /physics
│   │   ├── Ball.ts         # Ball physics class
│   │   ├── Paddle.ts       # Paddle physics class
│   │   ├── Collision.ts    # Collision detection systems
│   │   ├── Vector2D.ts     # Vector math utilities
│   │   └── constants.ts    # Physics constants (gravity, friction, speeds)
│   │
│   ├── /entities           # Game entity logic
│   │   ├── /bricks
│   │   │   ├── BrickBase.ts
│   │   │   ├── FireBrick.ts
│   │   │   ├── IceBrick.ts
│   │   │   ├── LightningBrick.ts
│   │   │   ├── MirrorBrick.ts
│   │   │   ├── RuneBrick.ts
│   │   │   ├── ApprenticeBrick.ts
│   │   │   └── index.ts    # Brick factory and registry
│   │   │
│   │   ├── /bosses
│   │   │   ├── BossBase.ts
│   │   │   ├── BrickLord.ts
│   │   │   ├── Archmage.ts
│   │   │   └── ChronoEngineer.ts
│   │   │
│   │   └── /projectiles
│   │       ├── ProjectileBase.ts
│   │       ├── ArcaneOrb.ts
│   │       ├── HomingMissile.ts
│   │       └── SteamBurst.ts
│   │
│   ├── /systems            # Game systems (ECS-like)
│   │   ├── CombatSystem.ts
│   │   ├── ProgressionSystem.ts
│   │   ├── SkillSystem.ts
│   │   ├── ManaSystem.ts
│   │   ├── BuffSystem.ts
│   │   └── SaveSystem.ts
│   │
│   └── /state             # State management
│       ├── GameState.ts
│       ├── PlayerState.ts
│       ├── StageState.ts
│       └── EntityState.ts
│
├── /ui                     # React components (presentation only)
│   ├── /game-view
│   │   ├── GameCanvas.tsx
│   │   ├── BrickRenderer.tsx
│   │   ├── BallRenderer.tsx
│   │   ├── PaddleRenderer.tsx
│   │   ├── ProjectileRenderer.tsx
│   │   ├── EffectsLayer.tsx
│   │   └── HUD.tsx
│   │
│   ├── /menus
│   │   ├── MainMenu.tsx
│   │   ├── PauseMenu.tsx
│   │   ├── ShopMenu.tsx
│   │   ├── SkillTree.tsx
│   │   └── StageSelector.tsx
│   │
│   └── /components        # Reusable UI components
│       ├── Button.tsx
│       ├── ProgressBar.tsx
│       ├── Modal.tsx
│       └── Tooltip.tsx
│
├── /hooks                  # Custom React hooks
│   ├── useGameLoop.ts
│   ├── useGameState.ts
│   ├── useInputHandler.ts
│   ├── useAudioSystem.ts
│   └── useAnimationFrame.ts
│
├── /data                   # Static game data
│   ├── stages/
│   │   ├── world-1-brick-kingdom.json
│   │   ├── world-2-arcane-citadel.json
│   │   ├── world-3-clockwork-spire.json
│   │   └── stage-schema.ts
│   │
│   ├── skills/
│   │   ├── skill-tree.json
│   │   ├── skill-definitions.ts
│   │   └── skill-synergies.json
│   │
│   └── items/
│       ├── shop-items.json
│       ├── cosmetics.json
│       └── power-ups.json
│
├── /config                 # Configuration files
│   ├── game.config.ts      # Core game settings
│   ├── physics.config.ts   # Physics constants
│   ├── balance.config.ts   # Game balance values
│   └── performance.config.ts # Performance budgets
│
├── /types                  # TypeScript definitions
│   ├── entities.ts
│   ├── physics.ts
│   ├── ui.ts
│   ├── game.ts
│   ├── skills.ts
│   └── index.ts           # Re-exports all types
│
├── /utils                  # Utility functions
│   ├── math.ts
│   ├── random.ts
│   ├── performance.ts
│   ├── collision.ts
│   └── debug.ts
│
├── /contracts             # Interface definitions
│   ├── IPhysicsEngine.ts
│   ├── IGameSystem.ts
│   ├── IEntity.ts
│   ├── IRenderer.ts
│   └── IStateManager.ts
│
└── /docs                  # LLM-friendly documentation
    ├── AI_GUIDE.md
    ├── ARCHITECTURE.md
    ├── SYSTEMS.md
    └── PATTERNS.md
```

## Phase 2: Interface-First Design

### Core Contracts

```typescript
// src/contracts/IPhysicsEngine.ts
/**
 * Physics Engine Contract
 * Handles all physics calculations for the game
 * @performance Target: 60fps with 100+ entities
 */
export interface IPhysicsEngine {
  update(deltaTime: number, entities: PhysicsEntity[]): PhysicsUpdate;
  detectCollisions(entities: PhysicsEntity[]): Collision[];
  applyForces(entity: PhysicsEntity, forces: Vector2D[]): void;
  resolveCollision(collision: Collision): void;
}

// src/contracts/IGameSystem.ts
/**
 * Base Game System Contract
 * All game systems must implement this interface
 */
export interface IGameSystem {
  name: string;
  priority: number; // Execution order
  dependencies: string[]; // Other system names
  
  initialize(gameState: GameState): void;
  update(deltaTime: number): SystemUpdate;
  destroy(): void;
}

// src/contracts/IEntity.ts
/**
 * Base Entity Contract
 * All game entities must implement this interface
 */
export interface IEntity {
  id: string;
  type: EntityType;
  position: Vector2D;
  bounds: Rectangle;
  
  update(deltaTime: number): void;
  render(context: CanvasRenderingContext2D): void;
  onCollision(other: IEntity): void;
  destroy(): void;
}
```

## Phase 3: Documentation Standards

### File Header Template

```typescript
/**
 * @module ModuleName
 * @description Brief description of module purpose
 * 
 * @dependencies
 * - Dependency1: Why it's needed
 * - Dependency2: Why it's needed
 * 
 * @exports
 * - exportedFunction(): What it does
 * - ExportedClass: What it represents
 * 
 * @performance
 * - Target metrics
 * - Optimization strategies used
 * 
 * @example
 * ```typescript
 * // Example usage
 * ```
 * 
 * @llm-notes
 * - Special considerations for AI agents
 * - Common modification patterns
 */
```

### Function Documentation Template

```typescript
/**
 * Brief description of function purpose
 * 
 * @param {Type} paramName - Description of parameter
 * @returns {Type} Description of return value
 * 
 * @performance O(n) time complexity
 * @sideEffects Lists any side effects
 * @throws {ErrorType} When this error occurs
 * 
 * @example
 * ```typescript
 * const result = functionName(param);
 * ```
 */
```

## Phase 4: Separate Concerns

### App.tsx Decomposition

```typescript
// New App.tsx - Thin orchestrator
const App = () => {
  return (
    <GameProvider>
      <ErrorBoundary>
        <GameRouter />
      </ErrorBoundary>
    </GameProvider>
  );
};

// GameRouter.tsx - Routing logic
const GameRouter = () => {
  const { gameStatus } = useGameState();
  
  switch (gameStatus) {
    case GameStatus.Start:
      return <StartScreen />;
    case GameStatus.StageSelect:
      return <StageSelector />;
    case GameStatus.Playing:
      return <GameView />;
    case GameStatus.Shop:
      return <Shop />;
    case GameStatus.GameOver:
      return <GameOverScreen />;
    default:
      return <LoadingScreen />;
  }
};

// GameView.tsx - Game rendering
const GameView = () => {
  const gameLoop = useGameLoop();
  const entities = useGameEntities();
  
  return (
    <GameCanvas>
      <PhysicsDebugLayer />
      <EntityLayer entities={entities} />
      <EffectsLayer />
      <UIOverlay />
    </GameCanvas>
  );
};

// GameEngine.ts - Core game logic
export class GameEngine {
  private systems: IGameSystem[] = [];
  
  constructor() {
    this.initializeSystems();
  }
  
  private initializeSystems() {
    // Order matters - dependencies first
    this.systems = [
      new PhysicsSystem(),
      new CollisionSystem(),
      new CombatSystem(),
      new SkillSystem(),
      new BuffSystem(),
      new ProgressionSystem(),
      new AudioSystem(),
    ];
  }
  
  update(deltaTime: number) {
    for (const system of this.systems) {
      const update = system.update(deltaTime);
      this.handleSystemUpdate(update);
    }
  }
}
```

## Phase 5: State Management Refactor

### Zustand Store Structure

```typescript
// src/core/state/gameStore.ts
interface GameStore {
  // State slices
  player: PlayerState;
  stage: StageState;
  entities: EntityState;
  ui: UIState;
  
  // Grouped actions
  playerActions: {
    levelUp: () => void;
    addXP: (amount: number) => void;
    takeDamage: (amount: number) => void;
    heal: (amount: number) => void;
    spendSkillPoint: (skillId: string) => void;
  };
  
  stageActions: {
    loadStage: (stageId: number) => void;
    completeStage: () => void;
    restartStage: () => void;
  };
  
  entityActions: {
    spawnEntity: (entity: IEntity) => void;
    destroyEntity: (id: string) => void;
    updateEntity: (id: string, updates: Partial<IEntity>) => void;
  };
  
  // Computed values
  get canLevelUp(): boolean;
  get currentDPS(): number;
  get stageProgress(): number;
}

// Separate stores for different concerns
export const useGameStore = create<GameStore>(...);
export const useUIStore = create<UIStore>(...);
export const useSettingsStore = create<SettingsStore>(...);
```

## Phase 6: Test Structure

```
/src/__tests__
├── /unit
│   ├── /physics
│   │   ├── Ball.test.ts
│   │   ├── Collision.test.ts
│   │   └── Vector2D.test.ts
│   │
│   ├── /entities
│   │   ├── FireBrick.test.ts
│   │   └── BrickLord.test.ts
│   │
│   └── /systems
│       ├── CombatSystem.test.ts
│       └── SkillSystem.test.ts
│
├── /integration
│   ├── BossPhases.test.ts
│   ├── SkillSynergies.test.ts
│   └── SaveLoad.test.ts
│
├── /e2e
│   ├── CompleteStage.test.ts
│   └── FullGameLoop.test.ts
│
└── /fixtures
    ├── mockEntities.ts
    ├── testStages.ts
    └── testSaveFiles.ts
```

## Phase 7: Configuration Externalization

```typescript
// src/config/game.config.ts
export const GAME_CONFIG = {
  physics: {
    targetFPS: 60,
    maxBalls: 10,
    defaultBallSpeed: 4,
    paddleSpeed: 8,
    gravity: 0,
  },
  
  progression: {
    xpCurve: 'exponential' as const,
    baseXP: 100,
    xpMultiplier: 1.5,
    maxLevel: 50,
    skillPointsPerLevel: 1,
  },
  
  difficulty: {
    easy: {
      enemyHP: 0.8,
      playerDamage: 1.2,
      goldMultiplier: 1.5,
    },
    normal: {
      enemyHP: 1.0,
      playerDamage: 1.0,
      goldMultiplier: 1.0,
    },
    hard: {
      enemyHP: 1.5,
      playerDamage: 0.8,
      goldMultiplier: 0.8,
    },
  },
  
  performance: {
    maxParticles: 1000,
    maxExplosions: 20,
    objectPoolSize: 100,
    renderBudgetMs: 16, // 60fps
  },
};
```

## Phase 8: Error Boundaries and Logging

```typescript
// src/core/debug/Logger.ts
export class GameLogger {
  private static contexts: string[] = [];
  private static performanceMarks: Map<string, number> = new Map();
  
  static enterContext(name: string): void {
    this.contexts.push(name);
    console.group(`🎮 [${name}]`);
    this.performanceMarks.set(name, performance.now());
  }
  
  static exitContext(): void {
    const context = this.contexts.pop();
    if (context && this.performanceMarks.has(context)) {
      const duration = performance.now() - this.performanceMarks.get(context)!;
      console.log(`⏱️ ${context} took ${duration.toFixed(2)}ms`);
      this.performanceMarks.delete(context);
    }
    console.groupEnd();
  }
  
  static debug(message: string, data?: any): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🔍 [${this.getCurrentContext()}] ${message}`, data);
    }
  }
  
  static error(message: string, error?: Error): void {
    console.error(`❌ [${this.getCurrentContext()}] ${message}`, error);
    
    // Store for LLM debugging
    ErrorStore.add({
      context: this.contexts.slice(),
      message,
      error: error?.stack,
      timestamp: Date.now(),
      gameState: GameStore.getState(),
    });
  }
  
  static performance(metric: string, value: number): void {
    PerformanceMonitor.record(metric, value);
    
    if (value > PERFORMANCE_BUDGETS[metric]) {
      this.warn(`Performance budget exceeded for ${metric}: ${value}ms`);
    }
  }
  
  private static getCurrentContext(): string {
    return this.contexts.join('/') || 'Global';
  }
}

// Error boundary component
export class GameErrorBoundary extends React.Component {
  componentDidCatch(error: Error, info: ErrorInfo) {
    GameLogger.error('React error boundary triggered', error);
    
    // Send to error reporting service
    ErrorReporter.send({
      error,
      info,
      gameState: GameStore.getState(),
      userAgent: navigator.userAgent,
    });
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorRecoveryScreen />;
    }
    return this.props.children;
  }
}
```

## Phase 9: Migration Strategy

### Week-by-Week Plan

#### Week 1: Foundation
- [ ] Create new folder structure
- [ ] Set up interface contracts
- [ ] Configure build tools for new structure
- [ ] Add base documentation templates

#### Week 2: Physics Extraction
- [ ] Extract physics engine to separate module
- [ ] Create physics tests
- [ ] Implement physics debug visualizations
- [ ] Document physics APIs

#### Week 3: Entity System
- [ ] Create base entity classes
- [ ] Migrate brick types to individual classes
- [ ] Implement entity factory pattern
- [ ] Add entity tests

#### Week 4: State Management
- [ ] Set up Zustand stores
- [ ] Migrate from useState to store
- [ ] Implement state persistence
- [ ] Add state debugging tools

#### Week 5: UI Decomposition
- [ ] Break down App.tsx
- [ ] Create component library
- [ ] Implement render optimization
- [ ] Add Storybook for components

#### Week 6: Documentation Sprint
- [ ] Write AI_GUIDE.md
- [ ] Document all public APIs
- [ ] Create architecture diagrams
- [ ] Add inline code examples

#### Week 7: Testing Coverage
- [ ] Achieve 80% unit test coverage
- [ ] Add integration tests for critical paths
- [ ] Implement visual regression tests
- [ ] Set up CI/CD pipeline

#### Week 8: Optimization & Polish
- [ ] Performance profiling and optimization
- [ ] Bundle size optimization
- [ ] Code cleanup and refactoring
- [ ] Final documentation review

## Phase 10: LLM-Specific Optimizations

### AI Navigation Guide

```markdown
# src/docs/AI_GUIDE.md

## Quick Command Reference

### Common Tasks
- **Add new brick type**: Extend `/src/core/entities/bricks/BrickBase.ts`
- **Modify physics**: Edit `/src/core/physics/`
- **Add visual effect**: Update `/src/ui/game-view/EffectsLayer.tsx`
- **Change progression**: Edit `/src/core/systems/ProgressionSystem.ts`
- **Add new skill**: Update `/src/data/skills/skill-definitions.ts`
- **Fix collision bug**: Check `/src/core/physics/Collision.ts`

### System Architecture
```
Input → Physics → Collision → Combat → Effects → Render
         ↓          ↓          ↓         ↓
      Position   Damage    Particles  Canvas
```

### Performance Budgets
- Physics: 5ms per frame max
- Rendering: 8ms per frame max
- State updates: 2ms per frame max
- Total frame: 16.67ms (60fps)

### Common Patterns

1. **Entity Creation**
   ```typescript
   class NewEntity extends BaseEntity {
     constructor() {
       super(EntityType.Custom);
     }
     
     update(dt: number) {
       // Logic here
     }
   }
   ```

2. **System Creation**
   ```typescript
   class NewSystem implements IGameSystem {
     name = 'NewSystem';
     priority = 100;
     
     update(dt: number): SystemUpdate {
       // Logic here
     }
   }
   ```

3. **State Management**
   ```typescript
   const useNewSlice = (set, get) => ({
     value: 0,
     increment: () => set(state => ({ value: state.value + 1 }))
   });
   ```

### Debugging Commands
- Enable physics debug: `GameLogger.enablePhysicsDebug()`
- Show performance overlay: `PerformanceMonitor.show()`
- Dump game state: `GameStore.getState()`
- List active systems: `GameEngine.listSystems()`

### File Naming Conventions
- Components: PascalCase.tsx
- Utilities: camelCase.ts
- Types: PascalCase.ts
- Tests: FileName.test.ts
- Configs: kebab-case.config.ts
```

### Context Window Optimization

```typescript
// Each file includes a manifest comment for LLMs
/**
 * @manifest
 * @imports ['Physics', 'Vector2D', 'Entity']
 * @exports ['Ball', 'createBall']
 * @modifies ['EntityState', 'PhysicsWorld']
 * @reads ['GameConfig', 'PhysicsConfig']
 * @performance 2ms average, 5ms worst case
 * @memory 1KB per instance
 */
```

## Benefits of This Refactoring

### For LLM Navigation
1. **Clear File Boundaries** - Each file has a single responsibility
2. **Explicit Dependencies** - All imports and exports documented
3. **Reduced Context Size** - Smaller files fit in context windows
4. **Semantic Structure** - Folder names indicate functionality
5. **Type Safety** - Strong contracts prevent integration errors

### For Development
1. **Parallel Development** - Multiple agents work simultaneously
2. **Testability** - Each module tested in isolation
3. **Maintainability** - Changes isolated to specific modules
4. **Performance** - Targeted optimization possible
5. **Debugging** - Clear error boundaries and logging

### For Game Quality
1. **Consistency** - Shared interfaces ensure compatibility
2. **Extensibility** - Easy to add new features
3. **Reliability** - Comprehensive testing prevents regressions
4. **Performance** - Optimized rendering and physics
5. **Polish** - Separation enables focused improvements

## Success Metrics

- [ ] Average file size < 200 lines
- [ ] Test coverage > 80%
- [ ] Build time < 10 seconds
- [ ] Bundle size < 500KB
- [ ] 60fps on mid-range devices
- [ ] LLM can navigate to any feature in < 3 prompts
- [ ] New features implementable without touching > 3 files

## Next Steps

1. Review and approve plan
2. Set up new project structure
3. Begin incremental migration
4. Track progress weekly
5. Adjust plan based on discoveries

---

*This plan is a living document. Update as the refactoring progresses.*
