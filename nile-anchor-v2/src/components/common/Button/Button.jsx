import { Button as ShadcnButton } from "@/components/ui/button";
import Loader from "../Loading/Loader";

function CustomButton({ children, className, isLoading, variation, disabled, ...props }) {
  let buttonClassName = "inline-flex gap-2 " + className;

  if (variation === "danger") {
    variation = "destructive";
  } else if (variation === "info") {
    buttonClassName += " text-white bg-info hover:bg-info/85";
  } else if (variation === "warning") {
    buttonClassName += " text-white bg-warning hover:bg-warning/85";
  } else if (variation === "outline") {
    buttonClassName += " h-[40px] rounded-[12px] bg-[#FCFCFC] border-[#EFEFEF] text-[#1A1D1F] hover:text-[#1A1D1F] font-semibold border-[2px]";
  } else if (variation === "outline-main") {
    buttonClassName += " text-primary border border-primary hover:bg-primary/5 hover:text-primary ";
  }

  return (
    <ShadcnButton disabled={isLoading || disabled} variant={variation} className={buttonClassName} {...props}>
      {children}
      {isLoading && <Loader loader size="sm" />}
    </ShadcnButton>
  );
}

export default CustomButton;