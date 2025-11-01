// src/components/ui/AnimatedWrapper.tsx
"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedWrapper({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Mulai dari transparan dan sedikit di bawah
      whileInView={{ opacity: 1, y: 0 }} // Muncul saat terlihat di layar
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }} // Animasi hanya berjalan satu kali
    >
      {children}
    </motion.div>
  );
}