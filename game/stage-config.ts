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
    // ... add the rest of stage 2 levels
];