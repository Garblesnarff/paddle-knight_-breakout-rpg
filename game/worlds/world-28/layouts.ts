import { BrickType } from '../../../types';

const { Wyvern, Drake, Wyrm, Serpent, Dragon, ElderDragon, DragonEmperorBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Wyvern Nest
  [
    [Wyvern, Wyvern, Wyvern, Wyvern, Wyvern, Wyvern, Wyvern, Wyvern],
    [null, Drake, null, Drake, null, Drake, null, Drake],
    [Wyvern, Wyvern, Wyvern, Wyvern, Wyvern, Wyvern, Wyvern, Wyvern],
    [Drake, null, Drake, null, Drake, null, Drake, null],
  ],

  // Stage 2: Drake's Lair
  [
    [Drake, Wyvern, Drake, Wyvern, Wyvern, Drake, Wyvern, Drake],
    [Wyvern, Drake, Wyvern, Drake, Drake, Wyvern, Drake, Wyvern],
    [Drake, Wyvern, Wyvern, Drake, Drake, Wyvern, Wyvern, Drake],
    [Wyvern, Wyvern, Drake, Wyvern, Wyvern, Drake, Wyvern, Wyvern],
  ],

  // Stage 3: Wyrm Caverns
  [
    [Wyrm, Drake, Wyvern, Drake, Drake, Wyvern, Drake, Wyrm],
    [Drake, Wyvern, Wyrm, Wyvern, Wyvern, Wyrm, Wyvern, Drake],
    [Wyvern, Wyrm, Drake, Wyrm, Wyrm, Drake, Wyrm, Wyvern],
    [Wyrm, Drake, Wyvern, Drake, Drake, Wyvern, Drake, Wyrm],
  ],

  // Stage 4: Serpent's Coil
  [
    [Serpent, Wyrm, Drake, Wyrm, Wyrm, Drake, Wyrm, Serpent],
    [Wyrm, Drake, Serpent, Wyvern, Wyvern, Serpent, Drake, Wyrm],
    [Drake, Serpent, Wyrm, Drake, Drake, Wyrm, Serpent, Drake],
    [Serpent, Wyrm, Drake, Wyrm, Wyrm, Drake, Wyrm, Serpent],
  ],

  // Stage 5: Dragon's Gate
  [
    [Dragon, Serpent, Wyrm, Serpent, Serpent, Wyrm, Serpent, Dragon],
    [Serpent, Wyrm, Dragon, Wyrm, Wyrm, Dragon, Wyrm, Serpent],
    [Wyrm, Dragon, Serpent, Dragon, Dragon, Serpent, Dragon, Wyrm],
    [Serpent, Wyrm, Drake, Wyrm, Wyrm, Drake, Wyrm, Serpent],
    [Dragon, Serpent, Wyrm, Serpent, Serpent, Wyrm, Serpent, Dragon],
  ],

  // Stage 6: Draconic Halls
  [
    [Dragon, Dragon, Serpent, Wyrm, Wyrm, Serpent, Dragon, Dragon],
    [Serpent, Dragon, Wyrm, Dragon, Dragon, Wyrm, Dragon, Serpent],
    [Wyrm, Serpent, Dragon, Serpent, Serpent, Dragon, Serpent, Wyrm],
    [Dragon, Wyrm, Serpent, Dragon, Dragon, Serpent, Wyrm, Dragon],
    [Serpent, Dragon, Wyrm, Serpent, Serpent, Wyrm, Dragon, Serpent],
  ],

  // Stage 7: Inferno Chamber
  [
    [ElderDragon, Dragon, Serpent, Dragon, Dragon, Serpent, Dragon, ElderDragon],
    [Dragon, Serpent, ElderDragon, Serpent, Serpent, ElderDragon, Serpent, Dragon],
    [Serpent, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Serpent],
    [Dragon, Serpent, Wyrm, Serpent, Serpent, Wyrm, Serpent, Dragon],
    [ElderDragon, Dragon, Serpent, Dragon, Dragon, Serpent, Dragon, ElderDragon],
  ],

  // Stage 8: Ancient Roost
  [
    [ElderDragon, ElderDragon, Dragon, Serpent, Serpent, Dragon, ElderDragon, ElderDragon],
    [Dragon, ElderDragon, Serpent, ElderDragon, ElderDragon, Serpent, ElderDragon, Dragon],
    [Serpent, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, Serpent],
    [ElderDragon, Serpent, Dragon, ElderDragon, ElderDragon, Dragon, Serpent, ElderDragon],
    [Dragon, ElderDragon, Serpent, Dragon, Dragon, Serpent, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Serpent, Serpent, ElderDragon, Dragon, ElderDragon],
  ],

  // Stage 9: Flame Ascent
  [
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, Serpent, Dragon, Dragon, Serpent, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, Serpent, Serpent, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
  ],

  // Stage 10: Dragon's Summit
  [
    [ElderDragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, ElderDragon],
    [Dragon, ElderDragon, ElderDragon, Dragon, Dragon, ElderDragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Serpent, Serpent, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Serpent, ElderDragon, ElderDragon, Serpent, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, ElderDragon, Dragon, Dragon, ElderDragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, Dragon, ElderDragon],
  ],

  // Stage 11: Wyrm King's Domain
  [
    [ElderDragon, ElderDragon, ElderDragon, Dragon, Dragon, ElderDragon, ElderDragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, ElderDragon, ElderDragon, Dragon, Dragon, ElderDragon, ElderDragon, ElderDragon],
  ],

  // Stage 12: Crimson Fortress
  [
    [ElderDragon, Dragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, Dragon, Dragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, Dragon, ElderDragon],
  ],

  // Stage 13: Sacred Dragonhold
  [
    [ElderDragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, ElderDragon],
    [Dragon, ElderDragon, ElderDragon, Dragon, Dragon, ElderDragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, ElderDragon, ElderDragon, Dragon, Dragon, ElderDragon, ElderDragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, ElderDragon, Dragon, Dragon, ElderDragon, ElderDragon, Dragon],
  ],

  // Stage 14: Imperial Sanctum
  [
    [ElderDragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, Dragon, Dragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, ElderDragon, ElderDragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, ElderDragon, Dragon, Dragon, ElderDragon, ElderDragon, Dragon],
  ],

  // Stage 15: The Dragon Emperor
  [
    [null, null, null, DragonEmperorBoss, null, null, null],
    [ElderDragon, null, Dragon, null, Dragon, null, ElderDragon],
    [Dragon, ElderDragon, Dragon, null, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, ElderDragon, Dragon, ElderDragon],
    [Dragon, ElderDragon, Dragon, ElderDragon, Dragon, ElderDragon, Dragon],
    [ElderDragon, Dragon, ElderDragon, Dragon, ElderDragon, Dragon, ElderDragon],
  ],
];
