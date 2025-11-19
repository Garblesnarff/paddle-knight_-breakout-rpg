import { BrickType } from '../../../types';

const { Seraph, Celestial, Ascended, Divinity, Transcendent, Eternal, OvermindBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Lower Astral
  [
    [Seraph, Seraph, Seraph, Seraph, Seraph, Seraph, Seraph, Seraph],
    [null, Celestial, null, Celestial, null, Celestial, null, Celestial],
    [Seraph, Seraph, Seraph, Seraph, Seraph, Seraph, Seraph, Seraph],
    [Celestial, null, Celestial, null, Celestial, null, Celestial, null],
  ],

  // Stage 2: Ascension Path
  [
    [Ascended, Celestial, Seraph, Celestial, Celestial, Seraph, Celestial, Ascended],
    [Celestial, Ascended, Celestial, Seraph, Seraph, Celestial, Ascended, Celestial],
    [Seraph, Celestial, Ascended, Celestial, Celestial, Ascended, Celestial, Seraph],
    [Ascended, Seraph, Celestial, Ascended, Ascended, Celestial, Seraph, Ascended],
  ],

  // Stage 3: Divine Chamber
  [
    [Divinity, Ascended, Celestial, Ascended, Ascended, Celestial, Ascended, Divinity],
    [Ascended, Seraph, Divinity, Celestial, Celestial, Divinity, Seraph, Ascended],
    [Celestial, Divinity, Seraph, Ascended, Ascended, Seraph, Divinity, Celestial],
    [Divinity, Celestial, Ascended, Seraph, Seraph, Ascended, Celestial, Divinity],
  ],

  // Stage 4: Transcendent Realm
  [
    [Transcendent, Divinity, Eternal, Ascended, Ascended, Eternal, Divinity, Transcendent],
    [Divinity, Celestial, Seraph, Transcendent, Transcendent, Seraph, Celestial, Divinity],
    [Eternal, Ascended, Transcendent, Divinity, Divinity, Transcendent, Ascended, Eternal],
    [Ascended, Seraph, Divinity, Celestial, Celestial, Divinity, Seraph, Ascended],
    [Transcendent, Eternal, Ascended, Seraph, Seraph, Ascended, Eternal, Transcendent],
  ],

  // Stage 5: Overmind's Domain
  [
    [null, null, null, OvermindBoss, null, null, null],
    [Eternal, null, Transcendent, null, Transcendent, null, Eternal],
    [Transcendent, Eternal, Divinity, null, Divinity, Eternal, Transcendent],
    [Divinity, Ascended, Celestial, Eternal, Eternal, Celestial, Ascended, Divinity],
    [Celestial, Seraph, Ascended, null, null, Ascended, Seraph, Celestial],
  ],

  // Stage 6: Eternal Horizon
  [
    [Transcendent, Divinity, Eternal, Ascended, Ascended, Eternal, Divinity, Transcendent],
    [Divinity, Ascended, Transcendent, Celestial, Celestial, Transcendent, Ascended, Divinity],
    [Eternal, Transcendent, Divinity, Ascended, Ascended, Divinity, Transcendent, Eternal],
    [Ascended, Celestial, Eternal, Divinity, Divinity, Eternal, Celestial, Ascended],
    [Transcendent, Eternal, Ascended, Divinity, Divinity, Ascended, Eternal, Transcendent],
  ],

  // Stage 7: Celestial Convergence
  [
    [Eternal, Transcendent, Divinity, Eternal, Eternal, Divinity, Transcendent, Eternal],
    [Transcendent, Eternal, Ascended, Divinity, Divinity, Ascended, Eternal, Transcendent],
    [Divinity, Ascended, Eternal, Transcendent, Transcendent, Eternal, Ascended, Divinity],
    [Ascended, Divinity, Transcendent, Celestial, Celestial, Transcendent, Divinity, Ascended],
    [Eternal, Transcendent, Divinity, Ascended, Ascended, Divinity, Transcendent, Eternal],
    [Transcendent, Divinity, Eternal, Transcendent, Transcendent, Eternal, Divinity, Transcendent],
  ],

  // Stage 8: Transcendent Nexus
  [
    [Eternal, Eternal, Transcendent, Divinity, Divinity, Transcendent, Eternal, Eternal],
    [Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent],
    [Divinity, Transcendent, Eternal, Divinity, Divinity, Eternal, Transcendent, Divinity],
    [Eternal, Divinity, Transcendent, Eternal, Eternal, Transcendent, Divinity, Eternal],
    [Transcendent, Eternal, Divinity, Transcendent, Transcendent, Divinity, Eternal, Transcendent],
    [Divinity, Transcendent, Eternal, Ascended, Ascended, Eternal, Transcendent, Divinity],
    [Eternal, Divinity, Transcendent, Eternal, Eternal, Transcendent, Divinity, Eternal],
  ],

  // Stage 9: Divine Infinity
  [
    [Eternal, Eternal, Eternal, Transcendent, Transcendent, Eternal, Eternal, Eternal],
    [Transcendent, Eternal, Divinity, Eternal, Eternal, Divinity, Eternal, Transcendent],
    [Eternal, Transcendent, Eternal, Divinity, Divinity, Eternal, Transcendent, Eternal],
    [Divinity, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Divinity],
    [Eternal, Divinity, Eternal, Transcendent, Transcendent, Eternal, Divinity, Eternal],
    [Transcendent, Eternal, Eternal, Divinity, Divinity, Eternal, Eternal, Transcendent],
    [Eternal, Transcendent, Divinity, Eternal, Eternal, Divinity, Transcendent, Eternal],
  ],

  // Stage 10: Eternal Omniscience
  [
    [Eternal, Eternal, Eternal, Eternal, Eternal, Eternal, Eternal, Eternal],
    [Eternal, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Eternal],
    [Transcendent, Eternal, Eternal, Divinity, Divinity, Eternal, Eternal, Transcendent],
    [Eternal, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Eternal],
    [Transcendent, Divinity, Eternal, Transcendent, Transcendent, Eternal, Divinity, Transcendent],
    [Eternal, Transcendent, Eternal, Eternal, Eternal, Eternal, Transcendent, Eternal],
    [Divinity, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Divinity],
    [Eternal, Eternal, Eternal, Transcendent, Transcendent, Eternal, Eternal, Eternal],
  ],

  // Stage 11: Beyond Transcendence
  [
    [Eternal, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Eternal],
    [Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent],
    [Eternal, Transcendent, Eternal, Eternal, Eternal, Eternal, Transcendent, Eternal],
    [Eternal, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Eternal],
    [Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent],
    [Eternal, Transcendent, Eternal, Eternal, Eternal, Eternal, Transcendent, Eternal],
    [Transcendent, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Transcendent],
    [Eternal, Eternal, Eternal, Transcendent, Transcendent, Eternal, Eternal, Eternal],
  ],

  // Stage 12: Infinite Ascension
  [
    [Eternal, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Eternal],
    [Transcendent, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Transcendent],
    [Eternal, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Eternal],
    [Transcendent, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Transcendent],
    [Eternal, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Eternal],
    [Transcendent, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Transcendent],
    [Eternal, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Eternal],
    [Transcendent, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Transcendent],
  ],

  // Stage 13: Eternal Supremacy
  [
    [Transcendent, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Transcendent],
    [Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal],
    [Transcendent, Eternal, Transcendent, Transcendent, Transcendent, Transcendent, Eternal, Transcendent],
    [Eternal, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Eternal],
    [Transcendent, Transcendent, Transcendent, Eternal, Eternal, Transcendent, Transcendent, Transcendent],
    [Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal],
    [Transcendent, Eternal, Transcendent, Transcendent, Transcendent, Transcendent, Eternal, Transcendent],
    [Transcendent, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Transcendent],
  ],

  // Stage 14: Apex of Eternity
  [
    [Transcendent, Transcendent, Transcendent, Eternal, Eternal, Transcendent, Transcendent, Transcendent],
    [Transcendent, Eternal, Transcendent, Transcendent, Transcendent, Transcendent, Eternal, Transcendent],
    [Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal],
    [Transcendent, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Transcendent],
    [Transcendent, Eternal, Transcendent, Transcendent, Transcendent, Transcendent, Eternal, Transcendent],
    [Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal],
    [Transcendent, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Transcendent],
    [Transcendent, Transcendent, Transcendent, Transcendent, Transcendent, Transcendent, Transcendent, Transcendent],
  ],

  // Stage 15: Overmind Ascendant
  [
    [null, null, Transcendent, OvermindBoss, OvermindBoss, Transcendent, null, null],
    [Transcendent, Eternal, null, Transcendent, Transcendent, null, Eternal, Transcendent],
    [Eternal, Transcendent, Eternal, null, null, Eternal, Transcendent, Eternal],
    [Transcendent, Eternal, Transcendent, Eternal, Eternal, Transcendent, Eternal, Transcendent],
    [Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal],
    [Transcendent, Transcendent, Eternal, Transcendent, Transcendent, Eternal, Transcendent, Transcendent],
    [Eternal, Transcendent, Transcendent, Eternal, Eternal, Transcendent, Transcendent, Eternal],
    [Transcendent, Transcendent, Transcendent, Transcendent, Transcendent, Transcendent, Transcendent, Transcendent],
  ],
];
