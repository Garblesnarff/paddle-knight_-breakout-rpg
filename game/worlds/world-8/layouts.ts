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

  // Stage 6: Stellar Collision
  [
    [Supernova, Asteroid, Pulsar, Nebula, Nebula, Pulsar, Asteroid, Supernova],
    [Asteroid, Pulsar, Supernova, Comet, Comet, Supernova, Pulsar, Asteroid],
    [Pulsar, Nebula, Comet, Starling, Starling, Comet, Nebula, Pulsar],
    [Nebula, Comet, Starling, Pulsar, Pulsar, Starling, Comet, Nebula],
    [Supernova, Asteroid, Pulsar, Nebula, Nebula, Pulsar, Asteroid, Supernova],
  ],

  // Stage 7: Supernova Surge
  [
    [Supernova, Asteroid, Supernova, Asteroid, Asteroid, Supernova, Asteroid, Supernova],
    [Asteroid, Supernova, Pulsar, Supernova, Supernova, Pulsar, Supernova, Asteroid],
    [Supernova, Pulsar, Asteroid, Nebula, Nebula, Asteroid, Pulsar, Supernova],
    [Pulsar, Asteroid, Nebula, Comet, Comet, Nebula, Asteroid, Pulsar],
    [Asteroid, Supernova, Pulsar, Nebula, Nebula, Pulsar, Supernova, Asteroid],
    [Supernova, Asteroid, Supernova, Pulsar, Pulsar, Supernova, Asteroid, Supernova],
  ],

  // Stage 8: Cosmic Tempest
  [
    [Supernova, Supernova, Asteroid, Asteroid, Asteroid, Asteroid, Supernova, Supernova],
    [Asteroid, Pulsar, Supernova, Nebula, Nebula, Supernova, Pulsar, Asteroid],
    [Supernova, Asteroid, Pulsar, Supernova, Supernova, Pulsar, Asteroid, Supernova],
    [Asteroid, Supernova, Asteroid, Pulsar, Pulsar, Asteroid, Supernova, Asteroid],
    [Pulsar, Asteroid, Supernova, Nebula, Nebula, Supernova, Asteroid, Pulsar],
    [Supernova, Asteroid, Supernova, Asteroid, Asteroid, Supernova, Asteroid, Supernova],
  ],

  // Stage 9: Asteroid Apocalypse
  [
    [Supernova, Asteroid, Supernova, Asteroid, Asteroid, Supernova, Asteroid, Supernova],
    [Asteroid, Supernova, Asteroid, Supernova, Supernova, Asteroid, Supernova, Asteroid],
    [Supernova, Asteroid, Pulsar, Nebula, Nebula, Pulsar, Asteroid, Supernova],
    [Asteroid, Pulsar, Supernova, Asteroid, Asteroid, Supernova, Pulsar, Asteroid],
    [Supernova, Asteroid, Supernova, Pulsar, Pulsar, Supernova, Asteroid, Supernova],
    [Asteroid, Supernova, Asteroid, Nebula, Nebula, Asteroid, Supernova, Asteroid],
    [Supernova, Supernova, Supernova, Asteroid, Asteroid, Supernova, Supernova, Supernova],
  ],

  // Stage 10: Celestial Endgame
  [
    [Supernova, Supernova, Supernova, Supernova, Supernova, Supernova, Supernova, Supernova],
    [Supernova, Asteroid, Asteroid, Asteroid, Asteroid, Asteroid, Asteroid, Supernova],
    [Asteroid, Supernova, Pulsar, Nebula, Nebula, Pulsar, Supernova, Asteroid],
    [Asteroid, Pulsar, Supernova, Asteroid, Asteroid, Supernova, Pulsar, Asteroid],
    [Supernova, Nebula, Asteroid, Supernova, Supernova, Asteroid, Nebula, Supernova],
    [Asteroid, Supernova, Pulsar, Nebula, Nebula, Pulsar, Supernova, Asteroid],
    [Supernova, Asteroid, Supernova, Asteroid, Asteroid, Supernova, Asteroid, Supernova],
    [Supernova, Supernova, Supernova, Supernova, Supernova, Supernova, Supernova, Supernova],
  ],
];
