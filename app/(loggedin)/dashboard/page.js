import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./events.module.css";
import Mobile from "@/components/common/mobile/mobilephone";
import LinkComponent from "@/components/dashboard/LinksComponent/linksComponent";
import { cookies } from "next/dist/client/components/headers";
import { store } from "@/redux/store";
import { setInitialLinks } from "@/redux/slices/linksSlice";
import { redirect } from "next/navigation";

export default function Page() {
 

  return (
    <>
      <div className={styles.eventsContainer}>
        <LinkComponent />
        <Mobile  />
      </div>
    </>
  );
}
