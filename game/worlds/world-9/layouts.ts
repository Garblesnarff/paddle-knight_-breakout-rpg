import { BrickType } from '../../../types';

const { Tide, Whirlpool, Leviathan, Deepcrawler, Brine, Trench, AbyssalHorrorBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Shallow Waters
  [
    [Tide, Tide, Tide, Tide, Tide, Tide, Tide, Tide],
    [null, Whirlpool, null, Whirlpool, null, Whirlpool, null, Whirlpool],
    [Tide, Tide, Tide, Tide, Tide, Tide, Tide, Tide],
    [Whirlpool, null, Whirlpool, null, Whirlpool, null, Whirlpool, null],
  ],

  // Stage 2: Whirlpool Vortex
  [
    [Whirlpool, Brine, Whirlpool, Brine, Brine, Whirlpool, Brine, Whirlpool],
    [Tide, Tide, Tide, Whirlpool, Whirlpool, Tide, Tide, Tide],
    [Brine, Whirlpool, Brine, Tide, Tide, Brine, Whirlpool, Brine],
    [Tide, Tide, Whirlpool, Brine, Brine, Whirlpool, Tide, Tide],
  ],

  // Stage 3: Deep Crawlers
  [
    [Deepcrawler, Brine, Whirlpool, Brine, Brine, Whirlpool, Brine, Deepcrawler],
    [Whirlpool, Tide, Deepcrawler, Whirlpool, Whirlpool, Deepcrawler, Tide, Whirlpool],
    [Brine, Deepcrawler, Tide, Brine, Brine, Tide, Deepcrawler, Brine],
    [Deepcrawler, Whirlpool, Brine, Tide, Tide, Brine, Whirlpool, Deepcrawler],
  ],

  // Stage 4: Trench Depths
  [
    [Trench, Deepcrawler, Leviathan, Brine, Brine, Leviathan, Deepcrawler, Trench],
    [Deepcrawler, Whirlpool, Tide, Deepcrawler, Deepcrawler, Tide, Whirlpool, Deepcrawler],
    [Leviathan, Brine, Trench, Whirlpool, Whirlpool, Trench, Brine, Leviathan],
    [Brine, Tide, Deepcrawler, Brine, Brine, Deepcrawler, Tide, Brine],
    [Trench, Leviathan, Whirlpool, Tide, Tide, Whirlpool, Leviathan, Trench],
  ],

  // Stage 5: Abyssal Horror's Domain
  [
    [null, null, null, AbyssalHorrorBoss, null, null, null],
    [Leviathan, null, Trench, null, Trench, null, Leviathan],
    [Trench, Leviathan, Deepcrawler, null, Deepcrawler, Leviathan, Trench],
    [Deepcrawler, Brine, Whirlpool, Leviathan, Leviathan, Whirlpool, Brine, Deepcrawler],
    [Whirlpool, Tide, Brine, null, null, Brine, Tide, Whirlpool],
  ],

  // Stage 6: Trench Awakening
  [
    [Trench, Leviathan, Deepcrawler, Brine, Brine, Deepcrawler, Leviathan, Trench],
    [Leviathan, Deepcrawler, Trench, Whirlpool, Whirlpool, Trench, Deepcrawler, Leviathan],
    [Deepcrawler, Brine, Whirlpool, Tide, Tide, Whirlpool, Brine, Deepcrawler],
    [Brine, Whirlpool, Tide, Deepcrawler, Deepcrawler, Tide, Whirlpool, Brine],
    [Trench, Leviathan, Deepcrawler, Brine, Brine, Deepcrawler, Leviathan, Trench],
  ],

  // Stage 7: Leviathan's Hunt
  [
    [Leviathan, Trench, Leviathan, Trench, Trench, Leviathan, Trench, Leviathan],
    [Trench, Leviathan, Deepcrawler, Leviathan, Leviathan, Deepcrawler, Leviathan, Trench],
    [Leviathan, Deepcrawler, Trench, Brine, Brine, Trench, Deepcrawler, Leviathan],
    [Deepcrawler, Trench, Brine, Whirlpool, Whirlpool, Brine, Trench, Deepcrawler],
    [Trench, Leviathan, Deepcrawler, Brine, Brine, Deepcrawler, Leviathan, Trench],
    [Leviathan, Trench, Leviathan, Deepcrawler, Deepcrawler, Leviathan, Trench, Leviathan],
  ],

  // Stage 8: Deep Sea Pressure
  [
    [Trench, Trench, Leviathan, Leviathan, Leviathan, Leviathan, Trench, Trench],
    [Leviathan, Deepcrawler, Trench, Brine, Brine, Trench, Deepcrawler, Leviathan],
    [Trench, Leviathan, Deepcrawler, Trench, Trench, Deepcrawler, Leviathan, Trench],
    [Leviathan, Trench, Leviathan, Deepcrawler, Deepcrawler, Leviathan, Trench, Leviathan],
    [Deepcrawler, Leviathan, Trench, Brine, Brine, Trench, Leviathan, Deepcrawler],
    [Trench, Leviathan, Trench, Leviathan, Leviathan, Trench, Leviathan, Trench],
  ],

  // Stage 9: Abyssal Nightmare
  [
    [Trench, Leviathan, Trench, Leviathan, Leviathan, Trench, Leviathan, Trench],
    [Leviathan, Trench, Leviathan, Trench, Trench, Leviathan, Trench, Leviathan],
    [Trench, Leviathan, Deepcrawler, Brine, Brine, Deepcrawler, Leviathan, Trench],
    [Leviathan, Deepcrawler, Trench, Leviathan, Leviathan, Trench, Deepcrawler, Leviathan],
    [Trench, Leviathan, Trench, Deepcrawler, Deepcrawler, Trench, Leviathan, Trench],
    [Leviathan, Trench, Leviathan, Brine, Brine, Leviathan, Trench, Leviathan],
    [Trench, Trench, Trench, Leviathan, Leviathan, Trench, Trench, Trench],
  ],

  // Stage 10: Depths of Despair
  [
    [Trench, Trench, Trench, Trench, Trench, Trench, Trench, Trench],
    [Trench, Leviathan, Leviathan, Leviathan, Leviathan, Leviathan, Leviathan, Trench],
    [Leviathan, Trench, Deepcrawler, Brine, Brine, Deepcrawler, Trench, Leviathan],
    [Leviathan, Deepcrawler, Trench, Leviathan, Leviathan, Trench, Deepcrawler, Leviathan],
    [Trench, Brine, Leviathan, Trench, Trench, Leviathan, Brine, Trench],
    [Leviathan, Trench, Deepcrawler, Brine, Brine, Deepcrawler, Trench, Leviathan],
    [Trench, Leviathan, Trench, Leviathan, Leviathan, Trench, Leviathan, Trench],
    [Trench, Trench, Trench, Trench, Trench, Trench, Trench, Trench],
  ],
];
