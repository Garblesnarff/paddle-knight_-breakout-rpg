import { Howl, Howler } from 'howler';

export interface AudioConfig {
  volume: number;
  muted: boolean;
  musicVolume: number;
  sfxVolume: number;
}

export interface SoundEffect {
  id: string;
  src: string[];
  volume?: number;
  loop?: boolean;
  sprite?: { [key: string]: [number, number] };
}

class AudioManagerService {
  private sounds: Map<string, Howl> = new Map();
  private currentMusic: Howl | null = null;
  private config: AudioConfig = {
    volume: 0.7,
    muted: false,
    musicVolume: 0.5,
    sfxVolume: 0.8
  };

  constructor() {
    this.loadConfig();
    this.updateGlobalVolume();
  }

  private loadConfig(): void {
    const saved = localStorage.getItem('audio-config');
    if (saved) {
      try {
        this.config = { ...this.config, ...JSON.parse(saved) };
      } catch (e) {
        console.warn('Failed to load audio config from localStorage');
      }
    }
  }

  private saveConfig(): void {
    localStorage.setItem('audio-config', JSON.stringify(this.config));
  }

  private updateGlobalVolume(): void {
    Howler.volume(this.config.muted ? 0 : this.config.volume);
  }

  public registerSound(effect: SoundEffect): void {
    try {
      const howl = new Howl({
        src: effect.src,
        volume: (effect.volume ?? 1) * this.config.sfxVolume,
        loop: effect.loop ?? false,
        sprite: effect.sprite,
        onloaderror: (id, error) => {
          console.warn(`Failed to load audio "${effect.id}":`, error);
        },
        onplayerror: (id, error) => {
          console.warn(`Failed to play audio "${effect.id}":`, error);
        }
      });

      this.sounds.set(effect.id, howl);
    } catch (error) {
      console.warn(`Failed to register sound "${effect.id}":`, error);
    }
  }

  public playSound(id: string, spriteId?: string): number | undefined {
    try {
      const sound = this.sounds.get(id);
      if (!sound || this.config.muted) return;

      const soundId = spriteId ? sound.play(spriteId) : sound.play();
      return soundId;
    } catch (error) {
      console.warn(`Failed to play sound "${id}":`, error);
      return undefined;
    }
  }

  public stopSound(id: string, soundId?: number): void {
    const sound = this.sounds.get(id);
    if (!sound) return;

    if (soundId !== undefined) {
      sound.stop(soundId);
    } else {
      sound.stop();
    }
  }

  public playMusic(src: string[], loop: boolean = true): void {
    try {
      if (this.currentMusic) {
        this.currentMusic.stop();
        this.currentMusic.unload();
      }

      this.currentMusic = new Howl({
        src,
        volume: this.config.musicVolume,
        loop,
        autoplay: !this.config.muted,
        onloaderror: (id, error) => {
          console.warn(`Failed to load music:`, error);
        },
        onplayerror: (id, error) => {
          console.warn(`Failed to play music:`, error);
        }
      });

      if (!this.config.muted) {
        this.currentMusic.play();
      }
    } catch (error) {
      console.warn(`Failed to play music:`, error);
    }
  }

  public stopMusic(): void {
    if (this.currentMusic) {
      this.currentMusic.stop();
    }
  }

  public pauseMusic(): void {
    if (this.currentMusic) {
      this.currentMusic.pause();
    }
  }

  public resumeMusic(): void {
    if (this.currentMusic && !this.config.muted) {
      this.currentMusic.play();
    }
  }

  public setVolume(volume: number): void {
    this.config.volume = Math.max(0, Math.min(1, volume));
    this.updateGlobalVolume();
    this.saveConfig();
  }

  public setMusicVolume(volume: number): void {
    this.config.musicVolume = Math.max(0, Math.min(1, volume));
    if (this.currentMusic) {
      this.currentMusic.volume(this.config.musicVolume);
    }
    this.saveConfig();
  }

  public setSfxVolume(volume: number): void {
    this.config.sfxVolume = Math.max(0, Math.min(1, volume));
    this.sounds.forEach(sound => {
      sound.volume(this.config.sfxVolume);
    });
    this.saveConfig();
  }

  public toggleMute(): void {
    this.config.muted = !this.config.muted;
    this.updateGlobalVolume();
    
    if (this.config.muted) {
      this.pauseMusic();
    } else {
      this.resumeMusic();
    }
    
    this.saveConfig();
  }

  public getConfig(): Readonly<AudioConfig> {
    return { ...this.config };
  }

  public preloadSounds(): void {
    // Register default game sounds
    this.registerSound({
      id: 'ball-hit',
      src: ['/assets/audio/sfx/ball-hit.webm', '/assets/audio/sfx/ball-hit.mp3'],
      volume: 0.6
    });

    this.registerSound({
      id: 'brick-break',
      src: ['/assets/audio/sfx/brick-break.webm', '/assets/audio/sfx/brick-break.mp3'],
      volume: 0.7
    });

    this.registerSound({
      id: 'power-up',
      src: ['/assets/audio/sfx/power-up.webm', '/assets/audio/sfx/power-up.mp3'],
      volume: 0.5
    });

    this.registerSound({
      id: 'game-over',
      src: ['/assets/audio/sfx/game-over.webm', '/assets/audio/sfx/game-over.mp3'],
      volume: 0.8
    });

    this.registerSound({
      id: 'victory',
      src: ['/assets/audio/sfx/victory.webm', '/assets/audio/sfx/victory.mp3'],
      volume: 0.6
    });

    this.registerSound({
      id: 'skill-activate',
      src: ['/assets/audio/sfx/skill-activate.webm', '/assets/audio/sfx/skill-activate.mp3'],
      volume: 0.5
    });

    this.registerSound({
      id: 'boss-hit',
      src: ['/assets/audio/sfx/boss-hit.webm', '/assets/audio/sfx/boss-hit.mp3'],
      volume: 0.8
    });

    this.registerSound({
      id: 'explosion',
      src: ['/assets/audio/sfx/explosion.webm', '/assets/audio/sfx/explosion.mp3'],
      volume: 0.9
    });
  }

  public cleanup(): void {
    this.sounds.forEach(sound => {
      sound.unload();
    });
    this.sounds.clear();
    
    if (this.currentMusic) {
      this.currentMusic.unload();
      this.currentMusic = null;
    }
  }
}

export const AudioManager = new AudioManagerService();