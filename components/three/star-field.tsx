"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createStarsGeometry } from "./geometries";
import fragmentShader from "./shaders/stars.frag.glsl";
import vertexShader from "./shaders/stars.vert.glsl";

export function StarField() {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => createStarsGeometry(), []);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 18 * Math.min(window.devicePixelRatio, 1.75) },
    }),
    []
  );

  useFrame((state, delta) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    points.current!.rotation.y += delta * 0.004;
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
