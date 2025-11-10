/**
 * Player Related Types
 * Player stats, debuffs, and cosmetics
 */

export interface PlayerStats {
  power: number;
  defense: number;
  agility: number;
  luck: number;
  wisdom: number;
  vitality: number;
  ingenuity?: number; // Clockwork Spire stat
}

export interface PlayerDebuff {
  id: string;
  type: 'skillDisable' | 'slowMovement' | 'reducedDamage';
  skillId?: string;
  severity?: number;
  appliedAt: number;
  duration: number;
}

export interface Cosmetics {
  paddleEffect?: string;
  ballEffect?: string;
}
