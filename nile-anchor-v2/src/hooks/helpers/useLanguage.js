import { useEffect } from "react";
import i18n from "@/lib/i18n";
import { DEFAULT_LANGUAGE, FONT_FAMILIES } from "@/config/constants";

export const useLanguage = () => {
  const selectedLanguage = localStorage.getItem("language");

  const updateDocumentDirection = (lang) => {
    document.dir = lang === "en" ? "ltr" : "rtl";
    document.documentElement.style.fontFamily = FONT_FAMILIES[lang];
  };

  useEffect(() => {
    if (!selectedLanguage) {
      localStorage.setItem("language", DEFAULT_LANGUAGE);
      i18n.changeLanguage(DEFAULT_LANGUAGE);
    } else {
      i18n.changeLanguage(selectedLanguage);
      updateDocumentDirection(selectedLanguage);
    }

    i18n.on("languageChanged", updateDocumentDirection);
    return () => i18n.off("languageChanged", updateDocumentDirection);
  }, [selectedLanguage]);

  return { language: i18n.language };
};
