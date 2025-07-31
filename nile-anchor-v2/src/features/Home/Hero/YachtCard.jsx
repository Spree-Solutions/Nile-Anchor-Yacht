import LazyImage from "@/components/common/LazyImage";
import YachtDetailsSheet from "./YachtDetailsSheet";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const YachtCard = ({ yacht }) => {
  const { t } = useTranslation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleViewDetails = (e) => {
    e.preventDefault();
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <div className="px-3">
        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#a18c6d]/50 transition-all duration-500 grid grid-cols-5">
          <div className="h-full col-span-2 relative overflow-hidden">
            <LazyImage
              src={yacht?.image}
              alt={yacht?.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="col-span-3 p-3">
            <h3 className="font-['Antic_Didone'] text-white text-xl md:text-2xl mb-2 group-hover:text-[#a18c6d] transition-colors duration-300">
              {t(yacht?.name)}
            </h3>

            <p className="text-[#d1d1d1] text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
              {t(yacht?.description)}
            </p>

            <button 
              onClick={handleViewDetails}
              className="text-white/70 hover:text-[#a18c6d] underline transition-colors duration-300 cursor-pointer"
            >
              {t("View Details")}
            </button>
          </div>
        </div>
      </div>

      <YachtDetailsSheet 
        yacht={yacht}
        isOpen={isSheetOpen}
        onClose={handleCloseSheet}
      />
    </>
  );
};

export default YachtCard;