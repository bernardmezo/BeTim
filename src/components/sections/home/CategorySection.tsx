// src/components/sections/home/CategorySection.tsx

"use client";

import { motion } from 'framer-motion';
import { UtensilsCrossed, Coffee, Cake, ShoppingBasket, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'Makanan Berat',
    description: 'Hidangan utama lezat dari koki dan warung lokal terbaik.',
    subCategories: ['Nasi & Bubur', 'Mie & Pasta', 'Ayam & Bebek', 'Sate'],
    icon: UtensilsCrossed,
    gradient: 'from-teal-600 to-cyan-600',
  },
  {
    name: 'Kopi & Teh',
    description: 'Kopi artisan dan teh tradisional untuk menemani hari Anda.',
    subCategories: ['Kopi Artisan', 'Espresso', 'Teh Premium', 'Matcha'],
    icon: Coffee,
    gradient: 'from-cyan-600 to-emerald-600',
  },
  {
    name: 'Minuman',
    description: 'Minuman segar, smoothies, dan berbagai pilihan kekinian.',
    subCategories: ['Jus & Smoothies', 'Soda', 'Milk Series', 'Tradisional'],
    icon: Cake,
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    name: 'Kebutuhan Harian',
    description: 'Sayuran, buah, dan kebutuhan pokok dari pedagang lokal.',
    subCategories: ['Sayuran Segar', 'Buah-buahan', 'Beras & Minyak', 'Bumbu'],
    icon: ShoppingBasket,
    gradient: 'from-teal-600 to-emerald-600',
  },
];

function CategoryCard({ category, index }: { category: typeof categories[0], index: number }) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="mb-6 group"
    >
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        
        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            
            {/* Icon Container */}
            <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
            </div>

            <div className="flex-1 min-w-0">
              {/* Category Name */}
              <h3 className={`text-xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
                {category.description}
              </p>
              
              {/* Sub Categories Tags */}
              <div className="flex flex-wrap gap-2">
                {category.subCategories.map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1.5 bg-white/70 backdrop-blur-sm border border-white/60 rounded-lg text-xs font-semibold text-slate-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
      </div>
    </motion.div>
  );
}

export default function CategorySection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Ambient Background - Static */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal-300/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-300/40 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-300/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            Kategori Produk
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Semua Kebutuhan Anda,{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Semua dari Lokal
            </span>
          </h2>

          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            Jelajahi ekosistem lengkap produk UMKM lokal pilihan
          </p>
        </motion.div>

        {/* Category Cards */}
        <div>
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.name} 
              category={category} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />
    </section>
  );
}