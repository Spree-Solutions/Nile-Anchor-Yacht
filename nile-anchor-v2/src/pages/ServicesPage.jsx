import BookingSection from "@/components/common/Book/BookingSection";
import ReusableHeroSection from "@/components/common/ReusableHeroSection";
import EventPackages from "@/features/Events/EventPackages";
import EventsCollection from "@/features/Events/EventsCollection";

const ServicesPage = () => {
  return (
    <div className="overflow-hidden">
      <ReusableHeroSection backgroundImage="/images/events/hero.webp" title="Weddings" />
      <EventsCollection />
      <EventPackages />
      <BookingSection />
    </div>
  );
};

export default ServicesPage;
