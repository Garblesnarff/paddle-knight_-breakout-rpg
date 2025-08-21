import React from 'react';
import { GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_Y } from '@/constants';

interface PaddleRendererProps {
  paddleX: number;
  paddleWidth: number;
  cosmetics: {
    paddleEffect: string | undefined;
  };
}

export const PaddleRenderer: React.FC<PaddleRendererProps> = ({
  paddleX,
  paddleWidth,
  cosmetics
}) => {
  const paddleStyle: React.CSSProperties = {
    left: paddleX,
    top: PADDLE_Y,
    width: paddleWidth,
    height: PADDLE_HEIGHT,
    position: 'absolute',
    borderRadius: '6px',
    transition: 'all 0.1s ease-out',
  };

  // Enhanced paddle styling
  let gradient = 'linear-gradient(135deg, #3b82f6, #1d4ed8, #1e40af)';
  let glowEffect = '';
  let borderColor = '#93c5fd';

  // Apply cosmetic effects
  if (cosmetics.paddleEffect) {
    if (cosmetics.paddleEffect === 'magical') {
      gradient = 'linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9)';
      glowEffect = '0 0 15px 5px rgba(139, 92, 246, 0.6)';
      borderColor = '#c4b5fd';
    } else if (cosmetics.paddleEffect === 'fiery') {
      gradient = 'linear-gradient(135deg, #ef4444, #dc2626, #b91c1c)';
      glowEffect = '0 0 15px 5px rgba(239, 68, 68, 0.6)';
      borderColor = '#fca5a5';
    } else if (cosmetics.paddleEffect === 'icy') {
      gradient = 'linear-gradient(135deg, #67e8f9, #22d3ee, #0891b2)';
      glowEffect = '0 0 15px 5px rgba(103, 232, 249, 0.6)';
      borderColor = '#a5f3fc';
    }
  }

  return (
    <div
      className="paddle-sprite"
      style={{
        ...paddleStyle,
        background: gradient,
        boxShadow: glowEffect,
        border: `3px solid ${borderColor}`,
      }}
    >
      {/* Inner highlight for depth */}
      <div
        className="paddle-highlight"
        style={{
          position: 'absolute',
          top: '2px',
          left: '2px',
          width: '20%',
          height: '60%',
          borderRadius: '4px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4), transparent)',
        }}
      />

      {/* Side edge highlights */}
      <div
        className="paddle-edge-left"
        style={{
          position: 'absolute',
          top: '2px',
          left: '2px',
          width: '3px',
          height: 'calc(100% - 4px)',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
          borderRadius: '2px',
        }}
      />
      <div
        className="paddle-edge-right"
        style={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          width: '3px',
          height: 'calc(100% - 4px)',
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
          borderRadius: '2px',
        }}
      />

      {/* Magical runes for magical effect */}
      {cosmetics.paddleEffect === 'magical' && (
        <>
          <div
            className="paddle-rune-1"
            style={{
              position: 'absolute',
              top: '20%',
              left: '30%',
              width: '8px',
              height: '8px',
              background: 'radial-gradient(circle, #f0f9ff, #7c3aed)',
              borderRadius: '50%',
              boxShadow: '0 0 4px rgba(127, 195, 253, 0.8)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <div
            className="paddle-rune-2"
            style={{
              position: 'absolute',
              top: '20%',
              right: '30%',
              width: '8px',
              height: '8px',
              background: 'radial-gradient(circle, #f0f9ff, #7c3aed)',
              borderRadius: '50%',
              boxShadow: '0 0 4px rgba(127, 195, 253, 0.8)',
              animation: 'pulse 2s ease-in-out infinite reverse',
            }}
          />
        </>
      )}

      {/* Flame particles for fiery effect */}
      {cosmetics.paddleEffect === 'fiery' && (
        <>
          <div
            className="flame-1"
            style={{
              position: 'absolute',
              top: '-8px',
              left: '20%',
              width: '6px',
              height: '12px',
              background: 'linear-gradient(to top, #f87171, #fb923c, #fecaca)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              animation: 'flame-flicker 0.5s ease-in-out infinite alternate',
            }}
          />
          <div
            className="flame-2"
            style={{
              position: 'absolute',
              top: '-10px',
              left: '70%',
              width: '8px',
              height: '16px',
              background: 'linear-gradient(to top, #ef4444, #f97316, #fca5a5)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              animation: 'flame-flicker 0.7s ease-in-out infinite alternate reverse',
            }}
          />
        </>
      )}

      {/* Ice crystals for icy effect */}
      {cosmetics.paddleEffect === 'icy' && (
        <>
          <div
            className="ice-crystal-1"
            style={{
              position: 'absolute',
              top: '-6px',
              left: '15%',
              width: '0',
              height: '0',
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: '8px solid #cffafe',
              animation: 'ice-shimmer 2s ease-in-out infinite',
            }}
          />
          <div
            className="ice-crystal-2"
            style={{
              position: 'absolute',
              top: '-8px',
              left: '75%',
              width: '0',
              height: '0',
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '12px solid #a5f3fc',
              animation: 'ice-shimmer 2.5s ease-in-out infinite reverse',
            }}
          />
        </>
      )}
    </div>
  );
};

export default PaddleRenderer;
