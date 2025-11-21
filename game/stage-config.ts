// stage-config.ts
export interface StageInfo {
    id: number;
    name: string;
    description: string;
    world: number;  // 1 = Stage 1 (Brick Lord), 2 = Stage 2 (Archmage)
    position: { x: number; y: number }; // Position on the map
    starCriteria: {
        time: number;  // Max time in ms for 3rd star
        minHpPercent: number; // Min HP % for 2nd star
    };
}

export const STAGE_CONFIG: StageInfo[] = [
    // World 1: The Brick Kingdom
    {
        id: 1,
        name: "Castle Gates",
        description: "Grunts and Soldiers guard the entrance",
        world: 1,
        position: { x: 100, y: 300 },
        starCriteria: { time: 120000, minHpPercent: 75 }
    },
    {
        id: 2,
        name: "Archer Towers",
        description: "Archers and Mages defend from above",
        world: 1,
        position: { x: 250, y: 250 },
        starCriteria: { time: 150000, minHpPercent: 75 }
    },
    {
        id: 3,
        name: "The Fortress",
        description: "Tank bricks form an impenetrable wall",
        world: 1,
        position: { x: 400, y: 200 },
        starCriteria: { time: 180000, minHpPercent: 75 }
    },
    {
        id: 4,
        name: "Chaos Garden",
        description: "Chaos reigns in the courtyard",
        world: 1,
        position: { x: 550, y: 150 },
        starCriteria: { time: 200000, minHpPercent: 75 }
    },
    {
        id: 5,
        name: "Throne Room",
        description: "Face the Brick Lord himself!",
        world: 1,
        position: { x: 700, y: 100 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    // World 2: The Arcane Citadel
    {
        id: 6,
        name: "Mystic Gateway",
        description: "Introduction to magical bricks",
        world: 2,
        position: { x: 100, y: 400 },
        starCriteria: { time: 150000, minHpPercent: 75 }
    },
    {
        id: 7,
        name: "Runic Halls",
        description: "Rune and Mirror constructs complicate combat",
        world: 2,
        position: { x: 250, y: 420 },
        starCriteria: { time: 170000, minHpPercent: 75 }
    },
    {
        id: 8,
        name: "Elemental Gauntlet",
        description: "Fire, Ice, and Lightning trials test your mettle",
        world: 2,
        position: { x: 400, y: 440 },
        starCriteria: { time: 190000, minHpPercent: 70 }
    },
    {
        id: 9,
        name: "Hall of Echoes",
        description: "Mirror images and apprentices swarm the halls",
        world: 2,
        position: { x: 550, y: 430 },
        starCriteria: { time: 210000, minHpPercent: 70 }
    },
    {
        id: 10,
        name: "Archmage’s Sanctum",
        description: "Final duel against the Archmage of Bricks",
        world: 2,
        position: { x: 700, y: 420 },
        starCriteria: { time: 240000, minHpPercent: 65 }
    },
    // World 3: The Arid Wastes
    {
        id: 11,
        name: "Sunken Ruins",
        description: "Introduction to the wasteland, with basic scavenger and cactus bricks.",
        world: 3,
        position: { x: 100, y: 500 },
        starCriteria: { time: 160000, minHpPercent: 70 }
    },
    {
        id: 12,
        name: "Shifting Dunes",
        description: "Introduces sandstorms and sandworm bricks.",
        world: 3,
        position: { x: 250, y: 550 },
        starCriteria: { time: 180000, minHpPercent: 70 }
    },
    {
        id: 13,
        name: "The Canyon of Echoes",
        description: "Features quicksand pits and more resilient mutant bricks.",
        world: 3,
        position: { x: 400, y: 520 },
        starCriteria: { time: 200000, minHpPercent: 65 }
    },
    {
        id: 14,
        name: "The Oasis of Despair",
        description: "A mini-boss encounter with a larger, more aggressive Sandworm.",
        world: 3,
        position: { x: 550, y: 580 },
        starCriteria: { time: 220000, minHpPercent: 65 }
    },
    {
        id: 15,
        name: "The Maw of the Desert",
        description: "The final battle against the Colossal Sandworm.",
        world: 3,
        position: { x: 700, y: 550 },
        starCriteria: { time: 260000, minHpPercent: 60 }
    },
];
