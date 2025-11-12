import { SkillNode } from '../types';
import { WORLD_1_SKILLS } from './worlds/world-1/Skills';
import { WORLD_2_SKILLS } from './worlds/world-2/Skills';
import { WORLD_4_SKILLS } from './worlds/world-4/Skills';

export const SKILL_TREE_DATA: Record<string, SkillNode> = {
  ...WORLD_1_SKILLS,
  ...WORLD_2_SKILLS,
  ...WORLD_4_SKILLS,
};
