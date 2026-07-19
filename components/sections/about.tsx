"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutItems } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="About"
          title="What's out there"
          subtitle="Four things the universe does at a scale that's hard to hold in your head."
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
          {aboutItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-white/10 pt-6"
            >
              <span className="text-sm text-violet-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-shadow mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
