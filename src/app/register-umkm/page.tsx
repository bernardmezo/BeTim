// src/app/register-umkm/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Store,
  Tag,
  MapPin,
  Clock,
  Phone,
  FileText,
  DollarSign,
  Upload,
  X,
  ArrowRight,
  Check,
} from "lucide-react";

const categories = [
  "Makanan",
  "Minuman",
  "Kopi & Teh",
  "Jasa",
  "Kebutuhan Sehari-hari",
];

const priceRanges = [
  "Rp 5.000 - Rp 20.000",
  "Rp 20.000 - Rp 50.000",
  "Rp 50.000 - Rp 100.000",
  "Rp 100.000 - Rp 200.000",
  "Rp 200.000+",
];

export default function RegisterUMKM() {
  const [formData, setFormData] = useState({
    namaUMKM: "",
    tags: "",
    kategori: "",
    lokasi: "",
    jamOperasional: "",
    telepon: "",
    deskripsi: "",
    rangeHarga: "",
  });

  const [images, setImages] = useState<string[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const fileArray = Array.from(files);
    const newImages: string[] = [];

    fileArray.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string);
            if (newImages.length === fileArray.length) {
              setImages((prev) => [...prev, ...newImages].slice(0, 10));
            }
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Images:", images);
    // Handle form submission here
    alert("Form berhasil dikirim! (Demo Mode)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#129991] to-[#15b8ad] rounded-3xl mb-6 shadow-lg">
            <Store className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Punya Toko atau </span>
            <span className="bg-gradient-to-r from-[#129991] via-[#15b8ad] to-[#18c7bb] bg-clip-text text-transparent">
              UMKM?
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan kami dan jangkau ribuan pelanggan lokal. Setup
            mudah, fitur lengkap, dan support dedicated untuk bisnis Anda.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 space-y-8"
        >
          {/* Nama UMKM */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <Store className="w-5 h-5 text-[#129991]" />
              Nama UMKM
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="namaUMKM"
              value={formData.namaUMKM}
              onChange={handleInputChange}
              placeholder="Contoh: Warung Bakso Pak Budi"
              required
              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white text-gray-700"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <Tag className="w-5 h-5 text-[#129991]" />
              Tags
              <span className="text-gray-500 text-sm font-normal">
                (pisahkan dengan koma)
              </span>
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Contoh: bakso, mie ayam, murah, enak"
              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white text-gray-700"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <Tag className="w-5 h-5 text-[#129991]" />
              Kategori
              <span className="text-red-500">*</span>
            </label>
            <select
              name="kategori"
              value={formData.kategori}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white text-gray-700 cursor-pointer"
            >
              <option value="">Pilih Kategori</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Lokasi */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <MapPin className="w-5 h-5 text-[#129991]" />
              Lokasi
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lokasi"
              value={formData.lokasi}
              onChange={handleInputChange}
              placeholder="Contoh: Jl. Raya Beji Timur No. 123, Depok"
              required
              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white text-gray-700"
            />
          </div>

          {/* Jam Operasional & Telepon */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                <Clock className="w-5 h-5 text-[#129991]" />
                Jam Operasional
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jamOperasional"
                value={formData.jamOperasional}
                onChange={handleInputChange}
                placeholder="Contoh: 08:00 - 21:00"
                required
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white text-gray-700"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                <Phone className="w-5 h-5 text-[#129991]" />
                Telepon
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="telepon"
                value={formData.telepon}
                onChange={handleInputChange}
                placeholder="Contoh: 08123456789"
                required
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white text-gray-700"
              />
            </div>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <FileText className="w-5 h-5 text-[#129991]" />
              Deskripsi Toko
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleInputChange}
              placeholder="Ceritakan tentang UMKM Anda, keunggulan produk, dan hal menarik lainnya..."
              required
              rows={5}
              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white text-gray-700 resize-none"
            />
          </div>

          {/* Range Harga */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <DollarSign className="w-5 h-5 text-[#129991]" />
              Range Harga Produk
              <span className="text-red-500">*</span>
            </label>
            <select
              name="rangeHarga"
              value={formData.rangeHarga}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-[#129991] focus:bg-white text-gray-700 cursor-pointer"
            >
              <option value="">Pilih Range Harga</option>
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Upload Foto */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <Upload className="w-5 h-5 text-[#129991]" />
              Foto Toko & Produk
              <span className="text-red-500">*</span>
              <span className="text-gray-500 text-sm font-normal">
                (minimal 5 foto)
              </span>
            </label>

            {/* Upload Area */}
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-3 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                dragActive
                  ? "border-[#129991] bg-[#129991]/5"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <Upload
                className={`w-12 h-12 mx-auto mb-4 transition-colors ${
                  dragActive ? "text-[#129991]" : "text-gray-400"
                }`}
              />
              <p className="text-gray-600 font-medium mb-2">
                Drag & drop foto atau klik untuk upload
              </p>
              <p className="text-gray-500 text-sm">
                PNG, JPG hingga 10MB (Maks 10 foto)
              </p>
            </div>

            {/* Image Preview */}
            {images.length > 0 && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-xl border-2 border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Image Counter */}
            {images.length > 0 && (
              <div className="mt-4 flex items-center gap-2 text-sm">
                <Check
                  className={`w-5 h-5 ${
                    images.length >= 5 ? "text-green-500" : "text-gray-400"
                  }`}
                />
                <span
                  className={
                    images.length >= 5 ? "text-green-600" : "text-gray-600"
                  }
                >
                  {images.length} foto terupload
                  {images.length < 5 && ` (minimal 5 foto)`}
                </span>
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="submit"
              disabled={images.length < 5}
              className="flex-1 bg-gradient-to-r from-[#129991] to-[#15b8ad] text-white font-bold text-lg rounded-full py-4 px-8 hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3 group"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              className="flex-1 bg-white text-[#129991] font-bold text-lg rounded-full py-4 px-8 border-2 border-[#129991] hover:bg-[#129991] hover:text-white transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Info Text */}
          <p className="text-center text-gray-500 text-sm">
            Dengan mendaftar, Anda menyetujui{" "}
            <a href="#" className="text-[#129991] hover:underline">
              Syarat & Ketentuan
            </a>{" "}
            serta{" "}
            <a href="#" className="text-[#129991] hover:underline">
              Kebijakan Privasi
            </a>{" "}
            kami.
          </p>
        </motion.form>
      </div>
    </div>
  );
}