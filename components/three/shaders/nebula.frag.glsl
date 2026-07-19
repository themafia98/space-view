varying vec3 vColor;
varying float vAlpha;

// one sprite is basically invisible, they only read as clouds stacked up
void main() {
  float d = distance(gl_PointCoord, vec2(0.5));
  float strength = pow(smoothstep(0.5, 0.05, d), 2.2) * (0.028 + vAlpha * 0.022);
  gl_FragColor = vec4(vColor, strength);
}
