# Glossary

This glossary standardizes domain terms so humans and LLMs use consistent language across code, docs, and commits.

Core Game Terms
- Tick: One simulation step executed by the game engine (per animation frame).
- Brick: Destructible or special entity in the playfield defined by BrickType. Has hp, position, width/height, and optional behavior fields.
- Boss: Special BrickTypes (Boss, ArchmageBoss) with behaviors and phases.
- Layout: A 2D array of BrickType values (nullable) describing initial world arrangement.
- World: A collection of levels/layouts; world N maps to index N-1.
- Hazard: Time-bound environmental damage source (fire rain zone, ice spike field, lightning strike, overload ring, final gambit beam).
- Projectile: Moving object produced by enemies/bosses (projectiles, homing missiles).
- Ball: Player-controlled bouncing sphere; collisions damage bricks.
- Skill: Player ability with cooldown, duration, charges; can be passive or active.
- Buff: Temporary player-power modifier (e.g., haste, power, shield).
- Rune Shield: One-shot damage shield applied to adjacent bricks.

State and Progression
- GameState: Snapshot of all entities (balls, bricks, projectiles, hazards) and player stats during a tick.
- Updates: Delta from a single tick, merged into React state (balls, bricks, damageToPlayer, etc.).
- Level Up: When xp crosses LEVEL_UP_XP threshold; grants skill points.
- Stars: 1–3 rating for a world run based on criteria (HP%, time, all bricks destroyed).

Technical Concepts
- Pure function: No side effects; output depends only on inputs.
- Controller: Imperative code handling IO (time, storage, randomness) and wiring to React.
- Config: Data-only definitions (layouts, world configs, skill trees).
- Validation: Runtime schema checks via zod for saves and configs.

Abbreviations
- HP: Hit points (player/brick health).
- XP: Experience points.
- RNG: Random number generator.
