import { BrickType } from '../../../types';

const { Drone, Turret, Mech, Hacker, Cyborg, AI_Core, MegaCorporationBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Neon Streets
  [
    [Drone, Drone, Drone, Drone, Drone, Drone, Drone, Drone],
    [null, Turret, null, Turret, null, Turret, null, Turret],
    [Drone, Drone, Drone, Drone, Drone, Drone, Drone, Drone],
    [Turret, null, Turret, null, Turret, null, Turret, null],
  ],

  // Stage 2: Corporate Sector
  [
    [Mech, Turret, Drone, Turret, Turret, Drone, Turret, Mech],
    [Turret, Mech, Turret, Drone, Drone, Turret, Mech, Turret],
    [Drone, Turret, Mech, Turret, Turret, Mech, Turret, Drone],
    [Mech, Drone, Turret, Mech, Mech, Turret, Drone, Mech],
  ],

  // Stage 3: Hacker's Den
  [
    [Hacker, Mech, Turret, Mech, Mech, Turret, Mech, Hacker],
    [Mech, Drone, Hacker, Turret, Turret, Hacker, Drone, Mech],
    [Turret, Hacker, Drone, Mech, Mech, Drone, Hacker, Turret],
    [Hacker, Turret, Mech, Drone, Drone, Mech, Turret, Hacker],
  ],

  // Stage 4: Cyborg Factory
  [
    [Cyborg, Hacker, AI_Core, Mech, Mech, AI_Core, Hacker, Cyborg],
    [Hacker, Turret, Drone, Cyborg, Cyborg, Drone, Turret, Hacker],
    [AI_Core, Mech, Cyborg, Hacker, Hacker, Cyborg, Mech, AI_Core],
    [Mech, Drone, Hacker, Turret, Turret, Hacker, Drone, Mech],
    [Cyborg, AI_Core, Mech, Drone, Drone, Mech, AI_Core, Cyborg],
  ],

  // Stage 5: MegaCorp Headquarters
  [
    [null, null, null, MegaCorporationBoss, null, null, null],
    [AI_Core, null, Cyborg, null, Cyborg, null, AI_Core],
    [Cyborg, AI_Core, Hacker, null, Hacker, AI_Core, Cyborg],
    [Hacker, Mech, Turret, AI_Core, AI_Core, Turret, Mech, Hacker],
    [Turret, Drone, Mech, null, null, Mech, Drone, Turret],
  ],

  // Stage 6: Digital Fortress
  [
    [Cyborg, Hacker, AI_Core, Mech, Mech, AI_Core, Hacker, Cyborg],
    [Hacker, Mech, Cyborg, Turret, Turret, Cyborg, Mech, Hacker],
    [AI_Core, Cyborg, Hacker, Mech, Mech, Hacker, Cyborg, AI_Core],
    [Mech, Turret, AI_Core, Hacker, Hacker, AI_Core, Turret, Mech],
    [Cyborg, AI_Core, Mech, Hacker, Hacker, Mech, AI_Core, Cyborg],
  ],

  // Stage 7: Neural Network
  [
    [AI_Core, Cyborg, Hacker, AI_Core, AI_Core, Hacker, Cyborg, AI_Core],
    [Cyborg, AI_Core, Mech, Hacker, Hacker, Mech, AI_Core, Cyborg],
    [Hacker, Mech, AI_Core, Cyborg, Cyborg, AI_Core, Mech, Hacker],
    [Mech, Hacker, Cyborg, Turret, Turret, Cyborg, Hacker, Mech],
    [AI_Core, Cyborg, Hacker, Mech, Mech, Hacker, Cyborg, AI_Core],
    [Cyborg, Hacker, AI_Core, Cyborg, Cyborg, AI_Core, Hacker, Cyborg],
  ],

  // Stage 8: Quantum Mainframe
  [
    [AI_Core, AI_Core, Cyborg, Hacker, Hacker, Cyborg, AI_Core, AI_Core],
    [Cyborg, AI_Core, AI_Core, Cyborg, Cyborg, AI_Core, AI_Core, Cyborg],
    [Hacker, Cyborg, AI_Core, Hacker, Hacker, AI_Core, Cyborg, Hacker],
    [AI_Core, Hacker, Cyborg, AI_Core, AI_Core, Cyborg, Hacker, AI_Core],
    [Cyborg, AI_Core, Hacker, Cyborg, Cyborg, Hacker, AI_Core, Cyborg],
    [Hacker, Cyborg, AI_Core, Mech, Mech, AI_Core, Cyborg, Hacker],
    [AI_Core, Hacker, Cyborg, AI_Core, AI_Core, Cyborg, Hacker, AI_Core],
  ],

  // Stage 9: Cybernetic Ascension
  [
    [AI_Core, AI_Core, AI_Core, Cyborg, Cyborg, AI_Core, AI_Core, AI_Core],
    [Cyborg, AI_Core, Hacker, AI_Core, AI_Core, Hacker, AI_Core, Cyborg],
    [AI_Core, Cyborg, AI_Core, Hacker, Hacker, AI_Core, Cyborg, AI_Core],
    [Hacker, AI_Core, Cyborg, AI_Core, AI_Core, Cyborg, AI_Core, Hacker],
    [AI_Core, Hacker, AI_Core, Cyborg, Cyborg, AI_Core, Hacker, AI_Core],
    [Cyborg, AI_Core, AI_Core, Hacker, Hacker, AI_Core, AI_Core, Cyborg],
    [AI_Core, Cyborg, Hacker, AI_Core, AI_Core, Hacker, Cyborg, AI_Core],
  ],

  // Stage 10: Singularity Core
  [
    [AI_Core, AI_Core, AI_Core, AI_Core, AI_Core, AI_Core, AI_Core, AI_Core],
    [AI_Core, Cyborg, AI_Core, Cyborg, Cyborg, AI_Core, Cyborg, AI_Core],
    [Cyborg, AI_Core, AI_Core, Hacker, Hacker, AI_Core, AI_Core, Cyborg],
    [AI_Core, AI_Core, Cyborg, AI_Core, AI_Core, Cyborg, AI_Core, AI_Core],
    [Cyborg, Hacker, AI_Core, Cyborg, Cyborg, AI_Core, Hacker, Cyborg],
    [AI_Core, Cyborg, AI_Core, AI_Core, AI_Core, AI_Core, Cyborg, AI_Core],
    [Hacker, AI_Core, Cyborg, AI_Core, AI_Core, Cyborg, AI_Core, Hacker],
    [AI_Core, AI_Core, AI_Core, Cyborg, Cyborg, AI_Core, AI_Core, AI_Core],
  ],
];
