'use client'

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import SpaceBackground from './SpaceBackground';
import CelestialBody from './CelestialBody';
import SpaceShip from './SpaceShip';

const SpaceScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SpaceBackground />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
        <CelestialBody position={[-5, 2, -5]} color="red" size={1} name="Mars" />
        <CelestialBody position={[5, -2, -10]} color="blue" size={1.5} name="Neptune" />
        <CelestialBody position={[0, 5, -15]} color="yellow" size={2} name="Sun" />
        <SpaceShip />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default SpaceScene;