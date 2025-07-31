import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const GalleryHeader = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className="flex flex-row items-start justify-between gap-6 sm:gap-4">
      <div className="w-full sm:w-auto flex justify-start items-center lg:block">
        <h2 className="font-['Antic_Didone'] text-3xl md:text-4xl lg:text-5xl text-[#041125] mb-2 sm:mb-3">
          {t("Gallery")}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0 hidden lg:block">
          {t(
            "Explore our luxury yacht collection through stunning photography showcasing every detail of comfort and elegance",
          )}
        </p>
      </div>

      <div className="w-full sm:w-auto text-center sm:text-right flex justify-end items-center lg:block">
        <Link
          to="/gallery"
          className="group inline-flex items-center gap-2 bg-primary text-white px-4 md:px-5 py-3 rounded-lg font-medium hover:bg-[#0a1e35] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
        >
          {t("View All")}
          {language === "en" ? (
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          ) : (
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default GalleryHeader;
