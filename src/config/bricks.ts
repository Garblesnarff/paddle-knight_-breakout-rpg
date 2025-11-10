/**
 * Brick Configuration
 * Properties for all brick types (HP, color, points)
 */

import { BrickType } from '@/types';

export const BRICK_PROPERTIES: Record<BrickType, { color: string; maxHp: number; points: number }> = {
  // World 1 - Classic
  [BrickType.Grunt]: { color: 'bg-gray-500', maxHp: 1, points: 10 },
  [BrickType.Soldier]: { color: 'bg-blue-500', maxHp: 2, points: 20 },
  [BrickType.Archer]: { color: 'bg-green-600', maxHp: 1, points: 30 },
  [BrickType.Mage]: { color: 'bg-purple-600', maxHp: 2, points: 40 },
  [BrickType.Tank]: { color: 'bg-gray-400', maxHp: 5, points: 50 },
  [BrickType.Chaos]: { color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500', maxHp: 3, points: 100 },
  [BrickType.Boss]: { color: 'bg-red-800', maxHp: 100, points: 1000 },

  // World 2 - Archmage Tower
  [BrickType.Apprentice]: { color: 'bg-sky-400', maxHp: 3, points: 60 },
  [BrickType.Fire]: { color: 'bg-orange-600', maxHp: 2, points: 50 },
  [BrickType.Ice]: { color: 'bg-cyan-300', maxHp: 4, points: 50 },
  [BrickType.Lightning]: { color: 'bg-yellow-400', maxHp: 2, points: 70 },
  [BrickType.Mirror]: { color: 'bg-slate-300', maxHp: 3, points: 80 },
  [BrickType.Rune]: { color: 'bg-indigo-500', maxHp: 4, points: 90 },
  [BrickType.ArchmageBoss]: { color: 'bg-indigo-700', maxHp: 250, points: 5000 },

  // World 3 - Bio-Forge Nexus
  [BrickType.Gearsprite]: { color: 'bg-cyan-400', maxHp: 3, points: 85 },
  [BrickType.VineBot]: { color: 'bg-green-500', maxHp: 4, points: 95 },
  [BrickType.ScrapGolem]: { color: 'bg-gray-600', maxHp: 6, points: 130 },
  [BrickType.Corruptor]: { color: 'bg-purple-500', maxHp: 5, points: 110 },
  [BrickType.HiveMind]: { color: 'bg-pink-400', maxHp: 7, points: 160 },
  [BrickType.Replicator]: { color: 'bg-blue-400', maxHp: 4, points: 100 },
  [BrickType.PrimeSynthesizer]: { color: 'bg-gradient-to-r from-purple-600 to-pink-600', maxHp: 300, points: 7500 },

  // World 4 - Clockwork Spire
  [BrickType.Gear]: { color: 'bg-gradient-to-br from-amber-700 to-yellow-600', maxHp: 3, points: 90 },
  [BrickType.Steam]: { color: 'bg-gray-400', maxHp: 2, points: 80 },
  [BrickType.Clockwork]: { color: 'bg-amber-600', maxHp: 3, points: 95 },
  [BrickType.Tesla]: { color: 'bg-sky-500', maxHp: 2, points: 110 },
  [BrickType.Piston]: { color: 'bg-zinc-500', maxHp: 4, points: 120 },
  [BrickType.Assembly]: { color: 'bg-orange-800', maxHp: 5, points: 150 },
  [BrickType.ChronoEngineerBoss]: { color: 'bg-yellow-800', maxHp: 280, points: 8000 },

  // Special Bricks
  [BrickType.Catalyst]: { color: 'bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900', maxHp: 1, points: 0 },
};
