"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
// ✅ useFrame inside a child of <Canvas>
const RotatingTorusKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[2, 0.6, 100, 16]} />
      <meshStandardMaterial color={"#ff6347"} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

// ✅ Main Hero Canvas Component
const HeroCanvas = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full z-5">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingTorusKnot />
      {"*/<OrbitControls />*/"}
    </Canvas>
  );
};

export default HeroCanvas;
