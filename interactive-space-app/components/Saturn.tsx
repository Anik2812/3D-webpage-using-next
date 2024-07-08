import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

interface SaturnProps {
  position: [number, number, number];
  size: number;
  rotationSpeed: number;
}

const Saturn: React.FC<SaturnProps> = ({ position, size, rotationSpeed }) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const saturnTexture = new TextureLoader().load('/saturn.jpg');
  const ringTexture = new TextureLoader().load('/saturn_rings.png');

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Saturn's body */}
      <mesh>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial map={saturnTexture} />
      </mesh>

      {/* Saturn's rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[size * 1.2, size * 2, 64]} />
        <meshBasicMaterial map={ringTexture} side={THREE.DoubleSide} transparent={true} opacity={0.8} />
      </mesh>
    </group>
  );
};

export default Saturn;