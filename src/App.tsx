import { Canvas } from '@react-three/fiber';
import React from 'react';
import Earth from './components/Earth';
import StarryBackground from './components/StarryBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <main className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Canvas camera={{ position: [0, 0, 2.2], fov: 45 }}>
            <Earth />
          </Canvas>
        </div>
      </main>
    </div>
  );
}

export default App;