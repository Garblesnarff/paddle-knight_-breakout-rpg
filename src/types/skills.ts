/**
 * Skill System Types
 * Skills, skill nodes, and related buffs
 */

import { SkillType } from './enums';

export interface Skill {
  id: string;
  name: string;
  cooldown: number;
  lastUsed: number;
  duration?: number;
  activeUntil?: number;
  charges?: number;
}

export interface SkillNode {
  id: string;
  name: string;
  description: (level: number) => string;
  maxLevel: number;
  cost: (level: number) => number;
  dependencies: string[];
  type: SkillType;
  position: { row: number; col: number };
}

export interface RunicEmpowermentBuffs {
  haste: boolean;
  power: boolean;
  shield: boolean;
}
