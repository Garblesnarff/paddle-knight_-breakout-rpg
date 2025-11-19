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
    ]
];


