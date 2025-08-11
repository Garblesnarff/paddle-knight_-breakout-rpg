# AI Navigation Guide

## Quick Command Reference

### Common Tasks
- Add new brick type: `src/core/entities/bricks/`
- Modify physics: `src/core/systems/PhysicsSystem.ts`
- Add visual effect: `src/ui/game-view/*`
- Change progression: `src/core/systems/ProgressionSystem.ts`
- Add new skill: `src/data/skills/`
- Fix collision bug: `src/core/systems/CollisionSystem.ts`

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
       super('Custom');
     }
     update(dt: number) {}
   }
   ```

2. **System Creation**
   ```typescript
   class NewSystem implements IGameSystem {
     name = 'NewSystem';
     priority = 100;
     dependencies = [];
     initialize() {}
     update() { return {}; }
     destroy() {}
   }
   ```

3. **State Management**
   ```typescript
   const useNewSlice = (set: any) => ({
     value: 0,
     increment: () => set((s: any) => ({ value: s.value + 1 }))
   });
   ```

### Debugging Commands
- Enable physics debug: `GameLogger.enterContext('Physics'); ... GameLogger.exitContext()`
- Show performance overlay: `GameLogger.performance('frameTotalMs', 17)`
- Dump game state: implement via your state manager
- List active systems: add helper on `GameEngine`

### File Naming Conventions
- Components: PascalCase.tsx
- Utilities: camelCase.ts
- Types: PascalCase.ts
- Tests: FileName.test.ts
- Configs: kebab-case.config.ts


