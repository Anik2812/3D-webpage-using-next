import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import SpaceBackground from './SpaceBackground';
import CelestialBody from './CelestialBody';
import SpaceShip from './SpaceShip';
import Saturn from './Saturn';

const StarSystem = () => {
  const group = useRef<THREE.Group | undefined>();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0001;
    }
  });

  return (
    <group ref={group}>
      <CelestialBody position={[0, 0, 0]} color="yellow" size={10} name="Sun" rotationSpeed={0.001} info="The Sun is the star at the center of the Solar System." textureUrl="/sun.jpg" />
      <CelestialBody position={[30, 0, 0]} color="#E27B58" size={1} name="Mercury" rotationSpeed={0.004} info="Mercury is the smallest planet in the Solar System and the closest to the Sun." textureUrl="/mercury.jpg" />
      <CelestialBody position={[45, 1, 0]} color="#9F7928" size={1.5} name="Venus" rotationSpeed={0.003} info="Venus is the second planet from the Sun and is Earth's closest planetary neighbor." textureUrl="/venus.jpg" />
      <CelestialBody position={[60, -1, 0]} color="#4CA456" size={2} name="Earth" rotationSpeed={0.0025} info="Earth is the third planet from the Sun and the only astronomical object known to harbor life." textureUrl="/earth.jpg" />
      <CelestialBody position={[78, 2, 0]} color="#E27B58" size={1.5} name="Mars" rotationSpeed={0.002} info="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System." textureUrl="/mars.jpg" />
      <CelestialBody position={[120, -3, 0]} color="#E0A95E" size={7} name="Jupiter" rotationSpeed={0.0015} info="Jupiter is the fifth planet from the Sun and the largest in the Solar System." textureUrl="/jupiter.jpg" />
      <Saturn position={[165, 3, 0]} size={6} rotationSpeed={0.001} />
      <CelestialBody position={[210, -2, 0]} color="#9BB9D1" size={4} name="Uranus" rotationSpeed={0.0005} info="Uranus is the seventh planet from the Sun and the third-largest planetary radius in the Solar System." textureUrl="/uranus.jpg" />
      <CelestialBody position={[255, 1, 0]} color="#3E54E8" size={3.5} name="Neptune" rotationSpeed={0.0004} info="Neptune is the eighth and farthest-known Solar planet from the Sun." textureUrl="/neptune.jpg" />
    </group>
  );
};


const SpaceScene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 100, 300]} />
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <SpaceBackground />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
        <StarSystem />
        <SpaceShip />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default SpaceScene;