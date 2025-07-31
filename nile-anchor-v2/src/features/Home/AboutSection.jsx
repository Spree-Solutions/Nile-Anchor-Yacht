import "./style.css";
import LazyImage from "@/components/common/LazyImage";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-8 md:py-16 relative overflow-hidden">
      <Container>
        <motion.img
          src="/images/about/vision.png"
          className={`absolute top-0 ${
            language === "en" ? "-left-1/2 md:left-0" : "-right-1/2 md:right-0"
          } opacity-30 w-full md:w-1/2 h-auto`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="z-[2]">
          <motion.div
            className="relative mb-20 text-center flex flex-col justify-center items-center gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1 className="text-base md:text-4xl text-primary font-normal" variants={slideInFromLeft}>
              {t("About Us")}
            </motion.h1>

            <motion.p className="text-xl md:text-6xl text-black uppercase font-normal" variants={fadeInUp}>
              {t("Nile Anchor SINCE 2021.")}
            </motion.p>

            <motion.p className="text-base md:text-base text-[#5D6C72] font-normal" variants={slideInFromRight}>
              {t("Leading the way in luxury yacht experiences worldwide.")}
            </motion.p>
          </motion.div>

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

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h1
                className="font-['Sacramento'] font-normal text-4xl"
                variants={language === "en" ? slideInFromRight : slideInFromLeft}
              >
                {t("The Nile Anchor")}
              </motion.h1>

              <motion.div
                className={`${language === 'en'? "border-l":"border-r"} px-5  border-[#C3D2D9] text-3xl max-w-full md:max-w-[80%] mt-7 mb-5`}
                variants={fadeInUp}
              >
                <p className="text-primary font-normal text-2xl">
                  {t("aims at providing high-end value by offering exclusive offers and ")}
                  <br />
                  {t("premium packages ")}
                  <br />
                  {t("to create memorable")}
                </p>
              </motion.div>

              <motion.p
                className="text-lg font-normal text-[#5D6C72]"
                variants={language === "en" ? slideInFromLeft : slideInFromRight}
              >
                {t(
                  "breathtaking moments on Egypt's Nile River. Packages are currently available to; individuals, corporations and organizations providing stress-free solutions to those who wish to organize and hold exclusive events whether; corporate or group outing's, wedding/engagement ceremonies or even celebrations.",
                )}
              </motion.p>

              <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="uppercase mt-10 px-5 py-6" onClick={() => navigate("/about")}>
                  {language === "en" ? <ChevronRight /> : <ChevronLeft />} {t("Explore More")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
