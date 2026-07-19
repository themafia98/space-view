"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { spaceState } from "@/lib/scroll-state";
import { createGalaxyGeometry } from "./geometries";
import fragmentShader from "./shaders/galaxy.frag.glsl";
import vertexShader from "./shaders/galaxy.vert.glsl";

export function Galaxy() {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => createGalaxyGeometry(), []);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 52 * Math.min(window.devicePixelRatio, 1.75) },
    }),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    uniforms.uTime.value = t;
    // slow idle spin + a bit more than half a turn over the whole page scroll
    points.current!.rotation.y = t * 0.02 + spaceState.smoothScroll * Math.PI * 0.55;
  });

  return (
    <points ref={points} geometry={geometry} rotation={[-0.35, 0, 0.18]}>
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
