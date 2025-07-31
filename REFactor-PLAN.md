# Breakout RPG Refactor Plan and Status

Goal: Reduce any files ≥200 lines below the threshold while preserving behavior, import paths, and public APIs. Refactors are performed in small, PR-sized steps with acceptance criteria: TypeScript build passes, Vite dev runs, and basic playthrough parity.

Repo inventory (current)
- game/gameEngine.ts: 930
- App.tsx: 904
- types.ts: 216
- components/GameUI.tsx: 200
- constants.ts: 94
- services/SaveManager.ts: 139
- Stage layouts: small (≤42 lines)

Only the first four require attention for the “<200 lines” target.

---

Completed (PR 1): Engine sharding façade

Changes
1) New core modules (pure; named exports; TSDoc-style headers):
   - game/core/collisions.ts
     - lineLineCollision, lineRectCollision
   - game/core/projectiles.ts
     - stepProjectiles(args) → { projectiles, damageToPlayer }
     - stepHomingProjectiles(args) → { homingProjectiles, damageToPlayer }
   - game/core/balls.ts
     - updateBallsAndCollisions(args) → {
         updatedBalls, workingBricks, nextBallLaunchedState,
         damageToPlayerDelta, damageMap, triggeredLightningStrikes,
         newExplosions, newBeams, bricksDestroyedThisTick, chaosMagicWasTriggered
       }

2) Updated game/gameEngine.ts
   - Kept public signature export const runGameIteration = (state) => GameStateUpdate
   - Delegates:
     - Balls and brick collision pipeline → updateBallsAndCollisions
     - Regular and homing projectiles → stepProjectiles, stepHomingProjectiles
   - Removed local collision helpers to avoid naming conflicts and use core/collisions
   - Preserved:
     - XP/gold/score tallying
     - Explosions and AoE post-processing
     - Lightning chain resolution
     - Archmage and classic boss logic
     - Barrier/mana-shield damage handling
     - Stage completion logic
   - Build verified: npm run build (vite) succeeded

Behavior parity: Maintained. No public import path changes for callers.

---

Next steps

PR 2: Engine hazards and boss split
- Create:
  - game/core/hazards.ts
    - stepArcaneOrbs (existing path retained)
    - stepExplosionsAoE
    - stepLightningChains
    - stepEnvironmentalHazards (fire rain, ice fields, overload rings, final gambit beams)
  - game/core/boss.ts
    - stepBossArchmage(args): phases 1–3, summons, missiles, element storms, chaos magic, final gambit rings/beams
    - stepBossClassic(args): movement and volleys
- Update game/gameEngine.ts to orchestrate in a linear sequence and aggregate outputs.
- Target: Substantially reduce gameEngine.ts size toward <200 lines.

PR 3: App container split
- Hooks (stateful, small logic units):
  - hooks/useControls.ts: keyboard bindings (T/TAB/1..4), targeting mode toggle
  - hooks/useMouseTracking.ts: per-area mouse tracking
  - hooks/useSkillsController.ts: handleSkillActivation, cooldown/duration math (pure inputs/outputs)
  - hooks/useGameTick.ts: composes game tick, delegates to runGameIteration with injected state setters
- Presentational (pure render; no state mutations):
  - components/ui/Paddle.tsx
  - components/ui/BallsLayer.tsx
  - components/ui/ProjectilesLayer.tsx
  - components/ui/Hazards/FireRainLayer.tsx
  - components/ui/Hazards/IceSpikeFieldLayer.tsx
  - components/ui/Hazards/LightningLayer.tsx
  - components/ui/Hazards/OverloadRingsLayer.tsx
  - components/ui/Hazards/FinalGambitBeamsLayer.tsx
  - components/ui/BricksLayer.tsx (renderBrick)
- App.tsx remains default export, owns state, wires hooks, preserves JSX order/z-index for visual parity.
- Target: App.tsx <200 lines.

PR 4: types.ts split (≥200)
- If types.ts remains ≥200:
  - game/types/engine.ts: engine entities/updates
  - game/types/ui.ts: UI-specific
  - game/types/skills.ts: skill/upgrade definitions
  - game/types/index.ts: barrel
- Keep existing imports stable via a temporary types.ts re-export if needed.

PR 5: GameUI.tsx trim (at 200)
- Extract purely presentational subcomponents and keep GameUI as a thin container.

Optional (not currently required by inventory)
- constants split: Only if file grows ≥200; keep constants.ts as a barrel.
- SaveManager split: Only if ≥200; separate serialization vs storage.
- Stage layouts split: Only if any single file grows ≥200; split by level and provide index barrel.

---

Acceptance Criteria Per PR
- TypeScript build passes.
- Vite dev runs; smoke test playthrough parity (stage select, loop, boss behavior).
- No import path changes for external callers.
- Refactored files reduced below or near 200 lines without harming clarity.

---

Notes and compatibility
- Behavior parity only. Public signatures for runGameIteration preserved.
- Shims/barrels used to prevent import churn.
- Pure modules accept inputs and return results; IO/time/random remain in wrappers/controllers.
- Prefer named exports; React components remain default if already default.
