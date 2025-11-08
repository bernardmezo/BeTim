// src/app/page.tsx
import HeroSection from "@/components/sections/home/HeroSection";
// import CategorySection from '@/components/sections/home/CategorySection';
import StoreSection from "@/components/sections/store/StoreSection";
import FeaturedSection from "@/components/sections/home/FeaturedSection";
import FeaturedProducts from "@/components/sections/home/FeaturedProducts";
import TestimonialSelection from "@/components/sections/home/TestimonialSelection";
import StoreOwnerCTA from "@/components/sections/home/StoreOwnerCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <CategorySection /> */}
      <StoreSection />
      <FeaturedSection />
      <FeaturedProducts />
      <TestimonialSelection />
      <StoreOwnerCTA />
    </>
  );
}
