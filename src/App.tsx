import React from 'react';
import { GameContainer } from './components/GameContainer';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <GameContainer />
    </ErrorBoundary>
  );
};

export default App;
