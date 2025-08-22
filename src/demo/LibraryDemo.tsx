import React, { useState } from 'react';
import { AudioManager } from '../services/AudioManager';
import { ParticlePresets } from '../effects/ParticleEffects';
import { AnimationUtils, Easing } from '../utils/AnimationUtils';
import ParticleEffect from '../ui/components/ParticleEffect';
import AudioControls from '../ui/components/AudioControls';

export const LibraryDemo: React.FC = () => {
  const [currentEffect, setCurrentEffect] = useState<string | null>(null);
  const [animationTarget, setAnimationTarget] = useState<HTMLDivElement | null>(null);

  const playSound = (soundId: string) => {
    AudioManager.playSound(soundId);
  };

  const showParticleEffect = (effectId: string) => {
    setCurrentEffect(effectId);
    setTimeout(() => setCurrentEffect(null), 3000);
  };

  const runAnimation = (animationType: string) => {
    if (!animationTarget) return;
    
    switch (animationType) {
      case 'fadeIn':
        AnimationUtils.fadeIn(animationTarget);
        break;
      case 'scaleIn':
        AnimationUtils.scaleIn(animationTarget);
        break;
      case 'pulse':
        AnimationUtils.pulse(animationTarget, { repeat: 3 });
        break;
      case 'brickBreak':
        AnimationUtils.brickBreakAnimation(animationTarget);
        break;
    }
  };

  const effectsList = Object.keys(ParticlePresets);

  return (
    <div style={{ 
      padding: '20px', 
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        🎮 Paddle Knight - Library Integration Demo
      </h1>

      {/* Audio Demo Section */}
      <div style={{ 
        background: 'rgba(0,0,0,0.3)', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2>🔊 Audio System Demo</h2>
        <AudioControls className="mb-4" />
        
        <div style={{ marginTop: '15px' }}>
          <h3>Test Sound Effects:</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button onClick={() => playSound('ball-hit')} className="demo-btn">Ball Hit</button>
            <button onClick={() => playSound('brick-break')} className="demo-btn">Brick Break</button>
            <button onClick={() => playSound('power-up')} className="demo-btn">Power Up</button>
            <button onClick={() => playSound('skill-activate')} className="demo-btn">Skill Activate</button>
            <button onClick={() => playSound('explosion')} className="demo-btn">Explosion</button>
          </div>
        </div>
      </div>

      {/* Particle Effects Demo */}
      <div style={{ 
        background: 'rgba(0,0,0,0.3)', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '20px',
        position: 'relative'
      }}>
        <h2>✨ Particle Effects Demo</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <h3>Available Effects:</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {effectsList.map(effectId => (
              <button 
                key={effectId}
                onClick={() => showParticleEffect(effectId)}
                className="demo-btn"
                style={{ fontSize: '12px' }}
              >
                {effectId}
              </button>
            ))}
          </div>
        </div>

        {currentEffect && (
          <ParticleEffect 
            effectId={currentEffect} 
            position={{ x: 50, y: 50 }}
            onComplete={() => setCurrentEffect(null)}
          />
        )}
      </div>

      {/* Animation Demo */}
      <div style={{ 
        background: 'rgba(0,0,0,0.3)', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2>🎬 GSAP Animation Demo</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <div 
            ref={setAnimationTarget}
            style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              borderRadius: '10px',
              margin: '20px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            Demo Box
          </div>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => runAnimation('fadeIn')} className="demo-btn">Fade In</button>
            <button onClick={() => runAnimation('scaleIn')} className="demo-btn">Scale In</button>
            <button onClick={() => runAnimation('pulse')} className="demo-btn">Pulse</button>
            <button onClick={() => runAnimation('brickBreak')} className="demo-btn">Brick Break</button>
          </div>
        </div>
      </div>

      {/* Integration Status */}
      <div style={{ 
        background: 'rgba(0,0,0,0.3)', 
        padding: '20px', 
        borderRadius: '10px'
      }}>
        <h2>✅ Integration Status</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>✅ Howler.js Audio System - Integrated & Working</li>
          <li>✅ tsParticles Effects - Integrated & Working</li>
          <li>✅ GSAP Animations - Integrated & Working</li>
          <li>✅ Audio Controls UI - Added to TopUI</li>
          <li>✅ AudioSystem - Integrated into GameEngine</li>
          <li>✅ All builds passing</li>
        </ul>
        
        <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(0,255,0,0.1)', borderRadius: '5px' }}>
          <strong>🎉 All libraries successfully integrated!</strong>
          <br />
          Ready for custom audio content from Suno.ai and ElevenLabs.
        </div>
      </div>

      <style>{`
        .demo-btn {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          padding: 8px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: transform 0.2s;
        }
        .demo-btn:hover {
          transform: scale(1.05);
        }
        .demo-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default LibraryDemo;