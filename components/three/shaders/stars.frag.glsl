varying vec3 vColor;
varying float vTwinkle;

void main() {
  float d = distance(gl_PointCoord, vec2(0.5));
  float strength = pow(smoothstep(0.5, 0.0, d), 3.0) * vTwinkle;
  gl_FragColor = vec4(vColor * strength, strength);
}
