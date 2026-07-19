# space-view

Single-page site about the universe. A procedural spiral galaxy rendered with
react-three-fiber, scroll-driven camera, and a few planets shaded in GLSL.

## Run

```bash
npm install
npm run dev
```

## Notes

- Shaders live in `components/three/shaders/*.glsl` and are imported as raw
  strings (webpack `asset/source`, see `next.config.ts`).
- Scroll and pointer positions go through `lib/scroll-state.ts` so the render
  loop never touches react state.
