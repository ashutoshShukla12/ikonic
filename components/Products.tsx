"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Scissors } from "lucide-react";

export default function Products() {
  const { ref, isInView, variants } = useScrollReveal(0.1);

  return (
    <section
      className="relative py-32 lg:py-44 bg-[#f5f3ef] overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,#0a0a0a 60px,#0a0a0a 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#0a0a0a 60px,#0a0a0a 61px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-8"
        >
          <motion.div
            variants={variants.fadeUp}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center justify-center w-16 h-16 border border-[#c9a84c]/40 rounded-full bg-white shadow-sm">
              <Scissors className="h-6 w-6 text-[#c9a84c]" strokeWidth={1.5} />
            </div>

            <span
              className="text-xs font-medium tracking-[0.35em] text-[#c9a84c] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Coming Soon
            </span>
          </motion.div>

          <motion.div
            variants={variants.fadeUp}
            className="flex flex-col gap-4"
          >
            <h2
              className="text-5xl font-bold leading-tight text-[#0a0a0a] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Premium
              <br />
              <em className="font-normal">Grooming</em> Products
            </h2>
            <p
              className="mx-auto max-w-md text-sm leading-relaxed text-[#6b6b6b]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We&rsquo;re curating a selection of the same professional-grade
              products used daily in our shop. Available in-store and online —
              launching soon.
            </p>
          </motion.div>

          <motion.div variants={variants.fadeUp} className="w-full max-w-sm">
            <div className="flex border border-[#c9a84c]/40 overflow-hidden bg-white shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3.5 text-sm text-[#0a0a0a] placeholder-[#b0ada7] outline-none bg-transparent"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <button
                className="px-5 bg-[#0a0a0a] text-white text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 hover:bg-[#c9a84c] hover:text-black"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Notify Me
              </button>
            </div>
            <p
              className="mt-3 text-[0.65rem] tracking-[0.15em] text-[#b0ada7] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Be first to know when we launch
            </p>
          </motion.div>

          <motion.div
            variants={variants.fadeUp}
            className="grid grid-cols-3 gap-px w-full max-w-xs border border-[#e0ddd7] overflow-hidden bg-[#e0ddd7]"
          >
            {["Pomades", "Serums", "Beard Care"].map((cat) => (
              <div
                key={cat}
                className="bg-[#f5f3ef] px-4 py-5 flex flex-col items-center gap-1.5"
              >
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]/40" />
                <span
                  className="text-[0.65rem] font-medium tracking-[0.2em] text-[#6b6b6b] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cat}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
