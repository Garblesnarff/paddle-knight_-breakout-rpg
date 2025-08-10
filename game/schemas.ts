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
  version: string;
  player: {
    gold: number;
    totalStars: number;
    highestWorldUnlocked: number;
    skillPoints: number;
    unlockedSkills: Record<string, number>;
  };
  worlds: {
    [worldId: string]: {
      stars: number;
      bestScore: number;
      bestTime: number;
      completed: boolean;
    };
  };
  settings: {
    soundVolume: number;
    musicVolume: number;
  };
  statistics: {
    totalPlayTime: number;
    totalBricksDestroyed: number;
    totalBossesDefeated: number;
  };
}

export function validateSaveData(data: unknown): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!isObject(data)) {
    return { ok: false, errors: ["SaveData is not an object"] };
  }

  // version
  if (typeof (data as any).version !== "string") errors.push("version must be string");

  // player
  const player = (data as any).player;
  if (!isObject(player)) {
    errors.push("player must be object");
  } else {
    if (!isNumber(player.gold)) errors.push("player.gold must be number");
    if (!isNumber(player.totalStars)) errors.push("player.totalStars must be number");
    if (!isNumber(player.highestWorldUnlocked)) errors.push("player.highestWorldUnlocked must be number");
    if (!isNumber(player.skillPoints)) errors.push("player.skillPoints must be number");
    if (!isRecordOfNumbers(player.unlockedSkills)) errors.push("player.unlockedSkills must be Record<string, number>");
  }

  // worlds
  const worlds = (data as any).worlds;
  if (!isObject(worlds)) {
    errors.push("worlds must be object");
  } else {
    for (const k of Object.keys(worlds)) {
      const s = (worlds as any)[k];
      if (!isObject(s)) {
        errors.push(`worlds[${k}] must be object`);
        continue;
      }
      if (!isNumber(s.stars)) errors.push(`worlds[${k}].stars must be number`);
      if (!isNumber(s.bestScore)) errors.push(`worlds[${k}].bestScore must be number`);
      if (!isNumber(s.bestTime)) errors.push(`worlds[${k}].bestTime must be number`);
      if (typeof s.completed !== "boolean") errors.push(`worlds[${k}].completed must be boolean`);
    }
  }

  // settings
  const settings = (data as any).settings;
  if (!isObject(settings)) {
    errors.push("settings must be object");
  } else {
    if (!isNumber(settings.soundVolume)) errors.push("settings.soundVolume must be number");
    if (!isNumber(settings.musicVolume)) errors.push("settings.musicVolume must be number");
  }

  // statistics
  const statistics = (data as any).statistics;
  if (!isObject(statistics)) {
    errors.push("statistics must be object");
  } else {
    if (!isNumber(statistics.totalPlayTime)) errors.push("statistics.totalPlayTime must be number");
    if (!isNumber(statistics.totalBricksDestroyed)) errors.push("statistics.totalBricksDestroyed must be number");
    if (!isNumber(statistics.totalBossesDefeated)) errors.push("statistics.totalBossesDefeated must be number");
  }

  return { ok: errors.length === 0, errors };
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
