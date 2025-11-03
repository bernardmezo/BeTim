// src/components/sections/home/CategorySection.tsx

"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { UtensilsCrossed, Coffee, Cake, ShoppingBasket } from 'lucide-react';
import styles from '../../styles/CategorySection.module.css';

// Data dengan icons dan warna tema #129991
const categories = [
  {
    name: 'Heavy Food',
    description: 'Dari sarapan hingga makan malam, temukan hidangan utama yang lezat dari koki dan warung lokal terbaik di sekitar Anda.',
    subCategories: ['Nasi & Bubur', 'Mie & Pasta', 'Ayam & Bebek', 'Sate', 'Daging & Seafood'],
    icon: UtensilsCrossed,
    gradient: 'from-[#129991] to-[#0d7269]',
    bgGradient: 'from-[#129991]/5 to-[#0d7269]/10'
  },
  {
    name: 'Coffee & Tea',
    description: 'Nikmati kopi artisan dari roastery lokal, teh tradisional pilihan, dan minuman hangat lainnya untuk menemani hari Anda.',
    subCategories: ['Kopi Artisan', 'Espresso', 'Teh Tradisional', 'Teh Herbal', 'Matcha & Specialty'],
    icon: Coffee,
    gradient: 'from-[#15b8ad] to-[#129991]',
    bgGradient: 'from-[#15b8ad]/5 to-[#129991]/10'
  },
  {
    name: 'Drinks',
    description: 'Segarkan hari Anda dengan jus segar, smoothies, minuman kekinian, dan berbagai pilihan minuman dingin lainnya.',
    subCategories: ['Jus & Smoothies', 'Minuman Soda', 'Minuman Tradisional', 'Milk Series'],
    icon: Cake,
    gradient: 'from-[#0d7269] to-[#0a5850]',
    bgGradient: 'from-[#0d7269]/5 to-[#0a5850]/10'
  },
  {
    name: 'Kebutuhan Sehari-hari',
    description: 'Dukung pedagang lokal. Dapatkan sayuran segar, bumbu dapur, beras, minyak, dan kebutuhan pokok harian Anda.',
    subCategories: ['Sayuran Segar', 'Buah-buahan', 'Beras & Minyak', 'Bumbu Dapur', 'Telur & Susu'],
    icon: ShoppingBasket,
    gradient: 'from-[#129991] to-[#15b8ad]',
    bgGradient: 'from-[#129991]/5 to-[#15b8ad]/10'
  },
];

// Component untuk setiap category card
function CategoryCard({ category, index }: { category: typeof categories[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = category.icon;
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.95]);
  const y = useTransform(smoothProgress, [0, 0.2], [100, 0]);
  const rotateX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [25, 10, 0, -10, -25]);
  const iconRotate = useTransform(smoothProgress, [0, 0.5, 1], [-90, 0, 90]);
  const iconScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className={styles.categoryCard}
    >
      <motion.div
        style={{ rotateX }}
  className={`${styles.cardInner} bg-linear-to-br ${category.bgGradient} transform-gpu`}
      >
        <div className={styles.glassmorphism}></div>
        
        <div className={`${styles.animatedBackground} animate-pulse-slow`}>
          <div className={`absolute inset-0 bg-linear-to-br ${category.gradient}`}></div>
        </div>

        <div className="relative p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            <motion.div
              style={{ rotate: iconRotate, scale: iconScale }}
              className={`${styles.iconContainer} bg-linear-to-br ${category.gradient} transform-gpu`}
            >
              <Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
            </motion.div>

            <div className="flex-1">
              <h3 className={`text-3xl font-bold mb-4 bg-linear-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {category.subCategories.map((sub, i) => (
                  <span 
                    key={sub}
                    style={{ animationDelay: `${i * 50}ms` }}
                    className={`${styles.subCategoryTag} animate-fade-in-up`}
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CategorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={sectionRef}
    className="py-32 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <motion.div 
        style={{ y: backgroundY }}
        className={styles.backgroundBlobs}
      >
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-center mb-24 max-w-4xl mx-auto ${styles.stickyHeader}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Semua Kebutuhan Anda,</span>
            <br />
            <span className="bg-linear-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] bg-clip-text text-transparent">
              Semua dari Lokal.
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Gulir ke bawah untuk menjelajahi ekosistem UMKM kami
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className={styles.scrollIndicator}>
              <div className={`${styles.scrollDot} animate-scroll-indicator`} />
            </div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.name} 
              category={category} 
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
        </motion.div>
      </div>
    </section>
  );
}