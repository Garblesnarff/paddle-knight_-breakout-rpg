import { BrickType } from '../../../types';

const { Ghost, Poltergeist, Spirit, Haunt, Ectoplasm, Possession, SpiritKingBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Spectral Mists
  [
    [Ghost, Ghost, Ghost, Ghost, Ghost, Ghost, Ghost, Ghost],
    [null, Poltergeist, null, Poltergeist, null, Poltergeist, null, Poltergeist],
    [Ghost, Ghost, Ghost, Ghost, Ghost, Ghost, Ghost, Ghost],
    [Poltergeist, null, Poltergeist, null, Poltergeist, null, Poltergeist, null],
  ],

  // Stage 2: Whispering Shadows
  [
    [Poltergeist, Ghost, Poltergeist, Ghost, Ghost, Poltergeist, Ghost, Poltergeist],
    [Ghost, Poltergeist, Ghost, Poltergeist, Poltergeist, Ghost, Poltergeist, Ghost],
    [Poltergeist, Ghost, Ghost, Poltergeist, Poltergeist, Ghost, Ghost, Poltergeist],
    [Ghost, Ghost, Poltergeist, Ghost, Ghost, Poltergeist, Ghost, Ghost],
  ],

  // Stage 3: Ethereal Crossing
  [
    [Spirit, Poltergeist, Ghost, Poltergeist, Poltergeist, Ghost, Poltergeist, Spirit],
    [Poltergeist, Ghost, Spirit, Ghost, Ghost, Spirit, Ghost, Poltergeist],
    [Ghost, Spirit, Poltergeist, Spirit, Spirit, Poltergeist, Spirit, Ghost],
    [Spirit, Poltergeist, Ghost, Poltergeist, Poltergeist, Ghost, Poltergeist, Spirit],
  ],

  // Stage 4: Haunted Sanctum
  [
    [Haunt, Spirit, Poltergeist, Spirit, Spirit, Poltergeist, Spirit, Haunt],
    [Spirit, Poltergeist, Haunt, Ghost, Ghost, Haunt, Poltergeist, Spirit],
    [Poltergeist, Haunt, Spirit, Poltergeist, Poltergeist, Spirit, Haunt, Poltergeist],
    [Haunt, Spirit, Poltergeist, Spirit, Spirit, Poltergeist, Spirit, Haunt],
  ],

  // Stage 5: Spirit Veil
  [
    [Spirit, Haunt, Spirit, Poltergeist, Poltergeist, Spirit, Haunt, Spirit],
    [Haunt, Spirit, Haunt, Spirit, Spirit, Haunt, Spirit, Haunt],
    [Spirit, Poltergeist, Spirit, Haunt, Haunt, Spirit, Poltergeist, Spirit],
    [Poltergeist, Spirit, Haunt, Spirit, Spirit, Haunt, Spirit, Poltergeist],
    [Spirit, Haunt, Spirit, Poltergeist, Poltergeist, Spirit, Haunt, Spirit],
  ],

  // Stage 6: Ectoplasmic Flow
  [
    [Ectoplasm, Haunt, Spirit, Haunt, Haunt, Spirit, Haunt, Ectoplasm],
    [Haunt, Spirit, Ectoplasm, Spirit, Spirit, Ectoplasm, Spirit, Haunt],
    [Spirit, Ectoplasm, Haunt, Ectoplasm, Ectoplasm, Haunt, Ectoplasm, Spirit],
    [Ectoplasm, Haunt, Spirit, Haunt, Haunt, Spirit, Haunt, Ectoplasm],
    [Haunt, Spirit, Ectoplasm, Spirit, Spirit, Ectoplasm, Spirit, Haunt],
  ],

  // Stage 7: Phantom Labyrinth
  [
    [Possession, Ectoplasm, Haunt, Spirit, Spirit, Haunt, Ectoplasm, Possession],
    [Ectoplasm, Haunt, Possession, Ectoplasm, Ectoplasm, Possession, Haunt, Ectoplasm],
    [Haunt, Possession, Ectoplasm, Haunt, Haunt, Ectoplasm, Possession, Haunt],
    [Spirit, Ectoplasm, Haunt, Possession, Possession, Haunt, Ectoplasm, Spirit],
    [Possession, Haunt, Spirit, Ectoplasm, Ectoplasm, Spirit, Haunt, Possession],
  ],

  // Stage 8: Wraith's Domain
  [
    [Possession, Possession, Ectoplasm, Haunt, Haunt, Ectoplasm, Possession, Possession],
    [Ectoplasm, Possession, Haunt, Possession, Possession, Haunt, Possession, Ectoplasm],
    [Haunt, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Haunt],
    [Possession, Haunt, Ectoplasm, Possession, Possession, Ectoplasm, Haunt, Possession],
    [Ectoplasm, Possession, Haunt, Ectoplasm, Ectoplasm, Haunt, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Haunt, Haunt, Possession, Ectoplasm, Possession],
  ],

  // Stage 9: Possessed Realm
  [
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Haunt, Ectoplasm, Ectoplasm, Haunt, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Haunt, Haunt, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
  ],

  // Stage 10: Spectral Convergence
  [
    [Possession, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Possession],
    [Ectoplasm, Possession, Possession, Ectoplasm, Ectoplasm, Possession, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Haunt, Haunt, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Haunt, Possession, Possession, Haunt, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Possession, Ectoplasm, Ectoplasm, Possession, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Possession, Possession, Possession, Ectoplasm, Possession],
  ],

  // Stage 11: Otherworldly Nexus
  [
    [Possession, Possession, Possession, Ectoplasm, Ectoplasm, Possession, Possession, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Possession, Possession, Ectoplasm, Ectoplasm, Possession, Possession, Possession],
  ],

  // Stage 12: Soul Chamber
  [
    [Possession, Ectoplasm, Possession, Possession, Possession, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Ectoplasm, Ectoplasm, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Possession, Possession, Possession, Ectoplasm, Possession],
  ],

  // Stage 13: Ethereal Throne
  [
    [Possession, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Possession],
    [Ectoplasm, Possession, Possession, Ectoplasm, Ectoplasm, Possession, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Possession, Possession, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Possession, Possession, Ectoplasm, Ectoplasm, Possession, Possession, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Possession, Possession, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Possession, Ectoplasm, Ectoplasm, Possession, Possession, Ectoplasm],
  ],

  // Stage 14: Beyond the Veil
  [
    [Possession, Possession, Possession, Possession, Possession, Possession, Possession, Possession],
    [Ectoplasm, Possession, Ectoplasm, Ectoplasm, Ectoplasm, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Possession, Possession, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Possession, Ectoplasm, Ectoplasm, Possession, Possession, Ectoplasm],
  ],

  // Stage 15: The Spirit King
  [
    [null, null, null, SpiritKingBoss, null, null, null],
    [Possession, null, Ectoplasm, null, Ectoplasm, null, Possession],
    [Ectoplasm, Possession, Ectoplasm, null, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Possession, Ectoplasm, Possession],
    [Ectoplasm, Possession, Ectoplasm, Possession, Ectoplasm, Possession, Ectoplasm],
    [Possession, Ectoplasm, Possession, Ectoplasm, Possession, Ectoplasm, Possession],
  ],
];
