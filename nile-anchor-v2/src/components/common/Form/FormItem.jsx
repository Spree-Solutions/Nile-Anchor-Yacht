import { forwardRef } from "react";
import "./_form.css";

const FormItem = forwardRef(
  (
    {
      asterisk,
      children,
      className,
      errorMessage,
      extra,
      htmlFor,
      label,
      labelClass,
      classNameChild,
      layout,
      icon: Icon,
    },
    ref,
  ) => {
    const formItemClass = `form-item ${className || ""}`;
    const formLabelClass = `${labelClass ? labelClass : "form-label"}`;

    return (
      <div ref={ref} className={`${label ? "" : "mt-[28px]"} ${formItemClass} `}>
        {label && (
          <label htmlFor={htmlFor} className={formLabelClass}>
            {asterisk && <span className="text-red-500 ltr:mr-1 rtl:ml-1">*</span>}
            {label}
            {extra && <span>{extra}</span>}
            {layout === "vertical" ? ":" : ""}
          </label>
        )}
        <div
          className={
            layout === "horizontal" ? "w-full relative flex flex-col justify-center" : `w-full ${classNameChild}`
          }
        >
          {children}
          {Icon && <Icon className="w-5 h-5 absolute top-11 text-slate-600 end-2 bg-white" />}
          {errorMessage && <div className="form-explain">{errorMessage}</div>}
        </div>
      </div>
    );
  },
);

FormItem.displayName = "FormItem";

export default FormItem;
