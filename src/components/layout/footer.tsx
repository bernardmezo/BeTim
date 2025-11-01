// src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kolom 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">BeTim</h3>
          <p className="text-sm">
            Mendukung UMKM lokal di komunitas Anda.
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/store" className="hover:text-white">Toko</Link></li>
            <li><Link href="/contact" className="hover:text-white">Kontak</Link></li>
            <li><Link href="/categories" className="hover:text-white">Kategori</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Legal */}
        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Kolom 4: Hubungi Kami */}
        <div>
          <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
          <p className="text-sm">Jl. Margonda Raya No. 123, Depok</p>
          <p className="text-sm">info@betim.com</p>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} BeTim. All rights reserved.</p>
      </div>
    </footer>
  );
}