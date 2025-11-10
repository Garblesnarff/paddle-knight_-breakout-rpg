/**
 * Player Configuration
 * Initial stats and default skills
 */

import { PlayerStats, Skill } from '@/types';
import { PARRY_WINDOW_DURATION } from './game';

export const INITIAL_PLAYER_STATS: PlayerStats = {
  power: 1,
  defense: 1,
  agility: 7,
  luck: 1,
  wisdom: 1,
  vitality: 100,
  ingenuity: 0,
};

export const INITIAL_SKILLS: Record<string, Skill> = {
  multiBall: { id: 'multiBall', name: 'Multi-Ball', cooldown: 20000, lastUsed: -20000, duration: 5000 },
  timeSlow: { id: 'timeSlow', name: 'Time Slow', cooldown: 25000, lastUsed: -25000, duration: 7000 },
  barrier: { id: 'barrier', name: 'Barrier', cooldown: 30000, lastUsed: -30000, duration: 10000 },
  elementalInfusion: { id: 'elementalInfusion', name: 'Elemental Infusion', cooldown: 30000, lastUsed: -30000, charges: 5 },
  arcaneOrb: { id: 'arcaneOrb', name: 'Arcane Orb', cooldown: 20000, lastUsed: -20000 },
  timeWarp: { id: 'timeWarp', name: 'Time Warp', cooldown: 60000, lastUsed: -60000 },
  overclockSkill: { id: 'overclockSkill', name: 'Overclock', cooldown: 30000, lastUsed: -30000, duration: 5000 },
  steamBurst: { id: 'steamBurst', name: 'Steam Burst', cooldown: 45000, lastUsed: -45000 },
  chronoBreak: { id: 'chronoBreak', name: 'Chrono Break', cooldown: 90000, lastUsed: -90000, duration: 3000 },
  aegisParry: { id: 'aegisParry', name: 'Aegis Parry', cooldown: 5000, lastUsed: -5000, duration: PARRY_WINDOW_DURATION },
};
