// src/components/sections/about/about.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Heart, TrendingUp, Award, Sparkles } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Users,
    value: "10+",
    label: "UMKM Terdaftar",
  },
  {
    icon: Heart,
    value: "50+",
    label: "Pelanggan Puas",
  },
  {
    icon: Award,
    value: "10+",
    label: "Produk Unggulan",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Tingkat Kepuasan",
  },
];

const values = [
  {
    icon: Target,
    title: "Misi Kami",
    description: "Memberdayakan UMKM lokal dengan menyediakan platform digital yang mudah diakses untuk meningkatkan visibilitas dan penjualan mereka di era digital.",
  },
  {
    icon: Users,
    title: "Komunitas",
    description: "Membangun ekosistem yang kuat antara UMKM dan konsumen lokal, menciptakan hubungan berkelanjutan yang saling menguntungkan.",
  },
  {
    icon: Heart,
    title: "Dedikasi",
    description: "Berkomitmen penuh untuk mendukung pertumbuhan ekonomi lokal dengan memberikan layanan terbaik kepada setiap mitra UMKM kami.",
  },
];

const team = [
  {
    name: "Hari Bernardo",
    role: "Founder & CEO",
    image: "/img-src/poto-tim.jpg",
  },
  {
    name: "Yovana Ibnu Sina",
    role: "Marketing Director",
    image: "/img-src/poto-tim.jpg",
  },
  {
    name: "Muhamad Agung Somomiharjo",
    role: "Tech Lead",
    image: "/img-src/poto-tim.jpg",
  },
];

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#129991]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#15b8ad]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mt-8 mb-8 leading-tight">
              <span className="text-gray-900">Memberdayakan </span>
              <span className="bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] 
                             bg-clip-text text-transparent">
                UMKM Lokal
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              BeTim adalah platform digital yang menghubungkan UMKM lokal dengan konsumen di Beji Timur, Depok. 
              Kami berkomitmen untuk mendukung pertumbuhan ekonomi lokal melalui teknologi dan inovasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#129991] to-[#15b8ad]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl">
                    <stat.icon className="w-10 h-10" />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-3">{stat.value}</div>
                <div className="text-white/95 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Visi & </span>
              <span className="bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] 
                             bg-clip-text text-transparent">
                Nilai Kami
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Kami percaya bahwa setiap UMKM memiliki potensi untuk berkembang dan kami hadir untuk mewujudkannya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                         transition-all duration-300 border border-gray-100
                         hover:border-[#129991]/30 group"
              >
                <div className="bg-gradient-to-br from-[#129991] to-[#15b8ad] 
                              w-20 h-20 rounded-2xl flex items-center justify-center mb-6
                              group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900">Cerita </span>
                <span className="bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] 
                               bg-clip-text text-transparent">
                  Kami
                </span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                BeTim dimulai dari keprihatinan kami melihat banyak UMKM lokal yang kesulitan 
                untuk berkembang di era digital. Kami percaya bahwa setiap usaha kecil memiliki 
                cerita unik dan produk berkualitas yang layak untuk dikenal lebih luas.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                Dengan menggabungkan teknologi dan semangat gotong royong, kami menciptakan 
                platform yang tidak hanya mempermudah transaksi, tetapi juga membangun komunitas 
                yang kuat antara pelaku usaha dan konsumen lokal.
              </p>

              <div className="flex gap-4 pt-4">
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-[#129991] mb-2">2025</div>
                  <div className="text-gray-600">Tahun Berdiri</div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-[#129991] mb-2">Depok</div>
                  <div className="text-gray-600">Beji Timur</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#129991] to-[#15b8ad] 
                              flex items-center justify-center text-white text-6xl font-bold">
                  BeTim
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#15b8ad]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#129991]/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Tim </span>
              <span className="bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] 
                             bg-clip-text text-transparent">
                Kami
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Orang-orang hebat di balik kesuksesan BeTim
            </p>
          </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                              transition-all duration-300 border border-gray-100">
                  <div className="relative h-80 bg-gradient-to-br from-[#129991] to-[#15b8ad] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-[#129991] font-semibold">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#129991] to-[#15b8ad]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bergabung dengan Kami
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Mari bersama-sama membangun ekonomi lokal yang lebih kuat dan berkelanjutan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#129991] font-bold text-lg rounded-full 
                               py-4 px-10 hover:bg-gray-50 transition-all duration-300
                               hover:scale-105 shadow-lg">
                Daftar Sebagai Mitra
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white font-bold text-lg 
                               rounded-full py-4 px-10 hover:bg-white/30 transition-all duration-300
                               border-2 border-white/50 hover:scale-105">
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}