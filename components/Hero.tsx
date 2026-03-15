"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const DESKTOP_VIDEO_URL =
  "https://yomwxud9o7bg1yoc.public.blob.vercel-storage.com/hero-bg.mp4";
const MOBILE_VIDEO_URL =
  "https://yomwxud9o7bg1yoc.public.blob.vercel-storage.com/hero_mobile.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
        src={DESKTOP_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover block md:hidden"
        src={MOBILE_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xs font-medium uppercase text-[#c9a84c]"
          style={{ fontFamily: "var(--font-body)", letterSpacing: "0.35em" }}
        >
          Premium Grooming Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-6xl font-black leading-none tracking-tight text-white sm:text-8xl lg:text-[9rem] xl:text-[11rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          IKONIC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="max-w-sm text-sm font-light tracking-[0.15em] text-white/70 uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Where Precision Meets Style
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-4 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 border border-[#c9a84c] bg-[#c9a84c] px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-black uppercase transition-all duration-300 hover:bg-transparent hover:text-[#c9a84c]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Services
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-white/30 px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-white/80 uppercase transition-all duration-300 hover:border-white hover:text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.3em] text-white/40 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
