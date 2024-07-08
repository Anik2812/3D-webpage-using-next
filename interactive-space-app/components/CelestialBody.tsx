import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

interface CelestialBodyProps {
  position: [number, number, number];
  color: string;
  size: number;
  name: string;
  rotationSpeed: number;
  info: string;
  textureUrl?: string;
}

const CelestialBody: React.FC<CelestialBodyProps> = ({ position, color, size, name, rotationSpeed, info, textureUrl }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const texture = textureUrl ? new THREE.TextureLoader().load(textureUrl) : null;

  useFrame((state) => {
    mesh.current.rotation.y += rotationSpeed;
  });

  return (
    <group position={position}>
      <mesh
        ref={mesh}
        scale={active ? 1.2 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial map={texture} color={texture ? 'white' : (hovered ? 'hotpink' : color)} />
      </mesh>
      <Text
        position={[0, size + 1, 0]}
        fontSize={1.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      {active && (
        <Html distanceFactor={15}>
          <div className="bg-black bg-opacity-75 text-white p-6 rounded-lg" style={{ width: '300px' }}>
            <h3 className="text-2xl font-bold mb-3">{name}</h3>
            <p className="text-lg">{info}</p>
          </div>
        </Html>
      )}
    </group>
  );
};

export default CelestialBody;