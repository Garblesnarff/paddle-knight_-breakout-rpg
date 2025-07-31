/**
 * Collision helpers for geometric primitives used by the game engine.
 * Pure functions: no side effects. Shared across balls/beams/projectiles logic.
 */

import { Brick } from '../../types';

/**
 * Returns true if the two line segments (x1,y1)-(x2,y2) and (x3,y3)-(x4,y4) intersect.
 */
export function lineLineCollision(
  x1: number, y1: number, x2: number, y2: number,
  x3: number, y3: number, x4: number, y4: number
): boolean {
  const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (den === 0) return false;

  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
  const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

  return t > 0 && t < 1 && u > 0 && u < 1;
}

/**
 * Returns true if line segment intersects an axis-aligned rectangle (brick).
 */
export function lineRectCollision(
  x1: number, y1: number, x2: number, y2: number,
  rect: Brick
): boolean {
  const left = lineLineCollision(x1, y1, x2, y2, rect.x, rect.y, rect.x, rect.y + rect.height);
  const right = lineLineCollision(x1, y1, x2, y2, rect.x + rect.width, rect.y, rect.x + rect.width, rect.y + rect.height);
  const top = lineLineCollision(x1, y1, x2, y2, rect.x, rect.y, rect.x + rect.width, rect.y);
  const bottom = lineLineCollision(x1, y1, x2, y2, rect.x, rect.y + rect.height, rect.x + rect.width, rect.y + rect.height);

  return left || right || top || bottom;
}
