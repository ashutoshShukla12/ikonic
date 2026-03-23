"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productsData } from "@/lib/products-data";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ProductsPage() {
  const { ref, isInView, variants } = useScrollReveal(0.08);

  const heroProduct = productsData[0];
  const categories = [
    "Styling Wax & Pomades",
    "Volume & Texture",
    "Refined Grooming",
  ];

  return (
    <>
      <Navbar />

      <div className="h-24 lg:h-32 bg-[#0a0a0a]" />

      <main className="min-h-screen bg-[#0a0a0a] pb-24 text-white">
        {/* Categories Section */}
        <section
          ref={ref as React.RefObject<HTMLElement>}
          className="px-6 lg:px-12 py-16 lg:py-24 mx-auto max-w-7xl flex flex-col gap-24"
        >
          <motion.div
            variants={variants.staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-4"
          >
            <motion.span
              variants={variants.fadeUp}
              className="text-[0.65rem] font-bold tracking-[0.35em] text-[#c9a84c] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Essentials
            </motion.span>
            <motion.h2
              variants={variants.fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Curated
              <br />
              <em className="font-normal text-[#c9a84c]">Atelier</em>
            </motion.h2>
            <motion.p
              variants={variants.fadeUp}
              className="text-[#a0a0a0] max-w-md text-sm leading-relaxed mt-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Hand-selected apothecary products crafted for the modern
              gentleman. Each formula is chosen for its superior hold, texture,
              and masculine scent profile.
            </motion.p>
          </motion.div>

          <div className="flex flex-col gap-20">
            {categories.map((category, idx) => {
              const categoryProducts = productsData.filter(
                (p) => p.category === category && p.id !== "product_1",
              );
              if (categoryProducts.length === 0) return null;

              return (
                <div key={category} className="flex flex-col gap-8">
                  <div className="flex items-end justify-between border-b border-[#2a2a2a] pb-4">
                    <h3
                      className="text-2xl font-bold text-[#c9a84c]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {category}
                    </h3>
                    <span
                      className="text-[0.65rem] tracking-[0.2em] text-[#6b6b6b] uppercase"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      0{idx + 1} / Collection
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group flex flex-col bg-[#111] border border-[#2a2a2a] rounded-sm overflow-hidden hover:border-[#c9a84c]/50 transition-colors duration-300"
                      >
                        <div className="relative aspect-square overflow-hidden bg-black p-4 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover mix-blend-lighten transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                            <span className="px-5 py-3 border border-[#c9a84c] text-[#c9a84c] text-[0.65rem] font-bold tracking-[0.2em] uppercase bg-black/80 shadow-lg">
                              In-Store Only
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h4
                            className="text-lg font-semibold text-white mb-3 leading-snug"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {product.name}
                          </h4>
                          <p
                            className="text-[#a0a0a0] text-xs leading-relaxed mb-4"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {product.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
