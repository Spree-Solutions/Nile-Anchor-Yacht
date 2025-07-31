import { useTranslation } from "react-i18next";

const YachtTabs = ({ yachts, activeYacht, onYachtChange }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const yachtImages = {
    bella: "/images/yachts/bella/bella.png",
    liberty: "/images/yachts/liberty/liberty.png",
    vida: "/images/yachts/vida/vida.png",
    zein: "/images/yachts/zein/zein.png",
  };

  return (
    <div className="flex justify-center">
      <div className="inline-flex flex-wrap bg-white rounded-xl p-2 sm:p-3 border-[2px] border-[#185995] max-w-full">
        {yachts.map((yacht, index) => (
          <button
            key={yacht.id}
            onClick={() => onYachtChange(yacht.id)}
            className={`relative ${
              language === "en" ? "border-r last:border-r-0" : "border-l last:border-l-0"
            } border-[#183F5E] px-3 sm:px-4 transition-all duration-300 w-auto`}
            style={{ borderRight: index === yachts.length - 1 ? "none" : undefined }}
          >
            <img
              src={yachtImages[yacht.id]}
              alt={yacht.name}
              className={`h-8 sm:h-10 max-w-[50px] sm:max-w-[60px] object-contain transition-transform duration-300 ${
                activeYacht === yacht.id ? "scale-110" : "hover:scale-105"
              }`}
            />
            {activeYacht === yacht.id && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-[#185995] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YachtTabs;
