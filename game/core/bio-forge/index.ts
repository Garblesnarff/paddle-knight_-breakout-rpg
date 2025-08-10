/**
 * Bio-Forge Nexus Core Mechanics
 * 
 * Implements techno-organic enemy behaviors including:
 * - Gearsprite dodging mechanics
 * - VineBot tentacle trapping
 * - ScrapGolem explosion spawning  
 * - Corruptor skill disabling
 * - HiveMind drone spawning
 * - Replicator brick cloning
 * - Self-repair systems
 */

import { Brick, Ball, BrickType, PlayerDebuff } from '../../../types';
import { 
    GEARSPRITE_DODGE_CHANCE,
    VINEBOT_TENTACLE_COOLDOWN,
    VINEBOT_TRAP_DURATION,
    SCRAPGOLEM_EXPLOSION_COUNT,
    CORRUPTOR_PULSE_COOLDOWN,
    CORRUPTOR_DISABLE_DURATION,
    HIVEMIND_SPAWN_COOLDOWN,
    REPLICATOR_REPLICATION_COOLDOWN,
    SELF_REPAIR_COOLDOWN,
    SELF_REPAIR_AMOUNT,
    BRICK_WIDTH,
    BRICK_HEIGHT,
    BRICK_GAP
} from '../../../constants';
import { BRICK_PROPERTIES } from '../../../constants';

export interface BioForgeStepArgs {
    bricks: Brick[];
    balls: Ball[];
    now: number;
    playerDebuffs: PlayerDebuff[];
    paddleX: number;
    paddleWidth: number;
}

export interface BioForgeStepResult {
    bricks: Brick[];
    newBricks?: Brick[];
    playerDebuffs: PlayerDebuff[];
    ballsTrapped?: number[];
    paddleSlowMultiplier?: number;
}

export function stepBioForgeMechanics(args: BioForgeStepArgs): BioForgeStepResult {
    const { bricks, balls, now, playerDebuffs, paddleX, paddleWidth } = args;
    const updatedBricks = [...bricks];
    const newBricks: Brick[] = [];
    let updatedPlayerDebuffs = [...playerDebuffs];
    const ballsTrapped: number[] = [];
    let paddleSlowMultiplier = 1.0;

    let nextBrickId = Math.max(...bricks.map(b => b.id), 0) + 1;

    for (let i = 0; i < updatedBricks.length; i++) {
        const brick = updatedBricks[i];

        // Self-repair system for applicable brick types
        if (canSelfRepair(brick.type) && brick.hp < brick.maxHp) {
            if (!brick.lastSelfRepairTime || (now - brick.lastSelfRepairTime >= SELF_REPAIR_COOLDOWN)) {
                brick.hp = Math.min(brick.hp + SELF_REPAIR_AMOUNT, brick.maxHp);
                brick.lastSelfRepairTime = now;
            }
        }

        switch (brick.type) {
            case BrickType.VineBot:
                // Handle tentacle attacks that can trap balls and slow paddle
                if (!brick.lastTentacleTime || (now - brick.lastTentacleTime >= VINEBOT_TENTACLE_COOLDOWN)) {
                    // Check if paddle is in range for slowing
                    const paddleCenter = paddleX + paddleWidth / 2;
                    const distanceToPaddle = Math.abs(paddleCenter - (brick.x + brick.width / 2));
                    
                    if (distanceToPaddle <= 150) { // Tentacle range
                        paddleSlowMultiplier = 0.5; // 50% paddle speed reduction
                        
                        // Check for ball trapping
                        balls.forEach(ball => {
                            const distanceToBall = Math.hypot(
                                ball.x - (brick.x + brick.width / 2),
                                ball.y - (brick.y + brick.height / 2)
                            );
                            
                            if (distanceToBall <= 120) { // Tentacle reach
                                ballsTrapped.push(ball.id);
                            }
                        });
                        
                        brick.lastTentacleTime = now;
                    }
                }
                break;

            case BrickType.Corruptor:
                // Handle skill-disabling pulse
                if (!brick.lastSkillDisableTime || (now - brick.lastSkillDisableTime >= CORRUPTOR_PULSE_COOLDOWN)) {
                    // Add skill disable debuff
                    const debuff: PlayerDebuff = {
                        id: `corruptor_${brick.id}_${now}`,
                        type: 'skillDisable',
                        appliedAt: now,
                        duration: CORRUPTOR_DISABLE_DURATION
                    };
                    updatedPlayerDebuffs.push(debuff);
                    brick.lastSkillDisableTime = now;
                }
                break;

            case BrickType.HiveMind:
                // Handle drone spawning
                if (!brick.lastSpawnTime || (now - brick.lastSpawnTime >= HIVEMIND_SPAWN_COOLDOWN)) {
                    // Spawn a drone brick nearby
                    const drone = createDroneBrick(nextBrickId++, brick.x, brick.y - BRICK_HEIGHT - BRICK_GAP);
                    if (drone) {
                        newBricks.push(drone);
                        brick.lastSpawnTime = now;
                    }
                }
                break;

            case BrickType.Replicator:
                // Handle replication when not recently hit
                if (!brick.lastReplicationTime || (now - brick.lastReplicationTime >= REPLICATOR_REPLICATION_COOLDOWN)) {
                    // Find adjacent space to replicate
                    const replica = createReplicaBrick(nextBrickId++, brick, updatedBricks);
                    if (replica) {
                        newBricks.push(replica);
                        brick.lastReplicationTime = now;
                    }
                }
                break;
        }
    }

    return {
        bricks: updatedBricks,
        newBricks: newBricks.length > 0 ? newBricks : undefined,
        playerDebuffs: updatedPlayerDebuffs,
        ballsTrapped: ballsTrapped.length > 0 ? ballsTrapped : undefined,
        paddleSlowMultiplier: paddleSlowMultiplier !== 1.0 ? paddleSlowMultiplier : undefined
    };
}

export function handleGearspriteDodge(brick: Brick, now: number): boolean {
    if (brick.type !== BrickType.Gearsprite) return false;
    
    // Prevent dodge spam
    if (brick.lastDodgeTime && (now - brick.lastDodgeTime < 500)) return false;
    
    const dodgeChance = brick.dodgeChance || GEARSPRITE_DODGE_CHANCE;
    const dodged = Math.random() < dodgeChance;
    
    if (dodged) {
        brick.lastDodgeTime = now;
    }
    
    return dodged;
}

export function handleScrapGolemExplosion(brick: Brick, bricks: Brick[]): Brick[] {
    if (brick.type !== BrickType.ScrapGolem || brick.hp > 0) return [];
    
    const explosionBricks: Brick[] = [];
    let nextId = Math.max(...bricks.map(b => b.id), 0) + 1;
    
    // Create Gearsprite spawns in a spread pattern
    const angles = [0, 120, 240]; // 3 directions, 120 degrees apart
    
    for (let i = 0; i < SCRAPGOLEM_EXPLOSION_COUNT; i++) {
        const angle = (angles[i] * Math.PI) / 180;
        const spawnX = brick.x + Math.cos(angle) * (BRICK_WIDTH + BRICK_GAP);
        const spawnY = brick.y + Math.sin(angle) * (BRICK_HEIGHT + BRICK_GAP);
        
        const gearsprite = createGearsprite(nextId++, spawnX, spawnY, brick.id);
        explosionBricks.push(gearsprite);
    }
    
    return explosionBricks;
}

function canSelfRepair(brickType: BrickType): boolean {
    return [
        BrickType.ScrapGolem,
        BrickType.HiveMind,
        BrickType.PrimeSynthesizer
    ].includes(brickType);
}

function createDroneBrick(id: number, x: number, y: number): Brick | null {
    // Simple drone with minimal HP
    return {
        id,
        x: x + Math.random() * 60 - 30, // Slight random offset
        y: Math.max(0, y),
        width: BRICK_WIDTH * 0.7, // Smaller than normal bricks
        height: BRICK_HEIGHT * 0.7,
        type: BrickType.Grunt, // Use existing type for simplicity
        hp: 1,
        maxHp: 1,
        isSpawned: true
    };
}

function createReplicaBrick(id: number, originalBrick: Brick, existingBricks: Brick[]): Brick | null {
    // Try to find empty adjacent space
    const adjacentOffsets = [
        { x: BRICK_WIDTH + BRICK_GAP, y: 0 },
        { x: -(BRICK_WIDTH + BRICK_GAP), y: 0 },
        { x: 0, y: BRICK_HEIGHT + BRICK_GAP },
        { x: 0, y: -(BRICK_HEIGHT + BRICK_GAP) }
    ];
    
    for (const offset of adjacentOffsets) {
        const newX = originalBrick.x + offset.x;
        const newY = originalBrick.y + offset.y;
        
        // Check if space is occupied
        const occupied = existingBricks.some(brick => 
            Math.abs(brick.x - newX) < BRICK_WIDTH && 
            Math.abs(brick.y - newY) < BRICK_HEIGHT
        );
        
        if (!occupied && newX >= 0 && newY >= 0) {
            return {
                ...originalBrick,
                id,
                x: newX,
                y: newY,
                isSpawned: true,
                parentId: originalBrick.id
            };
        }
    }
    
    return null; // No space available
}

function createGearsprite(id: number, x: number, y: number, parentId: number): Brick {
    const gearspriteProps = BRICK_PROPERTIES[BrickType.Gearsprite];
    
    return {
        id,
        x: Math.max(0, x),
        y: Math.max(0, y),
        width: BRICK_WIDTH,
        height: BRICK_HEIGHT,
        type: BrickType.Gearsprite,
        hp: gearspriteProps.maxHp,
        maxHp: gearspriteProps.maxHp,
        dodgeChance: GEARSPRITE_DODGE_CHANCE,
        isSpawned: true,
        parentId
    };
}