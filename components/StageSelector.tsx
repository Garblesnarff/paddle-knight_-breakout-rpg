// StageSelector.tsx
import React from 'react';
import { STAGE_CONFIG, StageInfo } from '../game/stage-config';
import SaveManager from '../services/SaveManager';
import { IconLock, IconStar } from './Icons';

interface StageSelectorProps {
    onSelectStage: (stageId: number) => void;
    onBack: () => void;
}

export const StageSelector: React.FC<StageSelectorProps> = ({ onSelectStage, onBack }) => {
    const savedData = SaveManager.load();
    const [selectedStage, setSelectedStage] = React.useState<StageInfo | null>(null);

    const renderStageNode = (stage: StageInfo) => {
        const isUnlocked = stage.id <= savedData.player.highestStageUnlocked;
        const stageData = savedData.stages[stage.id];
        const stars = stageData?.stars || 0;

        return (
            <div
                key={stage.id}
                className={`absolute w-20 h-20 rounded-full border-4 cursor-pointer transform transition-all duration-200 ${
                    isUnlocked 
                        ? 'bg-yellow-600 border-yellow-400 hover:scale-110' 
                        : 'bg-gray-700 border-gray-600 cursor-not-allowed'
                }`}
                style={{ left: stage.position.x, top: stage.position.y }}
                onClick={() => isUnlocked && setSelectedStage(stage)}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    {isUnlocked ? (
                        <>
                            <span className="text-2xl font-bold">{stage.id}</span>
                            <div className="flex">
                                {[1, 2, 3].map(i => (
                                    <IconStar 
                                        key={i} 
                                        className={`w-4 h-4 ${i <= stars ? 'text-yellow-300' : 'text-gray-600'}`}
                                        fill={i <= stars ? 'currentColor' : 'none'}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <IconLock className="w-8 h-8 text-gray-500" />
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-900">
            <div className="relative w-full max-w-6xl h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-4 border-gray-700 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-medieval text-yellow-300">Select Your Quest</h1>
                    <button 
                        onClick={onBack}
                        className="px-6 py-2 bg-red-700 hover:bg-red-600 rounded text-white font-bold"
                    >
                        Back
                    </button>
                </div>

                {/* Stage Map */}
                <div className="relative h-[400px] bg-gray-800/50 rounded-lg">
                    {/* Draw paths between stages */}
                    <svg className="absolute inset-0 w-full h-full">
                        {STAGE_CONFIG.slice(0, -1).map((stage, i) => {
                            const nextStage = STAGE_CONFIG[i + 1];
                            if (stage.world !== nextStage.world) return null;
                            
                            return (
                                <line
                                    key={`path-${stage.id}`}
                                    x1={stage.position.x + 40}
                                    y1={stage.position.y + 40}
                                    x2={nextStage.position.x + 40}
                                    y2={nextStage.position.y + 40}
                                    stroke="#4B5563"
                                    strokeWidth="4"
                                    strokeDasharray="8 4"
                                />
                            );
                        })}
                    </svg>

                    {/* Render stage nodes */}
                    {STAGE_CONFIG.map(renderStageNode)}
                </div>

                {/* Stage Details Panel */}
                {selectedStage && (
                    <div className="absolute bottom-8 left-8 right-8 bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {selectedStage.name}
                                </h2>
                                <p className="text-gray-400 mb-4">{selectedStage.description}</p>
                                
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <IconStar className="w-5 h-5 text-yellow-400" />
                                        <span className="text-sm">Complete the stage</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconStar className="w-5 h-5 text-yellow-400" />
                                        <span className="text-sm">
                                            Finish with {selectedStage.starCriteria.minHpPercent}%+ HP
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IconStar className="w-5 h-5 text-yellow-400" />
                                        <span className="text-sm">
                                            Complete in under {selectedStage.starCriteria.time / 1000}s
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                {savedData.stages[selectedStage.id] && (
                                    <div className="text-sm text-gray-400 mb-4">
                                        <p>Best Score: {savedData.stages[selectedStage.id].bestScore}</p>
                                        <p>Best Time: {(savedData.stages[selectedStage.id].bestTime / 1000).toFixed(1)}s</p>
                                    </div>
                                )}
                                
                                <button
                                    onClick={() => onSelectStage(selectedStage.id)}
                                    className="px-8 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-white font-bold text-xl"
                                >
                                    Launch Stage
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};