import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavigationItems from "./NavigationItems";
import LanguageChanger from "../LanguageChanger";

const DesktopNavigation = ({ isScrolled }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigationItems = NavigationItems();

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {navigationItems.map((item) => {
        const isActive = location.pathname === item.href;

        return (
          <Link
            key={item.key}
            to={item.href}
            className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 group ${
              isScrolled
                ? isActive
                  ? "text-[#e2c293]"
                  : "text-gray-700 hover:text-[#e2c293]"
                : isActive
                ? "text-[#e2c293]"
                : "text-white hover:text-[#e2c293]"
            }`}
          >
            {t(item.label)}

            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#e2c293] transform origin-left transition-transform duration-300 ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}

      <LanguageChanger isScrolled={isScrolled} />

      {/* CTA Button */}
      {/* <button
        className={`ml-4 px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
          isScrolled
            ? "bg-[#e2c293] text-white hover:bg-[#8a7454] shadow-lg hover:shadow-xl"
            : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-[#041125] backdrop-blur-sm"
        }`}
      >
        {t("Book Now")}
      </button> */}
    </nav>
  );
};

export default DesktopNavigation;
