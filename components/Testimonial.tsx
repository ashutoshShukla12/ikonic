"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Best fade I've ever had. The attention to detail is unreal — Marcus took his time and nailed exactly what I wanted. Ikonic is the only place I'll go from now on.",
    author: "James T.",
    location: "Google Review",
    rating: 5,
  },
  {
    quote:
      "I came in for a colour treatment and left absolutely blown away. The team is so professional and knowledgeable. The shop itself is stunning too.",
    author: "Priya M.",
    location: "Google Review",
    rating: 5,
  },
];

export default function Testimonial() {
  const { ref, isInView, variants } = useScrollReveal(0.1);

  return (
    <section
      className="relative py-24 lg:py-36 bg-(--color-bg) overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 50px, var(--color-border) 50px, var(--color-border) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, var(--color-border) 50px, var(--color-border) 51px)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-4 text-center mb-16"
        >
          <motion.span
            variants={variants.fadeUp}
            className="text-xs font-medium tracking-[0.3em] text-(--color-accent) uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Client Love
          </motion.span>
          <motion.h2
            variants={variants.fadeUp}
            className="text-4xl font-bold text-(--color-primary) sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.author}
              variants={variants.fadeUp}
              className="flex flex-col gap-6 border border-(--color-border) p-8 hover:border-(--color-accent)/30 transition-colors duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-(--color-accent) text-(--color-accent)"
                  />
                ))}
              </div>

              <blockquote
                className="text-base font-light leading-relaxed text-(--color-primary)/80 italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <footer className="mt-auto pt-4 border-t border-(--color-border)">
                <p
                  className="text-sm font-semibold text-(--color-primary)"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {review.author}
                </p>
                <p
                  className="text-xs text-(--color-muted) mt-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {review.location}
                </p>
              </footer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
