import BookingSection from "@/components/common/Book/BookingSection";
import ReusableHeroSection from "@/components/common/ReusableHeroSection";
import EventPackages from "@/features/Events/EventPackages";
import EventsCollection from "@/features/Events/EventsCollection";

const ServicesPage = () => {
  return (
    <div>
      <ReusableHeroSection backgroundImage="/images/events/hero.jpg" title="Weddings" />
      <EventsCollection />
      <EventPackages />
      <BookingSection />
    </div>
  );
};

export default ServicesPage;
