import Container from "@/components/common/Container";
import { WheelIcon, YachtIcon } from "@/components/common/icons";
import useMediaQuery from "@/hooks/helpers/useMediaQuery";
import { useTranslation } from "react-i18next";

const MessageCEO = () => {
  const { t } = useTranslation();
  const { isMedium } = useMediaQuery();

  return (
    <div className="py-8 md:py-16 bg-[#FFFBF3]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className={`flex flex-col gap-3 ${isMedium && "text-center"}`}>
            <h1 className="text-xl md:text-3xl text-[#003950] font-bold">{t("CEO's Message")}</h1>
            <p className="text-xl md:text-3xl text-[#404040] leading-[45px]" style={{ lineHeight: "45px" }}>
              {t(
                "“For thousands of years the Nile River has been bestowing its generosity to Egyptians through its everlasting water and never ending greenery. It grants people joy and happiness through its breathtaking distance which covers over 1500 kilos across Egypt. This remarkable river will forever remain within the hearts and souls of every Egyptian even for the next thousands of years that are yet to come”",
              )}
            </p>
          </div>
          <div className={`flex justify-center items-center gap-3 flex-col ${isMedium && "row-start-1 row-end-2"}`}>
            <img src="/images/about/bassel.png" alt="ceo" className="h-[230px] md:h-[460px] object-contain" />
            <div className="flex justify-center items-center gap-2 flex-col">
              <h1 className="text-xl md:text-3xl text-black">{t("Bassel El BatoutyChief ")}</h1>
              <p className="text-lg md:text-2xl text-[#003950]">{t("Chief Executive Officer")}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16">
          <div className="flex flex-col md:flex-row items-center gap-5 w-fit justify-center md:justify-between">
            <YachtIcon className="w-20 h-auto" />
            <div className="flex flex-col gap-3 justify-center md:justify-start w-fit items-center md:items-start">
              <h1 className="text-2xl text-[#003950]">{t("Our Mission")}</h1>
              <p className={`text-base text-[#404040] ${isMedium && "text-center"}`}>
                {t(
                  "Happiness comes through journeys, experiences and memories. We aim at bringing the letters of joy to our delightful customers through our premier services and unforgettable, luxurious trips across Cairo’s Nile River.",
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 w-fit justify-center md:justify-between">
            <WheelIcon className="w-20 h-auto" />
            <div className="flex flex-col gap-3 justify-center md:justify-start w-fit items-center md:items-start">
              <h1 className="text-2xl text-[#003950]">{t("Our Mission")}</h1>
              <p className={`text-base text-[#404040] ${isMedium && "text-center"}`}>
                {t(
                  "Happiness comes through journeys, experiences and memories. We aim at bringing the letters of joy to our delightful customers through our premier services and unforgettable, luxurious trips across Cairo’s Nile River.",
                )}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MessageCEO;
