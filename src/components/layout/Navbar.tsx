// src/components/layout/Navbar.tsx
import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">BeTim</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store-umkm" className="text-gray-600 hover:text-gray-900">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/store" className="text-gray-600 hover:text-gray-900">
              Store
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Product..."
            className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </nav>
    </header>
  );
}
