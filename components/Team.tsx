"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { X, Instagram, Calendar } from "lucide-react";

const team = [
  {
    name: "Anish",
    role: "Barber",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    instagram: "https://www.tiktok.com/@anishgaba2001?_r=1&_t=ZS-949QYTd1jvz",
    fresha:
      "https://www.fresha.com/book-now/ikonic-barbershop-hair-salon-jivpu9q0/services?lid=2877339&eid=5108522&share=true&pId=2782095",
  },
  {
    name: "Mohit",
    role: "Barber",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    instagram: "https://www.instagram.com/mohit.blends?igsh=bzdlcWs0dzRra2wy",
    fresha:
      "https://www.fresha.com/a/ikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i/booking?pId=2782095&employeeId=5086563&back=%2Fa%2Fikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i&cartId=d5a64586-d1c6-4428-83ac-cc1037958375",
  },
  {
    name: "Feroza",
    role: "Hair Stylist",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&q=80",
    instagram: "https://www.instagram.com/farosalon?igsh=MWZ4Zml5cnprb3BiYg==",
    fresha:
      "https://www.fresha.com/a/ikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i/booking?pId=2782095&employeeId=5108517&back=%2Fa%2Fikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i&cartId=deef79ce-e140-4df3-9456-3ed1c8ba8f20",
  },
  {
    name: "Nawra",
    role: "Hair Stylist",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80",
    instagram: "#",
    fresha:
      "https://www.fresha.com/a/ikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i/booking?pId=2782095&employeeId=5109959&back=%2Fa%2Fikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i&cartId=cde496e3-9e79-469b-8a5a-b8217773bd71",
  },
];

type TeamMember = (typeof team)[0];

export default function Team() {
  const { ref, isInView, variants } = useScrollReveal(0.1);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

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
              <div
                className="aspect-3/4 overflow-hidden cursor-pointer lg:cursor-default"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setSelectedMember(member);
                  }
                }}
              >
                <img
                  src={member.img}
                  alt={`${member.name} — ${member.role}`}
                  className="h-full w-full object-cover grayscale transition-all duration-700 lg:group-hover:grayscale-0 lg:group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 p-4 pointer-events-none">
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

        {/* Mobile Popup Modal */}
        {mounted &&
          createPortal(
            <AnimatePresence>
              {selectedMember && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm lg:hidden"
                  onClick={() => setSelectedMember(null)}
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-[90%] max-w-sm mx-auto overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl"
                  >
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div className="aspect-square w-full">
                      <img
                        src={selectedMember.img}
                        alt={selectedMember.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3
                        className="text-2xl font-bold text-white mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {selectedMember.name}
                      </h3>
                      <p
                        className="text-sm font-medium tracking-wider text-[#c9a84c] uppercase mb-6"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {selectedMember.role}
                      </p>

                      <div className="flex flex-col gap-3">
                        <a
                          href={selectedMember.fresha || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c9a84c] px-6 py-3 text-sm font-bold text-black transition-transform active:scale-95"
                        >
                          <Calendar className="h-4 w-4" />
                          Book with Fresha
                        </a>
                        <a
                          href={selectedMember.instagram || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors active:bg-white/10"
                        >
                          <Instagram className="h-4 w-4" />
                          Socials Feed
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body,
          )}
      </div>
    </section>
  );
}
