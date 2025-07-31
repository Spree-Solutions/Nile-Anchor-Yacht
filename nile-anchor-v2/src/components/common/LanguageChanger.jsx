import { useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import i18n from "@/lib/i18n";
import { GlobeIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { EgyptIcon, USIcon } from "./icons";

const LanguageChanger = ({ isScrolled = false }) => {
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      if (lng === "en") {
        document.dir = "ltr";
        document.documentElement.style.fontFamily = "Mulish";
      } else {
        document.dir = "rtl";
        document.documentElement.style.fontFamily = "Almarai";
      }
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const changeLanguage = (language) => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outlined"
          className={`${
            isScrolled ? "text-black hover:text-black/70" : "text-white hover:text-white/70"
          } font-medium transition-all p-0`}
        >
          <GlobeIcon style={{ width: "20px", height: "20px" }} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          style={{ fontFamily: "Mulish" }}
          className={`flex gap-2 ${language === "en" ? "bg-[#f1f5f9]" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          <USIcon />
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          style={{ fontFamily: "Almarai" }}
          className={`flex gap-2 ${language === "ar" ? "bg-[#f1f5f9]" : ""}`}
          onClick={() => changeLanguage("ar")}
        >
          <EgyptIcon /> العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageChanger;
