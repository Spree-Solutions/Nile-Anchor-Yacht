import { useState } from "react";
import Container from "@/components/common/Container";
import GalleryHeader from "./GalleryHeader";
import YachtTabs from "./YachtTabs";
import ImageGrid from "./ImageGrid";
import { galleryData } from "@/data/home/galleryData";
import { motion, AnimatePresence } from "framer-motion";

const HomeGallerySection = () => {
  const [activeYacht, setActiveYacht] = useState(galleryData[0]?.id || "bella");

  const activeYachtData = galleryData.find((yacht) => yacht.id === activeYacht);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tabContentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section 
      className="py-12 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <Container>
        <div className="space-y-8 md:space-y-12">
          {/* Gallery Header */}
          <motion.div variants={itemVariants}>
            <GalleryHeader />
          </motion.div>

          {/* Yacht Selection Tabs */}
          <motion.div variants={itemVariants}>
            <YachtTabs 
              yachts={galleryData} 
              activeYacht={activeYacht} 
              onYachtChange={setActiveYacht} 
            />
          </motion.div>

          {/* Image Grid with smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYacht} 
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ImageGrid 
                images={activeYachtData?.images || []} 
                yachtName={activeYachtData?.name || ""} 
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </motion.section>
  );
};

export default HomeGallerySection;