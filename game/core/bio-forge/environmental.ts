/**
 * Bio-Forge Environmental Hazards
 * 
 * Manages overgrowth zones, energy surges, and replication fields
 */

import { Brick, Ball, OvergrowthZone, EnergySurge, ReplicationField } from '../../../types';
import { 
    OVERGROWTH_BALL_SPEED_REDUCTION,
    OVERGROWTH_PADDLE_SPEED_REDUCTION,
    ENERGY_SURGE_DURATION,
    ENERGY_SURGE_DAMAGE,
    REPLICATION_FIELD_TIMER,
    GAME_WIDTH,
    GAME_HEIGHT
} from '../../../constants';

export interface EnvironmentalHazardsArgs {
    overgrowthZones: OvergrowthZone[];
    energySurges: EnergySurge[];
    replicationFields: ReplicationField[];
    balls: Ball[];
    bricks: Brick[];
    paddleX: number;
    paddleWidth: number;
    now: number;
}

export interface EnvironmentalHazardsResult {
    overgrowthZones: OvergrowthZone[];
    energySurges: EnergySurge[];
    replicationFields: ReplicationField[];
    ballSpeedModifiers: Record<number, number>;
    paddleSpeedModifier: number;
    newBricks?: Brick[];
    paddleDamage?: number;
}

export function stepEnvironmentalHazards(args: EnvironmentalHazardsArgs): EnvironmentalHazardsResult {
    const { overgrowthZones, energySurges, replicationFields, balls, bricks, paddleX, paddleWidth, now } = args;
    
    // Filter out expired energy surges
    const activeEnergySurges = energySurges.filter(surge => 
        now - surge.createdAt < surge.duration
    );
    
    // Process ball interactions with overgrowth zones
    const ballSpeedModifiers: Record<number, number> = {};
    let paddleSpeedModifier = 1.0;
    
    balls.forEach(ball => {
        overgrowthZones.forEach(zone => {
            if (isPointInZone(ball.x, ball.y, zone)) {
                ballSpeedModifiers[ball.id] = zone.ballSpeedReduction;
            }
        });
    });
    
    // Check paddle interaction with overgrowth zones
    overgrowthZones.forEach(zone => {
        if (isPaddleInZone(paddleX, paddleWidth, zone)) {
            paddleSpeedModifier = Math.min(paddleSpeedModifier, zone.paddleSpeedReduction);
        }
    });
    
    // Check for paddle damage from energy surges
    let paddleDamage = 0;
    activeEnergySurges.forEach(surge => {
        if (isPaddleInEnergySurge(paddleX, paddleWidth, surge)) {
            paddleDamage += surge.damage;
        }
    });
    
    // Process replication fields
    const newBricks: Brick[] = [];
    let nextBrickId = Math.max(...bricks.map(b => b.id), 0) + 1;
    
    replicationFields.forEach(field => {
        const bricksInField = bricks.filter(brick => 
            isBrickInField(brick, field) && !brick.isSpawned
        );
        
        // Update field timer and check for replication
        field.bricksInField = bricksInField.map(b => b.id);
        
        if (bricksInField.length > 0 && now >= field.replicationTimer) {
            // Replicate a random brick in the field
            const randomBrick = bricksInField[Math.floor(Math.random() * bricksInField.length)];
            const replica = createFieldReplica(nextBrickId++, randomBrick, field, bricks);
            
            if (replica) {
                newBricks.push(replica);
                // Reset field timer
                field.replicationTimer = now + REPLICATION_FIELD_TIMER;
            }
        }
    });
    
    return {
        overgrowthZones,
        energySurges: activeEnergySurges,
        replicationFields,
        ballSpeedModifiers: Object.keys(ballSpeedModifiers).length > 0 ? ballSpeedModifiers : {},
        paddleSpeedModifier: paddleSpeedModifier !== 1.0 ? paddleSpeedModifier : 1.0,
        newBricks: newBricks.length > 0 ? newBricks : undefined,
        paddleDamage: paddleDamage > 0 ? paddleDamage : undefined
    };
}

export function createOvergrowthZone(
    id: number, 
    x: number, 
    y: number, 
    width: number, 
    height: number
): OvergrowthZone {
    return {
        id,
        x,
        y,
        width,
        height,
        ballSpeedReduction: OVERGROWTH_BALL_SPEED_REDUCTION,
        paddleSpeedReduction: OVERGROWTH_PADDLE_SPEED_REDUCTION
    };
}

export function createEnergySurge(
    id: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    now: number
): EnergySurge {
    return {
        id,
        x1,
        y1,
        x2,
        y2,
        createdAt: now,
        duration: ENERGY_SURGE_DURATION,
        damage: ENERGY_SURGE_DAMAGE
    };
}

export function createReplicationField(
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
    now: number
): ReplicationField {
    return {
        id,
        x,
        y,
        width,
        height,
        replicationTimer: now + REPLICATION_FIELD_TIMER,
        bricksInField: []
    };
}

// Spawn environmental hazards based on stage progression
export function spawnEnvironmentalHazards(stageId: number, now: number): {
    overgrowthZones: OvergrowthZone[];
    energySurges: EnergySurge[];
    replicationFields: ReplicationField[];
} {
    const overgrowthZones: OvergrowthZone[] = [];
    const energySurges: EnergySurge[] = [];
    const replicationFields: ReplicationField[] = [];
    
    let hazardId = 1;
    
    // Stage-specific hazard spawning
    switch (stageId) {
        case 11: // Stage 1: Simple overgrowth zones
            overgrowthZones.push(
                createOvergrowthZone(hazardId++, 100, 200, 150, 100),
                createOvergrowthZone(hazardId++, 450, 150, 120, 120)
            );
            break;
            
        case 12: // Stage 2: Add energy surges
            overgrowthZones.push(createOvergrowthZone(hazardId++, 200, 180, 180, 90));
            energySurges.push(
                createEnergySurge(hazardId++, 0, 250, GAME_WIDTH, 250, now),
                createEnergySurge(hazardId++, 300, 0, 300, GAME_HEIGHT, now + 2000)
            );
            break;
            
        case 13: // Stage 3: Add replication fields
            overgrowthZones.push(createOvergrowthZone(hazardId++, 150, 160, 200, 80));
            replicationFields.push(
                createReplicationField(hazardId++, 80, 120, 160, 140, now),
                createReplicationField(hazardId++, 480, 140, 140, 120, now)
            );
            break;
            
        case 14: // Stage 4: All hazards combined
            overgrowthZones.push(
                createOvergrowthZone(hazardId++, 120, 180, 160, 100),
                createOvergrowthZone(hazardId++, 420, 160, 140, 120)
            );
            energySurges.push(
                createEnergySurge(hazardId++, 0, 200, GAME_WIDTH, 200, now),
                createEnergySurge(hazardId++, 250, 0, 250, GAME_HEIGHT, now + 1500)
            );
            replicationFields.push(
                createReplicationField(hazardId++, 200, 140, 200, 100, now)
            );
            break;
            
        case 15: // Stage 5: Boss fight minimal hazards
            overgrowthZones.push(
                createOvergrowthZone(hazardId++, 100, 300, 500, 80)
            );
            break;
    }
    
    return { overgrowthZones, energySurges, replicationFields };
}

function isPointInZone(x: number, y: number, zone: OvergrowthZone): boolean {
    return x >= zone.x && x <= zone.x + zone.width && 
           y >= zone.y && y <= zone.y + zone.height;
}

function isPaddleInZone(paddleX: number, paddleWidth: number, zone: OvergrowthZone): boolean {
    const paddleY = 520; // Approximate paddle Y position
    return paddleX < zone.x + zone.width && 
           paddleX + paddleWidth > zone.x && 
           paddleY < zone.y + zone.height && 
           paddleY + 20 > zone.y; // Paddle height ~ 20
}

function isPaddleInEnergySurge(paddleX: number, paddleWidth: number, surge: EnergySurge): boolean {
    const paddleY = 520;
    const paddleHeight = 20;
    
    // Simple line-rectangle intersection
    // For simplicity, check if surge passes through paddle area
    if (surge.x1 === surge.x2) { // Vertical line
        const lineX = surge.x1;
        return lineX >= paddleX && lineX <= paddleX + paddleWidth &&
               Math.min(surge.y1, surge.y2) <= paddleY + paddleHeight &&
               Math.max(surge.y1, surge.y2) >= paddleY;
    } else { // Horizontal line
        const lineY = surge.y1;
        return lineY >= paddleY && lineY <= paddleY + paddleHeight &&
               Math.min(surge.x1, surge.x2) <= paddleX + paddleWidth &&
               Math.max(surge.x1, surge.x2) >= paddleX;
    }
}

function isBrickInField(brick: Brick, field: ReplicationField): boolean {
    return brick.x < field.x + field.width &&
           brick.x + brick.width > field.x &&
           brick.y < field.y + field.height &&
           brick.y + brick.height > field.y;
}

function createFieldReplica(
    id: number, 
    original: Brick, 
    field: ReplicationField, 
    existingBricks: Brick[]
): Brick | null {
    // Try to find empty space within the field
    for (let attempt = 0; attempt < 10; attempt++) {
        const newX = field.x + Math.random() * (field.width - original.width);
        const newY = field.y + Math.random() * (field.height - original.height);
        
        // Check for collisions with existing bricks
        const collision = existingBricks.some(brick =>
            Math.abs(brick.x - newX) < original.width &&
            Math.abs(brick.y - newY) < original.height
        );
        
        if (!collision) {
            return {
                ...original,
                id,
                x: newX,
                y: newY,
                isSpawned: true,
                parentId: original.id
            };
        }
    }
    
    return null; // No space found
}