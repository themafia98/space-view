"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
}

export function Counter({ value, decimals = 0, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} aria-label={`${value.toFixed(decimals)}${suffix}`}>
      {display}
      {suffix}
    </span>
  );
}
