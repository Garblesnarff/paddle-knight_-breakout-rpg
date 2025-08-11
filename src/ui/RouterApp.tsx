import React from 'react';
import GameProvider from './GameProvider';
import { GameErrorBoundary } from '@/src/core/debug/ErrorBoundary';
import { GameRouter } from './GameRouter';

const RouterApp: React.FC = () => (
  <GameProvider>
    <GameErrorBoundary>
      <GameRouter />
    </GameErrorBoundary>
  </GameProvider>
);

export default RouterApp;


