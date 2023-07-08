import styles from "./mobile.module.css";

export default function Mobile() {
  return (
    <>
      <div className={styles.device}>
        <div className={styles.status}>
          {/* <div className={styles.time}>9:41</div>
          <div className={styles.blank}></div>
          <div className={styles.icons}>
            <iconify-icon
              icon="ic:round-signal-cellular-alt"
              inline
            ></iconify-icon>
            <iconify-icon icon="ic:round-wifi" inline></iconify-icon>
            <iconify-icon icon="gg:battery-full" inline></iconify-icon>
          </div> */}
        </div>
        <div className={styles.floating}>
          <div className={styles.camera}>
            <div className={`${styles.blob} ${styles.white}`}></div>
            <div className={`${styles.blob} ${styles.bbg}`}></div>
            <div className={`${styles.blob} ${styles.green}`}></div>
            <div className={`${styles.blob} ${styles.red}`}></div>
          </div>
        </div>
        <div className={styles.home}></div>

        <div className={styles.text}>
          <p className="line small">Suyash</p>
          <p className="line big">Lade</p>
        </div>

    
      </div>
    </>
  );
}
