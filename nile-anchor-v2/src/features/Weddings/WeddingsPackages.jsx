import "./style.css";
import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";

const WeddingsPackages = () => {
  const { t } = useTranslation();

  const points = [
    t("2 Hours Yacht Cruise"),
    t("Sound System, DJ and Microphone"),
    t("Waitering Services"),
    t("Lighting System"),
    t("Zafaa Speed Boat (Per Request)"),
    t("Kosha (Per Request)"),
    t("Catering (Per Request)"),
    t("Photography (Per Request)"),
    t("Decoration (Per Request)"),
  ];

  return (
    <div className="py-8 md:py-16 bg-[#FFFBF3]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Images Section */}
          <div className="flex justify-end relative min-h-[420px] md:min-h-[670px]">
            <LazyImage
              src="/images/services/weddings/wedding-1.png"
              className="h-[45%] w-2/3 wedding-image absolute left-0 top-0 object-cover rounded-lg z-[2]"
            />
            <LazyImage
              src="/images/services/weddings/wedding-3.png"
              className="h-1/2 w-2/3 wedding-image absolute right-0 top-1/2 -translate-y-1/2 object-cover rounded-lg z-[2]"
            />
            <LazyImage
              src="/images/services/weddings/wedding-4.png"
              className="h-1/2 w-2/3 wedding-image absolute left-0 bottom-0 object-cover rounded-lg z-[2]"
            />
          </div>

          {/* Content Section */}
          <div>
            <h1 className="font-normal text-3xl text-[#003950] mb-6">{t("Every Wedding Package Includes")}</h1>

            <ul className="space-y-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#404040] text-base md:text-lg">
                  <CheckCircle className="text-[#003950] w-5 h-5 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WeddingsPackages;
