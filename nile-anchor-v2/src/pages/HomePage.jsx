import BookingSection from "@/components/common/Book/BookingSection";
import AboutSection from "@/features/Home/AboutSection";
import { HeroSection } from "@/features/Home/Hero/HomeHero";
import HomeGallerySection from "@/features/Home/HomeGallerySection/HomeGallerySection";
import OurServices from "@/features/Home/OurServices";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <OurServices />
      <HomeGallerySection />
      <BookingSection />
    </div>
  );
};

export default HomePage;
