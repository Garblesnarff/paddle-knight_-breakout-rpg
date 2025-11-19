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
];