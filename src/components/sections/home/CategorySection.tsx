import {
  Utensils,
  CupSoda,
  Wrench,
  Coffee,
  ShoppingBag,
} from "lucide-react";

const categories = [
  { name: "Heavy Food", stores: 6, icon: Utensils },
  { name: "Drinks", stores: 6, icon: CupSoda },
  { name: "Service", stores: 6, icon: Wrench },
  { name: "Coffee & Tea", stores: 6, icon: Coffee },
  { name: "Daily Necessities", stores: 6, icon: ShoppingBag },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Shop By Category
        </h2>
        <p className="text-gray-600 mb-10">
          Explore products from various local businesses
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Icon
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#129991" }}
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {category.stores} Stores
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


// // src/components/sections/home/CategorySection.tsx
// import { Utensils, CupSoda, Wrench, Coffee, ShoppingBag } from "lucide-react"; // Ikon contoh

// const categories = [
//   { name: "Heavy Food", stores: 6, icon: Utensils },
//   { name: "Drinks", stores: 6, icon: CupSoda },
//   { name: "Service", stores: 6, icon: Wrench },
//   { name: "Coffee & Tea", stores: 6, icon: Coffee },
//   { name: "daily necessities", stores: 6, icon: ShoppingBag },
// ];

// export default function CategorySection() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">
//           Shop By Category
//         </h2>
//         <p className="text-gray-600 mb-10">
//           Explore products from various local businesses
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//             >
//               {/* buat nambah ikon dan style warnanya */}
//               <Utensils
//                 className="w-12 h-12 text-primary mx-auto mb-4"
//                 style={{ color: "#129991" }}
//               />
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {category.name}
//               </h3>
//               <p className="text-gray-500 text-sm">{category.stores} Stores</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
