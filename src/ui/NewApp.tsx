import React from 'react';
import { GameRouter } from './GameRouter';

const NewApp: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <GameRouter />
    </div>
  );
};

export default NewApp;


