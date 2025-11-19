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
];
