import BookingSection from "@/components/common/Book/BookingSection";
import ReusableHeroSection from "@/components/common/ReusableHeroSection";
import GalleryCollection from "@/features/Gallery/GalleryCollection";
import GalleryPackages from "@/features/Gallery/GalleryPackages";

const GalleryPage = () => {
  return (
    <div className="overflow-hidden">
      <ReusableHeroSection backgroundImage="/images/yachts/liberty/liberty-1.webp" title="Gatherings & Parties" />
      <GalleryCollection />
      <GalleryPackages />
      <BookingSection />
    </div>
  );
};

export default GalleryPage;
