import PorfileComp from "@/components/profile/profileComp";
import styles from "./page.module.css";
import SetLocalStorage from "@/utility/localStorage";

export default function Page() {
SetLocalStorage()
  return (
    <div className={styles.profileComp}>
      <PorfileComp />
    </div>
  );
}
