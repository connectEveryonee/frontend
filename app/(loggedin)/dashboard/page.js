import styles from "./events.module.css";
import Mobile from "@/components/common/mobile/mobilephone";
import LinkComponent from "@/components/dashboard/LinksComponent/linksComponent";
import { cookies } from "next/dist/client/components/headers";

export default function Page() {

  return (
    <>
      <div className={styles.eventsContainer}>
        <LinkComponent />
        <Mobile />
      </div>
    </>
  );
}
