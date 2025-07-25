import React from 'react';
import {
  Ball as BallType,
  Brick as BrickType,
  Projectile,
  Explosion,
  RunicEmpowermentBuffs,
  ArcaneOrb,
  ElementalBeam,
  HomingProjectile,
  FireRainZone,
  IceSpikeField,
  LightningStrike,
  ArcaneOverloadRing,
  FinalGambitBeam,
  Cosmetics,
  Skill,
} from '../../types/game.types';
import { GAME_WIDTH, GAME_HEIGHT, PADDLE_Y } from '../../constants/game.constants';
import { Ball } from './Ball';
import { Brick } from './Brick';
import { Paddle } from './Paddle';

interface GameBoardProps {
  balls: BallType[];
  bricks: BrickType[];
  projectiles: Projectile[];
  homingProjectiles: HomingProjectile[];
  explosions: Explosion[];
  arcaneOrbs: ArcaneOrb[];
  elementalBeams: ElementalBeam[];
  fireRainZones: FireRainZone[];
  iceSpikeFields: IceSpikeField[];
  lightningStrikes: LightningStrike[];
  arcaneOverloadRings: ArcaneOverloadRing[];
  finalGambitBeams: FinalGambitBeam[];
  paddleX: number;
  paddleWidth: number;
  cosmetics: Cosmetics;
  activeBuffs: RunicEmpowermentBuffs;
  skills: Record<string, Skill>;
  isBallLaunched: boolean;
  gameStatus: string;
  levelUpMessage: string | null;
  mousePos: { x: number; y: number };
}

export const GameBoard: React.FC<GameBoardProps> = ({
  balls,
  bricks,
  projectiles,
  homingProjectiles,
  explosions,
  arcaneOrbs,
  elementalBeams,
  fireRainZones,
  iceSpikeFields,
  lightningStrikes,
  arcaneOverloadRings,
  finalGambitBeams,
  paddleX,
  paddleWidth,
  cosmetics,
  activeBuffs,
  skills,
  isBallLaunched,
  gameStatus,
  levelUpMessage,
  mousePos,
}) => {
  return (
    <div
      className="relative shadow-inner cursor-pointer bg-black/50 border-2 border-slate-900"
      style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
    >
      {fireRainZones.map((zone) => {
        const progress = (Date.now() - zone.createdAt) / zone.duration;
        return (
          <div
            key={zone.id}
            className="absolute rounded-full bg-red-600/50 border-2 border-red-400 animate-pulse"
            style={{
              left: zone.x - zone.radius,
              top: zone.y - zone.radius,
              width: zone.radius * 2,
              height: zone.radius * 2,
              opacity: 0.8 - progress * 0.5,
              zIndex: 5,
            }}
          />
        );
      })}
      {iceSpikeFields.map((field) => {
        const progress = (Date.now() - field.createdAt) / field.duration;
        return (
          <div
            key={field.id}
            className="absolute rounded-lg bg-cyan-500/30 backdrop-blur-sm border-2 border-cyan-300"
            style={{
              left: field.x,
              top: field.y,
              width: field.width,
              height: field.height,
              opacity: 0.6 - progress * 0.4,
              boxShadow: 'inset 0 0 15px rgba(207, 250, 254, 0.5)',
              zIndex: 5,
            }}
          >
            <div
              className="absolute w-full h-full bg-no-repeat opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 20'%3e%3cpath d='M5 0 L0 20 L10 20 Z' fill='rgba(255,255,255,0.2)'/%3e%3c/svg%3e")`,
                backgroundSize: '20px 20px',
              }}
            ></div>
          </div>
        );
      })}
      {lightningStrikes.map((strike) => {
        const now = Date.now();
        const warningProgress = (now - strike.createdAt) / strike.warningDuration;
        const isWarning = warningProgress < 1;
        const strikeProgress = (now - (strike.createdAt + strike.warningDuration)) / strike.strikeDuration;
        const isStriking = !isWarning && strikeProgress < 1;

        if (isWarning) {
          return (
            <div
              key={strike.id}
              className="absolute border-4 border-dashed border-yellow-400/80 rounded-lg animate-pulse"
              style={{
                left: strike.x,
                top: strike.y,
                width: strike.width,
                height: strike.height,
                zIndex: 5,
              }}
            />
          );
        }
        if (isStriking) {
          return (
            <div
              key={strike.id}
              className="absolute bg-yellow-300 rounded-lg"
              style={{
                left: strike.x,
                top: strike.y,
                width: strike.width,
                height: strike.height,
                boxShadow: '0 0 30px 15px #fef08a',
                opacity: 1 - strikeProgress,
                zIndex: 5,
              }}
            />
          );
        }
        return null;
      })}
      {arcaneOverloadRings.map((ring) => {
        const progress = (Date.now() - ring.createdAt) / ring.duration;
        const currentRadius = ring.maxRadius * progress;
        return (
          <div
            key={ring.id}
            className="absolute rounded-full border-2 border-purple-400"
            style={{
              left: ring.x - currentRadius,
              top: ring.y - currentRadius,
              width: currentRadius * 2,
              height: currentRadius * 2,
              opacity: 1 - progress,
              zIndex: 5,
            }}
          />
        );
      })}
      {finalGambitBeams.map((beam) => {
        const now = Date.now();
        const warningProgress = (now - beam.createdAt) / beam.warningDuration;
        const isWarning = warningProgress < 1;
        const strikeProgress = (now - (beam.createdAt + beam.warningDuration)) / beam.strikeDuration;
        const isStriking = !isWarning && strikeProgress < 1;

        if (isWarning) {
          return (
            <div
              key={beam.id}
              className="absolute border-y-4 border-x-8 border-dashed border-red-500/80 animate-pulse"
              style={{
                left: beam.x,
                top: 0,
                width: beam.width,
                height: GAME_HEIGHT,
                zIndex: 5,
                opacity: (Math.sin(now / 100) + 1) / 2,
              }}
            />
          );
        }
        if (isStriking) {
          return (
            <div
              key={beam.id}
              className="absolute bg-gradient-to-t from-red-600 via-pink-500 to-purple-800"
              style={{
                left: beam.x,
                top: 0,
                width: beam.width,
                height: GAME_HEIGHT,
                boxShadow: '0 0 60px 30px #ef4444',
                opacity: 0.9,
                zIndex: 5,
                animation: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            />
          );
        }
        return null;
      })}

      {bricks.map((brick) => (
        <Brick key={brick.id} brick={brick} />
      ))}
      {explosions.map((exp) => {
        const progress = (Date.now() - exp.createdAt) / exp.duration;
        return (
          <div
            key={exp.id}
            className="absolute rounded-full bg-orange-500/70"
            style={{
              left: exp.x - exp.radius,
              top: exp.y - exp.radius,
              width: exp.radius * 2,
              height: exp.radius * 2,
              transform: `scale(${progress})`,
              opacity: 1 - progress,
            }}
          />
        );
      })}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {elementalBeams.map((beam) => {
          const progress = (Date.now() - beam.createdAt) / beam.duration;
          return (
            <line
              key={beam.id}
              x1={beam.x1}
              y1={beam.y1}
              x2={beam.x2}
              y2={beam.y2}
              stroke="#fbbf24"
              strokeWidth="5"
              strokeLinecap="round"
              style={{ opacity: 1 - progress, filter: 'drop-shadow(0 0 8px #f59e0b)' }}
            />
          );
        })}
      </svg>
      {arcaneOrbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-600 shadow-xl border-2 border-purple-200/50"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.radius * 2,
            height: orb.radius * 2,
            boxShadow: '0 0 15px 5px #a855f7',
            animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        ></div>
      ))}
      {homingProjectiles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-700 shadow-lg"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 8px 3px #d946ef',
          }}
        ></div>
      ))}
      {balls.map((ball) => (
        <Ball key={ball.id} ball={ball} cosmetics={cosmetics} activeBuffs={activeBuffs} />
      ))}
      {projectiles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded ${
            p.size > 8 ? 'bg-orange-500 shadow-lg shadow-orange-500/50' : 'bg-pink-500 rounded-full'
          }`}
          style={{ left: p.x, top: p.y, width: p.size, height: p.size * 2 }}
        ></div>
      ))}
      <Paddle paddleX={paddleX} paddleWidth={paddleWidth} />
      {skills.barrier.activeUntil && Date.now() < skills.barrier.activeUntil && (
        <div
          className="absolute bg-cyan-400/30 border-t-2 border-cyan-200 animate-pulse"
          style={{ left: 0, top: PADDLE_Y - 10, width: GAME_WIDTH, height: 10 }}
        ></div>
      )}

      {!isBallLaunched && gameStatus === 'Playing' && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white/80 animate-pulse pointer-events-none font-medieval tracking-wider"
          style={{ textShadow: '2px 2px 4px #000' }}
        >
          Click to Launch
        </div>
      )}

      {levelUpMessage && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-medieval text-yellow-300 animate-bounce drop-shadow-lg z-50">
          {levelUpMessage}
        </div>
      )}

      {gameStatus === 'Targeting' && (
        <div className="pointer-events-none absolute inset-0 z-20 backdrop-blur-sm bg-black/30">
          <div
            className="absolute transition-transform duration-150"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          >
            <div className="w-8 h-8 -m-4 rounded-full border-2 border-dashed border-cyan-300 animate-spin-slow"></div>
            <div className="absolute top-0 left-0 w-px h-4 -mt-4 bg-cyan-300"></div>
            <div className="absolute bottom-0 left-0 w-px h-4 -mb-4 bg-cyan-300"></div>
            <div className="absolute top-0 left-0 h-px w-4 -ml-4 bg-cyan-300"></div>
            <div className="absolute top-0 right-0 h-px w-4 -mr-4 bg-cyan-300"></div>
          </div>
          <svg className="absolute top-0 left-0 w-full h-full">
            <line
              x1={paddleX + paddleWidth / 2}
              y1={PADDLE_Y}
              x2={mousePos.x}
              y2={mousePos.y}
              stroke="rgba(103, 232, 249, 0.5)"
              strokeWidth="2"
              strokeDasharray="5, 5"
            />
          </svg>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-24 text-2xl font-bold text-white/90 font-medieval tracking-wider"
            style={{ textShadow: '2px 2px 4px #000' }}
          >
            Aim and Click to Fire Orb
          </div>
        </div>
      )}
    </div>
  );
};
