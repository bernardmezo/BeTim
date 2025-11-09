// src/components/sections/home/StoreOwnerCTA.tsx
"use client";

import {
  Store,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Zap,
} from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import Link from "next/link";

export default function StoreOwnerCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-teal-50 to-white">
      {/* Decorative Background Elements - Matching theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-300/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Card */}
          <AnimatedWrapper>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl shadow-2xl overflow-hidden border-4 border-teal-400/20">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              <div className="relative p-8 md:p-12">
                <div className="text-center mb-12">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-xl border-2 border-white/30">
                    <Store className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Punya Toko atau UMKM?
                  </h2>

                  <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Bergabunglah dengan kami dan jangkau ribuan pelanggan lokal.
                    Setup mudah, fitur lengkap, dan support dedicated untuk
                    bisnis Anda.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/register-umkm">
                      <button className="bg-white text-teal-600 font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 inline-flex items-center justify-center gap-2 border-2 border-white/20">
                        Daftar Sekarang
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>

                    <Link href="/about-betim">
                      <button className="bg-teal-700/50 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-teal-700/70 transition-all duration-300 inline-flex items-center justify-center gap-2">
                        Pelajari Lebih Lanjut
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Feature Cards - Light theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <AnimatedWrapper delay={0.1}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kembangkan Bisnis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Jangkau ribuan pelanggan lokal yang aktif mencari produk
                  seperti milik Anda
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.2}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kelola dengan Mudah
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dashboard sederhana untuk mengelola pesanan, inventori, dan
                  hubungan pelanggan
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.3}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tanpa Biaya Setup
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mulai berjualan langsung tanpa biaya di muka atau biaya
                  tersembunyi
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
