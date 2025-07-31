import ReusableHeroSection from "@/components/common/ReusableHeroSection";
import ContactSection from "@/features/Contact/ContactSection";

const ContactPage = () => {
  return (
    <div className="overflow-hidden">
      <ReusableHeroSection title="Contact" />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
