import "./../style.css";
import Container from "@/components/common/Container";
import { yachts } from "@/data/home/yachts";
import useMediaQuery from "@/hooks/helpers/useMediaQuery";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import YachtCard from "./YachtCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { isMedium } = useMediaQuery();
  const navigate = useNavigate();

  const isRTL = language === "ar";

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    lazyLoad: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    rtl: isRTL,
    nextArrow: (
      <button className={`custom-arrow right-4 top-4 ${language}`}>
        <ChevronRight size={24} color="white" />
      </button>
    ),
    prevArrow: (
      <button className={`custom-arrow left-4 top-4 ${language}`}>
        <ChevronLeft size={24} color="white" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInFromLeft = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? 60 : -60,
      y: 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInFromRight = {
    hidden: { 
      opacity: 0, 
      x: isRTL ? -60 : 60,
      y: 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const sliderVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="relative w-full md:min-h-screen overflow-hidden">
      {/* Background with fade in animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {!isMedium ? (
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/videos/hero-yacht.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-yacht-mobile.jpg)" }}
          />
        )}

        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#041125]/70 via-[#041125]/60 to-[#041125]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      <div className="pb-8 pt-20 md:pb-16 md:pt-28">
        <Container>
          <motion.div 
            className=""
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Content */}
            <div className={`relative h-full flex items-start justify-start flex-col ${isRTL && "text-right"}`}>
              {/* Subtitle */}
              <motion.p 
                className="text-[#a18c6d] text-sm md:text-base lg:text-lg font-medium tracking-[1.5px] mb-4 md:mb-6"
                variants={slideInFromLeft}
              >
                {t("LUXURY YACHT RENTALS")}
              </motion.p>

              {/* Main Title */}
              <motion.h1 
                className="font-['Antic_Didone'] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 md:mb-8"
                variants={slideInFromRight}
              >
                {t("Discover the Ultimate")}
                <br />
                {t("Luxury on the Nile")}
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="font-['Work_Sans'] text-[#d1d1d1] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8 md:mb-12"
                variants={fadeInUp}
              >
                {t(
                  "Nile Anchor offers a selection of premium yachts and tailored sailing services for every occasion, whether you're seeking adventure, relaxation, or an unforgettable event at sea.",
                )}
              </motion.p>

              {/* Buttons */}
              <motion.div 
                className="flex w-full flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start justify-center sm:justify-start"
                variants={scaleIn}
              >
                <motion.a 
                  href="#booking-section"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto block"
                >
                  <button className="w-full sm:w-auto px-6 py-3 bg-[#e6e1d6] text-[#00162c] text-sm sm:text-base font-medium rounded-lg hover:bg-[#d4cfc2] transition-all duration-300">
                    {t("BOOK NOW")}
                  </button>
                </motion.a>

                <motion.button
                  onClick={() => navigate("/yachts")}
                  className="w-full sm:w-auto px-6 py-3 border border-[#e6e1d6] text-[#e6e1d6] text-sm sm:text-base font-medium rounded-lg hover:bg-[#e6e1d6] hover:text-[#00162c] transition-all duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {t("EXPLORE MORE")}
                </motion.button>
              </motion.div>
            </div>

            {/* Yacht Slider Section */}
            <motion.div 
              className="mt-8"
              variants={sliderVariants}
            >
              <motion.div 
                className="flex justify-between items-center relative gap-4"
                initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-lg font-medium text-white">{t("Our Yachts")}</h3>
                <motion.span 
                  className="flex-1 block h-1 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ originX: isRTL ? 1 : 0 }}
                />
                <span className="w-24"></span>
              </motion.div>
              
              <motion.div 
                className="relative mt-5"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Slider {...sliderSettings} className={`yacht-slider ${language}`}>
                  {yachts?.slice(0, 6).map((yacht, index) => (
                    <motion.div
                      key={yacht?.id}
                      initial={{ opacity: 0, y: 60, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1 + (index * 0.1),
                        ease: "easeOut"
                      }}
                    >
                      <YachtCard yacht={yacht} />
                    </motion.div>
                  ))}
                </Slider>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};