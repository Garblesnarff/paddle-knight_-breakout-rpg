# Paddle Knight: Breakout RPG — Architecture Overview

Purpose
- Provide a concise, high-signal map for humans and LLMs to safely navigate and refactor the codebase with behavior parity.

Current High-Level Structure
- App.tsx: React composition shell and primary game state ownership.
- hooks/useGameLoop.ts: rAF loop to drive per-frame updates.
- game/gameEngine.ts: Core per-tick simulation logic (ball physics, brick interactions, boss logic, hazards, skill interactions).
- game/level-manager.ts: World brick generation from layout data.
- game/worlds/*: Layout (data arrays) and world-specific skills data.
- game/skills.ts: Aggregates skill trees.
- services/SaveManager.ts: Save/load and world progress persistence (LocalStorage).
- services/geminiService.ts: Non-critical “legend generation” feature (not used in gameplay).
- components/*: UI views and game HUD.

Refactor Direction (incremental, behavior-parity)
1. Separate pure core from impure controllers
   - core: pure functions for engine tick, level progression, selectors.
   - controllers: time, random, storage, DOM/React binding.
   - Principle: All IO and side effects (Date.now, localStorage, Math.random) flow through a context dependency.

2. Treat content as data with runtime validation
   - config/: skill trees, layouts, stage configs (data only).
   - schemas: zod schemas for layouts, save data, and key runtime inputs.
   - Validate at load time, fail fast in dev, warn in prod.

3. Types-first + docstrings
   - Narrow, explicit types for events, state, and updates.
   - Docstrings per function with: Purpose, Inputs, Outputs, Invariants, Side-effects, Examples.

4. Thin React layer
   - Presentational vs container split.
   - Hooks wrap controllers; components remain side-effect free.

Phased Plan
- Phase 1: Schemas + docs + headers (this PR).
- Phase 2: Extract pure engine core function signature (no logic changes).
- Phase 3: Move layout/skill config to config/ with validation loaders.
- Phase 4: SaveManager serialization helpers + schema validation on load.
- Phase 5: Optional: abstract time/random via EngineContext for determinism.

Key Contracts To Keep Stable
- runGameIteration(state) -> updates (shape unchanged).
- createBricksForWorld(world) -> Brick[] (unchanged behavior).
- SaveManager public API (load, save, updateWorldData, addGold, unlockNextWorld).

Glossary
- Tick: Single update cycle of gameEngine.
- Hazard: Time-bound area/projectile dealing damage (fire, ice, lightning, rings, beams).
- Layout: 2D array of BrickType values.
- Skill Tree: Data map from skillId to SkillNode used to gate and modify player stats and abilities.
