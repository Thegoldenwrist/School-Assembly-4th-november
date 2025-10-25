
import React from 'react';
import Presentation from './components/Presentation';
import { SLIDES } from './constants';

const App: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-100 w-full h-screen font-sans text-gray-800 flex flex-col items-center justify-center overflow-hidden">
      <Presentation slides={SLIDES} />
    </main>
  );
};

export default App;
