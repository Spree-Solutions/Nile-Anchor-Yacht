import { useTranslation } from "react-i18next";
import Container from "../Container";
import BookingForm from "./BookingForm";

const BookingSection = () => {
  const { t } = useTranslation();
  return (
    <div id="booking-section" className="py-8 md:py-16">
      <Container>
        <div className="bg-[#FAFAFA] p-5 grid grid-cols-5 gap-6 rounded-lg">
          <img
            src="/images/yachts/liberty/liberty-1.webp"
            alt="booking"
            className="hidden md:block col-span-2 object-cover h-full w-full rounded-lg"
          />
          <div className="col-span-5 md:col-span-3 flex flex-col">
            <div className="flex flex-col gap-3 w-full mb-5">
              <h1 className="text-base text-[#A18C6D]">{t("Yacht Booking")}</h1>
              <h1 className="text-2xl md:text-5xl text-black">{t("Book Your Dream Yacht")}</h1>
            </div>
            <BookingForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookingSection;
