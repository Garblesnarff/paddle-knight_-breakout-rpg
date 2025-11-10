/**
 * UI State Types
 * User interface and game status types
 */

import { GameStatus } from './enums';

export interface UIState {
  gameStatus: GameStatus;
  selectedWorldId: number | null;
  selectedStageId: number | null;
}
