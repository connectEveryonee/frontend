import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./events.module.css";
import Mobile from "@/components/common/mobile/mobilephone";
import LinkComponent from "@/components/dashboard/LinksComponent/linksComponent";
import { cookies } from "next/dist/client/components/headers";
import { store } from "@/redux/store";
import { setInitialLinks } from "@/redux/slices/linksSlice";

export default function Page() {
  const { userName } = JSON.parse(cookies().get("userInfo").value);
  const { token } = JSON.parse(cookies().get("access_token").value);
  

  return (
    <>
      <div className={styles.eventsContainer}>
        <LinkComponent UserName={userName} token={token} />
        <Mobile userName={userName} token={token} />
      </div>
    </>
  );
}
