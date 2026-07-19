"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { timelineEvents } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Timeline() {
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section id="timeline" className="relative scroll-mt-24 px-6 py-24 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Timeline"
          title="A brief history of everything"
        />

        <ol ref={trackRef} className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-4 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
          />
          {/* the colored line grows as you scroll past the list */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute inset-y-0 left-4 w-px origin-top bg-violet-400 md:left-1/2 md:-translate-x-1/2"
          />

          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <li key={event.title} className="relative pb-14 pl-12 last:pb-0 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-1.5 -translate-x-1/2 md:left-1/2"
                >
                  <span className="block h-2.5 w-2.5 rounded-full bg-violet-400 ring-4 ring-void" />
                </span>

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "text-shadow md:w-[calc(50%-2.5rem)]",
                    isLeft ? "md:mr-auto md:text-right" : "md:ml-auto"
                  )}
                >
                  <span className="text-sm text-violet-400">{event.era}</span>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {event.description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
