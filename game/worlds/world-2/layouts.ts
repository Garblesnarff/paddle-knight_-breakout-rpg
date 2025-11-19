import { BrickType } from '../../../types';

const { Grunt, Soldier, Archer, Tank, Apprentice, Fire, Ice, Lightning, Mirror, Rune, ArchmageBoss } = BrickType;

export const LEVEL_LAYOUTS = [
    // Level 6: Introduction to Magic
    [
        [Apprentice, Apprentice, Apprentice, Apprentice, Apprentice, Apprentice, Apprentice, Apprentice, Apprentice, Apprentice],
        [Lightning, Fire, Lightning, Fire, Grunt, Fire, Lightning, Fire, Lightning, Fire],
        [Soldier, Grunt, Soldier, Grunt, Soldier, Grunt, Soldier, Grunt, Soldier, Grunt],
        [Ice, Ice, Ice, Ice, Ice, Ice, Ice, Ice, Ice, Ice],
    ],
    // Level 7: Tricky Halls
    [
        [Fire, Mirror, Fire, null, null, null, null, Fire, Mirror, Fire],
        [null, Apprentice, null, Mirror, null, null, Mirror, null, Apprentice, null],
        [Fire, null, Fire, null, null, null, null, Fire, null, Fire],
        [Ice, Soldier, Ice, Soldier, Mirror, Mirror, Soldier, Ice, Soldier, Ice],
    ],
    // Level 8: The Freezer
    [
        [Tank, Ice, Tank, Rune, Ice, Tank, Ice, Rune, Tank, Ice],
        [Ice, Tank, Ice, Tank, Ice, Tank, Ice, Tank, Ice, Tank],
        [Apprentice, null, Fire, Fire, Fire, Fire, Fire, null, Apprentice, null],
        [Apprentice, Apprentice, null, null, null, null, null, null, Apprentice, Apprentice],
    ],
    // Level 9: Explosive Study
    [
        [Fire, Apprentice, Fire, Apprentice, Fire, Apprentice, Fire, Apprentice, Fire, Apprentice],
        [Tank, Fire, Tank, Fire, Tank, Fire, Tank, Fire, Tank, Fire],
        [Apprentice, Fire, Apprentice, Fire, Apprentice, Fire, Apprentice, Fire, Apprentice, Fire],
        [Ice, Ice, Ice, Fire, Fire, Fire, Fire, Ice, Ice, Ice],
    ],
    // Level 10: The Archmage
    [
        [ArchmageBoss],
        [Apprentice, null, Ice, null, Fire, null, Ice, null, Apprentice, null],
        [Tank, Tank, Tank, Tank, Tank, Tank, Tank, Tank, Tank, Tank],
        [Archer, Archer, Archer, Archer, Archer, Archer, Archer, Archer, Archer, Archer],
    ],
    // Level 11: Crystal Nexus
    [
        [Fire, Lightning, Ice, Fire, Lightning, Ice, Fire, Lightning, Ice, Fire],
        [Rune, Mirror, Rune, Mirror, Rune, Mirror, Rune, Mirror, Rune, Mirror],
        [Lightning, Fire, Lightning, Ice, Lightning, Fire, Lightning, Ice, Lightning, Fire],
        [Mirror, Apprentice, Mirror, Apprentice, Mirror, Apprentice, Mirror, Apprentice, Mirror, Apprentice],
        [Ice, Lightning, Fire, Ice, Lightning, Fire, Ice, Lightning, Fire, Ice],
    ],
    // Level 12: Mirror Maze
    [
        [Mirror, Mirror, Mirror, Mirror, Mirror, Mirror, Mirror, Mirror, Mirror, Mirror],
        [Rune, null, null, Apprentice, null, null, Apprentice, null, null, Rune],
        [Mirror, null, Fire, Ice, Lightning, Lightning, Ice, Fire, null, Mirror],
        [Rune, null, null, Apprentice, null, null, Apprentice, null, null, Rune],
        [Mirror, Mirror, Mirror, Mirror, Mirror, Mirror, Mirror, Mirror, Mirror, Mirror],
    ],
    // Level 13: Astral Sanctum
    [
        [Rune, Fire, Lightning, Ice, Rune, Rune, Ice, Lightning, Fire, Rune],
        [Fire, Mirror, Mirror, Mirror, Apprentice, Apprentice, Mirror, Mirror, Mirror, Fire],
        [Lightning, Mirror, Tank, Tank, Tank, Tank, Tank, Tank, Mirror, Lightning],
        [Ice, Mirror, Tank, Apprentice, Apprentice, Apprentice, Apprentice, Tank, Mirror, Ice],
        [Rune, Fire, Lightning, Ice, Mirror, Mirror, Ice, Lightning, Fire, Rune],
    ],
    // Level 14: Elemental Chaos
    [
        [Lightning, Rune, Fire, Ice, Ice, Fire, Rune, Lightning],
        [Rune, Mirror, Apprentice, Lightning, Lightning, Apprentice, Mirror, Rune],
        [Fire, Apprentice, Rune, Mirror, Mirror, Rune, Apprentice, Fire],
        [Ice, Lightning, Mirror, Apprentice, Apprentice, Mirror, Lightning, Ice],
        [Lightning, Fire, Ice, Rune, Rune, Ice, Fire, Lightning],
    ],
    // Level 15: Runic Convergence
    [
        [Rune, Rune, Mirror, Fire, Fire, Mirror, Rune, Rune],
        [Mirror, Lightning, Ice, Rune, Rune, Ice, Lightning, Mirror],
        [Fire, Ice, Rune, Apprentice, Apprentice, Rune, Ice, Fire],
        [Ice, Rune, Apprentice, Mirror, Mirror, Apprentice, Rune, Ice],
        [Rune, Mirror, Fire, Lightning, Lightning, Fire, Mirror, Rune],
    ],
    // Level 16: Mirror Dimension
    [
        [Mirror, Mirror, Mirror, Rune, Rune, Mirror, Mirror, Mirror],
        [Mirror, Fire, Lightning, Mirror, Mirror, Lightning, Fire, Mirror],
        [Rune, Lightning, Ice, Apprentice, Apprentice, Ice, Lightning, Rune],
        [Mirror, Ice, Apprentice, Fire, Fire, Apprentice, Ice, Mirror],
        [Mirror, Rune, Fire, Lightning, Lightning, Fire, Rune, Mirror],
    ],
    // Level 17: Magical Apex
    [
        [Rune, Fire, Lightning, Ice, Ice, Lightning, Fire, Rune],
        [Fire, Mirror, Rune, Mirror, Mirror, Rune, Mirror, Fire],
        [Lightning, Rune, Mirror, Apprentice, Apprentice, Mirror, Rune, Lightning],
        [Ice, Mirror, Apprentice, Rune, Rune, Apprentice, Mirror, Ice],
        [Rune, Fire, Lightning, Ice, Ice, Lightning, Fire, Rune],
    ],
    // Level 18: Arcane Mastery
    [
        [Mirror, Rune, Rune, Fire, Fire, Rune, Rune, Mirror],
        [Rune, Lightning, Ice, Mirror, Mirror, Ice, Lightning, Rune],
        [Fire, Ice, Mirror, Rune, Rune, Mirror, Ice, Fire],
        [Lightning, Mirror, Rune, Apprentice, Apprentice, Rune, Mirror, Lightning],
        [Mirror, Fire, Lightning, Ice, Ice, Lightning, Fire, Mirror],
    ],
    // Level 14: Prismatic Onslaught
    [
        [Rune, Rune, Mirror, Mirror, Mirror, Mirror, Rune, Rune],
        [Mirror, Fire, Lightning, Rune, Rune, Lightning, Fire, Mirror],
        [Rune, Lightning, Ice, Mirror, Mirror, Ice, Lightning, Rune],
        [Mirror, Ice, Rune, Fire, Fire, Rune, Ice, Mirror],
        [Rune, Mirror, Fire, Lightning, Lightning, Fire, Mirror, Rune],
        [Mirror, Rune, Ice, Rune, Rune, Ice, Rune, Mirror],
    ],
    // Level 15: The Archmage Reborn
    [
        [Rune, Rune, ArchmageBoss, ArchmageBoss, Rune, Rune],
        [Mirror, Mirror, Rune, Rune, Mirror, Mirror],
        [Fire, Lightning, Ice, Ice, Lightning, Fire],
        [Rune, Mirror, Fire, Fire, Mirror, Rune],
        [Mirror, Apprentice, Lightning, Lightning, Apprentice, Mirror],
        [Rune, Mirror, Ice, Ice, Mirror, Rune],
        [Mirror, Fire, Rune, Rune, Fire, Mirror],
    ]
];


