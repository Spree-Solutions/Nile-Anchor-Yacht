import BookingSection from "@/components/common/Book/BookingSection";
import ReusableHeroSection from "@/components/common/ReusableHeroSection";
import AboutDate from "@/features/About/AboutDate";
import MessageCEO from "@/features/About/MessageCEO";

const AboutPage = () => {
  return (
    <div>
      <ReusableHeroSection title="About" />
      <AboutDate />
      <MessageCEO />
      <BookingSection />
    </div>
  );
};

export default AboutPage;
