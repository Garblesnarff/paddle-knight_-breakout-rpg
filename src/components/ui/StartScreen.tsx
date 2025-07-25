
import React, { useState, useCallback } from 'react';
import { generateBackstory } from '../services/geminiService';
import { IconBook, IconLoader } from './Icons';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [backstory, setBackstory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateBackstory = useCallback(async () => {
    setIsLoading(true);
    const story = await generateBackstory();
    setBackstory(story);
    setIsLoading(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <div className="text-center mb-8">
        <h1 className="text-7xl font-medieval text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Paddle Knight</h1>
        <p className="text-lg text-gray-400 mt-2">A Breakout RPG Adventure</p>
      </div>
      
      <button 
        onClick={onStart} 
        className="px-12 py-4 mb-6 text-2xl font-bold text-gray-900 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        Start Your Quest
      </button>

      <div className="w-full max-w-2xl mt-4">
        <button
          onClick={handleGenerateBackstory}
          disabled={isLoading}
          className="flex items-center justify-center w-full px-6 py-3 mb-4 text-lg font-semibold text-white bg-purple-700 rounded-lg shadow-md hover:bg-purple-600 disabled:bg-purple-900 disabled:cursor-not-allowed transition-colors duration-300"
        >
          {isLoading ? (
            <IconLoader className="animate-spin mr-2" />
          ) : (
            <IconBook className="mr-2" />
          )}
          {isLoading ? 'The Scribe is Thinking...' : 'Generate Your Legend'}
        </button>
        {backstory && (
          <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-inner">
            <p className="text-gray-300 italic">{backstory}</p>
          </div>
        )}
      </div>
    </div>
  );
};
