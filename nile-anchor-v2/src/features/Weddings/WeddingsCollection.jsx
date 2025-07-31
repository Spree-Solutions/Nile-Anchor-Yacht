import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";

const WeddingsCollection = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 md:py-16">
      <Container>
        <h1 className="text-3xl text-[#003950] font-medium mb-8">
          {t("Where Delightful Moments Meet Cherishable Memories")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <LazyImage
            className="max-h-[270px] md:max-h-[370px] rounded-xl"
            src={"/images/services/weddings/wedding-2.png"}
            alt={"weddings"}
          />
          <div className="flex justify-center items-center md:p-5">
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "If you’re planning to have your wedding in Cairo and on the Nile, then this is the place to be. Our yachts provide the essentials needed to host exclusive wedding ceremonies and parties on Cairo’s Nile River. We’re here to offer you one of the most desirable location settings for wedding scenarios and a luxurious yacht cruise on the Nile.",
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          <div className="flex justify-center items-center md:p-5 row-start-2 md:row-start-1">
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "Our services help you develop, manage and host the ultimate wedding of your lifetime. Whether you’re looking to host a small wedding on the Nile River or a large one, our customizable packages are here to fulfill your needs while adding stress-free solutions to your list. We offer several wedding packages that are based on the number of attendees.",
              )}
            </p>
          </div>
          <LazyImage
            className="max-h-[270px] md:max-h-[370px] rounded-xl"
            src={"/images/services/weddings/decoration-2.jpg"}
            alt={"weddings"}
          />
        </div>
      </Container>
    </div>
  );
};

export default WeddingsCollection;
