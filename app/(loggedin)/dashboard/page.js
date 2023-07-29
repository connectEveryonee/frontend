"use client";
import styles from "./events.module.css";
import Mobile from "@/components/common/mobile/mobilephone";
import LinkComponent from "@/components/dashboard/LinksComponent/linksComponent";
import { store } from "@/redux/store";
import Button from "@/components/common/Button/Button";
import { RiStackshareLine } from "react-icons/ri";
import { SucessToast } from "@/utility/toaster";

export default function Page() {
  return (
    <>
      <div className={styles.eventsContainer}>
        <LinkComponent />
        <Mobile userName={store.getState().user.userName} />
      </div>
      <center>
        {" "}
        <Button
          onClick={() => {
            navigator.clipboard.writeText(
              `https://simplelinks.netlify.app/${
                store.getState().user.userName
              }`
            );
            SucessToast("link Copied to Clip Board");
          }}
          size="sm"
        >
          <RiStackshareLine /> Share Link
        </Button>
      </center>
    </>
  );
}
