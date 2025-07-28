import { CheckCircle2, X, XCircleIcon } from "lucide-react";
import { cloneElement } from "react";
import toast from "react-hot-toast";

const styles = {
  backgroundColor: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "1rem",
  pointerEvents: "auto",
  maxWidth: "22rem",
  width: "100%",
  display: "flex",
  ring: "1px solid black",
  ringOpacity: 0.05,
  padding: "0.5rem",
};

export const successToast = (title, message) => {
  toast(
    (t) => (
      <ToastTemplate
        color="success"
        title={title}
        message={message}
        icon={<CheckCircle2 className="text-success" />}
        t={t}
      />
    ),
    {
      style: {
        ...styles,
        borderInlineStart: "3px solid #36B37E",
      },
    },
  );
};

export const errorToast = (title, message) => {
  toast((t) => <ToastTemplate color="destructive" title={title} message={message} icon={<XCircleIcon />} t={t} />, {
    style: {
      ...styles,
      borderLeft: "3px solid hsl(var(--destructive))",
    },
  });
};

const ToastTemplate = ({ color, icon, title, message, t }) => {
  return (
    <>
      <div className="flex-1 flex flex-row justify-start gap-5 my-4">
        {cloneElement(icon, { className: `h-6 w-6 text-${color}` })}
        <div className=" flex flex-col  gap-2 ">
          <p className="text-semibold">{title}</p>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
      </div>
      <div className="border-gray-200">
        <button
          onClick={() => {
            toast.dismiss(t.id);
          }}
          className="p-5"
        >
          <X className="h-5 w-5 text-slate-400" />
        </button>
      </div>
    </>
  );
};
