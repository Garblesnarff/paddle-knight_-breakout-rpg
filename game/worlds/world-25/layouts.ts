import { BrickType } from '../../../types';

const { Vampire, Werewolf, Ghoul, Banshee, Reaper, Lich, BloodLordBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Crimson Dawn
  [
    [Vampire, Vampire, Vampire, Vampire, Vampire, Vampire, Vampire, Vampire],
    [null, Werewolf, null, Werewolf, null, Werewolf, null, Werewolf],
    [Vampire, Vampire, Vampire, Vampire, Vampire, Vampire, Vampire, Vampire],
    [Werewolf, null, Werewolf, null, Werewolf, null, Werewolf, null],
  ],

  // Stage 2: Moonlight Shadows
  [
    [Werewolf, Vampire, Werewolf, Vampire, Vampire, Werewolf, Vampire, Werewolf],
    [Vampire, Werewolf, Vampire, Werewolf, Werewolf, Vampire, Werewolf, Vampire],
    [Ghoul, Ghoul, Vampire, Vampire, Vampire, Vampire, Ghoul, Ghoul],
    [Vampire, Werewolf, Ghoul, Werewolf, Werewolf, Ghoul, Werewolf, Vampire],
  ],

  // Stage 3: Graveyard Rising
  [
    [Ghoul, Werewolf, Vampire, Werewolf, Werewolf, Vampire, Werewolf, Ghoul],
    [Werewolf, Ghoul, Ghoul, Vampire, Vampire, Ghoul, Ghoul, Werewolf],
    [Vampire, Vampire, Ghoul, Werewolf, Werewolf, Ghoul, Vampire, Vampire],
    [Ghoul, Werewolf, Vampire, Ghoul, Ghoul, Vampire, Werewolf, Ghoul],
  ],

  // Stage 4: Wailing Corridors
  [
    [Banshee, Ghoul, Werewolf, Ghoul, Ghoul, Werewolf, Ghoul, Banshee],
    [Ghoul, Vampire, Banshee, Werewolf, Werewolf, Banshee, Vampire, Ghoul],
    [Werewolf, Banshee, Ghoul, Vampire, Vampire, Ghoul, Banshee, Werewolf],
    [Banshee, Ghoul, Werewolf, Banshee, Banshee, Werewolf, Ghoul, Banshee],
    [Ghoul, Werewolf, Vampire, Ghoul, Ghoul, Vampire, Werewolf, Ghoul],
  ],

  // Stage 5: Death's Chamber
  [
    [Reaper, Banshee, Ghoul, Werewolf, Werewolf, Ghoul, Banshee, Reaper],
    [Banshee, Ghoul, Reaper, Banshee, Banshee, Reaper, Ghoul, Banshee],
    [Ghoul, Reaper, Banshee, Ghoul, Ghoul, Banshee, Reaper, Ghoul],
    [Werewolf, Banshee, Ghoul, Reaper, Reaper, Ghoul, Banshee, Werewolf],
    [Reaper, Ghoul, Banshee, Werewolf, Werewolf, Banshee, Ghoul, Reaper],
  ],

  // Stage 6: Undead Sanctuary
  [
    [Reaper, Banshee, Ghoul, Reaper, Reaper, Ghoul, Banshee, Reaper],
    [Banshee, Ghoul, Werewolf, Banshee, Banshee, Werewolf, Ghoul, Banshee],
    [Ghoul, Reaper, Banshee, Vampire, Vampire, Banshee, Reaper, Ghoul],
    [Reaper, Banshee, Ghoul, Reaper, Reaper, Ghoul, Banshee, Reaper],
    [Banshee, Ghoul, Reaper, Banshee, Banshee, Reaper, Ghoul, Banshee],
  ],

  // Stage 7: Cryptic Halls
  [
    [Lich, Reaper, Banshee, Ghoul, Ghoul, Banshee, Reaper, Lich],
    [Reaper, Banshee, Lich, Reaper, Reaper, Lich, Banshee, Reaper],
    [Banshee, Lich, Reaper, Banshee, Banshee, Reaper, Lich, Banshee],
    [Ghoul, Reaper, Banshee, Lich, Lich, Banshee, Reaper, Ghoul],
    [Lich, Banshee, Reaper, Ghoul, Ghoul, Reaper, Banshee, Lich],
    [Reaper, Lich, Banshee, Reaper, Reaper, Banshee, Lich, Reaper],
  ],

  // Stage 8: Sanguine Fortress
  [
    [Lich, Lich, Reaper, Banshee, Banshee, Reaper, Lich, Lich],
    [Reaper, Lich, Lich, Reaper, Reaper, Lich, Lich, Reaper],
    [Banshee, Reaper, Lich, Ghoul, Ghoul, Lich, Reaper, Banshee],
    [Lich, Banshee, Reaper, Lich, Lich, Reaper, Banshee, Lich],
    [Reaper, Lich, Banshee, Reaper, Reaper, Banshee, Lich, Reaper],
    [Lich, Reaper, Lich, Banshee, Banshee, Lich, Reaper, Lich],
  ],

  // Stage 9: Hemoglobin Citadel
  [
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Banshee, Lich, Lich, Banshee, Lich, Reaper],
    [Lich, Banshee, Lich, Reaper, Reaper, Lich, Banshee, Lich],
    [Banshee, Lich, Reaper, Lich, Lich, Reaper, Lich, Banshee],
    [Lich, Reaper, Lich, Banshee, Banshee, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
  ],

  // Stage 10: Eternal Night
  [
    [Lich, Lich, Lich, Reaper, Reaper, Lich, Lich, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Banshee, Banshee, Reaper, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Lich, Reaper, Reaper, Reaper, Reaper, Lich, Lich],
  ],

  // Stage 11: Vampiric Throne
  [
    [Lich, Lich, Reaper, Lich, Lich, Reaper, Lich, Lich],
    [Reaper, Lich, Lich, Reaper, Reaper, Lich, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Lich, Lich, Reaper, Reaper, Lich, Lich, Lich],
  ],

  // Stage 12: Cursed Necropolis
  [
    [Lich, Reaper, Lich, Lich, Lich, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Lich, Reaper, Lich, Lich, Reaper, Lich, Lich],
    [Reaper, Lich, Lich, Reaper, Reaper, Lich, Lich, Reaper],
    [Lich, Reaper, Lich, Lich, Lich, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Lich, Lich, Reaper, Reaper, Lich, Lich, Lich],
  ],

  // Stage 13: Blood Moon Rising
  [
    [Lich, Lich, Lich, Lich, Lich, Lich, Lich, Lich],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Lich, Lich, Reaper, Reaper, Reaper, Reaper, Lich, Lich],
    [Reaper, Reaper, Lich, Lich, Lich, Lich, Reaper, Reaper],
  ],

  // Stage 14: Apex of Darkness
  [
    [Lich, Lich, Lich, Lich, Lich, Lich, Lich, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Reaper, Lich, Lich, Reaper, Lich, Reaper],
    [Lich, Lich, Lich, Reaper, Reaper, Lich, Lich, Lich],
    [Reaper, Reaper, Reaper, Lich, Lich, Reaper, Reaper, Reaper],
  ],

  // Stage 15: The Blood Lord
  [
    [null, null, null, BloodLordBoss, BloodLordBoss, null, null, null],
    [Lich, null, Reaper, null, null, Reaper, null, Lich],
    [Reaper, Lich, Reaper, null, null, Reaper, Lich, Reaper],
    [Lich, Reaper, Lich, Reaper, Reaper, Lich, Reaper, Lich],
    [Reaper, Lich, Banshee, Lich, Lich, Banshee, Lich, Reaper],
    [Lich, Banshee, Ghoul, Reaper, Reaper, Ghoul, Banshee, Lich],
    [Banshee, Ghoul, Werewolf, Banshee, Banshee, Werewolf, Ghoul, Banshee],
  ],
];
