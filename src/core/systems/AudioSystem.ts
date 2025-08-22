import { IGameSystem } from '@/src/contracts/IGameSystem';
import { GameState, SystemUpdate } from '@/src/types';
import { AudioManager } from '@/src/services/AudioManager';

export interface AudioEvent {
  type: 'sound' | 'music';
  id: string;
  action: 'play' | 'stop' | 'pause' | 'resume';
  options?: {
    position?: { x: number; y: number };
    volume?: number;
    loop?: boolean;
  };
}

export class AudioSystem implements IGameSystem {
  name = 'AudioSystem';
  priority = 5; // Early in the update cycle
  dependencies: string[] = [];

  private audioEvents: AudioEvent[] = [];
  private initialized = false;

  initialize(gameState: GameState): void {
    if (!this.initialized) {
      AudioManager.preloadSounds();
      this.initialized = true;
    }
  }

  update(deltaTimeMs: number): SystemUpdate {
    // Process queued audio events
    while (this.audioEvents.length > 0) {
      const event = this.audioEvents.shift();
      if (event) {
        this.processAudioEvent(event);
      }
    }

    return {};
  }

  destroy(): void {
    AudioManager.cleanup();
  }

  // Public API for other systems to trigger audio events
  public queueAudioEvent(event: AudioEvent): void {
    this.audioEvents.push(event);
  }

  public playSound(id: string, options?: AudioEvent['options']): void {
    this.queueAudioEvent({
      type: 'sound',
      id,
      action: 'play',
      options
    });
  }

  public stopSound(id: string): void {
    this.queueAudioEvent({
      type: 'sound',
      id,
      action: 'stop'
    });
  }

  public playMusic(id: string, options?: AudioEvent['options']): void {
    this.queueAudioEvent({
      type: 'music',
      id,
      action: 'play',
      options
    });
  }

  public stopMusic(): void {
    this.queueAudioEvent({
      type: 'music',
      id: '',
      action: 'stop'
    });
  }

  private processAudioEvent(event: AudioEvent): void {
    switch (event.type) {
      case 'sound':
        this.processSoundEvent(event);
        break;
      case 'music':
        this.processMusicEvent(event);
        break;
    }
  }

  private processSoundEvent(event: AudioEvent): void {
    switch (event.action) {
      case 'play':
        AudioManager.playSound(event.id);
        break;
      case 'stop':
        AudioManager.stopSound(event.id);
        break;
    }
  }

  private processMusicEvent(event: AudioEvent): void {
    switch (event.action) {
      case 'play':
        // For music, we need to map IDs to actual file paths
        const musicFiles = this.getMusicFiles(event.id);
        if (musicFiles.length > 0) {
          AudioManager.playMusic(musicFiles, event.options?.loop ?? true);
        }
        break;
      case 'stop':
        AudioManager.stopMusic();
        break;
      case 'pause':
        AudioManager.pauseMusic();
        break;
      case 'resume':
        AudioManager.resumeMusic();
        break;
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

  // Convenience methods for common game events
  public onBallHit(): void {
    this.playSound('ball-hit');
  }

  public onBrickBreak(): void {
    this.playSound('brick-break');
  }

  public onPowerUpCollect(): void {
    this.playSound('power-up');
  }

  public onSkillActivate(): void {
    this.playSound('skill-activate');
  }

  public onBossHit(): void {
    this.playSound('boss-hit');
  }

  public onExplosion(): void {
    this.playSound('explosion');
  }

  public onGameOver(): void {
    this.playSound('game-over');
  }

  public onVictory(): void {
    this.playSound('victory');
  }

  public onWorldStart(worldId: string): void {
    this.playMusic(`world-${worldId}`);
  }

  public onBossStart(): void {
    this.playMusic('boss');
  }

  public onMenuOpen(): void {
    this.playMusic('menu');
  }
}