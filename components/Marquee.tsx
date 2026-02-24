"use client";

import { motion } from "framer-motion";

const items = [
  "Haircut",
  "Fade",
  "Beard Sculpt",
  "Colour",
  "Blowout",
  "Gloss",
  "Tone",
  "Trim",
  "Hot Towel Shave",
  "Kids Cut",
];

const ticker = [...items, ...items, ...items];

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-[#c9a84c] py-4">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {ticker.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-sm font-semibold tracking-[0.25em] text-black uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item}
            <span className="ml-6 text-black/40">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
