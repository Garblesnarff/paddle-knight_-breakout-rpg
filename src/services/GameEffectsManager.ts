import { AudioSystem } from '../core/systems/AudioSystem';
import { AnimationUtils } from '../utils/AnimationUtils';
import { AudioManager } from './AudioManager';

export interface GameEffect {
  id: string;
  type: 'audio' | 'particle' | 'animation' | 'combo';
  position?: { x: number; y: number };
  element?: HTMLElement | string;
  data?: any;
}

export interface ComboEffect {
  audio?: string;
  particle?: string;
  animation?: string;
  position?: { x: number; y: number };
  element?: HTMLElement | string;
  delay?: number;
}

class GameEffectsManagerService {
  private audioSystem: AudioSystem | null = null;
  private activeEffects: Map<string, any> = new Map();
  private effectQueue: GameEffect[] = [];
  private isProcessing = false;
  private particleCallback: ((effect: {id: string, effectId: string, position: {x: number, y: number}}) => void) | null = null;
  private effectThrottle: number = 0;
  private lastEffectTime: number = 0;

  public setAudioSystem(audioSystem: AudioSystem): void {
    this.audioSystem = audioSystem;
  }

  public setParticleCallback(callback: (effect: {id: string, effectId: string, position: {x: number, y: number}}) => void): void {
    this.particleCallback = callback;
  }

  public triggerEffect(effect: GameEffect): void {
    const now = Date.now();
    
    // Emergency cleanup if too many active effects
    if (this.activeEffects.size > 20) {
      console.warn('Too many active effects, clearing older ones');
      this.cleanupExpiredEffects();
      if (this.activeEffects.size > 15) {
        // Force clear half of the oldest effects
        const effectsArray = Array.from(this.activeEffects.entries());
        const oldestEffects = effectsArray.slice(0, Math.floor(effectsArray.length / 2));
        oldestEffects.forEach(([id]) => this.activeEffects.delete(id));
      }
    }
    
    // Throttle particle effects to prevent performance issues
    if (effect.type === 'particle' || (effect.type === 'combo' && effect.data?.particle)) {
      if (now - this.lastEffectTime < 50) { // Max 20 effects per second
        this.effectThrottle++;
        if (this.effectThrottle > 10) { // Increased threshold slightly
          return; // Skip this effect
        }
      } else {
        this.effectThrottle = 0;
        this.lastEffectTime = now;
      }
    }

    this.effectQueue.push(effect);
    if (!this.isProcessing) {
      this.processEffectQueue();
    }
  }

  public triggerComboEffect(combo: ComboEffect): void {
    const baseId = `combo-${Date.now()}`;
    
    // Schedule audio effect
    if (combo.audio) {
      this.triggerEffect({
        id: `${baseId}-audio`,
        type: 'audio',
        data: { soundId: combo.audio }
      });
    }

    // Schedule particle effect
    if (combo.particle && combo.position) {
      setTimeout(() => {
        this.triggerEffect({
          id: `${baseId}-particle`,
          type: 'particle',
          position: combo.position,
          data: { effectId: combo.particle }
        });
      }, combo.delay || 0);
    }

    // Schedule animation effect
    if (combo.animation && combo.element) {
      setTimeout(() => {
        this.triggerEffect({
          id: `${baseId}-animation`,
          type: 'animation',
          element: combo.element,
          data: { animationType: combo.animation }
        });
      }, combo.delay || 50);
    }
  }

  private async processEffectQueue(): Promise<void> {
    this.isProcessing = true;

    while (this.effectQueue.length > 0) {
      const effect = this.effectQueue.shift();
      if (effect) {
        await this.executeEffect(effect);
      }
    }

    this.isProcessing = false;
  }

  private async executeEffect(effect: GameEffect): Promise<void> {
    switch (effect.type) {
      case 'audio':
        this.executeAudioEffect(effect);
        break;
      case 'particle':
        this.executeParticleEffect(effect);
        break;
      case 'animation':
        this.executeAnimationEffect(effect);
        break;
      case 'combo':
        this.executeComboEffect(effect);
        break;
    }
  }

  private executeAudioEffect(effect: GameEffect): void {
    if (!effect.data?.soundId) return;
    
    // Use AudioManager directly since AudioSystem is complex to integrate here
    AudioManager.playSound(effect.data.soundId);
  }

  private executeParticleEffect(effect: GameEffect): void {
    if (!effect.data?.effectId || !effect.position) return;

    // Use React callback if available
    if (this.particleCallback) {
      this.particleCallback({
        id: effect.id,
        effectId: effect.data.effectId,
        position: effect.position
      });
    }

    // Store for cleanup
    this.activeEffects.set(effect.id, {
      type: 'particle',
      startTime: Date.now()
    });
  }

  private executeAnimationEffect(effect: GameEffect): void {
    if (!effect.element || !effect.data?.animationType) return;

    const animationType = effect.data.animationType;
    const config = effect.data.config || {};

    switch (animationType) {
      case 'brickBreak':
        AnimationUtils.brickBreakAnimation(effect.element, config);
        break;
      case 'ballHit':
        AnimationUtils.ballHitAnimation(effect.element, config);
        break;
      case 'powerUpCollect':
        AnimationUtils.powerUpCollectAnimation(effect.element, config);
        break;
      case 'skillActivation':
        AnimationUtils.skillActivationAnimation(effect.element, config);
        break;
      case 'bossIntro':
        AnimationUtils.bossIntroAnimation(effect.element, config);
        break;
      case 'fadeIn':
        AnimationUtils.fadeIn(effect.element, config);
        break;
      case 'fadeOut':
        AnimationUtils.fadeOut(effect.element, config);
        break;
      case 'scaleIn':
        AnimationUtils.scaleIn(effect.element, config);
        break;
      case 'pulse':
        AnimationUtils.pulse(effect.element, config);
        break;
      default:
        console.warn(`Unknown animation type: ${animationType}`);
    }
  }

  private executeComboEffect(effect: GameEffect): void {
    if (!effect.data) return;
    this.triggerComboEffect(effect.data);
  }

  // Predefined combo effects for common game events
  public ballHitBrick(position: { x: number; y: number }, element?: HTMLElement | string): void {
    this.triggerComboEffect({
      audio: 'ball-hit',
      particle: 'ballHit',
      animation: element ? 'ballHit' : undefined,
      position,
      element,
      delay: 0
    });
  }

  public brickDestroyed(position: { x: number; y: number }, element?: HTMLElement | string, brickType?: string): void {
    let particleEffect = 'brickBreak';
    let audioEffect = 'brick-break';

    // Customize based on brick type
    if (brickType === 'boss' || brickType === 'armored') {
      particleEffect = 'explosion';
      audioEffect = 'explosion';
    }

    this.triggerComboEffect({
      audio: audioEffect,
      particle: particleEffect,
      animation: element ? 'brickBreak' : undefined,
      position,
      element,
      delay: 0
    });
  }

  public powerUpCollected(position: { x: number; y: number }, element?: HTMLElement | string): void {
    this.triggerComboEffect({
      audio: 'power-up',
      particle: 'powerUpPickup',
      animation: element ? 'powerUpCollect' : undefined,
      position,
      element,
      delay: 0
    });
  }

  public skillActivated(skillId: string, position?: { x: number; y: number }, element?: HTMLElement | string): void {
    this.triggerComboEffect({
      audio: 'skill-activate',
      particle: position ? 'skillActivation' : undefined,
      animation: element ? 'skillActivation' : undefined,
      position,
      element,
      delay: 0
    });
  }

  public levelUp(element?: HTMLElement | string): void {
    this.triggerComboEffect({
      audio: 'victory',
      particle: 'levelComplete',
      animation: element ? 'scaleIn' : undefined,
      position: { x: 50, y: 20 }, // Top center of screen
      element,
      delay: 100
    });
  }

  public bossDefeated(position: { x: number; y: number }): void {
    this.triggerComboEffect({
      audio: 'boss-hit',
      particle: 'bossDefeat',
      position,
      delay: 0
    });
  }

  public gameOver(): void {
    AudioManager.playSound('game-over');
    const musicFiles = this.getMusicFiles('game-over');
    if (musicFiles.length > 0) {
      AudioManager.playMusic(musicFiles);
    }
  }

  public gameVictory(): void {
    this.triggerComboEffect({
      audio: 'victory',
      particle: 'levelComplete',
      position: { x: 50, y: 30 },
      delay: 0
    });
    
    const musicFiles = this.getMusicFiles('victory');
    if (musicFiles.length > 0) {
      AudioManager.playMusic(musicFiles);
    }
  }

  public worldStart(worldId: string): void {
    const musicFiles = this.getMusicFiles(`world-${worldId}`);
    if (musicFiles.length > 0) {
      AudioManager.playMusic(musicFiles);
    }
  }

  public bossStart(): void {
    const musicFiles = this.getMusicFiles('boss');
    if (musicFiles.length > 0) {
      AudioManager.playMusic(musicFiles);
    }
  }

  public menuMusic(): void {
    const musicFiles = this.getMusicFiles('menu');
    if (musicFiles.length > 0) {
      AudioManager.playMusic(musicFiles);
    }
  }

  private getMusicFiles(musicId: string): string[] {
    // Map music IDs to actual file paths
    const musicMap: Record<string, string[]> = {
      'menu': ['/assets/audio/music/menu.webm', '/assets/audio/music/menu.mp3'],
      'world-1': ['/assets/audio/music/world-1.webm', '/assets/audio/music/world-1.mp3'],
      'world-2': ['/assets/audio/music/world-2.webm', '/assets/audio/music/world-2.mp3'],
      'world-3': ['/assets/audio/music/world-3.webm', '/assets/audio/music/world-3.mp3'],
      'world-4': ['/assets/audio/music/world-4.webm', '/assets/audio/music/world-4.mp3'],
      'boss': ['/assets/audio/music/boss.webm', '/assets/audio/music/boss.mp3'],
      'victory': ['/assets/audio/music/victory.webm', '/assets/audio/music/victory.mp3'],
      'game-over': ['/assets/audio/music/game-over.webm', '/assets/audio/music/game-over.mp3']
    };

    return musicMap[musicId] || [];
  }

  // Cleanup
  public cleanup(): void {
    this.effectQueue = [];
    this.activeEffects.clear();
    AnimationUtils.killAll();
  }

  public cleanupExpiredEffects(): void {
    const now = Date.now();
    for (const [id, effect] of this.activeEffects.entries()) {
      if (effect.type === 'particle' && now - effect.startTime > 3000) { // Reduced from 5s to 3s
        this.activeEffects.delete(id);
      }
    }
  }

  // Getters
  public getActiveEffectsCount(): number {
    return this.activeEffects.size;
  }

  public getQueueSize(): number {
    return this.effectQueue.length;
  }
}

export const GameEffectsManager = new GameEffectsManagerService();