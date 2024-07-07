import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SpaceBackground from './SpaceBackground';

const SpaceScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <SpaceBackground />
      </Suspense>
    </Canvas>
  );
};

export default SpaceScene;