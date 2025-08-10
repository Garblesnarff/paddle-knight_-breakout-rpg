// SaveManager.ts
export interface SaveData {
    version: string;  // For future save compatibility
    player: {
        gold: number;
        totalWorldStars: number;  // Renamed from totalStars
        highestWorldUnlocked: number;
        skillPoints: number;
        unlockedSkills: Record<string, number>;
    };
    worlds: {
        [worldId: number]: {
            stages: {
                [stageId: number]: {
                    stars: number;        // 0-3
                    bestScore: number;
                    bestTime: number;     // in milliseconds
                    completed: boolean;
                };
            };
            totalWorldStars: number;     // Total stars earned in this world (0-15)
            completedStages: number;     // Number of completed stages (0-5)
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
    private readonly CURRENT_VERSION = '1.1.0';  // Updated version for new structure

    private constructor() {}

    static getInstance(): SaveManager {
        if (!SaveManager.instance) {
            SaveManager.instance = new SaveManager();
        }
        return SaveManager.instance;
    }

    // Create a new save with default values
    createNewSave(): SaveData {
        const newSave = {
            version: this.CURRENT_VERSION,
            player: {
                gold: 0,
                totalWorldStars: 0,  // Renamed from totalStars
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
        console.log('SaveManager: Created new save data:', newSave);
        return newSave;
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

    // Migrate old save data to new format
    private migrateSave(oldSave: any): SaveData {
        console.log('Migrating save from version:', oldSave.version);
        
        const newSave = this.createNewSave();
        
        // Migrate player data
        if (oldSave.player) {
            newSave.player.gold = oldSave.player.gold || 0;
            newSave.player.skillPoints = oldSave.player.skillPoints || 0;
            newSave.player.unlockedSkills = oldSave.player.unlockedSkills || {};
            
            // Handle old stage vs world terminology
            if (oldSave.player.highestStageUnlocked) {
                newSave.player.highestWorldUnlocked = oldSave.player.highestStageUnlocked;
            } else if (oldSave.player.highestWorldUnlocked) {
                newSave.player.highestWorldUnlocked = oldSave.player.highestWorldUnlocked;
            }
            
            // Handle old totalStars vs totalWorldStars
            if (oldSave.player.totalStars) {
                newSave.player.totalWorldStars = oldSave.player.totalStars;
            } else if (oldSave.player.totalWorldStars) {
                newSave.player.totalWorldStars = oldSave.player.totalWorldStars;
            }
        }
        
        // Migrate world/stage data
        if (oldSave.worlds) {
            // New format with stages
            Object.keys(oldSave.worlds).forEach(worldIdStr => {
                const worldId = parseInt(worldIdStr);
                const oldWorldData = oldSave.worlds[worldId];
                
                if (oldWorldData.stages) {
                    // Already in new format
                    newSave.worlds[worldId] = oldWorldData;
                } else {
                    // Old format - convert to new structure
                    newSave.worlds[worldId] = {
                        stages: {},
                        totalWorldStars: 0,
                        completedStages: 0
                    };
                    
                    // Convert old stage data to new format
                    if (oldWorldData.stars !== undefined) {
                        // This was the old single-stage-per-world format
                        newSave.worlds[worldId].stages[worldId] = {
                            stars: oldWorldData.stars,
                            bestScore: oldWorldData.bestScore || 0,
                            bestTime: oldWorldData.bestTime || 0,
                            completed: oldWorldData.completed || false
                        };
                        
                        if (oldWorldData.completed) {
                            newSave.worlds[worldId].completedStages = 1;
                            newSave.worlds[worldId].totalWorldStars = oldWorldData.stars;
                        }
                    }
                }
            });
        } else if (oldSave.stages) {
            // Very old format - convert stages to worlds
            Object.keys(oldSave.stages).forEach(stageIdStr => {
                const stageId = parseInt(stageIdStr);
                const oldStageData = oldSave.stages[stageId];
                
                // Determine world number based on stage ID
                const worldId = stageId <= 5 ? 1 : 2;
                
                if (!newSave.worlds[worldId]) {
                    newSave.worlds[worldId] = {
                        stages: {},
                        totalWorldStars: 0,
                        completedStages: 0
                    };
                }
                
                newSave.worlds[worldId].stages[stageId] = {
                    stars: oldStageData.stars || 0,
                    bestScore: oldStageData.bestScore || 0,
                    bestTime: oldStageData.bestTime || 0,
                    completed: oldStageData.completed || false
                };
                
                if (oldStageData.completed) {
                    newSave.worlds[worldId].completedStages++;
                    newSave.worlds[worldId].totalWorldStars += oldStageData.stars || 0;
                }
            });
        }
        
        // Migrate other data
        if (oldSave.settings) {
            newSave.settings = { ...newSave.settings, ...oldSave.settings };
        }
        
        if (oldSave.statistics) {
            newSave.statistics = { ...newSave.statistics, ...oldSave.statistics };
        }
        
        // Recalculate totals
        this.recalculateWorldTotals(newSave);
        
        console.log('Save migration completed:', newSave);
        return newSave;
    }

    // Update stage data for a specific world and stage
    updateStageData(worldId: number, stageId: number, data: Partial<SaveData['worlds'][number]['stages'][number]>): void {
        const saveData = this.load();
        
        if (!saveData.worlds[worldId]) {
            saveData.worlds[worldId] = {
                stages: {},
                totalWorldStars: 0,
                completedStages: 0
            };
        }
        
        if (!saveData.worlds[worldId].stages[stageId]) {
            saveData.worlds[worldId].stages[stageId] = {
                stars: 0,
                bestScore: 0,
                bestTime: 0,
                completed: false
            };
        }
        
        // Update the stage data
        saveData.worlds[worldId].stages[stageId] = {
            ...saveData.worlds[worldId].stages[stageId],
            ...data
        };
        
        // Recalculate world totals
        this.recalculateWorldTotals(saveData);
        
        // Save the updated data
        this.save(saveData);
    }

    // Update world data (legacy method for backward compatibility)
    updateWorldData(worldId: number, data: Partial<SaveData['worlds'][number]>): void {
        const saveData = this.load();
        
        if (!saveData.worlds[worldId]) {
            saveData.worlds[worldId] = {
                stages: {},
                totalWorldStars: 0,
                completedStages: 0
            };
        }
        
        // Update the world data
        saveData.worlds[worldId] = {
            ...saveData.worlds[worldId],
            ...data
        };
        
        // Recalculate world totals
        this.recalculateWorldTotals(saveData);
        
        // Save the updated data
        this.save(saveData);
    }

    // Recalculate totals for all worlds
    private recalculateWorldTotals(saveData: SaveData): void {
        let totalWorldStars = 0;
        
        Object.keys(saveData.worlds).forEach(worldIdStr => {
            const worldId = parseInt(worldIdStr);
            const world = saveData.worlds[worldId];
            
            let worldStars = 0;
            let completedStages = 0;
            
            Object.values(world.stages).forEach(stage => {
                worldStars += stage.stars;
                if (stage.completed) completedStages++;
            });
            
            world.totalWorldStars = worldStars;
            world.completedStages = completedStages;
            
            totalWorldStars += worldStars;
        });
        
        saveData.player.totalWorldStars = totalWorldStars;
    }

    // Unlock the next world
    unlockNextWorld(worldId: number): void {
        const saveData = this.load();
        if (worldId > saveData.player.highestWorldUnlocked) {
            saveData.player.highestWorldUnlocked = worldId;
            this.save(saveData);
        }
    }

    // Add gold to the player
    addGold(amount: number): void {
        const saveData = this.load();
        saveData.player.gold += amount;
        this.save(saveData);
    }

    // Get world progress summary
    getWorldProgress(worldId: number): { earned: number; total: number; completed: number } {
        const saveData = this.load();
        const world = saveData.worlds[worldId];
        
        if (!world) {
            return { earned: 0, total: 15, completed: 0 }; // 5 stages * 3 stars
        }
        
        return {
            earned: world.totalWorldStars,
            total: 15, // 5 stages * 3 stars
            completed: world.completedStages
        };
    }
}

export default SaveManager.getInstance();