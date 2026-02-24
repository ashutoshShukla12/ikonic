"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";

const services = [
  {
    name: "Fade & Taper",
    description: "Precision skin, low, mid or high fades",
  },
  {
    name: "Classic Cut",
    description: "Scissor cut, point cut, or textured finish",
  },
  {
    name: "Beard Sculpt",
    description: "Shape, line up, hot towel & straight razor",
  },
  {
    name: "Colour & Toning",
    description: "Full colour, highlights, gloss, and toning",
  },
  {
    name: "Blowout & Styling",
    description: "Blow-dry with premium finishing products",
  },
  { name: "Kids Cut", description: "Relaxed cuts for children under 12" },
];

export default function Services() {
  const { ref, isInView, variants } = useScrollReveal(0.1);

  return (
    <section
      id="services"
      className="py-24 lg:py-36 bg-(--color-bg)"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          <motion.div
            variants={variants.slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80"
                  alt="Barber crafting a precision fade"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80"
                  alt="Close-up of a haircut"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80"
                  alt="Barber tools laid out"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={variants.staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-8"
            >
              <motion.span
                variants={variants.fadeUp}
                className="text-xs font-medium tracking-[0.3em] text-(--color-accent) uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                What We Offer
              </motion.span>
              <motion.h2
                variants={variants.fadeUp}
                className="text-4xl font-bold leading-tight text-(--color-primary) sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Cutting Edge Services
              </motion.h2>

              <motion.ul
                variants={variants.staggerContainer}
                className="mt-2 space-y-0"
              >
                {services.map((service) => (
                  <motion.li
                    key={service.name}
                    variants={variants.fadeUp}
                    className="group flex items-center justify-between border-b border-(--color-border) py-5 cursor-pointer transition-all duration-200 hover:border-(--color-accent)"
                  >
                    <div>
                      <p
                        className="text-base font-semibold text-(--color-primary) group-hover:text-(--color-accent) transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {service.name}
                      </p>
                      <p
                        className="mt-1 text-xs text-(--color-muted)"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {service.description}
                      </p>
                    </div>
                    <span className="text-(--color-accent) text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={variants.fadeUp}>
                <a
                  href="#contact"
                  className="inline-flex items-center border border-(--color-primary) px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-(--color-primary) uppercase transition-all duration-300 hover:bg-(--color-accent) hover:border-(--color-accent) hover:text-(--color-inverse) cursor-pointer"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Book a Service
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
