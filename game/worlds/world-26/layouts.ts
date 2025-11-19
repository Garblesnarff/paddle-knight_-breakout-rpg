import { BrickType } from '../../../types';

const { Nanobot, Automaton, Mainframe, Protocol, Firewall, Encryption, CoreAIBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: System Boot
  [
    [Nanobot, Nanobot, Nanobot, Nanobot, Nanobot, Nanobot, Nanobot, Nanobot],
    [null, Automaton, null, Automaton, null, Automaton, null, Automaton],
    [Nanobot, Nanobot, Nanobot, Nanobot, Nanobot, Nanobot, Nanobot, Nanobot],
    [Automaton, null, Automaton, null, Automaton, null, Automaton, null],
  ],

  // Stage 2: Logic Gates
  [
    [Automaton, Nanobot, Automaton, Nanobot, Nanobot, Automaton, Nanobot, Automaton],
    [Nanobot, Automaton, Nanobot, Automaton, Automaton, Nanobot, Automaton, Nanobot],
    [Mainframe, Mainframe, Nanobot, Nanobot, Nanobot, Nanobot, Mainframe, Mainframe],
    [Nanobot, Automaton, Mainframe, Automaton, Automaton, Mainframe, Automaton, Nanobot],
  ],

  // Stage 3: Data Processing
  [
    [Mainframe, Automaton, Nanobot, Automaton, Automaton, Nanobot, Automaton, Mainframe],
    [Automaton, Mainframe, Mainframe, Nanobot, Nanobot, Mainframe, Mainframe, Automaton],
    [Nanobot, Nanobot, Mainframe, Automaton, Automaton, Mainframe, Nanobot, Nanobot],
    [Mainframe, Automaton, Nanobot, Mainframe, Mainframe, Nanobot, Automaton, Mainframe],
  ],

  // Stage 4: Protocol Layer
  [
    [Protocol, Mainframe, Automaton, Mainframe, Mainframe, Automaton, Mainframe, Protocol],
    [Mainframe, Nanobot, Protocol, Automaton, Automaton, Protocol, Nanobot, Mainframe],
    [Automaton, Protocol, Mainframe, Nanobot, Nanobot, Mainframe, Protocol, Automaton],
    [Protocol, Mainframe, Automaton, Protocol, Protocol, Automaton, Mainframe, Protocol],
    [Mainframe, Automaton, Nanobot, Mainframe, Mainframe, Nanobot, Automaton, Mainframe],
  ],

  // Stage 5: Firewall Defense
  [
    [Firewall, Protocol, Mainframe, Automaton, Automaton, Mainframe, Protocol, Firewall],
    [Protocol, Mainframe, Firewall, Protocol, Protocol, Firewall, Mainframe, Protocol],
    [Mainframe, Firewall, Protocol, Mainframe, Mainframe, Protocol, Firewall, Mainframe],
    [Automaton, Protocol, Mainframe, Firewall, Firewall, Mainframe, Protocol, Automaton],
    [Firewall, Mainframe, Protocol, Automaton, Automaton, Protocol, Mainframe, Firewall],
  ],

  // Stage 6: Security Matrix
  [
    [Firewall, Protocol, Mainframe, Firewall, Firewall, Mainframe, Protocol, Firewall],
    [Protocol, Mainframe, Automaton, Protocol, Protocol, Automaton, Mainframe, Protocol],
    [Mainframe, Firewall, Protocol, Nanobot, Nanobot, Protocol, Firewall, Mainframe],
    [Firewall, Protocol, Mainframe, Firewall, Firewall, Mainframe, Protocol, Firewall],
    [Protocol, Mainframe, Firewall, Protocol, Protocol, Firewall, Mainframe, Protocol],
  ],

  // Stage 7: Encryption Layers
  [
    [Encryption, Firewall, Protocol, Mainframe, Mainframe, Protocol, Firewall, Encryption],
    [Firewall, Protocol, Encryption, Firewall, Firewall, Encryption, Protocol, Firewall],
    [Protocol, Encryption, Firewall, Protocol, Protocol, Firewall, Encryption, Protocol],
    [Mainframe, Firewall, Protocol, Encryption, Encryption, Protocol, Firewall, Mainframe],
    [Encryption, Protocol, Firewall, Mainframe, Mainframe, Firewall, Protocol, Encryption],
    [Firewall, Encryption, Protocol, Firewall, Firewall, Protocol, Encryption, Firewall],
  ],

  // Stage 8: Binary Fortress
  [
    [Encryption, Encryption, Firewall, Protocol, Protocol, Firewall, Encryption, Encryption],
    [Firewall, Encryption, Encryption, Firewall, Firewall, Encryption, Encryption, Firewall],
    [Protocol, Firewall, Encryption, Mainframe, Mainframe, Encryption, Firewall, Protocol],
    [Encryption, Protocol, Firewall, Encryption, Encryption, Firewall, Protocol, Encryption],
    [Firewall, Encryption, Protocol, Firewall, Firewall, Protocol, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Protocol, Protocol, Encryption, Firewall, Encryption],
  ],

  // Stage 9: Neural Network
  [
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Protocol, Encryption, Encryption, Protocol, Encryption, Firewall],
    [Encryption, Protocol, Encryption, Firewall, Firewall, Encryption, Protocol, Encryption],
    [Protocol, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Protocol],
    [Encryption, Firewall, Encryption, Protocol, Protocol, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
  ],

  // Stage 10: Machine Learning
  [
    [Encryption, Encryption, Encryption, Firewall, Firewall, Encryption, Encryption, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Protocol, Protocol, Firewall, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Encryption, Firewall, Firewall, Firewall, Firewall, Encryption, Encryption],
  ],

  // Stage 11: Quantum Computing
  [
    [Encryption, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Encryption],
    [Firewall, Encryption, Encryption, Firewall, Firewall, Encryption, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Encryption, Encryption, Firewall, Firewall, Encryption, Encryption, Encryption],
  ],

  // Stage 12: System Override
  [
    [Encryption, Firewall, Encryption, Encryption, Encryption, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Encryption],
    [Firewall, Encryption, Encryption, Firewall, Firewall, Encryption, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Encryption, Encryption, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Encryption, Encryption, Firewall, Firewall, Encryption, Encryption, Encryption],
  ],

  // Stage 13: Core Access
  [
    [Encryption, Encryption, Encryption, Encryption, Encryption, Encryption, Encryption, Encryption],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Encryption, Encryption, Firewall, Firewall, Firewall, Firewall, Encryption, Encryption],
    [Firewall, Firewall, Encryption, Encryption, Encryption, Encryption, Firewall, Firewall],
  ],

  // Stage 14: Final Protocol
  [
    [Encryption, Encryption, Encryption, Encryption, Encryption, Encryption, Encryption, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Firewall, Encryption, Encryption, Firewall, Encryption, Firewall],
    [Encryption, Encryption, Encryption, Firewall, Firewall, Encryption, Encryption, Encryption],
    [Firewall, Firewall, Firewall, Encryption, Encryption, Firewall, Firewall, Firewall],
  ],

  // Stage 15: The Core AI
  [
    [null, null, null, CoreAIBoss, CoreAIBoss, null, null, null],
    [Encryption, null, Firewall, null, null, Firewall, null, Encryption],
    [Firewall, Encryption, Firewall, null, null, Firewall, Encryption, Firewall],
    [Encryption, Firewall, Encryption, Firewall, Firewall, Encryption, Firewall, Encryption],
    [Firewall, Encryption, Protocol, Encryption, Encryption, Protocol, Encryption, Firewall],
    [Encryption, Protocol, Mainframe, Firewall, Firewall, Mainframe, Protocol, Encryption],
    [Protocol, Mainframe, Automaton, Protocol, Protocol, Automaton, Mainframe, Protocol],
  ],
];
