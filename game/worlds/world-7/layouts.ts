import { BrickType } from '../../../types';

const { Ember, Magma, Inferno, Pyroclast, Lavabeast, Ashen, VolcanoTitanBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Ember Fields
  [
    [Ember, Ember, Ember, Ember, Ember, Ember, Ember, Ember],
    [null, Magma, null, Magma, null, Magma, null, Magma],
    [Ember, Ember, Ember, Ember, Ember, Ember, Ember, Ember],
    [Magma, null, Magma, null, Magma, null, Magma, null],
  ],

  // Stage 2: Magma Rivers
  [
    [Magma, Inferno, Magma, Inferno, Inferno, Magma, Inferno, Magma],
    [Ember, Ember, Ember, Magma, Magma, Ember, Ember, Ember],
    [Inferno, Magma, Inferno, Ember, Ember, Inferno, Magma, Inferno],
    [Ember, Ember, Magma, Inferno, Inferno, Magma, Ember, Ember],
  ],

  // Stage 3: Pyroclastic Flow
  [
    [Pyroclast, Inferno, Magma, Inferno, Inferno, Magma, Inferno, Pyroclast],
    [Magma, Ember, Pyroclast, Magma, Magma, Pyroclast, Ember, Magma],
    [Inferno, Magma, Ember, Inferno, Inferno, Ember, Magma, Inferno],
    [Pyroclast, Ember, Magma, Ember, Ember, Magma, Ember, Pyroclast],
  ],

  // Stage 4: Lava Chamber
  [
    [Lavabeast, Pyroclast, Inferno, Ashen, Ashen, Inferno, Pyroclast, Lavabeast],
    [Pyroclast, Magma, Ember, Inferno, Inferno, Ember, Magma, Pyroclast],
    [Inferno, Ember, Lavabeast, Magma, Magma, Lavabeast, Ember, Inferno],
    [Ashen, Magma, Pyroclast, Ember, Ember, Pyroclast, Magma, Ashen],
    [Lavabeast, Inferno, Magma, Pyroclast, Pyroclast, Magma, Inferno, Lavabeast],
  ],

  // Stage 5: Volcano Titan's Core
  [
    [null, null, null, VolcanoTitanBoss, null, null, null],
    [Lavabeast, null, Ashen, null, Ashen, null, Lavabeast],
    [Pyroclast, Ashen, Inferno, null, Inferno, Ashen, Pyroclast],
    [Inferno, Magma, null, Ember, null, Magma, Inferno],
    [Magma, Ember, Pyroclast, null, Pyroclast, Ember, Magma],
  ],
];
