import Image from "next/image";
import React from "react";

const stores = [
  {
    id: 1,
    name: "Warung Bakso Terjlek Mas Gp",
    rating: 4.9,
    img: "/img-src/store1.jpg",
    desc: "Warung bakso dengan cita rasa khas dan harga terjangkau di daerah Surabaya.",
    address: "Jl. Kenjeran No.45, Surabaya",
  },
  {
    id: 2,
    name: "Satria Servis Motor & Helm",
    rating: 4.8,
    img: "/img-src/store2.jpg",
    desc: "Tempat servis motor terpercaya dengan pelayanan cepat dan ramah.",
    address: "Jl. Raya Rungkut No.88, Surabaya",
  },
  {
    id: 3,
    name: "Warung Ibu Rum",
    rating: 4.7,
    img: "/img-src/store3.jpg",
    desc: "Menjual berbagai makanan rumahan dengan cita rasa khas Indonesia.",
    address: "Jl. Ketintang No.11, Surabaya",
  },
  // tambahkan data lainnya sesuai kebutuhan
];

const StoreSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Local Stores
        </h2>
        <p className="text-gray-500 mb-6">
          Discover amazing stores in your community
        </p>

        <div className="flex flex-wrap gap-4 mb-8 items-center justify-between">
          <input
            type="text"
            placeholder="Search store..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:ring focus:ring-green-200"
          />
          <div className="flex gap-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
              <option>All Category</option>
              <option>Food & Beverage</option>
              <option>Services</option>
              <option>Retail</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
              <option>Sort by Rating</option>
              <option>Highest Rating</option>
              <option>Lowest Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <p className="text-gray-500 mb-4">Showing {stores.length} stores</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-3 flex flex-col"
            >
              <div className="relative w-full h-40 rounded-xl overflow-hidden">
                <Image
                  src={store.img}
                  alt={store.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="mt-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  {store.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">⭐ {store.rating}</p>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {store.desc}
                </p>
                <p className="text-sm text-gray-400 mt-1">📍 {store.address}</p>

                <button className="mt-4 bg-[#5BAAA8] text-white rounded-lg py-2 hover:bg-[#11B1AC] transition cursor-pointer">
                  View Store
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
