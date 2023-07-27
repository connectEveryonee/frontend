"use client";
import styles from "./events.module.css";
import Mobile from "@/components/common/mobile/mobilephone";
import LinkComponent from "@/components/dashboard/LinksComponent/linksComponent";
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
    <>
      <div className={styles.eventsContainer}>
        <LinkComponent />
        <Mobile userName={store.getState().user.userName} />
      </div>
    </>
  );
}
