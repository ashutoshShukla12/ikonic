"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryImages } from "@/lib/gallery-images";
import { ChevronLeft, ChevronRight } from "lucide-react";

function GalleryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const highlightedImgStr = searchParams.get("img");

  // Start with URL param, default to 0
  const initialIdx = highlightedImgStr ? parseInt(highlightedImgStr, 10) : 0;
  const validInitialIdx =
    initialIdx >= 0 && initialIdx < galleryImages.length ? initialIdx : 0;

  const [activeIdx, setActiveIdx] = useState(validInitialIdx);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Sync state with URL without triggering a full page reload, and only if they differ
  useEffect(() => {
    if (highlightedImgStr !== activeIdx.toString()) {
      router.replace(`/gallery?img=${activeIdx}`, { scroll: false });
    }
  }, [activeIdx, router, highlightedImgStr]);

  // Auto-scroll the thumbnails container so the active thumbnail is visible
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[
        activeIdx
      ] as HTMLElement;
      if (activeThumb) {
        const container = thumbnailsRef.current;
        const scrollLeft =
          activeThumb.offsetLeft -
          container.clientWidth / 2 +
          activeThumb.clientWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeIdx]);

  const nextImage = () => {
    setActiveIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveIdx(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <>
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-24 lg:h-32 bg-[#0a0a0a]" />

      <main className="min-h-screen bg-[#0a0a0a] pb-24 px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 flex flex-col items-center gap-2 text-center">
            <span
              className="text-[0.65rem] font-bold tracking-[0.35em] text-[#c9a84c] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Ikonic
            </span>
            <h1
              className="text-4xl font-bold text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Gallery
            </h1>
          </div>

          {/* Main Focus Image */}
          <div className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[21/9] bg-[#111] overflow-hidden rounded-sm border border-[#2a2a2a] group mb-6 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                src={galleryImages[activeIdx]}
                alt={`Ikonic Gallery Focus Image ${activeIdx + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c9a84c] text-white hover:text-black p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#c9a84c] text-white hover:text-black p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnails Strip */}
          <div
            ref={thumbnailsRef}
            className="flex gap-2 sm:gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE
            }}
          >
            {/* Inject minimal style to hide scrollbar in webkit browsers safely */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
              .scrollbar-hide::-webkit-scrollbar {
                  display: none;
              }
            `,
              }}
            />

            {galleryImages.map((src, idx) => {
              const isActive = idx === activeIdx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex-shrink-0 snap-center relative aspect-square w-20 sm:w-24 lg:w-32 overflow-hidden rounded-sm transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-[#c9a84c] opacity-100"
                      : "ring-1 ring-[#2a2a2a] opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#c9a84c]/10" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
          <div
            className="text-[#c9a84c] text-sm tracking-[0.2em] font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            LOADING GALLERY...
          </div>
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
