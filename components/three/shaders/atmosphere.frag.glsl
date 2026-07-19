uniform vec3 uColor;
uniform float uIntensity;

varying vec3 vNormal;
varying vec3 vView;

// drawn on the back side of a slightly bigger sphere
void main() {
  float fresnel = pow(0.72 - dot(normalize(vNormal), normalize(vView)) * 0.5, 3.0);
  gl_FragColor = vec4(uColor, clamp(fresnel * uIntensity, 0.0, 1.0));
}
