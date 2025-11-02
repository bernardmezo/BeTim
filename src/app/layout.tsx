// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/footer';

// 1. GANTI import 'geist' DENGAN 'next/font/google'
import { Poppins } from 'next/font/google';

// 2. KONFIGURASI POPPINS
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Pilih 'weight' yang Anda butuhkan
  variable: '--font-sans',            // Ini adalah "jembatan" kita
});

export const metadata: Metadata = {
  title: 'BeTim - Discover Local Stores',
  description: 'Support your local community businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. TERAPKAN VARIABEL FONT KE <html>
    // Kita tidak perlu .className di sini, hanya .variable
    <html lang="id" className={poppins.variable}>
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}