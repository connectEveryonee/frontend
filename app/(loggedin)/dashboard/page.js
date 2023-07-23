import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./events.module.css";
import Mobile from "@/components/common/mobile/mobilephone";
import LinkComponent from "@/components/dashboard/LinksComponent/linksComponent";
import { cookies } from "next/dist/client/components/headers";
import { store } from "@/redux/store";
import { setInitialLinks } from "@/redux/slices/linksSlice";

export default function Page() {
  const { userName, token } = JSON.parse(cookies().get("userInfo").value);

  return (
    <>
      <div className={styles.eventsContainer}>
        <LinkComponent UserName={userName} />
        <Mobile userName={userName} />
      </div>
    </>
  );
}
