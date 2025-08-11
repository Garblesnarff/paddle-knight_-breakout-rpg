import React, { useEffect, useRef } from 'react';
import { GameEngine } from '@/src/core/GameEngine';

const engine = new GameEngine();

const GameView: React.FC = () => {
  const lastTimeRef = useRef<number>(performance.now());

  useEffect(() => {
    let rafId = 0;
    const tick = (now: number) => {
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;
      engine.update(dt);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center text-white">
      Game running (migrating to new engine...)
    </div>
  );
};

export default GameView;


