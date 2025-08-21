import React from 'react';
import { Brick } from '@/types';
import { BRICK_PROPERTIES, BOSS_ENRAGE_THRESHOLD } from '@/constants';

interface BrickRendererProps {
  brick: Brick;
}

export const BrickRenderer: React.FC<BrickRendererProps> = ({ brick }) => {
  const brickProps = BRICK_PROPERTIES[brick.type];
  const hpPercentage = (brick.hp / brick.maxHp) * 100;
  const isEnraged = brick.type === 6 && (brick.hp / brick.maxHp) <= BOSS_ENRAGE_THRESHOLD;
  const isArchmageBoss = brick.type === 5 && (brick.phase === 2 || brick.phase === 3);

  // Enhanced brick styling
  const getBrickStyles = () => {
    let baseColor = isEnraged ? '#dc2626' : brickProps.color;
    let glowEffect = '';
    let borderColor = '';
    let background = '';

    // Special brick types
    switch (brick.type) {
      case 5: // Chaos
        background = 'linear-gradient(135deg, #7c3aed, #ec4899, #dc2626, #ea580c)';
        glowEffect = '0 0 10px rgba(124, 58, 237, 0.5)';
        break;
      case 7: // Mirror
        background = 'linear-gradient(135deg, #e2e8f0, #cbd5e1, #94a3b8)';
        glowEffect = '0 0 15px rgba(226, 232, 240, 0.6)';
        break;
      case 8: // Rune
        background = 'linear-gradient(135deg, #7c3aed, #8b5cf6, #a855f7)';
        glowEffect = '0 0 12px rgba(124, 58, 237, 0.4)';
        break;
      default:
        background = baseColor;
    }

    // Boss enrage effect
    if (isEnraged || isArchmageBoss) {
      glowEffect = '0 0 20px 8px #dc2626';
      borderColor = '#7f1d1d';
    }

    // Shield effect
    if (brick.shieldHp && brick.shieldHp > 0) {
      glowEffect = (glowEffect ? glowEffect + ', ' : '') + '0 0 12px 5px #67e8f9';
      borderColor = '#0891b2';
    }

    // Type-specific effects
    if (brick.type === 1) { // Apprentice
      glowEffect = (glowEffect ? glowEffect + ', ' : '') + '0 0 8px 2px #0891b2';
    } else if (brick.type === 2) { // Ice
      glowEffect = (glowEffect ? glowEffect + ', ' : '') + '0 0 10px 3px #67e8f9';
    } else if (brick.type === 3) { // Lightning
      glowEffect = (glowEffect ? glowEffect + ', ' : '') + '0 0 12px 3px #eab308';
    }

    return {
      background,
      glowEffect,
      borderColor,
    };
  };

  const { background, glowEffect, borderColor } = getBrickStyles();

  const brickStyle: React.CSSProperties = {
    left: brick.x,
    top: brick.y,
    width: brick.width,
    height: brick.height,
    position: 'absolute',
    borderRadius: '4px',
    transition: 'all 0.2s ease-out',
    background,
    boxShadow: glowEffect,
    border: borderColor ? `2px solid ${borderColor}` : '2px solid rgba(0,0,0,0.3)',
  };

  // Clone effect
  if (brick.isClone) {
    brickStyle.opacity = 0.6;
    brickStyle.filter = 'saturate(0.5)';
  }

  // Enrage animation
  if (isEnraged || isArchmageBoss) {
    brickStyle.animation = 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite';
  }

  return (
    <div
      className="brick-sprite"
      style={brickStyle}
    >
      {/* Rune symbol for rune bricks */}
      {brick.type === 8 && (
        <div
          className="rune-symbol"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px',
            color: '#f0f9ff',
            fontWeight: 'bold',
            textShadow: '0 0 4px #7c3aed',
          }}
        >
          ❖
        </div>
      )}

      {/* HP indicator for multi-HP bricks */}
      {brick.maxHp > 1 && !brick.isClone && (
        <div
          className="hp-bar"
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: '0',
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: '2px',
          }}
        >
          <div
            className="hp-fill"
            style={{
              width: `${hpPercentage}%`,
              height: '100%',
              backgroundColor: hpPercentage > 50 ? '#10b981' : hpPercentage > 25 ? '#f59e0b' : '#ef4444',
              borderRadius: '2px',
              transition: 'width 0.3s ease-out',
            }}
          />
        </div>
      )}

      {/* Shield indicator */}
      {brick.shieldHp && brick.shieldHp > 0 && (
        <div
          className="shield-indicator"
          style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            width: 'calc(100% + 4px)',
            height: 'calc(100% + 4px)',
            borderRadius: '6px',
            background: 'linear-gradient(45deg, transparent, rgba(103, 232, 249, 0.3), transparent)',
            animation: 'shield-flicker 2s ease-in-out infinite',
          }}
        />
      )}

      {/* Damage effect overlay */}
      {brick.hp < brick.maxHp && (
        <div
          className="damage-overlay"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
            opacity: 0.3,
            borderRadius: '4px',
          }}
        />
      )}

      {/* Crack effects for low HP */}
      {hpPercentage < 30 && hpPercentage > 0 && (
        <div
          className="cracks"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(0,0,0,0.3) 41%, rgba(0,0,0,0.3) 59%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(0,0,0,0.3) 41%, rgba(0,0,0,0.3) 59%, transparent 60%)
            `,
            borderRadius: '4px',
          }}
        />
      )}
    </div>
  );
};

export default BrickRenderer;
