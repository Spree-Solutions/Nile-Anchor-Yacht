import BookingSection from "@/components/common/Book/BookingSection";
import ReusableHeroSection from "@/components/common/ReusableHeroSection";
import WeddingsCollection from "@/features/Weddings/WeddingsCollection";
import WeddingsPackages from "@/features/Weddings/WeddingsPackages";

const YachtsPage = () => {
  return (
    <div>
      <ReusableHeroSection backgroundImage="/images/services/weddings/decoration-1.jpg" title="Weddings" />
      <WeddingsCollection />
      <WeddingsPackages />
      <BookingSection />
    </div>
  );
};

export default YachtsPage;
