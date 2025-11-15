// src/components/sections/home/HeroSection.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  MapPin,
  Loader2,
  TrendingUp,
  Store,
  Star,
  Sparkles,
  Utensils,
  CupSoda,
  Coffee
} from "lucide-react";

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [typedText, setTypedText] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const placeholderTexts = [
    "Cari bakso enak...",
    "Cari kopi susu...",
    "Cari jasa laundry...",
    "Cari toko kue...",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    let charIndex = 0;
    const currentText = placeholderTexts[placeholderIndex];

    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [placeholderIndex]);

  // Mouse movement parallax
  useEffect(() => {
    const currentHero = heroRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!currentHero) return;

      requestAnimationFrame(() => {
        const rect = currentHero.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 20 - 10,
          y: ((e.clientY - rect.top) / rect.height) * 20 - 10,
        });
      });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    if (currentHero) {
      currentHero.addEventListener("mousemove", handleMouseMove);
      currentHero.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentHero) {
        currentHero.removeEventListener("mousemove", handleMouseMove);
        currentHero.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleGetLocation = () => {
    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      () => {
        setSearchTerm("Mencari di lokasi Anda...");
        setLoadingLocation(false);
      },
      () => {
        alert("Gagal mendapatkan lokasi. Mohon izinkan akses lokasi.");
        setLoadingLocation(false);
      }
    );
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const quickSearches = [
    { icon: Utensils, label: "Makanan", color: "from-orange-400 to-red-400" },
    { icon: CupSoda, label: "Minuman", color: "from-emerald-400 to-green-500" },
    { icon: Sparkles, label: "Jasa", color: "from-teal-400 to-emerald-500" },
    { icon: Coffee, label: "Kopi & Teh", color: "from-yellow-400 to-orange-500" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(to right, #115e59 1px, transparent 1px),
              linear-gradient(to bottom, #115e59 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      {/* ORBS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-200/40 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 sm:pt-32 pb-20 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* BADGE */}
            <div className="transition-all duration-700">
              <div className="inline-flex items-center gap-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-teal-900">
                  Platform UMKM #1 di Indonesia
                </span>
                <Sparkles className="w-4 h-4 text-teal-600" />
              </div>
            </div>

            {/* TITLE */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                <span className="block text-slate-800">Jelajahi</span>

                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-teal-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    UMKM Lokal
                  </span>
                </span>

                <span className="block text-slate-800 mt-2">Terpercaya</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium">
                Platform terpercaya untuk menemukan dan mendukung bisnis lokal di
                sekitar Anda.{" "}
                <span className="font-bold text-teal-700">
                  Mudah, cepat, dan aman.
                </span>
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="space-y-5">
              <div className="relative group">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500 ${
                    isSearchFocused ? "opacity-50" : ""
                  }`}
                />

                <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden transition">
                  <div className="flex items-center p-2">
                    <button
                      onClick={handleGetLocation}
                      disabled={loadingLocation}
                      className="flex-shrink-0 p-3 text-slate-500 hover:text-teal-600 hover:bg-white/50 rounded-xl transition disabled:opacity-50"
                    >
                      {loadingLocation ? (
                        <Loader2 className="w-6 h-6 animate-spin text-teal-600" />
                      ) : (
                        <MapPin className="w-6 h-6" />
                      )}
                    </button>

                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      placeholder={typedText}
                      className="flex-grow text-slate-800 px-3 py-4 bg-transparent placeholder:text-slate-500/70 text-lg font-medium focus:outline-none"
                    />

                    <button
                      onClick={handleSearch}
                      className="flex-shrink-0 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl px-4 sm:px-6 py-3.5 font-bold transition shadow-lg hover:scale-[1.02] flex items-center gap-2"
                    >
                      <Search className="w-5 h-5" />
                      <span className="hidden sm:inline">Cari</span>
                    </button>
                  </div>

                  <div
                    className={`h-[2px] bg-gradient-to-r from-teal-500 to-emerald-500 transition-transform ${
                      isSearchFocused ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              </div>

              {/* CATEGORY QUICK */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 ml-1">
                  <TrendingUp className="w-4 h-4 text-teal-600" />
                  <span className="text-sm text-slate-600 font-bold">
                    Kategori Populer
                  </span>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {quickSearches.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setSearchTerm(item.label)}
                      className="group relative flex items-center gap-3 px-4 py-2.5 bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/80 rounded-xl transition"
                    >
                      <div className={`p-1.5 bg-gradient-to-br ${item.color} rounded-lg`}>
                        <item.icon className="w-3.5 h-3.5 text-white" />
                      </div>

                      <div className="text-left">
                        <div className="text-sm font-bold text-slate-700">
                          {item.label}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT DISPLAY (IMAGE + FLOATING CARDS) */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              <div
                className="relative z-10 transition-all duration-500 hover:scale-[1.02]"
                style={{
                  transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${
                    -mousePosition.y * 0.5
                  }deg)`,
                }}
              >
                <div className="aspect-square rounded-[2.5rem] p-3 bg-white/30 backdrop-blur-lg border border-white/40 shadow-2xl relative group">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: 'url("/img-src/bakso-gp1.png")',
                      }}
                    />

                    {/* HOVER INFO */}
                    <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/70 via-black/50 to-transparent translate-y-1/2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <h3 className="text-white text-xl font-bold">
                        Bakso Enak 'GP'
                      </h3>

                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-white">4.9 (150+ ulasan)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FLOATING CARD 1 */}
                <div className="absolute -top-4 right-0 lg:-top-6 lg:-right-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/60 w-48 z-20 animate-float">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                      <TrendingUp className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">
                        Trending
                      </div>
                      <div className="font-bold text-slate-800">Bakso GP</div>
                      <div className="text-[10px] text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full inline-block mt-1">
                        +150 views
                      </div>
                    </div>
                  </div>
                </div>

                {/* FLOATING CARD 2 */}
                <div className="absolute -bottom-4 left-0 lg:-bottom-6 lg:-left-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/60 w-48 z-20 animate-float animation-delay-2000">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white">
                      <Star className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">
                        Top Rated
                      </div>
                      <div className="font-bold text-slate-800">Rating 4.9</div>

                      <div className="flex gap-0.5 mt-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-2 h-2 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM FADE MASK */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite alternate ease-in-out;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
