uniform vec3 uColor;

varying vec2 vUv;

void main() {
  float r = vUv.x;
  float bands = 0.55 + 0.45 * sin(r * 60.0);
  float alpha = smoothstep(0.0, 0.15, r) * smoothstep(1.0, 0.6, r) * 0.35 * bands;
  gl_FragColor = vec4(uColor, alpha);
}
