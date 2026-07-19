"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNebulaGeometry } from "./geometries";
import fragmentShader from "./shaders/nebula.frag.glsl";
import vertexShader from "./shaders/nebula.vert.glsl";

export function Nebula() {
  const geometry = useMemo(() => createNebulaGeometry(), []);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 900 * Math.min(window.devicePixelRatio, 1.75) },
    }),
    []
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <points geometry={geometry}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
