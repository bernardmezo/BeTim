// src/components/sections/home/StoreSection.tsx
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Search, MapPin, Star, Clock, Phone, Heart, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

const stores = [
  {
    id: 1,
    name: "Warung Bakso Tonjok Mas GP",
    rating: 4.8,
    reviews: 124,
    img: "/img-src/bakso-gp1.png",
    desc: "Restoran usaha kuliner (UMKM) berupa warung bakso yang populer dengan sajian bakso urat...",
    address: "123 Main Street, Downtown",
    category: "Heavy Food",
    hours: "10:00 - 21:00",
    featured: true,
  },
  {
    id: 2,
    name: "Satria Steam Motor & Helmet",
    rating: 4.8,
    reviews: 89,
    img: "/img-src/store2.jpg",
    desc: "Restoran mie & bakmi dengan variasi topping seperti ayam kecap, bakso, pangsit.",
    address: "123 Main Street, Downtown",
    category: "Coffee & Tea",
    hours: "09:00 - 18:00",
    featured: false,
  },
  {
    id: 3,
    name: "Warung Ibu Rum",
    rating: 4.8,
    reviews: 156,
    img: "/img-src/store3.jpg",
    desc: "Sebuah Usaha Mikro penjagadis (warung tenda/kaki lima) di Beji Timur yang spesialis menyajikan...",
    address: "123 Main Street, Downtown",
    category: "Drinks",
    hours: "17:00 - 23:00 atau hingga habis",
    featured: false,
  },
  {
    id: 4,
    name: "Pondor Steak & Stake",
    rating: 4.9,
    reviews: 203,
    img: "/img-src/store2.jpg",
    desc: "Steak house dengan cita rasa western dan harga terjangkau.",
    address: "123 Main Street, Downtown",
    category: "Heavy Food",
    hours: "11:00 - 22:00",
    featured: false,
  },
  {
    id: 5,
    name: "Apotek Jaya",
    rating: 4.7,
    reviews: 67,
    img: "/img-src/store3.jpg",
    desc: "Apotek lengkap dengan obat-obatan dan konsultasi gratis.",
    address: "123 Main Street, Downtown",
    category: "Kebutuhan Sehari-hari",
    hours: "08:00 - 20:00",
    featured: true,
  },
  {
    id: 6,
    name: "Es Kuwwed Ice Shop",
    rating: 4.8,
    reviews: 178,
    img: "/img-src/bakso-gp1.png",
    desc: "Es serut dengan berbagai varian rasa dan topping.",
    address: "123 Main Street, Downtown",
    category: "Drinks",
    hours: "13:00 - 21:00",
    featured: false,
  },
];

// Category styles using Tailwind
const getCategoryClasses = (category: string) => {
  switch(category) {
    case 'Heavy Food':
      return "bg-gradient-to-br from-[#129991]/95 to-[#0d7269]/95";
    case 'Coffee & Tea':
      return "bg-gradient-to-br from-[#15b8ad]/95 to-[#129991]/95";
    case 'Drinks':
      return "bg-gradient-to-br from-[#0d7269]/95 to-[#0a5850]/95";
    case 'Kebutuhan Sehari-hari':
      return "bg-gradient-to-br from-[#129991]/95 to-[#15b8ad]/95";
    default:
      return "bg-gradient-to-br from-gray-600/95 to-gray-700/95";
  }
};

// 3D Tilt Card Component
function StoreCard({ store, index }: { store: typeof stores[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {/* Glow effect background */}
      <div className={`absolute -inset-1 bg-gradient-to-br from-[#129991] to-[#15b8ad] rounded-2xl blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-0'}`} />
      
      <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Store Image Container */}
        <div className="relative w-full h-56 overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={store.img}
              alt={store.name}
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Featured Badge */}
          {store.featured && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="absolute top-3 left-3 bg-gradient-to-br from-[#129991] to-[#15b8ad] text-white px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-[#129991]/40"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured</span>
            </motion.div>
          )}
          
          {/* Category Badge */}
          <div className={`absolute bottom-3 left-3 px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-md shadow-md ${getCategoryClasses(store.category)}`}>
            {store.category}
          </div>

          {/* Rating Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-3 right-3 bg-white/95 backdrop-blur-xl rounded-xl px-3 py-2.5 shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <Star className="w-4.5 h-4.5 fill-yellow-400 text-yellow-400" />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-gray-900 leading-none">{store.rating}</span>
                <span className="text-xs text-gray-600">({store.reviews})</span>
              </div>
            </div>
          </motion.div>
          
          {/* Like Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xl p-2.5 rounded-full shadow-md"
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
            />
          </motion.button>
        </div>

        {/* Store Info */}
        <div className="p-5 relative" style={{ transform: 'translateZ(20px)' }}>
          <h3 className={`text-xl font-bold text-gray-900 mb-2 overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-300 ${
            isHovered ? 'text-[#129991]' : ''
          }`}>
            {store.name}
          </h3>

          <p className="text-sm text-gray-600 mb-4 min-h-10 leading-6 line-clamp-2">
            {store.desc}
          </p>

          {/* Info with icons */}
          <div className="flex flex-col gap-2 mb-5">
            <div className="flex items-center gap-2 text-sm text-gray-600 group">
              <MapPin className="w-4 h-4 text-[#129991] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">{store.address}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 group">
              <Clock className="w-4 h-4 text-[#129991] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">{store.hours}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 relative overflow-hidden rounded-xl group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#129991] to-[#15b8ad]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#15b8ad] to-[#18c7bb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 block py-3 text-white font-semibold text-sm">
                View Store
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border-2 border-[#129991] text-[#129991] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#129991] hover:text-white hover:shadow-md hover:shadow-[#129991]/30"
            >
              <Phone className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const StoreSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const pathname = usePathname();

  return (
    <section key={pathname} className="py-20 mt-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#129991]/8 rounded-full blur-[3rem] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#15b8ad]/8 rounded-full blur-[3rem] animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#18c7bb]/8 rounded-full blur-[3rem] animate-blob animation-delay-4000" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Local Stores
          </h2>
          <p className="text-lg text-gray-600">
            Discover amazing stores in your community
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-[#129991] to-[#15b8ad] rounded-xl blur-xl transition-opacity duration-300 ${
                  isFocused ? 'opacity-20' : 'opacity-0'
                }`} />
                <div className="relative">
                  <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    isFocused ? 'text-[#129991]' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    placeholder="Search Store..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full py-3.5 pl-12 pr-4 text-gray-500 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white"
                  />
                </div>
              </div>

              {/* Dropdowns */}
              <select className="py-3.5 px-5 text-gray-400 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white hover:border-gray-300 cursor-pointer min-w-[180px]">
                <option>All Category</option>
                <option>Heavy Food</option>
                <option>Coffee & Tea</option>
                <option>Drinks</option>
                <option>Kebutuhan Sehari-hari</option>
              </select>

              <select className="py-3.5 px-5 text-gray-400 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white hover:border-gray-300 cursor-pointer min-w-[180px]">
                <option>Sort By Rating</option>
                <option>Highest Rating</option>
                <option>Lowest Rating</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-1 bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] rounded-full my-6 shadow-md shadow-[#129991]/30"
          />

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600"
          >
            Showing <span className="font-bold text-[#129991]">{stores.length} of {stores.length}</span> stores
          </motion.p>
        </motion.div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {stores.map((store, index) => (
            <StoreCard key={store.id} store={store} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          33% { 
            transform: translate(30px, -50px) scale(1.1); 
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.9); 
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default StoreSection;