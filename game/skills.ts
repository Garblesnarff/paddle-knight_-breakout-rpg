import { SkillNode } from '../types';
import { WORLD_1_SKILLS } from './worlds/world-1/skills';
import { WORLD_2_SKILLS } from './worlds/world-2/skills';

export const SKILL_TREE_DATA: Record<string, SkillNode> = {
  ...WORLD_1_SKILLS,
  ...WORLD_2_SKILLS,
};
