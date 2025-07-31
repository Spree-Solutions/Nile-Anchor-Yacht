import { months } from "@/data/common/months";

export function formatDate(isoString, format = "default", time = false) {
  const language = localStorage.getItem("language") || "en";
  const locale = language === "ar" ? "ar" : "en-US";

  if (typeof isoString === "object" && isoString?.month && isoString?.year) {
    if (format === "iso") {
      const monthIndex = new Date(`${isoString.month} 1, ${isoString.year}`).getUTCMonth() + 1;
      const paddedMonth = String(monthIndex).padStart(2, "0");
      return `${isoString.year}-${paddedMonth}-01`;
    }
    return `${isNaN(parseInt(isoString.month)) ? isoString.month : months[(isoString.month || 1) - 1]}/ ${
      isoString.year
    }`;
  }

  const date = new Date(isoString);

  if (format === "iso") {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate() + 1).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    if (!time) return formattedDate;

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${formattedDate} - ${hours}.${minutes}`;
  }

  const options = { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" };

  const formattedDate = date.toLocaleDateString(locale, options);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const formattedTime = `${hours}.${minutes}`;

  return `${formattedDate}${time ? ` - ${formattedTime}` : ""}`;
}

export function getMonthName(monthNumber) {
  return monthNumber ? months[monthNumber - 1] : "";
}

export function getMonthNumber(monthName) {
  const index = months.indexOf(monthName);
  return index !== -1 ? index + 1 : null;
}
