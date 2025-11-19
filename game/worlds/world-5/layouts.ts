import { BrickType } from '../../../types';

const { Shade, Phantom, Wraith, Specter, Nightstalker, Voidwalker, ShadowLordBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Shadow's Veil
  [
    [Shade, Shade, Shade, Shade, Shade, Shade, Shade, Shade],
    [null, Phantom, null, Phantom, null, Phantom, null, Phantom],
    [Shade, Shade, Shade, Shade, Shade, Shade, Shade, Shade],
    [Phantom, null, Phantom, null, Phantom, null, Phantom, null],
  ],

  // Stage 2: Phantom Corridors
  [
    [Phantom, Wraith, Phantom, Wraith, Phantom, Wraith, Phantom, Wraith],
    [Shade, null, Shade, null, Shade, null, Shade, null],
    [Wraith, Phantom, Wraith, Phantom, Wraith, Phantom, Wraith, Phantom],
    [null, Shade, null, Shade, null, Shade, null, Shade],
  ],

  // Stage 3: Spectral Haunt
  [
    [Specter, Shade, Specter, Wraith, Wraith, Specter, Shade, Specter],
    [Wraith, Phantom, Wraith, Phantom, Phantom, Wraith, Phantom, Wraith],
    [Shade, Specter, Shade, Specter, Specter, Shade, Specter, Shade],
    [Phantom, Wraith, Phantom, Shade, Shade, Phantom, Wraith, Phantom],
  ],

  // Stage 4: Nightstalker's Domain
  [
    [Nightstalker, Specter, Wraith, Specter, Specter, Wraith, Specter, Nightstalker],
    [Wraith, Phantom, Shade, Voidwalker, Voidwalker, Shade, Phantom, Wraith],
    [Specter, Shade, Phantom, Wraith, Wraith, Phantom, Shade, Specter],
    [Nightstalker, Wraith, Specter, Shade, Shade, Specter, Wraith, Nightstalker],
    [Voidwalker, Phantom, Shade, Phantom, Phantom, Shade, Phantom, Voidwalker],
  ],

  // Stage 5: Shadow Lord's Throne
  [
    [null, null, null, ShadowLordBoss, null, null, null],
    [Voidwalker, null, Nightstalker, null, Nightstalker, null, Voidwalker],
    [Specter, Wraith, Specter, null, Specter, Wraith, Specter],
    [null, Phantom, null, Shade, null, Phantom, null],
    [Shade, null, Phantom, null, Phantom, null, Shade],
  ],
];
