varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vView;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  vView = -mvPos.xyz;
  gl_Position = projectionMatrix * mvPos;
}
