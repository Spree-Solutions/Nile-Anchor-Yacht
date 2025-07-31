import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { services } from "@/data/home/services";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-[#FFFBF3] bg-cover bg-center bg-no-repeat py-8 md:py-16"
      style={{ backgroundImage: 'url("/images/backgrounds/our_service.png")' }}
    >
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-5xl font-bold text-[#00162C]">{t("our services")}</h1>
          <p className="text-lg md:text-2xl text-[#00162C]">{t("Discover yachting feel freedom")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm transition-transform hover:scale-105 duration-300"
            >
              <LazyImage src={service.image} alt={service.title} className="h-56" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#00162c] mb-2">{t(service?.title)}</h3>
                <p className="text-sm text-gray-700 line-clamp-2 mb-3">{t(service?.description)}</p>
                <Link to="/about" className="text-[#A18C6D] text-sm font-medium hover:underline">
                  {t("Read More")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
