// world-config.ts
export interface WorldInfo {
    id: number;
    name: string;
    description: string;
    world: number;  // 1 = World 1 (Brick Lord), 2 = World 2 (Archmage), 3 = World 3 (Bio-Forge)
    stage: number;  // 1-5 within each world
    position: { x: number; y: number }; // Position on the map
    starCriteria: {
        time: number;  // Max time in ms for 3rd star
        minHpPercent: number; // Min HP % for 2nd star
    };
}

export interface WorldTheme {
    worldId: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    gradient: string;
    accentColor: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    keyFeatures: string[];
    enemies: string[];
}

export const WORLD_CONFIG: WorldInfo[] = [
    // World 1: The Brick Kingdom
    {
        id: 1,
        name: "Castle Gates",
        description: "Grunts and Soldiers guard the entrance",
        world: 1,
        stage: 1,
        position: { x: 100, y: 300 },
        starCriteria: { time: 120000, minHpPercent: 75 }
    },
    {
        id: 2,
        name: "Archer Towers",
        description: "Archers and Mages defend from above",
        world: 1,
        stage: 2,
        position: { x: 250, y: 250 },
        starCriteria: { time: 150000, minHpPercent: 75 }
    },
    {
        id: 3,
        name: "The Fortress",
        description: "Tank bricks form an impenetrable wall",
        world: 1,
        stage: 3,
        position: { x: 400, y: 200 },
        starCriteria: { time: 180000, minHpPercent: 75 }
    },
    {
        id: 4,
        name: "Chaos Garden",
        description: "Chaos reigns in the courtyard",
        world: 1,
        stage: 4,
        position: { x: 550, y: 150 },
        starCriteria: { time: 200000, minHpPercent: 75 }
    },
    {
        id: 5,
        name: "Throne Room",
        description: "Face the Brick Lord himself!",
        world: 1,
        stage: 5,
        position: { x: 700, y: 100 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    // World 2: The Arcane Citadel
    {
        id: 6,
        name: "Mystic Gateway",
        description: "Introduction to magical bricks",
        world: 2,
        stage: 1,
        position: { x: 100, y: 400 },
        starCriteria: { time: 150000, minHpPercent: 75 }
    },
    {
        id: 7,
        name: "Runic Halls",
        description: "Rune and Mirror constructs complicate combat",
        world: 2,
        stage: 2,
        position: { x: 250, y: 420 },
        starCriteria: { time: 170000, minHpPercent: 75 }
    },
    {
        id: 8,
        name: "Elemental Gauntlet",
        description: "Fire, Ice, and Lightning trials test your mettle",
        world: 2,
        stage: 3,
        position: { x: 400, y: 440 },
        starCriteria: { time: 190000, minHpPercent: 70 }
    },
    {
        id: 9,
        name: "Hall of Echoes",
        description: "Mirror images and apprentices swarm the halls",
        world: 2,
        stage: 4,
        position: { x: 550, y: 430 },
        starCriteria: { time: 210000, minHpPercent: 70 }
    },
    {
        id: 10,
        name: "Archmage's Sanctum",
        description: "Final duel against the Archmage of Bricks",
        world: 2,
        stage: 5,
        position: { x: 700, y: 420 },
        starCriteria: { time: 240000, minHpPercent: 65 }
    },
    // World 3: Bio-Forge Nexus
    {
        id: 11,
        name: "The Rooted Machines",
        description: "Introduction to dodging and trapping mechanics",
        world: 3,
        stage: 1,
        position: { x: 100, y: 520 },
        starCriteria: { time: 180000, minHpPercent: 70 }
    },
    {
        id: 12,
        name: "Circuitous Gardens",
        description: "Scrap Golems and energy surge hazards",
        world: 3,
        stage: 2,
        position: { x: 250, y: 540 },
        starCriteria: { time: 200000, minHpPercent: 65 }
    },
    {
        id: 13,
        name: "The Corrupted Weave",
        description: "Skill disabling and replication field challenges",
        world: 3,
        stage: 3,
        position: { x: 400, y: 560 },
        starCriteria: { time: 220000, minHpPercent: 65 }
    },
    {
        id: 14,
        name: "Synthetic Ecosystem",
        description: "All Bio-Forge mechanics combined",
        world: 3,
        stage: 4,
        position: { x: 550, y: 550 },
        starCriteria: { time: 240000, minHpPercent: 60 }
    },
    {
        id: 15,
        name: "The Prime Conduit",
        description: "Face the Prime Synthesizer in its domain",
        world: 3,
        stage: 5,
        position: { x: 700, y: 540 },
        starCriteria: { time: 300000, minHpPercent: 55 }
    },
];

// Helper functions for world management
export const getWorldStages = (worldNumber: number): WorldInfo[] => {
    return WORLD_CONFIG.filter(w => w.world === worldNumber);
};

export const getWorldTotalStars = (worldNumber: number): number => {
    return getWorldStages(worldNumber).length * 3; // 5 stages * 3 stars = 15 total
};

export const getWorldCompletedStages = (worldNumber: number, worldData: Record<number, { completed: boolean }>): number => {
    const worldStages = getWorldStages(worldNumber);
    return worldStages.filter(stage => worldData[worldNumber]?.stages?.[stage.id]?.completed).length;
};

export const getWorldEarnedStars = (worldNumber: number, worldData: Record<number, { 
    stages: Record<number, { stars: number }>;
    totalWorldStars: number;
    completedStages: number;
}>): number => {
    const world = worldData[worldNumber];
    if (!world) return 0;
    
    // Use the pre-calculated total if available, otherwise calculate from stages
    if (world.totalWorldStars !== undefined) {
        return world.totalWorldStars;
    }
    
    // Fallback: calculate from individual stages
    const worldStages = getWorldStages(worldNumber);
    return worldStages.reduce((total, stage) => {
        return total + (world.stages?.[stage.id]?.stars || 0);
    }, 0);
};

// World Themes for Card Display
export const WORLD_THEMES: WorldTheme[] = [
    {
        worldId: 1,
        title: "The Brick Kingdom",
        subtitle: "Medieval Conquest",
        description: "A realm of knights, archers, and fortress walls. Master the fundamentals of breakout combat while battling through castle defenses.",
        icon: "🏰",
        gradient: "from-amber-600 via-yellow-600 to-orange-700",
        accentColor: "border-yellow-400",
        difficulty: "Beginner",
        keyFeatures: ["Basic Combat", "RPG Stats", "Boss Battles"],
        enemies: ["Grunts", "Soldiers", "Archers", "Mages", "Tanks", "Chaos", "Brick Lord"]
    },
    {
        worldId: 2,
        title: "Arcane Citadel",
        subtitle: "Elemental Mastery",
        description: "Enter a world of magical forces and elemental chaos. Face wizards, apprentices, and reality-bending spells in this mystical domain.",
        icon: "🔮",
        gradient: "from-purple-600 via-indigo-600 to-blue-700",
        accentColor: "border-purple-400",
        difficulty: "Intermediate",
        keyFeatures: ["Elemental Magic", "Environmental Hazards", "Advanced Skills"],
        enemies: ["Apprentices", "Fire Bricks", "Ice Bricks", "Lightning", "Mirrors", "Runes", "Archmage"]
    },
    {
        worldId: 3,
        title: "Bio-Forge Nexus",
        subtitle: "Techno-Organic Fusion",
        description: "Where ancient life meets advanced machinery. Navigate adaptive enemies, environmental corruption, and reality-warping technology.",
        icon: "🦾",
        gradient: "from-emerald-600 via-teal-600 to-cyan-700",
        accentColor: "border-emerald-400",
        difficulty: "Advanced",
        keyFeatures: ["Adaptive AI", "Debuff Systems", "Environmental Hazards"],
        enemies: ["Gearsprites", "Vine-Bots", "Scrap Golems", "Corruptors", "Hive Minds", "Replicators", "Prime Synthesizer"]
    }
];

export const getWorldTheme = (worldId: number): WorldTheme | undefined => {
    return WORLD_THEMES.find(theme => theme.worldId === worldId);
};
