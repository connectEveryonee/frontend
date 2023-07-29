import PorfileComp from "@/components/profile/profileComp";
import styles from "./page.module.css";
import { SetUser } from "@/redux/slices/userSlice";
import { store } from "@/redux/store";

export default function Page() {
  if (typeof window !== "undefined") {
    // do localStorage stuff here
    const userInfo = {
      userName: localStorage.getItem("userName"),
      token: localStorage.getItem("token"),
    };
    store.dispatch(SetUser(userInfo));
  }
  return (
    <div className={styles.profileComp}>
      <PorfileComp />
    </div>
  );
}
