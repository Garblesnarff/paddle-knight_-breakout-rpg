import { Ball, Brick } from '../../types/game.types';

/**
 * @class CollisionSystem
 * @description Handles collision detection and resolution between game objects.
 */
export class CollisionSystem {
  /**
   * Detects collision between a ball and a brick.
   * @param {Ball} ball - The ball object.
   * @param {Brick} brick - The brick object.
   * @returns {boolean} - True if a collision is detected, false otherwise.
   */
  static detectBallBrickCollision(ball: Ball, brick: Brick): boolean {
    const ballLeft = ball.x;
    const ballRight = ball.x + ball.size * 2;
    const ballTop = ball.y;
    const ballBottom = ball.y + ball.size * 2;

    const brickLeft = brick.x;
    const brickRight = brick.x + brick.width;
    const brickTop = brick.y;
    const brickBottom = brick.y + brick.height;

    return (
      ballRight >= brickLeft &&
      ballLeft <= brickRight &&
      ballBottom >= brickTop &&
      ballTop <= brickBottom
    );
  }

  /**
   * Resolves the collision between a ball and a brick.
   * @param {Ball} ball - The ball object.
   * @param {Brick} brick - The brick object.
   * @returns {{ ball: Ball; brick: Brick }} - The updated ball and brick objects.
   */
  static resolveBallBrickCollision(ball: Ball, brick: Brick): { ball: Ball; brick: Brick } {
    const updatedBall = { ...ball };
    const updatedBrick = { ...brick };

    const overlapX =
      Math.min(ball.x + ball.size * 2, brick.x + brick.width) - Math.max(ball.x, brick.x);
    const overlapY =
      Math.min(ball.y + ball.size * 2, brick.y + brick.height) - Math.max(ball.y, brick.y);

    if (overlapX > overlapY) {
      updatedBall.vy = -updatedBall.vy;
      updatedBall.y += updatedBall.vy > 0 ? overlapY : -overlapY;
    } else {
      updatedBall.vx = -updatedBall.vx;
      updatedBall.x += updatedBall.vx > 0 ? overlapX : -overlapX;
    }

    updatedBrick.hp -= updatedBall.damage;

    return { ball: updatedBall, brick: updatedBrick };
  }
}
