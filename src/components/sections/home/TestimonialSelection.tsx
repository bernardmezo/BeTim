// src/components/sections/home/TestimonialsSection.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Store, Sparkles, BadgeCheck, Users } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

const testimonials = [
  {
    id: 1,
    name: "Ibu Siti Aminah",
    role: "Pemilik Warung Nasi",
    rating: 5,
    text: "Sejak bergabung dengan platform ini, penjualan saya meningkat 300%! Sekarang banyak pelanggan baru yang menemukan warung saya. Terima kasih!",
    store: "Warung Nasi Ibu Siti",
  },
  {
    id: 2,
    name: "Bapak Joko Widodo",
    role: "Pedagang Kopi",
    rating: 5,
    text: "Platform yang sangat membantu UMKM seperti saya. Interface-nya mudah digunakan dan customer support-nya responsif. Highly recommended!",
    store: "Kopi Joko Mantap",
  },
  {
    id: 3,
    name: "Dian Kartika",
    role: "Owner Bakery",
    rating: 5,
    text: "Orderan online jadi lebih teratur dan efisien. Saya bisa fokus ke produksi, sementara sistem menghandle pesanan. Luar biasa!",
    store: "Dian's Bakery",
  },
  {
    id: 4,
    name: "Ahmad Rizki",
    role: "Penjual Sayuran",
    rating: 5,
    text: "Dulu sayuran saya sering nggak laku. Sekarang dengan sistem pre-order, semua terencana dan fresh sampai ke customer. Mantap!",
    store: "Sayur Fresh Ahmad",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const xValue = (e.clientX / window.innerWidth) * 20 - 10;
        const yValue = (e.clientY / window.innerHeight) * 20 - 10;
        setMousePosition({ x: xValue, y: yValue });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    // UPDATE 1: Background Gradient disamakan dengan CTA (via-gray-50) agar flow-nya natural
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">

      {/* VIVID ORBS (Disesuaikan agar tidak terlalu kontras dengan CTA di bawah) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div 
            className="absolute top-[10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-200/30 rounded-full blur-[80px] md:blur-[100px] animate-blob transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)` }}
          />
          {/* Orb bawah dipindahkan sedikit ke atas agar tidak menabrak orb CTA */}
          <div 
            className="absolute bottom-[10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-200/30 rounded-full blur-[80px] md:blur-[100px] animate-blob animation-delay-2000 transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
          />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* HEADER */}
        <AnimatedWrapper>
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-teal-100 rounded-full px-4 py-1.5 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 tracking-wide uppercase">Kisah Sukses</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
              Kata Mereka Tentang <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Platform Kami
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium px-4">
              Bergabunglah dengan ribuan UMKM yang telah merasakan dampak positif digitalisasi bisnis mereka.
            </p>
          </div>
        </AnimatedWrapper>

        {/* MAIN CARD */}
        <AnimatedWrapper delay={0.2}>
          <div 
            className="max-w-5xl mx-auto relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-full blur-2xl opacity-40 animate-pulse animation-delay-1000" />

            {/* UPDATE 2: Border dibuat lebih solid tapi transparan agar mirip CTA */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-2 border-white/50 overflow-hidden transition-all duration-500 hover:shadow-teal-900/5">
              <div className="grid md:grid-cols-12 gap-0 min-h-[500px] md:min-h-[450px]">
                
                {/* LEFT SIDE: CARD PROFILE */}
                <div className="md:col-span-4 bg-gradient-to-br from-teal-500 to-teal-600 p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-center items-center text-center">
                  
                  {/* REPLACEMENT FOR PATTERN OVERLAY: AMBIENT LIGHTING */}
                  {/* 1. Highlight Cahaya dari Pojok Kiri Atas (Memberikan efek 3D) */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-100 pointer-events-none" 
                  />

                  {/* 2. Ambient Glow halus di tengah-bawah (Memberikan kedalaman warna) */}
                  <div 
                    className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-teal-400/30 blur-[60px] rounded-full pointer-events-none mix-blend-overlay" 
                  />

                  {/* 3. Inner Border halus (Agar terlihat tajam/crisp) */}
                  <div className="absolute inset-0 border border-white/10 rounded-none pointer-events-none" />
                  
                  <div className="relative z-10 animate-fade-in" key={`profile-${currentTestimonial.id}`}>
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-white/20 backdrop-blur-md rounded-full p-2 mb-6 relative group cursor-default border border-white/30">
                       <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-4xl font-bold text-teal-700 shadow-inner overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                         {currentTestimonial.name.charAt(0)}
                       </div>
                       <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full p-2 shadow-lg border-2 border-white/50 animate-bounce-slight">
                          <Quote className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                       </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-1">{currentTestimonial.name}</h3>
                    <p className="text-teal-50 text-xs md:text-sm mb-4 font-medium opacity-90">{currentTestimonial.role}</p>
                    
                    <div className="inline-flex items-center gap-2 bg-teal-800/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                      <Store className="w-4 h-4" />
                      <span className="text-xs md:text-sm font-semibold">{currentTestimonial.store}</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: CONTENT */}
                <div className="md:col-span-8 p-8 md:p-14 flex flex-col justify-center relative bg-white/40">
                  <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 text-teal-900/5 rotate-12 pointer-events-none" />
                  
                  <div key={`content-${currentTestimonial.id}`} className="animate-slide-up">
                    <div className="mb-6 md:mb-8 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 md:w-6 md:h-6 ${i < currentTestimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                          />
                        ))}
                    </div>

                    <blockquote className="text-lg md:text-3xl font-medium text-slate-800 leading-relaxed mb-8 relative z-10">
                      "{currentTestimonial.text}"
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200/60">
                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Go to testimonial ${idx + 1}`}
                                className={`h-2 rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-8 bg-teal-600' : 'w-2 bg-slate-300 hover:bg-teal-300'}`} 
                            />
                        ))}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                        className="p-2 md:p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-teal-300 hover:text-teal-600 transition-all duration-300 shadow-sm group active:scale-95"
                      >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                        className="p-2 md:p-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300 group shadow-md active:scale-95"
                      >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* STATS - Disesuaikan agar mirip Feature Cards di CTA */}
        <AnimatedWrapper delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 max-w-5xl mx-auto">
            {[
              { number: "10K+", label: "Mitra UMKM", icon: Store, color: "text-teal-600", bg: "bg-teal-50" },
              { number: "50K+", label: "Pelanggan", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
              { number: "4.9", label: "Rating Rata-rata", icon: Star, color: "text-yellow-500", bg: "bg-yellow-50" },
              { number: "98%", label: "Tingkat Kepuasan", icon: BadgeCheck, color: "text-orange-500", bg: "bg-orange-50" },
            ].map((stat, index) => (
              <div
                key={index}
                // UPDATE 4: Style Stats Card disamakan dengan style Feature Cards di CTA (white border + shadow)
                className="group relative bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`inline-flex p-2 md:p-3 rounded-xl ${stat.bg} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>

      {/* UPDATE 5: Fade Bottom dihapus/diubah menjadi transparent to white agar menyatu dengan start CTA */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
      
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; scale: 0.95; }
          100% { opacity: 1; scale: 1; }
        }
        @keyframes bounce-slight {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-blob { animation: blob 7s infinite alternate ease-in-out; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-bounce-slight { animation: bounce-slight 2s infinite ease-in-out; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}