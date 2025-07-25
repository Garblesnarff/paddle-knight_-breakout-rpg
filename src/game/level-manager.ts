import { Brick, BrickType } from '../types';
import { GAME_WIDTH, BRICK_WIDTH, BRICK_HEIGHT, BRICK_GAP, BRICK_PROPERTIES, BOSS_MOVE_SPEED } from '../constants';
import { LEVEL_LAYOUTS as STAGE1_LAYOUTS } from './stages/stage-1/layouts';
import { LEVEL_LAYOUTS as STAGE2_LAYOUTS } from './stages/stage-2/layouts';

export const ALL_LEVEL_LAYOUTS = [
    ...STAGE1_LAYOUTS,
    ...STAGE2_LAYOUTS,
];

export const MAX_LEVELS = ALL_LEVEL_LAYOUTS.length;

export const createBricksForStage = (stage: number): Brick[] => {
    const bricks: Brick[] = [];
    const layout = ALL_LEVEL_LAYOUTS[stage - 1];
    if (!layout) return [];

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
            } else {
                 bricks.push({
                    id: currentId++,
                    x: startX + c * (BRICK_WIDTH + BRICK_GAP),
                    y: r * (BRICK_HEIGHT + BRICK_GAP) + 80,
                    width: BRICK_WIDTH,
                    height: BRICK_HEIGHT,
                    type: brickType,
                    hp: brickProps.maxHp,
                    maxHp: brickProps.maxHp,
                    vx: brickType === BrickType.Soldier ? 1 : 0,
                });
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
};