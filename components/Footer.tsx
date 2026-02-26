"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Scissors, Instagram, MapPin, Phone, Clock } from "lucide-react";

const footerLinks = {
  Navigate: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
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
                href="https://www.instagram.com/ikonic_hairstudio?igsh=b2luenA0cjl5Z2Vj"
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
                  href="tel:+12268082506"
                  className="text-sm text-[#6b6b6b] hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  +1 (226) 808 2506
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <div
                  className="text-sm text-[#6b6b6b]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <p>Mon - Sun: 9:00 AM - 7:00 PM</p>
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

      <div className="border-t border-[#2a2a2a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-2 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span
              className="text-[0.65rem] text-[#888888] uppercase tracking-[0.3em] font-semibold text-center sm:text-left"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Designed & Developed By
            </span>
            <span
              className="text-sm sm:text-base font-black tracking-[0.2em] text-white uppercase text-center sm:text-left"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Outline Studios
            </span>
          </div>
          <a
            href="#"
            className="transition-opacity duration-200 hover:opacity-80 shrink-0"
            aria-label="Outline Studios"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 300"
              className="w-48 sm:w-64 h-auto"
            >
              <rect
                x="120"
                y="50"
                width="160"
                height="100"
                rx="6"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeDasharray="10 6"
              />
              <circle cx="135" cy="65" r="4" fill="#FFFFFF" />
              <circle cx="150" cy="65" r="4" fill="#FFFFFF" />
              <circle cx="165" cy="65" r="4" fill="#FFFFFF" />
              <line
                x1="120"
                y1="80"
                x2="280"
                y2="80"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeDasharray="10 6"
              />
              <polygon
                points="260,110 260,150 270,140 278,160 286,156 278,135 290,135"
                fill="#10B981"
                stroke="#FFFFFF"
                strokeWidth="3"
              />
              <text
                x="200"
                y="210"
                fontFamily="Arial, sans-serif"
                fontSize="28"
                fontWeight="900"
                fill="#FFFFFF"
                textAnchor="middle"
              >
                Outline Studios
              </text>
              <line
                x1="170"
                y1="230"
                x2="230"
                y2="230"
                stroke="#10B981"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
