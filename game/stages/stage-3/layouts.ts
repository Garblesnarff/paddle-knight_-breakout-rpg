import { Layout } from '../schemas';

const L11: Layout = [
  ['Scavenger', 'Scavenger', 'Scavenger', 'Scavenger', 'Scavenger', 'Scavenger'],
  [null, 'Cactus', null, null, 'Cactus', null],
  ['Scavenger', 'Scavenger', 'Scavenger', 'Scavenger', 'Scavenger', 'Scavenger'],
];

const L12: Layout = [
  ['Sandworm', null, 'Sandworm', null, 'Sandworm', null],
  [null, null, null, null, null, null],
  ['Sandworm', null, 'Sandworm', null, 'Sandworm', null],
];

const L13: Layout = [
  ['Mutant', 'Mutant', 'Mutant', 'Mutant', 'Mutant', 'Mutant'],
  [null, null, null, null, null, null],
  ['Mutant', 'Mutant', 'Mutant', 'Mutant', 'Mutant', 'Mutant'],
];

const L14: Layout = [
  ['Sandworm', 'Mutant', 'Sandworm', 'Mutant', 'Sandworm', 'Mutant'],
  ['Cactus', null, 'Cactus', null, 'Cactus', null],
  ['Sandworm', 'Mutant', 'Sandworm', 'Mutant', 'Sandworm', 'Mutant'],
];

const L15: Layout = [
  ['ColossalSandwormBoss', null, null, null, null, null],
];

export const STAGE_3_LAYOUTS: Layout[] = [L11, L12, L13, L14, L15];
