import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function PhoneNumberInput({ control, rules, name }) {
  const { t } = useTranslation();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <div className="flex flex-col w-full bg-white">
          <PhoneInput
            focusInputOnCountrySelection
            defaultCountry="EG"
            className="w-full rounded border p-3 border-[#E3E3E3] "
            value={value}
            onChange={onChange}
            inputRef={ref}
            displayInitialValueAsLocalNumber={false}
            withCountryCallingCode={true}
            international={true}
            countryCallingCodeEditable={false}
          />
          <div className="text-red-500 text-sm mt-1">{error && t(error?.message?.toString())}</div>
        </div>
      )}
    />
  );
}

export default PhoneNumberInput;
