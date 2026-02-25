"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  const { ref, isInView, variants } = useScrollReveal();

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
            className="grid grid-cols-2 gap-3 relative"
          >
            <div className="col-span-2 aspect-[4/3] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dv7cynuoz/image/upload/v1771951617/about1_lau35c.jpg"
                alt="Barber at work — precision haircut"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://res.cloudinary.com/dv7cynuoz/image/upload/v1771951483/about2_vgisxc.jpg"
                alt="Barber with client — grooming session"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://res.cloudinary.com/dv7cynuoz/image/upload/v1771951697/about3_trsvxr.jpg"
                alt="Barber shop interior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
