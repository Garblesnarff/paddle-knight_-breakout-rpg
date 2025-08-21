import React from 'react';
import { Ball } from '@/types';

interface BallRendererProps {
  ball: Ball;
  activeBuffs: {
    power: boolean;
    haste: boolean;
    shield: boolean;
  };
  cosmetics: {
    ballEffect: string | undefined;
  };
}

export const BallRenderer: React.FC<BallRendererProps> = ({ ball, activeBuffs, cosmetics }) => {
  const ballStyle: React.CSSProperties = {
    left: ball.x - ball.size,
    top: ball.y - ball.size,
    width: ball.size * 2,
    height: ball.size * 2,
    position: 'absolute',
    borderRadius: '50%',
    transition: 'all 0.1s ease-out',
  };

  // Enhanced visual effects
  let glowEffect = '';
  let additionalStyles = {};

  // Slow effects
  if (ball.slowedUntil && Date.now() < ball.slowedUntil) {
    additionalStyles = {
      ...additionalStyles,
      filter: 'brightness(0.7) saturate(1.5)',
      boxShadow: '0 0 8px 2px #67e8f9',
    };
  }

  if (ball.isSpikeSlowedUntil && Date.now() < ball.isSpikeSlowedUntil) {
    additionalStyles = {
      ...additionalStyles,
      filter: 'brightness(0.5) saturate(2)',
      boxShadow: '0 0 12px 4px #93c5fd',
    };
  }

  // Buff effects
  if (activeBuffs.power) {
    glowEffect = '0 0 10px 4px #f87171';
  } else if (activeBuffs.haste) {
    glowEffect = '0 0 10px 4px #38bdf8';
  }

  // Cosmetic effects
  if (cosmetics.ballEffect) {
    if (cosmetics.ballEffect === 'magical') {
      glowEffect = glowEffect ? `${glowEffect}, 0 0 15px 5px #a855f7` : '0 0 15px 5px #a855f7';
    } else if (cosmetics.ballEffect === 'fiery') {
      glowEffect = glowEffect ? `${glowEffect}, 0 0 15px 5px #ef4444` : '0 0 15px 5px #ef4444';
    } else if (cosmetics.ballEffect === 'icy') {
      glowEffect = glowEffect ? `${glowEffect}, 0 0 15px 5px #67e8f9` : '0 0 15px 5px #67e8f9';
    }
  }

  // Apply glow effects
  if (glowEffect) {
    additionalStyles = {
      ...additionalStyles,
      boxShadow: glowEffect,
    };
  }

  return (
    <div
      className="ball-sprite"
      style={{
        ...ballStyle,
        ...additionalStyles,
        background: 'radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706)',
        border: '2px solid rgba(251, 191, 36, 0.3)',
      }}
    >
      {/* Inner highlight for depth */}
      <div
        className="ball-highlight"
        style={{
          position: 'absolute',
          top: '15%',
          left: '15%',
          width: '30%',
          height: '30%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent)',
        }}
      />
      {/* Magical aura effect */}
      {cosmetics.ballEffect === 'magical' && (
        <div
          className="ball-aura"
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-20%',
            width: '140%',
            height: '140%',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.3), transparent)',
            animation: 'rotate 2s linear infinite',
          }}
        />
      )}
    </div>
  );
};

export default BallRenderer;
