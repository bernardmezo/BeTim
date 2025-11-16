// src/components/ui/CategoryCard.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

// Tipe data yang kita harapkan
type Category = {
  name: string;
  description: string;
  subCategories: string[];
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  gradient: string;
  bgGradient: string;
};

type Props = {
  category: Category;
};

// "Bumbu" ringan untuk subkategori (animasi satu kali)
const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Setiap item muncul dengan jeda 0.05s
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function CategoryCard({ category }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = category.icon;

  // 1. KITA HANYA BUTUH 2 'useScroll' (BUKAN 10)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end 0.3"], // Animasi masuk akan selesai saat 30% di layar
  });

  // Animasi "Masuk" yang JAUH LEBIH SEDERHANA
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity,
        scale,
      }}
      className="sticky top-24 mb-16" // Jaga 'sticky'
    >
      {/* KARTU KONTEN (STYLING TETAP SAMA) */}
      <div
        className={`
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br ${category.bgGradient}
          border border-gray-200/50 shadow-2xl
        `}
      >
        {/* Glassmorphism overlay (Tetap) */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

        {/* Content (Relative) */}
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Ikon (Animasi Disederhanakan) */}
            <motion.div
              style={{
                scale: useTransform(scrollYProgress, [0, 0.5], [0.5, 1]), // Sedikit scale-in
              }}
              className={`
                shrink-0 w-24 h-24 rounded-2xl
                bg-gradient-to-br ${category.gradient}
                flex items-center justify-center shadow-2xl
              `}
            >
              <Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
            </motion.div>

            {/* Text Content (TANPA Animasi 'x') */}
            <div className="flex-1">
              <h3
                className={`
                  text-4xl md:text-5xl font-bold mb-4
                  bg-gradient-to-r ${category.gradient}
                  bg-clip-text text-transparent
                `}
              >
                {category.name}
              </h3>

              <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* 2. "BUMBU" BARU (JAUH LEBIH RINGAN) */}
              {/* Animasi 'stagger' satu kali, bukan 'useTransform' di tiap item */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible" // "Mata-mata" internal
                viewport={{ once: true, amount: 0.3 }}
                variants={listVariants} // Varian untuk container (stagger)
              >
                {category.subCategories.map((sub) => (
                  <motion.span
                    key={sub}
                    variants={itemVariants} // Varian untuk item (fade-in)
                    className={`
                      bg-white/80 backdrop-blur-sm
                      text-gray-800 font-medium px-5 py-3 rounded-full
                      border-2 border-gray-200 shadow-md cursor-pointer
                      transition-all duration-300
                      hover:border-[#129991] hover:bg-[#129991]/10
                      hover:shadow-lg hover:scale-105 hover:-translate-y-1
                    `}
                  >
                    {sub}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
