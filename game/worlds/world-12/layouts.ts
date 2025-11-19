import { BrickType } from '../../../types';

const { Sand, Dust, Mirage, Scarab, Mummy, Obelisk, PharaohBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Sandy Dunes
  [
    [Sand, Sand, Sand, Sand, Sand, Sand, Sand, Sand],
    [null, Dust, null, Dust, null, Dust, null, Dust],
    [Sand, Sand, Sand, Sand, Sand, Sand, Sand, Sand],
    [Dust, null, Dust, null, Dust, null, Dust, null],
  ],

  // Stage 2: Mirage Desert
  [
    [Mirage, Dust, Sand, Dust, Dust, Sand, Dust, Mirage],
    [Dust, Mirage, Dust, Sand, Sand, Dust, Mirage, Dust],
    [Sand, Dust, Mirage, Dust, Dust, Mirage, Dust, Sand],
    [Mirage, Sand, Dust, Mirage, Mirage, Dust, Sand, Mirage],
  ],

  // Stage 3: Scarab Swarm
  [
    [Scarab, Mirage, Dust, Mirage, Mirage, Dust, Mirage, Scarab],
    [Mirage, Sand, Scarab, Dust, Dust, Scarab, Sand, Mirage],
    [Dust, Scarab, Sand, Mirage, Mirage, Sand, Scarab, Dust],
    [Scarab, Dust, Mirage, Sand, Sand, Mirage, Dust, Scarab],
  ],

  // Stage 4: Ancient Tombs
  [
    [Mummy, Scarab, Obelisk, Mirage, Mirage, Obelisk, Scarab, Mummy],
    [Scarab, Dust, Sand, Mummy, Mummy, Sand, Dust, Scarab],
    [Obelisk, Mirage, Mummy, Scarab, Scarab, Mummy, Mirage, Obelisk],
    [Mirage, Sand, Scarab, Dust, Dust, Scarab, Sand, Mirage],
    [Mummy, Obelisk, Mirage, Sand, Sand, Mirage, Obelisk, Mummy],
  ],

  // Stage 5: Pharaoh's Tomb
  [
    [null, null, null, PharaohBoss, null, null, null],
    [Obelisk, null, Mummy, null, Mummy, null, Obelisk],
    [Mummy, Obelisk, Scarab, null, Scarab, Obelisk, Mummy],
    [Scarab, Mirage, Dust, Mummy, Mummy, Dust, Mirage, Scarab],
    [Dust, Sand, Mirage, null, null, Mirage, Sand, Dust],
  ],

  // Stage 6: Obelisk Rise
  [
    [Obelisk, Mummy, Scarab, Mirage, Mirage, Scarab, Mummy, Obelisk],
    [Mummy, Scarab, Obelisk, Dust, Dust, Obelisk, Scarab, Mummy],
    [Scarab, Mirage, Dust, Sand, Sand, Dust, Mirage, Scarab],
    [Mirage, Dust, Sand, Scarab, Scarab, Sand, Dust, Mirage],
    [Obelisk, Mummy, Scarab, Mirage, Mirage, Scarab, Mummy, Obelisk],
  ],

  // Stage 7: Mummy's Curse
  [
    [Mummy, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Mummy],
    [Obelisk, Mummy, Scarab, Mummy, Mummy, Scarab, Mummy, Obelisk],
    [Mummy, Scarab, Obelisk, Mirage, Mirage, Obelisk, Scarab, Mummy],
    [Scarab, Obelisk, Mirage, Dust, Dust, Mirage, Obelisk, Scarab],
    [Obelisk, Mummy, Scarab, Mirage, Mirage, Scarab, Mummy, Obelisk],
    [Mummy, Obelisk, Mummy, Scarab, Scarab, Mummy, Obelisk, Mummy],
  ],

  // Stage 8: Ancient Sanctum
  [
    [Obelisk, Obelisk, Mummy, Mummy, Mummy, Mummy, Obelisk, Obelisk],
    [Mummy, Scarab, Obelisk, Mirage, Mirage, Obelisk, Scarab, Mummy],
    [Obelisk, Mummy, Scarab, Obelisk, Obelisk, Scarab, Mummy, Obelisk],
    [Mummy, Obelisk, Mummy, Scarab, Scarab, Mummy, Obelisk, Mummy],
    [Scarab, Mummy, Obelisk, Mirage, Mirage, Obelisk, Mummy, Scarab],
    [Obelisk, Mummy, Obelisk, Mummy, Mummy, Obelisk, Mummy, Obelisk],
  ],

  // Stage 9: Desert Ruins
  [
    [Obelisk, Mummy, Obelisk, Mummy, Mummy, Obelisk, Mummy, Obelisk],
    [Mummy, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Mummy],
    [Obelisk, Mummy, Scarab, Mirage, Mirage, Scarab, Mummy, Obelisk],
    [Mummy, Scarab, Obelisk, Mummy, Mummy, Obelisk, Scarab, Mummy],
    [Obelisk, Mummy, Obelisk, Scarab, Scarab, Obelisk, Mummy, Obelisk],
    [Mummy, Obelisk, Mummy, Mirage, Mirage, Mummy, Obelisk, Mummy],
    [Obelisk, Obelisk, Obelisk, Mummy, Mummy, Obelisk, Obelisk, Obelisk],
  ],

  // Stage 10: Sandstorm Apocalypse
  [
    [Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk],
    [Obelisk, Mummy, Mummy, Mummy, Mummy, Mummy, Mummy, Obelisk],
    [Mummy, Obelisk, Scarab, Mirage, Mirage, Scarab, Obelisk, Mummy],
    [Mummy, Scarab, Obelisk, Mummy, Mummy, Obelisk, Scarab, Mummy],
    [Obelisk, Mirage, Mummy, Obelisk, Obelisk, Mummy, Mirage, Obelisk],
    [Mummy, Obelisk, Scarab, Mirage, Mirage, Scarab, Obelisk, Mummy],
    [Obelisk, Mummy, Obelisk, Mummy, Mummy, Obelisk, Mummy, Obelisk],
    [Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk],
  ],

  // Stage 11: Buried Empire
  [
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Obelisk, Mummy, Obelisk, Mummy, Mummy, Obelisk, Mummy, Obelisk],
    [Mummy, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Mummy],
    [Obelisk, Mummy, Obelisk, Scarab, Scarab, Obelisk, Mummy, Obelisk],
    [Mummy, Obelisk, Scarab, Mummy, Mummy, Scarab, Obelisk, Mummy],
    [Obelisk, Mummy, Obelisk, Mummy, Mummy, Obelisk, Mummy, Obelisk],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
  ],

  // Stage 12: Eternal Sands
  [
    [Obelisk, Obelisk, Obelisk, Mummy, Mummy, Obelisk, Obelisk, Obelisk],
    [Obelisk, Mummy, Obelisk, Obelisk, Obelisk, Obelisk, Mummy, Obelisk],
    [Mummy, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Mummy],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Mummy, Obelisk, Obelisk, Mummy, Mummy, Obelisk, Obelisk, Mummy],
    [Obelisk, Mummy, Obelisk, Obelisk, Obelisk, Obelisk, Mummy, Obelisk],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk],
  ],

  // Stage 13: Pyramid Depths
  [
    [Obelisk, Mummy, Obelisk, Obelisk, Obelisk, Obelisk, Mummy, Obelisk],
    [Mummy, Obelisk, Obelisk, Mummy, Mummy, Obelisk, Obelisk, Mummy],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Obelisk, Mummy, Obelisk, Obelisk, Obelisk, Obelisk, Mummy, Obelisk],
    [Mummy, Obelisk, Obelisk, Mummy, Mummy, Obelisk, Obelisk, Mummy],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Mummy, Obelisk, Obelisk, Mummy, Mummy, Obelisk, Obelisk, Mummy],
    [Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk],
  ],

  // Stage 14: Obelisk Colossus
  [
    [Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Obelisk, Mummy, Obelisk, Obelisk, Obelisk, Obelisk, Mummy, Obelisk],
    [Mummy, Obelisk, Obelisk, Mummy, Mummy, Obelisk, Obelisk, Mummy],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Obelisk, Mummy, Obelisk, Obelisk, Obelisk, Obelisk, Mummy, Obelisk],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk],
  ],

  // Stage 15: Pharaoh's Wrath
  [
    [Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk],
    [Obelisk, null, null, PharaohBoss, PharaohBoss, null, null, Obelisk],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Mummy, Obelisk, Obelisk, Mummy, Mummy, Obelisk, Obelisk, Mummy],
    [Obelisk, Obelisk, Mummy, Obelisk, Obelisk, Mummy, Obelisk, Obelisk],
    [Mummy, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Mummy],
    [Obelisk, Mummy, Obelisk, Obelisk, Obelisk, Obelisk, Mummy, Obelisk],
    [Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk, Obelisk],
  ],
];
