"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";

const images = [
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952510/1_m72l6w.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952510/2_gl2iyy.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952511/3_uwgn9x.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952511/4_ujmddz.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952511/5_wzyv0w.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952514/6_ouevkq.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952515/7_sebxlc.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952515/8_nwfpke.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952515/9_zpjdsz.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952518/10_benmlt.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952522/11_jlqimw.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952523/12_ejst2s.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952526/13_m0wntu.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952524/14_vvevxc.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952527/15_b3puyy.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952527/16_slo9ai.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952528/17_kv6ucq.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952531/18_baf01p.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952531/19_xv1gfh.jpg",
  "https://res.cloudinary.com/dv7cynuoz/image/upload/v1771952532/20_lzqiyc.jpg",
];

const PER_PAGE = 5;
const TOTAL_GROUPS = Math.ceil(images.length / PER_PAGE);
const INTERVAL = 4000;

export default function Gallery() {
  const { ref, isInView, variants } = useScrollReveal(0.08);
  const [group, setGroup] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setGroup((g) => (g + 1) % TOTAL_GROUPS);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > group ? 1 : -1);
    setGroup(i);
  };

  const slice = images.slice(group * PER_PAGE, group * PER_PAGE + PER_PAGE);

  return (
    <section
      id="gallery"
      className="py-24 lg:py-36 bg-(--color-surface-dark)"
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
            className="text-4xl font-bold text-(--color-inverse) sm:text-5xl lg:text-6xl"
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
              className="grid grid-cols-2 gap-2 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-2 h-[480px] lg:h-[540px]"
            >
              <div className="row-span-2 overflow-hidden group relative">
                <img
                  src={slice[0]}
                  alt="Gallery image"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {slice.slice(1).map((src, i) => (
                <div key={i} className="overflow-hidden group relative">
                  <img
                    src={src}
                    alt="Gallery image"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {Array.from({ length: TOTAL_GROUPS }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to group ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === group
                  ? "w-8 h-[3px] bg-[#c9a84c]"
                  : "w-[3px] h-[3px] bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
