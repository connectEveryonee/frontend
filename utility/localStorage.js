import { SetUser } from "@/redux/slices/userSlice";
import { store } from "@/redux/store";

export default function SetLocalStorage() {
  if (typeof window !== "undefined") {
    // do localStorage stuff here
    const userInfo = {
      userName: localStorage.getItem("userName"),
      token: localStorage.getItem("token"),
    };
    store.dispatch(SetUser(userInfo));
  }
}
