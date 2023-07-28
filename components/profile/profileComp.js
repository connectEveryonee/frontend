import Heading from "../common/Heading/Heading";
import styles from "./profileComp.module.css";

export default function PorfileComp() {
  return (
    <>
      <section className={styles.mainComp}>
        <div className={styles.profileComp}></div>
        <div>
          <Heading size="md" fontFamily="var(--system-font)">
            User Info
          </Heading>
        </div>
      </section>
    </>
  );
}
