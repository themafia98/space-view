"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import atmosphereFrag from "./shaders/atmosphere.frag.glsl";
import planetFrag from "./shaders/planet.frag.glsl";
import planetVert from "./shaders/planet.vert.glsl";
import ringFrag from "./shaders/ring.frag.glsl";

export function HeroPlanets() {
  const giant = useRef<THREE.Group>(null);
  const giantBody = useRef<THREE.Mesh>(null);
  const rocky = useRef<THREE.Group>(null);
  const rockyBody = useRef<THREE.Mesh>(null);

  const giantUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color("#2e1065") },
      uColorB: { value: new THREE.Color("#8b5cf6") },
      uColorC: { value: new THREE.Color("#f0abfc") },
      uLightDir: { value: new THREE.Vector3(-1, 0.6, 0.9) },
    }),
    []
  );

  const giantGlow = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#a78bfa") },
      uIntensity: { value: 1.4 },
    }),
    []
  );

  const rockyGlow = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#7dd3fc") },
      uIntensity: { value: 0.75 },
    }),
    []
  );

  const ringUniforms = useMemo(
    () => ({ uColor: { value: new THREE.Color("#c4b5fd") } }),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    giantUniforms.uTime.value = t;
    giant.current!.position.y = 0.9 + Math.sin(t * 0.4) * 0.14;
    giantBody.current!.rotation.y = t * 0.06;
    rocky.current!.position.y = -0.7 + Math.sin(t * 0.55 + 2.1) * 0.1;
    rockyBody.current!.rotation.y = t * 0.1;
  });

  return (
    <>
      <group ref={giant} position={[3.4, 0.9, 2.2]} rotation={[0.15, 0, -0.18]}>
        <mesh ref={giantBody}>
          <sphereGeometry args={[0.62, 48, 48]} />
          <shaderMaterial
            vertexShader={planetVert}
            fragmentShader={planetFrag}
            uniforms={giantUniforms}
          />
        </mesh>
        <mesh scale={1.18}>
          <sphereGeometry args={[0.62, 48, 48]} />
          <shaderMaterial
            vertexShader={planetVert}
            fragmentShader={atmosphereFrag}
            uniforms={giantGlow}
            transparent
            depthWrite={false}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2.25, 0, 0]}>
          <ringGeometry args={[0.85, 1.35, 96]} />
          <shaderMaterial
            vertexShader={planetVert}
            fragmentShader={ringFrag}
            uniforms={ringUniforms}
            transparent
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      <group ref={rocky} position={[-3.1, -0.7, 2.8]}>
        <mesh ref={rockyBody}>
          <sphereGeometry args={[0.3, 40, 40]} />
          <meshStandardMaterial
            color="#94a3b8"
            roughness={0.9}
            metalness={0.1}
            emissive="#1e3a5f"
            emissiveIntensity={0.35}
          />
        </mesh>
        <mesh scale={1.1}>
          <sphereGeometry args={[0.3, 40, 40]} />
          <shaderMaterial
            vertexShader={planetVert}
            fragmentShader={atmosphereFrag}
            uniforms={rockyGlow}
            transparent
            depthWrite={false}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </>
  );
}
