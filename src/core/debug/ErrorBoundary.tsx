import React from 'react';
import { GameLogger } from './Logger';

type ErrorBoundaryState = { hasError: boolean };

export class GameErrorBoundary extends React.Component<React.PropsWithChildren<unknown>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<unknown>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    GameLogger.error('React error boundary triggered', error);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh', background: '#0f172a', color: '#e2e8f0' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 24, marginBottom: 12 }}>Something went wrong</h1>
            <p>Try reloading the page. If the issue persists, please report the steps to reproduce.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}


