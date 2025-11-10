// src/components/sections/home/StoreSection.tsx
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Phone,
  Heart,
  Sparkles,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const stores = [
  {
    id: 1,
    name: "Warung Bakso Tonjok Mas GP",
    rating: 4.8,
    reviews: 124,
    img: "/img-src/bakso-gp1.png",
    desc: "Restoran usaha kuliner (UMKM) berupa warung bakso yang populer dengan sajian bakso urat...",
    address: "123 Main Street, Downtown",
    category: "makanan",
    hours: "10:00 - 21:00",
    featured: true,
  },
  {
    id: 2,
    name: "Satria Steam Motor & Helmet",
    rating: 4.8,
    reviews: 89,
    img: "/img-src/steam1.png",
    desc: "Restoran mie & bakmi dengan variasi topping seperti ayam kecap, bakso, pangsit.",
    address: "123 Main Street, Downtown",
    category: "jasa",
    hours: "09:00 - 18:00",
    featured: false,
  },
  {
    id: 3,
    name: "Warung Ibu Rum",
    rating: 4.8,
    reviews: 156,
    img: "/img-src/nasiuduk3.png",
    desc: "Sebuah Usaha Mikro penjagadis (warung tenda/kaki lima) di Beji Timur yang spesialis menyajikan...",
    address: "123 Main Street, Downtown",
    category: "minuman",
    hours: "17:00 - 23:00 atau hingga habis",
    featured: false,
  },
  {
    id: 4,
    name: "Pondor Steak & Stake",
    rating: 4.9,
    reviews: 203,
    img: "/img-src/steak1.png",
    desc: "Steak house dengan cita rasa western dan harga terjangkau.",
    address: "123 Main Street, Downtown",
    category: "makanan",
    hours: "11:00 - 22:00",
    featured: false,
  },
  {
    id: 5,
    name: "Warung si Nopal",
    rating: 4.7,
    reviews: 67,
    img: "/img-src/toko-nopal1.png",
    desc: "Apotek lengkap dengan obat-obatan dan konsultasi gratis.",
    address: "123 Main Street, Downtown",
    category: "Kebutuhan Sehari-hari",
    hours: "08:00 - 20:00",
    featured: true,
  },
  {
    id: 6,
    name: "Es Kuwut",
    rating: 4.8,
    reviews: 178,
    img: "/img-src/kuwut1.png",
    desc: "Es serut dengan berbagai varian rasa dan topping.",
    address: "123 Main Street, Downtown",
    category: "minuman",
    hours: "13:00 - 21:00",
    featured: false,
  },
  {
    id: 7,
    name: "Bakmi88 Beji",
    rating: 4.6,
    reviews: 94,
    img: "/img-src/bakmi88-2.png",
    desc: "Restoran mie & bakmi dengan variasi topping seperti ayam kecap, bakso, pangsit.",
    address:
      "Jl. Ridwan Rais, Beji Timur, Kecamatan Beji, Kota Depok, Jawa Barat ",
    category: "makanan",
    hours: "10:00 - 21:00",
    featured: false,
  },
  {
    id: 8,
    name: "Kost Pondok Ismata Putri",
    rating: 4.6,
    reviews: 45,
    img: "/img-src/kos1.jpg",
    desc: "Sebuah usaha UMKM di bidang jasa akomodasi (indekos) yang menyediakan kamar kost khusus untuk Putri (wanita) di area Beji, Depok",
    address:
      "Beji, Kota Depok, Jawa Barat (Dekat dengan Politeknik Negeri Jakarta/PNJ dan RS Universitas Indonesia)",
    category: "jasa",
    hours: "24 Hours",
    featured: false,
  },
  {
    id: 9,
    name: "Tempe Mendoan Dan Pecel Sayur",
    rating: 4.6,
    reviews: 78,
    img: "/img-src/mendoan1.png",
    desc: "Usaha kuliner (UMKM) yang menjual aneka jajanan dan makanan tradisional Indonesia, khususnya pecel sayur, aneka gorengan (seperti tempe mendoan, bakwan), dan bubur",
    address: "Jalan Ridwan Rais Rt 01/02 Beji Timur, Depok, Jawa Barat",
    category: "makanan",
    hours: "07:00 - 21:00",
    featured: false,
  },
  {
    id: 10,
    name: "Mosstly Coffee",
    rating: 4.8,
    reviews: 112,
    img: "/img-src/mostly1.png",
    desc: "Sebuah UMKM (Usaha Kecil/Menengah) berupa kafe modern, coffee shop, dan eatery yang populer di Beji. Dikenal sebagai hidden gem dengan suasana yang adem (banyak area terbuka/semi-outdoor) dan cocok untuk WFC (Work From Cafe).",
    address:
      "Lokasi 1: Jl. Taufiqurrahman No.57A, Beji Timur, Kec. Beji, Kota Depok.",
    category: "kopi & teh",
    hours: "09:00 - 22:00",
    featured: true,
  },
  {
    id: 11,
    name: "Palas Kopi",
    rating: 4.6,
    reviews: 112,
    img: "/img-src/palaskopi2.png",
    desc: "Sebuah UMKM (Usaha Kecil/Menengah) berupa coffee shop modern yang berlokasi di Beji Timur. Dikenal sebagai tempat nongkrong yang nyaman dengan area outdoor yang asri, menyajikan berbagai minuman kopi dan makanan ringan pendamping",
    address:
      "Jl. Pala No.2, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422.",
    category: "kopi & teh",
    hours: "11:00 - 22:00",
    featured: true,
  },
  {
    id: 12,
    name: "Seblak Kabita Beji (atau Warkop Pancong dan Seblak Kabita)",
    rating: 5.0,
    reviews: 112,
    img: "/img-src/pancong1.png",
    desc: "Sebuah usaha kuliner (UMKM) yang sangat populer di kalangan mahasiswa/pelajar di Beji. Usaha ini dikenal sebagai warkop/kedai yang spesialis menjual jajanan kekinian, terutama Seblak dengan berbagai level kepedasan dan Kue Pancong lumer",
    address:
      "Jl. Kedasian, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422",
    category: "kopi & teh",
    hours: "11:00 - 22:00",
    featured: true,
  },
];

// Category styles using Tailwind
const getCategoryClasses = (category: string) => {
  switch (category) {
    case "makanan":
      return "bg-gradient-to-br from-[#129991]/95 to-[#0d7269]/95";
    case "kopi & teh":
      return "bg-gradient-to-br from-[#15b8ad]/95 to-[#129991]/95";
    case "minuman":
      return "bg-gradient-to-br from-[#0d7269]/95 to-[#0a5850]/95";
    case "Kebutuhan Sehari-hari":
      return "bg-gradient-to-br from-[#129991]/95 to-[#15b8ad]/95";
    case "jasa":
      return "bg-gradient-to-br from-[#15b8ad]/95 to-[#18c7bb]/95";
    default:
      return "bg-gradient-to-br from-gray-600/95 to-gray-700/95";
  }
};

// Simple Card Component with light hover effect
function StoreCard({
  store,
  index,
}: {
  store: (typeof stores)[0];
  index: number;
}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { type: "spring", stiffness: 600, damping: 22 }
      }}
      className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-[0_20px_50px_rgba(18,153,145,0.3)] overflow-hidden border border-gray-100 transition-all duration-200 ease-out"
    >
      {/* Store Image Container */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image src={store.img} alt={store.name} fill className="object-cover" />

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
        <div
          className={`absolute bottom-3 left-3 px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-md shadow-md ${getCategoryClasses(
            store.category
          )}`}
        >
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
              <span className="font-bold text-sm text-gray-900 leading-none">
                {store.rating}
              </span>
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
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </motion.button>
      </div>

      {/* Store Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 overflow-hidden text-ellipsis whitespace-nowrap hover:text-[#129991] transition-colors duration-300">
          {store.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 min-h-10 leading-6 line-clamp-2">
          {store.desc}
        </p>

        {/* Info with icons */}
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-gray-600 group">
            <MapPin className="w-4 h-4 text-[#129991] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {store.address}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 group">
            <Clock className="w-4 h-4 text-[#129991] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {store.hours}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1"
          >
            <Link
              href="/detail-umkm"
              className="relative overflow-hidden block rounded-xl group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#129991] to-[#15b8ad]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#15b8ad] to-[#18c7bb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 block py-3 text-white font-semibold text-sm text-center">
                View Store
              </span>
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 border-2 border-[#129991] text-[#129991] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#129991] hover:text-white hover:shadow-md hover:shadow-[#129991]/30"
          >
            <Phone className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// state (tempat menyimpan data yang bisa berubah-ubah)
const StoreSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("semua kategori");
  const [selectedSort, setSelectedSort] = useState("Urut berdasarkan Rating");
  const pathname = usePathname();

  // Filter and sort stores
  const filteredAndSortedStores = React.useMemo(() => {
    let filtered = [...stores];

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((store) =>
        store.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "semua kategori") {
      filtered = filtered.filter(
        (store) =>
          store.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort stores
    if (selectedSort === "Rating Tertinggi") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Rating Terendah") {
      filtered.sort((a, b) => a.rating - b.rating);
    } else if (selectedSort === "baru") {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedSort]);

  return (
    <section
      key={pathname}
      className="py-20 -mt-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#129991]/8 rounded-full blur-[3rem] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#15b8ad]/8 rounded-full blur-[3rem] animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#18c7bb]/8 rounded-full blur-[3rem] animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Daftar </span>
            <span className="bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] bg-clip-text text-transparent">
              Toko UMKM Lokal
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Temukan berbagai toko UMKM lokal terbaik di sekitarmu
          </p>
        </div>

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
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#129991] to-[#15b8ad] rounded-xl blur-xl transition-opacity duration-300 ${
                    isFocused ? "opacity-20" : "opacity-0"
                  }`}
                />
                <div className="relative">
                  <Search
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      isFocused ? "text-[#129991]" : "text-gray-400"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Cari Toko..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full py-3.5 pl-12 pr-4 text-gray-500 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white"
                  />
                </div>
              </div>

              {/* Dropdowns */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-3.5 px-5 text-gray-400 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white hover:border-gray-300 cursor-pointer min-w-[180px]"
              >
                <option>semua kategori</option>
                <option>makanan</option>
                <option>minuman</option>
                <option>kopi & teh</option>
                <option>jasa</option>
                <option>Kebutuhan Sehari-hari</option>
              </select>

              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="py-3.5 px-5 text-gray-400 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white hover:border-gray-300 cursor-pointer min-w-[180px]"
              >
                <option>Urut berdasar Rating</option>
                <option>Rating Tertinggi</option>
                <option>Rating Terendah</option>
                <option>Baru</option>
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
            Showing{" "}
            <span className="font-bold text-[#129991]">
              {stores.length} of {stores.length}
            </span>{" "}
            stores
          </motion.p>
        </motion.div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedStores.length > 0 ? (
            filteredAndSortedStores.map((store, index) => (
              <StoreCard key={store.id} store={store} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="flex flex-col items-center gap-4">
                <Search className="w-16 h-16 text-gray-300" />
                <h3 className="text-2xl font-bold text-gray-400">
                  Tidak ada toko ditemukan
                </h3>
                <p className="text-gray-500">
                  Coba ubah filter atau kata kunci pencarian Anda
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
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
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default StoreSection;
