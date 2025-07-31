# Contributing Guide (LLM-Friendly)

Goals
- Maintain behavior parity unless explicitly changing gameplay.
- Make changes small, documented, and reviewable.
- Prefer pure functions and explicit types.

General Workflow
1. Small PRs: Make a narrow change with clear rationale.
2. Docstrings: Each new or edited function should include a standard header (template below).
3. Types First: Avoid `any`; prefer discriminated unions and readonly where possible.
4. Pure vs Impure: Keep IO (Date.now, localStorage, Math.random) in controllers; pass dependencies via a context object.
5. Validation: Validate config and save inputs via zod at boundaries.

Function Docstring Template
/**
 * Purpose: One-sentence summary of what this function does.
 * Inputs:
 *   - param: Type — description
 * Outputs: ReturnType — description
 * Invariants: Bullet list of rules that always hold
 * Side-effects: none (if pure) or list them
 * Errors: throws on ... (if any)
 * Example:
 *   const out = fn(input)
 *   expect(out).toEqual(...)
 */

Commit Message Template
- feat(scope): summary
- fix(scope): summary
- refactor(scope): summary, behavior-parity
- docs(scope): summary
- chore(scope): summary

Folder Conventions
- game/: engine code (currently mixed). Long-term split into:
  - core/: pure logic (tick, selectors, state transforms)
  - controllers/: IO and wiring (time, storage, randomness)
- config/: data-only resources (layouts/skills) to be introduced incrementally.
- services/: IO and platform adapters (storage, AI).
- docs/: architecture, glossary, ADRs (optional).
- hooks/: React-specific hooks, no domain logic.

Validation
- Use zod schemas (game/schemas.ts) for:
  - Save data (services/SaveManager boundaries)
  - Stage layouts and configs (when loading data)
- Validate only at boundaries; never inside hot loops.

Testing (Optional)
- Prefer unit tests for pure modules.
- Use docstring examples as living documentation when tests are not present.
