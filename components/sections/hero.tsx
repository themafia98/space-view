"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-6"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Explore
          <span className="mt-2 block text-violet-300">The Infinite Universe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-shadow mx-auto mt-6 max-w-xl text-slate-400 md:text-lg"
        >
          Discover galaxies, stars and cosmic phenomena through immersive
          interactive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#about"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-slate-200"
          >
            Explore Space
          </a>
          <a
            href="#planets"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
          >
            Featured Planets
          </a>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        ↓
      </div>
    </section>
  );
}
