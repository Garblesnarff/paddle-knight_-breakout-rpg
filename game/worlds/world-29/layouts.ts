import { BrickType } from '../../../types';

const { Alternate, Parallel, Divergent, Convergence, Dimensional, Multiverse, NexusEntityBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Alternate Reflections
  [
    [Alternate, Alternate, Alternate, Alternate, Alternate, Alternate, Alternate, Alternate],
    [null, Parallel, null, Parallel, null, Parallel, null, Parallel],
    [Alternate, Alternate, Alternate, Alternate, Alternate, Alternate, Alternate, Alternate],
    [Parallel, null, Parallel, null, Parallel, null, Parallel, null],
  ],

  // Stage 2: Parallel Paths
  [
    [Parallel, Alternate, Divergent, Alternate, Alternate, Divergent, Alternate, Parallel],
    [Alternate, Parallel, Alternate, Divergent, Divergent, Alternate, Parallel, Alternate],
    [Divergent, Alternate, Parallel, Alternate, Alternate, Parallel, Alternate, Divergent],
    [Parallel, Divergent, Alternate, Parallel, Parallel, Alternate, Divergent, Parallel],
  ],

  // Stage 3: Divergent Realities
  [
    [Divergent, Parallel, Alternate, Parallel, Parallel, Alternate, Parallel, Divergent],
    [Parallel, Alternate, Divergent, Alternate, Alternate, Divergent, Alternate, Parallel],
    [Alternate, Divergent, Parallel, Divergent, Divergent, Parallel, Divergent, Alternate],
    [Divergent, Alternate, Parallel, Alternate, Alternate, Parallel, Alternate, Divergent],
  ],

  // Stage 4: Convergence Point
  [
    [Convergence, Divergent, Dimensional, Parallel, Parallel, Dimensional, Divergent, Convergence],
    [Divergent, Alternate, Parallel, Convergence, Convergence, Parallel, Alternate, Divergent],
    [Dimensional, Parallel, Convergence, Divergent, Divergent, Convergence, Parallel, Dimensional],
    [Parallel, Alternate, Divergent, Alternate, Alternate, Divergent, Alternate, Parallel],
    [Convergence, Dimensional, Parallel, Alternate, Alternate, Parallel, Dimensional, Convergence],
  ],

  // Stage 5: Dimensional Rift
  [
    [Dimensional, Convergence, Divergent, Dimensional, Dimensional, Divergent, Convergence, Dimensional],
    [Convergence, Parallel, Dimensional, Divergent, Divergent, Dimensional, Parallel, Convergence],
    [Divergent, Dimensional, Parallel, Convergence, Convergence, Parallel, Dimensional, Divergent],
    [Dimensional, Divergent, Convergence, Parallel, Parallel, Convergence, Divergent, Dimensional],
    [Convergence, Dimensional, Parallel, Divergent, Divergent, Parallel, Dimensional, Convergence],
  ],

  // Stage 6: Multiverse Echoes
  [
    [Multiverse, Dimensional, Convergence, Divergent, Divergent, Convergence, Dimensional, Multiverse],
    [Dimensional, Convergence, Multiverse, Parallel, Parallel, Multiverse, Convergence, Dimensional],
    [Convergence, Multiverse, Divergent, Dimensional, Dimensional, Divergent, Multiverse, Convergence],
    [Divergent, Parallel, Dimensional, Convergence, Convergence, Dimensional, Parallel, Divergent],
    [Multiverse, Convergence, Dimensional, Divergent, Divergent, Dimensional, Convergence, Multiverse],
  ],

  // Stage 7: Reality Cascade
  [
    [Multiverse, Dimensional, Multiverse, Convergence, Convergence, Multiverse, Dimensional, Multiverse],
    [Dimensional, Multiverse, Convergence, Dimensional, Dimensional, Convergence, Multiverse, Dimensional],
    [Convergence, Dimensional, Multiverse, Divergent, Divergent, Multiverse, Dimensional, Convergence],
    [Dimensional, Convergence, Divergent, Multiverse, Multiverse, Divergent, Convergence, Dimensional],
    [Multiverse, Dimensional, Convergence, Divergent, Divergent, Convergence, Dimensional, Multiverse],
    [Dimensional, Multiverse, Dimensional, Convergence, Convergence, Dimensional, Multiverse, Dimensional],
  ],

  // Stage 8: Infinite Mirrors
  [
    [Multiverse, Multiverse, Dimensional, Convergence, Convergence, Dimensional, Multiverse, Multiverse],
    [Dimensional, Multiverse, Multiverse, Dimensional, Dimensional, Multiverse, Multiverse, Dimensional],
    [Convergence, Dimensional, Multiverse, Convergence, Convergence, Multiverse, Dimensional, Convergence],
    [Multiverse, Convergence, Dimensional, Multiverse, Multiverse, Dimensional, Convergence, Multiverse],
    [Dimensional, Multiverse, Convergence, Dimensional, Dimensional, Convergence, Multiverse, Dimensional],
    [Convergence, Dimensional, Multiverse, Divergent, Divergent, Multiverse, Dimensional, Convergence],
    [Multiverse, Convergence, Dimensional, Multiverse, Multiverse, Dimensional, Convergence, Multiverse],
  ],

  // Stage 9: Prismatic Convergence
  [
    [Multiverse, Multiverse, Multiverse, Dimensional, Dimensional, Multiverse, Multiverse, Multiverse],
    [Dimensional, Multiverse, Convergence, Multiverse, Multiverse, Convergence, Multiverse, Dimensional],
    [Multiverse, Convergence, Multiverse, Dimensional, Dimensional, Multiverse, Convergence, Multiverse],
    [Convergence, Multiverse, Dimensional, Multiverse, Multiverse, Dimensional, Multiverse, Convergence],
    [Multiverse, Dimensional, Multiverse, Convergence, Convergence, Multiverse, Dimensional, Multiverse],
    [Dimensional, Multiverse, Convergence, Dimensional, Dimensional, Convergence, Multiverse, Dimensional],
    [Multiverse, Convergence, Multiverse, Dimensional, Dimensional, Multiverse, Convergence, Multiverse],
  ],

  // Stage 10: Nexus Threshold
  [
    [Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse],
    [Multiverse, Dimensional, Multiverse, Dimensional, Dimensional, Multiverse, Dimensional, Multiverse],
    [Dimensional, Multiverse, Multiverse, Convergence, Convergence, Multiverse, Multiverse, Dimensional],
    [Multiverse, Multiverse, Dimensional, Multiverse, Multiverse, Dimensional, Multiverse, Multiverse],
    [Dimensional, Convergence, Multiverse, Dimensional, Dimensional, Multiverse, Convergence, Dimensional],
    [Multiverse, Multiverse, Dimensional, Multiverse, Multiverse, Dimensional, Multiverse, Multiverse],
    [Convergence, Dimensional, Multiverse, Dimensional, Dimensional, Multiverse, Dimensional, Convergence],
    [Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse],
  ],

  // Stage 11: Dimensional Storm
  [
    [Multiverse, Dimensional, Multiverse, Dimensional, Dimensional, Multiverse, Dimensional, Multiverse],
    [Dimensional, Multiverse, Dimensional, Multiverse, Multiverse, Dimensional, Multiverse, Dimensional],
    [Multiverse, Dimensional, Convergence, Dimensional, Dimensional, Convergence, Dimensional, Multiverse],
    [Dimensional, Multiverse, Dimensional, Convergence, Convergence, Dimensional, Multiverse, Dimensional],
    [Convergence, Dimensional, Multiverse, Dimensional, Dimensional, Multiverse, Dimensional, Convergence],
    [Multiverse, Convergence, Dimensional, Multiverse, Multiverse, Dimensional, Convergence, Multiverse],
    [Dimensional, Multiverse, Convergence, Dimensional, Dimensional, Convergence, Multiverse, Dimensional],
    [Multiverse, Dimensional, Multiverse, Convergence, Convergence, Multiverse, Dimensional, Multiverse],
  ],

  // Stage 12: Reality Fracture
  [
    [Multiverse, Multiverse, Dimensional, Convergence, Convergence, Dimensional, Multiverse, Multiverse],
    [Multiverse, Dimensional, Multiverse, Dimensional, Dimensional, Multiverse, Dimensional, Multiverse],
    [Dimensional, Multiverse, Convergence, Multiverse, Multiverse, Convergence, Multiverse, Dimensional],
    [Convergence, Multiverse, Dimensional, Convergence, Convergence, Dimensional, Multiverse, Convergence],
    [Multiverse, Dimensional, Multiverse, Dimensional, Dimensional, Multiverse, Dimensional, Multiverse],
    [Dimensional, Convergence, Multiverse, Dimensional, Dimensional, Multiverse, Convergence, Dimensional],
    [Multiverse, Dimensional, Convergence, Multiverse, Multiverse, Convergence, Dimensional, Multiverse],
    [Convergence, Multiverse, Dimensional, Convergence, Convergence, Dimensional, Multiverse, Convergence],
  ],

  // Stage 13: Omniversal Gate
  [
    [Multiverse, Multiverse, Multiverse, Dimensional, Dimensional, Multiverse, Multiverse, Multiverse],
    [Multiverse, Dimensional, Convergence, Multiverse, Multiverse, Convergence, Dimensional, Multiverse],
    [Dimensional, Multiverse, Dimensional, Convergence, Convergence, Dimensional, Multiverse, Dimensional],
    [Convergence, Dimensional, Multiverse, Dimensional, Dimensional, Multiverse, Dimensional, Convergence],
    [Multiverse, Convergence, Dimensional, Multiverse, Multiverse, Dimensional, Convergence, Multiverse],
    [Dimensional, Multiverse, Convergence, Dimensional, Dimensional, Convergence, Multiverse, Dimensional],
    [Multiverse, Dimensional, Multiverse, Convergence, Convergence, Multiverse, Dimensional, Multiverse],
    [Multiverse, Multiverse, Dimensional, Multiverse, Multiverse, Dimensional, Multiverse, Multiverse],
  ],

  // Stage 14: All Realities Collide
  [
    [Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse, Multiverse],
    [Multiverse, Dimensional, Multiverse, Convergence, Convergence, Multiverse, Dimensional, Multiverse],
    [Dimensional, Multiverse, Dimensional, Multiverse, Multiverse, Dimensional, Multiverse, Dimensional],
    [Multiverse, Convergence, Multiverse, Dimensional, Dimensional, Multiverse, Convergence, Multiverse],
    [Convergence, Multiverse, Dimensional, Multiverse, Multiverse, Dimensional, Multiverse, Convergence],
    [Multiverse, Dimensional, Multiverse, Convergence, Convergence, Multiverse, Dimensional, Multiverse],
    [Dimensional, Multiverse, Convergence, Multiverse, Multiverse, Convergence, Multiverse, Dimensional],
    [Multiverse, Multiverse, Multiverse, Dimensional, Dimensional, Multiverse, Multiverse, Multiverse],
  ],

  // Stage 15: The Nexus Entity
  [
    [null, null, null, NexusEntityBoss, null, null, null],
    [Multiverse, null, Dimensional, null, Dimensional, null, Multiverse],
    [Dimensional, Multiverse, Convergence, null, Convergence, Multiverse, Dimensional],
    [Convergence, Dimensional, Multiverse, Dimensional, Multiverse, Dimensional, Convergence],
    [Multiverse, Convergence, Dimensional, Multiverse, Dimensional, Convergence, Multiverse],
    [Dimensional, Multiverse, Convergence, Dimensional, Convergence, Multiverse, Dimensional],
  ],
];
