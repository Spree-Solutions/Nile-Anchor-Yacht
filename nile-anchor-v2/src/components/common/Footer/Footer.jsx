import "./style.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../Container";
import useMediaQuery from "@/hooks/helpers/useMediaQuery";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronLeft, ChevronRight, MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { ColumnLogo } from "../icons";

const Footer = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { isMedium } = useMediaQuery();
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (item) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  const footerLinks = [
    {
      heading: t("Our Company"),
      links: [
        { text: t("About Us"), to: "/about" },
        { text: t("FAQ"), to: "/services" },
      ],
    },
    {
      heading: t("Yachts"),
      links: [
        { text: t("BELLA"), to: "/" },
        { text: t("ZEIN"), to: "/" },
        { text: t("VIDA"), to: "/" },
        { text: t("LIBERTY"), to: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className={`pt-12 pb-3 md:pb-8 ${!isMedium && "grid grid-cols-6 gap-5 pr"}`}>
          {/* Logo and Description Section */}
          <div
            className={`mb-8 flex justify-center flex-col gap-5 ${!isMedium && "col-span-6 lg:col-span-2"} ${
              language === "en" ? "md:pr-5" : "pl-5"
            }`}
          >
            <Link to="/">
              <ColumnLogo className="" />
            </Link>
            <p className="text-base font-semibold text-[#CCCCCC]">
              {t("We are a real estate agency that will help you find the best residence you dream!")}
            </p>
          </div>

          {/* Links Section - Accordion for medium screens, Grid for larger screens */}
          {isMedium ? (
            <div className="border-[#d5d5d8] border-t">
              <Accordion type="single" collapsible className="w-full" onValueChange={(value) => handleToggle(value)}>
                {footerLinks.map((section, index) => (
                  <AccordionItem key={section.heading} value={`item-${index + 1}`} className="border-none">
                    <AccordionTrigger className="text-[16px] font-bold leading-[30px] accordion-btn text-white">
                      <span className="trigger-title w-[120px] text-start">{section.heading}</span>
                      <span>{openItem === `item-${index + 1}` ? <MinusIcon /> : <PlusIcon />}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col justify-start items-start gap-2">
                        {section.links.map(({ text, to }) => (
                          <li
                            key={text}
                            className="text-[14px] line-clamp-1 sm:text-[16px] font-normal text-[#CCCCCC] transition-all hover:opacity-75 leading-[30px]"
                          >
                            <Link to={to}>{text}</Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}

                {/* Office Section in Accordion */}
                <AccordionItem value="item-office" className="border-none">
                  <AccordionTrigger className="text-[16px] font-bold leading-[30px] text-white accordion-btn">
                    <span className="trigger-title w-[120px] text-start">{t("Contact Details")}</span>
                    <span>{openItem === "item-office" ? <MinusIcon /> : <PlusIcon />}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-white font-medium">{t("Mon - Fri, 9.00am until 6.30pm")}</p>
                      <p className="text-sm text-white font-medium">{t("Nile view club, Dokki Giza, Egypt")}</p>
                      <a
                        href="mailto:reservation@thenileanchor.com"
                        className="text-sm text-white font-medium underline hover:opacity-80"
                      >
                        reservation@thenileanchor.com
                      </a>
                      <a href="tel:+201211140222" className="text-sm text-white font-medium hover:opacity-80">
                        01211140222
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 col-span-4">
              {footerLinks.map(({ heading, links }) => (
                <FooterColumn key={heading} heading={heading} links={links} />
              ))}
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">{t("Contact Details")}</h3>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-white font-medium">{t("Mon - Fri, 9.00am until 6.30pm")}</p>
                  <p className="text-sm text-white font-medium">{t("Nile view club, Dokki Giza, Egypt")}</p>
                  <a
                    href="mailto:reservation@thenileanchor.com"
                    className="text-sm text-white font-medium underline hover:opacity-80"
                  >
                    reservation@thenileanchor.com
                  </a>
                  <a href="tel:+201211140222" className="text-sm text-white font-medium hover:opacity-80">
                    01211140222
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative w-full h-[190px] rounded-xl overflow-hidden">
          <img
            src="/images/backgrounds/yacht-silhouette.webp"
            alt="image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 h-full w-full flex items-start md:items-center justify-between px-6 md:px-12 py-3 flex-col md:flex-row">
            <h2 className="text-white text-xl md:text-3xl font-bold">{t("Book Your Yacht Experience.")}</h2>

            <a href="#booking-section">
              <button className="bg-white flex justify-center items-center gap-1 text-primary font-semibold px-5 py-2 rounded hover:bg-opacity-90 transition">
                {language === "en" ? <ChevronRight /> : <ChevronLeft />}
                {t("Yacht Booking")}
              </button>
            </a>
          </div>
          <div className="absolute inset-0 bg-black/40" /> {/* dark overlay for readability */}
        </div>

        <div className="text-center font-bold py-5 md:py-8 text-xs text-[#CCCCCC]">
          {t("2025 Spree Solutions. All Rights Reserved")}
        </div>
      </Container>
    </footer>
  );
};

const FooterColumn = ({ heading, links }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-white">{heading}</h3>
      <ul className="space-y-2">
        {links.map(({ text, to }) => (
          <li key={text}>
            <Link to={to} className="text-sm text-[#CCCCCC] font-semibold hover:text-[#ccccccb7] transition-all">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
