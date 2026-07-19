uniform float uTime;
uniform float uSize;

attribute float aScale;
attribute float aPhase;
attribute vec3 aColor;

varying vec3 vColor;
varying float vTwinkle;

void main() {
  vec4 viewPos = viewMatrix * modelMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * viewPos;
  gl_PointSize = uSize * aScale / -viewPos.z;

  vTwinkle = 0.65 + 0.35 * sin(uTime * (0.6 + aPhase * 0.8) + aPhase * 6.2831);
  vColor = aColor;
}
