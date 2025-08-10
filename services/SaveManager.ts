// SaveManager.ts
export interface SaveData {
    version: string;  // For future save compatibility
    player: {
        gold: number;
        totalStars: number;
        highestWorldUnlocked: number;
        skillPoints: number;
        unlockedSkills: Record<string, number>;
    };
    worlds: {
        [worldId: number]: {
            stars: number;        // 0-3
            bestScore: number;
            bestTime: number;     // in milliseconds
            completed: boolean;
        };
    };
    settings: {
        soundVolume: number;      // 0-1
        musicVolume: number;      // 0-1
    };
    statistics: {
        totalPlayTime: number;    // in milliseconds
        totalBricksDestroyed: number;
        totalBossesDefeated: number;
    };
}

class SaveManager {
    private static instance: SaveManager;
    private readonly SAVE_KEY = 'paddleKnight_saveData';
    private readonly CURRENT_VERSION = '1.0.0';

    private constructor() {}

    static getInstance(): SaveManager {
        if (!SaveManager.instance) {
            SaveManager.instance = new SaveManager();
        }
        return SaveManager.instance;
    }

    // Create a new save with default values
    createNewSave(): SaveData {
        return {
            version: this.CURRENT_VERSION,
            player: {
                gold: 0,
                totalStars: 0,
                highestWorldUnlocked: 1,
                skillPoints: 0,
                unlockedSkills: {}
            },
            worlds: {},
            settings: {
                soundVolume: 0.5,
                musicVolume: 0.5
            },
            statistics: {
                totalPlayTime: 0,
                totalBricksDestroyed: 0,
                totalBossesDefeated: 0
            }
        };
    }

    // Load save data from LocalStorage
    load(): SaveData {
        try {
            const savedString = localStorage.getItem(this.SAVE_KEY);
            if (!savedString) {
                console.log('No save found, creating new save');
                return this.createNewSave();
            }

            const savedData = JSON.parse(savedString) as SaveData;
            
            // Version check for future compatibility
            if (savedData.version !== this.CURRENT_VERSION) {
                console.log('Save version mismatch, migrating...');
                return this.migrateSave(savedData);
            }

            return savedData;
        } catch (error) {
            console.error('Failed to load save:', error);
            return this.createNewSave();
        }
    }

    // Save data to LocalStorage
    save(data: SaveData): boolean {
        try {
            localStorage.setItem(this.SAVE_KEY, JSON.stringify(data));
            console.log('Game saved successfully');
            return true;
        } catch (error) {
            console.error('Failed to save game:', error);
            return false;
        }
    }

    // Handle save migration for future versions
    private migrateSave(oldSave: any): SaveData {
        // Migrate from stage-based keys to world-based keys if needed
        try {
            const migrated: SaveData = {
                version: this.CURRENT_VERSION,
                player: {
                    gold: Number(oldSave?.player?.gold) || 0,
                    totalStars: Number(oldSave?.player?.totalStars) || 0,
                    highestWorldUnlocked: Number(oldSave?.player?.highestWorldUnlocked ?? oldSave?.player?.highestStageUnlocked ?? 1),
                    skillPoints: Number(oldSave?.player?.skillPoints) || 0,
                    unlockedSkills: typeof oldSave?.player?.unlockedSkills === 'object' && oldSave?.player?.unlockedSkills !== null ? oldSave.player.unlockedSkills : {},
                },
                worlds: {},
                settings: {
                    soundVolume: Number(oldSave?.settings?.soundVolume) || 0.5,
                    musicVolume: Number(oldSave?.settings?.musicVolume) || 0.5,
                },
                statistics: {
                    totalPlayTime: Number(oldSave?.statistics?.totalPlayTime) || 0,
                    totalBricksDestroyed: Number(oldSave?.statistics?.totalBricksDestroyed) || 0,
                    totalBossesDefeated: Number(oldSave?.statistics?.totalBossesDefeated) || 0,
                },
            };

            const oldStages = oldSave?.stages || oldSave?.worlds || {};
            if (oldStages && typeof oldStages === 'object') {
                for (const k of Object.keys(oldStages)) {
                    const s = oldStages[k];
                    migrated.worlds[Number(k)] = {
                        stars: Number(s?.stars) || 0,
                        bestScore: Number(s?.bestScore) || 0,
                        bestTime: Number(s?.bestTime) ?? Infinity,
                        completed: Boolean(s?.completed) || false,
                    };
                }
            }
            return migrated;
        } catch (e) {
            console.warn('Migration failed, creating new save');
            return this.createNewSave();
        }
    }

    // Utility methods for common operations
    updateWorldData(worldId: number, data: Partial<SaveData['worlds'][number]>): void {
        const save = this.load();
        if (!save.worlds[worldId]) {
            save.worlds[worldId] = {
                stars: 0,
                bestScore: 0,
                bestTime: Infinity,
                completed: false
            };
        }
        save.worlds[worldId] = { ...save.worlds[worldId], ...data };
        this.save(save);
    }

    addGold(amount: number): void {
        const save = this.load();
        save.player.gold += amount;
        this.save(save);
    }

    unlockNextWorld(worldId: number): void {
        const save = this.load();
        save.player.highestWorldUnlocked = Math.max(save.player.highestWorldUnlocked, worldId);
        this.save(save);
    }
}

export default SaveManager.getInstance();