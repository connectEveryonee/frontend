import { toast } from "react-toastify";

export function WarningTost(msg) {
  return toast.warn(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function SucessToast(msg, onChange) {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
  toast.onChange((e) => {
    onChange;
  });
}


export function ErrorToast(msg,onChange){
  toast.error(msg,{
    position:toast.POSITION.TOP_RIGHT,

  })
  toast.onChange(()=>{onChange})
}
