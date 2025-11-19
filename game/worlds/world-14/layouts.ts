import { BrickType } from '../../../types';

const { Anomaly, Riftborn, Voidspawn, Ethereal, Nullifier, Paradox, VoidLordBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Void Rifts
  [
    [Anomaly, Anomaly, Anomaly, Anomaly, Anomaly, Anomaly, Anomaly, Anomaly],
    [null, Riftborn, null, Riftborn, null, Riftborn, null, Riftborn],
    [Anomaly, Anomaly, Anomaly, Anomaly, Anomaly, Anomaly, Anomaly, Anomaly],
    [Riftborn, null, Riftborn, null, Riftborn, null, Riftborn, null],
  ],

  // Stage 2: Voidspawn Emergence
  [
    [Voidspawn, Riftborn, Anomaly, Riftborn, Riftborn, Anomaly, Riftborn, Voidspawn],
    [Riftborn, Voidspawn, Riftborn, Anomaly, Anomaly, Riftborn, Voidspawn, Riftborn],
    [Anomaly, Riftborn, Voidspawn, Riftborn, Riftborn, Voidspawn, Riftborn, Anomaly],
    [Voidspawn, Anomaly, Riftborn, Voidspawn, Voidspawn, Riftborn, Anomaly, Voidspawn],
  ],

  // Stage 3: Ethereal Plane
  [
    [Ethereal, Voidspawn, Riftborn, Voidspawn, Voidspawn, Riftborn, Voidspawn, Ethereal],
    [Voidspawn, Anomaly, Ethereal, Riftborn, Riftborn, Ethereal, Anomaly, Voidspawn],
    [Riftborn, Ethereal, Anomaly, Voidspawn, Voidspawn, Anomaly, Ethereal, Riftborn],
    [Ethereal, Riftborn, Voidspawn, Anomaly, Anomaly, Voidspawn, Riftborn, Ethereal],
  ],

  // Stage 4: Nullification Zone
  [
    [Nullifier, Ethereal, Paradox, Voidspawn, Voidspawn, Paradox, Ethereal, Nullifier],
    [Ethereal, Riftborn, Anomaly, Nullifier, Nullifier, Anomaly, Riftborn, Ethereal],
    [Paradox, Voidspawn, Nullifier, Ethereal, Ethereal, Nullifier, Voidspawn, Paradox],
    [Voidspawn, Anomaly, Ethereal, Riftborn, Riftborn, Ethereal, Anomaly, Voidspawn],
    [Nullifier, Paradox, Voidspawn, Anomaly, Anomaly, Voidspawn, Paradox, Nullifier],
  ],

  // Stage 5: Void Lord's Domain
  [
    [null, null, null, VoidLordBoss, null, null, null],
    [Paradox, null, Nullifier, null, Nullifier, null, Paradox],
    [Nullifier, Paradox, Ethereal, null, Ethereal, Paradox, Nullifier],
    [Ethereal, Voidspawn, Riftborn, Paradox, Paradox, Riftborn, Voidspawn, Ethereal],
    [Riftborn, Anomaly, Voidspawn, null, null, Voidspawn, Anomaly, Riftborn],
  ],

  // Stage 6: Paradox Cascade
  [
    [Paradox, Nullifier, Ethereal, Voidspawn, Voidspawn, Ethereal, Nullifier, Paradox],
    [Nullifier, Ethereal, Paradox, Riftborn, Riftborn, Paradox, Ethereal, Nullifier],
    [Ethereal, Voidspawn, Riftborn, Anomaly, Anomaly, Riftborn, Voidspawn, Ethereal],
    [Voidspawn, Riftborn, Anomaly, Ethereal, Ethereal, Anomaly, Riftborn, Voidspawn],
    [Paradox, Nullifier, Ethereal, Voidspawn, Voidspawn, Ethereal, Nullifier, Paradox],
  ],

  // Stage 7: Nullification Chamber
  [
    [Nullifier, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Nullifier],
    [Paradox, Nullifier, Ethereal, Nullifier, Nullifier, Ethereal, Nullifier, Paradox],
    [Nullifier, Ethereal, Paradox, Voidspawn, Voidspawn, Paradox, Ethereal, Nullifier],
    [Ethereal, Paradox, Voidspawn, Riftborn, Riftborn, Voidspawn, Paradox, Ethereal],
    [Paradox, Nullifier, Ethereal, Voidspawn, Voidspawn, Ethereal, Nullifier, Paradox],
    [Nullifier, Paradox, Nullifier, Ethereal, Ethereal, Nullifier, Paradox, Nullifier],
  ],

  // Stage 8: Dimensional Rift
  [
    [Paradox, Paradox, Nullifier, Nullifier, Nullifier, Nullifier, Paradox, Paradox],
    [Nullifier, Ethereal, Paradox, Voidspawn, Voidspawn, Paradox, Ethereal, Nullifier],
    [Paradox, Nullifier, Ethereal, Paradox, Paradox, Ethereal, Nullifier, Paradox],
    [Nullifier, Paradox, Nullifier, Ethereal, Ethereal, Nullifier, Paradox, Nullifier],
    [Ethereal, Nullifier, Paradox, Voidspawn, Voidspawn, Paradox, Nullifier, Ethereal],
    [Paradox, Nullifier, Paradox, Nullifier, Nullifier, Paradox, Nullifier, Paradox],
  ],

  // Stage 9: Reality Collapse
  [
    [Paradox, Nullifier, Paradox, Nullifier, Nullifier, Paradox, Nullifier, Paradox],
    [Nullifier, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Nullifier],
    [Paradox, Nullifier, Ethereal, Voidspawn, Voidspawn, Ethereal, Nullifier, Paradox],
    [Nullifier, Ethereal, Paradox, Nullifier, Nullifier, Paradox, Ethereal, Nullifier],
    [Paradox, Nullifier, Paradox, Ethereal, Ethereal, Paradox, Nullifier, Paradox],
    [Nullifier, Paradox, Nullifier, Voidspawn, Voidspawn, Nullifier, Paradox, Nullifier],
    [Paradox, Paradox, Paradox, Nullifier, Nullifier, Paradox, Paradox, Paradox],
  ],

  // Stage 10: Void Singularity
  [
    [Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox],
    [Paradox, Nullifier, Nullifier, Nullifier, Nullifier, Nullifier, Nullifier, Paradox],
    [Nullifier, Paradox, Ethereal, Voidspawn, Voidspawn, Ethereal, Paradox, Nullifier],
    [Nullifier, Ethereal, Paradox, Nullifier, Nullifier, Paradox, Ethereal, Nullifier],
    [Paradox, Voidspawn, Nullifier, Paradox, Paradox, Nullifier, Voidspawn, Paradox],
    [Nullifier, Paradox, Ethereal, Voidspawn, Voidspawn, Ethereal, Paradox, Nullifier],
    [Paradox, Nullifier, Paradox, Nullifier, Nullifier, Paradox, Nullifier, Paradox],
    [Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox],
  ],

  // Stage 11: Dimensional Breach
  [
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Paradox, Nullifier, Paradox, Nullifier, Nullifier, Paradox, Nullifier, Paradox],
    [Nullifier, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Nullifier],
    [Paradox, Nullifier, Paradox, Ethereal, Ethereal, Paradox, Nullifier, Paradox],
    [Nullifier, Paradox, Ethereal, Nullifier, Nullifier, Ethereal, Paradox, Nullifier],
    [Paradox, Nullifier, Paradox, Nullifier, Nullifier, Paradox, Nullifier, Paradox],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
  ],

  // Stage 12: Void Nexus
  [
    [Paradox, Paradox, Paradox, Nullifier, Nullifier, Paradox, Paradox, Paradox],
    [Paradox, Nullifier, Paradox, Paradox, Paradox, Paradox, Nullifier, Paradox],
    [Nullifier, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Nullifier],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Nullifier, Paradox, Paradox, Nullifier, Nullifier, Paradox, Paradox, Nullifier],
    [Paradox, Nullifier, Paradox, Paradox, Paradox, Paradox, Nullifier, Paradox],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox],
  ],

  // Stage 13: Nullspace Labyrinth
  [
    [Paradox, Nullifier, Paradox, Paradox, Paradox, Paradox, Nullifier, Paradox],
    [Nullifier, Paradox, Paradox, Nullifier, Nullifier, Paradox, Paradox, Nullifier],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Paradox, Nullifier, Paradox, Paradox, Paradox, Paradox, Nullifier, Paradox],
    [Nullifier, Paradox, Paradox, Nullifier, Nullifier, Paradox, Paradox, Nullifier],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Nullifier, Paradox, Paradox, Nullifier, Nullifier, Paradox, Paradox, Nullifier],
    [Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox],
  ],

  // Stage 14: Paradox Throne
  [
    [Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Paradox, Nullifier, Paradox, Paradox, Paradox, Paradox, Nullifier, Paradox],
    [Nullifier, Paradox, Paradox, Nullifier, Nullifier, Paradox, Paradox, Nullifier],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Paradox, Nullifier, Paradox, Paradox, Paradox, Paradox, Nullifier, Paradox],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox],
  ],

  // Stage 15: Void Lord's Return
  [
    [Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox],
    [Paradox, null, null, VoidLordBoss, VoidLordBoss, null, null, Paradox],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Nullifier, Paradox, Paradox, Nullifier, Nullifier, Paradox, Paradox, Nullifier],
    [Paradox, Paradox, Nullifier, Paradox, Paradox, Nullifier, Paradox, Paradox],
    [Nullifier, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Nullifier],
    [Paradox, Nullifier, Paradox, Paradox, Paradox, Paradox, Nullifier, Paradox],
    [Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox, Paradox],
  ],
];
