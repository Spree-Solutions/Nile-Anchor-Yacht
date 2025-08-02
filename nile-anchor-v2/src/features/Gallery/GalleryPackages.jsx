import "./style.css";
import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const GalleryPackages = () => {
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
          {/* Content Section */}
          <motion.div
            className="row-start-2 md:row-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="font-normal text-3xl text-[#003950] mb-6">
              {t("All Packages Include")}
            </h1>

            <ul className="space-y-4">
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 text-[#404040] text-base md:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-[#003950] w-5 h-5 mt-1" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Images Section */}
          <div className="flex justify-end relative min-h-[420px] md:min-h-[670px]">
            <LazyImage
              src="/images/parties/party1.webp"
              className="h-[45%] w-2/3 wedding-image absolute left-0 top-0 object-cover rounded-lg z-[2]"
            />
            <LazyImage
              src="/images/parties/party2.webp"
              className="h-1/2 w-2/3 wedding-image absolute right-0 top-1/2 -translate-y-1/2 object-cover rounded-lg z-[2]"
            />
            <LazyImage
              src="/images/parties/party3.webp"
              className="h-1/2 w-2/3 wedding-image absolute left-0 bottom-0 object-cover rounded-lg z-[2]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GalleryPackages;
