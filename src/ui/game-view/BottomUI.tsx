import React from 'react';
import { useGameStore } from '@/src/core/state/gameStore';
import { PlayerStats, RunicEmpowermentBuffs, Skill, GameStatus } from '@/types';
import { IconBan, IconBolt, IconBrain, IconHeart, IconShield, IconSitemap, IconWind } from '@/components/Icons';

const StatDisplay: React.FC<{ icon: React.ReactNode; label: string; value: number; color: string }> = ({ icon, label, value, color }) => (
  <div className={`flex items-center p-2 bg-gray-900/60 rounded-md border border-gray-900/80 shadow-inner`}>
    <div className={`mr-2 ${color}`}>{icon}</div>
    <div className="flex flex-col text-sm leading-tight">
      <span className="font-bold text-white">{value}</span>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  </div>
);

const SkillButton: React.FC<{ skill: Skill; onActivate: () => void; now: number; hotkey?: string; manaBurnActiveUntil: number | null }> = ({ skill, onActivate, now, hotkey, manaBurnActiveUntil }) => {
  const isManaBurned = manaBurnActiveUntil && now < manaBurnActiveUntil;
  const effectiveCooldown = isManaBurned ? skill.cooldown * 2 : skill.cooldown;
  const cooldownProgress = Math.min(100, ((now - skill.lastUsed) / effectiveCooldown) * 100);
  const isOnCooldown = cooldownProgress < 100;
  const hasCharges = !!skill.charges && skill.charges > 0;
  const isActiveByDuration = !!skill.activeUntil && now < (skill.activeUntil as number);
  const isActive = isActiveByDuration || hasCharges;

  return (
    <button
      onClick={onActivate}
      disabled={isOnCooldown && !hasCharges}
      className={`relative w-16 h-16 rounded-lg border-2 overflow-hidden transition-all duration-200 ${
        isActive ? 'border-yellow-400 shadow-lg shadow-yellow-400/50' : isOnCooldown ? 'border-gray-600 bg-gray-800' : 'border-purple-500 bg-purple-800 hover:bg-purple-700 hover:scale-105'
      }`}
      aria-label={`${skill.name} skill button. ${hotkey ? `Hotkey: ${hotkey}.` : ''}`}
    >
      <div className="z-10 relative flex flex-col items-center justify-center h-full text-center">
        <span className="text-xs font-bold leading-tight">{skill.name}</span>
        {hotkey && <span className="text-2xs text-yellow-300">({hotkey})</span>}
        {hasCharges ? <span className="text-sm font-bold">{skill.charges}</span> : !isOnCooldown && !isActive && <span className="text-2xs">(Ready)</span>}
      </div>
      {isOnCooldown && !hasCharges && <div className="absolute bottom-0 left-0 h-full bg-black/70 w-full" style={{ transform: `translateY(${100 - cooldownProgress}%)` }} />}
      {isActive && <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/30 animate-pulse" />}
    </button>
  );
};

const BuffsDisplay: React.FC<{ buffs: RunicEmpowermentBuffs }> = ({ buffs }) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      {buffs.power && (
        <div className="flex items-center text-red-400 bg-red-900/50 px-2 py-1 rounded-md text-xs font-bold animate-pulse">
          <IconBolt className="w-4 h-4 mr-1" /> Power
        </div>
      )}
      {buffs.haste && (
        <div className="flex items-center text-blue-400 bg-blue-900/50 px-2 py-1 rounded-md text-xs font-bold animate-pulse">
          <IconWind className="w-4 h-4 mr-1" /> Haste
        </div>
      )}
      {buffs.shield && (
        <div className="flex items-center text-green-400 bg-green-900/50 px-2 py-1 rounded-md text-xs font-bold animate-pulse">
          <IconShield className="w-4 h-4 mr-1" /> Shield
        </div>
      )}
    </div>
  );
};

export const BottomUI: React.FC = () => {
  const { game, ui, setGameStatus } = useGameStore();
  const { 
    playerStats: stats, 
    skills, 
    equippedSkills, 
    skillPoints, 
    activeBuffs, 
    manaBurnActiveUntil 
  } = game;
  const world = ui.selectedWorldId || 1;
  
  const now = Date.now();
  const activeSkillsToShow = equippedSkills.map((id) => skills[id]).filter(Boolean);
  const isManaBurned = !!manaBurnActiveUntil && now < manaBurnActiveUntil;
  
  const onActivateSkill = (skillId: string) => {
    // TODO: Implement skill activation
    console.log('Activate skill:', skillId);
  };
  
  const onOpenSkillTree = () => {
    setGameStatus(GameStatus.SkillTree);
  };

  const skillHotkeys: Record<string, string> = {
    multiBall: '1',
    elementalInfusion: '2',
    arcaneOrb: '3',
    timeWarp: '4',
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg p-2 border-t-2 border-slate-600 border-b-2 border-slate-900 shadow-lg">
      <div className="flex justify-between items-end">
        <div className="flex gap-2 items-end">
          <div className="flex gap-2">
            <StatDisplay icon={<IconBolt />} label="Power" value={stats.power} color="text-red-400" />
            <StatDisplay icon={<IconHeart />} label="Vitality" value={stats.vitality} color="text-pink-400" />
            <StatDisplay icon={<IconShield />} label="Defense" value={stats.defense} color="text-blue-400" />
            {world > 1 && <StatDisplay icon={<IconBrain />} label="Wisdom" value={stats.wisdom} color="text-purple-400" />}
            {typeof stats.ingenuity === 'number' && world >= 4 && (
              <StatDisplay icon={<IconBrain />} label="Ingenuity" value={stats.ingenuity as number} color="text-amber-400" />
            )}
          </div>
          <div className="flex flex-col gap-1 items-start ml-2">
            <BuffsDisplay buffs={activeBuffs} />
            {isManaBurned && (
              <div className="flex items-center text-purple-400 bg-purple-900/50 px-2 py-1 rounded-md text-xs font-bold animate-pulse">
                <IconBan className="w-4 h-4 mr-1" /> Mana Burn
              </div>
            )}
          </div>
        </div>

        <div className="flex items-end gap-3">
          <button
            onClick={onOpenSkillTree}
            className="relative w-20 h-16 rounded-lg border-2 border-yellow-500 bg-gradient-to-b from-yellow-700 to-yellow-800 text-white flex flex-col items-center justify-center hover:from-yellow-600 transition-all shadow-md"
            aria-label={`Open Skill Tree. Hotkey: T. ${skillPoints} points available.`}
          >
            <IconSitemap />
            <span className="text-xs font-bold mt-1">Skills</span>
            <span className="text-2xs text-yellow-300">(T)</span>
            {skillPoints > 0 && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-gray-800 animate-pulse">
                {skillPoints}
              </div>
            )}
          </button>

          {activeSkillsToShow.map((skill: Skill) => (
            <SkillButton key={skill.id} skill={skill} onActivate={() => onActivateSkill(skill.id)} now={now} hotkey={skillHotkeys[skill.id]} manaBurnActiveUntil={manaBurnActiveUntil} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomUI;


