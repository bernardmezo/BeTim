// src/components/sections/home/FeaturedProducts.tsx
"use client";

import Image from "next/image";
import { Star, Sparkles, TrendingUp } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import { useState } from "react";

const products = [
  {
    image: "/img-src/palaskopi4.png",
    tag: "Best Seller",
    tagColor: "from-slate-700 to-slate-900",
    name: "Es Coklat Signature",
    store: "Palas Kopi",
    rating: 4.9,
    price: "15.000",
  },
  {
    image: "/img-src/mostly4.png",
    tag: "New",
    tagColor: "from-blue-600 to-blue-700",
    name: "Oceana Blue Latte",
    store: "Mostly Coffee",
    rating: 4.9,
    price: "30.000",
  },
  {
    image: "/img-src/pancong2.png",
    tag: "Viral",
    tagColor: "from-purple-600 to-purple-700",
    name: "Pancong Lumer Keju",
    store: "Seblak Kabita",
    rating: 4.8,
    price: "9.000",
  },
  {
    image: "/img-src/bakmi88-5.png",
    tag: "Favorite",
    tagColor: "from-rose-600 to-rose-700",
    name: "Bakmi Ayam Komplit",
    store: "Bakmi Beji 88",
    rating: 4.9,
    price: "18.000",
  },
  {
    image: "/img-src/palaskopi3.png",
    tag: "Popular",
    tagColor: "from-teal-600 to-emerald-600",
    name: "Kopi Gula Aren",
    store: "Kopi Kenangan",
    rating: 4.8,
    price: "18.000",
  },
  {
    image: "/img-src/mendoan2.png",
    tag: "Snack",
    tagColor: "from-orange-600 to-orange-700",
    name: "Tahu Gejrot Cirebon",
    store: "Gorengan Pak Udin",
    rating: 4.7,
    price: "12.000",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex-shrink-0 w-56 md:w-64 mx-3 select-none cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-emerald-400/20 rounded-3xl blur-xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Glass Card Container */}
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/70 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Image Area with Glass Frame */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          {/* Decorative Gradient Behind */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 blur-2xl transition-all duration-700 ${
              isHovered ? "scale-110 opacity-60" : "scale-100 opacity-30"
            }`}
          />

          {/* Product Image */}
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className={`object-cover transition-all duration-700 ${
                isHovered ? "scale-110 rotate-1" : "scale-100 rotate-0"
              }`}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Shimmer Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ${
                isHovered ? "translate-x-full" : "-translate-x-full"
              }`}
            />
          </div>

          {/* Tag Badge with Gradient */}
          <div className="absolute top-3 left-3">
            <div
              className={`bg-gradient-to-r ${product.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1`}
            >
              <TrendingUp className="w-2.5 h-2.5" />
              <span>{product.tag}</span>
            </div>
          </div>

          {/* Rating Badge - Top Right */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md border border-white/70 rounded-xl px-2.5 py-1.5 shadow-xl">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-slate-900">
                {product.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Info Area - Glass Effect */}
        <div className="p-4 bg-gradient-to-b from-white/80 to-white/90 backdrop-blur-sm">
          {/* Store Name */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1 h-1 rounded-full bg-teal-500" />
            <p className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase">
              {product.store}
            </p>
          </div>

          {/* Product Name */}
          <h3 className="text-base font-extrabold text-slate-900 mb-3 leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-teal-600 transition-colors duration-300">
            {product.name}
          </h3>

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-400 font-medium mb-0.5">
                Harga
              </p>
              <p className="text-lg font-extrabold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Rp {product.price}
              </p>
            </div>

            {/* Decorative Icon */}
            <div
              className={`p-2 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 transition-all duration-300 ${
                isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
              }`}
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* Ambient Background Blobs - Matching Other Sections */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-teal-300/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-300/40 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-300/40 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header Section */}
        <AnimatedWrapper>
          <div className="text-center mb-16 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" />
              Produk Pilihan
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Best Seller{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Minggu Ini
              </span>
            </h2>

            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
              Produk-produk terpopuler dan paling disukai pelanggan dari
              berbagai UMKM lokal
            </p>
          </div>
        </AnimatedWrapper>

        {/* Infinite Scroll Marquee */}
        <AnimatedWrapper delay={0.2}>
          <div
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="overflow-hidden py-8">
              <div
                className={`flex w-max transition-all duration-300 ${
                  isPaused ? "" : "animate-infinite-scroll"
                }`}
              >
                {/* Render 3x untuk seamless loop */}
                {[...products, ...products, ...products].map(
                  (product, index) => (
                    <ProductCard
                      key={`${index}-${product.name}`}
                      product={product}
                    />
                  )
                )}
              </div>
            </div>

            {/* Pause Indicator */}
            {isPaused && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-white/70 px-4 py-2 rounded-full shadow-lg">
                <p className="text-xs font-bold text-slate-600 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-teal-500 rounded-full" />
                    <div className="w-1 h-3 bg-teal-500 rounded-full" />
                  </div>
                  Paused
                </p>
              </div>
            )}
          </div>
        </AnimatedWrapper>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}