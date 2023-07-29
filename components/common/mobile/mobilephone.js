import styles from "./mobile.module.css";
import CustomLinks from "./customLInksComp";

export default function Mobile({ userName }) {
  return (
    <>
      <div className={`${styles.device}`}>
        <div className={styles.floating}>
          <div className={styles.camera}>
            <div className={`${styles.blob} ${styles.white}`}></div>
            <div className={`${styles.blob} ${styles.bbg}`}></div>
            <div className={`${styles.blob} ${styles.green}`}></div>
            <div className={`${styles.blob} ${styles.red}`}></div>
          </div>
        </div>
        <CustomLinks userName={userName} />
      </div>
    </>
  );
}
