import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const GalleryCollection = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 md:py-16">
      <Container>
        <motion.h1
          className="text-3xl text-[#003950] font-medium mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("Where Memories Are Made And Happiness Is Captured")}
        </motion.h1>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LazyImage
              className="max-h-[270px] md:max-h-[370px] rounded-xl"
              src={"/images/about/all-yachts-8.webp"}
              alt={"weddings"}
            />
          </motion.div>

          <motion.div
            className="flex justify-center items-center md:p-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "Whether you’re looking for the perfect place to celebrate your birthday on the Nile or have a family/friends reunion in Cairo, our services are here to meet your expectations. Our yachts provide the opportunity to hold; celebrations, special moments and gatherings through their latest interior/ exterior designs and premium services."
              )}
            </p>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          <motion.div
            className="flex justify-center items-center md:p-5 row-start-2 md:row-start-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "Our yachts offer relaxing, luxurious trips along Cairo’s Nile River, where special moments turn into reality. Each yacht features indoor and outdoor lounges, giving guests the freedom to host occasions with more exclusivity. The tri-deck design allows for exquisite celebrations while capturing breathtaking views of the Nile."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LazyImage
              className="max-h-[270px] md:max-h-[370px] rounded-xl"
              src={"/images/about/all-yachts-31.webp"}
              alt={"weddings"}
            />
          </motion.div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LazyImage
              className="max-h-[270px] md:max-h-[370px] rounded-xl"
              src={"/images/yachts/liberty/liberty-1.webp"}
              alt={"weddings"}
            />
          </motion.div>

          <motion.div
            className="flex justify-center items-center md:p-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "If you’re looking to host a special event or go for a group gathering, our customizable packages are here to fulfill your needs while adding stress-free solutions to your list"
              )}
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default GalleryCollection;
