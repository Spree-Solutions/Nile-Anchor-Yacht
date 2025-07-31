import "./style.css";
import Container from "@/components/common/Container";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const EventPackages = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 md:py-16 bg-[#FFFBF3]">
      <Container>
        <div className="text-center flex justify-center items-center">
          <motion.p
            className="text-[#003950] text-xl md:text-3xl max-w-[70%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t(
              "Whether you’re willing to host any business event private or public, our customizable packages are here to satisfy your needs while adding stress-free solutions to your list",
            )}
          </motion.p>
        </div>
      </Container>
    </div>
  );
};

export default EventPackages;
