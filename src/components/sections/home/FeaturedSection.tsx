// src/components/sections/home/FeaturedSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

const stores = [
  {
    image: "/img-src/bakmi88-2.png", // <-- GANTI PATH GAMBAR
    category: "Heavy Food",
    rating: 4.8,
    name: "Bakmi Beji 88",
    description:
      "Bakmi ayam dengan variasi topping seperti ayam kecap, bakso, pangsit...",
    location: "123 Main Street, Downtown",
  },
  {
    image: "/img-src/mendoan4.png", // <-- GANTI PATH GAMBAR
    category: "Heavy Food",
    rating: 4.8,
    name: "Tempe Mendoan Dan Pecel Sayur",
    description:
      "Warung makan yang menyajikan aneka jajanan dan makanan tradisional...",
    location: "123 Main Street, Downtown",
  },
  {
    image: "/img-src/steam1.png", // <-- GANTI PATH GAMBAR
    category: "Service",
    rating: 4.8,
    name: "Satria Steam Motor & Helmet",
    description:
      "Jasa cuci motor dan helm dengan pelayanan cepat serta hasil...",
    location: "123 Main Street, Downtown",
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedWrapper>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Featured Local Stores
            </h2>
            <p className="text-gray-600">
              Discover the best stores in your community
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            // BUNGKUS SETIAP KARTU DENGAN DELAY BERBEDA
            <AnimatedWrapper key={index} delay={index * 0.1}>
              <div
                key={index}
                className="border rounded-lg shadow-lg overflow-hidden"
              >
                {/* */}
                <div className="w-full h-48 bg-gray-300 relative">
                  {<Image
                    src={store.image}
                    alt={store.name}
                    fill
                    style={{ objectFit: "cover" }}
                />}
                  <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    {store.category}
                  </span>
                  <span className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    {store.rating}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {store.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 h-16">
                    {store.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <MapPin className="w-4 h-4 mr-2" />
                    {store.location}
                  </div>
                  <Link
                    href="#"
                    className="block w-full text-center border border-[#129991] text-[#129991] rounded-full py-2 px-4 hover:bg-[#5BAAA8]/20 hover:shadow-md transition-all duration-200"
                  >
                    View Store
                  </Link>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/store-umkm"
            className="bg-green-500 text-white font-semibold rounded-full py-3 px-8 hover:bg-green-600 transition-colors"
          >
            View All UMKM <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
