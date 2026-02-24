"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Gift } from "lucide-react";

export default function GiftCards() {
  const { ref, isInView, variants } = useScrollReveal(0.1);

  return (
    <section
      id="gift-cards"
      className="py-24 lg:py-36 bg-(--color-bg)"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <motion.div
            variants={variants.staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-8"
          >
            <motion.div variants={variants.fadeUp} className="inline-flex">
              <Gift className="h-10 w-10 text-[#c9a84c]" strokeWidth={1} />
            </motion.div>
            <motion.span
              variants={variants.fadeUp}
              className="text-xs font-medium tracking-[0.3em] text-[#c9a84c] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Give the Gift of Style
            </motion.span>
            <motion.h2
              variants={variants.fadeUp}
              className="text-4xl font-bold text-(--color-primary) sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Gift Cards
            </motion.h2>
            <motion.p
              variants={variants.fadeUp}
              className="text-sm text-[#4a4a4a] leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Treat someone special to the Ikonic experience. Gift cards are
              available in any amount and can be redeemed for any of our
              services or products. The perfect present for anyone who deserves
              to look their best.
            </motion.p>
            <motion.div
              variants={variants.fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-(--color-primary) bg-(--color-primary) px-8 py-4 text-xs font-semibold tracking-[0.2em] text-(--color-inverse) uppercase transition-all duration-300 hover:bg-(--color-accent) hover:border-(--color-accent) hover:text-(--color-primary) cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Purchase a Gift Card
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={variants.slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-2 aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=80"
                alt="Gift card — premium barbershop experience"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=500&q=80"
                alt="Scissors and comb — barber tools"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=500&q=80"
                alt="Happy client after cut"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
