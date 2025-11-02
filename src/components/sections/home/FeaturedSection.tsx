// src/components/sections/home/FeaturedSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

const stores = [
  {
    image: "/img-src/bakmi88-2.png",
    category: "Heavy Food",
    rating: 4.8,
    name: "Bakmi Beji 88",
    description: "Bakmi ayam dengan variasi topping seperti ayam kecap, bakso, pangsit...",
    location: "123 Main Street, Downtown",
  },
  {
    image: "/img-src/mendoan4.png",
    category: "Heavy Food",
    rating: 4.8,
    name: "Tempe Mendoan Dan Pecel Sayur",
    description: "Warung makan yang menyajikan aneka jajanan dan makanan tradisional...",
    location: "123 Main Street, Downtown",
  },
  {
    image: "/img-src/steam1.png",
    category: "Service",
    rating: 4.8,
    name: "Satria Steam Motor & Helmet",
    description: "Jasa cuci motor dan helm dengan pelayanan cepat serta hasil...",
    location: "123 Main Street, Downtown",
  },
];

// Store Card Component - Simple & Fast
function StoreCard({ store }: { store: typeof stores[0] }) {
  return (
    <div className="group border border-gray-200/50 rounded-3xl shadow-lg overflow-hidden 
                   bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
        <Image
          src={store.image}
          alt={store.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-[#129991] text-white text-xs font-bold px-4 py-2 rounded-full">
          {store.category}
        </span>
        
        {/* Rating Badge */}
        <span className="absolute top-4 right-4 bg-white text-gray-800 text-sm font-bold px-3 py-2 rounded-full flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
          {store.rating}
        </span>

        {/* Store Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">
            {store.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 h-12 line-clamp-2">
          {store.description}
        </p>
        
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <MapPin className="w-4 h-4 mr-2 text-[#129991]" />
          <span className="line-clamp-1">{store.location}</span>
        </div>
        
        <Link href="#" className="block">
          <button className="w-full bg-gradient-to-r from-[#129991] to-[#15b8ad]
                           text-white font-semibold rounded-full py-3 px-6
                           hover:opacity-90 transition-opacity duration-200
                           flex items-center justify-center gap-2">
            View Store
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section with Animation */}
        <AnimatedWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Featured </span>
              <span className="bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] 
                             bg-clip-text text-transparent">
                Local Stores
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Discover the best stores in your community
            </p>
          </div>
        </AnimatedWrapper>

        {/* Store Cards Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stores.map((store, index) => (
            <AnimatedWrapper key={index} delay={index * 0.1}>
              <StoreCard store={store} />
            </AnimatedWrapper>
          ))}
        </div>

        {/* CTA Button with Animation */}
        <AnimatedWrapper delay={0.4}>
          <div className="text-center">
            <Link href="/store-umkm">
              <button className="bg-gradient-to-r from-[#129991] to-[#15b8ad]
                               text-white font-bold text-lg
                               rounded-full py-4 px-10
                               hover:opacity-90 transition-opacity duration-200
                               inline-flex items-center gap-3">
                View All UMKM
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}