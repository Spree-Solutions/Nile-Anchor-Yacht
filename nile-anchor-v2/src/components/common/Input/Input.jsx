import * as React from "react";
import { cn } from "@/lib/utils";
import { Input as OriginalInput } from "@/components/ui/input";
import './Input.css'

const CustomInput = React.forwardRef(({ className, type, textArea, invalid, disabled, ...props }, ref) => {

  const inputClass = [
    className,
    disabled && 'input-disabled',
    textArea && 'input-textarea',
    invalid ? 'input-invalid' : 'focus:ring-main border-[#E5E7EB] focus:right-1 input focus:border-main',
  ].filter(Boolean).join(' ');

  return (
    <OriginalInput
      type={type}
      className={cn(
        "input flex h-12",
        inputClass
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    />
  );
});

CustomInput.displayName = "CustomInput";

export { CustomInput as Input };
