import { BrickType } from '../../../types';

const { Infected, Carrier, Diseased, Plaguebearer, Quarantine, Epidemic, PlagueDoctorBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: First Outbreak
  [
    [Infected, Infected, Infected, Infected, Infected, Infected, Infected, Infected],
    [null, Carrier, null, Carrier, null, Carrier, null, Carrier],
    [Infected, Infected, Infected, Infected, Infected, Infected, Infected, Infected],
    [Carrier, null, Carrier, null, Carrier, null, Carrier, null],
  ],

  // Stage 2: Spreading Contagion
  [
    [Carrier, Infected, Carrier, Infected, Infected, Carrier, Infected, Carrier],
    [Infected, Carrier, Infected, Carrier, Carrier, Infected, Carrier, Infected],
    [Carrier, Infected, Carrier, Infected, Infected, Carrier, Infected, Carrier],
    [Infected, Carrier, Infected, Diseased, Diseased, Infected, Carrier, Infected],
  ],

  // Stage 3: Diseased Grounds
  [
    [Diseased, Carrier, Infected, Carrier, Carrier, Infected, Carrier, Diseased],
    [Carrier, Infected, Diseased, Infected, Infected, Diseased, Infected, Carrier],
    [Infected, Diseased, Carrier, Diseased, Diseased, Carrier, Diseased, Infected],
    [Diseased, Infected, Carrier, Infected, Infected, Carrier, Infected, Diseased],
  ],

  // Stage 4: Plague Carriers
  [
    [Plaguebearer, Diseased, Carrier, Diseased, Diseased, Carrier, Diseased, Plaguebearer],
    [Diseased, Carrier, Plaguebearer, Infected, Infected, Plaguebearer, Carrier, Diseased],
    [Carrier, Plaguebearer, Diseased, Carrier, Carrier, Diseased, Plaguebearer, Carrier],
    [Plaguebearer, Diseased, Carrier, Diseased, Diseased, Carrier, Diseased, Plaguebearer],
    [Diseased, Carrier, Infected, Carrier, Carrier, Infected, Carrier, Diseased],
  ],

  // Stage 5: Quarantine Zone
  [
    [Quarantine, Plaguebearer, Diseased, Carrier, Carrier, Diseased, Plaguebearer, Quarantine],
    [Plaguebearer, Diseased, Quarantine, Infected, Infected, Quarantine, Diseased, Plaguebearer],
    [Diseased, Quarantine, Plaguebearer, Carrier, Carrier, Plaguebearer, Quarantine, Diseased],
    [Quarantine, Plaguebearer, Diseased, Carrier, Carrier, Diseased, Plaguebearer, Quarantine],
    [Carrier, Diseased, Plaguebearer, Infected, Infected, Plaguebearer, Diseased, Carrier],
  ],

  // Stage 6: Viral Mutation
  [
    [Epidemic, Quarantine, Plaguebearer, Diseased, Diseased, Plaguebearer, Quarantine, Epidemic],
    [Quarantine, Diseased, Carrier, Plaguebearer, Plaguebearer, Carrier, Diseased, Quarantine],
    [Plaguebearer, Carrier, Diseased, Quarantine, Quarantine, Diseased, Carrier, Plaguebearer],
    [Diseased, Plaguebearer, Quarantine, Carrier, Carrier, Quarantine, Plaguebearer, Diseased],
    [Epidemic, Quarantine, Plaguebearer, Diseased, Diseased, Plaguebearer, Quarantine, Epidemic],
  ],

  // Stage 7: Epidemic Spread
  [
    [Epidemic, Quarantine, Epidemic, Plaguebearer, Plaguebearer, Epidemic, Quarantine, Epidemic],
    [Quarantine, Epidemic, Quarantine, Diseased, Diseased, Quarantine, Epidemic, Quarantine],
    [Epidemic, Plaguebearer, Quarantine, Epidemic, Epidemic, Quarantine, Plaguebearer, Epidemic],
    [Quarantine, Diseased, Epidemic, Plaguebearer, Plaguebearer, Epidemic, Diseased, Quarantine],
    [Epidemic, Quarantine, Plaguebearer, Diseased, Diseased, Plaguebearer, Quarantine, Epidemic],
    [Plaguebearer, Diseased, Quarantine, Carrier, Carrier, Quarantine, Diseased, Plaguebearer],
  ],

  // Stage 8: Pestilence Rising
  [
    [Epidemic, Epidemic, Quarantine, Plaguebearer, Plaguebearer, Quarantine, Epidemic, Epidemic],
    [Quarantine, Epidemic, Epidemic, Quarantine, Quarantine, Epidemic, Epidemic, Quarantine],
    [Epidemic, Quarantine, Plaguebearer, Diseased, Diseased, Plaguebearer, Quarantine, Epidemic],
    [Plaguebearer, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Plaguebearer],
    [Quarantine, Plaguebearer, Epidemic, Quarantine, Quarantine, Epidemic, Plaguebearer, Quarantine],
    [Epidemic, Quarantine, Plaguebearer, Diseased, Diseased, Plaguebearer, Quarantine, Epidemic],
  ],

  // Stage 9: Sickening Miasma
  [
    [Epidemic, Quarantine, Epidemic, Quarantine, Quarantine, Epidemic, Quarantine, Epidemic],
    [Quarantine, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Quarantine],
    [Epidemic, Quarantine, Epidemic, Plaguebearer, Plaguebearer, Epidemic, Quarantine, Epidemic],
    [Quarantine, Epidemic, Plaguebearer, Quarantine, Quarantine, Plaguebearer, Epidemic, Quarantine],
    [Epidemic, Plaguebearer, Quarantine, Epidemic, Epidemic, Quarantine, Plaguebearer, Epidemic],
    [Plaguebearer, Quarantine, Epidemic, Diseased, Diseased, Epidemic, Quarantine, Plaguebearer],
    [Epidemic, Epidemic, Quarantine, Plaguebearer, Plaguebearer, Quarantine, Epidemic, Epidemic],
  ],

  // Stage 10: Corrupted Domain
  [
    [Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic],
    [Epidemic, Quarantine, Quarantine, Quarantine, Quarantine, Quarantine, Quarantine, Epidemic],
    [Quarantine, Epidemic, Plaguebearer, Diseased, Diseased, Plaguebearer, Epidemic, Quarantine],
    [Quarantine, Plaguebearer, Epidemic, Quarantine, Quarantine, Epidemic, Plaguebearer, Quarantine],
    [Epidemic, Diseased, Quarantine, Epidemic, Epidemic, Quarantine, Diseased, Epidemic],
    [Quarantine, Epidemic, Plaguebearer, Diseased, Diseased, Plaguebearer, Epidemic, Quarantine],
    [Epidemic, Quarantine, Quarantine, Quarantine, Quarantine, Quarantine, Quarantine, Epidemic],
    [Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic],
  ],

  // Stage 11: Infectious Horde
  [
    [Epidemic, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Epidemic],
    [Quarantine, Epidemic, Epidemic, Quarantine, Quarantine, Epidemic, Epidemic, Quarantine],
    [Epidemic, Quarantine, Epidemic, Plaguebearer, Plaguebearer, Epidemic, Quarantine, Epidemic],
    [Epidemic, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Epidemic],
    [Quarantine, Epidemic, Plaguebearer, Quarantine, Quarantine, Plaguebearer, Epidemic, Quarantine],
    [Epidemic, Plaguebearer, Quarantine, Epidemic, Epidemic, Quarantine, Plaguebearer, Epidemic],
    [Quarantine, Epidemic, Epidemic, Plaguebearer, Plaguebearer, Epidemic, Epidemic, Quarantine],
  ],

  // Stage 12: Plague Nest
  [
    [Epidemic, Quarantine, Epidemic, Quarantine, Quarantine, Epidemic, Quarantine, Epidemic],
    [Quarantine, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Quarantine],
    [Epidemic, Quarantine, Epidemic, Quarantine, Quarantine, Epidemic, Quarantine, Epidemic],
    [Quarantine, Epidemic, Plaguebearer, Epidemic, Epidemic, Plaguebearer, Epidemic, Quarantine],
    [Epidemic, Plaguebearer, Quarantine, Plaguebearer, Plaguebearer, Quarantine, Plaguebearer, Epidemic],
    [Quarantine, Epidemic, Plaguebearer, Quarantine, Quarantine, Plaguebearer, Epidemic, Quarantine],
    [Epidemic, Quarantine, Epidemic, Plaguebearer, Plaguebearer, Epidemic, Quarantine, Epidemic],
    [Quarantine, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Quarantine],
  ],

  // Stage 13: Terminal Infection
  [
    [Epidemic, Epidemic, Epidemic, Quarantine, Quarantine, Epidemic, Epidemic, Epidemic],
    [Epidemic, Quarantine, Epidemic, Epidemic, Epidemic, Epidemic, Quarantine, Epidemic],
    [Quarantine, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Quarantine],
    [Epidemic, Epidemic, Epidemic, Quarantine, Quarantine, Epidemic, Epidemic, Epidemic],
    [Quarantine, Epidemic, Plaguebearer, Epidemic, Epidemic, Plaguebearer, Epidemic, Quarantine],
    [Epidemic, Plaguebearer, Quarantine, Plaguebearer, Plaguebearer, Quarantine, Plaguebearer, Epidemic],
    [Quarantine, Epidemic, Epidemic, Quarantine, Quarantine, Epidemic, Epidemic, Quarantine],
    [Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic],
  ],

  // Stage 14: Pandemic's Edge
  [
    [Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic, Epidemic],
    [Epidemic, Quarantine, Quarantine, Epidemic, Epidemic, Quarantine, Quarantine, Epidemic],
    [Quarantine, Epidemic, Quarantine, Quarantine, Quarantine, Quarantine, Epidemic, Quarantine],
    [Epidemic, Quarantine, Epidemic, Quarantine, Quarantine, Epidemic, Quarantine, Epidemic],
    [Epidemic, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Epidemic],
    [Quarantine, Epidemic, Epidemic, Quarantine, Quarantine, Epidemic, Epidemic, Quarantine],
    [Epidemic, Quarantine, Epidemic, Plaguebearer, Plaguebearer, Epidemic, Quarantine, Epidemic],
    [Epidemic, Epidemic, Quarantine, Epidemic, Epidemic, Quarantine, Epidemic, Epidemic],
  ],

  // Stage 15: Plague Doctor's Domain
  [
    [null, null, null, PlagueDoctorBoss, null, null, null],
    [Epidemic, null, Quarantine, null, Quarantine, null, Epidemic],
    [Quarantine, Epidemic, Plaguebearer, null, Plaguebearer, Epidemic, Quarantine],
    [Epidemic, Plaguebearer, Quarantine, Epidemic, Epidemic, Quarantine, Plaguebearer, Epidemic],
    [Plaguebearer, Quarantine, Epidemic, Quarantine, Quarantine, Epidemic, Quarantine, Plaguebearer],
    [Quarantine, Epidemic, Plaguebearer, Diseased, Diseased, Plaguebearer, Epidemic, Quarantine],
    [Epidemic, Quarantine, Diseased, Carrier, Carrier, Diseased, Quarantine, Epidemic],
  ],
];
