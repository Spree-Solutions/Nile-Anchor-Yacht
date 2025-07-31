import Container from "@/components/common/Container";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";

const EventsCollection = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 md:py-16">
      <Container>
        <h1 className="text-3xl text-[#003950] font-medium mb-8">
          {t("For Us, Your Event Is Our Event")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <LazyImage
            className="max-h-[270px] md:max-h-[370px] rounded-xl"
            src={"/images/events/event1.jpg"}
            alt={"weddings"}
          />
          <div className="flex justify-center items-center md:p-5">
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "We provide corporations, event managers, organizations and delegations the opportunity to hold and host; private meetings conferences, group seminars, celebrations and outings on Cairo’s Nile River. Our yacht’s unique architectural designs enable our delightful guests the chance to experience the Nile River like never before.",
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          <div className="flex justify-center items-center md:p-5 row-start-2 md:row-start-1">
            <p className="text-2xl font-medium text-[#404040]">
              {t(
                "Whether you're planning a formal gathering or a casual celebration, our yachts provide the ideal setting for private and public events. With beautifully designed indoor and outdoor lounges across both decks, guests can enjoy a serene open-air experience overlooking the Nile or a refined indoor atmosphere that ensures comfort and privacy.",
              )}
            </p>
          </div>
          <LazyImage
            className="max-h-[270px] md:max-h-[370px] rounded-xl"
            src={"/images/events/event2.jpg"}
            alt={"weddings"}
          />
        </div>
      </Container>
    </div>
  );
};

export default EventsCollection;
