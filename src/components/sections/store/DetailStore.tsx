"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import Link from "next/link";

export default function DetailStore() {
  const [activeTab, setActiveTab] = useState("product");

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Store Info */}
      <section className="container mx-auto px-6 md:flex gap-10 items-start">
        <div className="md:w-1/2">
          <Image
            src="/img-src/steam1.png"
            alt="Satria Steam Motor & Helmet"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Satria Steam Motor & Helmet
          </h1>
          <p className="text-gray-600 mb-4">
            Jasa cuci motor dan helm yang menghadirkan pelayanan cepat serta
            hasil bersih maksimal.
          </p>

          <div className="space-y-2 text-gray-700">
            <p className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#129991] shrink-0" />
              Jl. Rachmat No. 543, Kelurahan Beji Timur, Kecamatan Beji, Kota
              Depok, Jawa Barat 16422
            </p>
            <p className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-[#129991]" />
              0878-6208-8197 / 0857-7695-5185
            </p>
            <p className="flex items-start gap-2">
              <Clock className="w-5 h-5 text-[#129991]" />
              Senin–Minggu, 08.00 – 18.00 WIB
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#129991] hover:bg-[#5BAAA8]/80 text-white font-semibold py-3 rounded-xl transition-all duration-300">
              <MapPin className="w-5 h-5" />
              Get Destination
            </button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border-2 border-[#129991] text-[#129991] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#129991] hover:text-white hover:shadow-md hover:shadow-[#129991]/30"
            >
              <Phone className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-6 mt-10 border-t border-gray-200 pt-5">
        <div className="flex gap-10 border-b border-gray-200 mb-8">
          {["product", "about", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-semibold text-sm md:text-base ${
                activeTab === tab
                  ? "text-[#129991] border-b-2 border-[#129991]"
                  : "text-gray-600 hover:text-[#129991]"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Product Section */}
        {activeTab === "product" && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Featured Product
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Cuci motor lengkap",
                  price: "Rp 22.000",
                  img: "/img-src/steam3.png",
                },
                {
                  name: "Cuci motor biasa",
                  price: "Rp 19.000",
                  img: "/img-src/steam2.png",
                },
                {
                  name: "Cuci helm",
                  price: "Rp 15.000",
                  img: "/img-src/steam4.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        {activeTab === "about" && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              About Satria Steam Motor & Helmet
            </h3>
            <p className="text-gray-600 mb-5">
              Steam motor, cuci helm, jasa kebersihan motor, Depok. <br />
              Jasa steam atau cuci motor dan helm yang melayani pencucian motor
              serta helm dengan hasil bersih dan wangi.
            </p>

            <h4 className="font-semibold text-black mb-3">
              Store Information
            </h4>
            <div className="grid md:grid-cols-3 gap-4 bg-gray-100 p-5 rounded-lg text-sm">
              <div>
                <h5 className="font-semibold text-black mb-2">Contact Information</h5>
                <p className="text-gray-600">
                  <MapPin className="w-5 h-5 text-[#129991]" />
                  📍 Jl. Ridwan Rais No. 54, Kelurahan Beji Timur, Depok
                </p>
                <p className="text-gray-600"> 
                  <Phone className="w-5 h-5 text-[#129991]" />
                  0878-8012-5151 / 0857-1588-0556
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-black" >Operating Hours</h5>
                <p className="text-gray-600">10.00 – 21.00 (10 Pagi – 9 Malam)</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-black">Price</h5>
                <p className="text-gray-600">Rp 15.000 – Rp 25.000</p>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Section */}
        {activeTab === "reviews" && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Customer Reviews
            </h3>
            <div className="bg-gray-100 p-6 rounded-lg text-center mb-6">
              <p className="text-3xl font-bold text-[#129991]">4.8</p>
              <p className="text-gray-600 text-sm mb-2">Based on 156 reviews</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 flex items-start justify-between hover:border-[#129991] transition"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧑</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Lukman Hakim
                      </h4>
                      <div className="flex gap-1 mb-1">
                        {[...Array(4)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-3 h-3 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">
                        Amazing quality products and excellent customer service.
                        The staff is very knowledgeable and helpful.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">2024-05-21</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Map and Contact Section */}
      <div className="bg-gray-50 py-12 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <Link href="https://www.google.com/maps/place/Satria+Steam+Motor+%26+Helmet/@-6.3814382,106.8207898,16.95z/data=!4m6!3m5!1s0x2e69ebfe3e5cc747:0x65c051722dc1fcd2!8m2!3d-6.381391!4d106.823384!16s%2Fg%2F11bxc5zj4t?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D">
              <Image
                src="/img-src/map-steam.png"
                alt="Map Location"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </Link>
            
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Visit us Directly
            </h3>
            <p className="text-gray-700 mb-5">
              <strong>UMKM Betim Store & Gallery</strong>
              <br />
              Jl. Cendana No. 946, Bandung, Jawa Barat 40191
              <br />
              (Bersebelahan dengan Taman Sari Mall, dekat Halte Sukamaju)
            </p>

            <h4 className="font-semibold text-gray-800 mb-2">Operational</h4>
            <p className="text-gray-600 mb-4">
              Senin – Sabtu: 08.00 – 18.00 WIB
              <br />
              Minggu: Tutup
            </p>

            <p className="text-gray-600">
              <strong>Telepon:</strong> +62 878 6208 8197
              <br />
              <strong>Email:</strong> info@umkmbetim.id
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
