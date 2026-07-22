"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ToothMesh() {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.4;
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Crown */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.9, 0.7, 1.2, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.1}
          metalness={0.1}
          emissive="#0d9488"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Implant Root */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.4, 0.1, 1.6, 32]} />
        <meshStandardMaterial
          color="#94a3b8"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Titanium Thread Rings */}
      {[-0.2, -0.5, -0.8, -1.1].map((yPos, idx) => (
        <mesh key={idx} position={[0, yPos, 0]}>
          <torusGeometry args={[0.38 - idx * 0.05, 0.05, 16, 32]} />
          <meshStandardMaterial color="#0284c7" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

export function ToothModelViewer3D() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-teal-500/30 bg-slate-900/90 p-4 backdrop-blur-xl shadow-2xl">
      <div className="absolute left-4 top-4 z-10">
        <span className="rounded-full bg-teal-950 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-400 border border-teal-500/30">
          3D INTERACTIVE MESH
        </span>
        <h4 className="mt-1 text-sm font-bold text-white">Digital Implant & Crown Anatomy</h4>
      </div>

      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} className="h-full w-full">
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#34d399" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#0284c7" />
        <ToothMesh />
      </Canvas>
    </div>
  );
}
