import { BrickType } from '../../../types';

const { Ruby, Sapphire, Emerald, Diamond, Quartz, Obsidian, CrystalKingBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Gemstone Gallery
  [
    [Ruby, Sapphire, Emerald, Ruby, Sapphire, Emerald, Ruby, Sapphire],
    [Emerald, Ruby, Sapphire, Emerald, Ruby, Sapphire, Emerald, Ruby],
    [Sapphire, Emerald, Ruby, Sapphire, Emerald, Ruby, Sapphire, Emerald],
    [Ruby, Sapphire, Emerald, Ruby, Sapphire, Emerald, Ruby, Sapphire],
  ],

  // Stage 2: Prismatic Halls
  [
    [Quartz, Ruby, Sapphire, Emerald, Emerald, Sapphire, Ruby, Quartz],
    [Ruby, Sapphire, Emerald, Quartz, Quartz, Emerald, Sapphire, Ruby],
    [Sapphire, Emerald, Quartz, Ruby, Ruby, Quartz, Emerald, Sapphire],
    [Emerald, Quartz, Ruby, Sapphire, Sapphire, Ruby, Quartz, Emerald],
  ],

  // Stage 3: Diamond Formation
  [
    [Diamond, Quartz, Quartz, Ruby, Ruby, Quartz, Quartz, Diamond],
    [Quartz, Sapphire, Emerald, Quartz, Quartz, Emerald, Sapphire, Quartz],
    [Quartz, Emerald, Ruby, Sapphire, Sapphire, Ruby, Emerald, Quartz],
    [Diamond, Quartz, Quartz, Emerald, Emerald, Quartz, Quartz, Diamond],
  ],

  // Stage 4: Obsidian Depths
  [
    [Obsidian, Diamond, Quartz, Ruby, Ruby, Quartz, Diamond, Obsidian],
    [Diamond, Sapphire, Emerald, Quartz, Quartz, Emerald, Sapphire, Diamond],
    [Quartz, Emerald, Obsidian, Ruby, Ruby, Obsidian, Emerald, Quartz],
    [Ruby, Quartz, Diamond, Sapphire, Sapphire, Diamond, Quartz, Ruby],
    [Obsidian, Diamond, Quartz, Emerald, Emerald, Quartz, Diamond, Obsidian],
  ],

  // Stage 5: Crystal King's Chamber
  [
    [null, null, null, CrystalKingBoss, null, null, null],
    [Diamond, null, Obsidian, null, Obsidian, null, Diamond],
    [Quartz, Obsidian, Quartz, Diamond, Diamond, Quartz, Obsidian, Quartz],
    [Ruby, Sapphire, Emerald, Quartz, Quartz, Emerald, Sapphire, Ruby],
    [Emerald, Ruby, Sapphire, null, null, Sapphire, Ruby, Emerald],
  ],

  // Stage 6: Obsidian Shards
  [
    [Obsidian, Diamond, Quartz, Ruby, Ruby, Quartz, Diamond, Obsidian],
    [Diamond, Quartz, Obsidian, Sapphire, Sapphire, Obsidian, Quartz, Diamond],
    [Quartz, Obsidian, Diamond, Emerald, Emerald, Diamond, Obsidian, Quartz],
    [Ruby, Sapphire, Emerald, Quartz, Quartz, Emerald, Sapphire, Ruby],
    [Obsidian, Diamond, Quartz, Ruby, Ruby, Quartz, Diamond, Obsidian],
  ],

  // Stage 7: Diamond Fortress
  [
    [Diamond, Obsidian, Diamond, Obsidian, Obsidian, Diamond, Obsidian, Diamond],
    [Obsidian, Diamond, Quartz, Diamond, Diamond, Quartz, Diamond, Obsidian],
    [Diamond, Quartz, Obsidian, Ruby, Ruby, Obsidian, Quartz, Diamond],
    [Quartz, Diamond, Sapphire, Emerald, Emerald, Sapphire, Diamond, Quartz],
    [Diamond, Obsidian, Diamond, Quartz, Quartz, Diamond, Obsidian, Diamond],
    [Obsidian, Diamond, Obsidian, Diamond, Diamond, Obsidian, Diamond, Obsidian],
  ],

  // Stage 8: Crystalline Labyrinth
  [
    [Obsidian, Obsidian, Diamond, Diamond, Diamond, Diamond, Obsidian, Obsidian],
    [Diamond, Quartz, Obsidian, Quartz, Quartz, Obsidian, Quartz, Diamond],
    [Obsidian, Diamond, Quartz, Obsidian, Obsidian, Quartz, Diamond, Obsidian],
    [Diamond, Obsidian, Diamond, Quartz, Quartz, Diamond, Obsidian, Diamond],
    [Quartz, Diamond, Obsidian, Ruby, Ruby, Obsidian, Diamond, Quartz],
    [Obsidian, Diamond, Obsidian, Diamond, Diamond, Obsidian, Diamond, Obsidian],
  ],

  // Stage 9: Obsidian Legion
  [
    [Obsidian, Diamond, Obsidian, Diamond, Diamond, Obsidian, Diamond, Obsidian],
    [Diamond, Obsidian, Diamond, Obsidian, Obsidian, Diamond, Obsidian, Diamond],
    [Obsidian, Diamond, Quartz, Diamond, Diamond, Quartz, Diamond, Obsidian],
    [Diamond, Obsidian, Diamond, Quartz, Quartz, Diamond, Obsidian, Diamond],
    [Obsidian, Quartz, Obsidian, Diamond, Diamond, Obsidian, Quartz, Obsidian],
    [Diamond, Obsidian, Diamond, Obsidian, Obsidian, Diamond, Obsidian, Diamond],
    [Obsidian, Obsidian, Obsidian, Diamond, Diamond, Obsidian, Obsidian, Obsidian],
  ],

  // Stage 10: Gem Palace
  [
    [Obsidian, Obsidian, Obsidian, Obsidian, Obsidian, Obsidian, Obsidian, Obsidian],
    [Obsidian, Diamond, Diamond, Diamond, Diamond, Diamond, Diamond, Obsidian],
    [Diamond, Obsidian, Quartz, Obsidian, Obsidian, Quartz, Obsidian, Diamond],
    [Diamond, Quartz, Obsidian, Diamond, Diamond, Obsidian, Quartz, Diamond],
    [Obsidian, Diamond, Quartz, Obsidian, Obsidian, Quartz, Diamond, Obsidian],
    [Diamond, Obsidian, Diamond, Quartz, Quartz, Diamond, Obsidian, Diamond],
    [Obsidian, Diamond, Obsidian, Diamond, Diamond, Obsidian, Diamond, Obsidian],
    [Obsidian, Obsidian, Obsidian, Obsidian, Obsidian, Obsidian, Obsidian, Obsidian],
  ],
];
