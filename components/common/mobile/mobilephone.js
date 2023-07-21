import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./mobile.module.css";
import CustomLinks from "./customLInksComp";

export default function Mobile() {
  return (
    <>
      <div className={styles.device}>
        <div className={styles.floating}>
          <div className={styles.camera}>
            <div className={`${styles.blob} ${styles.white}`}></div>
            <div className={`${styles.blob} ${styles.bbg}`}></div>
            <div className={`${styles.blob} ${styles.green}`}></div>
            <div className={`${styles.blob} ${styles.red}`}></div>
          </div>
        </div>
        <CustomLinks name='ram' />
      </div>
    </>
  );
}
