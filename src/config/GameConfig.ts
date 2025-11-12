export const GAME_CONFIG = {
  physics: {
    targetFPS: 60,
    maxBalls: 10,
    defaultBallSpeed: 4,
    paddleSpeed: 8,
    gravity: 0,
  },

  progression: {
    xpCurve: 'exponential' as const,
    baseXP: 100,
    xpMultiplier: 1.5,
    maxLevel: 50,
    skillPointsPerLevel: 1,
  },

  difficulty: {
    easy: {
      enemyHP: 0.8,
      playerDamage: 1.2,
      goldMultiplier: 1.5,
    },
    normal: {
      enemyHP: 1.0,
      playerDamage: 1.0,
      goldMultiplier: 1.0,
    },
    hard: {
      enemyHP: 1.5,
      playerDamage: 0.8,
      goldMultiplier: 0.8,
    },
  },

  performance: {
    maxParticles: 1000,
    maxExplosions: 20,
    objectPoolSize: 100,
    renderBudgetMs: 16, // 60fps
  },
} as const;

export type GameConfig = typeof GAME_CONFIG;


