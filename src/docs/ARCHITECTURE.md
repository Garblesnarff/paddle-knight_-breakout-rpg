# Architecture Overview

The project is organized into clear layers to enable modular development and AI-friendly navigation.

- `src/contracts` — Public interfaces for systems, entities, rendering, and state
- `src/core` — Core engine code (physics, systems, state, debug)
- `src/ui` — React presentation components
- `src/data` — Static game data (skills, items, stages)
- `src/config` — Configuration files (physics, balance, performance)
- `src/types` — Shared TypeScript types for contracts and systems
- `src/docs` — Documentation for developers and AI agents

`App.tsx` remains as the legacy monolith during migration; new work should target the structured folders above. Toggle new app via env: `VITE_USE_NEW_APP=true`.


