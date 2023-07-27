"use client";
import Chip from "@/components/common/chip/chip";
import styles from "./events.module.css";
import Mobile from "@/components/common/mobile/mobilephone";
import LinkComponent from "@/components/dashboard/LinksComponent/linksComponent";
import { SetUser } from "@/redux/slices/userSlice";
import { store } from "@/redux/store";
import Button from "@/components/common/Button/Button";
import Link from "next/link";
import { RiStackshareLine } from "react-icons/ri";

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
      <center>
        {" "}
        <Button size="sm" label="shareLink">
          <Link
            href={`/${store.getState().user.userName}`}
            style={{ textDecoration: "none" }}
          >
            <RiStackshareLine /> Share Link
          </Link>
        </Button>
      </center>
    </>
  );
}
