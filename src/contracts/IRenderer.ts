import { IEntity } from './IEntity';

/**
 * Renderer Contract
 * Abstraction over rendering layer.
 */
export interface IRenderer {
  initialize(context: CanvasRenderingContext2D): void;
  render(entities: IEntity[], context: CanvasRenderingContext2D): void;
  destroy(): void;
}


