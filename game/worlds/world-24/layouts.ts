import { BrickType } from '../../../types';

const { Spark, Charge, Static, Voltage, Conductor, Thunderbolt, LightningGodBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Static Field
  [
    [Spark, Spark, Spark, Spark, Spark, Spark, Spark, Spark],
    [null, Charge, null, Charge, null, Charge, null, Charge],
    [Spark, Spark, Spark, Spark, Spark, Spark, Spark, Spark],
    [Charge, null, Charge, null, Charge, null, Charge, null],
  ],

  // Stage 2: Electric Surge
  [
    [Charge, Spark, Charge, Spark, Spark, Charge, Spark, Charge],
    [Spark, Charge, Spark, Charge, Charge, Spark, Charge, Spark],
    [Charge, Spark, Charge, Spark, Spark, Charge, Spark, Charge],
    [Spark, Charge, Spark, Static, Static, Spark, Charge, Spark],
  ],

  // Stage 3: Charged Atmosphere
  [
    [Static, Charge, Spark, Charge, Charge, Spark, Charge, Static],
    [Charge, Spark, Static, Spark, Spark, Static, Spark, Charge],
    [Spark, Static, Charge, Static, Static, Charge, Static, Spark],
    [Static, Spark, Charge, Spark, Spark, Charge, Spark, Static],
  ],

  // Stage 4: Voltage Amplifier
  [
    [Voltage, Static, Charge, Static, Static, Charge, Static, Voltage],
    [Static, Charge, Voltage, Spark, Spark, Voltage, Charge, Static],
    [Charge, Voltage, Static, Charge, Charge, Static, Voltage, Charge],
    [Voltage, Static, Charge, Static, Static, Charge, Static, Voltage],
    [Static, Charge, Spark, Charge, Charge, Spark, Charge, Static],
  ],

  // Stage 5: Conductive Matrix
  [
    [Conductor, Voltage, Static, Charge, Charge, Static, Voltage, Conductor],
    [Voltage, Static, Conductor, Spark, Spark, Conductor, Static, Voltage],
    [Static, Conductor, Voltage, Charge, Charge, Voltage, Conductor, Static],
    [Conductor, Voltage, Static, Charge, Charge, Static, Voltage, Conductor],
    [Charge, Static, Voltage, Spark, Spark, Voltage, Static, Charge],
  ],

  // Stage 6: Lightning Chain
  [
    [Thunderbolt, Conductor, Voltage, Static, Static, Voltage, Conductor, Thunderbolt],
    [Conductor, Static, Charge, Voltage, Voltage, Charge, Static, Conductor],
    [Voltage, Charge, Static, Conductor, Conductor, Static, Charge, Voltage],
    [Static, Voltage, Conductor, Charge, Charge, Conductor, Voltage, Static],
    [Thunderbolt, Conductor, Voltage, Static, Static, Voltage, Conductor, Thunderbolt],
  ],

  // Stage 7: Storm Front
  [
    [Thunderbolt, Conductor, Thunderbolt, Voltage, Voltage, Thunderbolt, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Conductor, Static, Static, Conductor, Thunderbolt, Conductor],
    [Thunderbolt, Voltage, Conductor, Thunderbolt, Thunderbolt, Conductor, Voltage, Thunderbolt],
    [Conductor, Static, Thunderbolt, Voltage, Voltage, Thunderbolt, Static, Conductor],
    [Thunderbolt, Conductor, Voltage, Static, Static, Voltage, Conductor, Thunderbolt],
    [Voltage, Static, Conductor, Charge, Charge, Conductor, Static, Voltage],
  ],

  // Stage 8: Electrified Citadel
  [
    [Thunderbolt, Thunderbolt, Conductor, Voltage, Voltage, Conductor, Thunderbolt, Thunderbolt],
    [Conductor, Thunderbolt, Thunderbolt, Conductor, Conductor, Thunderbolt, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Voltage, Static, Static, Voltage, Conductor, Thunderbolt],
    [Voltage, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Voltage],
    [Conductor, Voltage, Thunderbolt, Conductor, Conductor, Thunderbolt, Voltage, Conductor],
    [Thunderbolt, Conductor, Voltage, Static, Static, Voltage, Conductor, Thunderbolt],
  ],

  // Stage 9: Crackling Vortex
  [
    [Thunderbolt, Conductor, Thunderbolt, Conductor, Conductor, Thunderbolt, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Thunderbolt, Voltage, Voltage, Thunderbolt, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Voltage, Conductor, Conductor, Voltage, Thunderbolt, Conductor],
    [Thunderbolt, Voltage, Conductor, Thunderbolt, Thunderbolt, Conductor, Voltage, Thunderbolt],
    [Voltage, Conductor, Thunderbolt, Static, Static, Thunderbolt, Conductor, Voltage],
    [Thunderbolt, Thunderbolt, Conductor, Voltage, Voltage, Conductor, Thunderbolt, Thunderbolt],
  ],

  // Stage 10: Tempest Core
  [
    [Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt],
    [Thunderbolt, Conductor, Conductor, Conductor, Conductor, Conductor, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Voltage, Static, Static, Voltage, Thunderbolt, Conductor],
    [Conductor, Voltage, Thunderbolt, Conductor, Conductor, Thunderbolt, Voltage, Conductor],
    [Thunderbolt, Static, Conductor, Thunderbolt, Thunderbolt, Conductor, Static, Thunderbolt],
    [Conductor, Thunderbolt, Voltage, Static, Static, Voltage, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Conductor, Conductor, Conductor, Conductor, Conductor, Thunderbolt],
    [Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt],
  ],

  // Stage 11: Arc Reactor
  [
    [Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Thunderbolt],
    [Conductor, Thunderbolt, Thunderbolt, Conductor, Conductor, Thunderbolt, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Thunderbolt, Voltage, Voltage, Thunderbolt, Conductor, Thunderbolt],
    [Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Thunderbolt],
    [Conductor, Thunderbolt, Voltage, Conductor, Conductor, Voltage, Thunderbolt, Conductor],
    [Thunderbolt, Voltage, Conductor, Thunderbolt, Thunderbolt, Conductor, Voltage, Thunderbolt],
    [Conductor, Thunderbolt, Thunderbolt, Voltage, Voltage, Thunderbolt, Thunderbolt, Conductor],
  ],

  // Stage 12: Plasma Nexus
  [
    [Thunderbolt, Conductor, Thunderbolt, Conductor, Conductor, Thunderbolt, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Thunderbolt, Conductor, Conductor, Thunderbolt, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Voltage, Thunderbolt, Thunderbolt, Voltage, Thunderbolt, Conductor],
    [Thunderbolt, Voltage, Conductor, Voltage, Voltage, Conductor, Voltage, Thunderbolt],
    [Conductor, Thunderbolt, Voltage, Conductor, Conductor, Voltage, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Thunderbolt, Voltage, Voltage, Thunderbolt, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Conductor],
  ],

  // Stage 13: Megavolt Fortress
  [
    [Thunderbolt, Thunderbolt, Thunderbolt, Conductor, Conductor, Thunderbolt, Thunderbolt, Thunderbolt],
    [Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Conductor],
    [Thunderbolt, Thunderbolt, Thunderbolt, Conductor, Conductor, Thunderbolt, Thunderbolt, Thunderbolt],
    [Conductor, Thunderbolt, Voltage, Thunderbolt, Thunderbolt, Voltage, Thunderbolt, Conductor],
    [Thunderbolt, Voltage, Conductor, Voltage, Voltage, Conductor, Voltage, Thunderbolt],
    [Conductor, Thunderbolt, Thunderbolt, Conductor, Conductor, Thunderbolt, Thunderbolt, Conductor],
    [Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt],
  ],

  // Stage 14: Galvanic Apocalypse
  [
    [Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt, Thunderbolt],
    [Thunderbolt, Conductor, Conductor, Thunderbolt, Thunderbolt, Conductor, Conductor, Thunderbolt],
    [Conductor, Thunderbolt, Conductor, Conductor, Conductor, Conductor, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Thunderbolt, Conductor, Conductor, Thunderbolt, Conductor, Thunderbolt],
    [Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Thunderbolt],
    [Conductor, Thunderbolt, Thunderbolt, Conductor, Conductor, Thunderbolt, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Thunderbolt, Voltage, Voltage, Thunderbolt, Conductor, Thunderbolt],
    [Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Thunderbolt, Conductor, Thunderbolt, Thunderbolt],
  ],

  // Stage 15: Lightning God's Throne
  [
    [null, null, null, LightningGodBoss, null, null, null],
    [Thunderbolt, null, Conductor, null, Conductor, null, Thunderbolt],
    [Conductor, Thunderbolt, Voltage, null, Voltage, Thunderbolt, Conductor],
    [Thunderbolt, Voltage, Conductor, Thunderbolt, Thunderbolt, Conductor, Voltage, Thunderbolt],
    [Voltage, Conductor, Thunderbolt, Conductor, Conductor, Thunderbolt, Conductor, Voltage],
    [Conductor, Thunderbolt, Voltage, Static, Static, Voltage, Thunderbolt, Conductor],
    [Thunderbolt, Conductor, Static, Charge, Charge, Static, Conductor, Thunderbolt],
  ],
];
