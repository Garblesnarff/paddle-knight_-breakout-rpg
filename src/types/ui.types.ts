export enum SkillType {
  Passive,
  Active,
  Triggered,
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
