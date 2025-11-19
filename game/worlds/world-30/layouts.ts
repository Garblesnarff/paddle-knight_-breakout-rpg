import { BrickType } from '../../../types';

const { Omega, Alpha, EndEternal, Infinite, EndAbsolute, Perfection, TheEndBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Alpha Beginning
  [
    [Alpha, Alpha, Alpha, Alpha, Alpha, Alpha, Alpha, Alpha],
    [null, Omega, null, Omega, null, Omega, null, Omega],
    [Alpha, Alpha, Alpha, Alpha, Alpha, Alpha, Alpha, Alpha],
    [Omega, null, Omega, null, Omega, null, Omega, null],
  ],

  // Stage 2: Omega Terminus
  [
    [Omega, Alpha, EndEternal, Alpha, Alpha, EndEternal, Alpha, Omega],
    [Alpha, Omega, Alpha, EndEternal, EndEternal, Alpha, Omega, Alpha],
    [EndEternal, Alpha, Omega, Alpha, Alpha, Omega, Alpha, EndEternal],
    [Omega, EndEternal, Alpha, Omega, Omega, Alpha, EndEternal, Omega],
  ],

  // Stage 3: Eternal Ascension
  [
    [EndEternal, Omega, Alpha, Omega, Omega, Alpha, Omega, EndEternal],
    [Omega, Alpha, EndEternal, Alpha, Alpha, EndEternal, Alpha, Omega],
    [Alpha, EndEternal, Omega, EndEternal, EndEternal, Omega, EndEternal, Alpha],
    [EndEternal, Alpha, Omega, Alpha, Alpha, Omega, Alpha, EndEternal],
  ],

  // Stage 4: Infinite Expanse
  [
    [Infinite, EndEternal, EndAbsolute, Omega, Omega, EndAbsolute, EndEternal, Infinite],
    [EndEternal, Alpha, Omega, Infinite, Infinite, Omega, Alpha, EndEternal],
    [EndAbsolute, Omega, Infinite, EndEternal, EndEternal, Infinite, Omega, EndAbsolute],
    [Omega, Alpha, EndEternal, Alpha, Alpha, EndEternal, Alpha, Omega],
    [Infinite, EndAbsolute, Omega, Alpha, Alpha, Omega, EndAbsolute, Infinite],
  ],

  // Stage 5: Absolute Domain
  [
    [EndAbsolute, Infinite, EndEternal, EndAbsolute, EndAbsolute, EndEternal, Infinite, EndAbsolute],
    [Infinite, Omega, EndAbsolute, EndEternal, EndEternal, EndAbsolute, Omega, Infinite],
    [EndEternal, EndAbsolute, Omega, Infinite, Infinite, Omega, EndAbsolute, EndEternal],
    [EndAbsolute, EndEternal, Infinite, Omega, Omega, Infinite, EndEternal, EndAbsolute],
    [Infinite, EndAbsolute, Omega, EndEternal, EndEternal, Omega, EndAbsolute, Infinite],
  ],

  // Stage 6: Perfection's Shadow
  [
    [Perfection, EndAbsolute, Infinite, EndEternal, EndEternal, Infinite, EndAbsolute, Perfection],
    [EndAbsolute, Infinite, Perfection, Omega, Omega, Perfection, Infinite, EndAbsolute],
    [Infinite, Perfection, EndEternal, EndAbsolute, EndAbsolute, EndEternal, Perfection, Infinite],
    [EndEternal, Omega, EndAbsolute, Infinite, Infinite, EndAbsolute, Omega, EndEternal],
    [Perfection, Infinite, EndAbsolute, EndEternal, EndEternal, EndAbsolute, Infinite, Perfection],
  ],

  // Stage 7: Beyond Perfection
  [
    [Perfection, EndAbsolute, Perfection, Infinite, Infinite, Perfection, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, Infinite, EndAbsolute, EndAbsolute, Infinite, Perfection, EndAbsolute],
    [Infinite, EndAbsolute, Perfection, EndEternal, EndEternal, Perfection, EndAbsolute, Infinite],
    [EndAbsolute, Infinite, EndEternal, Perfection, Perfection, EndEternal, Infinite, EndAbsolute],
    [Perfection, EndAbsolute, Infinite, EndEternal, EndEternal, Infinite, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, EndAbsolute, Infinite, Infinite, EndAbsolute, Perfection, EndAbsolute],
  ],

  // Stage 8: Ultimate Convergence
  [
    [Perfection, Perfection, EndAbsolute, Infinite, Infinite, EndAbsolute, Perfection, Perfection],
    [EndAbsolute, Perfection, Perfection, EndAbsolute, EndAbsolute, Perfection, Perfection, EndAbsolute],
    [Infinite, EndAbsolute, Perfection, Infinite, Infinite, Perfection, EndAbsolute, Infinite],
    [Perfection, Infinite, EndAbsolute, Perfection, Perfection, EndAbsolute, Infinite, Perfection],
    [EndAbsolute, Perfection, Infinite, EndAbsolute, EndAbsolute, Infinite, Perfection, EndAbsolute],
    [Infinite, EndAbsolute, Perfection, EndEternal, EndEternal, Perfection, EndAbsolute, Infinite],
    [Perfection, Infinite, EndAbsolute, Perfection, Perfection, EndAbsolute, Infinite, Perfection],
  ],

  // Stage 9: Transcendent Void
  [
    [Perfection, Perfection, Perfection, EndAbsolute, EndAbsolute, Perfection, Perfection, Perfection],
    [EndAbsolute, Perfection, Infinite, Perfection, Perfection, Infinite, Perfection, EndAbsolute],
    [Perfection, Infinite, Perfection, EndAbsolute, EndAbsolute, Perfection, Infinite, Perfection],
    [Infinite, Perfection, EndAbsolute, Perfection, Perfection, EndAbsolute, Perfection, Infinite],
    [Perfection, EndAbsolute, Perfection, Infinite, Infinite, Perfection, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, Infinite, EndAbsolute, EndAbsolute, Infinite, Perfection, EndAbsolute],
    [Perfection, Infinite, Perfection, EndAbsolute, EndAbsolute, Perfection, Infinite, Perfection],
  ],

  // Stage 10: Absolute Singularity
  [
    [Perfection, Perfection, Perfection, Perfection, Perfection, Perfection, Perfection, Perfection],
    [Perfection, EndAbsolute, Perfection, EndAbsolute, EndAbsolute, Perfection, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, Perfection, Infinite, Infinite, Perfection, Perfection, EndAbsolute],
    [Perfection, Perfection, EndAbsolute, Perfection, Perfection, EndAbsolute, Perfection, Perfection],
    [EndAbsolute, Infinite, Perfection, EndAbsolute, EndAbsolute, Perfection, Infinite, EndAbsolute],
    [Perfection, Perfection, EndAbsolute, Perfection, Perfection, EndAbsolute, Perfection, Perfection],
    [Infinite, EndAbsolute, Perfection, EndAbsolute, EndAbsolute, Perfection, EndAbsolute, Infinite],
    [Perfection, Perfection, Perfection, Perfection, Perfection, Perfection, Perfection, Perfection],
  ],

  // Stage 11: Final Reckoning
  [
    [Perfection, EndAbsolute, Perfection, EndAbsolute, EndAbsolute, Perfection, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, EndAbsolute, Perfection, Perfection, EndAbsolute, Perfection, EndAbsolute],
    [Perfection, EndAbsolute, Infinite, EndAbsolute, EndAbsolute, Infinite, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, EndAbsolute, Infinite, Infinite, EndAbsolute, Perfection, EndAbsolute],
    [Infinite, EndAbsolute, Perfection, EndAbsolute, EndAbsolute, Perfection, EndAbsolute, Infinite],
    [Perfection, Infinite, EndAbsolute, Perfection, Perfection, EndAbsolute, Infinite, Perfection],
    [EndAbsolute, Perfection, Infinite, EndAbsolute, EndAbsolute, Infinite, Perfection, EndAbsolute],
    [Perfection, EndAbsolute, Perfection, Infinite, Infinite, Perfection, EndAbsolute, Perfection],
  ],

  // Stage 12: Omega Perfection
  [
    [Perfection, Perfection, EndAbsolute, Infinite, Infinite, EndAbsolute, Perfection, Perfection],
    [Perfection, EndAbsolute, Perfection, EndAbsolute, EndAbsolute, Perfection, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, Infinite, Perfection, Perfection, Infinite, Perfection, EndAbsolute],
    [Infinite, Perfection, EndAbsolute, Infinite, Infinite, EndAbsolute, Perfection, Infinite],
    [Perfection, EndAbsolute, Perfection, EndAbsolute, EndAbsolute, Perfection, EndAbsolute, Perfection],
    [EndAbsolute, Infinite, Perfection, EndAbsolute, EndAbsolute, Perfection, Infinite, EndAbsolute],
    [Perfection, EndAbsolute, Infinite, Perfection, Perfection, Infinite, EndAbsolute, Perfection],
    [Infinite, Perfection, EndAbsolute, Infinite, Infinite, EndAbsolute, Perfection, Infinite],
  ],

  // Stage 13: The Final Truth
  [
    [Perfection, Perfection, Perfection, EndAbsolute, EndAbsolute, Perfection, Perfection, Perfection],
    [Perfection, EndAbsolute, Infinite, Perfection, Perfection, Infinite, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, EndAbsolute, Infinite, Infinite, EndAbsolute, Perfection, EndAbsolute],
    [Infinite, EndAbsolute, Perfection, EndAbsolute, EndAbsolute, Perfection, EndAbsolute, Infinite],
    [Perfection, Infinite, EndAbsolute, Perfection, Perfection, EndAbsolute, Infinite, Perfection],
    [EndAbsolute, Perfection, Infinite, EndAbsolute, EndAbsolute, Infinite, Perfection, EndAbsolute],
    [Perfection, EndAbsolute, Perfection, Infinite, Infinite, Perfection, EndAbsolute, Perfection],
    [Perfection, Perfection, EndAbsolute, Perfection, Perfection, EndAbsolute, Perfection, Perfection],
  ],

  // Stage 14: Beyond All Ends
  [
    [Perfection, Perfection, Perfection, Perfection, Perfection, Perfection, Perfection, Perfection],
    [Perfection, EndAbsolute, Perfection, Infinite, Infinite, Perfection, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, EndAbsolute, Perfection, Perfection, EndAbsolute, Perfection, EndAbsolute],
    [Perfection, Infinite, Perfection, EndAbsolute, EndAbsolute, Perfection, Infinite, Perfection],
    [Infinite, Perfection, EndAbsolute, Perfection, Perfection, EndAbsolute, Perfection, Infinite],
    [Perfection, EndAbsolute, Perfection, Infinite, Infinite, Perfection, EndAbsolute, Perfection],
    [EndAbsolute, Perfection, Infinite, Perfection, Perfection, Infinite, Perfection, EndAbsolute],
    [Perfection, Perfection, Perfection, EndAbsolute, EndAbsolute, Perfection, Perfection, Perfection],
  ],

  // Stage 15: The Absolute End
  [
    [null, null, null, TheEndBoss, null, null, null],
    [Perfection, null, EndAbsolute, null, EndAbsolute, null, Perfection],
    [EndAbsolute, Perfection, Infinite, null, Infinite, Perfection, EndAbsolute],
    [Infinite, EndAbsolute, Perfection, EndAbsolute, Perfection, EndAbsolute, Infinite],
    [Perfection, Infinite, EndAbsolute, Perfection, EndAbsolute, Infinite, Perfection],
    [EndAbsolute, Perfection, Infinite, EndAbsolute, Infinite, Perfection, EndAbsolute],
  ],
];
