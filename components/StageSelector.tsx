// StageSelector.tsx
import React from 'react';
import { WORLD_CONFIG, getWorldStages, getWorldTheme } from '../game/world-config';
import SaveManager from '../services/SaveManager';

interface StageSelectorProps {
    worldId: number;
    onSelectStage: (stageId: number) => void;
    onBack: () => void;
}

export const StageSelector: React.FC<StageSelectorProps> = ({ worldId, onSelectStage, onBack }) => {
    const savedData = SaveManager.load();
    const worldTheme = getWorldTheme(worldId);
    const worldStages = getWorldStages(worldId);
    
    if (!worldTheme) return null;

    const renderStageCard = (stage: typeof worldStages[0], index: number) => {
        const stageData = savedData.worlds[worldId]?.stages?.[stage.id];
        const isCompleted = stageData?.completed || false;
        const stars = stageData?.stars || 0;
        const bestScore = stageData?.bestScore || 0;
        const bestTime = stageData?.bestTime || Infinity;
        
        // Stage unlocking logic: Stage 1 is always unlocked, subsequent stages require previous stage completion
        const isUnlocked = index === 0 || (worldStages[index - 1] && 
            savedData.worlds[worldId]?.stages?.[worldStages[index - 1].id]?.completed);

        const getDifficultyColor = (stageIndex: number) => {
            const colors = ['bg-green-600', 'bg-yellow-600', 'bg-orange-600', 'bg-red-600', 'bg-purple-600'];
            return colors[stageIndex] || 'bg-gray-600';
        };

        const getTimeString = (time: number) => {
            if (time === Infinity) return '--:--';
            const minutes = Math.floor(time / 60000);
            const seconds = Math.floor((time % 60000) / 1000);
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        };

        const getStageRequirement = (stageIndex: number) => {
            if (stageIndex === 0) return null;
            const prevStage = worldStages[stageIndex - 1];
            return `Complete "${prevStage.name}" to unlock`;
        };

        return (
            <div
                key={stage.id}
                className={`relative rounded-lg border-2 overflow-hidden transition-all duration-300 ${
                    isUnlocked
                        ? `${worldTheme.accentColor} bg-gray-800 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl`
                        : 'border-gray-600 bg-gray-800 opacity-50 cursor-not-allowed'
                }`}
                onClick={() => isUnlocked && onSelectStage(stage.id)}
            >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${worldTheme.gradient} opacity-10`}></div>
                
                {/* Lock Overlay */}
                {!isUnlocked && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                        <div className="text-4xl mb-2">🔒</div>
                        <p className="text-xs text-center text-gray-300 px-2">
                            {getStageRequirement(index)}
                        </p>
                    </div>
                )}

                {/* Stage Content */}
                <div className="relative z-5 p-4">
                    {/* Stage Header */}
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <div className="flex items-center space-x-2 mb-1">
                                <span className={`px-2 py-1 rounded text-xs font-bold text-white ${getDifficultyColor(index)}`}>
                                    STAGE {stage.stage}
                                </span>
                                {isCompleted && (
                                    <span className="text-green-400 text-lg">✓</span>
                                )}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{stage.name}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{stage.description}</p>
                        </div>
                    </div>

                    {/* Stars Display */}
                    <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-gray-400">STARS EARNED</span>
                            <span className="text-xs font-bold text-yellow-400">{stars}/3</span>
                        </div>
                        <div className="flex space-x-1">
                            {[1, 2, 3].map(star => (
                                <span key={star} className={`text-xl ${star <= stars ? 'text-yellow-400' : 'text-gray-600'}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Star Criteria */}
                    <div className="mb-3 space-y-1 text-xs">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">⭐ Complete the stage</span>
                            <span className={isCompleted ? 'text-green-400' : 'text-gray-500'}>
                                {isCompleted ? '✓' : '○'}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">⭐ Finish with {stage.starCriteria.minHpPercent}%+ HP</span>
                            <span className={stars >= 2 ? 'text-green-400' : 'text-gray-500'}>
                                {stars >= 2 ? '✓' : '○'}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">⭐ Complete under {Math.floor(stage.starCriteria.time / 1000)}s</span>
                            <span className={stars >= 3 ? 'text-green-400' : 'text-gray-500'}>
                                {stars >= 3 ? '✓' : '○'}
                            </span>
                        </div>
                    </div>

                    {/* Best Stats (if stage has been attempted) */}
                    {isCompleted && (
                        <div className="mb-3 grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-gray-700 bg-opacity-40 p-2 rounded">
                                <div className="text-gray-400">BEST SCORE</div>
                                <div className="text-white font-bold">{bestScore.toLocaleString()}</div>
                            </div>
                            <div className="bg-gray-700 bg-opacity-40 p-2 rounded">
                                <div className="text-gray-400">BEST TIME</div>
                                <div className="text-white font-bold">{getTimeString(bestTime)}</div>
                            </div>
                        </div>
                    )}

                    {/* Action Button */}
                    <button
                        className={`w-full py-2 px-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                            isUnlocked
                                ? `bg-gradient-to-r ${worldTheme.gradient} hover:opacity-90 text-white shadow-md`
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (isUnlocked) onSelectStage(stage.id);
                        }}
                        disabled={!isUnlocked}
                    >
                        {!isCompleted ? 'START STAGE' : 'REPLAY STAGE'}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-900 px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-5xl">{worldTheme.icon}</span>
                    <div>
                        <h1 className="text-4xl font-medieval text-white">
                            {worldTheme.title}
                        </h1>
                        <p className="text-lg text-gray-400">{worldTheme.subtitle}</p>
                    </div>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Choose your stage and embark on your adventure. Complete each stage to unlock the next challenge.
                </p>
            </div>

            {/* World Progress Summary */}
            <div className="max-w-4xl mx-auto mb-8 bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <span className="text-gray-400">WORLD PROGRESS:</span>
                        <span className="text-white font-bold ml-2">
                            {worldStages.filter(stage => savedData.worlds[worldId]?.stages?.[stage.id]?.completed).length}/{worldStages.length} stages
                        </span>
                    </div>
                    <div className="text-sm">
                        <span className="text-gray-400">TOTAL STARS:</span>
                        <span className="text-yellow-400 font-bold ml-2">
                            {worldStages.reduce((total, stage) => 
                                total + (savedData.worlds[worldId]?.stages?.[stage.id]?.stars || 0), 0
                            )}/{worldStages.length * 3}
                        </span>
                    </div>
                </div>
            </div>

            {/* Stage Cards Grid */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                    {worldStages.map((stage, index) => renderStageCard(stage, index))}
                </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
                <button 
                    onClick={onBack}
                    className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg"
                >
                    ← Back to World Selection
                </button>
            </div>
        </div>
    );
};