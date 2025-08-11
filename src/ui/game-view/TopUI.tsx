import React from 'react';
import { LEVEL_UP_XP } from '@/constants';
import { IconGoldCoin } from '@/components/Icons';

interface TopUIProps {
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  xp: number;
  level: number;
  gold: number;
  world: number;
  worldStartTime: number;
}

export const TopUI: React.FC<TopUIProps> = ({ hp, maxHp, mana, maxMana, xp, level, gold, world, worldStartTime }) => {
  const [elapsedTime, setElapsedTime] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(Date.now() - worldStartTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [worldStartTime]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const hpPercentage = (hp / maxHp) * 100;
  const manaPercentage = maxMana > 0 ? (mana / maxMana) * 100 : 0;
  const xpPercentage = (xp / LEVEL_UP_XP) * 100;

  return (
    <div className="w-full bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg p-2 border-t-2 border-slate-600 border-b-2 border-slate-900 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex-1 mr-4">
          <div className="text-red-400 text-sm font-bold mb-1">HP</div>
          <div className="w-full bg-black/50 rounded-full h-4 shadow-inner border border-black/30">
            <div className="bg-red-500 h-full rounded-full transition-all duration-300 border-r-2 border-red-400" style={{ width: `${hpPercentage}%` }}></div>
          </div>
          <div className="text-center text-sm font-semibold -mt-[17px] text-white" style={{ textShadow: '1px 1px 2px #000' }}>{Math.round(hp)} / {maxHp}</div>
        </div>

        <div className="relative text-center mx-4 flex flex-col items-center">
          <div className="absolute -bottom-6 w-20 h-24 bg-gradient-to-b from-slate-600 to-slate-800 border-2 border-slate-900 shadow-md" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          <div className="relative z-10 font-medieval text-5xl text-yellow-300 drop-shadow-lg">{level}</div>
          <div className="relative z-10 text-sm text-gray-400 -mt-1 tracking-widest">LEVEL</div>
        </div>

        <div className="flex-1 ml-4">
          <div className="text-blue-400 text-sm font-bold mb-1 text-right">XP</div>
          <div className="w-full bg-black/50 rounded-full h-4 shadow-inner border border-black/30">
            <div className="bg-blue-500 h-full rounded-full transition-all duration-300 border-r-2 border-blue-400" style={{ width: `${xpPercentage}%` }}></div>
          </div>
          <div className="text-center text-sm font-semibold -mt-[17px] text-white" style={{ textShadow: '1px 1px 2px #000' }}>{xp} / {LEVEL_UP_XP}</div>
        </div>
      </div>
      {world > 1 && maxMana > 0 && (
        <div className="mt-2 px-2">
          <div className="text-sky-400 text-sm font-bold mb-1">Mana</div>
          <div className="w-full bg-black/50 rounded-full h-3 shadow-inner border border-black/30">
            <div className="bg-sky-500 h-full rounded-full transition-all duration-300 border-r-2 border-sky-400" style={{ width: `${manaPercentage}%` }}></div>
          </div>
          <div className="text-center text-xs font-semibold -mt-[13px] text-white" style={{ textShadow: '1px 1px 2px #000' }}>{Math.round(mana)} / {maxMana}</div>
        </div>
      )}
      <div className="flex items-center justify-center text-2xl font-bold text-yellow-400 text-center mt-3 gap-2">
        <IconGoldCoin className="w-7 h-7" />
        <span>{gold}</span>
        <span className="text-white ml-4">{formatTime(elapsedTime)}</span>
      </div>
    </div>
  );
};

export default TopUI;


