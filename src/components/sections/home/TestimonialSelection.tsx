// src/components/sections/home/TestimonialsSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

const testimonials = [
  {
    id: 1,
    name: "Ibu Siti Aminah",
    role: "Pemilik Warung Nasi",
    avatar: "/img-src/avatar-1.jpg",
    rating: 5,
    text: "Sejak bergabung dengan platform ini, penjualan saya meningkat 300%! Sekarang banyak pelanggan baru yang menemukan warung saya. Terima kasih!",
    store: "Warung Nasi Ibu Siti",
  },
  {
    id: 2,
    name: "Bapak Joko Widodo",
    role: "Pedagang Kopi",
    avatar: "/img-src/avatar-2.jpg",
    rating: 5,
    text: "Platform yang sangat membantu UMKM seperti saya. Interface-nya mudah digunakan dan customer support-nya responsif. Highly recommended!",
    store: "Kopi Joko Mantap",
  },
  {
    id: 3,
    name: "Dian Kartika",
    role: "Owner Bakery",
    avatar: "/img-src/avatar-3.jpg",
    rating: 5,
    text: "Orderan online jadi lebih teratur dan efisien. Saya bisa fokus ke produksi, sementara sistem menghandle pesanan. Luar biasa!",
    store: "Dian's Bakery",
  },
  {
    id: 4,
    name: "Ahmad Rizki",
    role: "Penjual Sayuran",
    avatar: "/img-src/avatar-4.jpg",
    rating: 5,
    text: "Dulu sayuran saya sering nggak laku. Sekarang dengan sistem pre-order, semua terencana dan fresh sampai ke customer. Mantap!",
    store: "Sayur Fresh Ahmad",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Apa kata </span>
              <span className="text-teal-600">Mitra kami</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Cerita sukses dari UMKM yang telah bergabung dengan platform kami
            </p>
          </div>
        </AnimatedWrapper>

        {/* Main Testimonial Card */}
        <AnimatedWrapper delay={0.2}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Quote Icon */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-8 relative">
                <Quote className="w-16 h-16 text-white/30 absolute top-4 left-4" />
                <div className="relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-teal-200 to-teal-400 flex items-center justify-center text-white text-3xl font-bold">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-1">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-teal-100 mb-2">
                        {currentTestimonial.role}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-300 text-yellow-300"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-8 md:p-12">
                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-6 italic">
                  "{currentTestimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-teal-600 font-semibold">
                    {currentTestimonial.store}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Testimonial Indicators */}
        <AnimatedWrapper delay={0.3}>
          <div className="flex justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-12 bg-teal-500"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </AnimatedWrapper>

        {/* Stats Section */}
        <AnimatedWrapper delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { number: "10+", label: "Mitra UMKM" },
              { number: "50+", label: "Pelanggan yang Bahagia" },
              { number: "4.9", label: "Rata-rata Rating" },
              { number: "98%", label: "Tingkat Kepuasan" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
