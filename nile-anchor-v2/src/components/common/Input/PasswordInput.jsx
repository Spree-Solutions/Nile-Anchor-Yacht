import { Eye, EyeOff } from "lucide-react";
import { Children, cloneElement, useState } from "react";
import FormItem from "../Form/FormItem";

function PasswordInput({ children, label, errorMessage, disabled }) {
  const [show, setShow] = useState(false);
  return (
    <FormItem labelClass='text-[#9A9EA7] text-xs text-base' className="bg-white p-3 border border-[#EEEEEE] rounded-lg" label={label} errorMessage={errorMessage}>
      {Children.only(children) &&
        cloneElement(Children.only(children), {
          disabled: disabled,
          type: show ? "text" : "password",
        })}
      <div className="absolute top-[41px] bg-white end-2 px-3 flex items-center text-sm leading-5">
        <button type="button" onClick={() => setShow(!show)} className="text-gray-400">
          {show ? <Eye className="h-5 w-5 text-primary" /> : <EyeOff className="h-5 w-5 text-primary" />}
        </button>
      </div>
    </FormItem>
  );
}

export default PasswordInput;
