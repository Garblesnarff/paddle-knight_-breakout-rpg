import { Ball } from '../../types/game.types';
import { GAME_WIDTH } from '../../constants/game.constants';

/**
 * @class PhysicsSystem
 * @description Handles all physics-related calculations, such as movement and collisions.
 */
export class PhysicsSystem {
  /**
   * Updates the positions of the balls based on their velocity and the time delta.
   * @param {Ball[]} balls - An array of ball objects.
   * @param {number} deltaTime - The time elapsed since the last frame.
   * @returns {Ball[]} - The updated array of ball objects.
   */
  static updateBallPositions(balls: Ball[], deltaTime: number): Ball[] {
    return balls.map((ball) => ({
      ...ball,
      x: ball.x + ball.vx * deltaTime,
      y: ball.y + ball.vy * deltaTime,
    }));
  }

  /**
   * Handles collisions between the balls and the walls of the game area.
   * @param {Ball} ball - The ball object to check for wall collisions.
   * @returns {Ball} - The updated ball object.
   */
  static handleWallCollisions(ball: Ball): Ball {
    const updatedBall = { ...ball };

    if (updatedBall.x <= 0 || updatedBall.x >= GAME_WIDTH - updatedBall.size * 2) {
      updatedBall.vx = -updatedBall.vx;
    }

    if (updatedBall.y <= 0) {
      updatedBall.vy = -updatedBall.vy;
    }

    return updatedBall;
  }
}
