import Container from "@/components/common/Container";
import { AnchorIcon } from "@/components/common/icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutDate = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const quotedTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="py-8 md:py-16">
      <Container>
        <motion.div 
          className="flex justify-center items-center flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={iconVariants}>
            <AnchorIcon className="text-[#BFA888]" />
          </motion.div>
          
          <motion.h3 
            className="text-3xl md:text-5xl font-normal mt-6 mb-3"
            variants={titleVariants}
          >
            {t("Nile Anchor SINCE 2021.")}
          </motion.h3>
          
          <motion.p 
            className="text-sm md:text-lg text-[#5D6C72]"
            variants={subtitleVariants}
          >
            {t("A dedicated drive towards becoming Egypt's top luxurious, hospitable onboard service cruise boats")}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="flex justify-end relative min-h-[300px] rounded-lg overflow-hidden"
            variants={videoVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.video 
              className="w-full h-full object-cover max-h-[420px] rounded-lg" 
              autoPlay 
              loop 
              muted 
              playsInline
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <source src="/videos/about.mp4" type="video/mp4" />
            </motion.video>
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-[#041125]/70 via-[#041125]/60 to-[#041125]/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <motion.div variants={textContentVariants}>
            <motion.div 
              className="px-5 border-l border-[#C3D2D9] text-3xl max-w-full md:max-w-[80%] mt-7 mb-5"
              variants={quotedTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t(
                "breathtaking moments on Egypt's Nile River. Premium packages are customizable and are currently available to; individuals, corporations and organizations providing stress-free solutions to those who wish to organize and hold exclusive events whether; corporate or group outing's, wedding/engagement ceremonies or even celebrations. The Nile Anchor provides a service which takes you on a prehistoric journey vs. today's modern age; a journey that takes you for a walk on Egypt's ancient river (The Nile River) accompanied by an expressive view of today's modern world; Cairo and Giza's districts.",
              )}
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutDate;