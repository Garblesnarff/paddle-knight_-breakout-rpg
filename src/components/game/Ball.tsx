import React from 'react';
import { Ball as BallType, Cosmetics, RunicEmpowermentBuffs } from '../../types/game.types';

interface BallProps {
  ball: BallType;
  cosmetics: Cosmetics;
  activeBuffs: RunicEmpowermentBuffs;
}

export const Ball: React.FC<BallProps> = ({ ball, cosmetics, activeBuffs }) => {
  const ballStyle: React.CSSProperties = {
    left: ball.x,
    top: ball.y,
    width: ball.size * 2,
    height: ball.size * 2,
  };

  if (ball.slowedUntil && Date.now() < ball.slowedUntil) {
    ballStyle.filter = 'brightness(0.7) saturate(1.5)';
    ballStyle.boxShadow = '0 0 8px 2px #67e8f9';
  }
  if (ball.isSpikeSlowedUntil && Date.now() < ball.isSpikeSlowedUntil) {
    ballStyle.filter = 'brightness(0.5) saturate(2)';
    ballStyle.boxShadow = '0 0 12px 4px #93c5fd';
  }
  if (activeBuffs.power) {
    ballStyle.boxShadow = '0 0 10px 4px #f87171';
  }
  if (activeBuffs.haste) {
    ballStyle.boxShadow = '0 0 10px 4px #38bdf8';
  }
  if (cosmetics.ballEffect === 'magical') {
    ballStyle.boxShadow = (ballStyle.boxShadow ? ballStyle.boxShadow + ', ' : '') + '0 0 15px 5px #a855f7';
  }

  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-xl border-2 border-yellow-100/50"
      style={ballStyle}
    ></div>
  );
};
