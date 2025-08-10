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
    ]
];


