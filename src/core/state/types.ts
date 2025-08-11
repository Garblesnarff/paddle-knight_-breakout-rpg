import { GameStatus } from '@/types';

export interface UIState {
  gameStatus: GameStatus;
  selectedWorldId: number | null;
  selectedStageId: number | null;
}

export interface RootState {
  ui: UIState;
}


