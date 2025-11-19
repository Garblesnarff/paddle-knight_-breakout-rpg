import { BrickType } from '../../../types';

const { QuantumFlux, Superposition, Entangled, WaveFunction, Observer, Uncertainty, QuantumSingularityBoss } = BrickType;

export const LEVEL_LAYOUTS = [
  // Stage 1: Quantum Fluctuations
  [
    [QuantumFlux, QuantumFlux, QuantumFlux, QuantumFlux, QuantumFlux, QuantumFlux],
    [null, Superposition, null, Superposition, null, Superposition],
    [QuantumFlux, QuantumFlux, QuantumFlux, QuantumFlux, QuantumFlux, QuantumFlux],
    [Superposition, null, Superposition, null, Superposition, null],
  ],

  // Stage 2: Probability Wave
  [
    [Superposition, QuantumFlux, Superposition, QuantumFlux, Superposition, QuantumFlux],
    [QuantumFlux, Superposition, QuantumFlux, Superposition, QuantumFlux, Superposition],
    [Superposition, QuantumFlux, Superposition, QuantumFlux, Superposition, QuantumFlux],
    [QuantumFlux, Superposition, QuantumFlux, Superposition, QuantumFlux, Superposition],
  ],

  // Stage 3: Entanglement Field
  [
    [Entangled, Superposition, QuantumFlux, Superposition, QuantumFlux, Entangled],
    [Superposition, Entangled, Superposition, QuantumFlux, Entangled, Superposition],
    [QuantumFlux, Superposition, Entangled, Entangled, Superposition, QuantumFlux],
    [Entangled, QuantumFlux, Superposition, Superposition, QuantumFlux, Entangled],
  ],

  // Stage 4: Wave Function Collapse
  [
    [WaveFunction, Entangled, Superposition, Superposition, Entangled, WaveFunction],
    [Entangled, Superposition, WaveFunction, WaveFunction, Superposition, Entangled],
    [Superposition, WaveFunction, Entangled, Entangled, WaveFunction, Superposition],
    [WaveFunction, Entangled, Superposition, Superposition, Entangled, WaveFunction],
    [Entangled, Superposition, QuantumFlux, QuantumFlux, Superposition, Entangled],
  ],

  // Stage 5: Observer Effect
  [
    [Observer, WaveFunction, Entangled, Entangled, WaveFunction, Observer],
    [WaveFunction, Observer, Superposition, Superposition, Observer, WaveFunction],
    [Entangled, Superposition, Observer, Observer, Superposition, Entangled],
    [WaveFunction, Observer, Entangled, Entangled, Observer, WaveFunction],
    [Observer, Entangled, WaveFunction, WaveFunction, Entangled, Observer],
  ],

  // Stage 6: Uncertainty Principle
  [
    [Uncertainty, Observer, WaveFunction, WaveFunction, Observer, Uncertainty],
    [Observer, Uncertainty, Entangled, Entangled, Uncertainty, Observer],
    [WaveFunction, Entangled, Uncertainty, Uncertainty, Entangled, WaveFunction],
    [Observer, Uncertainty, WaveFunction, WaveFunction, Uncertainty, Observer],
    [Uncertainty, WaveFunction, Observer, Observer, WaveFunction, Uncertainty],
  ],

  // Stage 7: Quantum Superposition
  [
    [Uncertainty, Observer, WaveFunction, Entangled, WaveFunction, Observer, Uncertainty],
    [Observer, Uncertainty, Entangled, Superposition, Entangled, Uncertainty, Observer],
    [WaveFunction, Entangled, Uncertainty, Observer, Uncertainty, Entangled, WaveFunction],
    [Entangled, Superposition, Observer, WaveFunction, Observer, Superposition, Entangled],
    [Uncertainty, Observer, WaveFunction, Entangled, WaveFunction, Observer, Uncertainty],
  ],

  // Stage 8: Quantum Tunneling
  [
    [Uncertainty, Uncertainty, Observer, WaveFunction, Observer, Uncertainty, Uncertainty],
    [Observer, WaveFunction, Uncertainty, Entangled, Uncertainty, WaveFunction, Observer],
    [WaveFunction, Uncertainty, Observer, Uncertainty, Observer, Uncertainty, WaveFunction],
    [Uncertainty, Entangled, WaveFunction, Observer, WaveFunction, Entangled, Uncertainty],
    [Observer, WaveFunction, Uncertainty, Uncertainty, Uncertainty, WaveFunction, Observer],
    [Uncertainty, Observer, WaveFunction, Entangled, WaveFunction, Observer, Uncertainty],
  ],

  // Stage 9: Quantum Decoherence
  [
    [Uncertainty, Uncertainty, Observer, Observer, Observer, Uncertainty, Uncertainty],
    [Observer, WaveFunction, Uncertainty, WaveFunction, Uncertainty, WaveFunction, Observer],
    [Uncertainty, Observer, WaveFunction, Uncertainty, WaveFunction, Observer, Uncertainty],
    [WaveFunction, Uncertainty, Observer, WaveFunction, Observer, Uncertainty, WaveFunction],
    [Observer, WaveFunction, Uncertainty, Observer, Uncertainty, WaveFunction, Observer],
    [Uncertainty, Observer, WaveFunction, WaveFunction, WaveFunction, Observer, Uncertainty],
  ],

  // Stage 10: Quantum Entanglement
  [
    [Uncertainty, Observer, WaveFunction, Entangled, WaveFunction, Observer, Uncertainty],
    [Observer, Uncertainty, WaveFunction, Observer, WaveFunction, Uncertainty, Observer],
    [WaveFunction, Observer, Uncertainty, WaveFunction, Uncertainty, Observer, WaveFunction],
    [Entangled, WaveFunction, Observer, Uncertainty, Observer, WaveFunction, Entangled],
    [WaveFunction, Uncertainty, Observer, WaveFunction, Observer, Uncertainty, WaveFunction],
    [Observer, WaveFunction, Uncertainty, Observer, Uncertainty, WaveFunction, Observer],
    [Uncertainty, Observer, WaveFunction, Entangled, WaveFunction, Observer, Uncertainty],
  ],

  // Stage 11: Quantum Coherence
  [
    [Uncertainty, Uncertainty, Uncertainty, Observer, Observer, Uncertainty, Uncertainty, Uncertainty],
    [Observer, WaveFunction, Observer, WaveFunction, WaveFunction, Observer, WaveFunction, Observer],
    [Uncertainty, Observer, WaveFunction, Uncertainty, Uncertainty, WaveFunction, Observer, Uncertainty],
    [WaveFunction, Uncertainty, Observer, WaveFunction, WaveFunction, Observer, Uncertainty, WaveFunction],
    [Observer, WaveFunction, Uncertainty, Observer, Observer, Uncertainty, WaveFunction, Observer],
    [Uncertainty, Observer, WaveFunction, Uncertainty, Uncertainty, WaveFunction, Observer, Uncertainty],
  ],

  // Stage 12: Quantum Interference
  [
    [Uncertainty, Observer, Uncertainty, Observer, Observer, Uncertainty, Observer, Uncertainty],
    [Observer, Uncertainty, WaveFunction, Uncertainty, Uncertainty, WaveFunction, Uncertainty, Observer],
    [WaveFunction, Observer, Uncertainty, WaveFunction, WaveFunction, Uncertainty, Observer, WaveFunction],
    [Uncertainty, WaveFunction, Observer, Uncertainty, Uncertainty, Observer, WaveFunction, Uncertainty],
    [Observer, Uncertainty, WaveFunction, Observer, Observer, WaveFunction, Uncertainty, Observer],
    [Uncertainty, WaveFunction, Observer, WaveFunction, WaveFunction, Observer, WaveFunction, Uncertainty],
    [Observer, Uncertainty, Observer, Uncertainty, Uncertainty, Observer, Uncertainty, Observer],
  ],

  // Stage 13: Quantum Vacuum
  [
    [Uncertainty, Uncertainty, Observer, WaveFunction, WaveFunction, Observer, Uncertainty, Uncertainty],
    [Observer, Uncertainty, Uncertainty, Observer, Observer, Uncertainty, Uncertainty, Observer],
    [WaveFunction, Observer, Uncertainty, WaveFunction, WaveFunction, Uncertainty, Observer, WaveFunction],
    [Observer, WaveFunction, Uncertainty, Observer, Observer, Uncertainty, WaveFunction, Observer],
    [Uncertainty, Observer, WaveFunction, Uncertainty, Uncertainty, WaveFunction, Observer, Uncertainty],
    [WaveFunction, Uncertainty, Observer, WaveFunction, WaveFunction, Observer, Uncertainty, WaveFunction],
    [Observer, Uncertainty, Uncertainty, Observer, Observer, Uncertainty, Uncertainty, Observer],
    [Uncertainty, Observer, WaveFunction, Uncertainty, Uncertainty, WaveFunction, Observer, Uncertainty],
  ],

  // Stage 14: Quantum Chaos
  [
    [Uncertainty, Uncertainty, Uncertainty, Uncertainty, Uncertainty, Uncertainty, Uncertainty, Uncertainty],
    [Observer, Uncertainty, Observer, WaveFunction, WaveFunction, Observer, Uncertainty, Observer],
    [Uncertainty, Observer, Uncertainty, Observer, Observer, Uncertainty, Observer, Uncertainty],
    [WaveFunction, Uncertainty, WaveFunction, Uncertainty, Uncertainty, WaveFunction, Uncertainty, WaveFunction],
    [Uncertainty, Observer, Uncertainty, WaveFunction, WaveFunction, Uncertainty, Observer, Uncertainty],
    [Observer, WaveFunction, Observer, Uncertainty, Uncertainty, Observer, WaveFunction, Observer],
    [Uncertainty, Observer, Uncertainty, Observer, Observer, Uncertainty, Observer, Uncertainty],
    [Uncertainty, Uncertainty, WaveFunction, Uncertainty, Uncertainty, WaveFunction, Uncertainty, Uncertainty],
  ],

  // Stage 15: Quantum Singularity
  [
    [null, null, null, QuantumSingularityBoss, QuantumSingularityBoss, null, null, null],
    [Uncertainty, null, Uncertainty, null, null, Uncertainty, null, Uncertainty],
    [null, Observer, null, Uncertainty, Uncertainty, null, Observer, null],
    [Uncertainty, null, WaveFunction, Observer, Observer, WaveFunction, null, Uncertainty],
    [Observer, WaveFunction, null, Uncertainty, Uncertainty, null, WaveFunction, Observer],
    [WaveFunction, Observer, Uncertainty, null, null, Uncertainty, Observer, WaveFunction],
    [Uncertainty, WaveFunction, Observer, Uncertainty, Uncertainty, Observer, WaveFunction, Uncertainty],
  ],
];
