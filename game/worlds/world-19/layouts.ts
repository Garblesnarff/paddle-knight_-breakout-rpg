import { BrickType } from '../../../types';

const { Chaosling, Warper, Unstable, Mutation, Aberration, ChaosBeast, ChaosEmperorBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Chaos Breach
  [
    [Chaosling, Chaosling, Chaosling, Chaosling, Chaosling, Chaosling, Chaosling, Chaosling],
    [null, Warper, null, Warper, null, Warper, null, Warper],
    [Chaosling, Chaosling, Chaosling, Chaosling, Chaosling, Chaosling, Chaosling, Chaosling],
    [Warper, null, Warper, null, Warper, null, Warper, null],
  ],

  // Stage 2: Unstable Reality
  [
    [Unstable, Warper, Chaosling, Warper, Warper, Chaosling, Warper, Unstable],
    [Warper, Unstable, Warper, Chaosling, Chaosling, Warper, Unstable, Warper],
    [Chaosling, Warper, Unstable, Warper, Warper, Unstable, Warper, Chaosling],
    [Unstable, Chaosling, Warper, Unstable, Unstable, Warper, Chaosling, Unstable],
  ],

  // Stage 3: Mutation Zone
  [
    [Mutation, Unstable, Warper, Unstable, Unstable, Warper, Unstable, Mutation],
    [Unstable, Chaosling, Mutation, Warper, Warper, Mutation, Chaosling, Unstable],
    [Warper, Mutation, Chaosling, Unstable, Unstable, Chaosling, Mutation, Warper],
    [Mutation, Warper, Unstable, Chaosling, Chaosling, Unstable, Warper, Mutation],
  ],

  // Stage 4: Aberration Field
  [
    [Aberration, Mutation, ChaosBeast, Unstable, Unstable, ChaosBeast, Mutation, Aberration],
    [Mutation, Warper, Chaosling, Aberration, Aberration, Chaosling, Warper, Mutation],
    [ChaosBeast, Unstable, Aberration, Mutation, Mutation, Aberration, Unstable, ChaosBeast],
    [Unstable, Chaosling, Mutation, Warper, Warper, Mutation, Chaosling, Unstable],
    [Aberration, ChaosBeast, Unstable, Chaosling, Chaosling, Unstable, ChaosBeast, Aberration],
  ],

  // Stage 5: Chaos Emperor's Core
  [
    [null, null, null, ChaosEmperorBoss, null, null, null],
    [ChaosBeast, null, Aberration, null, Aberration, null, ChaosBeast],
    [Aberration, ChaosBeast, Mutation, null, Mutation, ChaosBeast, Aberration],
    [Mutation, Unstable, Warper, ChaosBeast, ChaosBeast, Warper, Unstable, Mutation],
    [Warper, Chaosling, Unstable, null, null, Unstable, Chaosling, Warper],
  ],

  // Stage 6: Chaos Vortex
  [
    [Aberration, Mutation, ChaosBeast, Unstable, Unstable, ChaosBeast, Mutation, Aberration],
    [Mutation, Unstable, Aberration, Warper, Warper, Aberration, Unstable, Mutation],
    [ChaosBeast, Aberration, Mutation, Unstable, Unstable, Mutation, Aberration, ChaosBeast],
    [Unstable, Warper, ChaosBeast, Mutation, Mutation, ChaosBeast, Warper, Unstable],
    [Aberration, ChaosBeast, Unstable, Mutation, Mutation, Unstable, ChaosBeast, Aberration],
  ],

  // Stage 7: Entropy Nexus
  [
    [ChaosBeast, Aberration, Mutation, ChaosBeast, ChaosBeast, Mutation, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Unstable, Mutation, Mutation, Unstable, ChaosBeast, Aberration],
    [Mutation, Unstable, ChaosBeast, Aberration, Aberration, ChaosBeast, Unstable, Mutation],
    [Unstable, Mutation, Aberration, Warper, Warper, Aberration, Mutation, Unstable],
    [ChaosBeast, Aberration, Mutation, Unstable, Unstable, Mutation, Aberration, ChaosBeast],
    [Aberration, Mutation, ChaosBeast, Aberration, Aberration, ChaosBeast, Mutation, Aberration],
  ],

  // Stage 8: Reality Shatter
  [
    [ChaosBeast, ChaosBeast, Aberration, Mutation, Mutation, Aberration, ChaosBeast, ChaosBeast],
    [Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration],
    [Mutation, Aberration, ChaosBeast, Mutation, Mutation, ChaosBeast, Aberration, Mutation],
    [ChaosBeast, Mutation, Aberration, ChaosBeast, ChaosBeast, Aberration, Mutation, ChaosBeast],
    [Aberration, ChaosBeast, Mutation, Aberration, Aberration, Mutation, ChaosBeast, Aberration],
    [Mutation, Aberration, ChaosBeast, Unstable, Unstable, ChaosBeast, Aberration, Mutation],
    [ChaosBeast, Mutation, Aberration, ChaosBeast, ChaosBeast, Aberration, Mutation, ChaosBeast],
  ],

  // Stage 9: Aberrant Dominion
  [
    [ChaosBeast, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, ChaosBeast],
    [Aberration, ChaosBeast, Mutation, ChaosBeast, ChaosBeast, Mutation, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, Mutation, Mutation, ChaosBeast, Aberration, ChaosBeast],
    [Mutation, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, Mutation],
    [ChaosBeast, Mutation, ChaosBeast, Aberration, Aberration, ChaosBeast, Mutation, ChaosBeast],
    [Aberration, ChaosBeast, ChaosBeast, Mutation, Mutation, ChaosBeast, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, Mutation, ChaosBeast, ChaosBeast, Mutation, Aberration, ChaosBeast],
  ],

  // Stage 10: Primordial Chaos
  [
    [ChaosBeast, ChaosBeast, ChaosBeast, ChaosBeast, ChaosBeast, ChaosBeast, ChaosBeast, ChaosBeast],
    [ChaosBeast, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, ChaosBeast, Mutation, Mutation, ChaosBeast, ChaosBeast, Aberration],
    [ChaosBeast, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, ChaosBeast],
    [Aberration, Mutation, ChaosBeast, Aberration, Aberration, ChaosBeast, Mutation, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, ChaosBeast, ChaosBeast, ChaosBeast, Aberration, ChaosBeast],
    [Mutation, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, Mutation],
    [ChaosBeast, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, ChaosBeast],
  ],

  // Stage 11: Chaotic Convergence
  [
    [ChaosBeast, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, ChaosBeast],
    [Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, ChaosBeast, ChaosBeast, ChaosBeast, Aberration, ChaosBeast],
    [ChaosBeast, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, ChaosBeast],
    [Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, ChaosBeast, ChaosBeast, ChaosBeast, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, Aberration],
    [ChaosBeast, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, ChaosBeast],
  ],

  // Stage 12: Unstable Annihilation
  [
    [ChaosBeast, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, Aberration],
  ],

  // Stage 13: Aberration Storm
  [
    [Aberration, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, Aberration],
    [ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Aberration, Aberration, Aberration, Aberration, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, ChaosBeast],
    [Aberration, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, Aberration],
    [ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Aberration, Aberration, Aberration, Aberration, ChaosBeast, Aberration],
    [Aberration, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, Aberration],
  ],

  // Stage 14: Chaotic Oblivion
  [
    [Aberration, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, Aberration],
    [Aberration, ChaosBeast, Aberration, Aberration, Aberration, Aberration, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast],
    [Aberration, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, Aberration],
    [Aberration, ChaosBeast, Aberration, Aberration, Aberration, Aberration, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast],
    [Aberration, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, Aberration],
    [Aberration, Aberration, Aberration, Aberration, Aberration, Aberration, Aberration, Aberration],
  ],

  // Stage 15: Chaos Emperor's Reign
  [
    [null, null, Aberration, ChaosEmperorBoss, ChaosEmperorBoss, Aberration, null, null],
    [Aberration, ChaosBeast, null, Aberration, Aberration, null, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, ChaosBeast, null, null, ChaosBeast, Aberration, ChaosBeast],
    [Aberration, ChaosBeast, Aberration, ChaosBeast, ChaosBeast, Aberration, ChaosBeast, Aberration],
    [ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast],
    [Aberration, Aberration, ChaosBeast, Aberration, Aberration, ChaosBeast, Aberration, Aberration],
    [ChaosBeast, Aberration, Aberration, ChaosBeast, ChaosBeast, Aberration, Aberration, ChaosBeast],
    [Aberration, Aberration, Aberration, Aberration, Aberration, Aberration, Aberration, Aberration],
  ],
];
