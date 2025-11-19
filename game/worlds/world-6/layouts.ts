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
];
