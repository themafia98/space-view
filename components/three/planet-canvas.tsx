"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetInfo } from "@/lib/data";
import atmosphereFrag from "./shaders/atmosphere.frag.glsl";
import planetFrag from "./shaders/planet.frag.glsl";
import planetVert from "./shaders/planet.vert.glsl";
import ringFrag from "./shaders/ring.frag.glsl";

interface Props {
  colors: PlanetInfo["colors"];
  hasRing: boolean;
  hovered: boolean;
}

function Planet({ colors, hasRing, hovered }: Props) {
  const group = useRef<THREE.Group>(null);
  const body = useRef<THREE.Mesh>(null);
  const speed = useRef(0.15);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color(colors.a) },
      uColorB: { value: new THREE.Color(colors.b) },
      uColorC: { value: new THREE.Color(colors.c) },
      uLightDir: { value: new THREE.Vector3(-1, 0.7, 1) },
    }),
    [colors]
  );

  const glowUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(colors.atmosphere) },
      uIntensity: { value: 0.85 },
    }),
    [colors]
  );

  const ringUniforms = useMemo(
    () => ({ uColor: { value: new THREE.Color(colors.atmosphere) } }),
    [colors]
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    uniforms.uTime.value = t;
    // spool the spin up while the card is hovered
    speed.current = THREE.MathUtils.damp(speed.current, hovered ? 1.1 : 0.15, 3.5, delta);
    body.current!.rotation.y += delta * speed.current;
    group.current!.position.y = Math.sin(t * 0.7) * 0.06;
  });

  return (
    <group ref={group} rotation={[0.18, 0, -0.12]}>
      <mesh ref={body}>
        <sphereGeometry args={[1, 48, 48]} />
        <shaderMaterial
          vertexShader={planetVert}
          fragmentShader={planetFrag}
          uniforms={uniforms}
        />
      </mesh>
      <mesh scale={1.1}>
        <sphereGeometry args={[1, 48, 48]} />
        <shaderMaterial
          vertexShader={planetVert}
          fragmentShader={atmosphereFrag}
          uniforms={glowUniforms}
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {hasRing && (
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <ringGeometry args={[1.35, 2.05, 96]} />
          <shaderMaterial
            vertexShader={planetVert}
            fragmentShader={ringFrag}
            uniforms={ringUniforms}
            transparent
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

export function PlanetCanvas(props: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <Planet {...props} />
    </Canvas>
  );
}
