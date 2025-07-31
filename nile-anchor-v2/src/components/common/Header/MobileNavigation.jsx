import "./header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavigationItems from "./NavigationItems";
import AppLogo from "../AppLogo";
import LanguageChanger from "../LanguageChanger";

const MobileNavigation = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const location = useLocation();
  const navigationItems = NavigationItems();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className={`w-full sm:w-80 bg-white header-mobile ${language}`}>
          <SheetHeader className="border-b border-gray-200 pb-4 mb-6">
            <SheetTitle className="text-left font-['Antic_Didone'] text-2xl text-[#041125]">
              <AppLogo />
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`flex gap-1 items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[#a18c6d]/10 text-[#a18c6d] border-l-4 border-[#a18c6d]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#a18c6d]"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {t(item.label)}
                </Link>
              );
            })}

            <LanguageChanger isScrolled isMobile />

            {/* Mobile CTA Button */}
            {/* <div className="pt-6 mt-6 border-t border-gray-200">
              <button
                onClick={handleLinkClick}
                className="w-full bg-[#a18c6d] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8a7454] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t("Book Now")}
              </button>
            </div> */}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
