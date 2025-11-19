import { BrickType } from '../../../types';

const { Guardian, Sentinel, Warden, Keeper, Primordial, Absolute, FinalBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Outer Sanctum
  [
    [Guardian, Guardian, Guardian, Guardian, Guardian, Guardian, Guardian, Guardian],
    [null, Sentinel, null, Sentinel, null, Sentinel, null, Sentinel],
    [Guardian, Guardian, Guardian, Guardian, Guardian, Guardian, Guardian, Guardian],
    [Sentinel, null, Sentinel, null, Sentinel, null, Sentinel, null],
  ],

  // Stage 2: Inner Ward
  [
    [Warden, Sentinel, Guardian, Sentinel, Sentinel, Guardian, Sentinel, Warden],
    [Sentinel, Warden, Sentinel, Guardian, Guardian, Sentinel, Warden, Sentinel],
    [Guardian, Sentinel, Warden, Sentinel, Sentinel, Warden, Sentinel, Guardian],
    [Warden, Guardian, Sentinel, Warden, Warden, Sentinel, Guardian, Warden],
  ],

  // Stage 3: Keeper's Hall
  [
    [Keeper, Warden, Sentinel, Warden, Warden, Sentinel, Warden, Keeper],
    [Warden, Guardian, Keeper, Sentinel, Sentinel, Keeper, Guardian, Warden],
    [Sentinel, Keeper, Guardian, Warden, Warden, Guardian, Keeper, Sentinel],
    [Keeper, Sentinel, Warden, Guardian, Guardian, Warden, Sentinel, Keeper],
  ],

  // Stage 4: Primordial Chamber
  [
    [Primordial, Keeper, Absolute, Warden, Warden, Absolute, Keeper, Primordial],
    [Keeper, Sentinel, Guardian, Primordial, Primordial, Guardian, Sentinel, Keeper],
    [Absolute, Warden, Primordial, Keeper, Keeper, Primordial, Warden, Absolute],
    [Warden, Guardian, Keeper, Sentinel, Sentinel, Keeper, Guardian, Warden],
    [Primordial, Absolute, Warden, Guardian, Guardian, Warden, Absolute, Primordial],
  ],

  // Stage 5: The Final Gate
  [
    [null, null, null, FinalBoss, null, null, null],
    [Absolute, null, Primordial, null, Primordial, null, Absolute],
    [Primordial, Absolute, Keeper, null, Keeper, Absolute, Primordial],
    [Keeper, Warden, Sentinel, Absolute, Absolute, Sentinel, Warden, Keeper],
    [Sentinel, Guardian, Warden, null, null, Warden, Guardian, Sentinel],
  ],

  // Stage 6: Absolute Convergence
  [
    [Primordial, Keeper, Absolute, Warden, Warden, Absolute, Keeper, Primordial],
    [Keeper, Warden, Primordial, Sentinel, Sentinel, Primordial, Warden, Keeper],
    [Absolute, Primordial, Keeper, Warden, Warden, Keeper, Primordial, Absolute],
    [Warden, Sentinel, Absolute, Keeper, Keeper, Absolute, Sentinel, Warden],
    [Primordial, Absolute, Warden, Keeper, Keeper, Warden, Absolute, Primordial],
  ],

  // Stage 7: Primordial Sanctum
  [
    [Absolute, Primordial, Keeper, Absolute, Absolute, Keeper, Primordial, Absolute],
    [Primordial, Absolute, Warden, Keeper, Keeper, Warden, Absolute, Primordial],
    [Keeper, Warden, Absolute, Primordial, Primordial, Absolute, Warden, Keeper],
    [Warden, Keeper, Primordial, Sentinel, Sentinel, Primordial, Keeper, Warden],
    [Absolute, Primordial, Keeper, Warden, Warden, Keeper, Primordial, Absolute],
    [Primordial, Keeper, Absolute, Primordial, Primordial, Absolute, Keeper, Primordial],
  ],

  // Stage 8: Genesis Threshold
  [
    [Absolute, Absolute, Primordial, Keeper, Keeper, Primordial, Absolute, Absolute],
    [Primordial, Absolute, Absolute, Primordial, Primordial, Absolute, Absolute, Primordial],
    [Keeper, Primordial, Absolute, Keeper, Keeper, Absolute, Primordial, Keeper],
    [Absolute, Keeper, Primordial, Absolute, Absolute, Primordial, Keeper, Absolute],
    [Primordial, Absolute, Keeper, Primordial, Primordial, Keeper, Absolute, Primordial],
    [Keeper, Primordial, Absolute, Warden, Warden, Absolute, Primordial, Keeper],
    [Absolute, Keeper, Primordial, Absolute, Absolute, Primordial, Keeper, Absolute],
  ],

  // Stage 9: Omega Bastion
  [
    [Absolute, Absolute, Absolute, Primordial, Primordial, Absolute, Absolute, Absolute],
    [Primordial, Absolute, Keeper, Absolute, Absolute, Keeper, Absolute, Primordial],
    [Absolute, Primordial, Absolute, Keeper, Keeper, Absolute, Primordial, Absolute],
    [Keeper, Absolute, Primordial, Absolute, Absolute, Primordial, Absolute, Keeper],
    [Absolute, Keeper, Absolute, Primordial, Primordial, Absolute, Keeper, Absolute],
    [Primordial, Absolute, Absolute, Keeper, Keeper, Absolute, Absolute, Primordial],
    [Absolute, Primordial, Keeper, Absolute, Absolute, Keeper, Primordial, Absolute],
  ],

  // Stage 10: End of All Things
  [
    [Absolute, Absolute, Absolute, Absolute, Absolute, Absolute, Absolute, Absolute],
    [Absolute, Primordial, Absolute, Primordial, Primordial, Absolute, Primordial, Absolute],
    [Primordial, Absolute, Absolute, Keeper, Keeper, Absolute, Absolute, Primordial],
    [Absolute, Absolute, Primordial, Absolute, Absolute, Primordial, Absolute, Absolute],
    [Primordial, Keeper, Absolute, Primordial, Primordial, Absolute, Keeper, Primordial],
    [Absolute, Primordial, Absolute, Absolute, Absolute, Absolute, Primordial, Absolute],
    [Keeper, Absolute, Primordial, Absolute, Absolute, Primordial, Absolute, Keeper],
    [Absolute, Absolute, Absolute, Primordial, Primordial, Absolute, Absolute, Absolute],
  ],
];
