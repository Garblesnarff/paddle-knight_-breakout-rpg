/**
 * Lightweight runtime validators (no external deps).
 * These functions perform structural checks to help humans/LLMs validate data.
 * They DO NOT throw; they return { ok, errors } to enable safe usage.
 */

// Keep in sync with BrickType string names declared in types.ts
export type BrickTypeString =
  | "Grunt"
  | "Soldier"
  | "Archer"
  | "Mage"
  | "Tank"
  | "Chaos"
  | "Boss"
  | "Apprentice"
  | "Fire"
  | "Ice"
  | "Lightning"
  | "Mirror"
  | "Rune"
  | "ArchmageBoss";

export type LayoutCell = BrickTypeString | null;
export type Layout = LayoutCell[][];
export type Layouts = Layout[];

/**
 * Validate a single layout matrix: rows are arrays, cells are BrickTypeString or null.
 */
export function validateLayout(layout: unknown): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!Array.isArray(layout)) {
    errors.push("Layout is not an array");
    return { ok: false, errors };
  }
  layout.forEach((row, r) => {
    if (!Array.isArray(row)) {
      errors.push(`Row ${r} is not an array`);
      return;
    }
    row.forEach((cell, c) => {
      if (!(cell === null || isBrickTypeString(cell))) {
        errors.push(`Invalid cell at [${r}][${c}]: ${String(cell)}`);
      }
    });
  });
  return { ok: errors.length === 0, errors };
}

/**
 * Validate multiple layouts (world-level).
 */
export function validateLayouts(layouts: unknown): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!Array.isArray(layouts)) {
    return { ok: false, errors: ["Layouts is not an array"] };
  }
  layouts.forEach((layout, i) => {
    const res = validateLayout(layout);
    if (!res.ok) {
      errors.push(`Layout ${i} invalid: ${res.errors.join("; ")}`);
    }
  });
  return { ok: errors.length === 0, errors };
}

/**
 * Minimal SaveData structural validation to mirror services/SaveManager.ts.
 * Does not mutate input; only verifies presence and primitive types.
 */
export interface SaveDataLike {
    version?: string;
    player?: {
        gold?: number;
        totalWorldStars?: number;  // Renamed from totalStars
        highestWorldUnlocked?: number;
        skillPoints?: number;
        unlockedSkills?: Record<string, number>;
    };
    worlds?: {
        [worldId: string]: {
            stages?: {
                [stageId: string]: {
                    stars?: number;
                    bestScore?: number;
                    bestTime?: number;
                    completed?: boolean;
                };
            };
            totalWorldStars?: number;
            completedStages?: number;
        };
    };
    settings?: {
        soundVolume?: number;
        musicVolume?: number;
    };
    statistics?: {
        totalPlayTime?: number;
        totalBricksDestroyed?: number;
        totalBossesDefeated?: number;
    };
}

export function validateSaveData(data: any): data is SaveDataLike {
    if (!data || typeof data !== 'object') return false;
    
    // Check player data
    if (data.player && typeof data.player === 'object') {
        if (data.player.gold !== undefined && typeof data.player.gold !== 'number') return false;
        if (data.player.totalWorldStars !== undefined && typeof data.player.totalWorldStars !== 'number') return false;
        if (data.player.highestWorldUnlocked !== undefined && typeof data.player.highestWorldUnlocked !== 'number') return false;
        if (data.player.skillPoints !== undefined && typeof data.player.skillPoints !== 'number') return false;
        if (data.player.unlockedSkills !== undefined && typeof data.player.unlockedSkills !== 'object') return false;
    }
    
    // Check worlds data
    if (data.worlds && typeof data.worlds === 'object') {
        for (const worldId in data.worlds) {
            const world = data.worlds[worldId];
            if (typeof world !== 'object') return false;
            
            if (world.stages && typeof world.stages === 'object') {
                for (const stageId in world.stages) {
                    const stage = world.stages[stageId];
                    if (typeof stage !== 'object') return false;
                    
                    if (stage.stars !== undefined && typeof stage.stars !== 'number') return false;
                    if (stage.bestScore !== undefined && typeof stage.bestScore !== 'number') return false;
                    if (stage.bestTime !== undefined && typeof stage.bestTime !== 'number') return false;
                    if (stage.completed !== undefined && typeof stage.completed !== 'boolean') return false;
                }
            }
            
            if (world.totalWorldStars !== undefined && typeof world.totalWorldStars !== 'number') return false;
            if (world.completedStages !== undefined && typeof world.completedStages !== 'number') return false;
        }
    }
    
    // Check settings
    if (data.settings && typeof data.settings === 'object') {
        if (data.settings.soundVolume !== undefined && typeof data.settings.soundVolume !== 'number') return false;
        if (data.settings.musicVolume !== undefined && typeof data.settings.musicVolume !== 'number') return false;
    }
    
    // Check statistics
    if (data.statistics && typeof data.statistics === 'object') {
        if (data.statistics.totalPlayTime !== undefined && typeof data.statistics.totalPlayTime !== 'number') return false;
        if (data.statistics.totalBricksDestroyed !== undefined && typeof data.statistics.totalBricksDestroyed !== 'number') return false;
        if (data.statistics.totalBossesDefeated !== undefined && typeof data.statistics.totalBossesDefeated !== 'number') return false;
    }
    
    return true;
}

/** Helpers */

function isBrickTypeString(v: unknown): v is BrickTypeString {
  return (
    v === "Grunt" ||
    v === "Soldier" ||
    v === "Archer" ||
    v === "Mage" ||
    v === "Tank" ||
    v === "Chaos" ||
    v === "Boss" ||
    v === "Apprentice" ||
    v === "Fire" ||
    v === "Ice" ||
    v === "Lightning" ||
    v === "Mirror" ||
    v === "Rune" ||
    v === "ArchmageBoss"
  );
}

function isObject(v: unknown): v is Record<string, any> {
  return typeof v === "object" && v !== null;
}

function isNumber(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v);
}

function isRecordOfNumbers(v: unknown): v is Record<string, number> {
  if (!isObject(v)) return false;
  for (const key of Object.keys(v)) {
    if (!isNumber((v as any)[key])) return false;
  }
  return true;
}
