"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0C0C0A"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

function WireframeObject() {
  const ref = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.003;
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += mouse.x * 0.001;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.06;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshBasicMaterial
        color="#0C0C0A"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function GridPlane() {
  const ref = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.z = ((state.clock.elapsedTime * 0.08) % 1) * 2 - 1;
  });

  return (
    <gridHelper
      ref={ref}
      args={[20, 20, "#D8D4CB", "#D8D4CB"]}
      position={[0, -2.2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <WireframeObject />
      <ParticleField />
      <GridPlane />
    </Canvas>
  );
}
