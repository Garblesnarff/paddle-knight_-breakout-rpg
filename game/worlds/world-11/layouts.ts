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
];
