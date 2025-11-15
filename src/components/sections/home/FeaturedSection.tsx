// src/components/sections/home/FeaturedSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Store, Star } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Bakso Mas GP Special",
    category: "Kuliner",
    rating: "4.9",
    description:
      "Bakso urat segar dengan kuah kaldu sapi yang kaya rasa. Disajikan dengan mie kuning dan pangsit goreng yang renyah.",
    image: "/img-src/bakso-gp1.png",
  },
  {
    id: 2,
    name: "Es Kuwut Segar",
    category: "Minuman",
    rating: "4.8",
    description:
      "Es serut dengan sirup pilihan, jeruk nipis, dan topping kelapa muda. Pilihan tepat untuk menyegarkan hari yang panas.",
    image: "/img-src/kuwut1.png",
  },
  {
    id: 3,
    name: "Kopi Susu Palas",
    category: "Coffee Shop",
    rating: "5.0",
    description:
      "Kopi susu gula aren premium dengan biji kopi pilihan Arabica. Diseduh dengan teknik manual brewing yang sempurna.",
    image: "/img-src/palaskopi2.png",
  },
];

export default function FeaturedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  // Reset animation state after transition
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      
      {/* 1. Ambient Background (Blobs) - Penting untuk efek Glassmorphism */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-teal-300/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-300/40 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header Section */}
        <AnimatedWrapper>
          <div className="text-center mb-16 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Store className="w-3 h-3" />
                Rekomendasi Pilihan
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Daftar{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Toko UMKM Lokal
              </span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
              Temukan berbagai produk unggulan dari UMKM terbaik di sekitarmu yang telah terkurasi.
            </p>
          </div>
        </AnimatedWrapper>

        {/* Carousel Container */}
        <AnimatedWrapper delay={0.2}>
          <div className="relative max-w-6xl mx-auto">
            
            {/* 2. Main Glass Card Container */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[500px] transition-all duration-500">
              
              {/* Grid Content */}
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 h-full">
                
                {/* Left Content (Text) */}
                <div className="space-y-8 flex flex-col justify-center order-2 md:order-1">
                  
                  {/* Content Transition Wrapper */}
                  <div 
                    key={currentIndex} 
                    className="animate-fade-in-slide space-y-6"
                  >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-lg bg-teal-100/50 text-teal-700 text-sm font-bold border border-teal-200">
                                {products[currentIndex].category}
                            </span>
                            <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                                <Star className="w-4 h-4 fill-amber-500" />
                                {products[currentIndex].rating}
                            </div>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                        {products[currentIndex].name}
                        </h3>

                        <p className="text-slate-600 text-lg leading-relaxed">
                        {products[currentIndex].description}
                        </p>
                    </div>

                    <Link href="/detail-umkm" className="inline-block">
                        <button
                        className="group relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold 
                                    rounded-xl py-4 px-10 transition-all duration-300 shadow-lg hover:shadow-teal-500/40 hover:scale-[1.02]"
                        >
                        <span className="relative z-10 flex items-center gap-2">
                            Lihat Toko
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        </button>
                    </Link>
                  </div>
                </div>

                {/* Right Image - Floating Glass Effect */}
                <div className="relative h-full flex items-center justify-center order-1 md:order-2">
                  <div className="relative w-full max-w-md aspect-square">
                    
                    {/* Decorative Background Elements behind Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl" />
                    
                    {/* 3. Image Glass Frame */}
                    <div 
                        key={currentIndex}
                        className="relative w-full h-full p-4 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] shadow-xl animate-float-slow"
                    >
                        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-100">
                            <Image
                                src={products[currentIndex].image}
                                alt={products[currentIndex].name}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                                priority
                            />
                            
                            {/* Inner Glass Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-10 px-4">
                {/* Dots */}
                <div className="flex gap-3 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-500 rounded-full h-2.5 ${
                        index === currentIndex
                          ? "w-8 bg-gradient-to-r from-teal-500 to-cyan-500"
                          : "w-2.5 bg-slate-300 hover:bg-teal-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="group bg-white/60 backdrop-blur-md hover:bg-white border border-white/60 text-slate-600 hover:text-teal-600 rounded-2xl p-4 
                                shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="group bg-white/60 backdrop-blur-md hover:bg-white border border-white/60 text-slate-600 hover:text-teal-600 rounded-2xl p-4 
                                shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

          </div>
        </AnimatedWrapper>
      </div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />
    </section>
  );
}