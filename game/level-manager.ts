/**
 * Purpose: Create initial bricks for a given world based on declarative layouts.
 * Inputs:
 *   - world: number (1-based index) selecting from ALL_LEVEL_LAYOUTS.
 * Outputs:
 *   - Brick[]: array of fully-initialized bricks with positions and hp set from BRICK_PROPERTIES.
 * Invariants:
 *   - Behavior parity with previous implementation.
 *   - Does not mutate layout data; constructs new Brick objects.
 * Side-effects:
 *   - Reads current wall-clock time via Date.now() for boss timers (kept for parity).
 * Notes:
 *   - Layouts are treated as data; validation can be performed externally using game/schemas.ts.
 */
import { Brick, BrickType } from '../types';
import { GAME_WIDTH, BRICK_WIDTH, BRICK_HEIGHT, BRICK_GAP, BRICK_PROPERTIES, BOSS_MOVE_SPEED, GEARSPRITE_DODGE_CHANCE } from '../constants';
import { LEVEL_LAYOUTS as WORLD1_LAYOUTS } from './worlds/world-1/layouts';
import { LEVEL_LAYOUTS as WORLD2_LAYOUTS } from './worlds/world-2/layouts';
import { LEVEL_LAYOUTS as WORLD3_LAYOUTS } from './worlds/world-3/layouts';

export const ALL_LEVEL_LAYOUTS = [
    ...WORLD1_LAYOUTS,
    ...WORLD2_LAYOUTS,
    ...WORLD3_LAYOUTS,
];

export const MAX_LEVELS = ALL_LEVEL_LAYOUTS.length;

// Map stage ID to layout index
export const getLayoutIndexForStage = (stageId: number): number => {
    // Stage IDs are 1-15, layout indices are 0-14
    // Stages 1-5: World 1 (layouts 0-4)
    // Stages 6-10: World 2 (layouts 5-9)  
    // Stages 11-15: World 3 (layouts 10-14)
    return stageId - 1;
};

export const createBricksForWorld = (world: number): Brick[] => {
    const bricks: Brick[] = [];
    const layout = ALL_LEVEL_LAYOUTS[world - 1];
    if (!layout) return [];

    return createBricksFromLayout(layout);
};

export const createBricksForStage = (stageId: number): Brick[] => {
    const bricks: Brick[] = [];
    const layoutIndex = getLayoutIndexForStage(stageId);
    const layout = ALL_LEVEL_LAYOUTS[layoutIndex];
    if (!layout) return [];

    return createBricksFromLayout(layout);
};

function createBricksFromLayout(layout: (BrickType | null)[][]): Brick[] {
    const bricks: Brick[] = [];
    let currentId = 0;
    
    layout.forEach((row, r) => {
        const cols = row.length;
        const totalBrickWidth = cols * (BRICK_WIDTH + BRICK_GAP) - BRICK_GAP;
        const startX = (GAME_WIDTH - totalBrickWidth) / 2;

        row.forEach((brickTypeValue, c) => {
            if (brickTypeValue === undefined || brickTypeValue === null) return;
            
            const brickType = brickTypeValue as BrickType;
            const brickProps = BRICK_PROPERTIES[brickType];
            
            if (brickType === BrickType.Boss) {
                bricks.push({
                    id: currentId++,
                    x: GAME_WIDTH / 2 - 90,
                    y: 20,
                    width: 180,
                    height: 50,
                    type: BrickType.Boss,
                    hp: brickProps.maxHp,
                    maxHp: brickProps.maxHp,
                    vx: BOSS_MOVE_SPEED,
                    lastAttackTime: Date.now()
                });
            } else if (brickType === BrickType.ArchmageBoss) {
                 bricks.push({
                    id: currentId++,
                    x: GAME_WIDTH / 2 - 90,
                    y: 20,
                    width: 180,
                    height: 50,
                    type: BrickType.ArchmageBoss,
                    hp: brickProps.maxHp,
                    maxHp: brickProps.maxHp,
                    lastAttackTime: Date.now(),
                    phase: 1,
                    currentElementalAttack: 'fire'
                });
            } else if (brickType === BrickType.PrimeSynthesizer) {
                bricks.push({
                    id: currentId++,
                    x: GAME_WIDTH / 2 - 90,
                    y: 20,
                    width: 180,
                    height: 50,
                    type: BrickType.PrimeSynthesizer,
                    hp: brickProps.maxHp,
                    maxHp: brickProps.maxHp,
                    lastAttackTime: Date.now(),
                    phase: 1
                });
            } else {
                const brick: Brick = {
                    id: currentId++,
                    x: startX + c * (BRICK_WIDTH + BRICK_GAP),
                    y: r * (BRICK_HEIGHT + BRICK_GAP) + 80,
                    width: BRICK_WIDTH,
                    height: BRICK_HEIGHT,
                    type: brickType,
                    hp: brickProps.maxHp,
                    maxHp: brickProps.maxHp,
                    vx: brickType === BrickType.Soldier ? 1 : 0,
                };
                
                // Add Bio-Forge specific properties
                if (brickType === BrickType.Gearsprite) {
                    brick.dodgeChance = GEARSPRITE_DODGE_CHANCE;
                }
                
                bricks.push(brick);
            }
        });
    });

    // Apply Rune brick shields
    const runeBricks = bricks.filter(b => b.type === BrickType.Rune);
    if (runeBricks.length > 0) {
        const SHIELD_HP = 1;
        const shieldedBrickIds = new Set<number>();

        for (const runeBrick of runeBricks) {
            for (const targetBrick of bricks) {
                if (targetBrick.id === runeBrick.id) continue;
                if (targetBrick.type === BrickType.Rune || targetBrick.type === BrickType.Boss || targetBrick.type === BrickType.ArchmageBoss) continue;

                // Check for horizontal adjacency
                const isAdjacentHorizontally = Math.abs(runeBrick.y - targetBrick.y) < 5 && Math.abs(runeBrick.x - targetBrick.x) < (BRICK_WIDTH + BRICK_GAP + 5);
                // Check for vertical adjacency
                const isAdjacentVertically = Math.abs(runeBrick.x - targetBrick.x) < 5 && Math.abs(runeBrick.y - targetBrick.y) < (BRICK_HEIGHT + BRICK_GAP + 5);

                if (isAdjacentHorizontally || isAdjacentVertically) {
                    shieldedBrickIds.add(targetBrick.id);
                }
            }
        }
        
        bricks.forEach(brick => {
            if (shieldedBrickIds.has(brick.id)) {
                brick.shieldHp = SHIELD_HP;
            }
        });
    }

    return bricks;
}