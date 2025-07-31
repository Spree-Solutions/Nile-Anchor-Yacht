import "./style.css";
import LazyImage from "@/components/common/LazyImage";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="py-8 md:py-16 relative overflow-hidden">
      <Container>
        <img
          src="/images/about/vision.png"
          className={`absolute top-0 ${
            language === "en" ? "-left-1/2 md:left-0" : "-right-1/2 md:right-0"
          } opacity-30 w-full md:w-1/2 h-auto`}
        />
        <div className="z-[2]">
          <div className="relative mb-20 text-center flex flex-col justify-center items-center gap-3">
            <h1 className="text-base md:text-4xl text-primary font-normal">{t("About Us")}</h1>
            <p className="text-xl md:text-6xl text-black uppercase font-normal">{t("Nile Anchor SINCE 2021.")}</p>
            <p className="text-base md:text-base text-[#5D6C72] font-normal">
              {t("Leading the way in luxury yacht experiences worldwide.")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-end relative min-h-[300px]">
              <LazyImage
                src="/images/about/all-yachts-31.png"
                className="h-full w-2/3 relative rounded-lg object-cover"
              />
              <LazyImage
                src="/images/about/all-yachts-8.png"
                className={`h-1/2 w-1/2 about-image absolute ${
                  language === "en" ? "left-0" : "right-0"
                } top-1/2 -translate-y-1/2 object-cover rounded-lg z-[2]`}
              />
            </div>
            <div>
              <h1 className="font-['Sacramento'] font-normal text-4xl">{t("The Nile Anchor")}</h1>
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
                  "breathtaking moments on Egypt’s Nile River. Packages are currently available to; individuals, corporations and organizations providing stress-free solutions to those who wish to organize and hold exclusive events whether; corporate or group outing’s, wedding/engagement ceremonies or even celebrations.",
                )}
              </p>
              <Button className="uppercase mt-10 px-5 py-6" onClick={() => navigate("/about")}>
                {language === "en" ? <ChevronRight /> : <ChevronLeft />} {t("Explore More")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
