'use client'
import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./mobile.module.css";

export default function Mobile() {
   const z= async ()=>{
    try {
      const res = await Getlinks();

    } catch (err) {
      console.log(err);
    }
   }
   z()
  return (
    <>
      <div className={styles.device}>
        <div className={styles.status}></div>
        <div className={styles.floating}>
          <div className={styles.camera}>
            <div className={`${styles.blob} ${styles.white}`}></div>
            <div className={`${styles.blob} ${styles.bbg}`}></div>
            <div className={`${styles.blob} ${styles.green}`}></div>
            <div className={`${styles.blob} ${styles.red}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}
