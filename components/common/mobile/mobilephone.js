"use client";
import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./mobile.module.css";
import ViewSimpleLink from "@/components/viewSimpleLink/page";

export default function Mobile() {
  // const getLink = async () => {
  //   const res = await fetch("http://localhost:3000/ram");
  //   console.log(res);
  //   return res;
  // };
  // getLink();
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
        {/* <ViewSimpleLink name='ram'/> */}
      </div>
    </>
  );
}
