import { errorToast } from "@/components/common/toast";
import { t } from "i18next";

function extractErrorMessage(err) {
  if (err?.response?.data) {
    const data = err.response.data;

    if (Array.isArray(data)) {
      for (let item of data) {
        for (let key in item) {
          if (item[key] && typeof item[key] === "string") {
            return item[key];
          }
        }
      }
    }

    if (typeof data === "object") {
      for (let key in data) {
        if (data[key]) {
          if (typeof data[key] === "string") {
            return data[key];
          } else if (Array.isArray(data[key]) && data[key].length > 0) {
            return data[key][0];
          }
        }
      }

      if (data?.message) return data.message;
      if (data?.error) return data.error;
      if (data?.detail) return data.detail;
      if (data?.non_field_errors?.[0]) return data.non_field_errors[0];
      if (data?.address) return data.address[0];
    }

    return data?.message || data?.error || data?.detail || data?.non_field_errors?.[0] || t("Something went wrong");
  }

  return err?.message || t("Something went wrong");
}

function responseErrHandler(err, title, isSecondToast = false) {
  const isHtmlError =
    typeof err?.response?.data !== "object" &&
    !Array.isArray(err?.response?.data) &&
    err?.response?.data?.includes("<html");

  if (isHtmlError) {
    return errorToast(t(title || "Error"), t("Something went wrong. Please try again later."));
  }

  const errorMessage = extractErrorMessage(err);

  if (isSecondToast) {
    return errorToast("", t(errorMessage));
  }

  return errorToast(t(title || "Error"), t(errorMessage));
}

export default responseErrHandler;
