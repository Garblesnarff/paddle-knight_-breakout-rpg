// SaveManager.ts
export interface SaveData {
    version: string;  // For future save compatibility
    player: {
        gold: number;
        totalStars: number;
        highestStageUnlocked: number;
        skillPoints: number;
        unlockedSkills: Record<string, number>;
    };
    stages: {
        [stageId: number]: {
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
                highestStageUnlocked: 1,
                skillPoints: 0,
                unlockedSkills: {}
            },
            stages: {},
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
        // For now, just return a new save
        // In the future, you'd convert old save formats here
        console.warn('Save migration not implemented, creating new save');
        return this.createNewSave();
    }

    // Utility methods for common operations
    updateStageData(stageId: number, data: Partial<SaveData['stages'][number]>): void {
        const save = this.load();
        if (!save.stages[stageId]) {
            save.stages[stageId] = {
                stars: 0,
                bestScore: 0,
                bestTime: Infinity,
                completed: false
            };
        }
        save.stages[stageId] = { ...save.stages[stageId], ...data };
        this.save(save);
    }

    addGold(amount: number): void {
        const save = this.load();
        save.player.gold += amount;
        this.save(save);
    }

    unlockNextStage(stageId: number): void {
        const save = this.load();
        save.player.highestStageUnlocked = Math.max(save.player.highestStageUnlocked, stageId);
        this.save(save);
    }
}

export default SaveManager.getInstance();