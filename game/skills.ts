import { SkillNode } from '../types';
import { STAGE_1_SKILLS } from './stages/stage-1/skills';
import { STAGE_2_SKILLS } from './stages/stage-2/skills';

export const SKILL_TREE_DATA: Record<string, SkillNode> = {
  ...STAGE_1_SKILLS,
  ...STAGE_2_SKILLS,
};
