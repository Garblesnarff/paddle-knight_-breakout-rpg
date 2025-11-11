import { PlayerStats } from "../types";

export interface ShopItem {
    id: string;
    name: string;
    description: string;
    cost: number;
    maxLevel: number;
    category: 'stats' | 'starting' | 'cosmetic';
    effect: (level: number) => Partial<PlayerStats> | void;
}

export const SHOP_ITEMS: ShopItem[] = [
    {
        id: 'permanent_power',
        name: 'Mighty Strikes',
        description: 'Permanently increase Power by 2',
        cost: 100,
        maxLevel: 10,
        category: 'stats',
        effect: (level) => ({ power: level * 2 })
    },
    {
        id: 'permanent_hp',
        name: 'Fortitude',
        description: 'Permanently increase max HP by 20',
        cost: 150,
        maxLevel: 10,
        category: 'stats',
        effect: (level) => ({ vitality: level * 20 })
    },
    {
        id: 'starting_skill_point',
        name: 'Wisdom of Ages',
        description: 'Start each run with +1 skill point',
        cost: 500,
        maxLevel: 3,
        category: 'starting',
        effect: (level) => {} // Handled separately
    }
];