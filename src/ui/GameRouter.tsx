import React from 'react';
import { GameStatus } from '@/types';
import { useGameStore } from '@/src/core/state/gameStore';
import { StartScreen } from '@/components/StartScreen';
import { WorldSelector } from '@/components/WorldSelector';
import { StageSelector } from '@/components/StageSelector';
import GameView from '@/src/ui/game-view/GameView';

const LoadingScreen = () => <div className="text-white">Loading...</div>;

export const GameRouter: React.FC = () => {
  const { ui, setGameStatus, selectWorld, selectStage } = useGameStore((s) => ({
    ui: s.ui,
    setGameStatus: s.setGameStatus,
    selectWorld: s.selectWorld,
    selectStage: s.selectStage,
  }));

  switch (ui.gameStatus) {
    case GameStatus.Start:
      return <StartScreen onStart={() => setGameStatus(GameStatus.WorldSelect)} />;
    case GameStatus.WorldSelect:
      return (
        <WorldSelector
          onSelectWorld={(worldId: number) => {
            selectWorld(worldId);
            setGameStatus(GameStatus.StageSelect);
          }}
          onBack={() => setGameStatus(GameStatus.Start)}
        />
      );
    case GameStatus.StageSelect:
      return (
        <StageSelector
          worldId={ui.selectedWorldId ?? 1}
          onSelectStage={(stageId: number) => {
            selectStage(stageId);
            setGameStatus(GameStatus.Playing);
          }}
          onBack={() => setGameStatus(GameStatus.WorldSelect)}
        />
      );
    case GameStatus.Playing:
      return <GameView />;
    default:
      return <LoadingScreen />;
  }
};

export default GameRouter;


