uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform vec3 uLightDir;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vView;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

void main() {
  // fbm stretched along latitude = cloud bands
  float bands = fbm(vec2(vUv.x * 3.0 + uTime * 0.02, vUv.y * 9.0));
  vec3 color = mix(uColorA, uColorB, smoothstep(0.25, 0.75, bands));

  float storms = fbm(vUv * vec2(7.0, 15.0) + vec2(13.7, 5.1) + uTime * 0.01);
  color = mix(color, uColorC, smoothstep(0.62, 0.95, storms) * 0.55);

  vec3 n = normalize(vNormal);
  float light = clamp(dot(n, normalize(uLightDir)), 0.0, 1.0);
  color *= 0.22 + light;

  float rim = pow(1.0 - abs(dot(n, normalize(vView))), 2.5);
  color += rim * uColorC * 0.5;

  gl_FragColor = vec4(color, 1.0);
}
