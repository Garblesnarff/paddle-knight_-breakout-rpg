import { BrickType } from '../../../types';

const { Breeze, Gust, Tempest, Thunder, Hurricane, Cyclone, StormKingBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Gentle Winds
  [
    [Breeze, Breeze, Breeze, Breeze, Breeze, Breeze, Breeze, Breeze],
    [null, Gust, null, Gust, null, Gust, null, Gust],
    [Breeze, Breeze, Breeze, Breeze, Breeze, Breeze, Breeze, Breeze],
    [Gust, null, Gust, null, Gust, null, Gust, null],
  ],

  // Stage 2: Rising Storm
  [
    [Tempest, Gust, Breeze, Gust, Gust, Breeze, Gust, Tempest],
    [Gust, Tempest, Gust, Breeze, Breeze, Gust, Tempest, Gust],
    [Breeze, Gust, Tempest, Gust, Gust, Tempest, Gust, Breeze],
    [Tempest, Breeze, Gust, Tempest, Tempest, Gust, Breeze, Tempest],
  ],

  // Stage 3: Thunder Clash
  [
    [Thunder, Tempest, Gust, Tempest, Tempest, Gust, Tempest, Thunder],
    [Tempest, Breeze, Thunder, Gust, Gust, Thunder, Breeze, Tempest],
    [Gust, Thunder, Breeze, Tempest, Tempest, Breeze, Thunder, Gust],
    [Thunder, Gust, Tempest, Breeze, Breeze, Tempest, Gust, Thunder],
  ],

  // Stage 4: Hurricane Force
  [
    [Hurricane, Thunder, Cyclone, Tempest, Tempest, Cyclone, Thunder, Hurricane],
    [Thunder, Gust, Breeze, Hurricane, Hurricane, Breeze, Gust, Thunder],
    [Cyclone, Tempest, Hurricane, Thunder, Thunder, Hurricane, Tempest, Cyclone],
    [Tempest, Breeze, Thunder, Gust, Gust, Thunder, Breeze, Tempest],
    [Hurricane, Cyclone, Tempest, Breeze, Breeze, Tempest, Cyclone, Hurricane],
  ],

  // Stage 5: Storm King's Peak
  [
    [null, null, null, StormKingBoss, null, null, null],
    [Cyclone, null, Hurricane, null, Hurricane, null, Cyclone],
    [Hurricane, Cyclone, Thunder, null, Thunder, Cyclone, Hurricane],
    [Thunder, Tempest, Gust, Hurricane, Hurricane, Gust, Tempest, Thunder],
    [Gust, Breeze, Tempest, null, null, Tempest, Breeze, Gust],
  ],

  // Stage 6: Cyclone Surge
  [
    [Cyclone, Hurricane, Thunder, Tempest, Tempest, Thunder, Hurricane, Cyclone],
    [Hurricane, Thunder, Cyclone, Gust, Gust, Cyclone, Thunder, Hurricane],
    [Thunder, Tempest, Gust, Breeze, Breeze, Gust, Tempest, Thunder],
    [Tempest, Gust, Breeze, Thunder, Thunder, Breeze, Gust, Tempest],
    [Cyclone, Hurricane, Thunder, Tempest, Tempest, Thunder, Hurricane, Cyclone],
  ],

  // Stage 7: Hurricane Wall
  [
    [Hurricane, Cyclone, Hurricane, Cyclone, Cyclone, Hurricane, Cyclone, Hurricane],
    [Cyclone, Hurricane, Thunder, Hurricane, Hurricane, Thunder, Hurricane, Cyclone],
    [Hurricane, Thunder, Cyclone, Tempest, Tempest, Cyclone, Thunder, Hurricane],
    [Thunder, Cyclone, Tempest, Gust, Gust, Tempest, Cyclone, Thunder],
    [Cyclone, Hurricane, Thunder, Tempest, Tempest, Thunder, Hurricane, Cyclone],
    [Hurricane, Cyclone, Hurricane, Thunder, Thunder, Hurricane, Cyclone, Hurricane],
  ],

  // Stage 8: Tempest Fury
  [
    [Cyclone, Cyclone, Hurricane, Hurricane, Hurricane, Hurricane, Cyclone, Cyclone],
    [Hurricane, Thunder, Cyclone, Tempest, Tempest, Cyclone, Thunder, Hurricane],
    [Cyclone, Hurricane, Thunder, Cyclone, Cyclone, Thunder, Hurricane, Cyclone],
    [Hurricane, Cyclone, Hurricane, Thunder, Thunder, Hurricane, Cyclone, Hurricane],
    [Thunder, Hurricane, Cyclone, Tempest, Tempest, Cyclone, Hurricane, Thunder],
    [Cyclone, Hurricane, Cyclone, Hurricane, Hurricane, Cyclone, Hurricane, Cyclone],
  ],

  // Stage 9: Maelstrom
  [
    [Cyclone, Hurricane, Cyclone, Hurricane, Hurricane, Cyclone, Hurricane, Cyclone],
    [Hurricane, Cyclone, Hurricane, Cyclone, Cyclone, Hurricane, Cyclone, Hurricane],
    [Cyclone, Hurricane, Thunder, Tempest, Tempest, Thunder, Hurricane, Cyclone],
    [Hurricane, Thunder, Cyclone, Hurricane, Hurricane, Cyclone, Thunder, Hurricane],
    [Cyclone, Hurricane, Cyclone, Thunder, Thunder, Cyclone, Hurricane, Cyclone],
    [Hurricane, Cyclone, Hurricane, Tempest, Tempest, Hurricane, Cyclone, Hurricane],
    [Cyclone, Cyclone, Cyclone, Hurricane, Hurricane, Cyclone, Cyclone, Cyclone],
  ],

  // Stage 10: Eye of the Storm
  [
    [Cyclone, Cyclone, Cyclone, Cyclone, Cyclone, Cyclone, Cyclone, Cyclone],
    [Cyclone, Hurricane, Hurricane, Hurricane, Hurricane, Hurricane, Hurricane, Cyclone],
    [Hurricane, Cyclone, Thunder, Tempest, Tempest, Thunder, Cyclone, Hurricane],
    [Hurricane, Thunder, Cyclone, Hurricane, Hurricane, Cyclone, Thunder, Hurricane],
    [Cyclone, Tempest, Hurricane, Cyclone, Cyclone, Hurricane, Tempest, Cyclone],
    [Hurricane, Cyclone, Thunder, Tempest, Tempest, Thunder, Cyclone, Hurricane],
    [Cyclone, Hurricane, Cyclone, Hurricane, Hurricane, Cyclone, Hurricane, Cyclone],
    [Cyclone, Cyclone, Cyclone, Cyclone, Cyclone, Cyclone, Cyclone, Cyclone],
  ],
];
