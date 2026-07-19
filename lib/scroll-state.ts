// scroll / pointer values shared with the render loop.
// plain mutable object on purpose: useFrame reads it every frame
// and we don't want react re-renders on scroll.
export const spaceState = {
  scroll: 0,
  smoothScroll: 0,
  pointer: { x: 0, y: 0 },
};
