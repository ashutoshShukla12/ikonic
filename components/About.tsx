/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  const { ref, isInView, variants } = useScrollReveal();
  const [activeImage, setActiveImage] = useState<number | null>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 1 ? 2 : 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-24 lg:py-36 bg-[#f5f3ef]"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div
            variants={variants.staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-8"
          >
            <motion.span
              variants={variants.fadeUp}
              className="text-xs font-medium tracking-[0.3em] text-[#c9a84c] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About Ikonic
            </motion.span>

            <motion.h2
              variants={variants.fadeUp}
              className="text-4xl font-bold leading-tight text-[#0a0a0a] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A specialised cuts &amp; colour studio redefining hair excellence.
            </motion.h2>

            <motion.div
              variants={variants.staggerContainer}
              className="space-y-6 text-[#4a4a4a] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <motion.p
                variants={variants.fadeUp}
                className="text-lg md:text-xl font-medium text-black/80 border-l-2 border-[#c9a84c] pl-4 lg:pl-6"
              >
                At Ikonic BarberShop, we don&apos;t just cut hair—we craft
                identities. Our team of skilled barbers and stylists bring
                precision, passion, and personality to every appointment.
              </motion.p>
              <motion.p
                variants={variants.fadeUp}
                className="text-base md:text-lg pl-4 lg:pl-6"
              >
                From classic fades and modern textured cuts to full colour
                transformations and beard sculpting, we offer a complete
                grooming experience rooted in technique and elevated by
                artistry.
              </motion.p>
            </motion.div>

            <motion.div
              variants={variants.fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-[#0a0a0a] bg-[#0a0a0a] px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-black cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={variants.slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col mt-12 lg:mt-0 relative"
          >
            {/* Horizontal Background Image */}
            <div
              className={`w-[90%] md:w-[85%] aspect-[4/3] overflow-hidden self-start rounded-sm shadow-md transition-all duration-500 cursor-pointer ${
                activeImage === 1
                  ? "z-30 shadow-2xl scale-105"
                  : "z-10 relative"
              }`}
              onClick={() => setActiveImage(activeImage === 1 ? null : 1)}
              onMouseEnter={() => setActiveImage(1)}
              onMouseLeave={() => setActiveImage(null)}
              style={{ transformOrigin: "top left" }}
            >
              <img
                src="https://res.cloudinary.com/dv7cynuoz/image/upload/v1772759046/about_us1_r8scwx.jpg"
                alt="Ikonic BarberShop Shop"
                className={`h-full w-full object-cover transition-transform duration-700 ${activeImage === 1 ? "scale-100" : "hover:scale-105"}`}
              />
            </div>

            {/* Vertical Foreground Image */}
            <div
              className={`w-[75%] sm:w-[60%] md:w-[55%] aspect-3/4 overflow-hidden border-8 md:border-12 border-[#f5f3ef] shadow-2xl rounded-sm self-end -mt-[35%] sm:-mt-[25%] md:-mt-32 lg:-mt-40 xl:-mt-48 lg:-mr-8 xl:-mr-12 transition-all duration-500 cursor-pointer ${
                activeImage === 2 ? "z-30 scale-105" : "z-20 relative"
              }`}
              onClick={() => setActiveImage(activeImage === 2 ? null : 2)}
              onMouseEnter={() => setActiveImage(2)}
              onMouseLeave={() => setActiveImage(null)}
              style={{ transformOrigin: "bottom right" }}
            >
              <img
                src="https://res.cloudinary.com/dv7cynuoz/image/upload/v1772759038/about_us2_pnqggu.jpg"
                alt="Ikonic BarberShop Team"
                className={`h-full w-full object-cover transition-transform duration-700 ${activeImage === 2 ? "scale-100" : "hover:scale-105"}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
