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
];
