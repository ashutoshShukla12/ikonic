"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#"
            className="flex items-center gap-2 font-display text-xl font-bold tracking-[0.25em] text-white uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <Scissors className="h-5 w-5 text-[#c9a84c]" strokeWidth={1.5} />
            IKONIC
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-[0.12em] text-white/70 uppercase transition-colors duration-200 hover:text-[#c9a84c]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.fresha.com/a/ikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i/all-offer?menu=true&share=true&pId=2782095"
            className="hidden lg:inline-flex items-center rounded-none border border-[#c9a84c] px-6 py-2.5 text-xs font-medium tracking-[0.2em] text-[#c9a84c] uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:text-black cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book Now
          </a>

          <button
            className="lg:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-18 z-40 bg-[#0a0a0a]/98 backdrop-blur-lg border-b border-[#2a2a2a] lg:hidden"
          >
            <ul className="flex flex-col gap-0 px-6 pb-6 pt-4">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-[#2a2a2a]">
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-sm font-medium tracking-[0.15em] text-white/70 uppercase hover:text-[#c9a84c] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="https://www.fresha.com/a/ikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i/all-offer?menu=true&share=true&pId=2782095"
                  className="block text-center border border-[#c9a84c] py-3 text-xs font-medium tracking-[0.2em] text-[#c9a84c] uppercase hover:bg-[#c9a84c] hover:text-black transition-all"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
