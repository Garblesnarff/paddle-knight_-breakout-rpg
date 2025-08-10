// WorldSelector.tsx
import React from 'react';
import { WORLD_CONFIG, getWorldStages, getWorldTotalStars, getWorldEarnedStars } from '../game/world-config';
import SaveManager from '../services/SaveManager';

interface WorldSelectorProps {
    onSelectWorld: (worldId: number) => void;
    onBack: () => void;
}

export const WorldSelector: React.FC<WorldSelectorProps> = ({ onSelectWorld, onBack }) => {
    const savedData = SaveManager.load();

    const renderWorldNode = (worldId: number) => {
        const worldStages = getWorldStages(worldId);
        const totalStars = getWorldTotalStars(worldId);
        const earnedStars = getWorldEarnedStars(worldId, savedData.worlds);
        const completedStages = savedData.worlds[worldId]?.completedStages || 0;
        const isUnlocked = worldId <= savedData.player.highestWorldUnlocked;
        
        const worldConfig = WORLD_CONFIG.find(w => w.world === worldId && w.stage === 1);
        if (!worldConfig) return null;

        return (
            <div 
                key={worldId}
                className={`world-node ${isUnlocked ? 'unlocked' : 'locked'}`}
                style={{
                    left: worldConfig.position.x,
                    top: worldConfig.position.y,
                    cursor: isUnlocked ? 'pointer' : 'default'
                }}
                onClick={() => isUnlocked && onSelectWorld(worldId)}
            >
                <div className="world-header">
                    <h3>World {worldId}</h3>
                    <div className="world-progress">
                        <span className="stages-completed">{completedStages}/5</span>
                        <span className="stars-earned">{earnedStars}/{totalStars}</span>
                    </div>
                </div>
                
                <div className="world-stages">
                    {worldStages.map(stage => {
                        const stageData = savedData.worlds[worldId]?.stages?.[stage.id];
                        const stageStars = stageData?.stars || 0;
                        const isCompleted = stageData?.completed || false;
                        
                        return (
                            <div 
                                key={stage.id}
                                className={`stage-indicator ${isCompleted ? 'completed' : 'incomplete'}`}
                                title={`${stage.name}: ${stageStars}/3 stars`}
                            >
                                <span className="stage-number">{stage.stage}</span>
                                <div className="stage-stars">
                                    {[1, 2, 3].map(star => (
                                        <span 
                                            key={star}
                                            className={`star ${star <= stageStars ? 'earned' : 'empty'}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {!isUnlocked && (
                    <div className="locked-overlay">
                        <span>🔒</span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="world-selector">
            <div className="world-selector-header">
                <h2>Select Your Quest</h2>
                <p>Choose a world to begin your adventure</p>
            </div>
            
            <div className="world-map">
                {renderWorldNode(1)}
                {renderWorldNode(2)}
                {renderWorldNode(3)}
            </div>
            
            <div className="world-selector-footer">
                <button className="back-button" onClick={onBack}>
                    ← Back to Main Menu
                </button>
            </div>
        </div>
    );
};


