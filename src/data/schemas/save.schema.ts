import { z } from 'zod';

export const StageRecordSchema = z.object({
  stars: z.number().int().min(0).max(3),
  bestScore: z.number().int().min(0),
  bestTime: z.number().int().min(0),
  completed: z.boolean(),
});

export const WorldRecordSchema = z.object({
  stages: z.record(z.string(), StageRecordSchema),
  totalWorldStars: z.number().int().min(0),
  completedStages: z.number().int().min(0),
});

export const SaveSchema = z.object({
  version: z.string(),
  player: z.object({
    gold: z.number().int().min(0),
    totalWorldStars: z.number().int().min(0),
    highestWorldUnlocked: z.number().int().min(1),
    skillPoints: z.number().int().min(0),
    unlockedSkills: z.record(z.string(), z.number().int().min(0)),
  }),
  worlds: z.record(z.string(), WorldRecordSchema),
  settings: z.object({
    soundVolume: z.number().min(0).max(1),
    musicVolume: z.number().min(0).max(1),
  }),
  statistics: z.object({
    totalPlayTime: z.number().int().min(0),
    totalBricksDestroyed: z.number().int().min(0),
    totalBossesDefeated: z.number().int().min(0),
  }),
});

export type SaveDataValidated = z.infer<typeof SaveSchema>;


