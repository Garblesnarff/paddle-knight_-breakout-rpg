import { Brick, Projectile, Whirlpool, LaserBeam } from '../../../types';
import { GAME_WIDTH, BRICK_WIDTH, BRICK_HEIGHT } from '../../../constants';
import { BrickType } from '../../../types';

export interface StepBossKrakenArgs {
  bricks: Brick[];
  now: number;
  timeFactor: number;
}

export interface StepBossKrakenResult {
  bricks: Brick[];
  projectiles: Projectile[];
  whirlpools: Whirlpool[];
  laserBeams: LaserBeam[];
}

export function stepBossKraken(args: StepBossKrakenArgs): StepBossKrakenResult {
  const { bricks, now, timeFactor } = args;

  let workingBricks = bricks.map((b) => ({ ...b }));
  let newProjectiles: Projectile[] = [];
  let newWhirlpools: Whirlpool[] = [];
  let newLaserBeams: LaserBeam[] = [];

  const krakenBoss = workingBricks.find(b => b.type === BrickType.KrakenBoss);

  if (krakenBoss) {
    // Phase 1: Tentacles
    if (krakenBoss.phase === 1) {
      const tentacles = workingBricks.filter(b => b.type === BrickType.KrakenBoss && b.isTentacle);

      if (tentacles.length === 0) {
        // Create tentacles
        const tentacleProps = {
          hp: 50,
          maxHp: 50,
          width: 40,
          height: 100,
          isTentacle: true,
        };
        workingBricks.push({ ...krakenBoss, ...tentacleProps, id: now + 1, x: 100, y: 100, type: BrickType.KrakenBoss });
        workingBricks.push({ ...krakenBoss, ...tentacleProps, id: now + 2, x: GAME_WIDTH - 140, y: 100, type: BrickType.KrakenBoss });
      }

      // Tentacle attack logic
      for (const tentacle of tentacles) {
        if (tentacle.lastAttackTime && now > tentacle.lastAttackTime + 5000) {
          newWhirlpools.push({
            id: now + Math.random(),
            x: tentacle.x + tentacle.width / 2,
            y: tentacle.y + tentacle.height / 2,
            radius: 50,
            duration: 3000,
            createdAt: now,
          });
          tentacle.lastAttackTime = now;
        }
      }

      // If tentacles are destroyed, move to phase 2
      if (tentacles.every(t => t.hp <= 0)) {
        krakenBoss.phase = 2;
      }
    } else if (krakenBoss.phase === 2) {
      // Phase 2: Main boss attacks
      // Water jet attack
      if (krakenBoss.lastAttackTime && now > krakenBoss.lastAttackTime + 3000) {
        newProjectiles.push({ id: now + 1, x: krakenBoss.x + krakenBoss.width / 2, y: krakenBoss.y + krakenBoss.height, vy: 5, size: 20 });
        krakenBoss.lastAttackTime = now;
      }

      // Laser beam attack
      if (krakenBoss.lastMissileTime && now > krakenBoss.lastMissileTime + 8000) {
        newLaserBeams.push({
          id: now + Math.random(),
          x1: krakenBoss.x,
          y1: krakenBoss.y + krakenBoss.height / 2,
          x2: krakenBoss.x + krakenBoss.width,
          y2: krakenBoss.y + krakenBoss.height / 2,
          duration: 1000,
          warningDuration: 1000,
          createdAt: now,
        });
        krakenBoss.lastMissileTime = now;
      }
    }
  }

  return { bricks: workingBricks, projectiles: newProjectiles, whirlpools: newWhirlpools, laserBeams: newLaserBeams };
}
