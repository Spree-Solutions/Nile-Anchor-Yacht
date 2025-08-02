import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ReusableHeroSection = ({
  title = "Welcome to Our Website",
  backgroundImage = "/images/about/hero.webp",
  className = "",
}) => {
  const { t } = useTranslation();

  return (
    <section
      className={cn(
        "relative w-full h-[260px] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-white text-4xl md:text-6xl font-semibold text-center px-4 pt-20"
      >
        {t(title)}
      </motion.h1>
    </section>
  );
};

export default ReusableHeroSection;
