import "./style.css";
import Container from "@/components/common/Container";
import { useTranslation } from "react-i18next";

const EventPackages = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 md:py-16 bg-[#FFFBF3]">
      <Container>
        <div className="text-center flex justify-center items-center">
          <p className="text-[#003950] text-xl md:text-3xl max-w-[70%]">
            {t(
              "Whether you’re willing to host any business event private or public, our customizable packages are here to satisfy your needs while adding stress-free solutions to your list",
            )}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default EventPackages;
