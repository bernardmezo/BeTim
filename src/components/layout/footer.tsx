// src/components/layout/Footer.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Heart,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const navigation = [
  { name: 'Tentang Kami', href: '/about-betim' },
  { name: 'Toko', href: '/store-umkm' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'FAQ', href: '/faq' },
];

const social = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/multimedia.in.action/', color: 'hover:text-pink-400' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/?lang=id', color: 'hover:text-sky-400' },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Ambient Background Blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-teal-600 to-emerald-600 p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                BeTim
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Platform digital yang menghubungkan UMKM lokal dengan konsumen di Beji Timur, Depok. 
              Bersama membangun ekonomi lokal yang lebih kuat.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              {social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-2.5 rounded-xl ${item.color} transition-colors duration-300 group`}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full" />
              Legal
            </h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-2 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-slate-400 leading-relaxed">
                    Jl. Margonda Raya No. 123
                    <br />
                    Beji Timur, Depok
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="mailto:info@betim.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  info@betim.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <a href="tel:+6281234567890" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-400 flex items-center gap-2"
            >
              © {new Date().getFullYear()} BeTim. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> 
              in Depok
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6 text-slate-400"
            >
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}