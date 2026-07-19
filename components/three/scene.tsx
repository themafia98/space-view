"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { MathUtils, Vector3 } from "three";
import { spaceState } from "@/lib/scroll-state";
import { Galaxy } from "./galaxy";
import { HeroPlanets } from "./hero-planets";
import { Nebula } from "./nebula";
import { StarField } from "./star-field";

const lookTarget = new Vector3();

// camera starts in front of the galaxy, then rises and pushes through it on scroll
function Rig() {
  useFrame((state, delta) => {
    spaceState.smoothScroll = MathUtils.damp(
      spaceState.smoothScroll,
      spaceState.scroll,
      2.5,
      delta
    );
    const p = spaceState.smoothScroll;
    const t = state.clock.elapsedTime;

    state.camera.position.set(
      Math.sin(p * Math.PI * 0.6) * 1.5 +
        Math.sin(t * 0.15) * 0.18 +
        spaceState.pointer.x * 0.45,
      1.2 + p * 4.2 - spaceState.pointer.y * 0.3,
      7 - p * 5.1
    );
    state.camera.lookAt(lookTarget.set(0, p * 0.6, 0));
  });
  return null;
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 7], fov: 55, near: 0.1, far: 200 }}
      dpr={[1, 1.75]}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: false }}
    >
      <color attach="background" args={["#030014"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[-4, 3, 5]} intensity={1.6} color="#c4b5fd" />
      <Rig />
      <StarField />
      <Nebula />
      <Galaxy />
      <HeroPlanets />
      <EffectComposer multisampling={0}>
        <Bloom
          mipmapBlur
          intensity={1.15}
          luminanceThreshold={0.12}
          luminanceSmoothing={0.35}
          radius={0.8}
        />
        <Vignette eskil={false} offset={0.22} darkness={0.72} />
      </EffectComposer>
    </Canvas>
  );
}
