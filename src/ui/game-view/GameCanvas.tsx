import React from 'react';

type GameCanvasProps = React.PropsWithChildren<{
  width?: number;
  height?: number;
}>;

export const GameCanvas: React.FC<GameCanvasProps> = ({ width = 800, height = 600, children }) => {
  return (
    <div className="relative shadow-inner bg-black/50 border-2 border-slate-900" style={{ width, height }}>
      {children}
    </div>
  );
};

export default GameCanvas;


