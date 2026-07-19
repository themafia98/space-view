varying vec3 vColor;

void main() {
  float d = distance(gl_PointCoord, vec2(0.5));
  float strength = clamp(0.05 / max(d, 0.001) - 0.1, 0.0, 1.0);
  gl_FragColor = vec4(vColor * strength, strength);
}
