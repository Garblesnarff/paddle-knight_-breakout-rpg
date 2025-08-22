import React from 'react';
import { SKILL_TREE_DATA } from '../game/skills';
import { SkillNode } from '../types';
import { IconBolt, IconHeart, IconShield, IconStar, IconSitemap, IconBrain, IconSparkles, IconWind, IconOrb, IconElementalTrail, IconTimeRewind } from './Icons';

const SKILL_ICONS: Record<string, React.ReactNode> = {
    // World 1
    powerBoost: <IconBolt />,
    vitalityBoost: <IconHeart />,
    breakthrough: <IconSitemap />,
    defenseBoost: <IconShield />,
    multiBallUnlock: <IconStar />,
    aegisParry: <IconShield />,
    // World 2
    arcaneIntellect: <IconBrain />,
    manaShield: <IconSparkles />,
    spellPower: <IconSparkles />,
    elementalInfusion: <IconWind />,
    runicEmpowerment: <IconStar />,
    arcaneOrb: <IconOrb />,
    masterOfElements: <IconElementalTrail />,
    timeWarp: <IconTimeRewind />,
};

interface SkillTreeProps {
    isOpen: boolean;
    onClose: () => void;
    skillPoints: number;
    unlockedSkills: Record<string, number>;
    onLearnSkill: (skillId: string) => void;
}

const SkillNodeDisplay: React.FC<{
    skill: SkillNode;
    unlockedSkills: Record<string, number>;
    skillPoints: number;
    onLearnSkill: (skillId: string) => void;
}> = ({ skill, unlockedSkills, skillPoints, onLearnSkill }) => {
    const currentLevel = unlockedSkills[skill.id] || 0;
    const isMaxLevel = currentLevel >= skill.maxLevel;
    const areDependenciesMet = skill.dependencies.every(depId => (unlockedSkills[depId] || 0) > 0);
    const cost = isMaxLevel ? 0 : skill.cost(currentLevel);
    const canAfford = skillPoints >= cost;
    
    const canLearn = !isMaxLevel && areDependenciesMet && canAfford;
    const icon = SKILL_ICONS[skill.id];

    const borderColor = areDependenciesMet ? (skill.position.col < 3 ? 'border-purple-500' : 'border-sky-500') : 'border-gray-700';
    const bgColor = areDependenciesMet ? (skill.position.col < 3 ? 'bg-gray-800' : 'bg-indigo-900/50') : 'bg-gray-900/80';
    const iconColor = areDependenciesMet ? (skill.position.col < 3 ? 'text-purple-400' : 'text-sky-400') : 'text-gray-500';

    return (
        <div
            className={`relative p-3 border-2 rounded-lg w-44 h-48 flex flex-col justify-between transition-all duration-300 ${bgColor} ${borderColor}`}
            style={{ gridRow: skill.position.row + 1, gridColumn: skill.position.col + 1 }}
        >
            {currentLevel > 0 && (
                 <div className={`absolute -top-3 -right-3 w-7 h-7 ${isMaxLevel ? (skill.position.col < 3 ? 'bg-purple-500' : 'bg-sky-500') : 'bg-yellow-400'} text-gray-900 rounded-full flex items-center justify-center font-bold border-2 border-gray-800 text-sm`}>
                    {currentLevel}
                </div>
            )}
            <div className="flex items-center gap-2">
                <div className={`w-8 h-8 flex items-center justify-center rounded ${iconColor}`}>{icon}</div>
                <h3 className="font-bold text-white text-base">{skill.name}</h3>
            </div>
            <p className="text-xs text-gray-400 my-1 flex-grow">{skill.description(currentLevel)}</p>
            <button
                onClick={() => onLearnSkill(skill.id)}
                disabled={!canLearn}
                className="w-full py-1 text-sm font-bold rounded transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed bg-green-600 hover:bg-green-500 text-white"
            >
                {isMaxLevel ? 'Max Level' : areDependenciesMet ? `Cost: ${cost} SP` : 'Locked'}
            </button>
        </div>
    );
};

export const SkillTree: React.FC<SkillTreeProps> = ({ isOpen, onClose, skillPoints, unlockedSkills, onLearnSkill }) => {
    if (!isOpen) return null;

    const skills = Object.values(SKILL_TREE_DATA);
    
    const getNodePos = (id: string) => {
        const node = SKILL_TREE_DATA[id];
        if (!node) return {x: 0, y: 0};
        const nodeWidth = 176; // w-44
        const nodeHeight = 192; // h-48
        const gapX = 48; // gap-x-12
        const gapY = 32; // gap-y-8
        
        return {
            x: node.position.col * (nodeWidth + gapX) + nodeWidth / 2,
            y: node.position.row * (nodeHeight + gapY) + nodeHeight / 2,
        };
    };

    return (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="relative w-full max-w-6xl h-auto max-h-screen overflow-y-auto bg-gray-900 border-4 border-purple-700 rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-4xl font-medieval text-yellow-300">Skill Tree</h2>
                    <div className="text-2xl font-bold text-green-400">Skill Points: {skillPoints}</div>
                    <button onClick={onClose} className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded font-bold border-2 border-red-900/80 text-white">Close (T)</button>
                </div>
                
                <div className="relative p-4">
                    <svg className="absolute top-0 left-0 w-full h-full" style={{zIndex: 0}}>
                        {skills.map(skill =>
                            skill.dependencies.map(depId => {
                                const start = getNodePos(depId);
                                const end = getNodePos(skill.id);
                                const isDepUnlocked = (unlockedSkills[depId] || 0) > 0;
                                
                                let strokeColor = '#4b5563'; // gray-600
                                if (isDepUnlocked) {
                                    strokeColor = skill.position.col < 3 ? '#a855f7' : '#38bdf8'; // purple-500 or sky-400
                                }

                                return (
                                    <line
                                        key={`${depId}-${skill.id}`}
                                        x1={start.x} y1={start.y}
                                        x2={end.x} y2={end.y}
                                        stroke={strokeColor}
                                        strokeWidth="3"
                                        strokeDasharray={isDepUnlocked ? 'none' : '5 5'}
                                    />
                                );
                            })
                        )}
                    </svg>

                    <div className="relative grid grid-cols-5 gap-x-12 gap-y-8 z-10">
                       {skills.map(skill => (
                            <SkillNodeDisplay
                                key={skill.id}
                                skill={skill}
                                unlockedSkills={unlockedSkills}
                                skillPoints={skillPoints}
                                onLearnSkill={onLearnSkill}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};