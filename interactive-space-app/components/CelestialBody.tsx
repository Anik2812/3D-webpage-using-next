import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const CelestialBody = ({ position, color, size, name }: { position: [number, number, number]; color: string; size: number; name: string }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <group position={new THREE.Vector3(...position)}>
      <mesh
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : color} />
      </mesh>
      <Text
        position={[0, size + 0.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

export default CelestialBody;