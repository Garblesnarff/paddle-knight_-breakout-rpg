import React from 'react';
import { Brick as BrickType, BrickType as BrickEnum } from '../../types/game.types';
import { BRICK_PROPERTIES, BOSS_ENRAGE_THRESHOLD } from '../../constants/game.constants';

interface BrickProps {
  brick: BrickType;
}

export const Brick: React.FC<BrickProps> = ({ brick }) => {
  const brickProps = BRICK_PROPERTIES[brick.type];
  const hpPercentage = (brick.hp / brick.maxHp) * 100;
  let isEnraged = brick.type === BrickEnum.Boss && hpPercentage <= BOSS_ENRAGE_THRESHOLD;
  if (brick.type === BrickEnum.ArchmageBoss && (brick.phase === 2 || brick.phase === 3)) {
    isEnraged = true;
  }

  let brickColor = isEnraged ? 'bg-red-600' : brickProps.color;

  if (brick.type === BrickEnum.Chaos) {
    brickColor = 'bg-gradient-to-br from-purple-600 via-pink-600 to-red-700';
  } else if (brick.type === BrickEnum.Mirror) {
    brickColor = 'bg-gradient-to-br from-slate-100 to-slate-400';
  } else if (brick.type === BrickEnum.Rune) {
    brickColor = 'bg-gradient-to-br from-purple-600 to-indigo-800';
  }

  const brickClasses = `absolute rounded-md shadow-inner shadow-black/40 ${brickColor} border-t-2 border-l-2 border-gray-500/30 border-b-2 border-r-2 border-black/30`;
  const brickStyle: React.CSSProperties = {
    left: brick.x,
    top: brick.y,
    width: brick.width,
    height: brick.height,
    transition: 'opacity 0.3s',
  };

  if (brick.isClone) {
    brickStyle.opacity = 0.6;
    brickStyle.filter = 'saturate(0.5)';
  }

  // Shield visual takes precedence
  if (brick.shieldHp && brick.shieldHp > 0) {
    brickStyle.boxShadow = '0 0 12px 5px #67e8f9'; // Bright cyan glow
    brickStyle.border = '1px solid #cffafe';
  } else if (brick.type === BrickEnum.Apprentice) {
    Object.assign(brickStyle, { boxShadow: '0 0 8px 2px #38bdf8' });
  } else if (brick.type === BrickEnum.Ice) {
    Object.assign(brickStyle, { boxShadow: '0 0 10px 3px #67e8f9' });
  } else if (brick.type === BrickEnum.Lightning) {
    Object.assign(brickStyle, { boxShadow: '0 0 12px 3px #facc15' });
  } else if (brick.type === BrickEnum.Mirror) {
    Object.assign(brickStyle, { boxShadow: '0 0 15px 4px #e2e8f0' });
  }

  if (isEnraged) {
    brickStyle.animation = 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite';
    brickStyle.boxShadow = '0 0 20px 8px #a855f7';
  }

  return (
    <div style={brickStyle} className={brickClasses}>
      {brick.type === BrickEnum.Rune && (
        <span className="text-xl text-yellow-300 font-medieval absolute inset-0 flex items-center justify-center select-none opacity-80">
          ❖
        </span>
      )}
      {brick.maxHp > 1 && !brick.isClone && (
        <div className="absolute -bottom-1 w-full h-1 bg-gray-900/50 rounded-full p-px">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: `${hpPercentage}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};
