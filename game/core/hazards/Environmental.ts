/**
 * Environmental hazards tick
 * Fire rain, ice spike fields, lightning strikes, arcane overload rings, final gambit beams.
 * Computes damage to player and cleans up expired hazards.
 */
import {
  FireRainZone,
  IceSpikeField,
  LightningStrike,
  ArcaneOverloadRing,
  FinalGambitBeam,
} from '../../../types';
import {
  PADDLE_HEIGHT,
  PADDLE_Y,
  FIRE_RAIN_DAMAGE,
  FIRE_RAIN_RADIUS,
  ICE_SPIKE_DURATION,
  LIGHTNING_STRIKE_WARNING_DURATION,
  LIGHTNING_STRIKE_STRIKE_DURATION,
  LIGHTNING_STRIKE_DAMAGE,
  ARCANE_OVERLOAD_RING_DURATION,
  ARCANE_OVERLOAD_RING_DAMAGE,
  FINAL_GAMBIT_BEAM_WARNING_DURATION,
  FINAL_GAMBIT_BEAM_STRIKE_DURATION,
  FINAL_GAMBIT_BEAM_DAMAGE,
  // PADDLE_WIDTH is not needed directly; we get paddleWidth from args
} from '../../../constants';

export interface StepEnvironmentalHazardsArgs {
  fireRainZones: FireRainZone[];
  iceSpikeFields: IceSpikeField[];
  lightningStrikes: LightningStrike[];
  arcaneOverloadRings: ArcaneOverloadRing[];
  finalGambitBeams: FinalGambitBeam[];
  now: number;
  paddleX: number;
  paddleWidth: number;
}

export interface StepEnvironmentalHazardsResult {
  fireRainZones: FireRainZone[];
  iceSpikeFields: IceSpikeField[];
  lightningStrikes: LightningStrike[];
  arcaneOverloadRings: ArcaneOverloadRing[];
  finalGambitBeams: FinalGambitBeam[];
  damageToPlayerDelta: number;
}

export function stepEnvironmentalHazards(args: StepEnvironmentalHazardsArgs): StepEnvironmentalHazardsResult {
  const {
    fireRainZones,
    iceSpikeFields,
    lightningStrikes,
    arcaneOverloadRings,
    finalGambitBeams,
    now,
    paddleX,
    paddleWidth,
  } = args;

  let damageToPlayerDelta = 0;

  const newFireRainZones = fireRainZones.filter((zone) => {
    if (now > zone.createdAt + zone.duration) return false;
    const dist = Math.hypot(paddleX + paddleWidth / 2 - zone.x, PADDLE_Y + PADDLE_HEIGHT / 2 - zone.y);
    if (dist < FIRE_RAIN_RADIUS + Math.max(paddleWidth / 2, PADDLE_HEIGHT / 2)) {
      damageToPlayerDelta += FIRE_RAIN_DAMAGE / 60;
    }
    return true;
  });

  const newIceSpikeFields = iceSpikeFields.filter((field) => now < field.createdAt + ICE_SPIKE_DURATION);

  const newLightningStrikes = lightningStrikes.filter((strike) => {
    const strikeStartTime = strike.createdAt + LIGHTNING_STRIKE_WARNING_DURATION;
    const isStrikeOver = now > strikeStartTime + LIGHTNING_STRIKE_STRIKE_DURATION;
    if (isStrikeOver) return false;

    const isStriking = now > strikeStartTime;
    if (isStriking) {
      if (paddleX < strike.x + strike.width && paddleX + paddleWidth > strike.x) {
        damageToPlayerDelta += LIGHTNING_STRIKE_DAMAGE;
        return false; // hits once and disappears
      }
    }
    return true;
  });

  const newArcaneOverloadRings = arcaneOverloadRings.filter((ring) => {
    if (now > ring.createdAt + ARCANE_OVERLOAD_RING_DURATION) return false;
    const progress = (now - ring.createdAt) / ARCANE_OVERLOAD_RING_DURATION;
    const currentRadius = (ring as any).maxRadius * progress;
    const distToPaddleCenter = Math.hypot(paddleX + paddleWidth / 2 - ring.x, PADDLE_Y + PADDLE_HEIGHT / 2 - ring.y);
    if (Math.abs(distToPaddleCenter - currentRadius) < PADDLE_HEIGHT + 2) {
      damageToPlayerDelta += ARCANE_OVERLOAD_RING_DAMAGE / 60;
    }
    return true;
  });

  const newFinalGambitBeams = finalGambitBeams.filter((beam) => {
    const strikeStartTime = beam.createdAt + FINAL_GAMBIT_BEAM_WARNING_DURATION;
    const isBeamOver = now > strikeStartTime + FINAL_GAMBIT_BEAM_STRIKE_DURATION;
    if (isBeamOver) return false;

    const isStriking = now > strikeStartTime;
    if (isStriking) {
      if (paddleX < beam.x + beam.width && paddleX + paddleWidth > beam.x) {
        damageToPlayerDelta += FINAL_GAMBIT_BEAM_DAMAGE / 60;
      }
    }
    return true;
  });

  return {
    fireRainZones: newFireRainZones,
    iceSpikeFields: newIceSpikeFields,
    lightningStrikes: newLightningStrikes,
    arcaneOverloadRings: newArcaneOverloadRings,
    finalGambitBeams: newFinalGambitBeams,
    damageToPlayerDelta,
  };
}
