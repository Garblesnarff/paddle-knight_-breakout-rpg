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
];
