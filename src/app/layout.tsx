// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar'; // <-- PATH BARU
import Footer from '@/components/layout/footer'; // <-- PATH BARU

// Konfigurasi font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans', // Kita akan gunakan ini di CSS
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
    <html lang="id">
      <body className={`${inter.variable} bg-white`}>
        
        <Navbar /> {/* Navbar akan muncul di SEMUA halaman */}
        
        <main>
          {children} {/* Ini adalah tempat page.tsx akan dirender */}
        </main>
        
        <Footer /> {/* Footer akan muncul di SEMUA halaman */}

      </body>
    </html>
  );
}