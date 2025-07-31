import { useTranslation } from "react-i18next";
import ContectForm from "./ContectForm";
import Container from "@/components/common/Container";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <div className="py-8 md:py-16">
      <Container>
        <div className="bg-[#FAFAFA] p-5 grid grid-cols-5 gap-6 rounded-lg">
          <img
            src="/images/about/all-yachts-31.png"
            alt="booking"
            className="hidden md:block col-span-2 object-cover h-full w-full rounded-lg"
          />
          <div className="col-span-5 md:col-span-3 flex flex-col">
            <div className="flex flex-col gap-3 w-full mb-5">
              <h1 className="text-5xl text-black">{t("Your voice matters to us")}</h1>
              <h1 className="text-base text-black">{t("Kindly fill out this form for any inquires and we’ll get back to you as soon as possible.")}</h1>
            </div>
            <ContectForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
