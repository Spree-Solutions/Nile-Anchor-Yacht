import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Button>{t("Home")}</Button>
    </div>
  );
};

export default HomePage;
