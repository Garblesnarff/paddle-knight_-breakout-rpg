import { BrickType } from '../../../types';

const { Wisp, Dreamwalker, Illusion, Phantasm, Mirage, Reverie, DreamLordBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Whisp

ering Meadows
  [
    [Wisp, Wisp, Wisp, Wisp, Wisp, Wisp, Wisp, Wisp],
    [null, Dreamwalker, null, Dreamwalker, null, Dreamwalker, null, Dreamwalker],
    [Wisp, Wisp, Wisp, Wisp, Wisp, Wisp, Wisp, Wisp],
    [Dreamwalker, null, Dreamwalker, null, Dreamwalker, null, Dreamwalker, null],
  ],

  // Stage 2: Illusory Path
  [
    [Illusion, Dreamwalker, Wisp, Dreamwalker, Dreamwalker, Wisp, Dreamwalker, Illusion],
    [Dreamwalker, Illusion, Dreamwalker, Wisp, Wisp, Dreamwalker, Illusion, Dreamwalker],
    [Wisp, Dreamwalker, Illusion, Dreamwalker, Dreamwalker, Illusion, Dreamwalker, Wisp],
    [Illusion, Wisp, Dreamwalker, Illusion, Illusion, Dreamwalker, Wisp, Illusion],
  ],

  // Stage 3: Phantasmal Realm
  [
    [Phantasm, Illusion, Dreamwalker, Illusion, Illusion, Dreamwalker, Illusion, Phantasm],
    [Illusion, Wisp, Phantasm, Dreamwalker, Dreamwalker, Phantasm, Wisp, Illusion],
    [Dreamwalker, Phantasm, Wisp, Illusion, Illusion, Wisp, Phantasm, Dreamwalker],
    [Phantasm, Dreamwalker, Illusion, Wisp, Wisp, Illusion, Dreamwalker, Phantasm],
  ],

  // Stage 4: Reverie Palace
  [
    [Reverie, Phantasm, Mirage, Illusion, Illusion, Mirage, Phantasm, Reverie],
    [Phantasm, Dreamwalker, Wisp, Reverie, Reverie, Wisp, Dreamwalker, Phantasm],
    [Mirage, Illusion, Reverie, Phantasm, Phantasm, Reverie, Illusion, Mirage],
    [Illusion, Wisp, Phantasm, Dreamwalker, Dreamwalker, Phantasm, Wisp, Illusion],
    [Reverie, Mirage, Illusion, Wisp, Wisp, Illusion, Mirage, Reverie],
  ],

  // Stage 5: Dream Lord's Sanctuary
  [
    [null, null, null, DreamLordBoss, null, null, null],
    [Reverie, null, Mirage, null, Mirage, null, Reverie],
    [Mirage, Reverie, Phantasm, null, Phantasm, Reverie, Mirage],
    [Phantasm, Illusion, Dreamwalker, Reverie, Reverie, Dreamwalker, Illusion, Phantasm],
    [Dreamwalker, Wisp, Illusion, null, null, Illusion, Wisp, Dreamwalker],
  ],

  // Stage 6: Mirage Labyrinth
  [
    [Mirage, Phantasm, Reverie, Illusion, Illusion, Reverie, Phantasm, Mirage],
    [Phantasm, Illusion, Mirage, Dreamwalker, Dreamwalker, Mirage, Illusion, Phantasm],
    [Reverie, Mirage, Phantasm, Illusion, Illusion, Phantasm, Mirage, Reverie],
    [Illusion, Dreamwalker, Reverie, Phantasm, Phantasm, Reverie, Dreamwalker, Illusion],
    [Mirage, Reverie, Illusion, Phantasm, Phantasm, Illusion, Reverie, Mirage],
  ],

  // Stage 7: Nightmare Cascade
  [
    [Reverie, Mirage, Phantasm, Reverie, Reverie, Phantasm, Mirage, Reverie],
    [Mirage, Reverie, Illusion, Phantasm, Phantasm, Illusion, Reverie, Mirage],
    [Phantasm, Illusion, Reverie, Mirage, Mirage, Reverie, Illusion, Phantasm],
    [Illusion, Phantasm, Mirage, Dreamwalker, Dreamwalker, Mirage, Phantasm, Illusion],
    [Reverie, Mirage, Phantasm, Illusion, Illusion, Phantasm, Mirage, Reverie],
    [Mirage, Phantasm, Reverie, Mirage, Mirage, Reverie, Phantasm, Mirage],
  ],

  // Stage 8: Ethereal Nightmare
  [
    [Reverie, Reverie, Mirage, Phantasm, Phantasm, Mirage, Reverie, Reverie],
    [Mirage, Reverie, Reverie, Mirage, Mirage, Reverie, Reverie, Mirage],
    [Phantasm, Mirage, Reverie, Phantasm, Phantasm, Reverie, Mirage, Phantasm],
    [Reverie, Phantasm, Mirage, Reverie, Reverie, Mirage, Phantasm, Reverie],
    [Mirage, Reverie, Phantasm, Mirage, Mirage, Phantasm, Reverie, Mirage],
    [Phantasm, Mirage, Reverie, Illusion, Illusion, Reverie, Mirage, Phantasm],
    [Reverie, Phantasm, Mirage, Reverie, Reverie, Mirage, Phantasm, Reverie],
  ],

  // Stage 9: Void of Reveries
  [
    [Reverie, Reverie, Reverie, Mirage, Mirage, Reverie, Reverie, Reverie],
    [Mirage, Reverie, Phantasm, Reverie, Reverie, Phantasm, Reverie, Mirage],
    [Reverie, Mirage, Reverie, Phantasm, Phantasm, Reverie, Mirage, Reverie],
    [Phantasm, Reverie, Mirage, Reverie, Reverie, Mirage, Reverie, Phantasm],
    [Reverie, Phantasm, Reverie, Mirage, Mirage, Reverie, Phantasm, Reverie],
    [Mirage, Reverie, Reverie, Phantasm, Phantasm, Reverie, Reverie, Mirage],
    [Reverie, Mirage, Phantasm, Reverie, Reverie, Phantasm, Mirage, Reverie],
  ],

  // Stage 10: Omega Dreamscape
  [
    [Reverie, Reverie, Reverie, Reverie, Reverie, Reverie, Reverie, Reverie],
    [Reverie, Mirage, Reverie, Mirage, Mirage, Reverie, Mirage, Reverie],
    [Mirage, Reverie, Reverie, Phantasm, Phantasm, Reverie, Reverie, Mirage],
    [Reverie, Reverie, Mirage, Reverie, Reverie, Mirage, Reverie, Reverie],
    [Mirage, Phantasm, Reverie, Mirage, Mirage, Reverie, Phantasm, Mirage],
    [Reverie, Mirage, Reverie, Reverie, Reverie, Reverie, Mirage, Reverie],
    [Phantasm, Reverie, Mirage, Reverie, Reverie, Mirage, Reverie, Phantasm],
    [Reverie, Reverie, Reverie, Mirage, Mirage, Reverie, Reverie, Reverie],
  ],
];
