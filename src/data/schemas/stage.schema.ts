import { z } from 'zod';

export const StageDefinitionSchema = z.object({
  id: z.number().int().min(1),
  world: z.number().int().min(1),
  name: z.string(),
  layoutKey: z.string(),
  starCriteria: z.object({
    minHpPercent: z.number().min(0).max(100),
    time: z.number().int().min(0),
  }),
});

export type StageDefinition = z.infer<typeof StageDefinitionSchema>;


