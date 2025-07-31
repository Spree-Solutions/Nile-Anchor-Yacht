import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CancelButton = ({ title, className }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Button className={`lg:w-auto h-10 ${className}`} type="button" variant="outline" onClick={() => navigate(-1)}>
      {t(title || "Cancel")}
    </Button>
  );
};

export default CancelButton;
