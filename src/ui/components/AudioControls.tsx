import React, { useState, useEffect } from 'react';
import { AudioManager, AudioConfig } from '../../services/AudioManager';

interface AudioControlsProps {
  className?: string;
  compact?: boolean;
}

export const AudioControls: React.FC<AudioControlsProps> = ({ 
  className = "", 
  compact = false 
}) => {
  const [config, setConfig] = useState<AudioConfig>(AudioManager.getConfig());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateConfig = () => {
      setConfig(AudioManager.getConfig());
    };

    // Listen for config changes (if we add event system later)
    const interval = setInterval(updateConfig, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVolumeChange = (value: number) => {
    AudioManager.setVolume(value);
    setConfig(AudioManager.getConfig());
  };

  const handleMusicVolumeChange = (value: number) => {
    AudioManager.setMusicVolume(value);
    setConfig(AudioManager.getConfig());
  };

  const handleSfxVolumeChange = (value: number) => {
    AudioManager.setSfxVolume(value);
    setConfig(AudioManager.getConfig());
  };

  const handleMuteToggle = () => {
    AudioManager.toggleMute();
    setConfig(AudioManager.getConfig());
  };

  if (compact) {
    return (
      <div className={`audio-controls-compact ${className}`}>
        <button
          onClick={handleMuteToggle}
          className={`mute-button ${config.muted ? 'muted' : ''}`}
          title={config.muted ? 'Unmute' : 'Mute'}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: config.muted ? '#ff4444' : '#ffffff',
            padding: '5px'
          }}
        >
          {config.muted ? '🔇' : '🔊'}
        </button>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="volume-expand-button"
          title="Volume Settings"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            color: '#ffffff',
            padding: '5px',
            marginLeft: '5px'
          }}
        >
          ⚙️
        </button>

        {isExpanded && (
          <div
            className="volume-panel"
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              padding: '15px',
              borderRadius: '8px',
              border: '2px solid #444',
              minWidth: '200px',
              zIndex: 1000
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <label style={{ color: '#fff', fontSize: '12px', display: 'block', marginBottom: '5px' }}>
                Master: {Math.round(config.volume * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={config.volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <label style={{ color: '#fff', fontSize: '12px', display: 'block', marginBottom: '5px' }}>
                Music: {Math.round(config.musicVolume * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={config.musicVolume}
                onChange={(e) => handleMusicVolumeChange(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            
            <div>
              <label style={{ color: '#fff', fontSize: '12px', display: 'block', marginBottom: '5px' }}>
                SFX: {Math.round(config.sfxVolume * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={config.sfxVolume}
                onChange={(e) => handleSfxVolumeChange(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`audio-controls ${className}`} style={{ 
      background: 'rgba(0, 0, 0, 0.8)', 
      padding: '20px', 
      borderRadius: '10px',
      color: '#fff'
    }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#fff' }}>Audio Settings</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={handleMuteToggle}
          className={`mute-button ${config.muted ? 'muted' : ''}`}
          style={{
            background: config.muted ? '#ff4444' : '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%'
          }}
        >
          {config.muted ? '🔇 Unmute' : '🔊 Mute'}
        </button>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Master Volume: {Math.round(config.volume * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={config.volume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          style={{ width: '100%', height: '20px' }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Music Volume: {Math.round(config.musicVolume * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={config.musicVolume}
          onChange={(e) => handleMusicVolumeChange(parseFloat(e.target.value))}
          style={{ width: '100%', height: '20px' }}
        />
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Sound Effects: {Math.round(config.sfxVolume * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={config.sfxVolume}
          onChange={(e) => handleSfxVolumeChange(parseFloat(e.target.value))}
          style={{ width: '100%', height: '20px' }}
        />
      </div>
    </div>
  );
};

export default AudioControls;