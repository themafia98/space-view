"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { resources } from "@/lib/data";

export function Resources() {
  return (
    <section id="resources" className="relative scroll-mt-24 px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Resources"
          title="Go further"
          subtitle="Interactive maps, planetariums and other genuinely great space projects on the internet."
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {resources.map((resource, i) => (
            <motion.a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group block border-t border-white/10 pt-6"
            >
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                {resource.title}
                <FiArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                />
              </h3>
              <p className="text-shadow mt-2 text-sm leading-relaxed text-slate-400">
                {resource.description}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                {new URL(resource.url).hostname}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
