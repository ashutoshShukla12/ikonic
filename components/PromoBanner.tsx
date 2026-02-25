"use client";

import { motion } from "framer-motion";
import { Tag } from "lucide-react";

export default function PromoBanner() {
  const text =
    "ONGOING PROMOTION — IN-STORE DISCOUNT OF 15% FOR THE ENTIRE MONTH OF MARCH. PLEASE VISIT THE STORE TO CLAIM YOUR DISCOUNT";
  const freshaLink =
    "https://www.fresha.com/a/ikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i/all-offer?menu=true&share=true&pId=2782095&promoCode=MAR15";

  return (
    <a
      href={freshaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-[76px] lg:top-[88px] left-0 right-0 z-40 w-full overflow-hidden bg-[#c9a84c] py-2 flex items-center shadow-lg border-y border-[#c9a84c]/50 hover:bg-[#d4b55c] transition-colors group cursor-pointer"
    >
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        // The width must be perfectly doubled for the seamless loop
        style={{ width: "max-content" }}
      >
        {/* We use an array of 6 to guarantee it fills even an ultra-wide screen twice over */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center px-4 sm:px-8">
            <Tag className="h-4 w-4 mr-3 text-[#0a0a0a]" />
            <span
              className="text-[0.75rem] sm:text-xs font-bold tracking-[0.2em] text-[#0a0a0a] uppercase "
              style={{ fontFamily: "var(--font-body)" }}
            >
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </a>
  );
}
