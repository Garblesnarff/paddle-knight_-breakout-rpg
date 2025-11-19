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

  // Stage 6: Wildvine Tangle
  [
    [Wildvine, Canopy, Rootguard, Blossom, Blossom, Rootguard, Canopy, Wildvine],
    [Canopy, Rootguard, Wildvine, Thorn, Thorn, Wildvine, Rootguard, Canopy],
    [Rootguard, Blossom, Thorn, Sprout, Sprout, Thorn, Blossom, Rootguard],
    [Blossom, Thorn, Sprout, Rootguard, Rootguard, Sprout, Thorn, Blossom],
    [Wildvine, Canopy, Rootguard, Blossom, Blossom, Rootguard, Canopy, Wildvine],
  ],

  // Stage 7: Canopy Maze
  [
    [Canopy, Wildvine, Canopy, Wildvine, Wildvine, Canopy, Wildvine, Canopy],
    [Wildvine, Canopy, Rootguard, Canopy, Canopy, Rootguard, Canopy, Wildvine],
    [Canopy, Rootguard, Wildvine, Blossom, Blossom, Wildvine, Rootguard, Canopy],
    [Rootguard, Wildvine, Blossom, Thorn, Thorn, Blossom, Wildvine, Rootguard],
    [Wildvine, Canopy, Rootguard, Blossom, Blossom, Rootguard, Canopy, Wildvine],
    [Canopy, Wildvine, Canopy, Rootguard, Rootguard, Canopy, Wildvine, Canopy],
  ],

  // Stage 8: Overgrown Fortress
  [
    [Wildvine, Wildvine, Canopy, Canopy, Canopy, Canopy, Wildvine, Wildvine],
    [Canopy, Rootguard, Wildvine, Blossom, Blossom, Wildvine, Rootguard, Canopy],
    [Wildvine, Canopy, Rootguard, Wildvine, Wildvine, Rootguard, Canopy, Wildvine],
    [Canopy, Wildvine, Canopy, Rootguard, Rootguard, Canopy, Wildvine, Canopy],
    [Rootguard, Canopy, Wildvine, Blossom, Blossom, Wildvine, Canopy, Rootguard],
    [Wildvine, Canopy, Wildvine, Canopy, Canopy, Wildvine, Canopy, Wildvine],
  ],

  // Stage 9: Verdant Onslaught
  [
    [Wildvine, Canopy, Wildvine, Canopy, Canopy, Wildvine, Canopy, Wildvine],
    [Canopy, Wildvine, Canopy, Wildvine, Wildvine, Canopy, Wildvine, Canopy],
    [Wildvine, Canopy, Rootguard, Blossom, Blossom, Rootguard, Canopy, Wildvine],
    [Canopy, Rootguard, Wildvine, Canopy, Canopy, Wildvine, Rootguard, Canopy],
    [Wildvine, Canopy, Wildvine, Rootguard, Rootguard, Wildvine, Canopy, Wildvine],
    [Canopy, Wildvine, Canopy, Blossom, Blossom, Canopy, Wildvine, Canopy],
    [Wildvine, Wildvine, Wildvine, Canopy, Canopy, Wildvine, Wildvine, Wildvine],
  ],

  // Stage 10: Primordial Grove
  [
    [Wildvine, Wildvine, Wildvine, Wildvine, Wildvine, Wildvine, Wildvine, Wildvine],
    [Wildvine, Canopy, Canopy, Canopy, Canopy, Canopy, Canopy, Wildvine],
    [Canopy, Wildvine, Rootguard, Blossom, Blossom, Rootguard, Wildvine, Canopy],
    [Canopy, Rootguard, Wildvine, Canopy, Canopy, Wildvine, Rootguard, Canopy],
    [Wildvine, Blossom, Canopy, Wildvine, Wildvine, Canopy, Blossom, Wildvine],
    [Canopy, Wildvine, Rootguard, Blossom, Blossom, Rootguard, Wildvine, Canopy],
    [Wildvine, Canopy, Wildvine, Canopy, Canopy, Wildvine, Canopy, Wildvine],
    [Wildvine, Wildvine, Wildvine, Wildvine, Wildvine, Wildvine, Wildvine, Wildvine],
  ],
];
