import FormItem from "@/components/common/Form/FormItem";
import { Input } from "@/components/common/Input/Input";
import { Controller, useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import CustomButton from "@/components/common/Button/Button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl } from "@/components/ui/form";
import PhoneNumberInput from "@/components/common/PhoneInput";
import { formatDate } from "@/utils/formatDate";
import SelectDropdown from "../SelectDropdown";
import { successToast } from "../toast";
import axios from "axios";
import { useState } from "react";

const yachtOptions = [
  { value: "BELLA", title: "BELLA - Luxury Yacht" },
  { value: "ZEIN", title: "ZEIN - Speed Yacht" },
  { value: "VIDA", title: "VIDA - Family Yacht" },
  { value: "LIBERTY", title: "LIBERTY - Premium Yacht" },
  { value: "SPEEDBOATS", title: "SPEEDBOATS - Thrilling Nile Ride" },
];

const eventTypes = [
  { value: "WEDDING", title: "Wedding" },
  { value: "BIRTHDAY", title: "Birthday Party" },
  { value: "CORPORATE", title: "Corporate Event" },
  { value: "ANNIVERSARY", title: "Anniversary" },
  { value: "PRIVATE", title: "Private Party" },
  { value: "OTHER", title: "Other" },
];

const generateTimeOptions = () => {
  const times = [];

  for (let hour = 0; hour < 12; hour++) {
    let displayHour = hour === 0 ? 12 : hour;
    const timeString = `${displayHour}:00 AM`;

    times.push({
      title: timeString,
      value: timeString,
      sortOrder: hour,
      hour24: hour,
    });
  }

  for (let hour = 12; hour < 24; hour++) {
    let displayHour = hour === 12 ? 12 : hour - 12;
    const timeString = `${displayHour}:00 PM`;

    times.push({
      title: timeString,
      value: timeString,
      sortOrder: hour,
      hour24: hour,
    });
  }

  return times;
};

function BookingForm() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [isLoading, setLoading] = useState(false);

  const timeOptions = generateTimeOptions();

  const form = useForm();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = form;

  const watchedStartTime = watch("start_time");
  const watchedEndTime = watch("end_time");

  const getHour24FromTimeString = (timeStr) => {
    if (!timeStr) return null;
    const timeOption = timeOptions.find((option) => option.value === timeStr);
    return timeOption ? timeOption.hour24 : null;
  };

  const getAvailableEndTimes = (startTime) => {
    if (!startTime) return timeOptions;

    const startHour24 = getHour24FromTimeString(startTime);
    if (startHour24 === null) return timeOptions;

    return timeOptions.filter((option) => {
      return option.hour24 > startHour24;
    });
  };

  const validateTimeSelection = (startTime, endTime) => {
    clearErrors("start_time");
    clearErrors("end_time");

    if (!startTime && !endTime) return true;

    if (startTime && !endTime) {
      return true;
    }

    if (!startTime && endTime) {
      setError("start_time", {
        type: "manual",
        message: t("Please select start time first"),
      });
      return false;
    }

    if (startTime && endTime) {
      const startHour24 = getHour24FromTimeString(startTime);
      const endHour24 = getHour24FromTimeString(endTime);

      if (startHour24 >= endHour24) {
        setError("start_time", {
          type: "manual",
          message: t("Start time must be before end time"),
        });
        setError("end_time", {
          type: "manual",
          message: t("End time must be after start time"),
        });
        return false;
      }
    }

    return true;
  };

  const onSubmit = async (data) => {
  console.log("Form Data:", data);

  if (!validateTimeSelection(data.start_time, data.end_time)) {
    return;
  }

  setLoading(true);

  // Helper to format date and time WITHOUT timezone conversion
  const formatDateTime = (date, timeString) => {
    if (!date || !timeString) return null;

    const timeOption = timeOptions.find((t) => t.value === timeString);
    if (!timeOption) return null;

    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const hours = String(timeOption.hour24).padStart(2, "0");

    // Return ISO format string WITHOUT converting to UTC
    return `${year}-${month}-${day}T${hours}:00:00`;
  };

  const startTimeFormatted = formatDateTime(data.booking_date, data.start_time);
  const endTimeFormatted = formatDateTime(data.booking_date, data.end_time);

  // Format booking date without time conversion
  const bookingDateObj = new Date(data.booking_date);
  const year = bookingDateObj.getFullYear();
  const month = String(bookingDateObj.getMonth() + 1).padStart(2, "0");
  const day = String(bookingDateObj.getDate()).padStart(2, "0");
  const formattedBookingDate = `${year}-${month}-${day}T00:00:00`;

  console.log("Booking Data:", {
    startTime: startTimeFormatted,
    endTime: endTimeFormatted,
    date: formattedBookingDate
  });

  try {
    const response = await axios.post(
      "https://wikcppexkjyrqhfbvafg.supabase.co/functions/v1/messaging-service",
      {
        messageData: {
          fullName: data.full_name,
          email: data.email,
          phoneNumber: data.phone,
          yacht: data.yacht,
          eventType: data.event_type,
          startTime: startTimeFormatted,
          endTime: endTimeFormatted,
          date: formattedBookingDate,
        },
        serviceKey: "nileanchor_v2_reservation_form",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Reservation sent successfully:", response.data);
    setLoading(false);

    reset(null);
    successToast(t("Booking"), t("Booking Send Successfully"));
    return response.data;
  } catch (error) {
    console.error("Error sending reservation:", error.response?.data || error.message);
    reset();
    successToast(t("Booking"), t("Booking Send Successfully"));
    setLoading(false);
  }
};

  // const onSubmit = async (data) => {
  //   console.log("Form Data:", data);

  //   if (!validateTimeSelection(data.start_time, data.end_time)) {
  //     return;
  //   }

  //   setLoading(true);

  //   const convertToISOTime = (date, timeString) => {
  //     if (!date || !timeString) return null;

  //     const timeOption = timeOptions.find((t) => t.value === timeString);
  //     if (!timeOption) return null;

  //     const dateObj = new Date(date);
  //     dateObj.setHours(timeOption.hour24, 0, 0, 0);

  //     return dateObj.toISOString();
  //   };

  //   const startTimeISO = convertToISOTime(data.booking_date, data.start_time);
  //   const endTimeISO = convertToISOTime(data.booking_date, data.end_time);

  //   const bookingData = {
  //     ...data,
  //     start_time: startTimeISO,
  //     end_time: endTimeISO,
  //   };

  //   console.log("Booking Data:", bookingData);

  //   try {
  //     const response = await axios.post(
  //       "https://ppvdzvttzgtjyavdwviu.supabase.co/functions/v1/messaging-service",
  //       {
  //         messageData: {
  //           fullName: bookingData.full_name,
  //           email: bookingData.email,
  //           phoneNumber: bookingData.phone,
  //           yacht: bookingData.yacht,
  //           eventType: bookingData.event_type,
  //           startTime: bookingData.start_time,
  //           endTime: bookingData.end_time,
  //           date: new Date(bookingData.booking_date).toISOString(),
  //         },
  //         serviceKey: "nileanchor_v2_reservation_form",
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     );

  //     console.log("Reservation sent successfully:", response.data);
  //     setLoading(false);

  //     reset();
  //     successToast(t("Booking"), t("Booking Send Successfully"));
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error sending reservation:", error.response?.data || error.message);
  //     // errorToast(t("Booking"), t("Booking Send Failed"));
  //     reset();
  //     successToast(t("Booking"), t("Booking Send Successfully"));
  //     setLoading(false);
  //     // throw error;
  //   }
  // };

  return (
    <Form {...form}>
      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-fit">
            <FormItem label={t("Full Name")} errorMessage={errors.full_name?.message}>
              <Input
                id="full_name"
                type="text"
                {...register("full_name", { required: t("This field is required") })}
                placeholder={t("Enter Full Name")}
                className="w-full"
                invalid={!!errors.full_name}
              />
            </FormItem>

            <Controller
              name="yacht"
              control={control}
              rules={{ required: t("This field is required") }}
              render={({ field }) => (
                <SelectDropdown
                  placeholder={t("Select Yacht")}
                  options={yachtOptions}
                  name={t("Yacht")}
                  onChange={field.onChange}
                  value={field.value}
                  errMessage={errors.yacht?.message}
                  classBtn="bg-white"
                />
              )}
            />

            <FormItem label={t("Email")} errorMessage={errors.email?.message}>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: t("This field is required"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t("Please enter a valid email address"),
                  },
                })}
                placeholder={t("Please Enter Email")}
                className="w-full"
                invalid={!!errors.email}
              />
            </FormItem>

            <div className="">
              <label className={`form-label ${language === "ar" && "justify-end"}`}>{t("Phone Number")}</label>
              <PhoneNumberInput
                control={control}
                name="phone"
                rules={{ required: t("This field is required") }}
                className="bg-white user-phone-info"
              />
            </div>

            <Controller
              name="event_type"
              control={control}
              rules={{ required: t("This field is required") }}
              render={({ field }) => (
                <SelectDropdown
                  placeholder={t("Select Event Type")}
                  options={eventTypes}
                  name={t("Event Type")}
                  onChange={field.onChange}
                  value={field.value}
                  errMessage={errors.event_type?.message}
                  classBtn="bg-white"
                />
              )}
            />

            <Controller
              name="start_time"
              control={control}
              rules={{
                required: t("This field is required"),
                validate: (value) => {
                  const isValid = validateTimeSelection(value, watchedEndTime);
                  return isValid || t("Invalid time selection");
                },
              }}
              render={({ field }) => (
                <SelectDropdown
                  placeholder={t("Select start time")}
                  options={timeOptions}
                  name={t("Start Time")}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);

                    setTimeout(() => validateTimeSelection(value, watchedEndTime), 0);
                  }}
                  errMessage={errors.start_time?.message}
                  classBtn="bg-white"
                />
              )}
            />

            <Controller
              name="end_time"
              control={control}
              rules={{
                required: t("This field is required"),
                validate: (value) => {
                  const isValid = validateTimeSelection(watchedStartTime, value);
                  return isValid || t("Invalid time selection");
                },
              }}
              render={({ field }) => (
                <SelectDropdown
                  name={t("End Time")}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);

                    setTimeout(() => validateTimeSelection(watchedStartTime, value), 0);
                  }}
                  options={getAvailableEndTimes(watchedStartTime)}
                  placeholder={t("Select end time")}
                  errMessage={errors.end_time?.message}
                  classBtn="bg-white"
                  disabled={!watchedStartTime}
                />
              )}
            />

            <Controller
              name="booking_date"
              control={control}
              rules={{ required: t("This field is required") }}
              render={({ field }) => (
                <FormItem label={t("Date")} errorMessage={errors.booking_date?.message}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal justify-start items-center h-[48px]",
                            !field.value && "text-muted-foreground",
                            errors.booking_date && "border-red-500",
                          )}
                        >
                          <CalendarIcon className="mr-1 h-4 w-4 opacity-50" />
                          {field.value ? formatDate(new Date(field.value), false) : <span>{t("Choose date")}</span>}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        defaultMonth={new Date()}
                        fromYear={new Date().getFullYear()}
                        toYear={new Date().getFullYear() + 10}
                        captionLayout="dropdown"
                        selected={field.value ? new Date(field.value) : null}
                        onSelect={(date) => field.onChange(date || undefined)}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col justify-start gap-5 mt-4">
            <CustomButton
              isLoading={isLoading}
              onClick={handleSubmit(onSubmit)}
              disabled={Object.keys(errors).length > 0}
            >
              {t("Book")}
            </CustomButton>
          </div>
        </form>
      </div>
    </Form>
  );
}

export default BookingForm;
