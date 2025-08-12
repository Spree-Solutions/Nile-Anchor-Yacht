import { useTranslation } from "react-i18next";
import Container from "../Container";
import BookingForm from "./BookingForm";

const BookingSection = () => {
  const { t } = useTranslation();
  return (
    <div id="booking-section" className="py-8 md:py-16">
      <Container>
        <div className="bg-[#FAFAFA] p-5 gap-6 relative rounded-lg w-full flex justify-between items-center flex-col md:flex-row">
          <img
            src="/images/yachts/liberty/liberty-1.webp"
            alt="booking"
            className="hidden md:block object-cover h-full w-[400px] absolute left-0 top-0 rounded-[30px] p-5"
          />
          <div className="flex flex-col flex-1 pl-0 md:pl-[400px] w-full">
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
