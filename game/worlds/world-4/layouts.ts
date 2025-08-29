import { BrickType } from '../../../types';

const {
  Gear, Steam, Clockwork, Tesla, Piston, Assembly, ChronoEngineerBoss
} = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: The Winding Entrance
  [
    [Gear, Gear, Gear, Steam, Steam, Gear, Gear, Gear],
    [null, Gear, null, Steam, Steam, null, Gear, null],
    [Gear, null, Gear, Steam, Steam, Gear, null, Gear],
    [Steam, Gear, null, Gear, Gear, null, Gear, Steam],
  ],

  // Stage 2: Gear Gallery
  [
    [Gear, Clockwork, Gear, Piston, Piston, Gear, Clockwork, Gear],
    [Clockwork, Gear, null, Piston, Piston, null, Gear, Clockwork],
    [Gear, null, Gear, Clockwork, Clockwork, Gear, null, Gear],
    [Piston, Gear, null, Gear, Gear, null, Gear, Piston],
  ],

  // Stage 3: Steam Factory
  [
    [Steam, Steam, Steam, Gear, Gear, Steam, Steam, Steam],
    [Gear, null, Steam, Steam, Steam, Steam, null, Gear],
    [Steam, Gear, Steam, Clockwork, Clockwork, Steam, Gear, Steam],
    [Steam, null, Steam, Steam, Steam, Steam, null, Steam],
  ],

  // Stage 4: Tesla Laboratory
  [
    [Tesla, Gear, Tesla, Clockwork, Clockwork, Tesla, Gear, Tesla],
    [Gear, Tesla, null, Tesla, Tesla, null, Tesla, Gear],
    [Tesla, Clockwork, Tesla, Piston, Piston, Tesla, Clockwork, Tesla],
    [Gear, Tesla, null, Tesla, Tesla, null, Tesla, Gear],
  ],

  // Stage 5: Engineer's Forge (Boss)
  [
    [ChronoEngineerBoss],
    [Assembly, Gear, Steam, Clockwork, Tesla, Piston, Gear, Assembly],
    [Gear, Steam, Clockwork, Tesla, Piston, Clockwork, Steam, Gear],
    [Assembly, Piston, Gear, Steam, Clockwork, Gear, Piston, Assembly],
  ],
];



