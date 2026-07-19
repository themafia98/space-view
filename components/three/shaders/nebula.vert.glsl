uniform float uTime;
uniform float uSize;

attribute float aScale;
attribute float aPhase;
attribute vec3 aColor;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec3 p = position;
  p.x += sin(uTime * 0.05 + aPhase * 6.2831) * 0.6;
  p.y += cos(uTime * 0.04 + aPhase * 4.71) * 0.35;

  vec4 viewPos = viewMatrix * modelMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * viewPos;
  gl_PointSize = uSize * aScale / -viewPos.z;

  vAlpha = 0.5 + 0.5 * sin(uTime * 0.12 + aPhase * 6.2831);
  vColor = aColor;
}
