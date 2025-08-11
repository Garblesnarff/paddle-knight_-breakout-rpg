import { Collision, PhysicsEntity, PhysicsUpdate, Vector2D } from '@/src/types';

/**
 * Physics Engine Contract
 * Handles all physics calculations for the game.
 */
export interface IPhysicsEngine {
  update(deltaTimeMs: number, entities: PhysicsEntity[]): PhysicsUpdate;
  detectCollisions(entities: PhysicsEntity[]): Collision[];
  applyForces(entity: PhysicsEntity, forces: Vector2D[]): void;
  resolveCollision(collision: Collision): void;
}


