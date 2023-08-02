import Heading from "../Heading/Heading";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Heading size="sm" fontFamily="var(--system-font)">
        Made by Suyash Lade
      </Heading>
    </footer>
  );
}
