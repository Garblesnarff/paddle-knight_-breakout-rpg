import { BrickType } from '../../../types';

const { 
    // Bio-Forge Nexus enemies
    Gearsprite, VineBot, ScrapGolem, Corruptor, HiveMind, Replicator, PrimeSynthesizer
} = BrickType;

export const LEVEL_LAYOUTS = [
    // Stage 1: "The Rooted Machines" - Introduction to Gearsprites and VineBots
    [
        [Gearsprite, Gearsprite, VineBot, Gearsprite, Gearsprite, VineBot, Gearsprite, Gearsprite],
        [null, VineBot, null, Gearsprite, Gearsprite, null, VineBot, null],
        [Gearsprite, null, Gearsprite, VineBot, VineBot, Gearsprite, null, Gearsprite],
        [VineBot, Gearsprite, null, Gearsprite, Gearsprite, null, Gearsprite, VineBot],
    ],

    // Stage 2: "Circuitous Gardens" - ScrapGolems with Energy Surges
    [
        [Gearsprite, ScrapGolem, Gearsprite, VineBot, VineBot, Gearsprite, ScrapGolem, Gearsprite],
        [VineBot, Gearsprite, null, ScrapGolem, ScrapGolem, null, Gearsprite, VineBot],
        [null, VineBot, Gearsprite, Gearsprite, Gearsprite, Gearsprite, VineBot, null],
        [ScrapGolem, null, VineBot, Gearsprite, Gearsprite, VineBot, null, ScrapGolem],
    ],

    // Stage 3: "The Corrupted Weave" - Corruptors and HiveMinds
    [
        [Corruptor, Gearsprite, HiveMind, Gearsprite, Gearsprite, HiveMind, Gearsprite, Corruptor],
        [Gearsprite, VineBot, Gearsprite, Corruptor, Corruptor, Gearsprite, VineBot, Gearsprite],
        [HiveMind, Gearsprite, ScrapGolem, Gearsprite, Gearsprite, ScrapGolem, Gearsprite, HiveMind],
        [Gearsprite, Corruptor, Gearsprite, VineBot, VineBot, Gearsprite, Corruptor, Gearsprite],
    ],

    // Stage 4: "Synthetic Ecosystem" - All enemy types combined
    [
        [Replicator, Corruptor, HiveMind, ScrapGolem, ScrapGolem, HiveMind, Corruptor, Replicator],
        [Gearsprite, VineBot, Gearsprite, Corruptor, Corruptor, Gearsprite, VineBot, Gearsprite],
        [ScrapGolem, Gearsprite, Replicator, Gearsprite, Gearsprite, Replicator, Gearsprite, ScrapGolem],
        [Corruptor, HiveMind, Gearsprite, VineBot, VineBot, Gearsprite, HiveMind, Corruptor],
        [Gearsprite, Gearsprite, ScrapGolem, Replicator, Replicator, ScrapGolem, Gearsprite, Gearsprite],
    ],

    // Stage 5: "The Prime Conduit" - Prime Synthesizer Boss Fight
    [
        [null, null, null, PrimeSynthesizer, null, null, null],
        [null, Corruptor, null, null, null, Corruptor, null],
        [Gearsprite, null, HiveMind, null, HiveMind, null, Gearsprite],
        [null, ScrapGolem, null, Replicator, null, ScrapGolem, null],
        [VineBot, null, Gearsprite, null, Gearsprite, null, VineBot],
    ],

    // Stage 6: "Neural Network Core"
    [
        [HiveMind, Gearsprite, Gearsprite, Corruptor, Corruptor, Gearsprite, Gearsprite, HiveMind],
        [Gearsprite, Replicator, VineBot, Gearsprite, Gearsprite, VineBot, Replicator, Gearsprite],
        [Corruptor, Gearsprite, HiveMind, ScrapGolem, ScrapGolem, HiveMind, Gearsprite, Corruptor],
        [Gearsprite, VineBot, ScrapGolem, Replicator, Replicator, ScrapGolem, VineBot, Gearsprite],
        [HiveMind, Corruptor, Gearsprite, Gearsprite, Gearsprite, Gearsprite, Corruptor, HiveMind],
    ],

    // Stage 7: "Evolution Chamber"
    [
        [Replicator, HiveMind, Corruptor, Replicator, Replicator, Corruptor, HiveMind, Replicator],
        [Corruptor, ScrapGolem, Gearsprite, HiveMind, HiveMind, Gearsprite, ScrapGolem, Corruptor],
        [HiveMind, Gearsprite, Replicator, Gearsprite, Gearsprite, Replicator, Gearsprite, HiveMind],
        [ScrapGolem, VineBot, Corruptor, ScrapGolem, ScrapGolem, Corruptor, VineBot, ScrapGolem],
        [Replicator, Corruptor, HiveMind, Replicator, Replicator, HiveMind, Corruptor, Replicator],
    ],

    // Stage 8: "Biomechanical Fusion"
    [
        [HiveMind, Replicator, Corruptor, HiveMind, HiveMind, Corruptor, Replicator, HiveMind],
        [Replicator, ScrapGolem, VineBot, Replicator, Replicator, VineBot, ScrapGolem, Replicator],
        [Corruptor, VineBot, HiveMind, Gearsprite, Gearsprite, HiveMind, VineBot, Corruptor],
        [ScrapGolem, Corruptor, Gearsprite, Replicator, Replicator, Gearsprite, Corruptor, ScrapGolem],
        [HiveMind, Replicator, ScrapGolem, Corruptor, Corruptor, ScrapGolem, Replicator, HiveMind],
    ],

    // Stage 9: "Adaptive Swarm"
    [
        [Replicator, Replicator, HiveMind, Corruptor, Corruptor, HiveMind, Replicator, Replicator],
        [HiveMind, Corruptor, ScrapGolem, HiveMind, HiveMind, ScrapGolem, Corruptor, HiveMind],
        [Corruptor, ScrapGolem, Replicator, VineBot, VineBot, Replicator, ScrapGolem, Corruptor],
        [ScrapGolem, HiveMind, VineBot, Gearsprite, Gearsprite, VineBot, HiveMind, ScrapGolem],
        [Replicator, Corruptor, HiveMind, ScrapGolem, ScrapGolem, HiveMind, Corruptor, Replicator],
    ],

    // Stage 10: "Synthesis Overflow"
    [
        [HiveMind, Corruptor, Replicator, HiveMind, HiveMind, Replicator, Corruptor, HiveMind],
        [Corruptor, ScrapGolem, HiveMind, Corruptor, Corruptor, HiveMind, ScrapGolem, Corruptor],
        [Replicator, HiveMind, Corruptor, Replicator, Replicator, Corruptor, HiveMind, Replicator],
        [ScrapGolem, Replicator, VineBot, ScrapGolem, ScrapGolem, VineBot, Replicator, ScrapGolem],
        [HiveMind, Corruptor, Replicator, HiveMind, HiveMind, Replicator, Corruptor, HiveMind],
    ],

    // Stage 11: "Final Corruption"
    [
        [Replicator, HiveMind, HiveMind, Corruptor, Corruptor, HiveMind, HiveMind, Replicator],
        [HiveMind, Corruptor, Replicator, HiveMind, HiveMind, Replicator, Corruptor, HiveMind],
        [Corruptor, Replicator, ScrapGolem, Corruptor, Corruptor, ScrapGolem, Replicator, Corruptor],
        [HiveMind, ScrapGolem, VineBot, Replicator, Replicator, VineBot, ScrapGolem, HiveMind],
        [Replicator, Corruptor, HiveMind, ScrapGolem, ScrapGolem, HiveMind, Corruptor, Replicator],
    ],

    // Stage 12: "Nexus Finale"
    [
        [HiveMind, Replicator, Corruptor, HiveMind, HiveMind, Corruptor, Replicator, HiveMind],
        [Replicator, Corruptor, HiveMind, Replicator, Replicator, HiveMind, Corruptor, Replicator],
        [Corruptor, HiveMind, Replicator, Corruptor, Corruptor, Replicator, HiveMind, Corruptor],
        [HiveMind, Replicator, ScrapGolem, HiveMind, HiveMind, ScrapGolem, Replicator, HiveMind],
        [Replicator, Corruptor, HiveMind, Replicator, Replicator, HiveMind, Corruptor, Replicator],
    ],

    // Stage 13: "Replication Overflow"
    [
        [Replicator, Replicator, HiveMind, Corruptor, Corruptor, HiveMind, Replicator, Replicator],
        [HiveMind, Corruptor, Replicator, HiveMind, HiveMind, Replicator, Corruptor, HiveMind],
        [Corruptor, Replicator, HiveMind, Corruptor, Corruptor, HiveMind, Replicator, Corruptor],
        [Replicator, HiveMind, Corruptor, Replicator, Replicator, Corruptor, HiveMind, Replicator],
        [HiveMind, Corruptor, Replicator, ScrapGolem, ScrapGolem, Replicator, Corruptor, HiveMind],
        [Replicator, Replicator, HiveMind, Corruptor, Corruptor, HiveMind, Replicator, Replicator],
    ],

    // Stage 14: "Hivemind Ascension"
    [
        [HiveMind, HiveMind, Replicator, Corruptor, Corruptor, Replicator, HiveMind, HiveMind],
        [Replicator, Corruptor, HiveMind, Replicator, Replicator, HiveMind, Corruptor, Replicator],
        [Corruptor, HiveMind, Replicator, HiveMind, HiveMind, Replicator, HiveMind, Corruptor],
        [HiveMind, Replicator, Corruptor, HiveMind, HiveMind, Corruptor, Replicator, HiveMind],
        [Replicator, Corruptor, HiveMind, Replicator, Replicator, HiveMind, Corruptor, Replicator],
        [HiveMind, HiveMind, Corruptor, Replicator, Replicator, Corruptor, HiveMind, HiveMind],
    ],

    // Stage 15: "The Prime Convergence"
    [
        [Replicator, HiveMind, PrimeSynthesizer, PrimeSynthesizer, HiveMind, Replicator],
        [HiveMind, Corruptor, Replicator, Replicator, Corruptor, HiveMind],
        [Corruptor, Replicator, HiveMind, HiveMind, Replicator, Corruptor],
        [Replicator, HiveMind, Corruptor, Corruptor, HiveMind, Replicator],
        [HiveMind, Corruptor, Replicator, Replicator, Corruptor, HiveMind],
        [Corruptor, Replicator, HiveMind, HiveMind, Replicator, Corruptor],
        [Replicator, HiveMind, Corruptor, Corruptor, HiveMind, Replicator],
    ],
];