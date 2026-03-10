"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Instagram as InstagramIcon } from "lucide-react";

export default function Instagram() {
  const { ref, isInView, variants } = useScrollReveal(0.05);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-[#0a0a0a]"
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
              className="text-xs font-medium tracking-[0.3em] text-[#c9a84c] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              @ikonic_barbershop
            </span>
          </motion.div>
          <motion.h2
            variants={variants.fadeUp}
            className="text-3xl font-bold text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Follow Our Work
          </motion.h2>
          <motion.p
            variants={variants.fadeUp}
            className="text-sm text-[#6b6b6b]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Real cuts. Real clients. Real results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <motion.a
            variants={variants.fadeUp}
            href="https://www.instagram.com/ikonic_barbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-none border border-[#c9a84c] px-8 py-4 text-sm font-medium tracking-[0.2em] text-[#c9a84c] uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:text-black"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
          </motion.a>
          <motion.a
            variants={variants.fadeUp}
            href="https://www.fresha.com/a/ikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i/all-offer?menu=true&share=true&pId=2782095"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-none bg-[#c9a84c] border border-[#c9a84c] px-8 py-4 text-sm font-medium tracking-[0.2em] text-black uppercase transition-all duration-300 hover:bg-transparent hover:text-[#c9a84c]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
