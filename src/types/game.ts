// Core shared types for engine contracts and systems

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
  // Describe changes produced by a physics step
  movedEntities?: Array<{ id: string; position: Vector2D; velocity?: Vector2D }>;
  collisions?: Collision[];
}

export interface SystemUpdate {
  // Generic system update envelope; concrete systems can extend via declaration merging
  events?: string[];
}

export interface GameState {
  // Minimal placeholder; will be expanded during migration
  timeMs: number;
  entitiesById: Record<string, unknown>;
}


