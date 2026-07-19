uniform float uTime;
uniform float uSize;

attribute float aScale;
attribute vec3 aRandomness;
attribute vec3 aColor;

varying vec3 vColor;

void main() {
  vec4 pos = modelMatrix * vec4(position, 1.0);

  // inner points orbit faster, this is what winds the arms up
  float angle = atan(pos.x, pos.z);
  float dist = length(pos.xz);
  angle += (1.0 / max(dist, 0.25)) * uTime * 0.15;
  pos.x = cos(angle) * dist;
  pos.z = sin(angle) * dist;
  pos.xyz += aRandomness;

  vec4 viewPos = viewMatrix * pos;
  gl_Position = projectionMatrix * viewPos;
  gl_PointSize = uSize * aScale / -viewPos.z;

  vColor = aColor;
}
