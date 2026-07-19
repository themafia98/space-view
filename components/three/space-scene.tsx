"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { spaceState } from "@/lib/scroll-state";

const Scene = dynamic(() => import("./scene"), { ssr: false });

export function SpaceScene() {
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      spaceState.scroll = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    };
    const onMove = (e: PointerEvent) => {
      spaceState.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      spaceState.pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Scene />
    </div>
  );
}
