import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";

const GalleryCollection = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 md:py-16">
      <Container>
        <h1 className="text-3xl text-[#003950] font-medium mb-8">
          {t("Where Memories Are Made And Happiness Is Captured")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <LazyImage
            className="max-h-[270px] md:max-h-[370px] rounded-xl"
            src={"/images/about/all-yachts-8.png"}
            alt={"weddings"}
          />
          <div className="flex justify-center items-center md:p-5">
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "Whether you’re looking for the perfect place to celebrate your birthday on the Nile or have a family/friends reunion in Cairo, our services are here to meet your expectations. Our yachts provide the opportunity to hold; celebrations, special moments and gatherings through their latest interior/ exterior designs and premium services.",
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          <div className="flex justify-center items-center md:p-5 row-start-2 md:row-start-1">
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "Our yachts offer relaxing, luxurious trips along Cairo’s Nile River, where special moments turn into reality. Each yacht features indoor and outdoor lounges, giving guests the freedom to host occasions with more exclusivity. The tri-deck design allows for exquisite celebrations while capturing breathtaking views of the Nile.",
              )}
            </p>
          </div>
          <LazyImage
            className="max-h-[270px] md:max-h-[370px] rounded-xl"
            src={"/images/about/all-yachts-31.png"}
            alt={"weddings"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-12">
          <LazyImage
            className="max-h-[270px] md:max-h-[370px] rounded-xl"
            src={"/images/yachts/liberty/liberty-1.png"}
            alt={"weddings"}
          />
          <div className="flex justify-center items-center md:p-5">
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "If you’re looking to host a special event or go for a group gathering, our customizable packages are here to fulfill your needs while adding stress-free solutions to your list",
              )}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GalleryCollection;
