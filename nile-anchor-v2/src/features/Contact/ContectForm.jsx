import FormItem from "@/components/common/Form/FormItem";
import { Input } from "@/components/common/Input/Input";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import CustomButton from "@/components/common/Button/Button";
import { Form } from "@/components/ui/form";
import PhoneNumberInput from "@/components/common/PhoneInput";
import { Textarea } from "@/components/common/Input/Textarea";
import { successToast } from "@/components/common/toast";

function ContectForm() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const form = useForm();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    reset();
    successToast(t("Contact"), t("We will contact you soon."));
  };

  return (
    <Form {...form}>
      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-fit">
            <FormItem label={t("Subject")} errorMessage={errors.subject?.message}>
              <Input
                id="subject"
                type="text"
                {...register("subject", { required: t("This field is required") })}
                placeholder={t("Enter Full Name")}
                className="w-full"
                invalid={!!errors.subject}
              />
            </FormItem>
            <FormItem label={t("Full Name")} errorMessage={errors.subject?.message}>
              <Input
                id="full_name"
                type="text"
                {...register("full_name", { required: t("This field is required") })}
                placeholder={t("Enter Full Name")}
                className="w-full"
                invalid={!!errors.full_name}
              />
            </FormItem>

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
            <FormItem className='col-span-2' label={t("Description")} errorMessage={errors.description?.message}>
              <Textarea
                invalid={!!errors.description}
                type="text"
                placeholder={t("Enter Description")}
                className="min-h-[140px]"
                {...register("description", {
                  required: t("This field is required"),
                })}
              />
            </FormItem>
          </div>

          <div className="flex flex-col justify-start gap-5 mt-4">
            <CustomButton isLoading={false} onClick={handleSubmit(onSubmit)} disabled={Object.keys(errors).length > 0}>
              {t("Send")}
            </CustomButton>
          </div>
        </form>
      </div>
    </Form>
  );
}

export default ContectForm;
