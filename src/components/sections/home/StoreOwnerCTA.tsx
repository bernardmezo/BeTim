// src/components/sections/home/StoreOwnerCTA.tsx
"use client";

import { useState } from "react";
import {
  Store,
  TrendingUp,
  ArrowRight,
  HeartHandshake,
  Zap,
  Sparkles,
  BadgeCheck,
  ShoppingBag,
  Star,
  Rocket,
  Heart,
  Crown,
} from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import Link from "next/link";

export default function StoreOwnerCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(20 184 166) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Shapes - Varied Assets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Star Cluster */}
        <div className="absolute top-[10%] left-[5%] animate-float-slow">
          <Star className="w-8 h-8 text-yellow-400/20 fill-yellow-400/20" />
        </div>
        <div className="absolute top-[15%] left-[8%] animate-float-delayed">
          <Star className="w-4 h-4 text-yellow-300/30 fill-yellow-300/30" />
        </div>

        {/* Top Right - Geometric Shapes */}
        <div className="absolute top-[20%] right-[10%] w-16 h-16 border-4 border-teal-400/10 rounded-lg rotate-45 animate-spin-slow" />
        <div className="absolute top-[25%] right-[15%] w-12 h-12 bg-gradient-to-br from-cyan-400/5 to-teal-400/5 rounded-full animate-pulse-slow" />

        {/* Middle Left - Hearts */}
        <div className="absolute top-[40%] left-[2%] animate-float">
          <Heart className="w-6 h-6 text-pink-400/15 fill-pink-400/15" />
        </div>

        {/* Middle Right - Sparkles */}
        <div className="absolute top-[45%] right-[5%] animate-twinkle">
          <Sparkles className="w-10 h-10 text-teal-400/20" />
        </div>

        {/* Bottom Left - Rocket */}
        <div className="absolute bottom-[25%] left-[12%] animate-bounce-slight">
          <Rocket className="w-12 h-12 text-emerald-400/15 rotate-45" />
        </div>

        {/* Bottom Right - Crown */}
        <div className="absolute bottom-[30%] right-[8%] animate-float-delayed">
          <Crown className="w-10 h-10 text-yellow-400/20" />
        </div>

        {/* Scattered Mini Stars */}
        <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-teal-400/20 rounded-full animate-twinkle" />
        <div className="absolute top-[35%] left-[85%] w-2 h-2 bg-cyan-400/20 rounded-full animate-twinkle animation-delay-1000" />
        <div className="absolute bottom-[50%] right-[25%] w-2 h-2 bg-emerald-400/20 rounded-full animate-twinkle animation-delay-2000" />

        {/* Diagonal Lines - Subtle */}
        <div className="absolute top-[10%] left-[30%] w-32 h-0.5 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent rotate-45" />
        <div className="absolute bottom-[40%] right-[20%] w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -rotate-45" />

        {/* Soft Gradient Orbs - Reduced */}
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-teal-300/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        {/* HEADER */}
        <AnimatedWrapper>
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-teal-100 rounded-full px-4 py-1.5 shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 tracking-wide uppercase">Untuk Pemilik Usaha</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
              Siap Tingkatkan{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Bisnis Anda?
              </span>
            </h2>
          </div>
        </AnimatedWrapper>

        <div className="max-w-5xl mx-auto">
          
          {/* MAIN CTA CARD */}
          <AnimatedWrapper delay={0.1}>
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Corner Decorations */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-teal-400/30 rounded-tl-2xl" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-emerald-400/30 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-teal-400/30 rounded-bl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-emerald-400/30 rounded-br-2xl" />

              {/* Floating Mini Stars around Card */}
              <Star className="absolute -top-6 left-[20%] w-4 h-4 text-yellow-400 fill-yellow-400 animate-twinkle" />
              <Star className="absolute -bottom-6 right-[25%] w-3 h-3 text-yellow-300 fill-yellow-300 animate-twinkle animation-delay-1000" />

              <div className="relative bg-white/80 backdrop-blur-xl border-2 border-white/50 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-teal-900/10">
                
                {/* Main Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600" />
                
                {/* Ambient Lighting */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-cyan-400/30 blur-[80px] rounded-full" />

                <div className="relative p-8 md:p-16 text-center">
                  
                  {/* Icon Badge */}
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-teal-300 blur-2xl opacity-50 rounded-full" />
                    <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Store className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full p-1.5 md:p-2 shadow-lg border-2 border-white/50">
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                    Punya Toko atau UMKM?
                  </h2>

                  <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
                    Bergabunglah dengan kami dan jangkau{" "}
                    <span className="font-extrabold text-yellow-300">ribuan pelanggan lokal</span>.
                    Setup mudah, fitur lengkap, dan support dedicated untuk bisnis Anda.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Link href="/register-umkm" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto group bg-white text-teal-700 font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:-translate-y-2 inline-flex items-center justify-center gap-2 relative overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                          Daftar Sekarang
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </Link>

                    <Link href="/about-betim" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-white/30 hover:border-white/60 transition-all duration-300 inline-flex items-center justify-center gap-2">
                        Pelajari Lebih Lanjut
                      </button>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/90 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-yellow-300" />
                      <span className="font-semibold">Gratis Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-yellow-300" />
                      <span className="font-semibold">10K+ Mitra</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-300" />
                      <span className="font-semibold">Support 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
            {[
                {
                    icon: TrendingUp,
                    title: "Kembangkan Bisnis",
                    desc: "Jangkau ribuan pelanggan lokal yang aktif mencari produk seperti milik Anda.",
                    color: "from-teal-500 to-teal-600",
                    delay: 0.2
                },
                {
                    icon: Zap,
                    title: "Kelola dengan Mudah",
                    desc: "Dashboard sederhana untuk mengelola pesanan, inventori, dan hubungan pelanggan.",
                    color: "from-cyan-500 to-cyan-600",
                    delay: 0.3
                },
                {
                    icon: HeartHandshake,
                    title: "Tanpa Biaya Setup",
                    desc: "Mulai berjualan langsung tanpa biaya di muka atau biaya tersembunyi.",
                    color: "from-emerald-500 to-emerald-600",
                    delay: 0.4
                }
            ].map((feature, idx) => (
                <AnimatedWrapper delay={feature.delay} key={idx}>
                  <div className="group h-full bg-white/80 backdrop-blur-md border-2 border-white/50 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    {/* Corner Accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-5 rounded-bl-[3rem]`} />
                    
                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="relative inline-block mb-5 md:mb-6">
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-xl opacity-30 rounded-xl`} />
                          <div className={`relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                            <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-teal-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {feature.desc}
                        </p>

                        {/* Decorative Arrow */}
                        <div className="mt-4 md:mt-6 inline-flex items-center gap-2 text-teal-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                        </div>
                    </div>
                  </div>
                </AnimatedWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        @keyframes bounce-slight {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-float-delayed { animation: float-delayed 5s infinite ease-in-out; }
        .animate-float-slow { animation: float-slow 8s infinite ease-in-out; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-twinkle { animation: twinkle 3s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }
        .animate-bounce-slight { animation: bounce-slight 3s infinite ease-in-out; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}