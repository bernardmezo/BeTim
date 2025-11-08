"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

const products = [
  {
    image: "/img-src/palaskopi4.png",
    tag: "Best Seller",
    tagColor: "bg-red-500",
    name: "Es Coklat",
    store: "Palas Kopi Coffee",
    rating: 4.9,
    price: "15.000",
  },
  {
    image: "/img-src/mostly4.png",
    tag: "New",
    tagColor: "bg-yellow-500",
    name: "Oceana",
    store: "Mostly Coffee",
    rating: 4.9,
    price: "30.000",
  },
  {
    image: "/img-src/pancong2.png",
    tag: "Best Seller",
    tagColor: "bg-red-500",
    name: "Pancong Coklat Keju",
    store: "Seblak Kabita Beji",
    rating: 4.9,
    price: "9.000",
  },
  {
    image: "/img-src/bakmi88-5.png",
    tag: "Best Seller",
    tagColor: "bg-red-500",
    name: "Bakmi Ayam",
    store: "Bakmi Beji 88",
    rating: 4.9,
    price: "15.000",
  },
  {
    image: "/img-src/palaskopi3.png",
    tag: "Popular",
    tagColor: "bg-teal-600",
    name: "Kopi Susu Gula Aren",
    store: "Kopi Kenangan Lokal",
    rating: 4.8,
    price: "18.000",
  },
  {
    image: "/img-src/mendoan2.png",
    tag: "New",
    tagColor: "bg-yellow-500",
    name: "Tahu Gejrot",
    store: "Gorengan Pak Udin",
    rating: 4.7,
    price: "12.000",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group flex-shrink-0 w-72 mb-2">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
        <div className="relative h-56 bg-gray-100 overflow-hidden">
          {/* Gambar */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="288px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Gradien overlay muncul dari bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Tag */}
          <span
            className={`absolute top-3 left-3 ${product.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm`}
          >
            {product.tag}
          </span>

          {/* Informasi muncul di dalam gambar saat hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <h3 className="text-lg font-semibold text-white drop-shadow-md">
              {product.name}
            </h3>
            <p className="text-sm text-gray-200">{product.store}</p>
          </div>
        </div>

        {/* Informasi tetap di bawah */}
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center bg-yellow-50 px-2.5 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-sm font-semibold text-gray-700">
                {product.rating}
              </span>
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
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.25;
    let rafId: number;

    const animate = () => {
      if (!isPaused.current) {
        position -= speed;
        track.style.transform = `translateX(${position}px)`;
        if (Math.abs(position) >= track.scrollWidth / 2) {
          position = 0;
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => (isPaused.current = true);
    const handleMouseLeave = () => (isPaused.current = false);

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const duplicatedProducts = [...products, ...products];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Produk </span>
              <span className="text-teal-600">Unggulan</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Temukan produk lokal terbaik pilihan
            </p>
          </div>
        </AnimatedWrapper>

        <div className="relative overflow-hidden no-scrollbar">
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform cursor-pointer"
            style={{
              width: "max-content",
              transform: "translateX(0)",
              transition: "transform 0.1s linear",
            }}
          >
            {duplicatedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
