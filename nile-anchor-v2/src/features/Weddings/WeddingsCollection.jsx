import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const WeddingsCollection = () => {
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
          {t("Where Delightful Moments Meet Cherishable Memories")}
        </motion.h1>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <LazyImage
              className="max-h-[270px] md:max-h-[370px] rounded-xl"
              src={"/images/services/weddings/wedding-2.webp"}
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
                "If you’re planning to have your wedding in Cairo and on the Nile, then this is the place to be. Our yachts provide the essentials needed to host exclusive wedding ceremonies and parties on Cairo’s Nile River. We’re here to offer you one of the most desirable location settings for wedding scenarios and a luxurious yacht cruise on the Nile."
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
                "Our services help you develop, manage and host the ultimate wedding of your lifetime. Whether you’re looking to host a small wedding on the Nile River or a large one, our customizable packages are here to fulfill your needs while adding stress-free solutions to your list. We offer several wedding packages that are based on the number of attendees."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <LazyImage
              className="max-h-[270px] md:max-h-[370px] rounded-xl"
              src={"/images/services/weddings/decoration-2.webp"}
              alt={"weddings"}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WeddingsCollection;
