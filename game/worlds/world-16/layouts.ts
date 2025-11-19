import { BrickType } from '../../../types';

const { Imp, Hellhound, Demon, Succubus, Tormentor, ArchDemon, LordOfHellBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Gates of Hell
  [
    [Imp, Imp, Imp, Imp, Imp, Imp, Imp, Imp],
    [null, Hellhound, null, Hellhound, null, Hellhound, null, Hellhound],
    [Imp, Imp, Imp, Imp, Imp, Imp, Imp, Imp],
    [Hellhound, null, Hellhound, null, Hellhound, null, Hellhound, null],
  ],

  // Stage 2: Infernal Corridors
  [
    [Demon, Hellhound, Imp, Hellhound, Hellhound, Imp, Hellhound, Demon],
    [Hellhound, Demon, Hellhound, Imp, Imp, Hellhound, Demon, Hellhound],
    [Imp, Hellhound, Demon, Hellhound, Hellhound, Demon, Hellhound, Imp],
    [Demon, Imp, Hellhound, Demon, Demon, Hellhound, Imp, Demon],
  ],

  // Stage 3: Chamber of Temptation
  [
    [Succubus, Demon, Hellhound, Demon, Demon, Hellhound, Demon, Succubus],
    [Demon, Imp, Succubus, Hellhound, Hellhound, Succubus, Imp, Demon],
    [Hellhound, Succubus, Imp, Demon, Demon, Imp, Succubus, Hellhound],
    [Succubus, Hellhound, Demon, Imp, Imp, Demon, Hellhound, Succubus],
  ],

  // Stage 4: Torment Pit
  [
    [Tormentor, Succubus, ArchDemon, Demon, Demon, ArchDemon, Succubus, Tormentor],
    [Succubus, Hellhound, Imp, Tormentor, Tormentor, Imp, Hellhound, Succubus],
    [ArchDemon, Demon, Tormentor, Succubus, Succubus, Tormentor, Demon, ArchDemon],
    [Demon, Imp, Succubus, Hellhound, Hellhound, Succubus, Imp, Demon],
    [Tormentor, ArchDemon, Demon, Imp, Imp, Demon, ArchDemon, Tormentor],
  ],

  // Stage 5: Lord of Hell's Throne
  [
    [null, null, null, LordOfHellBoss, null, null, null],
    [ArchDemon, null, Tormentor, null, Tormentor, null, ArchDemon],
    [Tormentor, ArchDemon, Succubus, null, Succubus, ArchDemon, Tormentor],
    [Succubus, Demon, Hellhound, ArchDemon, ArchDemon, Hellhound, Demon, Succubus],
    [Hellhound, Imp, Demon, null, null, Demon, Imp, Hellhound],
  ],

  // Stage 6: Infernal Crucible
  [
    [Tormentor, Succubus, ArchDemon, Demon, Demon, ArchDemon, Succubus, Tormentor],
    [Succubus, Demon, Tormentor, Hellhound, Hellhound, Tormentor, Demon, Succubus],
    [ArchDemon, Tormentor, Succubus, Demon, Demon, Succubus, Tormentor, ArchDemon],
    [Demon, Hellhound, ArchDemon, Succubus, Succubus, ArchDemon, Hellhound, Demon],
    [Tormentor, ArchDemon, Demon, Succubus, Succubus, Demon, ArchDemon, Tormentor],
  ],

  // Stage 7: Demonic Citadel
  [
    [ArchDemon, Tormentor, Succubus, ArchDemon, ArchDemon, Succubus, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Demon, Succubus, Succubus, Demon, ArchDemon, Tormentor],
    [Succubus, Demon, ArchDemon, Tormentor, Tormentor, ArchDemon, Demon, Succubus],
    [Demon, Succubus, Tormentor, Hellhound, Hellhound, Tormentor, Succubus, Demon],
    [ArchDemon, Tormentor, Succubus, Demon, Demon, Succubus, Tormentor, ArchDemon],
    [Tormentor, Succubus, ArchDemon, Tormentor, Tormentor, ArchDemon, Succubus, Tormentor],
  ],

  // Stage 8: Hellfire Gauntlet
  [
    [ArchDemon, ArchDemon, Tormentor, Succubus, Succubus, Tormentor, ArchDemon, ArchDemon],
    [Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor],
    [Succubus, Tormentor, ArchDemon, Succubus, Succubus, ArchDemon, Tormentor, Succubus],
    [ArchDemon, Succubus, Tormentor, ArchDemon, ArchDemon, Tormentor, Succubus, ArchDemon],
    [Tormentor, ArchDemon, Succubus, Tormentor, Tormentor, Succubus, ArchDemon, Tormentor],
    [Succubus, Tormentor, ArchDemon, Demon, Demon, ArchDemon, Tormentor, Succubus],
    [ArchDemon, Succubus, Tormentor, ArchDemon, ArchDemon, Tormentor, Succubus, ArchDemon],
  ],

  // Stage 9: Abyss of Torment
  [
    [ArchDemon, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, ArchDemon],
    [Tormentor, ArchDemon, Succubus, ArchDemon, ArchDemon, Succubus, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, Succubus, Succubus, ArchDemon, Tormentor, ArchDemon],
    [Succubus, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, Succubus],
    [ArchDemon, Succubus, ArchDemon, Tormentor, Tormentor, ArchDemon, Succubus, ArchDemon],
    [Tormentor, ArchDemon, ArchDemon, Succubus, Succubus, ArchDemon, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, Succubus, ArchDemon, ArchDemon, Succubus, Tormentor, ArchDemon],
  ],

  // Stage 10: Infernal Apocalypse
  [
    [ArchDemon, ArchDemon, ArchDemon, ArchDemon, ArchDemon, ArchDemon, ArchDemon, ArchDemon],
    [ArchDemon, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, ArchDemon, Succubus, Succubus, ArchDemon, ArchDemon, Tormentor],
    [ArchDemon, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, ArchDemon],
    [Tormentor, Succubus, ArchDemon, Tormentor, Tormentor, ArchDemon, Succubus, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, ArchDemon, ArchDemon, ArchDemon, Tormentor, ArchDemon],
    [Succubus, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, Succubus],
    [ArchDemon, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, ArchDemon],
  ],

  // Stage 11: Eternal Damnation
  [
    [ArchDemon, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, ArchDemon],
    [Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, ArchDemon, ArchDemon, ArchDemon, Tormentor, ArchDemon],
    [ArchDemon, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, ArchDemon],
    [Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, ArchDemon, ArchDemon, ArchDemon, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, Tormentor],
    [ArchDemon, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, ArchDemon],
  ],

  // Stage 12: Devouring Darkness
  [
    [ArchDemon, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, Tormentor],
  ],

  // Stage 13: Hellfire Supremacy
  [
    [Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor],
    [ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Tormentor, Tormentor, Tormentor, Tormentor, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, ArchDemon],
    [Tormentor, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, Tormentor],
    [ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Tormentor, Tormentor, Tormentor, Tormentor, ArchDemon, Tormentor],
    [Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor],
  ],

  // Stage 14: Abyssal Legions
  [
    [Tormentor, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, Tormentor],
    [Tormentor, ArchDemon, Tormentor, Tormentor, Tormentor, Tormentor, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon],
    [Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor],
    [Tormentor, ArchDemon, Tormentor, Tormentor, Tormentor, Tormentor, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon],
    [Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor],
    [Tormentor, Tormentor, Tormentor, Tormentor, Tormentor, Tormentor, Tormentor, Tormentor],
  ],

  // Stage 15: Lord of Hell's Wrath
  [
    [null, null, Tormentor, LordOfHellBoss, LordOfHellBoss, Tormentor, null, null],
    [Tormentor, ArchDemon, null, Tormentor, Tormentor, null, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, ArchDemon, null, null, ArchDemon, Tormentor, ArchDemon],
    [Tormentor, ArchDemon, Tormentor, ArchDemon, ArchDemon, Tormentor, ArchDemon, Tormentor],
    [ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon],
    [Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor, ArchDemon, Tormentor, Tormentor],
    [ArchDemon, Tormentor, Tormentor, ArchDemon, ArchDemon, Tormentor, Tormentor, ArchDemon],
    [Tormentor, Tormentor, Tormentor, Tormentor, Tormentor, Tormentor, Tormentor, Tormentor],
  ],
];
