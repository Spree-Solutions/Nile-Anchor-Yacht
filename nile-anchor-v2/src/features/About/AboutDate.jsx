import Container from "@/components/common/Container";
import { AnchorIcon } from "@/components/common/icons";
import { useTranslation } from "react-i18next";

const AboutDate = () => {
  const { t } = useTranslation();
  return (
    <div className="py-8 md:py-16">
      <Container>
        <div className="flex justify-center items-center flex-col">
          <AnchorIcon className="text-[#BFA888]" />
          <h3 className="text-3xl md:text-5xl font-normal mt-6 mb-3">{t("Nile Anchor SINCE 2021.")}</h3>
          <p className="text-sm md:text-lg text-[#5D6C72]">
            {t("A dedicated drive towards becoming Egypt’s top luxurious, hospitable onboard service cruise boats")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div className="flex justify-end relative min-h-[300px] rounded-lg overflow-hidden">
            <video className="w-full h-full object-cover max-h-[420px] rounded-lg" autoPlay loop muted playsInline>
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#041125]/70 via-[#041125]/60 to-[#041125]/80" />
          </div>
          <div>
            <div className="px-5 border-l border-[#C3D2D9] text-3xl max-w-full md:max-w-[80%] mt-7 mb-5">
              <p className="text-primary font-normal text-2xl">
                {t("aims at providing high-end value by offering exclusive offers and ")}
                <br />
                {t("premium packages ")}
                <br />
                {t("to create memorable")}
              </p>
            </div>
            <p className="text-lg font-normal text-[#5D6C72]">
              {t(
                "breathtaking moments on Egypt’s Nile River. Premium packages are customizable and are currently available to; individuals, corporations and organizations providing stress-free solutions to those who wish to organize and hold exclusive events whether; corporate or group outing’s, wedding/engagement ceremonies or even celebrations. The Nile Anchor provides a service which takes you on a prehistoric journey vs. today’s modern age; a journey that takes you for a walk on Egypt’s ancient river (The Nile River) accompanied by an expressive view of today’s modern world; Cairo and Giza’s districts.",
              )}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutDate;
