import * as THREE from "three";

interface PointData {
  position: number[];
  color: number[];
  scale: number;
  randomness?: number[];
  phase?: number;
}

function toGeometry(points: PointData[]) {
  const attr = (values: number[], size: number) =>
    new THREE.BufferAttribute(new Float32Array(values), size);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", attr(points.flatMap((p) => p.position), 3));
  geo.setAttribute("aColor", attr(points.flatMap((p) => p.color), 3));
  geo.setAttribute("aScale", attr(points.map((p) => p.scale), 1));
  if (points[0].randomness) {
    geo.setAttribute("aRandomness", attr(points.flatMap((p) => p.randomness!), 3));
  }
  if (points[0].phase !== undefined) {
    geo.setAttribute("aPhase", attr(points.map((p) => p.phase!), 1));
  }
  return geo;
}

const GALAXY_RADIUS = 5.5;

export function createGalaxyGeometry(count = 45000) {
  const inside = new THREE.Color("#f0abfc");
  const mid = new THREE.Color("#a78bfa");
  const outside = new THREE.Color("#3730a3");

  return toGeometry(
    Array.from({ length: count }, (_, i) => {
      const radius = Math.random() ** 1.4 * GALAXY_RADIUS;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;
      const spread = 0.42 * radius;
      const offset = () =>
        Math.random() ** 2.9 * (Math.random() < 0.5 ? 1 : -1) * spread;

      const t = radius / GALAXY_RADIUS;
      const color =
        t < 0.4
          ? inside.clone().lerp(mid, t / 0.4)
          : mid.clone().lerp(outside, (t - 0.4) / 0.6);

      return {
        position: [Math.cos(branchAngle) * radius, 0, Math.sin(branchAngle) * radius],
        randomness: [offset(), offset() * 0.45, offset()],
        color: color.toArray(),
        scale: 0.4 + Math.random() * 1.1,
      };
    })
  );
}

const STAR_COLORS = ["#ffffff", "#dbeafe", "#e9d5ff", "#fef3c7", "#c7d2fe"];

export function createStarsGeometry(count = 3200) {
  return toGeometry(
    Array.from({ length: count }, () => {
      // random direction pushed out to a far shell so stars stay behind everything
      const dir = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(26 + Math.random() * 44);

      return {
        position: dir.toArray(),
        color: new THREE.Color(
          STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
        ).toArray(),
        scale: 0.3 + Math.random() ** 2 * 1.5,
        phase: Math.random(),
      };
    })
  );
}

const NEBULA_COLORS = ["#7c3aed", "#4f46e5", "#c026d3", "#0ea5e9", "#6d28d9"];

export function createNebulaGeometry(count = 90) {
  return toGeometry(
    Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() ** 0.7 * 9;

      return {
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.4) * 3.2,
          Math.sin(angle) * radius - 2,
        ],
        color: new THREE.Color(
          NEBULA_COLORS[Math.floor(Math.random() * NEBULA_COLORS.length)]
        ).toArray(),
        scale: 0.5 + Math.random(),
        phase: Math.random(),
      };
    })
  );
}
