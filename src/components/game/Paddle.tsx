import React from 'react';
import { PADDLE_Y, PADDLE_HEIGHT } from '../../constants/game.constants';

interface PaddleProps {
  paddleX: number;
  paddleWidth: number;
}

export const Paddle: React.FC<PaddleProps> = ({ paddleX, paddleWidth }) => {
  const paddleStyle: React.CSSProperties = {
    left: paddleX,
    top: PADDLE_Y,
    width: paddleWidth,
    height: PADDLE_HEIGHT,
  };

  return (
    <div
      className="absolute bg-gradient-to-b from-slate-400 to-slate-600 rounded-sm shadow-lg border-t-2 border-slate-300 border-b-2 border-slate-700"
      style={paddleStyle}
    ></div>
  );
};
