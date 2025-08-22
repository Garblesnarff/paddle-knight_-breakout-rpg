import React, { useEffect, useState } from 'react';

export interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
  shape: 'circle' | 'square' | 'triangle' | 'star';
}

export interface ParticleEffectConfig {
  particleCount: number;
  colors: string[];
  shapes: ('circle' | 'square' | 'triangle' | 'star')[];
  sizeRange: [number, number];
  speedRange: [number, number];
  lifespan: number;
  gravity?: number;
  spread?: number;
}

export const PARTICLE_PRESETS: Record<string, ParticleEffectConfig> = {
  brickBreak: {
    particleCount: 8,
    colors: ['#ff6b35', '#f7931e', '#ffd700', '#ff1744'],
    shapes: ['circle', 'square'],
    sizeRange: [3, 8],
    speedRange: [5, 15],
    lifespan: 1000,
    spread: 180
  },
  ballHit: {
    particleCount: 5,
    colors: ['#00ffff', '#0080ff'],
    shapes: ['star', 'circle'],
    sizeRange: [2, 6],
    speedRange: [3, 8],
    lifespan: 500,
    spread: 90
  },
  powerUpPickup: {
    particleCount: 12,
    colors: ['#9c27b0', '#e91e63', '#2196f3', '#00bcd4'],
    shapes: ['circle', 'square', 'triangle'],
    sizeRange: [3, 7],
    speedRange: [2, 10],
    lifespan: 1500,
    gravity: -2,
    spread: 360
  },
  explosion: {
    particleCount: 15,
    colors: ['#ff5722', '#ff9800', '#ffc107', '#ffeb3b'],
    shapes: ['circle'],
    sizeRange: [4, 12],
    speedRange: [10, 25],
    lifespan: 1200,
    spread: 360
  },
  skillActivation: {
    particleCount: 20,
    colors: ['#ffeb3b', '#ffc107', '#ff9800', '#ff5722'],
    shapes: ['circle', 'star'],
    sizeRange: [2, 6],
    speedRange: [1, 5],
    lifespan: 2000,
    spread: 360
  }
};

interface CSSParticleEffectProps {
  effectId: string;
  position: { x: number; y: number };
  onComplete?: () => void;
}

export const CSSParticleEffect: React.FC<CSSParticleEffectProps> = ({
  effectId,
  position,
  onComplete
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const config = PARTICLE_PRESETS[effectId];
    if (!config) {
      console.warn(`Particle effect "${effectId}" not found`);
      onComplete?.();
      return;
    }

    // Create initial particles
    const initialParticles: Particle[] = [];
    for (let i = 0; i < config.particleCount; i++) {
      const angle = config.spread ? (Math.random() * config.spread - config.spread / 2) * (Math.PI / 180) : Math.random() * Math.PI * 2;
      const speed = config.speedRange[0] + Math.random() * (config.speedRange[1] - config.speedRange[0]);
      
      initialParticles.push({
        id: `${effectId}-${i}-${Date.now()}`,
        x: (position.x / 100) * 800, // Convert percentage to game area pixels (800px wide)
        y: (position.y / 100) * 600, // Convert percentage to game area pixels (600px tall)
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
        size: config.sizeRange[0] + Math.random() * (config.sizeRange[1] - config.sizeRange[0]),
        life: config.lifespan,
        maxLife: config.lifespan,
        shape: config.shapes[Math.floor(Math.random() * config.shapes.length)]
      });
    }

    setParticles(initialParticles);

    // Animation loop
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed >= config.lifespan) {
        setIsActive(false);
        onComplete?.();
        return;
      }

      setParticles(currentParticles => 
        currentParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + (config.gravity || 0.5),
          life: particle.life - 16 // Assuming 60fps
        })).filter(particle => particle.life > 0)
      );

      if (isActive) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      setIsActive(false);
      cancelAnimationFrame(animationId);
    };
  }, [effectId, position.x, position.y, onComplete]);

  if (!isActive || particles.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1000 }}>
      {particles.map(particle => {
        const opacity = Math.max(0, particle.life / particle.maxLife);
        const transform = `translate(${particle.x}px, ${particle.y}px)`;
        
        return (
          <div
            key={particle.id}
            className={`absolute transform-gpu transition-opacity duration-75 ${
              particle.shape === 'star' ? 'star-shape' :
              particle.shape === 'triangle' ? 'triangle-shape' :
              particle.shape === 'square' ? 'square-shape' : 'rounded-full'
            }`}
            style={{
              transform,
              backgroundColor: particle.color,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity,
              willChange: 'transform, opacity'
            }}
          />
        );
      })}
    </div>
  );
};

export default CSSParticleEffect;