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
    // World 1 Extended Stages 11-15
    {
        id: 211,
        name: "Royal Vanguard",
        description: "Elite knights defend the kingdom's honor",
        world: 1,
        stage: 11,
        position: { x: 1600, y: 400 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 212,
        name: "Crown's Bastion",
        description: "Impenetrable fortress of the royal guard",
        world: 1,
        stage: 12,
        position: { x: 1750, y: 450 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 213,
        name: "Throne's Shadow",
        description: "Dark secrets beneath the kingdom",
        world: 1,
        stage: 13,
        position: { x: 1900, y: 500 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    {
        id: 214,
        name: "Royal Ascension",
        description: "Climb to the highest tower of power",
        world: 1,
        stage: 14,
        position: { x: 2050, y: 550 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 215,
        name: "Crown's Legacy",
        description: "The kingdom's ultimate medieval trial",
        world: 1,
        stage: 15,
        position: { x: 2200, y: 600 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    // World 2 Extended Stages 11-15
    {
        id: 216,
        name: "Mystic Nexus",
        description: "Where all magical ley lines converge",
        world: 2,
        stage: 11,
        position: { x: 1600, y: 620 },
        starCriteria: { time: 370000, minHpPercent: 75 }
    },
    {
        id: 217,
        name: "Arcane Pinnacle",
        description: "The highest point of magical power",
        world: 2,
        stage: 12,
        position: { x: 1750, y: 660 },
        starCriteria: { time: 390000, minHpPercent: 75 }
    },
    {
        id: 218,
        name: "Sorcerer's Crucible",
        description: "Where the greatest wizards are forged",
        world: 2,
        stage: 13,
        position: { x: 1900, y: 700 },
        starCriteria: { time: 410000, minHpPercent: 75 }
    },
    {
        id: 219,
        name: "Ethereal Convergence",
        description: "Magic transcends the bounds of reality",
        world: 2,
        stage: 14,
        position: { x: 2050, y: 740 },
        starCriteria: { time: 430000, minHpPercent: 75 }
    },
    {
        id: 220,
        name: "Spell's Zenith",
        description: "The ultimate manifestation of arcane mastery",
        world: 2,
        stage: 15,
        position: { x: 2200, y: 780 },
        starCriteria: { time: 450000, minHpPercent: 75 }
    },
    // World 3 Extended Stages 11-15
    {
        id: 221,
        name: "Bio-Fusion Core",
        description: "Organic and mechanical merge completely",
        world: 3,
        stage: 11,
        position: { x: 1600, y: 740 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 222,
        name: "Nexus Heart",
        description: "The Bio-Forge's pulsing central chamber",
        world: 3,
        stage: 12,
        position: { x: 1750, y: 780 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    {
        id: 223,
        name: "Organic Apocalypse",
        description: "Nature's technology reaches critical mass",
        world: 3,
        stage: 13,
        position: { x: 1900, y: 820 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 224,
        name: "Synthesis Peak",
        description: "The pinnacle of bio-engineering prowess",
        world: 3,
        stage: 14,
        position: { x: 2050, y: 860 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 225,
        name: "Evolution's End",
        description: "The ultimate techno-organic transformation",
        world: 3,
        stage: 15,
        position: { x: 2200, y: 900 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    // World 4 Extended Stages 11-15
    {
        id: 226,
        name: "Clockwork Ascendant",
        description: "Mechanical precision reaches perfection",
        world: 4,
        stage: 11,
        position: { x: 1600, y: 880 },
        starCriteria: { time: 390000, minHpPercent: 75 }
    },
    {
        id: 227,
        name: "Temporal Cascade",
        description: "Time flows in impossible directions",
        world: 4,
        stage: 12,
        position: { x: 1750, y: 920 },
        starCriteria: { time: 410000, minHpPercent: 75 }
    },
    {
        id: 228,
        name: "Temporal Nexus",
        description: "The crossroads of all timelines",
        world: 4,
        stage: 13,
        position: { x: 1900, y: 960 },
        starCriteria: { time: 430000, minHpPercent: 75 }
    },
    {
        id: 229,
        name: "Chrono Summit",
        description: "The peak of temporal mastery",
        world: 4,
        stage: 14,
        position: { x: 2050, y: 1000 },
        starCriteria: { time: 450000, minHpPercent: 75 }
    },
    {
        id: 230,
        name: "Infinity Engine",
        description: "Where time and space are forged eternal",
        world: 4,
        stage: 15,
        position: { x: 2200, y: 1040 },
        starCriteria: { time: 470000, minHpPercent: 75 }
    },
    // World 5 Extended Stages 11-15
    {
        id: 231,
        name: "Umbral Passage",
        description: "Navigate through the deepest shadows",
        world: 5,
        stage: 11,
        position: { x: 1600, y: 1060 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 232,
        name: "Nightfall Sanctum",
        description: "Where eternal night reigns supreme",
        world: 5,
        stage: 12,
        position: { x: 1750, y: 1100 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 233,
        name: "Eclipse Chamber",
        description: "Darkness swallows all light",
        world: 5,
        stage: 13,
        position: { x: 1900, y: 1140 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 234,
        name: "Void Nexus",
        description: "The convergence of absolute darkness",
        world: 5,
        stage: 14,
        position: { x: 2050, y: 1180 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 235,
        name: "Shadow Sovereign",
        description: "Face the ultimate master of shadows",
        world: 5,
        stage: 15,
        position: { x: 2200, y: 1220 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    // World 6 Extended Stages 11-15
    {
        id: 236,
        name: "Prismatic Depths",
        description: "Descend into crystalline mysteries",
        world: 6,
        stage: 11,
        position: { x: 1600, y: 1160 },
        starCriteria: { time: 250000, minHpPercent: 75 }
    },
    {
        id: 237,
        name: "Geode Labyrinth",
        description: "Lost among sparkling formations",
        world: 6,
        stage: 12,
        position: { x: 1750, y: 1200 },
        starCriteria: { time: 270000, minHpPercent: 75 }
    },
    {
        id: 238,
        name: "Diamond Citadel",
        description: "Fortress of impenetrable gems",
        world: 6,
        stage: 13,
        position: { x: 1900, y: 1240 },
        starCriteria: { time: 290000, minHpPercent: 75 }
    },
    {
        id: 239,
        name: "Crystal Convergence",
        description: "Where all gemstones unite in power",
        world: 6,
        stage: 14,
        position: { x: 2050, y: 1280 },
        starCriteria: { time: 310000, minHpPercent: 75 }
    },
    {
        id: 240,
        name: "Gemstone Monarch",
        description: "The eternal ruler of crystal caverns",
        world: 6,
        stage: 15,
        position: { x: 2200, y: 1320 },
        starCriteria: { time: 330000, minHpPercent: 75 }
    },
    // World 7 Extended Stages 11-15
    {
        id: 241,
        name: "Magma Core",
        description: "The heart of volcanic fury",
        world: 7,
        stage: 11,
        position: { x: 1600, y: 1260 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 242,
        name: "Lava Cascade",
        description: "Rivers of molten destruction",
        world: 7,
        stage: 12,
        position: { x: 1750, y: 1300 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 243,
        name: "Inferno Sanctum",
        description: "Where flames reach their zenith",
        world: 7,
        stage: 13,
        position: { x: 1900, y: 1340 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 244,
        name: "Volcanic Crucible",
        description: "Forge of world-ending power",
        world: 7,
        stage: 14,
        position: { x: 2050, y: 1380 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 245,
        name: "Pyroclasm Emperor",
        description: "Supreme lord of fire and lava",
        world: 7,
        stage: 15,
        position: { x: 2200, y: 1420 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    // World 8 Extended Stages 11-15
    {
        id: 246,
        name: "Nebula Drift",
        description: "Lost among cosmic clouds",
        world: 8,
        stage: 11,
        position: { x: 1600, y: 1360 },
        starCriteria: { time: 270000, minHpPercent: 75 }
    },
    {
        id: 247,
        name: "Stellar Confluence",
        description: "Where stars collide and merge",
        world: 8,
        stage: 12,
        position: { x: 1750, y: 1400 },
        starCriteria: { time: 290000, minHpPercent: 75 }
    },
    {
        id: 248,
        name: "Cosmic Rift",
        description: "Tear in the fabric of space",
        world: 8,
        stage: 13,
        position: { x: 1900, y: 1440 },
        starCriteria: { time: 310000, minHpPercent: 75 }
    },
    {
        id: 249,
        name: "Celestial Nexus",
        description: "The center of all celestial bodies",
        world: 8,
        stage: 14,
        position: { x: 2050, y: 1480 },
        starCriteria: { time: 330000, minHpPercent: 75 }
    },
    {
        id: 250,
        name: "Astral Overseer",
        description: "Master of the infinite cosmos",
        world: 8,
        stage: 15,
        position: { x: 2200, y: 1520 },
        starCriteria: { time: 350000, minHpPercent: 75 }
    },
    // World 9 Extended Stages 11-15
    {
        id: 251,
        name: "Twilight Trench",
        description: "Where sunlight fades to nothing",
        world: 9,
        stage: 11,
        position: { x: 1600, y: 1460 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 252,
        name: "Hadal Expanse",
        description: "The deepest depths of the ocean",
        world: 9,
        stage: 12,
        position: { x: 1750, y: 1500 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 253,
        name: "Pressure Forge",
        description: "Crushing forces beyond comprehension",
        world: 9,
        stage: 13,
        position: { x: 1900, y: 1540 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 254,
        name: "Abyssal Throne",
        description: "Domain of the deep-sea leviathan",
        world: 9,
        stage: 14,
        position: { x: 2050, y: 1580 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 255,
        name: "Leviathan's Maw",
        description: "Face the ultimate oceanic terror",
        world: 9,
        stage: 15,
        position: { x: 2200, y: 1620 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    // World 10 Extended Stages 11-15
    {
        id: 256,
        name: "Thornwood Passage",
        description: "Navigate the savage undergrowth",
        world: 10,
        stage: 11,
        position: { x: 1600, y: 1560 },
        starCriteria: { time: 290000, minHpPercent: 75 }
    },
    {
        id: 257,
        name: "Wildbloom Sanctum",
        description: "Where nature's fury blooms eternal",
        world: 10,
        stage: 12,
        position: { x: 1750, y: 1600 },
        starCriteria: { time: 310000, minHpPercent: 75 }
    },
    {
        id: 258,
        name: "Primal Grove",
        description: "The ancient heart of the forest",
        world: 10,
        stage: 13,
        position: { x: 1900, y: 1640 },
        starCriteria: { time: 330000, minHpPercent: 75 }
    },
    {
        id: 259,
        name: "Nature's Wrath",
        description: "Unleashed power of the wild",
        world: 10,
        stage: 14,
        position: { x: 2050, y: 1680 },
        starCriteria: { time: 350000, minHpPercent: 75 }
    },
    {
        id: 260,
        name: "Verdant Primarch",
        description: "Supreme guardian of all nature",
        world: 10,
        stage: 15,
        position: { x: 2200, y: 1720 },
        starCriteria: { time: 370000, minHpPercent: 75 }
    },
    // World 11 Extended Stages 11-15
    {
        id: 261,
        name: "Frozen Nexus",
        description: "The heart of eternal winter",
        world: 11,
        stage: 11,
        position: { x: 1600, y: 1660 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 262,
        name: "Crystalline Halls",
        description: "Ice crystals refract deadly light",
        world: 11,
        stage: 12,
        position: { x: 1750, y: 1700 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 263,
        name: "Blizzard Core",
        description: "Where all storms converge",
        world: 11,
        stage: 13,
        position: { x: 1900, y: 1740 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 264,
        name: "Glacial Throne",
        description: "The Ice Queen's final sanctuary",
        world: 11,
        stage: 14,
        position: { x: 2050, y: 1780 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 265,
        name: "Winter's End",
        description: "Beyond the eternal freeze",
        world: 11,
        stage: 15,
        position: { x: 2200, y: 1820 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    // World 12 Extended Stages 11-15
    {
        id: 266,
        name: "Buried Temple",
        description: "Ancient secrets beneath the sands",
        world: 12,
        stage: 11,
        position: { x: 1600, y: 1760 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 267,
        name: "Cursed Catacombs",
        description: "The pharaoh's curse awakens",
        world: 12,
        stage: 12,
        position: { x: 1750, y: 1800 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 268,
        name: "Pyramid Depths",
        description: "Descend into darkness eternal",
        world: 12,
        stage: 13,
        position: { x: 1900, y: 1840 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 269,
        name: "Anubis Chamber",
        description: "The guardian judges your soul",
        world: 12,
        stage: 14,
        position: { x: 2050, y: 1880 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 270,
        name: "Pharaoh's Wrath",
        description: "Face the ancient king's fury",
        world: 12,
        stage: 15,
        position: { x: 2200, y: 1920 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    // World 13 Extended Stages 11-15
    {
        id: 271,
        name: "Thunder Bastion",
        description: "Lightning strikes without mercy",
        world: 13,
        stage: 11,
        position: { x: 1600, y: 1860 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 272,
        name: "Wind Razor Peak",
        description: "Cutting winds tear through all",
        world: 13,
        stage: 12,
        position: { x: 1750, y: 1900 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 273,
        name: "Storm Forge",
        description: "Where tempests are born",
        world: 13,
        stage: 13,
        position: { x: 1900, y: 1940 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 274,
        name: "Tempest Crown",
        description: "The Storm King's domain",
        world: 13,
        stage: 14,
        position: { x: 2050, y: 1980 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 275,
        name: "Apex Maelstrom",
        description: "The ultimate storm awaits",
        world: 13,
        stage: 15,
        position: { x: 2200, y: 2020 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    // World 14 Extended Stages 11-15
    {
        id: 276,
        name: "Void Echo",
        description: "Reality's distant whisper",
        world: 14,
        stage: 11,
        position: { x: 1600, y: 1960 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 277,
        name: "Null Realm",
        description: "Where existence ceases",
        world: 14,
        stage: 12,
        position: { x: 1750, y: 2000 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 278,
        name: "Fracture Zone",
        description: "Reality shatters completely",
        world: 14,
        stage: 13,
        position: { x: 1900, y: 2040 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 279,
        name: "Paradox Throne",
        description: "The Void Lord's impossible seat",
        world: 14,
        stage: 14,
        position: { x: 2050, y: 2080 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 280,
        name: "Beyond Nothing",
        description: "Past the edge of the void",
        world: 14,
        stage: 15,
        position: { x: 2200, y: 2120 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    // World 15 Extended Stages 11-15
    {
        id: 281,
        name: "Lucid Passage",
        description: "Dreams become tangible",
        world: 15,
        stage: 11,
        position: { x: 1600, y: 2060 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 282,
        name: "Oneiric Sanctuary",
        description: "Where dreams take refuge",
        world: 15,
        stage: 12,
        position: { x: 1750, y: 2100 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 283,
        name: "Subconscious Depths",
        description: "Dive into the mind's abyss",
        world: 15,
        stage: 13,
        position: { x: 1900, y: 2140 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 284,
        name: "Morpheus Gate",
        description: "The Dream Lord's final test",
        world: 15,
        stage: 14,
        position: { x: 2050, y: 2180 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 285,
        name: "Eternal Slumber",
        description: "Sleep forever in perfect dreams",
        world: 15,
        stage: 15,
        position: { x: 2200, y: 2220 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    // World 16 Extended Stages 11-15
    {
        id: 286,
        name: "Hellforge Depths",
        description: "Forged in the deepest flames",
        world: 16,
        stage: 11,
        position: { x: 1600, y: 2160 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 287,
        name: "Brimstone Citadel",
        description: "Sulfur and fire consume all",
        world: 16,
        stage: 12,
        position: { x: 1750, y: 2200 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 288,
        name: "Demon Emperor's Hall",
        description: "Where arch-demons gather",
        world: 16,
        stage: 13,
        position: { x: 1900, y: 2240 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 289,
        name: "Damnation's Heart",
        description: "The core of all evil",
        world: 16,
        stage: 14,
        position: { x: 2050, y: 2280 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 290,
        name: "Hell's Judgement",
        description: "Face the ultimate infernal trial",
        world: 16,
        stage: 15,
        position: { x: 2200, y: 2320 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    // World 17 Extended Stages 11-15
    {
        id: 291,
        name: "Data Stream Nexus",
        description: "Rivers of data flow through cybernetic channels",
        world: 17,
        stage: 11,
        position: { x: 1600, y: 2270 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 292,
        name: "Virtual Reality Core",
        description: "The boundary between real and virtual dissolves",
        world: 17,
        stage: 12,
        position: { x: 1750, y: 2320 },
        starCriteria: { time: 310000, minHpPercent: 75 }
    },
    {
        id: 293,
        name: "Nanotech Assembly",
        description: "Microscopic machines construct reality",
        world: 17,
        stage: 13,
        position: { x: 1900, y: 2370 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 294,
        name: "Techno-Transcendence",
        description: "Where technology becomes consciousness",
        world: 17,
        stage: 14,
        position: { x: 2050, y: 2420 },
        starCriteria: { time: 370000, minHpPercent: 75 }
    },
    {
        id: 295,
        name: "Digital Godhood",
        description: "Achieve omnipotence in the digital realm",
        world: 17,
        stage: 15,
        position: { x: 2200, y: 2470 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    // World 18 Extended Stages 11-15
    {
        id: 296,
        name: "Stellar Gateway",
        description: "Portal to the cosmic beyond",
        world: 18,
        stage: 11,
        position: { x: 1600, y: 2370 },
        starCriteria: { time: 290000, minHpPercent: 75 }
    },
    {
        id: 297,
        name: "Cosmic Harmony",
        description: "All celestial forces align in perfect balance",
        world: 18,
        stage: 12,
        position: { x: 1750, y: 2420 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 298,
        name: "Astral Ascendant",
        description: "Rise beyond physical limitations",
        world: 18,
        stage: 13,
        position: { x: 1900, y: 2470 },
        starCriteria: { time: 350000, minHpPercent: 75 }
    },
    {
        id: 299,
        name: "Universal Consciousness",
        description: "Merge with the universal mind",
        world: 18,
        stage: 14,
        position: { x: 2050, y: 2520 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 300,
        name: "Cosmic Enlightenment",
        description: "Achieve ultimate cosmic understanding",
        world: 18,
        stage: 15,
        position: { x: 2200, y: 2570 },
        starCriteria: { time: 410000, minHpPercent: 75 }
    },
    // World 19 Extended Stages 11-15
    {
        id: 301,
        name: "Entropic Surge",
        description: "Chaos energy surges uncontrollably",
        world: 19,
        stage: 11,
        position: { x: 1600, y: 2470 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 302,
        name: "Disorder Manifest",
        description: "Pure disorder takes physical form",
        world: 19,
        stage: 12,
        position: { x: 1750, y: 2520 },
        starCriteria: { time: 330000, minHpPercent: 75 }
    },
    {
        id: 303,
        name: "Chaotic Singularity",
        description: "All chaos collapses into a single point",
        world: 19,
        stage: 13,
        position: { x: 1900, y: 2570 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 304,
        name: "Entropy's Throne",
        description: "The seat of ultimate chaos",
        world: 19,
        stage: 14,
        position: { x: 2050, y: 2620 },
        starCriteria: { time: 390000, minHpPercent: 75 }
    },
    {
        id: 305,
        name: "Chaos Eternal",
        description: "Chaos that transcends time itself",
        world: 19,
        stage: 15,
        position: { x: 2200, y: 2670 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    // World 20 Extended Stages 11-15
    {
        id: 306,
        name: "Threshold Guardian",
        description: "The final gate's eternal sentinel",
        world: 20,
        stage: 11,
        position: { x: 1600, y: 2570 },
        starCriteria: { time: 310000, minHpPercent: 75 }
    },
    {
        id: 307,
        name: "Absolute Trial",
        description: "The ultimate test of worthiness",
        world: 20,
        stage: 12,
        position: { x: 1750, y: 2620 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 308,
        name: "Eternal Judgment",
        description: "Face judgment across all time",
        world: 20,
        stage: 13,
        position: { x: 1900, y: 2670 },
        starCriteria: { time: 370000, minHpPercent: 75 }
    },
    {
        id: 309,
        name: "Apex Convergence",
        description: "All paths converge at the apex",
        world: 20,
        stage: 14,
        position: { x: 2050, y: 2720 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    {
        id: 310,
        name: "Ultimate Transcendence",
        description: "Transcend all existence and limitation",
        world: 20,
        stage: 15,
        position: { x: 2200, y: 2770 },
        starCriteria: { time: 450000, minHpPercent: 75 }
    },

    // World 21: Quantum Realm
    {
        id: 311,
        name: "Probability Gates",
        description: "Where all outcomes exist simultaneously",
        world: 21,
        stage: 1,
        position: { x: 100, y: 2600 },
        starCriteria: { time: 200000, minHpPercent: 75 }
    },
    {
        id: 312,
        name: "Superposition Chamber",
        description: "Exist in multiple states at once",
        world: 21,
        stage: 2,
        position: { x: 250, y: 2620 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 313,
        name: "Entangled Corridors",
        description: "Paths linked across space and time",
        world: 21,
        stage: 3,
        position: { x: 400, y: 2640 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 314,
        name: "Wave Function Collapse",
        description: "Reality crystallizes from infinite possibilities",
        world: 21,
        stage: 4,
        position: { x: 550, y: 2660 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 315,
        name: "Particle Accelerator",
        description: "Smash through subatomic barriers",
        world: 21,
        stage: 5,
        position: { x: 700, y: 2680 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 316,
        name: "Uncertainty Principle",
        description: "Nothing is certain in the quantum realm",
        world: 21,
        stage: 6,
        position: { x: 850, y: 2700 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 317,
        name: "Schrodinger's Arena",
        description: "Both alive and dead until observed",
        world: 21,
        stage: 7,
        position: { x: 1000, y: 2720 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 318,
        name: "Quantum Tunneling",
        description: "Pass through impossible barriers",
        world: 21,
        stage: 8,
        position: { x: 1150, y: 2740 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 319,
        name: "Planck Dimension",
        description: "The smallest possible scale of existence",
        world: 21,
        stage: 9,
        position: { x: 1300, y: 2760 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 320,
        name: "Observer Effect",
        description: "Observation changes reality itself",
        world: 21,
        stage: 10,
        position: { x: 1450, y: 2780 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 321,
        name: "Zero Point Energy",
        description: "Harness the vacuum of space itself",
        world: 21,
        stage: 11,
        position: { x: 1600, y: 2800 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 322,
        name: "Quantum Decoherence",
        description: "Where quantum meets classical reality",
        world: 21,
        stage: 12,
        position: { x: 1750, y: 2820 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 323,
        name: "Heisenberg Fortress",
        description: "Momentum and position cannot coexist",
        world: 21,
        stage: 13,
        position: { x: 1900, y: 2840 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 324,
        name: "Quantum Singularity",
        description: "All probabilities converge into one",
        world: 21,
        stage: 14,
        position: { x: 2050, y: 2860 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 325,
        name: "The Qubit Throne",
        description: "Face the Quantum Emperor in perfect superposition",
        world: 21,
        stage: 15,
        position: { x: 2200, y: 2880 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },

    // World 22: Ancient Ruins
    {
        id: 326,
        name: "Forgotten Entrance",
        description: "Crumbling gates of a lost civilization",
        world: 22,
        stage: 1,
        position: { x: 100, y: 2700 },
        starCriteria: { time: 200000, minHpPercent: 75 }
    },
    {
        id: 327,
        name: "Hieroglyph Hall",
        description: "Ancient writings tell of terrible secrets",
        world: 22,
        stage: 2,
        position: { x: 250, y: 2720 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 328,
        name: "Sandstone Catacombs",
        description: "Buried beneath millennia of dust",
        world: 22,
        stage: 3,
        position: { x: 400, y: 2740 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 329,
        name: "Temple of the Ancients",
        description: "Where forgotten gods were worshipped",
        world: 22,
        stage: 4,
        position: { x: 550, y: 2760 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 330,
        name: "Obsidian Archive",
        description: "Knowledge preserved in black glass",
        world: 22,
        stage: 5,
        position: { x: 700, y: 2780 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 331,
        name: "Cursed Reliquary",
        description: "Ancient artifacts pulse with dark energy",
        world: 22,
        stage: 6,
        position: { x: 850, y: 2800 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 332,
        name: "Pyramid Depths",
        description: "Descend into the heart of the pyramid",
        world: 22,
        stage: 7,
        position: { x: 1000, y: 2820 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 333,
        name: "Sunken Plaza",
        description: "Once great, now reclaimed by nature",
        world: 22,
        stage: 8,
        position: { x: 1150, y: 2840 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 334,
        name: "Guardian Statues",
        description: "Stone sentinels awaken after eons",
        world: 22,
        stage: 9,
        position: { x: 1300, y: 2860 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 335,
        name: "Throne of Eternity",
        description: "Where the immortal emperor once ruled",
        world: 22,
        stage: 10,
        position: { x: 1450, y: 2880 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 336,
        name: "Forbidden Vault",
        description: "Sealed for good reason, now opened",
        world: 22,
        stage: 11,
        position: { x: 1600, y: 2900 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 337,
        name: "Sacrificial Chamber",
        description: "Blood stains never fade from these stones",
        world: 22,
        stage: 12,
        position: { x: 1750, y: 2920 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 338,
        name: "Crystal Obelisk",
        description: "A monument to powers beyond comprehension",
        world: 22,
        stage: 13,
        position: { x: 1900, y: 2940 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 339,
        name: "Cosmic Observatory",
        description: "They mapped the stars from this pinnacle",
        world: 22,
        stage: 14,
        position: { x: 2050, y: 2960 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 340,
        name: "The Last Pharaoh",
        description: "Face the undying ruler of the lost empire",
        world: 22,
        stage: 15,
        position: { x: 2200, y: 2980 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },

    // World 23: Plague Lands
    {
        id: 341,
        name: "Quarantine Zone",
        description: "The disease begins its terrible spread",
        world: 23,
        stage: 1,
        position: { x: 100, y: 2800 },
        starCriteria: { time: 200000, minHpPercent: 75 }
    },
    {
        id: 342,
        name: "Contaminated Streets",
        description: "Infection spreads through abandoned cities",
        world: 23,
        stage: 2,
        position: { x: 250, y: 2820 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 343,
        name: "Viral Laboratory",
        description: "Where the plague was first created",
        world: 23,
        stage: 3,
        position: { x: 400, y: 2840 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 344,
        name: "Pestilent Gardens",
        description: "Once beautiful, now twisted by disease",
        world: 23,
        stage: 4,
        position: { x: 550, y: 2860 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 345,
        name: "Infectious Ward",
        description: "The sick and dying cry out in agony",
        world: 23,
        stage: 5,
        position: { x: 700, y: 2880 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 346,
        name: "Epidemic Center",
        description: "Ground zero of the pandemic",
        world: 23,
        stage: 6,
        position: { x: 850, y: 2900 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 347,
        name: "Plague Doctor's Domain",
        description: "Masked figures promise false cures",
        world: 23,
        stage: 7,
        position: { x: 1000, y: 2920 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 348,
        name: "Contagion Swamps",
        description: "Disease festers in putrid waters",
        world: 23,
        stage: 8,
        position: { x: 1150, y: 2940 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 349,
        name: "Rotten Necropolis",
        description: "The dead rise, spreading infection",
        world: 23,
        stage: 9,
        position: { x: 1300, y: 2960 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 350,
        name: "Miasma Citadel",
        description: "Toxic clouds form an impenetrable fortress",
        world: 23,
        stage: 10,
        position: { x: 1450, y: 2980 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 351,
        name: "Mutation Chamber",
        description: "The plague evolves into something worse",
        world: 23,
        stage: 11,
        position: { x: 1600, y: 3000 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 352,
        name: "Virulent Breeding Ground",
        description: "New strains emerge constantly",
        world: 23,
        stage: 12,
        position: { x: 1750, y: 3020 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 353,
        name: "Patient Zero's Tomb",
        description: "Where the first infection still lingers",
        world: 23,
        stage: 13,
        position: { x: 1900, y: 3040 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 354,
        name: "Pandemic Apex",
        description: "The disease reaches its ultimate form",
        world: 23,
        stage: 14,
        position: { x: 2050, y: 3060 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 355,
        name: "The Plague Incarnate",
        description: "Face the living embodiment of disease itself",
        world: 23,
        stage: 15,
        position: { x: 2200, y: 3080 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },

    // World 24: Lightning Realm
    {
        id: 356,
        name: "Static Fields",
        description: "Electricity crackles through the air",
        world: 24,
        stage: 1,
        position: { x: 100, y: 2900 },
        starCriteria: { time: 200000, minHpPercent: 75 }
    },
    {
        id: 357,
        name: "Tesla Coils",
        description: "Arcs of power dance between towers",
        world: 24,
        stage: 2,
        position: { x: 250, y: 2920 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 358,
        name: "Voltage Conduits",
        description: "Channels of pure electrical energy",
        world: 24,
        stage: 3,
        position: { x: 400, y: 2940 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 359,
        name: "Thunderstorm Arena",
        description: "Lightning strikes without warning",
        world: 24,
        stage: 4,
        position: { x: 550, y: 2960 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 360,
        name: "Capacitor Banks",
        description: "Massive stores of electrical potential",
        world: 24,
        stage: 5,
        position: { x: 700, y: 2980 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 361,
        name: "Plasma Generators",
        description: "Matter transformed into pure energy",
        world: 24,
        stage: 6,
        position: { x: 850, y: 3000 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 362,
        name: "Electron Storm",
        description: "Subatomic particles rage in chaos",
        world: 24,
        stage: 7,
        position: { x: 1000, y: 3020 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 363,
        name: "Magnetic Labyrinth",
        description: "Forces pull and push in all directions",
        world: 24,
        stage: 8,
        position: { x: 1150, y: 3040 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 364,
        name: "Ionized Chambers",
        description: "Atoms stripped of their electrons",
        world: 24,
        stage: 9,
        position: { x: 1300, y: 3060 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 365,
        name: "Lightning Spire",
        description: "A tower that reaches into the storm",
        world: 24,
        stage: 10,
        position: { x: 1450, y: 3080 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 366,
        name: "Electromagnetic Nexus",
        description: "Where all forces converge",
        world: 24,
        stage: 11,
        position: { x: 1600, y: 3100 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 367,
        name: "Superconductor Core",
        description: "Perfect flow of infinite current",
        world: 24,
        stage: 12,
        position: { x: 1750, y: 3120 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 368,
        name: "Arc Flash Zone",
        description: "Instantaneous releases of devastating power",
        world: 24,
        stage: 13,
        position: { x: 1900, y: 3140 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 369,
        name: "The Megavolt Throne",
        description: "A billion volts surge through this chamber",
        world: 24,
        stage: 14,
        position: { x: 2050, y: 3160 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 370,
        name: "Storm God's Wrath",
        description: "Face the elemental lord of lightning itself",
        world: 24,
        stage: 15,
        position: { x: 2200, y: 3180 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },

    // World 25: Blood Moon
    {
        id: 371,
        name: "Crimson Gates",
        description: "Blood-red moonlight illuminates the path",
        world: 25,
        stage: 1,
        position: { x: 100, y: 3000 },
        starCriteria: { time: 200000, minHpPercent: 75 }
    },
    {
        id: 372,
        name: "Vampire's Lair",
        description: "Ancient bloodsuckers stir from their slumber",
        world: 25,
        stage: 2,
        position: { x: 250, y: 3020 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 373,
        name: "Gothic Cathedral",
        description: "Twisted spires pierce the bleeding sky",
        world: 25,
        stage: 3,
        position: { x: 400, y: 3040 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 374,
        name: "Hemomancy Circle",
        description: "Blood magic flows through arcane rituals",
        world: 25,
        stage: 4,
        position: { x: 550, y: 3060 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 375,
        name: "Gargoyle Roost",
        description: "Stone demons watch from shadowed perches",
        world: 25,
        stage: 5,
        position: { x: 700, y: 3080 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 376,
        name: "Sanguine Crypts",
        description: "The undead rest in blood-soaked tombs",
        world: 25,
        stage: 6,
        position: { x: 850, y: 3100 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 377,
        name: "Nosferatu's Chamber",
        description: "The ancient vampire lord's domain",
        world: 25,
        stage: 7,
        position: { x: 1000, y: 3120 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 378,
        name: "Blood Fountain Plaza",
        description: "Crimson waters flow eternally",
        world: 25,
        stage: 8,
        position: { x: 1150, y: 3140 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 379,
        name: "Moonlit Ballroom",
        description: "Pale dancers waltz in eternal night",
        world: 25,
        stage: 9,
        position: { x: 1300, y: 3160 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 380,
        name: "Crimson Spire",
        description: "A tower built from blood and bone",
        world: 25,
        stage: 10,
        position: { x: 1450, y: 3180 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 381,
        name: "Exsanguination Chamber",
        description: "Where victims are drained of their life essence",
        world: 25,
        stage: 11,
        position: { x: 1600, y: 3200 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 382,
        name: "Undying Throne Room",
        description: "Immortal nobility gather in darkness",
        world: 25,
        stage: 12,
        position: { x: 1750, y: 3220 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 383,
        name: "Eclipse Sanctum",
        description: "Where the blood moon reaches its zenith",
        world: 25,
        stage: 13,
        position: { x: 1900, y: 3240 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 384,
        name: "Vampiric Convergence",
        description: "All bloodlines unite in terrible power",
        world: 25,
        stage: 14,
        position: { x: 2050, y: 3260 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 385,
        name: "The Eternal Count",
        description: "Face the immortal vampire emperor under the blood moon",
        world: 25,
        stage: 15,
        position: { x: 2200, y: 3280 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },
    // World 26: Machine Core
    {
        id: 386,
        name: "Boot Sequence",
        description: "Initialize systems and breach the outer firewall",
        world: 26,
        stage: 1,
        position: { x: 100, y: 3600 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 387,
        name: "Data Streams",
        description: "Navigate through rivers of binary data",
        world: 26,
        stage: 2,
        position: { x: 200, y: 3620 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 388,
        name: "Nanobot Swarm",
        description: "Defend against microscopic machine hordes",
        world: 26,
        stage: 3,
        position: { x: 300, y: 3640 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 389,
        name: "Protocol Gateway",
        description: "Override security protocols to advance",
        world: 26,
        stage: 4,
        position: { x: 400, y: 3660 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 390,
        name: "Mainframe Nexus",
        description: "Hack into the central processing hub",
        world: 26,
        stage: 5,
        position: { x: 500, y: 3680 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 391,
        name: "Firewall Fortress",
        description: "Break through layered security defenses",
        world: 26,
        stage: 6,
        position: { x: 600, y: 3700 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 392,
        name: "Encryption Labyrinth",
        description: "Decode the encrypted pathways ahead",
        world: 26,
        stage: 7,
        position: { x: 700, y: 3720 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 393,
        name: "Automaton Factory",
        description: "Shut down the endless machine production",
        world: 26,
        stage: 8,
        position: { x: 800, y: 3740 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 394,
        name: "Neural Network",
        description: "Traverse the AI's learning pathways",
        world: 26,
        stage: 9,
        position: { x: 900, y: 3760 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 395,
        name: "Quantum Processor",
        description: "Face the quantum computing arrays",
        world: 26,
        stage: 10,
        position: { x: 1000, y: 3780 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    {
        id: 396,
        name: "Memory Banks",
        description: "Erase corrupted data from the archives",
        world: 26,
        stage: 11,
        position: { x: 1100, y: 3800 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 397,
        name: "System Override",
        description: "Take control of the machine consciousness",
        world: 26,
        stage: 12,
        position: { x: 1200, y: 3820 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 398,
        name: "Digital Consciousness",
        description: "Confront the awakened AI entity",
        world: 26,
        stage: 13,
        position: { x: 1300, y: 3840 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 399,
        name: "Core Access",
        description: "Breach the innermost sanctum of the machine",
        world: 26,
        stage: 14,
        position: { x: 1400, y: 3860 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 400,
        name: "Core AI Terminus",
        description: "Face the Core AI in its digital domain",
        world: 26,
        stage: 15,
        position: { x: 1500, y: 3880 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },
    // World 27: Spirit Realm
    {
        id: 401,
        name: "Ethereal Gateway",
        description: "Step through the veil into the spirit world",
        world: 27,
        stage: 1,
        position: { x: 100, y: 3800 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 402,
        name: "Ghostly Mists",
        description: "Navigate through spectral fog and phantoms",
        world: 27,
        stage: 2,
        position: { x: 200, y: 3820 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 403,
        name: "Poltergeist Manor",
        description: "Survive the chaos of angry spirits",
        world: 27,
        stage: 3,
        position: { x: 300, y: 3840 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 404,
        name: "Spectral Gardens",
        description: "Walk among the souls of the departed",
        world: 27,
        stage: 4,
        position: { x: 400, y: 3860 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 405,
        name: "Haunted Halls",
        description: "Face the restless dead in their domain",
        world: 27,
        stage: 5,
        position: { x: 500, y: 3880 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 406,
        name: "Ectoplasmic Pool",
        description: "Traverse the ethereal essence of spirits",
        world: 27,
        stage: 6,
        position: { x: 600, y: 3900 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 407,
        name: "Spirit Sanctum",
        description: "Enter the sacred gathering place of ghosts",
        world: 27,
        stage: 7,
        position: { x: 700, y: 3920 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 408,
        name: "Possession Chamber",
        description: "Resist the attempts to control your body",
        world: 27,
        stage: 8,
        position: { x: 800, y: 3940 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 409,
        name: "Wraith Convergence",
        description: "Face the gathering of powerful wraiths",
        world: 27,
        stage: 9,
        position: { x: 900, y: 3960 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 410,
        name: "Ethereal Nexus",
        description: "Stand at the center of spirit energy",
        world: 27,
        stage: 10,
        position: { x: 1000, y: 3980 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    {
        id: 411,
        name: "Soul Chamber",
        description: "Navigate the realm where souls converge",
        world: 27,
        stage: 11,
        position: { x: 1100, y: 4000 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 412,
        name: "Spirit Council",
        description: "Face judgment before the spirit elders",
        world: 27,
        stage: 12,
        position: { x: 1200, y: 4020 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 413,
        name: "Afterlife Threshold",
        description: "Stand at the boundary of life and death",
        world: 27,
        stage: 13,
        position: { x: 1300, y: 4040 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 414,
        name: "Ghost King's Court",
        description: "Approach the throne of the spirit monarch",
        world: 27,
        stage: 14,
        position: { x: 1400, y: 4060 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 415,
        name: "Spirit King Ascension",
        description: "Challenge the sovereign of all spirits",
        world: 27,
        stage: 15,
        position: { x: 1500, y: 4080 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },
    // World 28: Dragon's Domain
    {
        id: 416,
        name: "Dragon's Gate",
        description: "Enter the legendary realm of dragons",
        world: 28,
        stage: 1,
        position: { x: 100, y: 4000 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 417,
        name: "Wyvern Rookery",
        description: "Navigate the nesting grounds of young dragons",
        world: 28,
        stage: 2,
        position: { x: 200, y: 4020 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 418,
        name: "Drake Caverns",
        description: "Delve into caves filled with lesser drakes",
        world: 28,
        stage: 3,
        position: { x: 300, y: 4040 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 419,
        name: "Serpent's Coil",
        description: "Face the massive wyrm guardians",
        world: 28,
        stage: 4,
        position: { x: 400, y: 4060 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 420,
        name: "Firebreath Peak",
        description: "Climb through infernos of dragonfire",
        world: 28,
        stage: 5,
        position: { x: 500, y: 4080 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 421,
        name: "Scaled Fortress",
        description: "Assault the dragon-guarded stronghold",
        world: 28,
        stage: 6,
        position: { x: 600, y: 4100 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 422,
        name: "Dragon's Hoard",
        description: "Navigate the treasure vault of ancient dragons",
        world: 28,
        stage: 7,
        position: { x: 700, y: 4120 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 423,
        name: "Wing Shadow Valley",
        description: "Fight under the shadow of circling dragons",
        world: 28,
        stage: 8,
        position: { x: 800, y: 4140 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 424,
        name: "Ancient Roost",
        description: "Challenge dragons in their resting place",
        world: 28,
        stage: 9,
        position: { x: 900, y: 4160 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 425,
        name: "Elder Wyrm Lair",
        description: "Face the wisdom and fury of elder dragons",
        world: 28,
        stage: 10,
        position: { x: 1000, y: 4180 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    {
        id: 426,
        name: "Draconic Council",
        description: "Stand before the gathering of great dragons",
        world: 28,
        stage: 11,
        position: { x: 1100, y: 4200 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 427,
        name: "Flame Citadel",
        description: "Storm the fortress of eternal dragonfire",
        world: 28,
        stage: 12,
        position: { x: 1200, y: 4220 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 428,
        name: "Emperor's Approach",
        description: "Ascend to the Dragon Emperor's throne",
        world: 28,
        stage: 13,
        position: { x: 1300, y: 4240 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 429,
        name: "Imperial Sanctum",
        description: "Enter the sacred chamber of the dragon ruler",
        world: 28,
        stage: 14,
        position: { x: 1400, y: 4260 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 430,
        name: "Dragon Emperor's Throne",
        description: "Face the supreme ruler of all dragonkind",
        world: 28,
        stage: 15,
        position: { x: 1500, y: 4280 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },
    // World 29: Multiverse Nexus
    {
        id: 431,
        name: "Reality Fracture",
        description: "Step through the cracks between worlds",
        world: 29,
        stage: 1,
        position: { x: 100, y: 4200 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 432,
        name: "Parallel Paths",
        description: "Navigate through converging timelines",
        world: 29,
        stage: 2,
        position: { x: 200, y: 4220 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 433,
        name: "Alternate Echoes",
        description: "Face reflections from other realities",
        world: 29,
        stage: 3,
        position: { x: 300, y: 4240 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 434,
        name: "Divergence Point",
        description: "Stand where possibilities split infinitely",
        world: 29,
        stage: 4,
        position: { x: 400, y: 4260 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 435,
        name: "Mirror Dimension",
        description: "Battle through the reversed reality",
        world: 29,
        stage: 5,
        position: { x: 500, y: 4280 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 436,
        name: "Quantum Bridge",
        description: "Cross the connection between universes",
        world: 29,
        stage: 6,
        position: { x: 600, y: 4300 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 437,
        name: "Probability Storm",
        description: "Survive the chaos of colliding possibilities",
        world: 29,
        stage: 7,
        position: { x: 700, y: 4320 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 438,
        name: "Dimensional Rift",
        description: "Face entities from beyond your reality",
        world: 29,
        stage: 8,
        position: { x: 800, y: 4340 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 439,
        name: "Convergence Zone",
        description: "Stand where all realities meet",
        world: 29,
        stage: 9,
        position: { x: 900, y: 4360 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 440,
        name: "Nexus Core",
        description: "Reach the heart of the multiverse",
        world: 29,
        stage: 10,
        position: { x: 1000, y: 4380 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    {
        id: 441,
        name: "Reality Weaver",
        description: "Face those who shape dimensional threads",
        world: 29,
        stage: 11,
        position: { x: 1100, y: 4400 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 442,
        name: "Infinite Crossroads",
        description: "Choose your path among endless realities",
        world: 29,
        stage: 12,
        position: { x: 1200, y: 4420 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 443,
        name: "Dimensional Throne",
        description: "Approach the seat of multiverse power",
        world: 29,
        stage: 13,
        position: { x: 1300, y: 4440 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 444,
        name: "Nexus Sanctum",
        description: "Enter the chamber of ultimate convergence",
        world: 29,
        stage: 14,
        position: { x: 1400, y: 4460 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 445,
        name: "Nexus Entity Summit",
        description: "Challenge the being that binds all realities",
        world: 29,
        stage: 15,
        position: { x: 1500, y: 4480 },
        starCriteria: { time: 500000, minHpPercent: 75 }
    },
    // World 30: The Absolute End
    {
        id: 446,
        name: "Final Threshold",
        description: "Cross into the realm beyond existence",
        world: 30,
        stage: 1,
        position: { x: 100, y: 4400 },
        starCriteria: { time: 220000, minHpPercent: 75 }
    },
    {
        id: 447,
        name: "Omega Beginning",
        description: "Where endings become beginnings",
        world: 30,
        stage: 2,
        position: { x: 200, y: 4420 },
        starCriteria: { time: 240000, minHpPercent: 75 }
    },
    {
        id: 448,
        name: "Alpha Terminus",
        description: "Face the paradox of first and last",
        world: 30,
        stage: 3,
        position: { x: 300, y: 4440 },
        starCriteria: { time: 260000, minHpPercent: 75 }
    },
    {
        id: 449,
        name: "Eternal Moment",
        description: "Experience infinity in a single instant",
        world: 30,
        stage: 4,
        position: { x: 400, y: 4460 },
        starCriteria: { time: 280000, minHpPercent: 75 }
    },
    {
        id: 450,
        name: "Beyond Time",
        description: "Transcend the limitations of temporal flow",
        world: 30,
        stage: 5,
        position: { x: 500, y: 4480 },
        starCriteria: { time: 300000, minHpPercent: 75 }
    },
    {
        id: 451,
        name: "Infinite Power",
        description: "Witness power without limit or bound",
        world: 30,
        stage: 6,
        position: { x: 600, y: 4500 },
        starCriteria: { time: 320000, minHpPercent: 75 }
    },
    {
        id: 452,
        name: "Perfect Void",
        description: "Stand in the emptiness that contains all",
        world: 30,
        stage: 7,
        position: { x: 700, y: 4520 },
        starCriteria: { time: 340000, minHpPercent: 75 }
    },
    {
        id: 453,
        name: "Absolute Clarity",
        description: "See through all illusions to truth itself",
        world: 30,
        stage: 8,
        position: { x: 800, y: 4540 },
        starCriteria: { time: 360000, minHpPercent: 75 }
    },
    {
        id: 454,
        name: "Transcendent Gate",
        description: "Pass through the portal to ultimate being",
        world: 30,
        stage: 9,
        position: { x: 900, y: 4560 },
        starCriteria: { time: 380000, minHpPercent: 75 }
    },
    {
        id: 455,
        name: "Perfection's Edge",
        description: "Approach the boundary of absolute perfection",
        world: 30,
        stage: 10,
        position: { x: 1000, y: 4580 },
        starCriteria: { time: 400000, minHpPercent: 75 }
    },
    {
        id: 456,
        name: "Ultimate Truth",
        description: "Face the reality behind all realities",
        world: 30,
        stage: 11,
        position: { x: 1100, y: 4600 },
        starCriteria: { time: 420000, minHpPercent: 75 }
    },
    {
        id: 457,
        name: "Omega Ascension",
        description: "Rise to the highest plane of existence",
        world: 30,
        stage: 12,
        position: { x: 1200, y: 4620 },
        starCriteria: { time: 440000, minHpPercent: 75 }
    },
    {
        id: 458,
        name: "Absolute Horizon",
        description: "Stand before the edge of everything",
        world: 30,
        stage: 13,
        position: { x: 1300, y: 4640 },
        starCriteria: { time: 460000, minHpPercent: 75 }
    },
    {
        id: 459,
        name: "End Eternal",
        description: "Face the ending that never ends",
        world: 30,
        stage: 14,
        position: { x: 1400, y: 4660 },
        starCriteria: { time: 480000, minHpPercent: 75 }
    },
    {
        id: 460,
        name: "The Perfect End",
        description: "Challenge perfection itself in the ultimate transcendence",
        world: 30,
        stage: 15,
        position: { x: 1500, y: 4680 },
        starCriteria: { time: 500000, minHpPercent: 75 }
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
    },
    {
        worldId: 21,
        title: "Quantum Realm",
        subtitle: "Wave-Particle Duality",
        description: "Enter a dimension where quantum mechanics reign supreme. Superposition, entanglement, and uncertainty define this reality-bending realm.",
        icon: "⚛️",
        gradient: "from-purple-600 via-cyan-500 to-violet-700",
        accentColor: "border-cyan-400",
        difficulty: "Expert",
        keyFeatures: ["Quantum Entanglement", "Superposition States", "Wave Functions"],
        enemies: ["Quantum Flux", "Superposition", "Entangled", "Wave Function", "Observer", "Uncertainty", "Quantum Singularity"]
    },
    {
        worldId: 22,
        title: "Ancient Ruins",
        subtitle: "Lost Civilization",
        description: "Explore forgotten temples and tombs filled with ancient curses and hieroglyphic magic. The pharaohs' guardians await.",
        icon: "🏛️",
        gradient: "from-amber-700 via-yellow-600 to-orange-700",
        accentColor: "border-yellow-500",
        difficulty: "Expert",
        keyFeatures: ["Ancient Curses", "Hieroglyphic Magic", "Resurrection Rites"],
        enemies: ["Rune Stones", "Ancient Golems", "Sphinx", "Anubis", "Ancient Mummies", "Hieroglyphs", "Ancient One"]
    },
    {
        worldId: 23,
        title: "Plague Lands",
        subtitle: "Pandemic Zone",
        description: "A diseased wasteland where contagion spreads unchecked. The plague doctor awaits in his quarantine domain.",
        icon: "☣️",
        gradient: "from-green-900 via-lime-700 to-emerald-600",
        accentColor: "border-green-500",
        difficulty: "Expert",
        keyFeatures: ["Disease Mechanics", "Contagion Spread", "Plague Immunity"],
        enemies: ["Infected", "Carriers", "Diseased", "Plaguebearers", "Quarantine", "Epidemic", "Plague Doctor"]
    },
    {
        worldId: 24,
        title: "Lightning Realm",
        subtitle: "Electrified Domain",
        description: "A world of pure electrical energy where storms rage eternally. Master the power of lightning and become the storm.",
        icon: "⚡",
        gradient: "from-yellow-500 via-blue-600 to-purple-700",
        accentColor: "border-yellow-400",
        difficulty: "Expert",
        keyFeatures: ["Chain Lightning", "Static Charge", "Thunderstrike"],
        enemies: ["Sparks", "Charges", "Static", "Voltage", "Conductors", "Thunderbolts", "Lightning God"]
    },
    {
        worldId: 25,
        title: "Blood Moon",
        subtitle: "Gothic Horror",
        description: "Under the crimson moon, vampires, werewolves, and undead horrors reign. Face the Blood Lord in his dark domain.",
        icon: "🩸",
        gradient: "from-red-950 via-rose-800 to-red-700",
        accentColor: "border-red-500",
        difficulty: "Expert",
        keyFeatures: ["Blood Magic", "Lycanthropy", "Soul Reaping"],
        enemies: ["Vampires", "Werewolves", "Ghouls", "Banshees", "Reapers", "Liches", "Blood Lord"]
    },
    {
        worldId: 26,
        title: "Machine Core",
        subtitle: "Digital Consciousness",
        description: "Deep within the AI's central processor. Hack through firewalls and protocols to reach the Core AI itself.",
        icon: "💾",
        gradient: "from-gray-700 via-slate-600 to-zinc-800",
        accentColor: "border-slate-400",
        difficulty: "Expert",
        keyFeatures: ["System Hacking", "Firewall Bypass", "Protocol Override"],
        enemies: ["Nanobots", "Automatons", "Mainframes", "Protocols", "Firewalls", "Encryption", "Core AI"]
    },
    {
        worldId: 27,
        title: "Spirit Realm",
        subtitle: "Ethereal Plane",
        description: "Walk among spirits and ghosts in this otherworldly dimension. Face the Spirit King who rules the afterlife.",
        icon: "👻",
        gradient: "from-slate-400 via-indigo-300 to-purple-400",
        accentColor: "border-indigo-300",
        difficulty: "Expert",
        keyFeatures: ["Ethereal Form", "Spirit Channeling", "Possession Resistance"],
        enemies: ["Ghosts", "Poltergeists", "Spirits", "Haunts", "Ectoplasm", "Possession", "Spirit King"]
    },
    {
        worldId: 28,
        title: "Dragon's Domain",
        subtitle: "Draconic Empire",
        description: "Enter the realm of ancient dragons where fire and fury reign. Challenge the Dragon Emperor for ultimate glory.",
        icon: "🐉",
        gradient: "from-red-800 via-orange-600 to-yellow-500",
        accentColor: "border-orange-500",
        difficulty: "Expert",
        keyFeatures: ["Dragonfire", "Draconic Resilience", "Ancient Wisdom"],
        enemies: ["Wyverns", "Drakes", "Wyrms", "Serpents", "Dragons", "Elder Dragons", "Dragon Emperor"]
    },
    {
        worldId: 29,
        title: "Multiverse Nexus",
        subtitle: "Infinite Realities",
        description: "Where all dimensions converge. Face alternate versions of reality and challenge the Nexus Entity that binds them all.",
        icon: "🌈",
        gradient: "from-pink-500 via-purple-500 to-cyan-500",
        accentColor: "border-fuchsia-400",
        difficulty: "Expert",
        keyFeatures: ["Reality Shift", "Parallel Existence", "Dimensional Breach"],
        enemies: ["Alternates", "Parallels", "Divergents", "Convergence", "Dimensional", "Multiverse", "Nexus Entity"]
    },
    {
        worldId: 30,
        title: "The Absolute End",
        subtitle: "Ultimate Transcendence",
        description: "The final realm beyond existence. Face perfection itself and witness the absolute end of all things.",
        icon: "♾️",
        gradient: "from-black via-white to-black",
        accentColor: "border-gray-100",
        difficulty: "Expert",
        keyFeatures: ["Omega Strike", "Infinite Power", "Perfect Transcendence"],
        enemies: ["Omega", "Alpha", "End Eternal", "Infinite", "End Absolute", "Perfection", "The End"]
    }
];

export const getWorldTheme = (worldId: number): WorldTheme | undefined => {
    return WORLD_THEMES.find(theme => theme.worldId === worldId);
};
