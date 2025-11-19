import { BrickType } from '../../../types';

const { RuneStone, AncientGolem, Sphinx, Anubis, AncientMummy, Hieroglyph, AncientOneBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Crumbling Entrance
  [
    [RuneStone, RuneStone, RuneStone, RuneStone, RuneStone, RuneStone],
    [null, AncientGolem, null, AncientGolem, null, AncientGolem],
    [RuneStone, RuneStone, RuneStone, RuneStone, RuneStone, RuneStone],
    [AncientGolem, null, AncientGolem, null, AncientGolem, null],
  ],

  // Stage 2: Hall of Columns
  [
    [AncientGolem, RuneStone, AncientGolem, RuneStone, AncientGolem, RuneStone],
    [RuneStone, AncientGolem, RuneStone, AncientGolem, RuneStone, AncientGolem],
    [AncientGolem, RuneStone, AncientGolem, RuneStone, AncientGolem, RuneStone],
    [RuneStone, AncientGolem, RuneStone, AncientGolem, RuneStone, AncientGolem],
  ],

  // Stage 3: Sphinx's Riddle
  [
    [Sphinx, AncientGolem, RuneStone, AncientGolem, RuneStone, Sphinx],
    [AncientGolem, Sphinx, AncientGolem, RuneStone, Sphinx, AncientGolem],
    [RuneStone, AncientGolem, Sphinx, Sphinx, AncientGolem, RuneStone],
    [Sphinx, RuneStone, AncientGolem, AncientGolem, RuneStone, Sphinx],
  ],

  // Stage 4: Guardian of the Dead
  [
    [Anubis, Sphinx, AncientGolem, AncientGolem, Sphinx, Anubis],
    [Sphinx, AncientGolem, Anubis, Anubis, AncientGolem, Sphinx],
    [AncientGolem, Anubis, Sphinx, Sphinx, Anubis, AncientGolem],
    [Anubis, Sphinx, AncientGolem, AncientGolem, Sphinx, Anubis],
    [Sphinx, AncientGolem, RuneStone, RuneStone, AncientGolem, Sphinx],
  ],

  // Stage 5: Mummy's Tomb
  [
    [AncientMummy, Anubis, Sphinx, Sphinx, Anubis, AncientMummy],
    [Anubis, AncientMummy, AncientGolem, AncientGolem, AncientMummy, Anubis],
    [Sphinx, AncientGolem, AncientMummy, AncientMummy, AncientGolem, Sphinx],
    [Anubis, AncientMummy, Sphinx, Sphinx, AncientMummy, Anubis],
    [AncientMummy, Sphinx, Anubis, Anubis, Sphinx, AncientMummy],
  ],

  // Stage 6: Hieroglyphic Chamber
  [
    [Hieroglyph, AncientMummy, Anubis, Anubis, AncientMummy, Hieroglyph],
    [AncientMummy, Hieroglyph, Sphinx, Sphinx, Hieroglyph, AncientMummy],
    [Anubis, Sphinx, Hieroglyph, Hieroglyph, Sphinx, Anubis],
    [AncientMummy, Hieroglyph, Anubis, Anubis, Hieroglyph, AncientMummy],
    [Hieroglyph, Anubis, AncientMummy, AncientMummy, Anubis, Hieroglyph],
  ],

  // Stage 7: Cursed Corridor
  [
    [Hieroglyph, AncientMummy, Anubis, Sphinx, Anubis, AncientMummy, Hieroglyph],
    [AncientMummy, Hieroglyph, Sphinx, AncientGolem, Sphinx, Hieroglyph, AncientMummy],
    [Anubis, Sphinx, Hieroglyph, AncientMummy, Hieroglyph, Sphinx, Anubis],
    [Sphinx, AncientGolem, AncientMummy, Anubis, AncientMummy, AncientGolem, Sphinx],
    [Hieroglyph, AncientMummy, Anubis, Sphinx, Anubis, AncientMummy, Hieroglyph],
  ],

  // Stage 8: Sacred Sanctuary
  [
    [Hieroglyph, Hieroglyph, AncientMummy, Anubis, AncientMummy, Hieroglyph, Hieroglyph],
    [AncientMummy, Anubis, Hieroglyph, Sphinx, Hieroglyph, Anubis, AncientMummy],
    [Anubis, Hieroglyph, AncientMummy, Hieroglyph, AncientMummy, Hieroglyph, Anubis],
    [Hieroglyph, Sphinx, Anubis, AncientMummy, Anubis, Sphinx, Hieroglyph],
    [AncientMummy, Anubis, Hieroglyph, Hieroglyph, Hieroglyph, Anubis, AncientMummy],
    [Hieroglyph, AncientMummy, Anubis, Sphinx, Anubis, AncientMummy, Hieroglyph],
  ],

  // Stage 9: Pharaoh's Treasury
  [
    [Hieroglyph, Hieroglyph, AncientMummy, AncientMummy, AncientMummy, Hieroglyph, Hieroglyph],
    [AncientMummy, Anubis, Hieroglyph, Anubis, Hieroglyph, Anubis, AncientMummy],
    [Hieroglyph, AncientMummy, Anubis, Hieroglyph, Anubis, AncientMummy, Hieroglyph],
    [Anubis, Hieroglyph, AncientMummy, Anubis, AncientMummy, Hieroglyph, Anubis],
    [AncientMummy, Anubis, Hieroglyph, AncientMummy, Hieroglyph, Anubis, AncientMummy],
    [Hieroglyph, AncientMummy, Anubis, Hieroglyph, Anubis, AncientMummy, Hieroglyph],
  ],

  // Stage 10: Temple of Eternity
  [
    [Hieroglyph, AncientMummy, Anubis, Sphinx, Anubis, AncientMummy, Hieroglyph],
    [AncientMummy, Hieroglyph, AncientMummy, Anubis, AncientMummy, Hieroglyph, AncientMummy],
    [Anubis, AncientMummy, Hieroglyph, AncientMummy, Hieroglyph, AncientMummy, Anubis],
    [Sphinx, Anubis, AncientMummy, Hieroglyph, AncientMummy, Anubis, Sphinx],
    [Anubis, Hieroglyph, AncientMummy, Anubis, AncientMummy, Hieroglyph, Anubis],
    [AncientMummy, Anubis, Hieroglyph, AncientMummy, Hieroglyph, Anubis, AncientMummy],
    [Hieroglyph, AncientMummy, Anubis, Sphinx, Anubis, AncientMummy, Hieroglyph],
  ],

  // Stage 11: Pyramid Interior
  [
    [Hieroglyph, Hieroglyph, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, Hieroglyph, Hieroglyph],
    [AncientMummy, Anubis, AncientMummy, Anubis, Anubis, AncientMummy, Anubis, AncientMummy],
    [Hieroglyph, AncientMummy, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, AncientMummy, Hieroglyph],
    [Anubis, Hieroglyph, AncientMummy, Hieroglyph, Hieroglyph, AncientMummy, Hieroglyph, Anubis],
    [AncientMummy, Anubis, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, Anubis, AncientMummy],
    [Hieroglyph, AncientMummy, Hieroglyph, Anubis, Anubis, Hieroglyph, AncientMummy, Hieroglyph],
  ],

  // Stage 12: Sarcophagus Hall
  [
    [Hieroglyph, AncientMummy, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, AncientMummy, Hieroglyph],
    [AncientMummy, Hieroglyph, Anubis, Hieroglyph, Hieroglyph, Anubis, Hieroglyph, AncientMummy],
    [Anubis, AncientMummy, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, AncientMummy, Anubis],
    [Hieroglyph, Anubis, AncientMummy, Hieroglyph, Hieroglyph, AncientMummy, Anubis, Hieroglyph],
    [AncientMummy, Hieroglyph, Anubis, AncientMummy, AncientMummy, Anubis, Hieroglyph, AncientMummy],
    [Hieroglyph, AncientMummy, Hieroglyph, Anubis, Anubis, Hieroglyph, AncientMummy, Hieroglyph],
    [AncientMummy, Hieroglyph, AncientMummy, Hieroglyph, Hieroglyph, AncientMummy, Hieroglyph, AncientMummy],
  ],

  // Stage 13: Chamber of Secrets
  [
    [Hieroglyph, Hieroglyph, AncientMummy, Anubis, Anubis, AncientMummy, Hieroglyph, Hieroglyph],
    [AncientMummy, Hieroglyph, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, Hieroglyph, AncientMummy],
    [Anubis, AncientMummy, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, AncientMummy, Anubis],
    [AncientMummy, Anubis, AncientMummy, Hieroglyph, Hieroglyph, AncientMummy, Anubis, AncientMummy],
    [Hieroglyph, AncientMummy, Anubis, Hieroglyph, Hieroglyph, Anubis, AncientMummy, Hieroglyph],
    [AncientMummy, Hieroglyph, AncientMummy, Anubis, Anubis, AncientMummy, Hieroglyph, AncientMummy],
    [AncientMummy, Hieroglyph, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, Hieroglyph, AncientMummy],
    [Hieroglyph, AncientMummy, Anubis, Hieroglyph, Hieroglyph, Anubis, AncientMummy, Hieroglyph],
  ],

  // Stage 14: Gates of the Underworld
  [
    [Hieroglyph, Hieroglyph, Hieroglyph, Hieroglyph, Hieroglyph, Hieroglyph, Hieroglyph, Hieroglyph],
    [AncientMummy, Hieroglyph, AncientMummy, Anubis, Anubis, AncientMummy, Hieroglyph, AncientMummy],
    [Hieroglyph, AncientMummy, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, AncientMummy, Hieroglyph],
    [Anubis, Hieroglyph, Anubis, Hieroglyph, Hieroglyph, Anubis, Hieroglyph, Anubis],
    [Hieroglyph, AncientMummy, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, AncientMummy, Hieroglyph],
    [AncientMummy, Hieroglyph, Anubis, Hieroglyph, Hieroglyph, Anubis, Hieroglyph, AncientMummy],
    [Hieroglyph, AncientMummy, Hieroglyph, AncientMummy, AncientMummy, Hieroglyph, AncientMummy, Hieroglyph],
    [Hieroglyph, Hieroglyph, Anubis, Hieroglyph, Hieroglyph, Anubis, Hieroglyph, Hieroglyph],
  ],

  // Stage 15: The Ancient One Awakens
  [
    [null, null, null, AncientOneBoss, AncientOneBoss, null, null, null],
    [Hieroglyph, null, Hieroglyph, null, null, Hieroglyph, null, Hieroglyph],
    [null, AncientMummy, null, Hieroglyph, Hieroglyph, null, AncientMummy, null],
    [Hieroglyph, null, Anubis, AncientMummy, AncientMummy, Anubis, null, Hieroglyph],
    [AncientMummy, Anubis, null, Hieroglyph, Hieroglyph, null, Anubis, AncientMummy],
    [Anubis, AncientMummy, Hieroglyph, null, null, Hieroglyph, AncientMummy, Anubis],
    [Hieroglyph, Anubis, AncientMummy, Hieroglyph, Hieroglyph, AncientMummy, Anubis, Hieroglyph],
  ],
];
