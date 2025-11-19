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
    ]
];


