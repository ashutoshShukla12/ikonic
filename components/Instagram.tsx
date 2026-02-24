"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Instagram as InstagramIcon } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Classic fade cut",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Precision scissor cut",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Beard shaping session",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Textured crop top",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Shop interior atmosphere",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    alt: "Barber tools artfully arranged",
  },
];

export default function Instagram() {
  const { ref, isInView, variants } = useScrollReveal(0.05);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-(--color-surface-dark)"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-3 text-center mb-10"
        >
          <motion.div
            variants={variants.fadeUp}
            className="inline-flex items-center gap-2"
          >
            <InstagramIcon className="h-5 w-5 text-[#c9a84c]" />
            <span
              className="text-xs font-medium tracking-[0.3em] text-(--color-accent) uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              @ikonicbarbershop
            </span>
          </motion.div>
          <motion.h2
            variants={variants.fadeUp}
            className="text-3xl font-bold text-(--color-inverse) sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Follow Our Work
          </motion.h2>
          <motion.p
            variants={variants.fadeUp}
            className="text-sm text-(--color-muted)"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Real cuts. Real clients. Real results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6"
        >
          {photos.map((photo) => (
            <motion.a
              key={photo.src}
              variants={variants.fadeUp}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstagramIcon className="h-6 w-6 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
