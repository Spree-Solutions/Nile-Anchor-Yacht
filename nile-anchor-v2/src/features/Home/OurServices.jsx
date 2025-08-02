import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { services } from "@/data/home/services";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OurServices = () => {
  const { t } = useTranslation();

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
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
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="bg-[#FFFBF3] bg-cover bg-center bg-no-repeat py-8 md:py-16"
      style={{ backgroundImage: 'url("/images/backgrounds/our_service.webp")' }}
    >
      <Container>
        {/* Header Section */}
        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-3xl md:text-5xl font-bold text-[#00162C]" variants={headerVariants}>
            {t("our services")}
          </motion.h1>
          <motion.p className="text-lg md:text-2xl text-[#00162C]" variants={subtitleVariants}>
            {t("Discover yachting feel freedom")}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-xl duration-300"
            >
              {/* Image with overlay animation */}
              <motion.div
                className="relative overflow-hidden h-56"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={imageVariants} whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                  <LazyImage src={service.image} alt={service.title} className="h-56 w-full object-cover" />
                </motion.div>

                {/* Subtle overlay animation on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="p-5"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-lg font-semibold text-[#00162c] mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t(service?.title)}
                </motion.h3>

                <motion.p
                  className="text-sm text-gray-700 line-clamp-2 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t(service?.description)}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to="/about"
                    className="text-[#A18C6D] text-sm font-medium hover:underline inline-flex items-center group"
                  >
                    {t("Read More")}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default OurServices;
