"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Scissors, Instagram, MapPin, Phone, Clock } from "lucide-react";

const footerLinks = {
  Navigate: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Gift Cards", href: "#gift-cards" },
  ],
  Services: [
    { label: "Haircuts & Fades", href: "#services" },
    { label: "Beard Sculpting", href: "#services" },
    { label: "Colour & Toning", href: "#services" },
    { label: "Products", href: "#products" },
  ],
};

export default function Footer() {
  const { ref, isInView, variants } = useScrollReveal(0.05);

  return (
    <footer
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#0d0d0d] border-t border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div
            variants={variants.fadeUp}
            className="flex flex-col gap-5 lg:col-span-1"
          >
            <div className="flex items-center gap-2">
              <Scissors className="h-5 w-5 text-[#c9a84c]" strokeWidth={1.5} />
              <span
                className="text-lg font-black tracking-[0.25em] text-white uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                IKONIC
              </span>
            </div>
            <p
              className="text-sm text-[#6b6b6b] leading-relaxed max-w-[220px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Premium barber services crafted for those who demand the best.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-[#2a2a2a] text-[#6b6b6b] transition-all duration-200 hover:border-[#c9a84c] hover:text-[#c9a84c]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <motion.div
              key={heading}
              variants={variants.fadeUp}
              className="flex flex-col gap-4"
            >
              <h3
                className="text-xs font-semibold tracking-[0.25em] text-white uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#6b6b6b] hover:text-[#c9a84c] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            variants={variants.fadeUp}
            className="flex flex-col gap-4"
          >
            <h3
              className="text-xs font-semibold tracking-[0.25em] text-white uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Visit Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#c9a84c] mt-0.5 shrink-0" />
                <span
                  className="text-sm text-[#6b6b6b]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  25 Industrial Drive, Elmira, Ontario
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#c9a84c] shrink-0" />
                <a
                  href="tel:+14165550100"
                  className="text-sm text-[#6b6b6b] hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  +1 (555) 982-3410
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <div
                  className="text-sm text-[#6b6b6b]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-[#2a2a2a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Ikonic BarberShop. All rights reserved.
          </p>
          <p
            className="text-xs text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Crafted with precision.
          </p>
        </div>
      </div>

      <div className="border-t border-[#2a2a2a] py-3 flex flex-col items-center justify-center gap-3 bg-[#f5f3ef]">
        <span
          className="text-[0.65rem] text-[#1d1d1d] uppercase tracking-[0.3em] font-semibold"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Designed & Developed By
        </span>
        <a
          href="#"
          className="text-xl sm:text-2xl font-black tracking-[0.2em] text-[#000000] select-none uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Outline Studios
        </a>
      </div>
    </footer>
  );
}
