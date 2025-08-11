import { create } from 'zustand';
import { GameStatus } from '@/types';

export interface UIState {
  gameStatus: GameStatus;
  selectedWorldId: number | null;
  selectedStageId: number | null;
}

export interface GameStore {
  ui: UIState;
  setGameStatus: (status: GameStatus) => void;
  selectWorld: (worldId: number) => void;
  selectStage: (stageId: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  ui: {
    gameStatus: GameStatus.Start,
    selectedWorldId: null,
    selectedStageId: null,
  },
  setGameStatus: (status: GameStatus) => set((state) => ({ ui: { ...state.ui, gameStatus: status } })),
  selectWorld: (worldId: number) => set((state) => ({ ui: { ...state.ui, selectedWorldId: worldId } })),
  selectStage: (stageId: number) => set((state) => ({ ui: { ...state.ui, selectedStageId: stageId } })),
}));


