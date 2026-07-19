"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-14 max-w-2xl md:mb-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-shadow mt-4 text-slate-400 md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
