import Text from "../common/text/text";
import styles from "./eventsChip.module.css";
import Link from "next/link";

export default function EventsChip({ url, title, size = "lg" }) {
  if (size === "lg") {
    return (
      <div className={styles.mainComp}>
        <div className={styles.Chip}>
          <Link href={url} style={{ textDecoration: "none" }} prefetch={true}>
            <Text size="lg">{title}</Text>
          </Link>
        </div>
      </div>
    );
  }
  if (size === "md") {
    return (
      <div className={styles.mainComp}>
        <div className={styles.Chipmd}>
          <Link href={url} style={{ textDecoration: "none" }} prefetch={true}>
            <Text size="lg">{title}</Text>
          </Link>
        </div>
      </div>
    );
  }
}
