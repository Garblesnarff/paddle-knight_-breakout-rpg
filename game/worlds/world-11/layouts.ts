import { BrickType } from '../../../types';

const { Snowflake, Icicle, Blizzard, Frostbite, Glacial, Permafrost, IceQueenBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: First Frost
  [
    [Snowflake, Snowflake, Snowflake, Snowflake, Snowflake, Snowflake, Snowflake, Snowflake],
    [null, Icicle, null, Icicle, null, Icicle, null, Icicle],
    [Snowflake, Snowflake, Snowflake, Snowflake, Snowflake, Snowflake, Snowflake, Snowflake],
    [Icicle, null, Icicle, null, Icicle, null, Icicle, null],
  ],

  // Stage 2: Blizzard Wall
  [
    [Blizzard, Icicle, Snowflake, Icicle, Icicle, Snowflake, Icicle, Blizzard],
    [Icicle, Blizzard, Icicle, Snowflake, Snowflake, Icicle, Blizzard, Icicle],
    [Snowflake, Icicle, Blizzard, Icicle, Icicle, Blizzard, Icicle, Snowflake],
    [Blizzard, Snowflake, Icicle, Blizzard, Blizzard, Icicle, Snowflake, Blizzard],
  ],

  // Stage 3: Frostbite Halls
  [
    [Frostbite, Blizzard, Icicle, Blizzard, Blizzard, Icicle, Blizzard, Frostbite],
    [Blizzard, Snowflake, Frostbite, Icicle, Icicle, Frostbite, Snowflake, Blizzard],
    [Icicle, Frostbite, Snowflake, Blizzard, Blizzard, Snowflake, Frostbite, Icicle],
    [Frostbite, Icicle, Blizzard, Snowflake, Snowflake, Blizzard, Icicle, Frostbite],
  ],

  // Stage 4: Glacial Fortress
  [
    [Glacial, Frostbite, Permafrost, Blizzard, Blizzard, Permafrost, Frostbite, Glacial],
    [Frostbite, Icicle, Snowflake, Glacial, Glacial, Snowflake, Icicle, Frostbite],
    [Permafrost, Blizzard, Glacial, Frostbite, Frostbite, Glacial, Blizzard, Permafrost],
    [Blizzard, Snowflake, Frostbite, Icicle, Icicle, Frostbite, Snowflake, Blizzard],
    [Glacial, Permafrost, Blizzard, Snowflake, Snowflake, Blizzard, Permafrost, Glacial],
  ],

  // Stage 5: Ice Queen's Throne
  [
    [null, null, null, IceQueenBoss, null, null, null],
    [Permafrost, null, Glacial, null, Glacial, null, Permafrost],
    [Glacial, Permafrost, Frostbite, null, Frostbite, Permafrost, Glacial],
    [Frostbite, Blizzard, Icicle, Glacial, Glacial, Icicle, Blizzard, Frostbite],
    [Icicle, Snowflake, Blizzard, null, null, Blizzard, Snowflake, Icicle],
  ],

  // Stage 6: Permafrost Expanse
  [
    [Permafrost, Glacial, Frostbite, Blizzard, Blizzard, Frostbite, Glacial, Permafrost],
    [Glacial, Frostbite, Permafrost, Icicle, Icicle, Permafrost, Frostbite, Glacial],
    [Frostbite, Blizzard, Icicle, Snowflake, Snowflake, Icicle, Blizzard, Frostbite],
    [Blizzard, Icicle, Snowflake, Frostbite, Frostbite, Snowflake, Icicle, Blizzard],
    [Permafrost, Glacial, Frostbite, Blizzard, Blizzard, Frostbite, Glacial, Permafrost],
  ],

  // Stage 7: Glacial Prison
  [
    [Glacial, Permafrost, Glacial, Permafrost, Permafrost, Glacial, Permafrost, Glacial],
    [Permafrost, Glacial, Frostbite, Glacial, Glacial, Frostbite, Glacial, Permafrost],
    [Glacial, Frostbite, Permafrost, Blizzard, Blizzard, Permafrost, Frostbite, Glacial],
    [Frostbite, Permafrost, Blizzard, Icicle, Icicle, Blizzard, Permafrost, Frostbite],
    [Permafrost, Glacial, Frostbite, Blizzard, Blizzard, Frostbite, Glacial, Permafrost],
    [Glacial, Permafrost, Glacial, Frostbite, Frostbite, Glacial, Permafrost, Glacial],
  ],

  // Stage 8: Frozen Catacombs
  [
    [Permafrost, Permafrost, Glacial, Glacial, Glacial, Glacial, Permafrost, Permafrost],
    [Glacial, Frostbite, Permafrost, Blizzard, Blizzard, Permafrost, Frostbite, Glacial],
    [Permafrost, Glacial, Frostbite, Permafrost, Permafrost, Frostbite, Glacial, Permafrost],
    [Glacial, Permafrost, Glacial, Frostbite, Frostbite, Glacial, Permafrost, Glacial],
    [Frostbite, Glacial, Permafrost, Blizzard, Blizzard, Permafrost, Glacial, Frostbite],
    [Permafrost, Glacial, Permafrost, Glacial, Glacial, Permafrost, Glacial, Permafrost],
  ],

  // Stage 9: Eternal Winter
  [
    [Permafrost, Glacial, Permafrost, Glacial, Glacial, Permafrost, Glacial, Permafrost],
    [Glacial, Permafrost, Glacial, Permafrost, Permafrost, Glacial, Permafrost, Glacial],
    [Permafrost, Glacial, Frostbite, Blizzard, Blizzard, Frostbite, Glacial, Permafrost],
    [Glacial, Frostbite, Permafrost, Glacial, Glacial, Permafrost, Frostbite, Glacial],
    [Permafrost, Glacial, Permafrost, Frostbite, Frostbite, Permafrost, Glacial, Permafrost],
    [Glacial, Permafrost, Glacial, Blizzard, Blizzard, Glacial, Permafrost, Glacial],
    [Permafrost, Permafrost, Permafrost, Glacial, Glacial, Permafrost, Permafrost, Permafrost],
  ],

  // Stage 10: Absolute Zero
  [
    [Permafrost, Permafrost, Permafrost, Permafrost, Permafrost, Permafrost, Permafrost, Permafrost],
    [Permafrost, Glacial, Glacial, Glacial, Glacial, Glacial, Glacial, Permafrost],
    [Glacial, Permafrost, Frostbite, Blizzard, Blizzard, Frostbite, Permafrost, Glacial],
    [Glacial, Frostbite, Permafrost, Glacial, Glacial, Permafrost, Frostbite, Glacial],
    [Permafrost, Blizzard, Glacial, Permafrost, Permafrost, Glacial, Blizzard, Permafrost],
    [Glacial, Permafrost, Frostbite, Blizzard, Blizzard, Frostbite, Permafrost, Glacial],
    [Permafrost, Glacial, Permafrost, Glacial, Glacial, Permafrost, Glacial, Permafrost],
    [Permafrost, Permafrost, Permafrost, Permafrost, Permafrost, Permafrost, Permafrost, Permafrost],
  ],
];
