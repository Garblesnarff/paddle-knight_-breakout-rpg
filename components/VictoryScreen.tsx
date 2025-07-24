import React from 'react';
import { IconStar } from './Icons';

interface VictoryScreenProps {
    stars: number;
    score: number;
    goldEarned: number;
    onContinue: () => void;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({ 
    stars, 
    score, 
    goldEarned, 
    onContinue 
}) => {
    return (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-800 border-4 border-yellow-500 rounded-xl p-8 text-center">
                <h1 className="text-5xl font-medieval text-yellow-300 mb-6">
                    Victory!
                </h1>
                
                {/* Stars */}
                <div className="flex justify-center gap-4 mb-8">
                    {[1, 2, 3].map(i => (
                        <IconStar
                            key={i}
                            className={`w-24 h-24 transition-all duration-500 ${
                                i <= stars 
                                    ? 'text-yellow-400 animate-pulse' 
                                    : 'text-gray-600'
                            }`}
                            fill={i <= stars ? 'currentColor' : 'none'}
                            style={{
                                animationDelay: `${i * 0.3}s`
                            }}
                        />
                    ))}
                </div>

                {/* Rewards */}
                <div className="space-y-4 mb-8">
                    <div className="text-2xl">
                        <span className="text-gray-400">Score: </span>
                        <span className="text-white font-bold">{score}</span>
                    </div>
                    <div className="text-2xl">
                        <span className="text-gray-400">Gold Earned: </span>
                        <span className="text-yellow-400 font-bold">+{goldEarned}</span>
                    </div>
                    {stars === 3 && (
                        <div className="text-xl text-green-400 font-bold">
                            Perfect Clear! +50 Bonus Gold!
                        </div>
                    )}
                </div>

                <button
                    onClick={onContinue}
                    className="px-8 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-white font-bold text-xl"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};