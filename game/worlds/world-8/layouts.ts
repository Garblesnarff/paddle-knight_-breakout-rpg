import { BrickType } from '../../../types';

const { Starling, Comet, Nebula, Pulsar, Asteroid, Supernova, CosmosGuardianBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Starfield
  [
    [Starling, Starling, Starling, Starling, Starling, Starling, Starling, Starling],
    [null, Comet, null, Comet, null, Comet, null, Comet],
    [Starling, Starling, Starling, Starling, Starling, Starling, Starling, Starling],
    [Comet, null, Comet, null, Comet, null, Comet, null],
  ],

  // Stage 2: Nebula Clouds
  [
    [Nebula, Starling, Comet, Starling, Starling, Comet, Starling, Nebula],
    [Comet, Nebula, Starling, Comet, Comet, Starling, Nebula, Comet],
    [Starling, Comet, Nebula, Starling, Starling, Nebula, Comet, Starling],
    [Nebula, Starling, Comet, Nebula, Nebula, Comet, Starling, Nebula],
  ],

  // Stage 3: Pulsar Rhythm
  [
    [Pulsar, Nebula, Comet, Nebula, Nebula, Comet, Nebula, Pulsar],
    [Nebula, Starling, Pulsar, Comet, Comet, Pulsar, Starling, Nebula],
    [Comet, Pulsar, Starling, Nebula, Nebula, Starling, Pulsar, Comet],
    [Pulsar, Comet, Nebula, Starling, Starling, Nebula, Comet, Pulsar],
  ],

  // Stage 4: Asteroid Belt
  [
    [Asteroid, Pulsar, Nebula, Supernova, Supernova, Nebula, Pulsar, Asteroid],
    [Pulsar, Comet, Starling, Nebula, Nebula, Starling, Comet, Pulsar],
    [Nebula, Starling, Asteroid, Pulsar, Pulsar, Asteroid, Starling, Nebula],
    [Supernova, Nebula, Pulsar, Comet, Comet, Pulsar, Nebula, Supernova],
    [Asteroid, Pulsar, Nebula, Starling, Starling, Nebula, Pulsar, Asteroid],
  ],

  // Stage 5: Cosmos Guardian's Observatory
  [
    [null, null, null, CosmosGuardianBoss, null, null, null],
    [Supernova, null, Asteroid, null, Asteroid, null, Supernova],
    [Pulsar, Asteroid, Nebula, Supernova, Supernova, Nebula, Asteroid, Pulsar],
    [Nebula, Comet, Starling, Pulsar, Pulsar, Starling, Comet, Nebula],
    [Comet, Starling, null, Nebula, Nebula, null, Starling, Comet],
  ],
];
