"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";

const serviceCategories = [
  {
    category: "Men's Haircuts",
    items: [
      { name: "Regular Haircut", duration: "20 min", price: "CA$35" },
      { name: "Fade Haircut", duration: "30 min", price: "CA$40" },
      { name: "Senior Haircut", duration: "20 min", price: "CA$30" },
      { name: "Buzz Cut", duration: "20 min", price: "CA$25" },
      { name: "Scissor Cut", duration: "30 min", price: "CA$40" },
      { name: "Medium Length Haircut", duration: "30 min", price: "CA$40" },
      { name: "Long Haircut", duration: "45 min", price: "CA$45" },
    ],
  },
  {
    category: "Shaves & Beard",
    items: [
      { name: "Line Up / Edge Up", duration: "15 min", price: "CA$15" },
      {
        name: "Beard Trim & Shape Up (No Shave)",
        duration: "15 min",
        price: "CA$20",
      },
      {
        name: "Beard Trim & Hot Towel Shave",
        duration: "30 min",
        price: "CA$30",
      },
      {
        name: "Full Head Shave (Hot Towel)",
        duration: "30 min",
        price: "CA$35",
      },
    ],
  },
  {
    category: "Combos & Packages",
    items: [
      { name: "Haircut & Beard Trim", duration: "45 min", price: "CA$50" },
      { name: "Fade Haircut & Beard Trim", duration: "50 min", price: "CA$55" },
      {
        name: "The Ikonic Package",
        description: "Haircut, Beard, Wash & Style",
        duration: "60 min",
        price: "CA$65",
      },
    ],
  },
  {
    category: "Kids' Haircuts",
    items: [
      { name: "Kids' Regular Haircut", duration: "20 min", price: "CA$25" },
      { name: "Kids' Fade Haircut", duration: "30 min", price: "CA$30" },
    ],
  },
  {
    category: "Women's Haircut & Styling",
    items: [
      { name: "Blow Dry & Style", duration: "30 min", price: "CA$35" },
      { name: "Women's Trim / Cut", duration: "30 min", price: "CA$40" },
      { name: "Women's Wash, Cut & Style", duration: "60 min", price: "CA$60" },
    ],
  },
  {
    category: "Waxing & Beauty",
    items: [
      { name: "Nose/Ear Waxing", duration: "10 min", price: "CA$10" },
      { name: "Eyebrow Waxing", duration: "10 min", price: "CA$12" },
      { name: "Full Face Waxing", duration: "30 min", price: "CA$35" },
    ],
  },
  {
    category: "Add-ons & Treatments",
    items: [
      { name: "Hair Wash", duration: "10 min", price: "CA$10" },
      { name: "Black Mask Treatment", duration: "15 min", price: "CA$15" },
    ],
  },
];

export default function Services() {
  const { ref, isInView, variants } = useScrollReveal(0.1);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section
      id="services"
      className="py-24 lg:py-36 bg-[#f5f3efef]"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          <motion.div
            variants={variants.slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 aspect-4/3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80"
                  alt="Barber crafting a precision fade"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80"
                  alt="Close-up of a haircut"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80"
                  alt="Barber tools laid out"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div>
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
                What We Offer
              </motion.span>
              <motion.h2
                variants={variants.fadeUp}
                className="text-4xl font-bold leading-tight text-black sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Premium Grooming Services
              </motion.h2>

              <motion.ul
                variants={variants.staggerContainer}
                className="mt-2 space-y-0"
              >
                {serviceCategories.map((category) => (
                  <motion.li
                    key={category.category}
                    variants={variants.fadeUp}
                    className="group flex flex-col border-b border-[#2a2a2a] py-5 transition-all duration-200 hover:border-[#c9a84c]/40"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleCategory(category.category)}
                    >
                      <p
                        className="text-base font-semibold text-black group-hover:text-[#c9a84c] transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {category.category}
                      </p>
                      <span
                        className={`text-[#c9a84c] text-lg font-light transition-transform duration-300 ${
                          openCategory === category.category
                            ? "rotate-90"
                            : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    <AnimatePresence>
                      {openCategory === category.category && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-3 pt-4 border-t border-[#e5e5e5]">
                            {category.items.map((item) => (
                              <li
                                key={item.name}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-1"
                              >
                                <div>
                                  <p className="text-sm font-medium text-black">
                                    {item.name}
                                  </p>
                                  {item.description && (
                                    <p className="text-xs text-[#6b6b6b] mt-0.5">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                  <span className="text-xs text-[#a0a0a0]">
                                    {item.duration}
                                  </span>
                                  <span className="text-sm font-bold text-[#c9a84c]">
                                    {item.price}
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={variants.fadeUp}>
                <a
                  href="https://www.fresha.com/a/ikonic-barbershop-hair-salon-elmira-25-industrial-drive-sp5ef79i/all-offer?menu=true&share=true&pId=2782095"
                  className="inline-flex items-center border border-[#c9a84c] px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:text-black cursor-pointer"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Book a Service
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
