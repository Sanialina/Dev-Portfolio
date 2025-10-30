import  { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const particlesCount = 5000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3);
    const colorOptions = [
      new THREE.Color('#a855f7'), // neon purple
      new THREE.Color('#ec4899'), // neon magenta
      new THREE.Color('#06b6d4'), // neon cyan
    ];
    
    for (let i = 0; i < particlesCount; i++) {
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return colors;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default ParticleField;