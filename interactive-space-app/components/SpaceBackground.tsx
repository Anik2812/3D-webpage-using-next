import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const SpaceBackground = ({ count = 10000 }) => {
  const points = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    if (points.current) {
      points.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.2;
      points.current.rotation.y = Math.sin(clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3}>
      <PointMaterial transparent color="#ffffff" size={0.05} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
};

export default SpaceBackground;