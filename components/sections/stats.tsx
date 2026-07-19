"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section id="statistics" className="relative scroll-mt-24 px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Statistics"
          title="The universe in numbers"
          subtitle="Best current estimates. Give or take a few billion."
        />

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-white/10 pt-6"
            >
              <div className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-violet-300">{stat.label}</p>
              <p className="text-shadow mt-1 text-sm text-slate-500">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
