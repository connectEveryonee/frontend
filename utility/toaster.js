import { toast } from "react-toastify";

export function WarningTost(msg) {
  return toast.warn(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function SucessToast(msg, onChange='', icon) {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
    icon: icon,
  });
  toast.onChange((e) => {
    onChange;
  });
}

export function ErrorToast(msg, onChange="", icon) {
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
    icon: icon,
  });
  toast.onChange(() => {
    onChange;
  });
}
