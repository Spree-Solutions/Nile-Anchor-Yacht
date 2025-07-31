import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea as OriginalTextarea } from "@/components/ui/textarea";
import './Input.css'

const CustomTextarea = React.forwardRef(({ className, type, invalid, disabled, ...props }, ref) => {

  const inputClass = [
    className,
    disabled && 'input-disabled',
    invalid ? 'input-invalid' : 'focus:ring-[#154cd6] border-[#E5E7EB] input focus:border-[#154cd6]',
  ].filter(Boolean).join(' ');

  return (
    <OriginalTextarea
      type={type}
      className={cn(
        "textarea",
        inputClass
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    />
  );
});

CustomTextarea.displayName = "CustomTextarea";

export { CustomTextarea as Textarea };
