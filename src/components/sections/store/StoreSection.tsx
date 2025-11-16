// src/components/sections/stores/StoreSection.tsx
"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Phone,
  Heart,
  Sparkles,
  Filter,
  TrendingUp,
  Store,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const allStores = [
  {
    id: 1,
    name: "Warung Bakso Tonjok Mas GP",
    rating: 4.8,
    reviews: 124,
    img: "/img-src/bakso-gp1.png",
    desc: "Restoran usaha kuliner (UMKM) berupa warung bakso yang populer dengan sajian bakso urat",
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
    desc: "Restoran mie & bakmi dengan variasi topping seperti ayam kecap, bakso, pangsit",
    address: "123 Main Street, Downtown",
    category: "jasa",
    hours: "09:00 - 18:00",
  },
  {
    id: 3,
    name: "Warung Ibu Rum",
    rating: 4.8,
    reviews: 156,
    img: "/img-src/nasiuduk3.png",
    desc: "Sebuah Usaha Mikro penjagadis (warung tenda/kaki lima) di Beji Timur yang spesialis menyajikan",
    address: "123 Main Street, Downtown",
    category: "minuman",
    hours: "17:00 - 23:00",
  },
  {
    id: 4,
    name: "Pondor Steak & Stake",
    rating: 4.9,
    reviews: 203,
    img: "/img-src/steak1.png",
    desc: "Steak house dengan cita rasa western dan harga terjangkau",
    address: "123 Main Street, Downtown",
    category: "makanan",
    hours: "11:00 - 22:00",
  },
  {
    id: 5,
    name: "Warung si Nopal",
    rating: 4.7,
    reviews: 67,
    img: "/img-src/toko-nopal1.png",
    desc: "Apotek lengkap dengan obat-obatan dan konsultasi gratis",
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
    desc: "Es serut dengan berbagai varian rasa dan topping",
    address: "123 Main Street, Downtown",
    category: "minuman",
    hours: "13:00 - 21:00",
  },
  {
    id: 7,
    name: "Bakmi88 Beji",
    rating: 4.6,
    reviews: 94,
    img: "/img-src/bakmi88-2.png",
    desc: "Restoran mie & bakmi dengan variasi topping seperti ayam kecap, bakso, pangsit",
    address: "Jl. Ridwan Rais, Beji Timur",
    category: "makanan",
    hours: "10:00 - 21:00",
  },
  {
    id: 8,
    name: "Kost Pondok Ismata Putri",
    rating: 4.6,
    reviews: 45,
    img: "/img-src/kos1.jpg",
    desc: "Usaha UMKM di bidang jasa akomodasi (indekos) khusus Putri di area Beji",
    address: "Beji, Kota Depok",
    category: "jasa",
    hours: "24 Hours",
  },
  {
    id: 9,
    name: "Tempe Mendoan Dan Pecel Sayur",
    rating: 4.6,
    reviews: 78,
    img: "/img-src/mendoan1.png",
    desc: "Usaha kuliner yang menjual aneka jajanan dan makanan tradisional Indonesia",
    address: "Jalan Ridwan Rais Rt 01/02 Beji Timur",
    category: "makanan",
    hours: "07:00 - 21:00",
  },
  {
    id: 10,
    name: "Mosstly Coffee",
    rating: 4.8,
    reviews: 112,
    img: "/img-src/mostly1.png",
    desc: "Kafe modern, coffee shop populer di Beji. Hidden gem dengan suasana adem",
    address: "Jl. Taufiqurrahman No.57A, Beji Timur",
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
    desc: "Coffee shop modern dengan area outdoor yang asri, tempat nongkrong nyaman",
    address: "Jl. Pala No.2, Beji Tim.",
    category: "kopi & teh",
    hours: "11:00 - 22:00",
    featured: true,
  },
  {
    id: 12,
    name: "Seblak Kabita Beji",
    rating: 5.0,
    reviews: 112,
    img: "/img-src/pancong1.png",
    desc: "Usaha kuliner populer di kalangan mahasiswa, spesialis seblak dan kue pancong",
    address: "Jl. Kedasian, Beji Tim.",
    category: "kopi & teh",
    hours: "11:00 - 22:00",
    featured: true,
  },
];

const getCategoryClasses = (category: string) => {
  switch (category) {
    case "makanan":
      return "from-teal-600 to-emerald-600";
    case "kopi & teh":
      return "from-cyan-600 to-teal-600";
    case "minuman":
      return "from-emerald-600 to-cyan-600";
    case "Kebutuhan Sehari-hari":
      return "from-teal-500 to-emerald-500";
    case "jasa":
      return "from-cyan-500 to-teal-500";
    default:
      return "from-slate-600 to-slate-700";
  }
};

function StoreCard({ store, index }: { store: typeof allStores[0]; index: number }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="relative h-full bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300">
        {/* Image */}
        <div className="relative w-full h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 blur-xl" />
          <Image
            src={store.img}
            alt={store.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Featured */}
          {store.featured && (
            <div className="absolute top-3 left-3 bg-white/40 backdrop-blur-md border border-white/60 text-teal-700 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              Featured
            </div>
          )}

          {/* Category */}
          <div className={`absolute bottom-3 left-3 px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${getCategoryClasses(store.category)}`}>
            {store.category}
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-amber-50/80 backdrop-blur-md border border-amber-100/60 rounded-xl px-3 py-2 shadow-lg shadow-amber-100/50">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-sm text-slate-800">{store.rating}</span>
            </div>
          </div>

          {/* Like */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-xl"
          >
            <Heart className={`w-5 h-5 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-slate-600"}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-teal-600 transition-colors">
            {store.name}
          </h3>

          <p className="text-sm text-slate-600 mb-4 line-clamp-2 min-h-[2.5rem]">
            {store.desc}
          </p>

          {/* Info */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <div className="p-1.5 bg-teal-50 rounded-lg">
                <MapPin className="w-3 h-3 text-teal-600" />
              </div>
              <span className="line-clamp-1">{store.address}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <div className="p-1.5 bg-cyan-50 rounded-lg">
                <Clock className="w-3 h-3 text-cyan-600" />
              </div>
              <span>{store.hours}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link href="/detail-umkm" className="flex-1">
              <button className="w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-sm rounded-xl transition-all">
                Lihat Detail
              </button>
            </Link>

            <button className="w-12 h-12 bg-white/60 backdrop-blur-md border-2 border-teal-500/50 text-teal-600 rounded-xl hover:bg-teal-600 hover:text-white transition-all">
              <Phone className="w-4 h-4 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StoreSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("rating-high");
  const [isFocused, setIsFocused] = useState(false);

  const filteredStores = useMemo(() => {
    let filtered = [...allStores];

    if (searchQuery.trim()) {
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category !== "all") {
      filtered = filtered.filter(
        (s) => s.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (sort === "rating-high") filtered.sort((a, b) => b.rating - a.rating);
    else if (sort === "rating-low") filtered.sort((a, b) => a.rating - b.rating);
    else if (sort === "newest") filtered.sort((a, b) => b.id - a.id);

    return filtered;
  }, [searchQuery, category, sort]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative py-30 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-300/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-300/40 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Store className="w-3 h-3" />
              Direktori Lengkap
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3">
              Semua{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Toko UMKM
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg">
              Temukan {allStores.length} UMKM lokal terbaik di sekitarmu
            </p>
          </motion.div>

          {/* Search + Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-5xl mx-auto"
          >
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-4 md:p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                      isFocused ? "text-teal-600" : "text-slate-400"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Cari nama toko..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full py-3.5 lg:py-4 pl-12 pr-4 bg-white/70 border-2 border-white/60 rounded-2xl outline-none text-slate-700 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Category */}
                <div className="relative group">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none z-10 transition-colors" />

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="appearance-none w-full lg:min-w-[200px] py-3.5 lg:py-4 pl-12 pr-10 bg-white/70 border-2 border-white/60 rounded-2xl outline-none text-slate-700 focus:border-cyan-500 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="all">Semua Kategori</option>
                    <option value="makanan">Makanan</option>
                    <option value="minuman">Minuman</option>
                    <option value="kopi & teh">Kopi & Teh</option>
                    <option value="jasa">Jasa</option>
                    <option value="Kebutuhan Sehari-hari">Kebutuhan Sehari-hari</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none z-10" />
                </div>

                {/* Sort */}
                <div className="relative group">
                  <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none z-10" />

                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none w-full lg:min-w-[180px] py-3.5 lg:py-4 pl-12 pr-10 bg-white/70 border-2 border-white/60 rounded-2xl outline-none text-slate-700 focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="rating-high">Rating Tertinggi</option>
                    <option value="rating-low">Rating Terendah</option>
                    <option value="newest">Terbaru</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none z-10" />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/40">
                <p className="text-slate-600 text-sm">
                  Menampilkan{" "}
                  <span className="font-bold text-teal-600">
                    {filteredStores.length}
                  </span>{" "}
                  dari {allStores.length} toko
                </p>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            {filteredStores.length > 0 ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredStores.map((store, i) => (
                  <StoreCard key={store.id} store={store} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-16 text-center"
              >
                <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-400 mb-2">
                  Tidak ada toko ditemukan
                </h3>
                <p className="text-slate-500">
                  Coba ubah kata kunci atau filter pencarian
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
