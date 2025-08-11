
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RouterApp from './src/ui/RouterApp';
import { GameErrorBoundary } from './src/core/debug/ErrorBoundary';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
const useNewApp = import.meta.env.VITE_USE_NEW_APP === 'true';
root.render(
  <React.StrictMode>
    <GameErrorBoundary>
      {useNewApp ? <RouterApp /> : <App />}
    </GameErrorBoundary>
  </React.StrictMode>
);
