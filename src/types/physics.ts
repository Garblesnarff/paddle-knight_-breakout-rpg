/**
 * Physics and Geometry Types
 * Used for collision detection and entity positioning
 */

export interface Vector2D {
  x: number;
  y: number;
}

export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PhysicsEntity {
  id: string;
  position: Vector2D;
  bounds: Rectangle;
  velocity?: Vector2D;
  mass?: number;
}

export interface Collision {
  entityAId: string;
  entityBId: string;
  contactPoint?: Vector2D;
  normal?: Vector2D;
}

export interface PhysicsUpdate {
  movedEntities?: Array<{ id: string; position: Vector2D; velocity?: Vector2D }>;
  collisions?: Collision[];
}
