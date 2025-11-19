import { BrickType } from '../../../types';

const { Sprout, Thorn, Blossom, Rootguard, Canopy, Wildvine, ForestKeeperBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Seedling Grove
  [
    [Sprout, Sprout, Sprout, Sprout, Sprout, Sprout, Sprout, Sprout],
    [null, Thorn, null, Thorn, null, Thorn, null, Thorn],
    [Sprout, Sprout, Sprout, Sprout, Sprout, Sprout, Sprout, Sprout],
    [Thorn, null, Thorn, null, Thorn, null, Thorn, null],
  ],

  // Stage 2: Blossom Fields
  [
    [Blossom, Thorn, Sprout, Thorn, Thorn, Sprout, Thorn, Blossom],
    [Thorn, Blossom, Thorn, Sprout, Sprout, Thorn, Blossom, Thorn],
    [Sprout, Thorn, Blossom, Thorn, Thorn, Blossom, Thorn, Sprout],
    [Blossom, Sprout, Thorn, Blossom, Blossom, Thorn, Sprout, Blossom],
  ],

  // Stage 3: Ancient Roots
  [
    [Rootguard, Blossom, Thorn, Blossom, Blossom, Thorn, Blossom, Rootguard],
    [Blossom, Sprout, Rootguard, Thorn, Thorn, Rootguard, Sprout, Blossom],
    [Thorn, Rootguard, Sprout, Blossom, Blossom, Sprout, Rootguard, Thorn],
    [Rootguard, Thorn, Blossom, Sprout, Sprout, Blossom, Thorn, Rootguard],
  ],

  // Stage 4: Canopy Jungle
  [
    [Canopy, Rootguard, Wildvine, Blossom, Blossom, Wildvine, Rootguard, Canopy],
    [Rootguard, Thorn, Sprout, Canopy, Canopy, Sprout, Thorn, Rootguard],
    [Wildvine, Blossom, Canopy, Rootguard, Rootguard, Canopy, Blossom, Wildvine],
    [Blossom, Sprout, Rootguard, Thorn, Thorn, Rootguard, Sprout, Blossom],
    [Canopy, Wildvine, Blossom, Sprout, Sprout, Blossom, Wildvine, Canopy],
  ],

  // Stage 5: Forest Keeper's Heart
  [
    [null, null, null, ForestKeeperBoss, null, null, null],
    [Wildvine, null, Canopy, null, Canopy, null, Wildvine],
    [Canopy, Wildvine, Rootguard, null, Rootguard, Wildvine, Canopy],
    [Rootguard, Blossom, Thorn, Wildvine, Wildvine, Thorn, Blossom, Rootguard],
    [Thorn, Sprout, Blossom, null, null, Blossom, Sprout, Thorn],
  ],
];
