"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PlanetCanvas } from "@/components/three/planet-canvas";
import { SectionHeading } from "@/components/ui/section-heading";
import { planets, type PlanetInfo } from "@/lib/data";

function PlanetCard({ planet, index }: { planet: PlanetInfo; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  // don't mount the canvas until the card is close to the viewport
  const nearViewport = useInView(ref, { once: true, margin: "300px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/25"
    >
      <div className="h-56" aria-hidden="true">
        {nearViewport && (
          <PlanetCanvas
            colors={planet.colors}
            hasRing={planet.hasRing}
            hovered={hovered}
          />
        )}
      </div>

      <div className="p-7 pt-2">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold text-white">{planet.name}</h3>
          <span className="text-sm text-violet-300">{planet.type}</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-400">{planet.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {planet.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Planets() {
  return (
    <section id="planets" className="relative scroll-mt-24 px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Planets"
          title="Featured planets"
          subtitle="Three made-up worlds, shaded entirely in GLSL. Hover to spin them."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {planets.map((planet, i) => (
            <PlanetCard key={planet.name} planet={planet} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
