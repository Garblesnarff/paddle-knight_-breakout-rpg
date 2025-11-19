// world-config.ts
export interface WorldInfo {
    id: number;
    name: string;
    description: string;
    world: number;  // 1 = World 1 (Brick Lord), 2 = World 2 (Archmage), 3 = World 3 (Bio-Forge), 4 = World 4 (Clockwork)
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
    // World 4: Clockwork Spire
    {
        id: 16,
        name: "The Winding Entrance",
        description: "Tutorial for mechanical enemies",
        world: 4,
        stage: 1,
        position: { x: 100, y: 660 },
        starCriteria: { time: 150000, minHpPercent: 75 }
    },
    {
        id: 17,
        name: "Gear Gallery",
        description: "Rotating Gear Bricks",
        world: 4,
        stage: 2,
        position: { x: 250, y: 680 },
        starCriteria: { time: 170000, minHpPercent: 70 }
    },
    {
        id: 18,
        name: "Steam Factory",
        description: "Lingering steam damage zones",
        world: 4,
        stage: 3,
        position: { x: 400, y: 700 },
        starCriteria: { time: 190000, minHpPercent: 70 }
    },
    {
        id: 19,
        name: "Tesla Laboratory",
        description: "Tesla chains and fields",
        world: 4,
        stage: 4,
        position: { x: 550, y: 690 },
        starCriteria: { time: 210000, minHpPercent: 65 }
    },
    {
        id: 20,
        name: "Engineer's Forge",
        description: "Final boss battle with the Chrono-Engineer",
        world: 4,
        stage: 5,
        position: { x: 700, y: 680 },
        starCriteria: { time: 300000, minHpPercent: 60 }
    },
    // Extended stages for existing worlds
    // World 1 Extended Stages
    {
        id: 21,
        name: "Royal Armory",
        description: "Elite soldiers and chaos defenders guard the weapons",
        world: 1,
        stage: 6,
        position: { x: 850, y: 150 },
        starCriteria: { time: 220000, minHpPercent: 70 }
    },
    {
        id: 22,
        name: "Grand Ballroom",
        description: "A chaotic dance of mages and archers",
        world: 1,
        stage: 7,
        position: { x: 1000, y: 200 },
        starCriteria: { time: 240000, minHpPercent: 65 }
    },
    {
        id: 23,
        name: "King's Treasury",
        description: "The ultimate test of World 1 mastery",
        world: 1,
        stage: 8,
        position: { x: 1150, y: 250 },
        starCriteria: { time: 280000, minHpPercent: 60 }
    },
    // World 2 Extended Stages
    {
        id: 24,
        name: "Crystal Nexus",
        description: "All elements converge in deadly harmony",
        world: 2,
        stage: 6,
        position: { x: 850, y: 460 },
        starCriteria: { time: 250000, minHpPercent: 65 }
    },
    {
        id: 25,
        name: "Mirror Maze",
        description: "Countless reflections and illusions",
        world: 2,
        stage: 7,
        position: { x: 1000, y: 480 },
        starCriteria: { time: 270000, minHpPercent: 60 }
    },
    {
        id: 26,
        name: "Astral Sanctum",
        description: "The pinnacle of magical mastery",
        world: 2,
        stage: 8,
        position: { x: 1150, y: 500 },
        starCriteria: { time: 300000, minHpPercent: 55 }
    },
    // World 3 Extended Stages
    {
        id: 27,
        name: "Neural Network Core",
        description: "The hive mind's central processing",
        world: 3,
        stage: 6,
        position: { x: 850, y: 580 },
        starCriteria: { time: 260000, minHpPercent: 60 }
    },
    {
        id: 28,
        name: "Evolution Chamber",
        description: "Where the machines adapt and evolve",
        world: 3,
        stage: 7,
        position: { x: 1000, y: 600 },
        starCriteria: { time: 280000, minHpPercent: 55 }
    },
    // World 4 Extended Stages
    {
        id: 29,
        name: "Temporal Nexus",
        description: "Time itself becomes unstable",
        world: 4,
        stage: 6,
        position: { x: 850, y: 720 },
        starCriteria: { time: 270000, minHpPercent: 60 }
    },
    {
        id: 30,
        name: "Infinity Engine",
        description: "The ultimate clockwork challenge",
        world: 4,
        stage: 7,
        position: { x: 1000, y: 740 },
        starCriteria: { time: 300000, minHpPercent: 55 }
    },
    // World 5: Shadow Realm
    {
        id: 31,
        name: "Shadow's Veil",
        description: "Enter the realm of shadows",
        world: 5,
        stage: 1,
        position: { x: 100, y: 800 },
        starCriteria: { time: 160000, minHpPercent: 70 }
    },
    {
        id: 32,
        name: "Phantom Corridors",
        description: "Phantoms lurk in every corner",
        world: 5,
        stage: 2,
        position: { x: 250, y: 820 },
        starCriteria: { time: 180000, minHpPercent: 65 }
    },
    {
        id: 33,
        name: "Spectral Haunt",
        description: "Specters haunt these dark halls",
        world: 5,
        stage: 3,
        position: { x: 400, y: 840 },
        starCriteria: { time: 200000, minHpPercent: 60 }
    },
    {
        id: 34,
        name: "Nightstalker's Domain",
        description: "The Nightstalkers rule here",
        world: 5,
        stage: 4,
        position: { x: 550, y: 830 },
        starCriteria: { time: 220000, minHpPercent: 55 }
    },
    {
        id: 35,
        name: "Shadow Lord's Throne",
        description: "Face the Shadow Lord",
        world: 5,
        stage: 5,
        position: { x: 700, y: 820 },
        starCriteria: { time: 320000, minHpPercent: 50 }
    },
    // World 6: Crystal Caverns
    {
        id: 36,
        name: "Gemstone Gallery",
        description: "A dazzling array of crystals",
        world: 6,
        stage: 1,
        position: { x: 100, y: 900 },
        starCriteria: { time: 165000, minHpPercent: 70 }
    },
    {
        id: 37,
        name: "Prismatic Halls",
        description: "Light refracts in beautiful patterns",
        world: 6,
        stage: 2,
        position: { x: 250, y: 920 },
        starCriteria: { time: 185000, minHpPercent: 65 }
    },
    {
        id: 38,
        name: "Diamond Formation",
        description: "Diamonds as hard as they come",
        world: 6,
        stage: 3,
        position: { x: 400, y: 940 },
        starCriteria: { time: 205000, minHpPercent: 60 }
    },
    {
        id: 39,
        name: "Obsidian Depths",
        description: "The darkest crystals lie below",
        world: 6,
        stage: 4,
        position: { x: 550, y: 930 },
        starCriteria: { time: 225000, minHpPercent: 55 }
    },
    {
        id: 40,
        name: "Crystal King's Chamber",
        description: "Challenge the Crystal King",
        world: 6,
        stage: 5,
        position: { x: 700, y: 920 },
        starCriteria: { time: 340000, minHpPercent: 50 }
    },
    // World 7: Volcanic Forge
    {
        id: 41,
        name: "Ember Fields",
        description: "Embers dance in the heat",
        world: 7,
        stage: 1,
        position: { x: 100, y: 1000 },
        starCriteria: { time: 170000, minHpPercent: 65 }
    },
    {
        id: 42,
        name: "Magma Rivers",
        description: "Molten rock flows freely",
        world: 7,
        stage: 2,
        position: { x: 250, y: 1020 },
        starCriteria: { time: 190000, minHpPercent: 60 }
    },
    {
        id: 43,
        name: "Pyroclastic Flow",
        description: "Deadly volcanic eruptions",
        world: 7,
        stage: 3,
        position: { x: 400, y: 1040 },
        starCriteria: { time: 210000, minHpPercent: 55 }
    },
    {
        id: 44,
        name: "Lava Chamber",
        description: "The heart of the volcano",
        world: 7,
        stage: 4,
        position: { x: 550, y: 1030 },
        starCriteria: { time: 230000, minHpPercent: 50 }
    },
    {
        id: 45,
        name: "Volcano Titan's Core",
        description: "Face the Volcano Titan",
        world: 7,
        stage: 5,
        position: { x: 700, y: 1020 },
        starCriteria: { time: 360000, minHpPercent: 45 }
    },
    // World 8: Celestial Observatory
    {
        id: 46,
        name: "Starfield",
        description: "Among the distant stars",
        world: 8,
        stage: 1,
        position: { x: 100, y: 1100 },
        starCriteria: { time: 175000, minHpPercent: 65 }
    },
    {
        id: 47,
        name: "Nebula Clouds",
        description: "Cosmic dust and gas swirl",
        world: 8,
        stage: 2,
        position: { x: 250, y: 1120 },
        starCriteria: { time: 195000, minHpPercent: 60 }
    },
    {
        id: 48,
        name: "Pulsar Rhythm",
        description: "Rhythmic cosmic pulses",
        world: 8,
        stage: 3,
        position: { x: 400, y: 1140 },
        starCriteria: { time: 215000, minHpPercent: 55 }
    },
    {
        id: 49,
        name: "Asteroid Belt",
        description: "Navigate the rocky field",
        world: 8,
        stage: 4,
        position: { x: 550, y: 1130 },
        starCriteria: { time: 235000, minHpPercent: 50 }
    },
    {
        id: 50,
        name: "Cosmos Guardian's Observatory",
        description: "Face the Cosmos Guardian",
        world: 8,
        stage: 5,
        position: { x: 700, y: 1120 },
        starCriteria: { time: 380000, minHpPercent: 45 }
    },
    // World 9: Abyssal Depths
    {
        id: 51,
        name: "Shallow Waters",
        description: "The depths beckon below",
        world: 9,
        stage: 1,
        position: { x: 100, y: 1200 },
        starCriteria: { time: 180000, minHpPercent: 60 }
    },
    {
        id: 52,
        name: "Whirlpool Vortex",
        description: "Swirling currents pull you down",
        world: 9,
        stage: 2,
        position: { x: 250, y: 1220 },
        starCriteria: { time: 200000, minHpPercent: 55 }
    },
    {
        id: 53,
        name: "Deep Crawlers",
        description: "Strange creatures emerge",
        world: 9,
        stage: 3,
        position: { x: 400, y: 1240 },
        starCriteria: { time: 220000, minHpPercent: 50 }
    },
    {
        id: 54,
        name: "Trench Depths",
        description: "The darkest depths of the ocean",
        world: 9,
        stage: 4,
        position: { x: 550, y: 1230 },
        starCriteria: { time: 240000, minHpPercent: 45 }
    },
    {
        id: 55,
        name: "Abyssal Horror's Domain",
        description: "Face the Abyssal Horror",
        world: 9,
        stage: 5,
        position: { x: 700, y: 1220 },
        starCriteria: { time: 400000, minHpPercent: 40 }
    },
    // World 10: Verdant Wilds
    {
        id: 56,
        name: "Seedling Grove",
        description: "New life springs forth",
        world: 10,
        stage: 1,
        position: { x: 100, y: 1300 },
        starCriteria: { time: 185000, minHpPercent: 60 }
    },
    {
        id: 57,
        name: "Blossom Fields",
        description: "Flowers bloom everywhere",
        world: 10,
        stage: 2,
        position: { x: 250, y: 1320 },
        starCriteria: { time: 205000, minHpPercent: 55 }
    },
    {
        id: 58,
        name: "Ancient Roots",
        description: "The oldest trees stand guard",
        world: 10,
        stage: 3,
        position: { x: 400, y: 1340 },
        starCriteria: { time: 225000, minHpPercent: 50 }
    },
    {
        id: 59,
        name: "Canopy Jungle",
        description: "Dense foliage blocks the sun",
        world: 10,
        stage: 4,
        position: { x: 550, y: 1330 },
        starCriteria: { time: 245000, minHpPercent: 45 }
    },
    {
        id: 60,
        name: "Forest Keeper's Heart",
        description: "Face the Forest Keeper",
        world: 10,
        stage: 5,
        position: { x: 700, y: 1320 },
        starCriteria: { time: 420000, minHpPercent: 40 }
    },
    // World 11: Frost Citadel
    {
        id: 61,
        name: "First Frost",
        description: "The cold begins to bite",
        world: 11,
        stage: 1,
        position: { x: 100, y: 1400 },
        starCriteria: { time: 190000, minHpPercent: 60 }
    },
    {
        id: 62,
        name: "Blizzard Wall",
        description: "Snow obscures everything",
        world: 11,
        stage: 2,
        position: { x: 250, y: 1420 },
        starCriteria: { time: 210000, minHpPercent: 55 }
    },
    {
        id: 63,
        name: "Frostbite Halls",
        description: "Every touch brings numbness",
        world: 11,
        stage: 3,
        position: { x: 400, y: 1440 },
        starCriteria: { time: 230000, minHpPercent: 50 }
    },
    {
        id: 64,
        name: "Glacial Fortress",
        description: "Ancient ice walls stand firm",
        world: 11,
        stage: 4,
        position: { x: 550, y: 1430 },
        starCriteria: { time: 250000, minHpPercent: 45 }
    },
    {
        id: 65,
        name: "Ice Queen's Throne",
        description: "Face the Ice Queen",
        world: 11,
        stage: 5,
        position: { x: 700, y: 1420 },
        starCriteria: { time: 440000, minHpPercent: 40 }
    },
    // World 12: Desert Tombs
    {
        id: 66,
        name: "Sandy Dunes",
        description: "Endless sand stretches before you",
        world: 12,
        stage: 1,
        position: { x: 100, y: 1500 },
        starCriteria: { time: 195000, minHpPercent: 55 }
    },
    {
        id: 67,
        name: "Mirage Desert",
        description: "What's real and what's illusion?",
        world: 12,
        stage: 2,
        position: { x: 250, y: 1520 },
        starCriteria: { time: 215000, minHpPercent: 50 }
    },
    {
        id: 68,
        name: "Scarab Swarm",
        description: "Thousands of scarabs emerge",
        world: 12,
        stage: 3,
        position: { x: 400, y: 1540 },
        starCriteria: { time: 235000, minHpPercent: 45 }
    },
    {
        id: 69,
        name: "Ancient Tombs",
        description: "The dead do not rest easy",
        world: 12,
        stage: 4,
        position: { x: 550, y: 1530 },
        starCriteria: { time: 255000, minHpPercent: 40 }
    },
    {
        id: 70,
        name: "Pharaoh's Tomb",
        description: "Face the Pharaoh",
        world: 12,
        stage: 5,
        position: { x: 700, y: 1520 },
        starCriteria: { time: 460000, minHpPercent: 35 }
    },
    // World 13: Storm Peaks
    {
        id: 71,
        name: "Gentle Winds",
        description: "The calm before the storm",
        world: 13,
        stage: 1,
        position: { x: 100, y: 1600 },
        starCriteria: { time: 200000, minHpPercent: 55 }
    },
    {
        id: 72,
        name: "Rising Storm",
        description: "Winds pick up intensity",
        world: 13,
        stage: 2,
        position: { x: 250, y: 1620 },
        starCriteria: { time: 220000, minHpPercent: 50 }
    },
    {
        id: 73,
        name: "Thunder Clash",
        description: "Thunder roars overhead",
        world: 13,
        stage: 3,
        position: { x: 400, y: 1640 },
        starCriteria: { time: 240000, minHpPercent: 45 }
    },
    {
        id: 74,
        name: "Hurricane Force",
        description: "The storm reaches its peak",
        world: 13,
        stage: 4,
        position: { x: 550, y: 1630 },
        starCriteria: { time: 260000, minHpPercent: 40 }
    },
    {
        id: 75,
        name: "Storm King's Peak",
        description: "Face the Storm King",
        world: 13,
        stage: 5,
        position: { x: 700, y: 1620 },
        starCriteria: { time: 480000, minHpPercent: 35 }
    },
    // World 14: Void Nexus
    {
        id: 76,
        name: "Void Rifts",
        description: "Reality tears at the seams",
        world: 14,
        stage: 1,
        position: { x: 100, y: 1700 },
        starCriteria: { time: 205000, minHpPercent: 50 }
    },
    {
        id: 77,
        name: "Voidspawn Emergence",
        description: "Creatures from beyond emerge",
        world: 14,
        stage: 2,
        position: { x: 250, y: 1720 },
        starCriteria: { time: 225000, minHpPercent: 45 }
    },
    {
        id: 78,
        name: "Ethereal Plane",
        description: "Between existence and oblivion",
        world: 14,
        stage: 3,
        position: { x: 400, y: 1740 },
        starCriteria: { time: 245000, minHpPercent: 40 }
    },
    {
        id: 79,
        name: "Nullification Zone",
        description: "All things cease to exist here",
        world: 14,
        stage: 4,
        position: { x: 550, y: 1730 },
        starCriteria: { time: 265000, minHpPercent: 35 }
    },
    {
        id: 80,
        name: "Void Lord's Domain",
        description: "Face the Void Lord",
        world: 14,
        stage: 5,
        position: { x: 700, y: 1720 },
        starCriteria: { time: 500000, minHpPercent: 30 }
    },
    // World 1 Extended Stages 9-13
    {
        id: 81,
        name: "Forbidden Vault",
        description: "Ancient treasures guarded by elite forces",
        world: 1,
        stage: 9,
        position: { x: 1300, y: 300 },
        starCriteria: { time: 320000, minHpPercent: 55 }
    },
    {
        id: 82,
        name: "Shadow Keep",
        description: "Darkness falls upon the kingdom",
        world: 1,
        stage: 10,
        position: { x: 1450, y: 350 },
        starCriteria: { time: 340000, minHpPercent: 50 }
    },
    {
        id: 83,
        name: "Elite Guard",
        description: "The king's most powerful defenders",
        world: 1,
        stage: 11,
        position: { x: 1600, y: 400 },
        starCriteria: { time: 360000, minHpPercent: 45 }
    },
    {
        id: 84,
        name: "Final Defense",
        description: "The last line before the end",
        world: 1,
        stage: 12,
        position: { x: 1750, y: 450 },
        starCriteria: { time: 380000, minHpPercent: 40 }
    },
    {
        id: 85,
        name: "Kingdom's End",
        description: "The ultimate medieval challenge",
        world: 1,
        stage: 13,
        position: { x: 1900, y: 500 },
        starCriteria: { time: 400000, minHpPercent: 35 }
    },
    // World 2 Extended Stages 9-13
    {
        id: 86,
        name: "Elemental Chaos",
        description: "All elements clash in deadly harmony",
        world: 2,
        stage: 9,
        position: { x: 1300, y: 540 },
        starCriteria: { time: 330000, minHpPercent: 50 }
    },
    {
        id: 87,
        name: "Runic Convergence",
        description: "Ancient runes channel immense power",
        world: 2,
        stage: 10,
        position: { x: 1450, y: 580 },
        starCriteria: { time: 350000, minHpPercent: 45 }
    },
    {
        id: 88,
        name: "Mirror Dimension",
        description: "Reality fractures across infinite reflections",
        world: 2,
        stage: 11,
        position: { x: 1600, y: 620 },
        starCriteria: { time: 370000, minHpPercent: 40 }
    },
    {
        id: 89,
        name: "Magical Apex",
        description: "The pinnacle of arcane power",
        world: 2,
        stage: 12,
        position: { x: 1750, y: 660 },
        starCriteria: { time: 390000, minHpPercent: 35 }
    },
    {
        id: 90,
        name: "Arcane Mastery",
        description: "The ultimate test of magical prowess",
        world: 2,
        stage: 13,
        position: { x: 1900, y: 700 },
        starCriteria: { time: 420000, minHpPercent: 30 }
    },
    // World 3 Extended Stages 8-12
    {
        id: 91,
        name: "Biomechanical Fusion",
        description: "Where flesh and machine become one",
        world: 3,
        stage: 8,
        position: { x: 1150, y: 620 },
        starCriteria: { time: 320000, minHpPercent: 50 }
    },
    {
        id: 92,
        name: "Adaptive Swarm",
        description: "Bio-machines that learn and evolve",
        world: 3,
        stage: 9,
        position: { x: 1300, y: 660 },
        starCriteria: { time: 340000, minHpPercent: 45 }
    },
    {
        id: 93,
        name: "Synthesis Overflow",
        description: "Creation gone out of control",
        world: 3,
        stage: 10,
        position: { x: 1450, y: 700 },
        starCriteria: { time: 360000, minHpPercent: 40 }
    },
    {
        id: 94,
        name: "Final Corruption",
        description: "The forge's ultimate corruption",
        world: 3,
        stage: 11,
        position: { x: 1600, y: 740 },
        starCriteria: { time: 380000, minHpPercent: 35 }
    },
    {
        id: 95,
        name: "Nexus Finale",
        description: "The Bio-Forge's final challenge",
        world: 3,
        stage: 12,
        position: { x: 1750, y: 780 },
        starCriteria: { time: 400000, minHpPercent: 30 }
    },
    // World 4 Extended Stages 8-12
    {
        id: 96,
        name: "Chronometric Core",
        description: "Time warps around the core",
        world: 4,
        stage: 8,
        position: { x: 1150, y: 760 },
        starCriteria: { time: 330000, minHpPercent: 50 }
    },
    {
        id: 97,
        name: "Gear Matrix",
        description: "Infinite gears in perfect synchronization",
        world: 4,
        stage: 9,
        position: { x: 1300, y: 800 },
        starCriteria: { time: 350000, minHpPercent: 45 }
    },
    {
        id: 98,
        name: "Steam Surge",
        description: "Overwhelming mechanical pressure",
        world: 4,
        stage: 10,
        position: { x: 1450, y: 840 },
        starCriteria: { time: 370000, minHpPercent: 40 }
    },
    {
        id: 99,
        name: "Mechanical Perfection",
        description: "The clockwork's flawless design",
        world: 4,
        stage: 11,
        position: { x: 1600, y: 880 },
        starCriteria: { time: 390000, minHpPercent: 35 }
    },
    {
        id: 100,
        name: "Time's End",
        description: "Where all timelines converge",
        world: 4,
        stage: 12,
        position: { x: 1750, y: 920 },
        starCriteria: { time: 420000, minHpPercent: 30 }
    },
    // World 5 Extended Stages 6-10
    {
        id: 101,
        name: "Void Echoes",
        description: "Whispers from the void itself",
        world: 5,
        stage: 6,
        position: { x: 850, y: 860 },
        starCriteria: { time: 350000, minHpPercent: 45 }
    },
    {
        id: 102,
        name: "Spectral Maze",
        description: "Lost in a maze of shadows",
        world: 5,
        stage: 7,
        position: { x: 1000, y: 900 },
        starCriteria: { time: 370000, minHpPercent: 40 }
    },
    {
        id: 103,
        name: "Nightstalker's Hunt",
        description: "Become the hunted",
        world: 5,
        stage: 8,
        position: { x: 1150, y: 940 },
        starCriteria: { time: 390000, minHpPercent: 35 }
    },
    {
        id: 104,
        name: "Voidwalker's Gauntlet",
        description: "Walk the path between worlds",
        world: 5,
        stage: 9,
        position: { x: 1300, y: 980 },
        starCriteria: { time: 410000, minHpPercent: 30 }
    },
    {
        id: 105,
        name: "Abyss of Shadows",
        description: "The final darkness awaits",
        world: 5,
        stage: 10,
        position: { x: 1450, y: 1020 },
        starCriteria: { time: 430000, minHpPercent: 25 }
    },
    // World 6 Extended Stages 6-10
    {
        id: 106,
        name: "Obsidian Shards",
        description: "Razor-sharp black crystals",
        world: 6,
        stage: 6,
        position: { x: 850, y: 960 },
        starCriteria: { time: 360000, minHpPercent: 45 }
    },
    {
        id: 107,
        name: "Diamond Fortress",
        description: "Impenetrable crystalline walls",
        world: 6,
        stage: 7,
        position: { x: 1000, y: 1000 },
        starCriteria: { time: 380000, minHpPercent: 40 }
    },
    {
        id: 108,
        name: "Crystalline Labyrinth",
        description: "Lost among endless reflections",
        world: 6,
        stage: 8,
        position: { x: 1150, y: 1040 },
        starCriteria: { time: 400000, minHpPercent: 35 }
    },
    {
        id: 109,
        name: "Obsidian Legion",
        description: "An army of dark crystals",
        world: 6,
        stage: 9,
        position: { x: 1300, y: 1080 },
        starCriteria: { time: 420000, minHpPercent: 30 }
    },
    {
        id: 110,
        name: "Gem Palace",
        description: "The crystal throne itself",
        world: 6,
        stage: 10,
        position: { x: 1450, y: 1120 },
        starCriteria: { time: 440000, minHpPercent: 25 }
    },
    // World 7 Extended Stages 6-10
    {
        id: 111,
        name: "Ashen Wasteland",
        description: "Nothing but ash and ember",
        world: 7,
        stage: 6,
        position: { x: 850, y: 1060 },
        starCriteria: { time: 370000, minHpPercent: 40 }
    },
    {
        id: 112,
        name: "Lavabeast's Lair",
        description: "Where the molten beasts dwell",
        world: 7,
        stage: 7,
        position: { x: 1000, y: 1100 },
        starCriteria: { time: 390000, minHpPercent: 35 }
    },
    {
        id: 113,
        name: "Inferno Depths",
        description: "The deepest fires burn here",
        world: 7,
        stage: 8,
        position: { x: 1150, y: 1140 },
        starCriteria: { time: 410000, minHpPercent: 30 }
    },
    {
        id: 114,
        name: "Molten Gauntlet",
        description: "Run through rivers of lava",
        world: 7,
        stage: 9,
        position: { x: 1300, y: 1180 },
        starCriteria: { time: 430000, minHpPercent: 25 }
    },
    {
        id: 115,
        name: "Volcanic Apocalypse",
        description: "The volcano erupts its fury",
        world: 7,
        stage: 10,
        position: { x: 1450, y: 1220 },
        starCriteria: { time: 450000, minHpPercent: 20 }
    },
    // World 8 Extended Stages 6-10
    {
        id: 116,
        name: "Stellar Collision",
        description: "Stars collide in cosmic fury",
        world: 8,
        stage: 6,
        position: { x: 850, y: 1160 },
        starCriteria: { time: 380000, minHpPercent: 40 }
    },
    {
        id: 117,
        name: "Supernova Surge",
        description: "Witness a star's explosive death",
        world: 8,
        stage: 7,
        position: { x: 1000, y: 1200 },
        starCriteria: { time: 400000, minHpPercent: 35 }
    },
    {
        id: 118,
        name: "Cosmic Tempest",
        description: "Storms rage across the cosmos",
        world: 8,
        stage: 8,
        position: { x: 1150, y: 1240 },
        starCriteria: { time: 420000, minHpPercent: 30 }
    },
    {
        id: 119,
        name: "Asteroid Apocalypse",
        description: "Endless asteroids bombard you",
        world: 8,
        stage: 9,
        position: { x: 1300, y: 1280 },
        starCriteria: { time: 440000, minHpPercent: 25 }
    },
    {
        id: 120,
        name: "Celestial Endgame",
        description: "The universe's final test",
        world: 8,
        stage: 10,
        position: { x: 1450, y: 1320 },
        starCriteria: { time: 460000, minHpPercent: 20 }
    },
    // World 9 Extended Stages 6-10
    {
        id: 121,
        name: "Trench Awakening",
        description: "Ancient horrors stir below",
        world: 9,
        stage: 6,
        position: { x: 850, y: 1260 },
        starCriteria: { time: 390000, minHpPercent: 35 }
    },
    {
        id: 122,
        name: "Leviathan's Hunt",
        description: "The great beasts hunt you",
        world: 9,
        stage: 7,
        position: { x: 1000, y: 1300 },
        starCriteria: { time: 410000, minHpPercent: 30 }
    },
    {
        id: 123,
        name: "Deep Sea Pressure",
        description: "The crushing weight of the abyss",
        world: 9,
        stage: 8,
        position: { x: 1150, y: 1340 },
        starCriteria: { time: 430000, minHpPercent: 25 }
    },
    {
        id: 124,
        name: "Abyssal Nightmare",
        description: "Your deepest fears made real",
        world: 9,
        stage: 9,
        position: { x: 1300, y: 1380 },
        starCriteria: { time: 450000, minHpPercent: 20 }
    },
    {
        id: 125,
        name: "Depths of Despair",
        description: "Where all hope is lost",
        world: 9,
        stage: 10,
        position: { x: 1450, y: 1420 },
        starCriteria: { time: 470000, minHpPercent: 15 }
    },
    // World 10 Extended Stages 6-10
    {
        id: 126,
        name: "Wildvine Tangle",
        description: "Vines ensnare everything",
        world: 10,
        stage: 6,
        position: { x: 850, y: 1360 },
        starCriteria: { time: 400000, minHpPercent: 35 }
    },
    {
        id: 127,
        name: "Canopy Maze",
        description: "Lost in the treetops",
        world: 10,
        stage: 7,
        position: { x: 1000, y: 1400 },
        starCriteria: { time: 420000, minHpPercent: 30 }
    },
    {
        id: 128,
        name: "Overgrown Fortress",
        description: "Nature reclaims all",
        world: 10,
        stage: 8,
        position: { x: 1150, y: 1440 },
        starCriteria: { time: 440000, minHpPercent: 25 }
    },
    {
        id: 129,
        name: "Verdant Onslaught",
        description: "Nature's fury unleashed",
        world: 10,
        stage: 9,
        position: { x: 1300, y: 1480 },
        starCriteria: { time: 460000, minHpPercent: 20 }
    },
    {
        id: 130,
        name: "Primordial Grove",
        description: "The oldest forest's power",
        world: 10,
        stage: 10,
        position: { x: 1450, y: 1520 },
        starCriteria: { time: 480000, minHpPercent: 15 }
    },
    // World 11 Extended Stages 6-10
    {
        id: 131,
        name: "Permafrost Expanse",
        description: "Eternal ice stretches forever",
        world: 11,
        stage: 6,
        position: { x: 850, y: 1460 },
        starCriteria: { time: 410000, minHpPercent: 35 }
    },
    {
        id: 132,
        name: "Glacial Prison",
        description: "Trapped in frozen walls",
        world: 11,
        stage: 7,
        position: { x: 1000, y: 1500 },
        starCriteria: { time: 430000, minHpPercent: 30 }
    },
    {
        id: 133,
        name: "Frozen Catacombs",
        description: "Tombs of ice and death",
        world: 11,
        stage: 8,
        position: { x: 1150, y: 1540 },
        starCriteria: { time: 450000, minHpPercent: 25 }
    },
    {
        id: 134,
        name: "Eternal Winter",
        description: "Winter that never ends",
        world: 11,
        stage: 9,
        position: { x: 1300, y: 1580 },
        starCriteria: { time: 470000, minHpPercent: 20 }
    },
    {
        id: 135,
        name: "Absolute Zero",
        description: "The coldest place in existence",
        world: 11,
        stage: 10,
        position: { x: 1450, y: 1620 },
        starCriteria: { time: 490000, minHpPercent: 15 }
    },
    // World 12 Extended Stages 6-10
    {
        id: 136,
        name: "Obelisk Rise",
        description: "Ancient monuments tower above",
        world: 12,
        stage: 6,
        position: { x: 850, y: 1560 },
        starCriteria: { time: 420000, minHpPercent: 30 }
    },
    {
        id: 137,
        name: "Mummy's Curse",
        description: "The curse awakens",
        world: 12,
        stage: 7,
        position: { x: 1000, y: 1600 },
        starCriteria: { time: 440000, minHpPercent: 25 }
    },
    {
        id: 138,
        name: "Ancient Sanctum",
        description: "Sacred halls of the ancients",
        world: 12,
        stage: 8,
        position: { x: 1150, y: 1640 },
        starCriteria: { time: 460000, minHpPercent: 20 }
    },
    {
        id: 139,
        name: "Desert Ruins",
        description: "Crumbling monuments to forgotten gods",
        world: 12,
        stage: 9,
        position: { x: 1300, y: 1680 },
        starCriteria: { time: 480000, minHpPercent: 15 }
    },
    {
        id: 140,
        name: "Sandstorm Apocalypse",
        description: "The desert's ultimate fury",
        world: 12,
        stage: 10,
        position: { x: 1450, y: 1720 },
        starCriteria: { time: 500000, minHpPercent: 10 }
    },
    // World 13 Extended Stages 6-10
    {
        id: 141,
        name: "Cyclone Surge",
        description: "Cyclones tear through everything",
        world: 13,
        stage: 6,
        position: { x: 850, y: 1660 },
        starCriteria: { time: 430000, minHpPercent: 30 }
    },
    {
        id: 142,
        name: "Hurricane Wall",
        description: "Walls of wind and fury",
        world: 13,
        stage: 7,
        position: { x: 1000, y: 1700 },
        starCriteria: { time: 450000, minHpPercent: 25 }
    },
    {
        id: 143,
        name: "Tempest Fury",
        description: "The storm's unbridled rage",
        world: 13,
        stage: 8,
        position: { x: 1150, y: 1740 },
        starCriteria: { time: 470000, minHpPercent: 20 }
    },
    {
        id: 144,
        name: "Maelstrom",
        description: "Chaos incarnate",
        world: 13,
        stage: 9,
        position: { x: 1300, y: 1780 },
        starCriteria: { time: 490000, minHpPercent: 15 }
    },
    {
        id: 145,
        name: "Eye of the Storm",
        description: "The calm before annihilation",
        world: 13,
        stage: 10,
        position: { x: 1450, y: 1820 },
        starCriteria: { time: 510000, minHpPercent: 10 }
    },
    // World 14 Extended Stages 6-10
    {
        id: 146,
        name: "Paradox Cascade",
        description: "Logic itself breaks down",
        world: 14,
        stage: 6,
        position: { x: 850, y: 1760 },
        starCriteria: { time: 440000, minHpPercent: 25 }
    },
    {
        id: 147,
        name: "Nullification Chamber",
        description: "Where existence is negated",
        world: 14,
        stage: 7,
        position: { x: 1000, y: 1800 },
        starCriteria: { time: 460000, minHpPercent: 20 }
    },
    {
        id: 148,
        name: "Dimensional Rift",
        description: "Reality tears apart",
        world: 14,
        stage: 8,
        position: { x: 1150, y: 1840 },
        starCriteria: { time: 480000, minHpPercent: 15 }
    },
    {
        id: 149,
        name: "Reality Collapse",
        description: "All reality crumbles",
        world: 14,
        stage: 9,
        position: { x: 1300, y: 1880 },
        starCriteria: { time: 500000, minHpPercent: 10 }
    },
    {
        id: 150,
        name: "Void Singularity",
        description: "The void consumes all",
        world: 14,
        stage: 10,
        position: { x: 1450, y: 1920 },
        starCriteria: { time: 520000, minHpPercent: 5 }
    },
    // World 15: Ethereal Gardens
    {
        id: 151,
        name: "Whispering Meadows",
        description: "Dreams begin to take form",
        world: 15,
        stage: 1,
        position: { x: 100, y: 1800 },
        starCriteria: { time: 210000, minHpPercent: 50 }
    },
    {
        id: 152,
        name: "Illusory Path",
        description: "Nothing is as it seems",
        world: 15,
        stage: 2,
        position: { x: 250, y: 1820 },
        starCriteria: { time: 230000, minHpPercent: 45 }
    },
    {
        id: 153,
        name: "Phantasmal Realm",
        description: "Phantoms dance between reality and dream",
        world: 15,
        stage: 3,
        position: { x: 400, y: 1840 },
        starCriteria: { time: 250000, minHpPercent: 40 }
    },
    {
        id: 154,
        name: "Reverie Palace",
        description: "The dream lord's sanctuary",
        world: 15,
        stage: 4,
        position: { x: 550, y: 1830 },
        starCriteria: { time: 270000, minHpPercent: 35 }
    },
    {
        id: 155,
        name: "Dream Lord's Sanctuary",
        description: "Face the master of dreams",
        world: 15,
        stage: 5,
        position: { x: 700, y: 1820 },
        starCriteria: { time: 520000, minHpPercent: 30 }
    },
    {
        id: 156,
        name: "Mirage Labyrinth",
        description: "Lost in endless illusions",
        world: 15,
        stage: 6,
        position: { x: 850, y: 1860 },
        starCriteria: { time: 450000, minHpPercent: 25 }
    },
    {
        id: 157,
        name: "Nightmare Cascade",
        description: "Dreams turn to nightmares",
        world: 15,
        stage: 7,
        position: { x: 1000, y: 1900 },
        starCriteria: { time: 470000, minHpPercent: 20 }
    },
    {
        id: 158,
        name: "Ethereal Nightmare",
        description: "Nightmares made manifest",
        world: 15,
        stage: 8,
        position: { x: 1150, y: 1940 },
        starCriteria: { time: 490000, minHpPercent: 15 }
    },
    {
        id: 159,
        name: "Void of Reveries",
        description: "Where dreams go to die",
        world: 15,
        stage: 9,
        position: { x: 1300, y: 1980 },
        starCriteria: { time: 510000, minHpPercent: 10 }
    },
    {
        id: 160,
        name: "Omega Dreamscape",
        description: "The final dream",
        world: 15,
        stage: 10,
        position: { x: 1450, y: 2020 },
        starCriteria: { time: 530000, minHpPercent: 5 }
    },
    // World 16: Infernal Abyss
    {
        id: 161,
        name: "Gates of Hell",
        description: "Enter the infernal realm",
        world: 16,
        stage: 1,
        position: { x: 100, y: 1900 },
        starCriteria: { time: 215000, minHpPercent: 50 }
    },
    {
        id: 162,
        name: "Infernal Corridors",
        description: "Demonic forces patrol the halls",
        world: 16,
        stage: 2,
        position: { x: 250, y: 1920 },
        starCriteria: { time: 235000, minHpPercent: 45 }
    },
    {
        id: 163,
        name: "Chamber of Temptation",
        description: "Succubi lure you to doom",
        world: 16,
        stage: 3,
        position: { x: 400, y: 1940 },
        starCriteria: { time: 255000, minHpPercent: 40 }
    },
    {
        id: 164,
        name: "Torment Pit",
        description: "Endless suffering awaits",
        world: 16,
        stage: 4,
        position: { x: 550, y: 1930 },
        starCriteria: { time: 275000, minHpPercent: 35 }
    },
    {
        id: 165,
        name: "Lord of Hell's Throne",
        description: "Face the lord of all demons",
        world: 16,
        stage: 5,
        position: { x: 700, y: 1920 },
        starCriteria: { time: 540000, minHpPercent: 30 }
    },
    {
        id: 166,
        name: "Infernal Crucible",
        description: "Forged in hellfire",
        world: 16,
        stage: 6,
        position: { x: 850, y: 1960 },
        starCriteria: { time: 460000, minHpPercent: 25 }
    },
    {
        id: 167,
        name: "Demonic Citadel",
        description: "The fortress of demons",
        world: 16,
        stage: 7,
        position: { x: 1000, y: 2000 },
        starCriteria: { time: 480000, minHpPercent: 20 }
    },
    {
        id: 168,
        name: "Hellfire Gauntlet",
        description: "Run through rivers of fire",
        world: 16,
        stage: 8,
        position: { x: 1150, y: 2040 },
        starCriteria: { time: 500000, minHpPercent: 15 }
    },
    {
        id: 169,
        name: "Abyss of Torment",
        description: "Infinite suffering incarnate",
        world: 16,
        stage: 9,
        position: { x: 1300, y: 2080 },
        starCriteria: { time: 520000, minHpPercent: 10 }
    },
    {
        id: 170,
        name: "Infernal Apocalypse",
        description: "Hell's ultimate fury",
        world: 16,
        stage: 10,
        position: { x: 1450, y: 2120 },
        starCriteria: { time: 540000, minHpPercent: 5 }
    },
    // World 17: Cyberpunk Megacity
    {
        id: 171,
        name: "Neon Streets",
        description: "High-tech dystopia awaits",
        world: 17,
        stage: 1,
        position: { x: 100, y: 2000 },
        starCriteria: { time: 220000, minHpPercent: 50 }
    },
    {
        id: 172,
        name: "Corporate Sector",
        description: "Mega-corporations rule here",
        world: 17,
        stage: 2,
        position: { x: 250, y: 2020 },
        starCriteria: { time: 240000, minHpPercent: 45 }
    },
    {
        id: 173,
        name: "Hacker's Den",
        description: "Digital warriors await",
        world: 17,
        stage: 3,
        position: { x: 400, y: 2040 },
        starCriteria: { time: 260000, minHpPercent: 40 }
    },
    {
        id: 174,
        name: "Cyborg Factory",
        description: "Where man and machine merge",
        world: 17,
        stage: 4,
        position: { x: 550, y: 2030 },
        starCriteria: { time: 280000, minHpPercent: 35 }
    },
    {
        id: 175,
        name: "MegaCorp Headquarters",
        description: "Face the corporate overlord",
        world: 17,
        stage: 5,
        position: { x: 700, y: 2020 },
        starCriteria: { time: 560000, minHpPercent: 30 }
    },
    {
        id: 176,
        name: "Digital Fortress",
        description: "Impenetrable cyber defenses",
        world: 17,
        stage: 6,
        position: { x: 850, y: 2060 },
        starCriteria: { time: 470000, minHpPercent: 25 }
    },
    {
        id: 177,
        name: "Neural Network",
        description: "The AI's digital domain",
        world: 17,
        stage: 7,
        position: { x: 1000, y: 2100 },
        starCriteria: { time: 490000, minHpPercent: 20 }
    },
    {
        id: 178,
        name: "Quantum Mainframe",
        description: "Processing infinite realities",
        world: 17,
        stage: 8,
        position: { x: 1150, y: 2140 },
        starCriteria: { time: 510000, minHpPercent: 15 }
    },
    {
        id: 179,
        name: "Cybernetic Ascension",
        description: "Transcend human limitations",
        world: 17,
        stage: 9,
        position: { x: 1300, y: 2180 },
        starCriteria: { time: 530000, minHpPercent: 10 }
    },
    {
        id: 180,
        name: "Singularity Core",
        description: "The AI awakens",
        world: 17,
        stage: 10,
        position: { x: 1450, y: 2220 },
        starCriteria: { time: 550000, minHpPercent: 5 }
    },
    // World 18: Astral Plane
    {
        id: 181,
        name: "Lower Astral",
        description: "Beginning of cosmic ascension",
        world: 18,
        stage: 1,
        position: { x: 100, y: 2100 },
        starCriteria: { time: 225000, minHpPercent: 50 }
    },
    {
        id: 182,
        name: "Ascension Path",
        description: "Climbing to higher planes",
        world: 18,
        stage: 2,
        position: { x: 250, y: 2120 },
        starCriteria: { time: 245000, minHpPercent: 45 }
    },
    {
        id: 183,
        name: "Divine Chamber",
        description: "Where divinity dwells",
        world: 18,
        stage: 3,
        position: { x: 400, y: 2140 },
        starCriteria: { time: 265000, minHpPercent: 40 }
    },
    {
        id: 184,
        name: "Transcendent Realm",
        description: "Beyond mortal comprehension",
        world: 18,
        stage: 4,
        position: { x: 550, y: 2130 },
        starCriteria: { time: 285000, minHpPercent: 35 }
    },
    {
        id: 185,
        name: "Overmind's Domain",
        description: "Face the cosmic intelligence",
        world: 18,
        stage: 5,
        position: { x: 700, y: 2120 },
        starCriteria: { time: 580000, minHpPercent: 30 }
    },
    {
        id: 186,
        name: "Eternal Horizon",
        description: "Infinity stretches before you",
        world: 18,
        stage: 6,
        position: { x: 850, y: 2160 },
        starCriteria: { time: 480000, minHpPercent: 25 }
    },
    {
        id: 187,
        name: "Celestial Convergence",
        description: "All cosmic forces align",
        world: 18,
        stage: 7,
        position: { x: 1000, y: 2200 },
        starCriteria: { time: 500000, minHpPercent: 20 }
    },
    {
        id: 188,
        name: "Transcendent Nexus",
        description: "Nexus of all transcendence",
        world: 18,
        stage: 8,
        position: { x: 1150, y: 2240 },
        starCriteria: { time: 520000, minHpPercent: 15 }
    },
    {
        id: 189,
        name: "Divine Infinity",
        description: "Infinite divine power",
        world: 18,
        stage: 9,
        position: { x: 1300, y: 2280 },
        starCriteria: { time: 540000, minHpPercent: 10 }
    },
    {
        id: 190,
        name: "Eternal Omniscience",
        description: "Know all, become all",
        world: 18,
        stage: 10,
        position: { x: 1450, y: 2320 },
        starCriteria: { time: 560000, minHpPercent: 5 }
    },
    // World 19: Chaos Realm
    {
        id: 191,
        name: "Chaos Breach",
        description: "Chaos seeps into reality",
        world: 19,
        stage: 1,
        position: { x: 100, y: 2200 },
        starCriteria: { time: 230000, minHpPercent: 45 }
    },
    {
        id: 192,
        name: "Unstable Reality",
        description: "Reality itself becomes unstable",
        world: 19,
        stage: 2,
        position: { x: 250, y: 2220 },
        starCriteria: { time: 250000, minHpPercent: 40 }
    },
    {
        id: 193,
        name: "Mutation Zone",
        description: "Everything mutates and changes",
        world: 19,
        stage: 3,
        position: { x: 400, y: 2240 },
        starCriteria: { time: 270000, minHpPercent: 35 }
    },
    {
        id: 194,
        name: "Aberration Field",
        description: "Aberrations plague existence",
        world: 19,
        stage: 4,
        position: { x: 550, y: 2230 },
        starCriteria: { time: 290000, minHpPercent: 30 }
    },
    {
        id: 195,
        name: "Chaos Emperor's Core",
        description: "Face the emperor of chaos",
        world: 19,
        stage: 5,
        position: { x: 700, y: 2220 },
        starCriteria: { time: 600000, minHpPercent: 25 }
    },
    {
        id: 196,
        name: "Chaos Vortex",
        description: "Swirling chaos consumes all",
        world: 19,
        stage: 6,
        position: { x: 850, y: 2260 },
        starCriteria: { time: 490000, minHpPercent: 20 }
    },
    {
        id: 197,
        name: "Entropy Nexus",
        description: "Where order becomes entropy",
        world: 19,
        stage: 7,
        position: { x: 1000, y: 2300 },
        starCriteria: { time: 510000, minHpPercent: 15 }
    },
    {
        id: 198,
        name: "Reality Shatter",
        description: "Reality shatters into fragments",
        world: 19,
        stage: 8,
        position: { x: 1150, y: 2340 },
        starCriteria: { time: 530000, minHpPercent: 10 }
    },
    {
        id: 199,
        name: "Aberrant Dominion",
        description: "Aberrations rule supreme",
        world: 19,
        stage: 9,
        position: { x: 1300, y: 2380 },
        starCriteria: { time: 550000, minHpPercent: 5 }
    },
    {
        id: 200,
        name: "Primordial Chaos",
        description: "Chaos in its purest form",
        world: 19,
        stage: 10,
        position: { x: 1450, y: 2420 },
        starCriteria: { time: 570000, minHpPercent: 5 }
    },
    // World 20: The Final Gate
    {
        id: 201,
        name: "Outer Sanctum",
        description: "The beginning of the end",
        world: 20,
        stage: 1,
        position: { x: 100, y: 2300 },
        starCriteria: { time: 235000, minHpPercent: 45 }
    },
    {
        id: 202,
        name: "Inner Ward",
        description: "Guardian forces strengthen",
        world: 20,
        stage: 2,
        position: { x: 250, y: 2320 },
        starCriteria: { time: 255000, minHpPercent: 40 }
    },
    {
        id: 203,
        name: "Keeper's Hall",
        description: "The keepers await judgment",
        world: 20,
        stage: 3,
        position: { x: 400, y: 2340 },
        starCriteria: { time: 275000, minHpPercent: 35 }
    },
    {
        id: 204,
        name: "Primordial Chamber",
        description: "Ancient primordial forces",
        world: 20,
        stage: 4,
        position: { x: 550, y: 2330 },
        starCriteria: { time: 295000, minHpPercent: 30 }
    },
    {
        id: 205,
        name: "The Final Gate",
        description: "Face the ultimate guardian",
        world: 20,
        stage: 5,
        position: { x: 700, y: 2320 },
        starCriteria: { time: 620000, minHpPercent: 25 }
    },
    {
        id: 206,
        name: "Absolute Convergence",
        description: "Absolute power manifests",
        world: 20,
        stage: 6,
        position: { x: 850, y: 2360 },
        starCriteria: { time: 500000, minHpPercent: 20 }
    },
    {
        id: 207,
        name: "Primordial Sanctum",
        description: "The sanctum of creation",
        world: 20,
        stage: 7,
        position: { x: 1000, y: 2400 },
        starCriteria: { time: 520000, minHpPercent: 15 }
    },
    {
        id: 208,
        name: "Genesis Threshold",
        description: "Where genesis began",
        world: 20,
        stage: 8,
        position: { x: 1150, y: 2440 },
        starCriteria: { time: 540000, minHpPercent: 10 }
    },
    {
        id: 209,
        name: "Omega Bastion",
        description: "The omega and the alpha",
        world: 20,
        stage: 9,
        position: { x: 1300, y: 2480 },
        starCriteria: { time: 560000, minHpPercent: 5 }
    },
    {
        id: 210,
        name: "End of All Things",
        description: "The final challenge of existence",
        world: 20,
        stage: 10,
        position: { x: 1450, y: 2520 },
        starCriteria: { time: 600000, minHpPercent: 5 }
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
    },
    {
        worldId: 4,
        title: "Clockwork Spire",
        subtitle: "Temporal Engineering",
        description: "A mechanical tower that controls time itself. Navigate gears, steam, and electricity while mastering temporal mechanics.",
        icon: "🕰️",
        gradient: "from-amber-700 via-yellow-700 to-zinc-700",
        accentColor: "border-amber-300",
        difficulty: "Expert",
        keyFeatures: ["Temporal Effects", "Mechanical Hazards", "Cooldown Mastery"],
        enemies: ["Gear", "Steam", "Clockwork", "Tesla", "Piston", "Assembly", "Chrono-Engineer"]
    },
    {
        worldId: 5,
        title: "Shadow Realm",
        subtitle: "Darkness Incarnate",
        description: "A realm where shadows live and darkness reigns. Face ethereal enemies that phase between worlds and strike from the void.",
        icon: "🌑",
        gradient: "from-gray-900 via-purple-950 to-black",
        accentColor: "border-purple-500",
        difficulty: "Expert",
        keyFeatures: ["Stealth Mechanics", "Phase Shifting", "Void Damage"],
        enemies: ["Shades", "Phantoms", "Wraiths", "Specters", "Nightstalkers", "Voidwalkers", "Shadow Lord"]
    },
    {
        worldId: 6,
        title: "Crystal Caverns",
        subtitle: "Prismatic Depths",
        description: "Deep underground caverns filled with magical crystals. Each gem has unique properties and devastating power.",
        icon: "💎",
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        accentColor: "border-cyan-400",
        difficulty: "Expert",
        keyFeatures: ["Crystal Resonance", "Reflection Mechanics", "Gem Harvesting"],
        enemies: ["Rubies", "Sapphires", "Emeralds", "Diamonds", "Quartz", "Obsidian", "Crystal King"]
    },
    {
        worldId: 7,
        title: "Volcanic Forge",
        subtitle: "Infernal Heat",
        description: "The heart of a massive volcano where lava flows and fire reigns supreme. Survive the searing heat and explosive eruptions.",
        icon: "🌋",
        gradient: "from-red-900 via-orange-700 to-yellow-600",
        accentColor: "border-orange-500",
        difficulty: "Expert",
        keyFeatures: ["Burn Damage", "Lava Hazards", "Explosive Power"],
        enemies: ["Embers", "Magma", "Infernos", "Pyroclasts", "Lavabeasts", "Ashen", "Volcano Titan"]
    },
    {
        worldId: 8,
        title: "Celestial Observatory",
        subtitle: "Among the Stars",
        description: "A cosmic realm among the stars where celestial bodies become your enemies. Harness the power of the cosmos itself.",
        icon: "⭐",
        gradient: "from-indigo-900 via-purple-600 to-pink-500",
        accentColor: "border-yellow-300",
        difficulty: "Expert",
        keyFeatures: ["Gravity Manipulation", "Cosmic Powers", "Stellar Navigation"],
        enemies: ["Starlings", "Comets", "Nebulas", "Pulsars", "Asteroids", "Supernovas", "Cosmos Guardian"]
    },
    {
        worldId: 9,
        title: "Abyssal Depths",
        subtitle: "Deep Sea Terror",
        description: "The darkest depths of an endless ocean. Face ancient horrors that dwell where light cannot reach.",
        icon: "🌊",
        gradient: "from-blue-950 via-teal-800 to-cyan-900",
        accentColor: "border-cyan-500",
        difficulty: "Expert",
        keyFeatures: ["Pressure Mechanics", "Tidal Forces", "Deep Sea Adaptation"],
        enemies: ["Tides", "Whirlpools", "Leviathans", "Deepcrawlers", "Brine", "Trench", "Abyssal Horror"]
    },
    {
        worldId: 10,
        title: "Verdant Wilds",
        subtitle: "Nature's Wrath",
        description: "An ancient forest teeming with primal power. Nature itself rises to defend its domain against intruders.",
        icon: "🌿",
        gradient: "from-green-800 via-emerald-600 to-lime-500",
        accentColor: "border-green-400",
        difficulty: "Expert",
        keyFeatures: ["Nature Magic", "Poison Effects", "Life Regeneration"],
        enemies: ["Sprouts", "Thorns", "Blossoms", "Rootguards", "Canopy", "Wildvines", "Forest Keeper"]
    },
    {
        worldId: 11,
        title: "Frost Citadel",
        subtitle: "Eternal Winter",
        description: "A frozen fortress where eternal winter reigns. Ice and snow dominate everything in this merciless realm.",
        icon: "❄️",
        gradient: "from-cyan-300 via-blue-400 to-indigo-500",
        accentColor: "border-blue-300",
        difficulty: "Expert",
        keyFeatures: ["Freeze Effects", "Ice Shields", "Glacial Power"],
        enemies: ["Snowflakes", "Icicles", "Blizzards", "Frostbite", "Glacial", "Permafrost", "Ice Queen"]
    },
    {
        worldId: 12,
        title: "Desert Tombs",
        subtitle: "Ancient Curses",
        description: "Forgotten tombs buried beneath endless sands. Ancient curses and the undead guard treasures long lost to time.",
        icon: "🏜️",
        gradient: "from-amber-600 via-yellow-500 to-orange-600",
        accentColor: "border-yellow-400",
        difficulty: "Expert",
        keyFeatures: ["Curse Mechanics", "Mirage Illusions", "Ancient Power"],
        enemies: ["Sand", "Dust", "Mirages", "Scarabs", "Mummies", "Obelisks", "Pharaoh"]
    },
    {
        worldId: 13,
        title: "Storm Peaks",
        subtitle: "Tempest's Fury",
        description: "Mountain peaks where eternal storms rage. Lightning, wind, and thunder create the ultimate elemental challenge.",
        icon: "⛈️",
        gradient: "from-gray-800 via-blue-600 to-yellow-500",
        accentColor: "border-blue-400",
        difficulty: "Expert",
        keyFeatures: ["Lightning Strikes", "Wind Mechanics", "Storm Synergy"],
        enemies: ["Breezes", "Gusts", "Tempests", "Thunder", "Hurricanes", "Cyclones", "Storm King"]
    },
    {
        worldId: 14,
        title: "Void Nexus",
        subtitle: "Reality's End",
        description: "Where reality itself breaks down and the void seeps through. The final challenge awaits in this realm of cosmic horror.",
        icon: "🌌",
        gradient: "from-purple-950 via-fuchsia-900 to-black",
        accentColor: "border-purple-400",
        difficulty: "Expert",
        keyFeatures: ["Reality Warping", "Void Damage", "Dimensional Rifts"],
        enemies: ["Anomalies", "Riftborn", "Voidspawn", "Ethereals", "Nullifiers", "Paradoxes", "Void Lord"]
    },
    {
        worldId: 15,
        title: "Ethereal Gardens",
        subtitle: "Realm of Dreams",
        description: "Enter a world where dreams and reality merge. Navigate through shifting illusions and face the master of dreams himself.",
        icon: "✨",
        gradient: "from-pink-400 via-purple-400 to-indigo-500",
        accentColor: "border-pink-300",
        difficulty: "Expert",
        keyFeatures: ["Dream Mechanics", "Illusion Shifting", "Reality Bending"],
        enemies: ["Wisps", "Dreamwalkers", "Illusions", "Phantasms", "Mirages", "Reveries", "Dream Lord"]
    },
    {
        worldId: 16,
        title: "Infernal Abyss",
        subtitle: "Hell's Domain",
        description: "Descend into the depths of hell where demons rule and fire consumes all. Only the strongest can survive the infernal forces.",
        icon: "🔥",
        gradient: "from-red-950 via-orange-800 to-yellow-700",
        accentColor: "border-red-500",
        difficulty: "Expert",
        keyFeatures: ["Hellfire Damage", "Demon Summoning", "Soul Mechanics"],
        enemies: ["Imps", "Hellhounds", "Demons", "Succubi", "Tormentors", "ArchDemons", "Lord of Hell"]
    },
    {
        worldId: 17,
        title: "Cyberpunk Megacity",
        subtitle: "Digital Revolution",
        description: "Fight through a neon-lit dystopian future where technology and corruption rule. Hack your way to the top of the corporate tower.",
        icon: "🤖",
        gradient: "from-cyan-600 via-blue-700 to-purple-800",
        accentColor: "border-cyan-400",
        difficulty: "Expert",
        keyFeatures: ["Hacking Systems", "Cyber Augments", "Digital Warfare"],
        enemies: ["Drones", "Turrets", "Mechs", "Hackers", "Cyborgs", "AI Cores", "MegaCorp Boss"]
    },
    {
        worldId: 18,
        title: "Astral Plane",
        subtitle: "Cosmic Ascension",
        description: "Ascend beyond mortal limits to the higher planes of existence. Face cosmic beings and transcend reality itself.",
        icon: "🌟",
        gradient: "from-purple-600 via-pink-500 to-yellow-400",
        accentColor: "border-yellow-300",
        difficulty: "Expert",
        keyFeatures: ["Transcendence", "Cosmic Power", "Divine Ascension"],
        enemies: ["Seraphs", "Celestials", "Ascended", "Divinity", "Transcendent", "Eternal", "Overmind"]
    },
    {
        worldId: 19,
        title: "Chaos Realm",
        subtitle: "Entropy Unleashed",
        description: "Where chaos reigns supreme and reality itself mutates. Face the ever-changing forces of pure entropy and chaos.",
        icon: "🌀",
        gradient: "from-fuchsia-700 via-purple-800 to-violet-950",
        accentColor: "border-fuchsia-400",
        difficulty: "Expert",
        keyFeatures: ["Chaos Mutation", "Reality Flux", "Entropy Effects"],
        enemies: ["Chaoslings", "Warpers", "Unstables", "Mutations", "Aberrations", "Chaos Beasts", "Chaos Emperor"]
    },
    {
        worldId: 20,
        title: "The Final Gate",
        subtitle: "End of Existence",
        description: "The ultimate challenge. Face the guardians of existence itself in this final test. Only the strongest will see the end of all things.",
        icon: "⚫",
        gradient: "from-gray-950 via-stone-900 to-black",
        accentColor: "border-stone-400",
        difficulty: "Expert",
        keyFeatures: ["Ultimate Power", "Final Challenge", "Absolute Mastery"],
        enemies: ["Guardians", "Sentinels", "Wardens", "Keepers", "Primordials", "Absolutes", "Final Boss"]
    }
];

export const getWorldTheme = (worldId: number): WorldTheme | undefined => {
    return WORLD_THEMES.find(theme => theme.worldId === worldId);
};
