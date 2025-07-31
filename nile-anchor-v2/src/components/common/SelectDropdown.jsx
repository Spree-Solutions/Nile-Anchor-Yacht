import { useState, useEffect } from "react";
import { Input } from "./Input/Input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useTranslation } from "react-i18next";
import { useDebounce } from "@/hooks/helpers/useDebounce";
import Loader from "./Loading/Loader";

function SelectDropdown({
  variant,
  className = "",
  name,
  options,
  value,
  onChange,
  errMessage,
  placeholder,
  isLoading,
  setSearch,
  placeholderSearch,
  disabled,
  type,
  description,
  customTrigger,
  classBtn,
  classContent,
  arrow = true,
  item_details = false,
  item_image = false,
  btnClass = "",
}) {
  const [label, setLabel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const {
    t,
    i18n: { language },
  } = useTranslation();

  className = `${className} w-full ${variant === "row" ? "flex flex-row items-center gap-8 " : "flex flex-col"}`.trim();

  const debouncedSearch = useDebounce(setSearch, 1000);

  useEffect(() => {
    const selectedOption = options?.find((option) => option.value.toString() === value?.toString());
    const selectionLabel =
      language === "en" ? selectedOption?.title || "" : selectedOption?.title_ar || selectedOption?.title || "";
    setLabel(selectedOption ? selectionLabel : "");
  }, [value, options, language]);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <div className={className}>
      {(name || description) && (
        <div>
          {name && <p className="font-semibold mb-[5px] text-base text-gray-700">{name}</p>}
          {description && <p className="text-sm  text-gray-400">{description}</p>}
        </div>
      )}

      <div className="w-full">
        <Select onValueChange={onChange} value={value}>
          {customTrigger ? (
            <SelectTrigger disabled={disabled} value={value} className="w-fit custom-trigger">
              {customTrigger}
            </SelectTrigger>
          ) : (
            <SelectTrigger
              disabled={disabled}
              value={value}
              className={`py-6 text-line focus:border-brand ${value ? "text-line" : "text-gray-600"} ${
                errMessage && "border-2 border-destructive"
              } ${language === "ar" ? "main-trigger-btn-ar" : "main-trigger-btn-en"} relative ${classBtn} ${
                language === "ar" ? "justify-end" : "justify-start"
              } ${arrow ? "active-arrow" : "inactive-arrow"} ${btnClass}`}
            >
              <SelectValue placeholder={placeholder}>
                {type === "color" && (
                  <span
                    style={{
                      backgroundColor: value,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginInlineEnd: "10px",
                    }}
                  ></span>
                )}
                {t(label)}
              </SelectValue>
            </SelectTrigger>
          )}

          <SelectContent className={`max-h-80 ${classContent}`}>
            {setSearch && (
              <Input
                className="mb-2"
                type="text"
                placeholder={t(placeholderSearch || "Search...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
              />
            )}
            {!isLoading ? (
              <SelectGroup>
                {options?.map((option) => (
                  <SelectItem key={option.id || option.value} value={option.value}>
                    {type === "color" ? (
                      <>
                        <span
                          style={{
                            backgroundColor: option.value,
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            display: "inline-block",
                            marginInlineEnd: "10px",
                          }}
                        ></span>
                        {t(option.title)}
                      </>
                    ) : (
                      <div className="flex justify-center items-start gap-5">
                        {item_image && option.image && (
                          <img src={option.image} alt="img" className="w-10 h-10 rounded-lg" />
                        )}
                        <div>
                          <h3 className="text-[#040B0C] font-bold text-sm line-clamp-1">
                            {t(language === "en" ? option.title : option.title_ar || option.title)}
                          </h3>
                          {item_details && option.description && (
                            <p className="text-[#ADADAD] font-semibold text-base line-clamp-1 max-w-[300px]">
                              {language === "en" ? option.description : option.description_ar || option.description}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </SelectItem>
                ))}
                {options.length === 0 && <h3 className="text-center font-medium py-8">{t("No Data!")}</h3>}
              </SelectGroup>
            ) : (
              <Loader size="sm" />
            )}
          </SelectContent>
        </Select>
        {errMessage && <p className="text-destructive text-sm">{errMessage}</p>}
      </div>
    </div>
  );
}

export default SelectDropdown;
