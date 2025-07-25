
import React from 'react';

interface GameOverScreenProps {
  score: number;
  isVictory: boolean;
  onRestart: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, isVictory, onRestart }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
      <div className="text-center p-10 bg-slate-800 border-4 border-slate-900 rounded-xl shadow-2xl">
        <h2 className={`text-6xl font-medieval mb-4 ${isVictory ? 'text-green-400' : 'text-red-500'}`}>
          {isVictory ? 'Victory!' : 'Game Over'}
        </h2>
        <p className="text-2xl text-gray-300 mb-2">Your final score:</p>
        <p className="text-5xl font-bold text-yellow-300 mb-8">{score}</p>
        <button 
          onClick={onRestart}
          className="px-8 py-3 text-xl font-bold text-gray-900 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-transform duration-300">
          Play Again
        </button>
      </div>
    </div>
  );
};
