// src/components/sections/home/FeaturedSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Bakso Mas GP Special",
    description: "Bakso urat segar dengan kuah kaldu sapi yang kaya rasa. Disajikan dengan mie kuning dan pangsit goreng",
    image: "/img-src/bakso-gp1.png",
  },
  {
    id: 2,
    name: "Es Kuwut Segar",
    description: "Es serut dengan sirup pilihan dan topping lengkap. Cocok untuk cuaca panas di Depok",
    image: "/img-src/kuwut1.png",
  },
  {
    id: 3,
    name: "Kopi Susu Palas",
    description: "Kopi susu premium dengan biji kopi pilihan. Diseduh dengan teknik manual brewing yang sempurna",
    image: "/img-src/palaskopi2.png",
  },
];

export default function FeaturedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <AnimatedWrapper>
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Daftar </span>
            <span className="bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] bg-clip-text text-transparent">
              Toko UMKM Lokal
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Temukan berbagai toko UMKM lokal terbaik di sekitarmu
          </p>
        </div>

        </AnimatedWrapper>

        {/* Carousel Container */}
        <AnimatedWrapper delay={0.2}>
          <div className="relative max-w-6xl mx-auto">
            
            {/* Main Carousel Card */}
            <div className="bg-gradient-to-br from-[#0d5f59] to-[#129991] rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                
                {/* Left Content */}
                <div className="text-white space-y-6">
                  <h3 className="text-4xl md:text-5xl font-bold italic">
                    {products[currentIndex].name}
                  </h3>
                  
                  <p className="text-gray-100 text-lg leading-relaxed">
                    {products[currentIndex].description}
                  </p>
                  
                  <Link href="/detail-umkm">
                    <button className="bg-[#15b8ad] hover:bg-[#18c7bb] text-white font-semibold 
                                     rounded-full py-3 px-8 transition-all duration-300
                                     inline-flex items-center gap-2 group">
                      Detail
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    {/* White Background Card */}
                    <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform rotate-3" />
                    
                    {/* Image Container */}
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                      <Image
                        src={products[currentIndex].image}
                        alt={products[currentIndex].name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator with Navigation Buttons */}
            <div className="flex justify-center items-center gap-6 mt-8">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="bg-white/90 hover:bg-white text-[#129991] rounded-full p-3 
                         shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-3">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-8 h-3 bg-gradient-to-r from-[#129991] to-[#15b8ad]"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="bg-white/90 hover:bg-white text-[#129991] rounded-full p-3 
                         shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}