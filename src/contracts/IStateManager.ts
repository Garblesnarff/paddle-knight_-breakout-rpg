/**
 * State Manager Contract
 * Wraps access to global game state.
 */
export interface IStateManager<TState> {
  getState(): TState;
  setState(partial: Partial<TState>): void;
  subscribe(listener: (state: TState) => void): () => void;
}


