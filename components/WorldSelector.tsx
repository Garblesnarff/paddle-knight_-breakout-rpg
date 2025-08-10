// WorldSelector.tsx
import React from 'react';
import { WORLD_CONFIG, getWorldStages, getWorldTotalStars, getWorldEarnedStars, getWorldTheme, WorldTheme } from '../game/world-config';
import SaveManager from '../services/SaveManager';

interface WorldSelectorProps {
    onSelectWorld: (worldId: number) => void;
    onBack: () => void;
}

export const WorldSelector: React.FC<WorldSelectorProps> = ({ onSelectWorld, onBack }) => {
    const savedData = SaveManager.load();

    const renderWorldCard = (worldId: number) => {
        const worldTheme = getWorldTheme(worldId);
        if (!worldTheme) return null;

        const worldStages = getWorldStages(worldId);
        const totalStars = getWorldTotalStars(worldId);
        const earnedStars = getWorldEarnedStars(worldId, savedData.worlds);
        const completedStages = worldStages.filter(stage => 
            savedData.worlds[worldId]?.stages?.[stage.id]?.completed
        ).length;
        const isUnlocked = worldId <= savedData.player.highestWorldUnlocked;
        const completionPercentage = (completedStages / worldStages.length) * 100;
        
        // Get best stats for completed world
        const worldData = savedData.worlds[worldId];
        const bestScore = worldData ? Math.max(...Object.values(worldData.stages || {}).map(s => s?.bestScore || 0)) : 0;
        const bestTime = worldData ? Math.min(...Object.values(worldData.stages || {}).map(s => s?.bestTime || Infinity)) : Infinity;

        return (
            <div 
                key={worldId}
                className={`relative bg-gray-800 rounded-xl border-2 ${worldTheme.accentColor} world-card-shadow overflow-hidden ${
                    isUnlocked 
                        ? 'world-card cursor-pointer' 
                        : 'opacity-60 cursor-not-allowed'
                }`}
                onClick={() => isUnlocked && onSelectWorld(worldId)}
            >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${worldTheme.gradient} opacity-20`}></div>
                
                {/* Lock Overlay */}
                {!isUnlocked && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-10">
                        <div className="text-center text-white">
                            <div className="text-6xl mb-4">🔒</div>
                            <p className="text-lg font-bold">Complete Previous World</p>
                        </div>
                    </div>
                )}

                {/* Card Content */}
                <div className="relative z-5 p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <span className="text-4xl">{worldTheme.icon}</span>
                            <div>
                                <h3 className="text-2xl font-medieval font-bold text-white">{worldTheme.title}</h3>
                                <p className="text-sm text-gray-300">{worldTheme.subtitle}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="bg-gray-700 bg-opacity-80 px-3 py-1 rounded-full text-xs font-bold text-white">
                                {worldTheme.difficulty}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {worldTheme.description}
                    </p>

                    {/* Progress Section */}
                    <div className="mb-4 space-y-3">
                        {/* Completion Progress */}
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-bold text-gray-300">STAGES COMPLETED</span>
                                <span className="text-xs font-bold text-white">{completedStages}/{worldStages.length}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                <div 
                                    className={`h-full bg-gradient-to-r ${worldTheme.gradient} transition-all duration-500`}
                                    style={{ width: `${completionPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Stars Progress */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-gray-300">STARS EARNED</span>
                                <span className="text-xs font-bold text-yellow-400">{earnedStars}/{totalStars}</span>
                            </div>
                            <div className="flex space-x-1">
                                {Array.from({ length: totalStars }, (_, i) => (
                                    <span key={i} className={`text-lg ${i < earnedStars ? 'text-yellow-400' : 'text-gray-600'}`}>
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                        <h4 className="text-xs font-bold text-gray-300 mb-2">KEY FEATURES</h4>
                        <div className="flex flex-wrap gap-1">
                            {worldTheme.keyFeatures.map((feature, index) => (
                                <span key={index} className="bg-gray-700 bg-opacity-60 px-2 py-1 rounded text-xs text-gray-200">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Best Stats (if world has been attempted) */}
                    {completedStages > 0 && (
                        <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-gray-700 bg-opacity-40 p-2 rounded">
                                <div className="text-gray-400">BEST SCORE</div>
                                <div className="text-white font-bold">{bestScore.toLocaleString()}</div>
                            </div>
                            <div className="bg-gray-700 bg-opacity-40 p-2 rounded">
                                <div className="text-gray-400">BEST TIME</div>
                                <div className="text-white font-bold">
                                    {bestTime === Infinity ? '--' : `${Math.floor(bestTime / 1000)}s`}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Action Button */}
                    <button 
                        className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-200 ${
                            isUnlocked
                                ? `bg-gradient-to-r ${worldTheme.gradient} hover:opacity-90 text-white shadow-lg`
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (isUnlocked) onSelectWorld(worldId);
                        }}
                        disabled={!isUnlocked}
                    >
                        {completedStages === 0 ? 'BEGIN QUEST' : completedStages === worldStages.length ? 'REPLAY WORLD' : 'CONTINUE QUEST'}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-900 px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-medieval text-yellow-300 mb-4 drop-shadow-lg">
                    Choose Your Quest
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Embark on epic adventures across mystical realms, each presenting unique challenges and legendary rewards.
                </p>
            </div>

            {/* World Cards Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {renderWorldCard(1)}
                    {renderWorldCard(2)}
                    {renderWorldCard(3)}
                </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
                <button 
                    onClick={onBack}
                    className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg"
                >
                    ← Back to Main Menu
                </button>
            </div>
        </div>
    );
};


