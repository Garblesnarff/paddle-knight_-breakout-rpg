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

  // Stage 6: Void Echoes
  [
    [Voidwalker, Nightstalker, Specter, Wraith, Wraith, Specter, Nightstalker, Voidwalker],
    [Nightstalker, Specter, Voidwalker, Phantom, Phantom, Voidwalker, Specter, Nightstalker],
    [Specter, Wraith, Phantom, Shade, Shade, Phantom, Wraith, Specter],
    [Wraith, Phantom, Shade, Specter, Specter, Shade, Phantom, Wraith],
    [Voidwalker, Nightstalker, Specter, Wraith, Wraith, Specter, Nightstalker, Voidwalker],
  ],

  // Stage 7: Spectral Maze
  [
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Specter, Wraith, Specter, Specter, Wraith, Specter, Voidwalker],
    [Specter, Wraith, Nightstalker, Phantom, Phantom, Nightstalker, Wraith, Specter],
    [Wraith, Specter, Phantom, Voidwalker, Voidwalker, Phantom, Specter, Wraith],
    [Nightstalker, Voidwalker, Specter, Wraith, Wraith, Specter, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Wraith, Specter, Specter, Wraith, Nightstalker, Voidwalker],
  ],

  // Stage 8: Nightstalker's Hunt
  [
    [Voidwalker, Voidwalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Voidwalker, Voidwalker],
    [Nightstalker, Specter, Voidwalker, Wraith, Wraith, Voidwalker, Specter, Nightstalker],
    [Voidwalker, Wraith, Specter, Nightstalker, Nightstalker, Specter, Wraith, Voidwalker],
    [Specter, Nightstalker, Wraith, Voidwalker, Voidwalker, Wraith, Nightstalker, Specter],
    [Wraith, Voidwalker, Nightstalker, Specter, Specter, Nightstalker, Voidwalker, Wraith],
    [Voidwalker, Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker, Voidwalker],
  ],

  // Stage 9: Voidwalker's Gauntlet
  [
    [Voidwalker, Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Specter, Wraith, Nightstalker, Nightstalker, Wraith, Specter, Voidwalker],
    [Nightstalker, Wraith, Specter, Voidwalker, Voidwalker, Specter, Wraith, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Specter, Specter, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Wraith, Wraith, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Voidwalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Voidwalker, Voidwalker],
  ],

  // Stage 10: Abyss of Shadows
  [
    [Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker],
    [Voidwalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Specter, Wraith, Wraith, Specter, Voidwalker, Nightstalker],
    [Nightstalker, Specter, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Specter, Nightstalker],
    [Voidwalker, Wraith, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Wraith, Voidwalker],
    [Nightstalker, Voidwalker, Specter, Wraith, Wraith, Specter, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker, Voidwalker],
    [Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker],
  ],

  // Stage 11: Eternal Night
  [
    [Voidwalker, Nightstalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Specter, Nightstalker, Nightstalker, Specter, Nightstalker, Voidwalker],
    [Voidwalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker],
    [Nightstalker, Voidwalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Specter, Voidwalker, Voidwalker, Specter, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker, Voidwalker],
  ],

  // Stage 12: Void Convergence
  [
    [Voidwalker, Voidwalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Voidwalker, Voidwalker],
    [Voidwalker, Nightstalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Specter, Specter, Nightstalker, Voidwalker, Nightstalker],
    [Nightstalker, Voidwalker, Specter, Voidwalker, Voidwalker, Specter, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Specter, Specter, Voidwalker, Nightstalker, Voidwalker],
    [Voidwalker, Voidwalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Voidwalker, Voidwalker],
  ],

  // Stage 13: Shadowfall
  [
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Voidwalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Voidwalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Specter, Specter, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Voidwalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Voidwalker, Voidwalker],
  ],

  // Stage 14: Oblivion's Edge
  [
    [Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker],
    [Voidwalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Voidwalker],
    [Voidwalker, Nightstalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker],
    [Voidwalker, Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker, Voidwalker],
    [Voidwalker, Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker, Voidwalker],
    [Voidwalker, Nightstalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker],
    [Voidwalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Nightstalker, Voidwalker],
    [Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker, Voidwalker],
  ],

  // Stage 15: The Shadow Lord Eternal
  [
    [Voidwalker, Voidwalker, ShadowLordBoss, ShadowLordBoss, Voidwalker, Voidwalker],
    [Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Specter, Specter, Nightstalker, Voidwalker],
    [Nightstalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Nightstalker],
    [Voidwalker, Nightstalker, Voidwalker, Voidwalker, Nightstalker, Voidwalker],
    [Voidwalker, Voidwalker, Nightstalker, Nightstalker, Voidwalker, Voidwalker],
  ],
];
