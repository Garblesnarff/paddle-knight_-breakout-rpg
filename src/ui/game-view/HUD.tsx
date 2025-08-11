import React from 'react';

export const HUD: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-800 to-slate-700 rounded-lg p-2 border-t-2 border-slate-600 border-b-2 border-slate-900 shadow-lg">
      {children}
    </div>
  );
};

export default HUD;


