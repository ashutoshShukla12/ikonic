"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";

import Link from "next/link";
import { galleryImages as images } from "@/lib/gallery-images";

const PER_PAGE = 2;
const TOTAL_GROUPS = Math.ceil(images.length / PER_PAGE);
const INTERVAL = 4000;

export default function Gallery() {
  const { ref, isInView, variants } = useScrollReveal(0.08);
  const [group, setGroup] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setGroup((group + 1) % TOTAL_GROUPS);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [group]);

  const goTo = (i: number) => {
    setDirection(i > group ? 1 : -1);
    setGroup(i);
  };

  const slice = images.slice(group * PER_PAGE, group * PER_PAGE + PER_PAGE);

  return (
    <section
      id="gallery"
      className="py-24 lg:py-36 bg-[#0a0a0a]"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 flex flex-col items-center gap-3 text-center"
        >
          <motion.span
            variants={variants.fadeUp}
            className="text-xs font-medium tracking-[0.35em] text-[#c9a84c] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Work
          </motion.span>
          <motion.h2
            variants={variants.fadeUp}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Craft Behind
            <br />
            <em className="font-normal">Every Cut</em>
          </motion.h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={group}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full grid grid-cols-2 gap-2 lg:gap-4 h-[30vh] md:h-[50vh] lg:h-[70vh] overflow-hidden"
            >
              {slice.map((src, i) => {
                const globalIndex = group * PER_PAGE + i;
                return (
                  <Link
                    key={i}
                    href={`/gallery?img=${globalIndex}`}
                    className="flex justify-center items-center overflow-hidden group relative"
                  >
                    <img
                      src={src}
                      alt={`Gallery image ${globalIndex + 1}`}
                      className="h-full w-auto object-contain transition-transform duration-700 lg:group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span
                        className="opacity-0 lg:group-hover:opacity-100 text-white tracking-widest text-xs uppercase font-bold transition-opacity duration-500 delay-100"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        View Gallery
                      </span>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: TOTAL_GROUPS }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to group ${i + 1}`}
              className="p-2 cursor-pointer group"
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  i === group
                    ? "w-8 h-1.5 bg-[#c9a84c]"
                    : "w-2 h-1.5 bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
