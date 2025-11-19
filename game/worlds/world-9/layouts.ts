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
];
