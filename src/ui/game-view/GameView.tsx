import React, { useEffect, useRef, useCallback } from 'react';
import { useGameStore } from '@/src/core/state/gameStore';
import { runGameIteration } from '@/game/gameEngine';
import { createBricksForStage } from '@/game/level-manager';
import { GAME_WIDTH, GAME_HEIGHT, PADDLE_HEIGHT, PADDLE_Y, BALL_RADIUS } from '@/constants';
import GameCanvas from './GameCanvas';
import TopUI from './TopUI';
import BottomUI from './BottomUI';
import BallRenderer from './BallRenderer';
import BrickRenderer from './BrickRenderer';
import PaddleRenderer from './PaddleRenderer';

const GameView: React.FC = () => {
  const lastTimeRef = useRef<number>(performance.now());
  const gameCanvasRef = useRef<HTMLDivElement>(null);
  
  const { 
    ui, 
    game, 
    updateGameState, 
    setPaddleX, 
    launchBall,
    initializeGame 
  } = useGameStore();

  // Initialize game when component mounts
  useEffect(() => {
    if (ui.selectedWorldId && ui.selectedStageId) {
      // Initialize bricks for the selected stage
      const bricks = createBricksForStage(ui.selectedWorldId, ui.selectedStageId);
      
      // Initialize ball
      const initialBall = {
        id: 1,
        x: GAME_WIDTH / 2,
        y: PADDLE_Y - BALL_RADIUS - 5,
        vx: 0,
        vy: 0,
        size: BALL_RADIUS,
        damage: game.playerStats.power,
      };
      
      updateGameState({
        bricks,
        balls: [initialBall],
        isBallLaunched: false,
        stageStartTime: Date.now(),
        startHp: game.hp,
      });
      
      initializeGame(ui.selectedWorldId, ui.selectedStageId);
    }
  }, [ui.selectedWorldId, ui.selectedStageId]);

  // Handle mouse movement for paddle
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (gameCanvasRef.current) {
      const rect = gameCanvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const currentStore = useGameStore.getState();
      const paddleWidth = currentStore.game.paddleWidth;
      const paddleX = Math.max(0, Math.min(x - paddleWidth / 2, GAME_WIDTH - paddleWidth));
      currentStore.setPaddleX(paddleX);
      currentStore.updateGameState({ mousePos: { x, y: e.clientY - rect.top } });
    }
  }, []);

  // Handle click to launch ball
  const handleClick = useCallback(() => {
    const currentStore = useGameStore.getState();
    const { isBallLaunched, balls, playerStats } = currentStore.game;
    
    console.log('Launch attempt:', { isBallLaunched, ballCount: balls.length, balls });
    
    if (!isBallLaunched && balls.length > 0) {
      const launchedBalls = balls.map((ball, index) => 
        index === 0 ? {
          ...ball,
          vx: 4,
          vy: -4,
          damage: playerStats.power
        } : ball
      );
      console.log('Launching balls:', launchedBalls);
      currentStore.updateGameState({ 
        balls: launchedBalls, 
        isBallLaunched: true 
      });
    }
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentStore = useGameStore.getState();
      if (e.code === 'Space' && !currentStore.game.isBallLaunched) {
        handleClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClick]);

  // Mouse event listeners
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleClick]);

  // Game loop
  useEffect(() => {
    if (ui.gameStatus !== 4) return; // GameStatus.Playing = 4
    
    let rafId: number;
    const gameStoreRef = useGameStore.getState;
    
    const tick = (now: number) => {
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;
      
      // Get latest game state
      const currentStore = gameStoreRef();
      const currentGame = currentStore.game;
      
      // Update elapsed time
      const elapsedTime = (now - currentGame.stageStartTime) / 1000;
      
      // Run game iteration (the engine handles ball-paddle tracking internally)
      const gameUpdate = runGameIteration({
        balls: currentGame.balls,
        bricks: currentGame.bricks,
        projectiles: currentGame.projectiles,
        homingProjectiles: currentGame.homingProjectiles,
        arcaneOrbs: currentGame.arcaneOrbs,
        fireRainZones: currentGame.fireRainZones,
        iceSpikeFields: currentGame.iceSpikeFields,
        lightningStrikes: currentGame.lightningStrikes,
        arcaneOverloadRings: currentGame.arcaneOverloadRings,
        finalGambitBeams: currentGame.finalGambitBeams,
        paddleX: currentGame.paddleX,
        paddleWidth: currentGame.paddleWidth,
        playerStats: currentGame.playerStats,
        skills: currentGame.skills,
        isBallLaunched: currentGame.isBallLaunched,
        hp: currentGame.hp,
        xp: currentGame.xp,
        level: currentGame.level,
        unlockedSkills: currentGame.unlockedSkills,
        mana: currentGame.mana,
        maxMana: currentGame.maxMana,
        activeBuffs: currentGame.activeBuffs,
        maxActiveSkills: currentGame.maxActiveSkills,
        equippedSkills: currentGame.equippedSkills,
        overgrowthZones: currentGame.overgrowthZones,
        energySurges: currentGame.energySurges,
        replicationFields: currentGame.replicationFields,
        playerDebuffs: currentGame.playerDebuffs,
      });
      
      // Apply all updates in a single batch
      const updates: Partial<typeof currentGame> = { elapsedTime };
      
      if (gameUpdate.balls) {
        console.log('Game engine returned balls:', gameUpdate.balls);
        updates.balls = gameUpdate.balls;
      }
      if (gameUpdate.bricks) updates.bricks = gameUpdate.bricks;
      if (gameUpdate.projectiles) updates.projectiles = gameUpdate.projectiles;
      if (gameUpdate.homingProjectiles) updates.homingProjectiles = gameUpdate.homingProjectiles;
      if (gameUpdate.arcaneOrbs) updates.arcaneOrbs = gameUpdate.arcaneOrbs;
      if (gameUpdate.fireRainZones) updates.fireRainZones = gameUpdate.fireRainZones;
      if (gameUpdate.iceSpikeFields) updates.iceSpikeFields = gameUpdate.iceSpikeFields;
      if (gameUpdate.lightningStrikes) updates.lightningStrikes = gameUpdate.lightningStrikes;
      if (gameUpdate.isBallLaunched !== undefined) updates.isBallLaunched = gameUpdate.isBallLaunched;
      
      // Update player stats
      if (gameUpdate.damageToPlayer) {
        updates.hp = Math.max(0, currentGame.hp - gameUpdate.damageToPlayer);
      }
      if (gameUpdate.xpGained) {
        updates.xp = currentGame.xp + gameUpdate.xpGained;
      }
      if (gameUpdate.goldGained) {
        updates.gold = currentGame.gold + gameUpdate.goldGained;
      }
      if (gameUpdate.scoreGained) {
        updates.score = currentGame.score + gameUpdate.scoreGained;
      }
      
      currentStore.updateGameState(updates);
      
      rafId = requestAnimationFrame(tick);
    };
    
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [ui.gameStatus]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <TopUI />
      
      <div ref={gameCanvasRef} className="relative">
        <GameCanvas width={GAME_WIDTH} height={GAME_HEIGHT}>
          {/* Render bricks with enhanced renderer */}
          {game.bricks.map(brick => (
            <BrickRenderer key={brick.id} brick={brick} />
          ))}
          
          {/* Render balls with enhanced renderer */}
          {game.balls.map(ball => (
            <BallRenderer
              key={ball.id}
              ball={ball}
              activeBuffs={game.activeBuffs}
              cosmetics={game.cosmetics}
            />
          ))}
          
          {/* Render projectiles */}
          {game.projectiles.map(proj => (
            <div
              key={proj.id}
              className="absolute bg-red-400 rounded-full"
              style={{
                left: proj.x - proj.size / 2,
                top: proj.y - proj.size / 2,
                width: proj.size,
                height: proj.size,
              }}
            />
          ))}
          
          {/* Render paddle with enhanced renderer */}
          <PaddleRenderer
            paddleX={game.paddleX}
            paddleWidth={game.paddleWidth}
            cosmetics={game.cosmetics}
          />
          
          {/* Launch instruction */}
          {!game.isBallLaunched && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/70 text-white px-4 py-2 rounded">
                Click or press Space to launch!
              </div>
            </div>
          )}
        </GameCanvas>
      </div>
      
      <BottomUI />
    </div>
  );
};

export default GameView;
