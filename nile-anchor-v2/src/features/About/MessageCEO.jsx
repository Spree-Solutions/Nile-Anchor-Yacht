import Container from "@/components/common/Container";
import { WheelIcon, YachtIcon } from "@/components/common/icons";
import useMediaQuery from "@/hooks/helpers/useMediaQuery";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MessageCEO = () => {
  const { t } = useTranslation();
  const { isMedium } = useMediaQuery();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const ceoInfoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const missionSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const missionItemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -90, scale: 0.5 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <div className="py-8 md:py-16 bg-[#FFFBF3]">
      <Container>
        {/* CEO Message Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Message Text */}
          <motion.div className={`flex flex-col gap-3 ${isMedium && "text-center"}`} variants={containerVariants}>
            <motion.h1 className="text-xl md:text-3xl text-[#003950] font-bold" variants={titleVariants}>
              {t("CEO's Message")}
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-[#404040] leading-[45px]"
              style={{ lineHeight: "45px" }}
              variants={messageVariants}
            >
              {t(
                "“For thousands of years the Nile River has been bestowing its generosity to Egyptians through its everlasting water and never ending greenery. It grants people joy and happiness through its breathtaking distance which covers over 1500 kilos across Egypt. This remarkable river will forever remain within the hearts and souls of every Egyptian even for the next thousands of years that are yet to come”",
              )}
            </motion.p>
          </motion.div>

          {/* CEO Image & Info */}
          <motion.div
            className={`flex justify-center items-center gap-3 flex-col ${isMedium && "row-start-1 row-end-2"}`}
            variants={containerVariants}
          >
            <motion.img
              src="/images/about/bassel.webp"
              alt="ceo"
              className="h-[230px] md:h-[460px] object-contain"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />

            <motion.div className="flex justify-center items-center gap-2 flex-col" variants={ceoInfoVariants}>
              <motion.h1
                className="text-xl md:text-3xl text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t("Bassel El BatoutyChief ")}
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl text-[#003950]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("Chief Executive Officer")}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16"
          variants={missionSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Our Mission - Yacht */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-5 w-fit justify-center md:justify-between"
            variants={missionItemVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div variants={iconVariants}>
              <YachtIcon className="w-20 h-auto" />
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 justify-center md:justify-start w-fit items-center md:items-start"
              variants={textContentVariants}
            >
              <motion.h1
                className="text-2xl text-[#003950]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t("Our Mission")}
              </motion.h1>

              <motion.p
                className={`text-base text-[#404040] ${isMedium && "text-center"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t(
                  "Happiness comes through journeys, experiences and memories. We aim at bringing the letters of joy to our delightful customers through our premier services and unforgettable, luxurious trips across Cairo's Nile River.",
                )}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Our Mission - Wheel */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-5 w-fit justify-center md:justify-between"
            variants={missionItemVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div variants={iconVariants}>
              <WheelIcon className="w-20 h-auto" />
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 justify-center md:justify-start w-fit items-center md:items-start"
              variants={textContentVariants}
            >
              <motion.h1
                className="text-2xl text-[#003950]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t("Our Mission")}
              </motion.h1>

              <motion.p
                className={`text-base text-[#404040] ${isMedium && "text-center"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t(
                  "Happiness comes through journeys, experiences and memories. We aim at bringing the letters of joy to our delightful customers through our premier services and unforgettable, luxurious trips across Cairo's Nile River.",
                )}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default MessageCEO;
