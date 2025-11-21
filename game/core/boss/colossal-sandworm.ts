import { Brick, Projectile } from '../../../types';

export interface StepBossColossalSandwormArgs {
  bricks: Brick[];
  now: number;
  timeFactor: number;
}

export interface StepBossColossalSandwormResult {
  bricks: Brick[];
  projectiles: Projectile[];
}

export function stepBossColossalSandworm(args: StepBossColossalSandwormArgs): StepBossColossalSandwormResult {
  const { bricks, now, timeFactor } = args;

  let workingBricks = bricks.map((b) => ({ ...b }));
  let newProjectiles: Projectile[] = [];

  // TODO: Implement Colossal Sandworm boss logic

  return { bricks: workingBricks, projectiles: newProjectiles };
}
