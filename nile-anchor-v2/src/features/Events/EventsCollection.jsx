import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const EventsCollection = () => {
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
          {t("For Us, Your Event Is Our Event")}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LazyImage
              className="max-h-[270px] md:max-h-[370px] rounded-xl"
              src={"/images/events/event1.jpg"}
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
                "We provide corporations, event managers, organizations and delegations the opportunity to hold and host; private meetings conferences, group seminars, celebrations and outings on Cairo’s Nile River. Our yacht’s unique architectural designs enable our delightful guests the chance to experience the Nile River like never before.",
              )}
            </p>
          </motion.div>
        </div>

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
                "Whether you're planning a formal gathering or a casual celebration, our yachts provide the ideal setting for private and public events. With beautifully designed indoor and outdoor lounges across both decks, guests can enjoy a serene open-air experience overlooking the Nile or a refined indoor atmosphere that ensures comfort and privacy.",
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
              src={"/images/events/event2.jpg"}
              alt={"weddings"}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default EventsCollection;
