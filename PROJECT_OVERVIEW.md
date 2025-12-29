# PROJECT OVERVIEW

**Name:** Paddle Knight: Breakout RPG
**One-liner:** A breakout-style game with deep RPG mechanics, skill trees, and multi-world progression.
**Purpose:** Transforms the classic brick-breaking formula into a full RPG experience with stats (Power, Defense, Agility, Luck, Wisdom, Vitality, Ingenuity), mana-based abilities, boss battles with multiple phases, and a skill tree system. Designed for replayability through world progression, star ratings, and permanent upgrades via a shop system.

## CURRENT STATE

**Status:** Active development
**Last meaningful work:** World 4 (Clockwork Spire) - empty layouts and skill definitions added; particle effects, audio management, and animation utilities introduced; Catalyst brick type with empowerment mechanics added

**What's working:**
- World 1 (Brick Kingdom) - Complete with all stages and Brick Lord boss
- World 2 (Arcane Citadel) - Complete with all elemental mechanics and Archmage boss (3 phases)
- World 3 (Bio-Forge Nexus) - Complete with adaptive enemies and Prime Synthesizer boss
- Core game loop: ball physics, paddle control, brick destruction
- RPG stat system with 7 stats affecting gameplay
- Mana system with wisdom-based regeneration
- Skill tree with passive, active, and triggered abilities
- Save/load system using localStorage
- Star rating system (time + HP thresholds)
- Shop system for permanent stat upgrades
- World/Stage selection UI with themed cards
- Audio system (Howler.js) and particle effects (CSS-based)
- Aegis Parry mechanic for skilled play

**What's broken/incomplete:**
- World 4 (Clockwork Spire) - Has layouts/skills defined but boss mechanics incomplete
- Refactor in progress - Legacy App.tsx (1226 lines) coexists with new modular architecture in `/src`
- World 3 skills not imported into main skill tree (only World 1, 2, 4)
- New app architecture (`npm run dev:new`) partially implemented
- Some audio prompts defined but not all sounds implemented

**Next logical step:** Complete World 4 Chrono-Engineer boss implementation or continue migrating legacy App.tsx to the new modular architecture under `/src`.

## TECH STACK

- **Runtime:** Node.js (Vite dev server)
- **Framework:** React 19 with TypeScript
- **Database:** LocalStorage (via SaveManager singleton)
- **Deployment:** Vite build for static hosting (no deployment configured)
- **Key dependencies:**
  - `react` / `react-dom` - UI framework
  - `zustand` - State management (for new architecture)
  - `howler` - Audio playback
  - `gsap` - Animations
  - `zod` - Schema validation for save data

## KEY FILES

- `App.tsx` - Legacy monolithic game component (1226 lines) - main game loop, all state management
- `game/gameEngine.ts` - Core tick-based game simulation (635 lines) - pure function updates
- `game/world-config.ts` - All 20 stages across 4 worlds with themes and star criteria
- `game/level-manager.ts` - Brick layout generation for stages
- `types.ts` - All game entity interfaces (Brick, Ball, Skills, Hazards, etc.)
- `constants.ts` - Game balance constants, brick properties, boss timings
- `game/core/boss/archmage.ts` - Complex 3-phase boss example (330 lines)
- `game/core/boss/prime-synthesizer.ts` - World 3 boss implementation (426 lines)
- `src/core/GameEngine.ts` - New modular game engine (refactored architecture)
- `services/SaveManager.ts` - Persistence layer with versioned save schema

## ENTRY POINTS

- **Run dev (legacy):** `npm run dev`
- **Run dev (new arch):** `npm run dev:new` (VITE_USE_NEW_APP=true)
- **Build:** `npm run build`
- **Test:** No test suite configured
- **Deploy:** `npm run build` → deploy `dist/` to static host

## CONNECTIONS

- **Depends on:** Gemini API (`@google/genai`) - appears unused or experimental
- **Used by:** Standalone game, no external consumers
- **Related repos:** None (self-contained)

## ARCHITECTURE NOTES

The project is mid-refactor from a monolithic React component to a modular ECS-like architecture:

**Legacy (`App.tsx`):** Single component with 50+ useState hooks, game loop via `useGameLoop`, direct DOM event handling

**New (`/src`):**
- `/src/core/systems/` - Modular game systems (Physics, Combat, Skill, Buff, etc.)
- `/src/contracts/` - TypeScript interfaces for systems
- `/src/ui/` - Decoupled React renderers
- Feature flag: `VITE_USE_NEW_APP=true` switches to new architecture

**Game Worlds:**
| World | Theme | Boss | Status |
|-------|-------|------|--------|
| 1 | Brick Kingdom | Brick Lord | Complete |
| 2 | Arcane Citadel | Archmage | Complete |
| 3 | Bio-Forge Nexus | Prime Synthesizer | Complete |
| 4 | Clockwork Spire | Chrono-Engineer | In Progress |
