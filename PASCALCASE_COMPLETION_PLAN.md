# Complete PascalCase Standardization Plan

## Overview
Complete the file naming standardization started in commit 49da671. Currently 9/28 files renamed (32%). This plan renames the remaining 19 files systematically.

---

## Files Inventory

### Already Renamed ✅ (9 files)
```
✅ game/GameEngine.ts
✅ game/WorldConfig.ts
✅ game/core/boss/Classic.ts
✅ game/core/boss/Archmage.ts
✅ game/core/boss/PrimeSynthesizer.ts
✅ game/core/boss/ChronoEngineer.ts
✅ game/core/boss/BaseBoss.ts
✅ game/core/BioForge/ (directory)
✅ game/skills/SkillBuilder.ts
```

### Needs Renaming (19 files)

**Group 1: game/core/ files (6 files) - HIGH IMPACT**
```
❌ game/core/balls.ts → Balls.ts
❌ game/core/boss.ts → Boss.ts
❌ game/core/collisions.ts → Collisions.ts
❌ game/core/debuffs.ts → Debuffs.ts
❌ game/core/hazards.ts → Hazards.ts
❌ game/core/projectiles.ts → Projectiles.ts
```

**Group 2: game/ root files (4 files) - MEDIUM IMPACT**
```
❌ game/level-manager.ts → LevelManager.ts
❌ game/schemas.ts → Schemas.ts
❌ game/shop-items.ts → ShopItems.ts
❌ game/skills.ts → Skills.ts
```

**Group 3: game/core/hazards/ subdirectory (4 files) - LOW IMPACT**
```
❌ game/core/hazards/arcane-orbs.ts → ArcaneOrbs.ts
❌ game/core/hazards/environmental.ts → Environmental.ts
❌ game/core/hazards/explosions.ts → Explosions.ts
❌ game/core/hazards/lightning.ts → Lightning.ts
✅ game/core/hazards/index.ts (keep lowercase - convention)
```

**Group 4: game/core/BioForge/ subdirectory (1 file) - LOW IMPACT**
```
❌ game/core/BioForge/environmental.ts → Environmental.ts
✅ game/core/BioForge/index.ts (keep lowercase - convention)
```

**Group 5: game/worlds/ subdirectories (8 files) - DECISION NEEDED**
```
? game/worlds/world-1/layouts.ts → Layouts.ts?
? game/worlds/world-1/skills.ts → Skills.ts?
? game/worlds/world-2/layouts.ts → Layouts.ts?
? game/worlds/world-2/skills.ts → Skills.ts?
? game/worlds/world-3/layouts.ts → Layouts.ts?
? game/worlds/world-3/skills.ts → Skills.ts?
? game/worlds/world-4/layouts.ts → Layouts.ts?
? game/worlds/world-4/skills.ts → Skills.ts?
```

**Note:** world-1 directories stay kebab-case (common convention for data folders)

---

## Execution Plan - 8 Phases

### Phase 1: Preparation & Analysis
**Goal:** Understand all imports before making changes

**Tasks:**
1. ✅ Create complete file inventory
2. For each file to rename:
   - Grep for ALL imports (including comments/docs)
   - Count number of import sites
   - Identify high-risk files (many imports)
3. Create import update checklist
4. Backup current state (git tag)

**Output:** Import map showing File → [All import locations]

---

### Phase 2: Group 1 - game/core/ Files (HIGH RISK)
**Files:** balls.ts, boss.ts, collisions.ts, debuffs.ts, hazards.ts, projectiles.ts

**Why first:** These are imported by GameEngine.ts and many other files

**Process:**
1. Search for imports:
   ```bash
   grep -r "from.*['\"].*balls['\"]" .
   grep -r "from.*['\"].*boss['\"]" .
   grep -r "from.*['\"].*collisions['\"]" .
   grep -r "from.*['\"].*debuffs['\"]" .
   grep -r "from.*['\"].*hazards['\"]" .
   grep -r "from.*['\"].*projectiles['\"]" .
   ```

2. For EACH file:
   a. Rename: `git mv game/core/balls.ts game/core/Balls.ts`
   b. Update ALL imports found in step 1
   c. Update any stale comments
   d. Run: `npx tsc --noEmit 2>&1 | grep -E "game/core/(balls|boss|collisions|debuffs|hazards|projectiles)"`
   e. Fix any errors

3. Final verification:
   ```bash
   npx tsc --noEmit 2>&1 | grep -E "Cannot find module.*game/core"
   ```

4. Commit:
   ```
   Refactor: Rename game/core files to PascalCase

   - balls.ts → Balls.ts
   - boss.ts → Boss.ts
   - collisions.ts → Collisions.ts
   - debuffs.ts → Debuffs.ts
   - hazards.ts → Hazards.ts
   - projectiles.ts → Projectiles.ts

   Updated N import statements across M files.
   Part of PascalCase standardization completion.
   ```

**Verification:** TypeScript compiles with no new errors

---

### Phase 3: Group 2 - game/ Root Files (MEDIUM RISK)
**Files:** level-manager.ts, schemas.ts, shop-items.ts, skills.ts

**Why next:** Imported by App.tsx and components

**Process:**
1. Search for imports:
   ```bash
   grep -r "from.*['\"].*level-manager['\"]" .
   grep -r "from.*['\"].*schemas['\"]" .
   grep -r "from.*['\"].*shop-items['\"]" .
   grep -r "from.*['\"].*skills['\"]" .
   ```

2. For EACH file:
   a. Rename: `git mv game/level-manager.ts game/LevelManager.ts`
   b. Update ALL imports
   c. Update stale comments
   d. Verify compilation

3. Commit:
   ```
   Refactor: Rename game/ root files to PascalCase

   - level-manager.ts → LevelManager.ts
   - schemas.ts → Schemas.ts
   - shop-items.ts → ShopItems.ts
   - skills.ts → Skills.ts

   Updated N import statements.
   Part of PascalCase standardization completion.
   ```

---

### Phase 4: Group 3 - game/core/hazards/ Subdirectory (LOW RISK)
**Files:** arcane-orbs.ts, environmental.ts, explosions.ts, lightning.ts

**Why now:** Less imported, contained subdirectory

**Process:**
1. Search for imports:
   ```bash
   grep -r "from.*['\"].*hazards/arcane-orbs['\"]" .
   grep -r "from.*['\"].*hazards/environmental['\"]" .
   grep -r "from.*['\"].*hazards/explosions['\"]" .
   grep -r "from.*['\"].*hazards/lightning['\"]" .
   ```

2. Rename all 4 files
3. Update imports (likely in hazards/index.ts and GameEngine.ts)
4. Verify compilation

5. Commit:
   ```
   Refactor: Rename hazards/ subdirectory to PascalCase

   - arcane-orbs.ts → ArcaneOrbs.ts
   - environmental.ts → Environmental.ts
   - explosions.ts → Explosions.ts
   - lightning.ts → Lightning.ts

   Note: index.ts remains lowercase (convention)
   ```

---

### Phase 5: Group 4 - game/core/BioForge/ Subdirectory
**Files:** environmental.ts

**Process:**
1. Search: `grep -r "from.*['\"].*BioForge/environmental['\"]" .`
2. Rename: `git mv game/core/BioForge/environmental.ts game/core/BioForge/Environmental.ts`
3. Update imports (likely in GameEngine.ts, BioForge/index.ts)
4. Verify compilation

5. Commit:
   ```
   Refactor: Rename BioForge/Environmental.ts to PascalCase

   - environmental.ts → Environmental.ts

   Completes BioForge directory standardization.
   ```

---

### Phase 6: Decision - world-*/ Directories
**Files:** 8 files in world-1 through world-4

**Decision Point:**
- **Option A:** Rename to PascalCase (Layouts.ts, Skills.ts)
  - Pro: Complete consistency
  - Con: Data/config directories often use lowercase

- **Option B:** Keep lowercase (layouts.ts, skills.ts)
  - Pro: Follows convention for data/config directories
  - Con: Not fully consistent

**Recommended:** Option B - Keep lowercase
**Rationale:**
- world-* directories are data/configuration
- Common convention to use lowercase in data directories
- Already using lowercase for world directory names (world-1, not World1)
- Pragmatic: less work, lower risk

**Action:** Document decision, no renames needed

---

### Phase 7: Cleanup & Documentation

**Tasks:**
1. Fix stale comment in WorldConfig.ts:
   ```typescript
   // Line 1: Remove or update "// world-config.ts" comment
   ```

2. Search for any remaining stale references:
   ```bash
   grep -r "gameEngine" . | grep -v node_modules | grep -v ".git"
   grep -r "world-config" . | grep -v node_modules | grep -v ".git"
   grep -r "bio-forge" . | grep -v node_modules | grep -v ".git"
   ```

3. Final compilation check:
   ```bash
   npx tsc --noEmit 2>&1 | grep -E "Cannot find module.*game/"
   ```

4. Update REFACTORING_SUMMARY.md:
   - Add section about completion commit
   - Update statistics (9 → 19 files renamed)
   - Acknowledge the 10 broken imports that required fix
   - Update "Consistent PascalCase" claim to reflect reality

---

### Phase 8: Final Verification & Completion

**Verification Checklist:**
- [ ] All 19 files renamed
- [ ] All imports updated
- [ ] TypeScript compiles (no new errors)
- [ ] No references to old filenames in code/comments
- [ ] Documentation updated
- [ ] All changes committed and pushed

**Final Commit:**
```
docs: Update refactoring summary with completion status

Updated REFACTORING_SUMMARY.md to reflect:
- Completed PascalCase standardization (19 files)
- Fixed 10 broken imports in commit af02118
- Total: 28 files now follow PascalCase convention
- Documented decision to keep world-*/ subdirectories lowercase

PascalCase standardization is now complete.
```

---

## Risk Mitigation

### Per Phase:
1. **One group at a time** - Don't rename everything at once
2. **Compile after each group** - Catch errors early
3. **Commit after each group** - Easy to revert if needed
4. **Comprehensive grep** - Find ALL imports, not just obvious ones

### Rollback Plan:
If any phase fails:
```bash
git reset --hard HEAD~1  # Undo last commit
git push -f origin branch_name  # If already pushed
```

---

## Expected Timeline

- Phase 1 (Prep): 15 minutes
- Phase 2 (Group 1): 30 minutes
- Phase 3 (Group 2): 20 minutes
- Phase 4 (Group 3): 15 minutes
- Phase 5 (Group 4): 10 minutes
- Phase 6 (Decision): 5 minutes
- Phase 7 (Cleanup): 20 minutes
- Phase 8 (Verification): 10 minutes

**Total:** ~2 hours

---

## Success Criteria

✅ All game/ TypeScript files follow PascalCase convention
✅ All imports updated correctly
✅ TypeScript compiles without new errors
✅ Documentation accurately reflects work done
✅ No stale comments or references to old names
✅ Consistent naming throughout codebase

---

## Notes

- **index.ts files:** Keep lowercase (standard convention)
- **world-*/ directories:** Keep lowercase (data directory convention)
- **Test after each phase:** Don't accumulate errors
- **Document decisions:** Explain why some files kept lowercase
