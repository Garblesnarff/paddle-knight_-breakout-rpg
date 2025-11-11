/**
 * Prime Synthesizer Boss - Bio-Forge Nexus Final Boss
 * 
 * A techno-organic fusion boss with three distinct phases:
 * Phase 1: Adaptive Growth - tendrils, drones, self-repair
 * Phase 2: Technological Overload - energy beams, corrupting pulse, replication
 * Phase 3: Symbiotic Collapse - decay zones, forced evolution, final gambit
 */

import { Brick, Ball, BrickType, PlayerDebuff } from '../../../types';
import { 
    PRIME_SYNTHESIZER_PHASE2_THRESHOLD,
    PRIME_SYNTHESIZER_PHASE3_THRESHOLD,
    PRIME_SYNTHESIZER_FINAL_GAMBIT_THRESHOLD,
    TENDRIL_STRIKE_COOLDOWN,
    DRONE_SWARM_COOLDOWN,
    ENERGY_BEAM_DURATION,
    CORRUPTING_PULSE_COOLDOWN,
    REPLICATION_CASCADE_CHANCE,
    SELF_REPAIR_COOLDOWN,
    SELF_REPAIR_AMOUNT,
    GAME_WIDTH,
    GAME_HEIGHT,
    BRICK_WIDTH,
    BRICK_HEIGHT
} from '../../../constants';
import { BRICK_PROPERTIES } from '../../../constants';
import { createSkillDisableDebuff } from '../debuffs';

export interface PrimeSynthesizerArgs {
    boss: Brick;
    bricks: Brick[];
    balls: Ball[];
    paddleX: number;
    paddleWidth: number;
    playerDebuffs: PlayerDebuff[];
    now: number;
}

export interface PrimeSynthesizerResult {
    boss: Brick;
    newBricks?: Brick[];
    newProjectiles?: any[]; // TendrilStrike projectiles
    newEnergyBeams?: any[]; // Energy beam attacks
    newDecayZones?: any[]; // Phase 3 decay zones  
    playerDebuffs: PlayerDebuff[];
    forcedEvolution?: boolean; // Transform all remaining bricks
    isFinalGambit?: boolean;
    cleanupSpawned?: boolean; // Remove all spawned entities when boss dies
}

export function stepPrimeSynthesizer(args: PrimeSynthesizerArgs): PrimeSynthesizerResult {
    const { boss, bricks, balls, paddleX, paddleWidth, playerDebuffs, now } = args;
    
    if (boss.type !== BrickType.PrimeSynthesizer || boss.hp <= 0) {
        // Boss is dead - stop all mechanics and clean up spawned entities
        return { boss, playerDebuffs, cleanupSpawned: true };
    }
    
    const hpPercentage = boss.hp / boss.maxHp;
    let currentPhase = 1;
    
    if (hpPercentage <= PRIME_SYNTHESIZER_PHASE3_THRESHOLD) {
        currentPhase = 3;
    } else if (hpPercentage <= PRIME_SYNTHESIZER_PHASE2_THRESHOLD) {
        currentPhase = 2;
    }
    
    boss.phase = currentPhase;
    
    // Final Gambit check - only trigger once
    if (hpPercentage <= PRIME_SYNTHESIZER_FINAL_GAMBIT_THRESHOLD && !boss.isFinalGambit) {
        boss.isFinalGambit = true;
        boss.finalGambitTriggeredAt = now;
        return handleFinalGambit(args);
    }
    
    // Continue Final Gambit if already triggered, but with limited spawning
    if (boss.isFinalGambit && boss.finalGambitTriggeredAt) {
        return handleFinalGambitContinuous(args);
    }
    
    // Self-repair for all phases
    if (!boss.lastSelfRepairTime || (now - boss.lastSelfRepairTime >= SELF_REPAIR_COOLDOWN)) {
        if (currentPhase === 1 && boss.hp < boss.maxHp) {
            boss.hp = Math.min(boss.hp + SELF_REPAIR_AMOUNT, boss.maxHp);
            boss.lastSelfRepairTime = now;
        }
    }
    
    // For testing: allow drone spawning in all phases, not just Phase 1
    let result;
    switch (currentPhase) {
        case 1:
            result = handlePhase1(args);
            break;
        case 2:
            result = handlePhase2(args);
            // Also try spawning drones in Phase 2 for testing
            const phase1Result = handlePhase1(args);
            if (phase1Result.newBricks) {
                result.newBricks = (result.newBricks || []).concat(phase1Result.newBricks);
            }
            break;
        case 3:
            result = handlePhase3(args);
            break;
        default:
            result = { boss, playerDebuffs };
    }
    
    return result;
}

function handlePhase1(args: PrimeSynthesizerArgs): PrimeSynthesizerResult {
    const { boss, bricks, paddleX, paddleWidth, now } = args;
    const newBricks: Brick[] = [];
    const newProjectiles: any[] = [];
    let nextBrickId = Math.max(...bricks.map(b => b.id), 0) + 1;
    
    // Tendril Strike
    if (!boss.lastAttackTime || (now - boss.lastAttackTime >= TENDRIL_STRIKE_COOLDOWN)) {
        const tendril = createTendrilStrike(boss, paddleX, paddleWidth, now);
        newProjectiles.push(tendril);
        boss.lastAttackTime = now;
    }
    
    // Drone Swarm - limit total drone count to prevent lag
    if (!boss.lastSpawnTime || (now - boss.lastSpawnTime >= DRONE_SWARM_COOLDOWN)) {
        const existingDrones = bricks.filter(b => b.isSpawned && b.parentId === boss.id).length;
        const totalSpawnedBricks = bricks.filter(b => b.isSpawned).length;
        const maxDrones = 8; // Limit total drones
        const maxGlobalSpawned = 50; // Global safety limit
        
        if (existingDrones < maxDrones && totalSpawnedBricks < maxGlobalSpawned) {
            const droneCount = Math.min(3, maxDrones - existingDrones); // Spawn up to 3, but not exceeding max
            
            for (let i = 0; i < droneCount; i++) {
                // Calculate safe spawn position within game bounds
                const spawnX = Math.max(BRICK_WIDTH, Math.min(
                    boss.x + Math.random() * Math.max(boss.width - BRICK_WIDTH, BRICK_WIDTH),
                    GAME_WIDTH - BRICK_WIDTH
                ));
                const spawnY = Math.max(0, Math.min(
                    boss.y + boss.height + 20 + (i * 30),
                    GAME_HEIGHT - BRICK_HEIGHT - 50 // Keep away from paddle area
                ));
                
                const drone = createDroneBrick(nextBrickId++, spawnX, spawnY);
                drone.parentId = boss.id; // Mark as spawned by this boss
                newBricks.push(drone);
            }
        }
        
        boss.lastSpawnTime = now;
    }
    
    return {
        boss,
        newBricks: newBricks.length > 0 ? newBricks : undefined,
        newProjectiles: newProjectiles.length > 0 ? newProjectiles : undefined,
        playerDebuffs: args.playerDebuffs
    };
}

function handlePhase2(args: PrimeSynthesizerArgs): PrimeSynthesizerResult {
    const { boss, bricks, paddleX, paddleWidth, playerDebuffs, now } = args;
    const newBricks: Brick[] = [];
    const newEnergyBeams: any[] = [];
    const updatedDebuffs = [...playerDebuffs];
    let nextBrickId = Math.max(...bricks.map(b => b.id), 0) + 1;
    
    // Energy Beam (tracking paddle)
    if (!boss.lastAttackTime || (now - boss.lastAttackTime >= 4000)) { // 4 second cooldown
        const energyBeam = createEnergyBeam(boss, paddleX, paddleWidth, now);
        newEnergyBeams.push(energyBeam);
        boss.lastAttackTime = now;
    }
    
    // Corrupting Pulse (skill disable)
    if (!boss.lastSkillDisableTime || (now - boss.lastSkillDisableTime >= CORRUPTING_PULSE_COOLDOWN)) {
        const debuff = createSkillDisableDebuff(`prime_synthesizer_${boss.id}`, undefined, 7000, now);
        updatedDebuffs.push(debuff);
        boss.lastSkillDisableTime = now;
    }
    
    // Replication Cascade
    if (!boss.lastReplicationTime || (now - boss.lastReplicationTime >= 5000)) {
        if (Math.random() < REPLICATION_CASCADE_CHANCE) {
            const adjacentBrick = findAdjacentBrick(boss, bricks);
            if (adjacentBrick) {
                const replica = createBossReplica(nextBrickId++, adjacentBrick, boss);
                if (replica) {
                    newBricks.push(replica);
                }
            }
        }
        boss.lastReplicationTime = now;
    }
    
    return {
        boss,
        newBricks: newBricks.length > 0 ? newBricks : undefined,
        newEnergyBeams: newEnergyBeams.length > 0 ? newEnergyBeams : undefined,
        playerDebuffs: updatedDebuffs
    };
}

function handlePhase3(args: PrimeSynthesizerArgs): PrimeSynthesizerResult {
    const { boss, bricks, now } = args;
    const newDecayZones: any[] = [];
    let forcedEvolution = false;
    
    // Systemic Decay (spawn decay zones)
    if (!boss.lastChaosMagicTime || (now - boss.lastChaosMagicTime >= 8000)) {
        const decayZone = createDecayZone(now);
        newDecayZones.push(decayZone);
        boss.lastChaosMagicTime = now;
    }
    
    // Forced Evolution (transform remaining bricks)
    if (!boss.lastElementalStormTime || (now - boss.lastElementalStormTime >= 15000)) {
        forcedEvolution = true;
        boss.lastElementalStormTime = now;
    }
    
    return {
        boss,
        newDecayZones: newDecayZones.length > 0 ? newDecayZones : undefined,
        playerDebuffs: args.playerDebuffs,
        forcedEvolution
    };
}

function handleFinalGambit(args: PrimeSynthesizerArgs): PrimeSynthesizerResult {
    const { boss, bricks, now } = args;
    const newBricks: Brick[] = [];
    const newProjectiles: any[] = [];
    let nextBrickId = Math.max(...bricks.map(b => b.id), 0) + 1;
    
    // Boss becomes stationary
    boss.vx = 0;
    
    // Rapidly spawn all enemy types (limited to prevent lag)
    const totalSpawnedBricks = bricks.filter(b => b.isSpawned).length;
    const maxGlobalSpawned = 50; // Global safety limit
    const enemyTypes = [BrickType.Gearsprite, BrickType.VineBot, BrickType.Corruptor];
    
    const spawnCount = Math.min(3, maxGlobalSpawned - totalSpawnedBricks);
    for (let i = 0; i < spawnCount; i++) {
        const enemyType = enemyTypes[i % enemyTypes.length];
        
        // Calculate safe spawn position within game bounds
        const spawnX = Math.max(BRICK_WIDTH, Math.min(
            boss.x + Math.random() * Math.max(boss.width - BRICK_WIDTH, BRICK_WIDTH),
            GAME_WIDTH - BRICK_WIDTH
        ));
        const spawnY = Math.max(0, Math.min(
            boss.y + boss.height + 20 + (i * 40),
            GAME_HEIGHT - BRICK_HEIGHT - 50 // Keep away from paddle area
        ));
        
        const enemy = createFinalGambitEnemy(nextBrickId++, enemyType, spawnX, spawnY);
        newBricks.push(enemy);
    }
    
    // Continuous energy surges
    for (let i = 0; i < 3; i++) {
        const surge = createFinalGambitSurge(now + i * 500);
        newProjectiles.push(surge);
    }
    
    return {
        boss,
        newBricks: newBricks.length > 0 ? newBricks : undefined,
        newProjectiles: newProjectiles.length > 0 ? newProjectiles : undefined,
        playerDebuffs: args.playerDebuffs,
        isFinalGambit: true
    };
}

function handleFinalGambitContinuous(args: PrimeSynthesizerArgs): PrimeSynthesizerResult {
    const { boss, bricks, now } = args;
    const newProjectiles: any[] = [];
    
    // Boss remains stationary
    boss.vx = 0;
    
    // Only spawn continuous energy surges, not more enemies
    if (!boss.lastEnergyBurstTime || (now - boss.lastEnergyBurstTime >= 2000)) { // Every 2 seconds
        const surge = createFinalGambitSurge(now);
        newProjectiles.push(surge);
        boss.lastEnergyBurstTime = now;
    }
    
    return {
        boss,
        newProjectiles: newProjectiles.length > 0 ? newProjectiles : undefined,
        playerDebuffs: args.playerDebuffs,
        isFinalGambit: true
    };
}

// Helper functions

function createTendrilStrike(boss: Brick, paddleX: number, paddleWidth: number, now: number) {
    return {
        id: Date.now(),
        x1: boss.x + boss.width / 2,
        y1: boss.y + boss.height,
        x2: paddleX + paddleWidth / 2,
        y2: 520, // Paddle Y position
        damage: 12,
        createdAt: now,
        duration: 1500
    };
}

function createEnergyBeam(boss: Brick, paddleX: number, paddleWidth: number, now: number) {
    return {
        id: Date.now(),
        startX: boss.x + boss.width / 2,
        startY: boss.y + boss.height,
        targetX: paddleX + paddleWidth / 2,
        targetY: 520,
        damage: 15,
        createdAt: now,
        duration: ENERGY_BEAM_DURATION,
        tracking: true
    };
}

function createDroneBrick(id: number, x: number, y: number): Brick {
    return {
        id,
        x: Math.max(0, Math.min(x, GAME_WIDTH - BRICK_WIDTH)),
        y: Math.max(0, Math.min(y, GAME_HEIGHT - BRICK_HEIGHT)),
        width: BRICK_WIDTH * 0.7,
        height: BRICK_HEIGHT * 0.7,
        type: BrickType.Grunt, // Use grunt for drones
        hp: 1,
        maxHp: 1,
        isSpawned: true
    };
}

function createDecayZone(now: number) {
    return {
        id: Date.now(),
        x: Math.random() * (GAME_WIDTH - 100),
        y: Math.random() * (GAME_HEIGHT - 100),
        width: 80 + Math.random() * 120,
        height: 60 + Math.random() * 100,
        damage: 3,
        createdAt: now,
        duration: 10000 // 10 seconds
    };
}

function createFinalGambitEnemy(id: number, type: BrickType, x: number, y: number): Brick {
    const props = BRICK_PROPERTIES[type];
    
    return {
        id,
        x: Math.max(0, Math.min(x, GAME_WIDTH - BRICK_WIDTH)),
        y: Math.max(0, Math.min(y, GAME_HEIGHT - BRICK_HEIGHT)),
        width: BRICK_WIDTH,
        height: BRICK_HEIGHT,
        type,
        hp: props.maxHp,
        maxHp: props.maxHp,
        isSpawned: true
    };
}

function createFinalGambitSurge(createdAt: number) {
    const isVertical = Math.random() < 0.5;
    
    if (isVertical) {
        const x = Math.random() * GAME_WIDTH;
        return {
            id: Date.now() + Math.random(),
            x1: x,
            y1: 0,
            x2: x,
            y2: GAME_HEIGHT,
            damage: 8,
            createdAt,
            duration: 1000
        };
    } else {
        const y = Math.random() * GAME_HEIGHT;
        return {
            id: Date.now() + Math.random(),
            x1: 0,
            y1: y,
            x2: GAME_WIDTH,
            y2: y,
            damage: 8,
            createdAt,
            duration: 1000
        };
    }
}

function findAdjacentBrick(boss: Brick, bricks: Brick[]): Brick | null {
    // Find a brick near the boss for replication
    return bricks.find(brick => 
        brick.id !== boss.id &&
        Math.abs(brick.x - boss.x) < boss.width + 50 &&
        Math.abs(brick.y - boss.y) < boss.height + 50
    ) || null;
}

function createBossReplica(id: number, original: Brick, boss: Brick): Brick | null {
    // Create a weaker version of the original brick
    return {
        ...original,
        id,
        x: boss.x + Math.random() * boss.width,
        y: boss.y + boss.height + 30,
        hp: Math.ceil(original.hp / 2),
        maxHp: Math.ceil(original.maxHp / 2),
        isSpawned: true,
        parentId: boss.id
    };
}