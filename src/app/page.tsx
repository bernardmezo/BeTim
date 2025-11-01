// src/app/page.tsx
import HeroSection from '@/components/sections/home/HeroSection';     // <-- PATH BARU
import CategorySection from '@/components/sections/home/CategorySection'; // <-- PATH BARU
import FeaturedSection from '@/components/sections/home/FeaturedSection'; // <-- PATH BARU



export default function HomePage() {
  return (
    <>
      {/* Navbar dan Footer sudah ada di layout.tsx */}
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      {/* <StoreSection /> */}
    </>
  );
}