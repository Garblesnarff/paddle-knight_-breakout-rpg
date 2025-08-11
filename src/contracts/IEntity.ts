import { Rectangle, Vector2D } from '@/src/types';

/**
 * Base Entity Contract
 * All game entities must implement this interface.
 */
export interface IEntity {
  id: string;
  type: string;
  position: Vector2D;
  bounds: Rectangle;

  update(deltaTimeMs: number): void;
  render(context: CanvasRenderingContext2D): void;
  onCollision(other: IEntity): void;
  destroy(): void;
}


