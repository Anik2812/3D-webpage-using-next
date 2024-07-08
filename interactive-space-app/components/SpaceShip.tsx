import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGesture } from 'react-use-gesture';
import * as THREE from 'three';

const SpaceShip = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useGesture({
    onMove: ({ xy: [x, y] }) => {
      if (mesh.current) {
        mesh.current.position.x = (x - size.width / 2) / aspect;
        mesh.current.position.y = -(y - size.height / 2) / aspect;
      }
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { onMouseMove } = bind() as any;
      window.addEventListener('mousemove', onMouseMove);
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, [bind]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -5]}>
      <coneGeometry args={[0.5, 1, 32]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
};

export default SpaceShip;