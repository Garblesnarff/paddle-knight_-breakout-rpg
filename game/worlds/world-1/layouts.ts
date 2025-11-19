import { BrickType } from '../../../types';

const { Grunt, Soldier, Archer, Mage, Tank, Chaos, Boss } = BrickType;

export const LEVEL_LAYOUTS = [
    // Level 1: Grunts and Soldiers
    [
        [Grunt,Grunt,Grunt,Grunt,Grunt,Grunt,Grunt,Grunt,Grunt,Grunt],
        [null,Soldier,null,Soldier,null,Soldier,null,Soldier,null,Soldier],
        [Grunt,Grunt,Grunt,Grunt,Grunt,Grunt,Grunt,Grunt,Grunt,Grunt],
        [Soldier,null,Soldier,null,Soldier,null,Soldier,null,Soldier,null],
    ],
    // Level 2: Archers and Mages
    [
        [Archer,Archer,Archer,Archer,Archer,Archer,Archer,Archer,Archer,Archer],
        [Mage,Mage,Mage,Mage,Mage,Mage,Mage,Mage,Mage,Mage],
        [null,Soldier,null,Soldier,null,Soldier,null,Soldier,null,Soldier],
        [Soldier,null,Soldier,null,Soldier,null,Soldier,null,Soldier,null],
    ],
    // Level 3: The Fortress (Tanks)
    [
        [Tank,Tank,Tank,Tank,Tank,Tank,Tank,Tank,Tank,Tank],
        [Mage,Grunt,Mage,Grunt,Mage,Grunt,Mage,Grunt,Mage,Grunt],
        [Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier],
        [Grunt,Archer,Grunt,Archer,Grunt,Archer,Grunt,Archer,Grunt,Archer],
    ],
    // Level 4: Chaos Garden
    [
        [Archer,Chaos,Archer,Chaos,Archer,Chaos,Archer,Chaos,Archer,Chaos],
        [Chaos,Mage,Chaos,Mage,Chaos,Mage,Chaos,Mage,Chaos,Mage],
        [Mage,Chaos,Mage,Chaos,Mage,Chaos,Mage,Chaos,Mage,Chaos],
        [Soldier,Tank,Soldier,Tank,Soldier,Tank,Soldier,Tank,Soldier,Tank],
    ],
    // Level 5: The Brick Lord
    [
        [Boss],
        [Tank,Tank,Tank,Tank,Tank,Tank,Tank,Tank,Tank,Tank],
        [Archer,Archer,Mage,Mage,Mage,Mage,Mage,Mage,Archer,Archer],
        [Mage,Soldier,Soldier,Chaos,Chaos,Chaos,Chaos,Soldier,Soldier,Mage],
        [Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier],
    ],
    // Level 6: Royal Armory
    [
        [Tank,Chaos,Tank,Chaos,Tank,Chaos,Tank,Chaos,Tank,Chaos],
        [Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier,Soldier],
        [Archer,Mage,Archer,Mage,Archer,Mage,Archer,Mage,Archer,Mage],
        [Chaos,Tank,Chaos,Tank,Chaos,Tank,Chaos,Tank,Chaos,Tank],
        [Mage,Mage,Soldier,Soldier,Tank,Tank,Soldier,Soldier,Mage,Mage],
    ],
    // Level 7: Grand Ballroom
    [
        [Mage,Archer,Mage,Archer,Mage,Archer,Mage,Archer,Mage,Archer],
        [Archer,Chaos,Chaos,Chaos,Chaos,Chaos,Chaos,Chaos,Chaos,Archer],
        [Mage,Chaos,Tank,Tank,Tank,Tank,Tank,Tank,Chaos,Mage],
        [Archer,Chaos,Tank,Soldier,Soldier,Soldier,Soldier,Tank,Chaos,Archer],
        [Mage,Archer,Mage,Archer,Soldier,Soldier,Archer,Mage,Archer,Mage],
    ],
    // Level 8: King's Treasury
    [
        [Chaos,Chaos,Chaos,Chaos,Chaos,Chaos,Chaos,Chaos,Chaos,Chaos],
        [Tank,Mage,Tank,Mage,Tank,Mage,Tank,Mage,Tank,Mage],
        [Mage,Tank,Mage,Tank,Mage,Tank,Mage,Tank,Mage,Tank],
        [Archer,Soldier,Archer,Soldier,Chaos,Chaos,Soldier,Archer,Soldier,Archer],
        [Tank,Tank,Mage,Mage,Archer,Archer,Mage,Mage,Tank,Tank],
    ],
    // Level 9: Forbidden Vault
    [
        [Tank,Chaos,Chaos,Mage,Mage,Chaos,Chaos,Tank],
        [Chaos,Archer,Tank,Chaos,Chaos,Tank,Archer,Chaos],
        [Chaos,Tank,Soldier,Mage,Mage,Soldier,Tank,Chaos],
        [Mage,Chaos,Mage,Archer,Archer,Mage,Chaos,Mage],
        [Tank,Tank,Chaos,Chaos,Chaos,Chaos,Tank,Tank],
    ],
    // Level 10: Shadow Keep
    [
        [Chaos,Tank,Tank,Chaos,Chaos,Tank,Tank,Chaos],
        [Tank,Mage,Archer,Mage,Mage,Archer,Mage,Tank],
        [Mage,Archer,Chaos,Tank,Tank,Chaos,Archer,Mage],
        [Chaos,Mage,Tank,Soldier,Soldier,Tank,Mage,Chaos],
        [Tank,Chaos,Mage,Archer,Archer,Mage,Chaos,Tank],
    ],
    // Level 11: Elite Guard
    [
        [Chaos,Chaos,Tank,Tank,Tank,Tank,Chaos,Chaos],
        [Tank,Mage,Mage,Chaos,Chaos,Mage,Mage,Tank],
        [Chaos,Mage,Archer,Archer,Archer,Archer,Mage,Chaos],
        [Tank,Chaos,Archer,Soldier,Soldier,Archer,Chaos,Tank],
        [Chaos,Tank,Mage,Archer,Archer,Mage,Tank,Chaos],
    ],
    // Level 12: Final Defense
    [
        [Chaos,Tank,Chaos,Tank,Tank,Chaos,Tank,Chaos],
        [Tank,Chaos,Mage,Chaos,Chaos,Mage,Chaos,Tank],
        [Chaos,Mage,Tank,Mage,Mage,Tank,Mage,Chaos],
        [Mage,Chaos,Archer,Tank,Tank,Archer,Chaos,Mage],
        [Tank,Mage,Chaos,Archer,Archer,Chaos,Mage,Tank],
    ],
    // Level 13: Kingdom's End
    [
        [Chaos,Chaos,Chaos,Tank,Tank,Chaos,Chaos,Chaos],
        [Chaos,Tank,Mage,Chaos,Chaos,Mage,Tank,Chaos],
        [Tank,Mage,Chaos,Archer,Archer,Chaos,Mage,Tank],
        [Mage,Chaos,Archer,Tank,Tank,Archer,Chaos,Mage],
        [Chaos,Tank,Mage,Archer,Archer,Mage,Tank,Chaos],
    ],
    // Level 14: Chaos Ascendant
    [
        [Chaos,Tank,Tank,Chaos,Chaos,Tank,Tank,Chaos],
        [Tank,Chaos,Chaos,Tank,Tank,Chaos,Chaos,Tank],
        [Chaos,Chaos,Mage,Chaos,Chaos,Mage,Chaos,Chaos],
        [Tank,Tank,Chaos,Archer,Archer,Chaos,Tank,Tank],
        [Chaos,Chaos,Tank,Mage,Mage,Tank,Chaos,Chaos],
        [Tank,Chaos,Chaos,Tank,Tank,Chaos,Chaos,Tank],
    ],
    // Level 15: The Brick Lord Returns
    [
        [Chaos,Chaos,Boss,Boss,Boss,Chaos,Chaos],
        [Tank,Tank,Tank,Chaos,Tank,Tank,Tank],
        [Chaos,Mage,Chaos,Tank,Chaos,Mage,Chaos],
        [Tank,Chaos,Mage,Chaos,Mage,Chaos,Tank],
        [Chaos,Tank,Chaos,Mage,Chaos,Tank,Chaos],
        [Tank,Chaos,Tank,Chaos,Tank,Chaos,Tank],
        [Chaos,Chaos,Chaos,Tank,Chaos,Chaos,Chaos],
    ]
];


