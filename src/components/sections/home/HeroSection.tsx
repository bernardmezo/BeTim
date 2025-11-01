// src/components/sections/home/HeroSection.tsx

// 1. "use client" diperlukan karena kita menggunakan Hooks (useState)
"use client"; 

// 2. Import untuk state dan ikon-ikon
import { useState } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react'; // Loader2 untuk ikon loading

export default function HeroSection() {
  // 3. State untuk menyimpan isi search bar dan status loading lokasi
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  // 4. Fungsi untuk fitur "Gunakan Lokasi Saya" (Improvisasi 4)
  const handleGetLocation = () => {
    setLoadingLocation(true); // Mulai loading
    
    // Menggunakan API Geolocation bawaan browser
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Jika berhasil
        const { latitude, longitude } = position.coords;
        // Kita isi search bar dengan koordinat (untuk demo)
        setSearchTerm(`Lokasi: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        setLoadingLocation(false); // Selesai loading
      },
      (error) => {
        // Jika gagal (misal: user menolak izin)
        console.error("Gagal mendapatkan lokasi:", error.message);
        alert("Gagal mendapatkan lokasi. Mohon izinkan akses lokasi di browser Anda.");
        setLoadingLocation(false); // Selesai loading
      }
    );
  };

  return (
    <section 
      className="relative h-[500px] bg-gray-800 bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: 'url("https://awsimages.detik.net.id/community/media/visual/2022/11/20/rijsttafel-indonesia-2.jpeg?w=700&q=90")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten Hero */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-4">
          Discover Local Stores in Your Area
        </h1>
        <p className="text-lg mb-8">
          Support your community by shopping from trusted local businesses. 
          Find unique products, amazing deals, and personalized service.
        </p>

        {/* Search Bar Cerdas (Improvisasi 4) */}
        <div className="bg-white rounded-full p-2 flex max-w-xl mx-auto items-center shadow-lg">
          
          {/* Tombol Lokasi Saya */}
          <button
            onClick={handleGetLocation}
            disabled={loadingLocation}
            className="p-2 text-gray-500 hover:text-primary transition-colors rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Gunakan lokasi saat ini"
          >
            {loadingLocation ? (
              // Tampilkan ikon spinner saat loading
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              // Tampilkan ikon pin lokasi
              <MapPin className="w-5 h-5" />
            )}
          </button>
          
          {/* Input Search */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari UMKM, menu, atau jasa di sekitar kita..."
            className="flex-grow text-gray-700 px-4 py-2 focus:outline-none bg-transparent"
          />
          
          {/* Tombol Search dengan Micro-interaksi (Improvisasi 3) */}
          <button 
            className="bg-primary text-white rounded-full px-6 py-2 ml-2 
                       hover:bg-primary-dark transition-all duration-200 hover:scale-105"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}