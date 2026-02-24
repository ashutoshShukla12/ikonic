"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";

const team = [
  {
    name: "Anish",
    role: "Barber",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  },
  {
    name: "Mohit",
    role: "Barber",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
  },
  {
    name: "Feroza",
    role: "Hair Stylist",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&q=80",
  },
  {
    name: "Nawra",
    role: "Hair Stylist",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80",
  },
];

export default function Team() {
  const { ref, isInView, variants } = useScrollReveal(0.1);

  return (
    <section
      id="team"
      className="py-24 lg:py-36 bg-[#0d0d0d]"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-4 text-center mb-16"
        >
          <motion.span
            variants={variants.fadeUp}
            className="text-xs font-medium tracking-[0.3em] text-[#c9a84c] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our People
          </motion.span>
          <motion.h2
            variants={variants.fadeUp}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet the Team
          </motion.h2>
          <motion.p
            variants={variants.fadeUp}
            className="mt-2 max-w-lg text-sm text-[#6b6b6b] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            A passionate crew of certified barbers and stylists united by one
            thing: making you look your absolute best.
          </motion.p>
        </motion.div>

        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={variants.fadeUp}
              className="group relative overflow-hidden"
            >
              <div className="aspect-3/4 overflow-hidden">
                <img
                  src={member.img}
                  alt={`${member.name} — ${member.role}`}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
                <p
                  className="font-bold text-white text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </p>
                <p
                  className="text-xs text-[#c9a84c] tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
