// src/components/sections/home/FeaturedProducts.tsx
"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

// Data produk featured
const products = [
  {
    image: '/img-src/es-coklat.jpg',
    tag: 'Best Seller',
    tagColor: 'bg-red-500',
    name: 'Es Coklat',
    store: 'Palas Kopi Coffee',
    rating: 4.9,
    price: '15.000',
  },
  {
    image: '/img-src/oceana.jpg',
    tag: 'New',
    tagColor: 'bg-yellow-500',
    name: 'Oceana',
    store: 'Mostly Coffee',
    rating: 4.9,
    price: '30.000',
  },
  {
    image: '/img-src/pancong.jpg',
    tag: 'Best Seller',
    tagColor: 'bg-red-500',
    name: 'Pancong Coklat Keju',
    store: 'Seblak Kabita Beji',
    rating: 4.9,
    price: '9.000',
  },
  {
    image: '/img-src/bakmi.jpg',
    tag: 'Best Seller',
    tagColor: 'bg-red-500',
    name: 'Bakmi Ayam',
    store: 'Bakmi Beji 88',
    rating: 4.9,
    price: '15.000',
  },
  {
    image: '/img-src/kopi-susu.jpg',
    tag: 'Popular',
    tagColor: 'bg-teal-600',
    name: 'Kopi Susu Gula Aren',
    store: 'Kopi Kenangan Lokal',
    rating: 4.8,
    price: '18.000',
  },
  {
    image: '/img-src/pisang-goreng.jpg',
    tag: 'New',
    tagColor: 'bg-yellow-500',
    name: 'Pisang Goreng Keju',
    store: 'Gorengan Pak Udin',
    rating: 4.7,
    price: '12.000',
  },
];

// Product Card Component
function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group flex-shrink-0 w-72 snap-start">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        
        <div className="relative h-56 bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="288px"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}>
            {product.tag}
          </span>

          <button className="absolute bottom-3 right-3 bg-white text-teal-600 p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-teal-600 hover:text-white transform translate-y-2 group-hover:translate-y-0">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-1">
            {product.store}
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center bg-yellow-50 px-2.5 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
            </div>
            <span className="text-xl font-bold text-teal-600">
              Rp {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <AnimatedWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Featured </span>
              <span className="text-teal-600">Products</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Hand-picked products from local stores
            </p>
          </div>
        </AnimatedWrapper>

        <div className="relative">
          
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-teal-600 p-3 rounded-full shadow-lg hover:bg-teal-600 hover:text-white transition-all duration-300 -translate-x-4 border border-gray-200"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-teal-600 p-3 rounded-full shadow-lg hover:bg-teal-600 hover:text-white transition-all duration-300 translate-x-4 border border-gray-200"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-2"
          >
            {products.map((product, index) => (
              <AnimatedWrapper key={index} delay={index * 0.05}>
                <ProductCard product={product} />
              </AnimatedWrapper>
            ))}
          </div>

          <div className="md:hidden text-center mt-6 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Geser untuk melihat lebih banyak
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}