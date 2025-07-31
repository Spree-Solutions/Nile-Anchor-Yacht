import { useTranslation } from "react-i18next";
import ContectForm from "./ContectForm";
import Container from "@/components/common/Container";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const formVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const headerSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="py-8 md:py-16">
      <Container>
        <motion.div
          className="bg-[#FAFAFA] p-5 grid grid-cols-5 gap-6 rounded-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.img
            src="/images/about/all-yachts-31.png"
            alt="booking"
            className="hidden md:block col-span-2 object-cover h-full w-full rounded-lg"
            variants={imageVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          />

          <motion.div className="col-span-5 md:col-span-3 flex flex-col" variants={contentVariants}>
            <motion.div
              className="flex flex-col gap-3 w-full mb-5"
              variants={headerSectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h1 className="text-5xl text-black" variants={titleVariants}>
                {t("Your voice matters to us")}
              </motion.h1>

              <motion.h1 className="text-base text-black" variants={subtitleVariants}>
                {t("Kindly fill out this form for any inquires and we'll get back to you as soon as possible.")}
              </motion.h1>
            </motion.div>

            <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <ContectForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactSection;
