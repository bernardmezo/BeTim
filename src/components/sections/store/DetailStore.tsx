"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Phone, MapPin, Clock, Star, ArrowLeft, ExternalLink } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const products = [
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
];

const reviews = [
  {
    name: "Lukman Hakim",
    rating: 5,
    comment: "Amazing quality products and excellent customer service. The staff is very knowledgeable and helpful.",
    date: "2024-05-21"
  },
  {
    name: "Siti Nurhaliza",
    rating: 4,
    comment: "Great service and very clean results. My motorcycle looks brand new!",
    date: "2024-05-18"
  },
  {
    name: "Ahmad Rizki",
    rating: 5,
    comment: "Fast service, friendly staff, and affordable prices. Highly recommended!",
    date: "2024-05-15"
  },
];

// Product Card Component dengan animasi
function ProductCard({ item, index }: { item: typeof products[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const y = useTransform(smoothProgress, [0, 0.3], [50, 0]);
  const rotateX = useTransform(smoothProgress, [0, 0.3, 0.5, 0.7, 1], [15, 5, 0, -5, -10]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        style={{ rotateX }}
        whileHover={{ scale: 1.03, y: -5 }}
        className="border-2 border-gray-200/50 rounded-2xl overflow-hidden shadow-lg 
                   hover:shadow-2xl hover:border-[#129991]/30 transition-all duration-300
                   bg-white"
      >
        <div className="relative overflow-hidden">
          <Image
            src={item.img}
            alt={item.name}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.name}</h4>
          <p className="text-[#129991] font-bold text-xl">{item.price}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Review Card Component
function ReviewCard({ review, index }: { review: typeof reviews[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="border-2 border-gray-200 rounded-2xl p-6 
                 hover:border-[#129991] hover:shadow-lg transition-all duration-300
                 bg-white"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#129991] to-[#15b8ad] 
                          flex items-center justify-center text-white text-xl font-bold">
            {review.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-lg">{review.name}</h4>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className={`w-4 h-4 ${j < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{review.date}</p>
      </div>
      <p className="text-gray-600 leading-relaxed">{review.comment}</p>
    </motion.div>
  );
}

export default function DetailStore() {
  const [activeTab, setActiveTab] = useState("product");
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      
      {/* Back Button - Desktop: Top Left, Mobile: Below Navbar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="fixed top-28 left-6 z-40 hidden md:block"
      >
        <motion.button
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="bg-white border-2 border-[#129991] 
                     text-[#129991] rounded-2xl p-3 shadow-xl
                     hover:bg-[#129991] hover:text-white
                     hover:shadow-2xl hover:shadow-[#129991]/30
                     transition-all duration-300 
                     flex items-center justify-center
                     backdrop-blur-sm"
          title="Go Back"
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
      </motion.div>
      
      {/* Mobile Back Button - Below Navbar, Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden container mx-auto px-6 pt-24 pb-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="bg-white border-2 border-[#129991] 
                     text-[#129991] rounded-xl px-4 py-2.5 shadow-lg
                     hover:bg-[#129991] hover:text-white
                     transition-all duration-300 
                     flex items-center gap-2
                     font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
      </motion.div>

      {/* Header Store Info */}
      <motion.section 
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="container mx-auto px-6 md:pt-32 pb-12"
      >
        <div className="md:flex gap-10 items-start">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/img-src/steam1.png"
                alt="Satria Steam Motor & Helmet"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Rating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm 
                           px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
              >
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-gray-800">4.8</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 mt-6 md:mt-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#129991] to-[#15b8ad] 
                         bg-clip-text text-transparent mb-4"
            >
              Satria Steam Motor & Helmet
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 mb-6 text-lg leading-relaxed"
            >
              Jasa cuci motor dan helm yang menghadirkan pelayanan cepat serta
              hasil bersih maksimal.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4 text-gray-700 bg-gray-50 p-6 rounded-2xl"
            >
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#129991] shrink-0 group-hover:scale-110 transition-transform" />
                <p>Jl. Rachmat No. 543, Kelurahan Beji Timur, Kecamatan Beji, Kota Depok, Jawa Barat 16422</p>
              </div>
              <div className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-[#129991] group-hover:scale-110 transition-transform" />
                <p>0878-6208-8197 / 0857-7695-5185</p>
              </div>
              <div className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 text-[#129991] group-hover:scale-110 transition-transform" />
                <p>Senin–Minggu, 08.00 – 18.00 WIB</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(18, 153, 145, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 
                           bg-gradient-to-r from-[#129991] to-[#15b8ad]
                           text-white font-semibold py-4 rounded-2xl 
                           transition-all duration-300 shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                Get Destination
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: -10 }}
                className="w-16 h-16 border-2 border-[#129991] text-[#129991] 
                           rounded-2xl flex items-center justify-center 
                           transition-all duration-300 
                           hover:bg-[#129991] hover:text-white 
                           hover:shadow-lg hover:shadow-[#129991]/30"
              >
                <Phone className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <section className="container mx-auto px-6 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-8 border-b-2 border-gray-200 mb-12 overflow-x-auto"
        >
          {["product", "about", "reviews"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className={`
                pb-4 font-bold text-lg relative whitespace-nowrap
                transition-all duration-300
                ${activeTab === tab
                  ? "text-[#129991]"
                  : "text-gray-600 hover:text-[#129991]"
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 
                             bg-gradient-to-r from-[#129991] to-[#15b8ad] rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Section */}
        {activeTab === "product" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Featured Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((item, index) => (
                <ProductCard key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* About Section */}
        {activeTab === "about" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              About Satria Steam Motor & Helmet
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Steam motor, cuci helm, jasa kebersihan motor, Depok. <br />
              Jasa steam atau cuci motor dan helm yang melayani pencucian motor
              serta helm dengan hasil bersih dan wangi.
            </p>

            <h4 className="font-bold text-xl text-gray-800 mb-6">
              Store Information
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Contact Information",
                  content: (
                    <>
                      <p className="flex items-start gap-2 text-gray-600 mb-2">
                        <MapPin className="w-5 h-5 text-[#129991] shrink-0" />
                        Jl. Ridwan Rais No. 54, Kelurahan Beji Timur, Depok
                      </p>
                      <p className="flex items-start gap-2 text-gray-600">
                        <Phone className="w-5 h-5 text-[#129991]" />
                        0878-8012-5151 / 0857-1588-0556
                      </p>
                    </>
                  )
                },
                {
                  title: "Operating Hours",
                  content: (
                    <p className="text-gray-600">
                      10.00 – 21.00 WIB<br/>
                      (10 Pagi – 9 Malam)
                    </p>
                  )
                },
                {
                  title: "Price Range",
                  content: (
                    <p className="text-[#129991] font-bold text-xl">
                      Rp 15.000 – Rp 25.000
                    </p>
                  )
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(18, 153, 145, 0.3)" }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl 
                             border-2 border-gray-200 hover:border-[#129991] 
                             transition-all duration-300"
                >
                  <h5 className="font-bold text-lg text-gray-800 mb-4">{info.title}</h5>
                  {info.content}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Reviews Section */}
        {activeTab === "reviews" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Customer Reviews
            </h3>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#129991]/10 to-[#15b8ad]/10 
                         p-8 rounded-3xl text-center mb-10 border-2 border-[#129991]/20"
            >
              <motion.p 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-6xl font-bold bg-gradient-to-r from-[#129991] to-[#15b8ad] 
                           bg-clip-text text-transparent mb-2"
              >
                4.8
              </motion.p>
              <p className="text-gray-600 text-lg mb-3">Based on 156 reviews</p>
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Map and Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-100 to-white py-20 border-t-2 border-gray-200 mt-20"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Link 
              href="https://www.google.com/maps/place/Satria+Steam+Motor+%26+Helmet/@-6.3814382,106.8207898,16.95z"
              target="_blank"
            >
              <Image
                src="/img-src/map-steam.png"
                alt="Map Location"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#129991]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="w-12 h-12 text-white" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Visit Us Directly
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border-2 border-gray-200">
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong className="text-[#129991] text-xl">UMKM Betim Store & Gallery</strong>
                <br />
                Jl. Cendana No. 946, Bandung, Jawa Barat 40191
                <br />
                (Bersebelahan dengan Taman Sari Mall, dekat Halte Sukamaju)
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200">
              <h4 className="font-bold text-gray-800 mb-4 text-xl">Operational Hours</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Senin – Sabtu: 08.00 – 18.00 WIB
                <br />
                Minggu: Tutup
              </p>

              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#129991]" />
                  <strong>Telepon:</strong> +62 878 6208 8197
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#129991] text-xl">✉️</span>
                  <strong>Email:</strong> info@umkmbetim.id
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}