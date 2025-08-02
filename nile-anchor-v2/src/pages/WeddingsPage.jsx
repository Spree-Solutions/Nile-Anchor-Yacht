import BookingSection from "@/components/common/Book/BookingSection";
import ReusableHeroSection from "@/components/common/ReusableHeroSection";
import WeddingsCollection from "@/features/Weddings/WeddingsCollection";
import WeddingsPackages from "@/features/Weddings/WeddingsPackages";

const WeddingsPage = () => {
  return (
    <div className="overflow-hidden">
      <ReusableHeroSection backgroundImage="/images/services/weddings/decoration-1.webp" title="Weddings" />
      <WeddingsCollection />
      <WeddingsPackages />
      <BookingSection />
    </div>
  );
};

export default WeddingsPage;
