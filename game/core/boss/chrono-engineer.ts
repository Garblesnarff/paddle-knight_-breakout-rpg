import { Brick, Ball, BrickType } from '../../../types';
import { GAME_WIDTH, CHRONO_ENGINEER_PHASE2_THRESHOLD, CHRONO_ENGINEER_PHASE3_THRESHOLD, CHRONO_ENGINEER_TIME_DISTORT_INTERVAL, CHRONO_ENGINEER_SPEED_ZONE_INTERVAL } from '../../../constants';

export interface StepChronoEngineerArgs {
  bricks: Brick[];
  balls: Ball[];
  now: number;
  paddleX: number;
  paddleWidth: number;
}

export interface StepChronoEngineerResult {
  bricks: Brick[];
  balls: Ball[];
}

export function stepChronoEngineer(args: StepChronoEngineerArgs): StepChronoEngineerResult {
  const { bricks, balls, now } = args;
  let workingBricks = bricks.map(b => ({ ...b }));
  let updatedBalls = balls.map(b => ({ ...b }));

  const bosses = workingBricks.filter(b => b.type === BrickType.ChronoEngineerBoss);
  if (bosses.length === 0) {
    return { bricks: workingBricks, balls: updatedBalls };
  }

  for (const boss of bosses) {
    if (boss.hp <= 0) continue;
    const hpPct = boss.hp / boss.maxHp;
    let phase = boss.phase || 1;
    if (hpPct <= CHRONO_ENGINEER_PHASE3_THRESHOLD) phase = 3; else if (hpPct <= CHRONO_ENGINEER_PHASE2_THRESHOLD) phase = 2; else phase = 1;
    boss.phase = phase;

    // Pendulum swing baseline
    const amplitude = 120;
    const speed = 0.0012; // ms-based
    boss.x = GAME_WIDTH / 2 - boss.width / 2 + Math.sin(now * speed) * amplitude;

    // Speed zones (Phase 2+)
    if (phase >= 2) {
      const t = Math.floor(now / CHRONO_ENGINEER_SPEED_ZONE_INTERVAL) % 2;
      const speedMultiplier = t === 0 ? 2 : 0.5;
      updatedBalls = updatedBalls.map(ball => ({ ...ball, vx: ball.vx * speedMultiplier, vy: ball.vy * speedMultiplier }));
    }

    // Time distortion reverse (Phase 3)
    if (phase >= 3) {
      if (!('lastTimeDistort' in (boss as any))) (boss as any).lastTimeDistort = 0;
      if (now - (boss as any).lastTimeDistort > CHRONO_ENGINEER_TIME_DISTORT_INTERVAL) {
        (boss as any).lastTimeDistort = now;
        updatedBalls = updatedBalls.map(ball => ({ ...ball, vx: -ball.vx, vy: -ball.vy }));
      }
    }

    // Final Countdown heal at 10% HP
    if (hpPct <= 0.1) {
      const anyBoss: any = boss as any;
      if (!anyBoss.lastFinalHealTime) anyBoss.lastFinalHealTime = now;
      const dt = Math.max(0, now - anyBoss.lastFinalHealTime) / 1000; // seconds
      const healPerSec = 0.02 * boss.maxHp;
      const healAmount = healPerSec * dt;
      boss.hp = Math.min(boss.maxHp, boss.hp + healAmount);
      anyBoss.lastFinalHealTime = now;
    }
  }

  return { bricks: workingBricks, balls: updatedBalls };
}


