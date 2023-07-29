"use client";
import Text from "../common/text/text";
import styles from "./eventsChip.module.css";
import Link from "next/link";

export default function EventsChip({ url, title, size = "lg" }) {
  if (size === "lg") {
    return (
      <div className={styles.mainComp}>
        <Link
          href={url}
          style={{ textDecoration: "none" }}
          prefetch={true}
          target="_blank"
        >
          <div className={styles.Chip}>
            <Text size="lg">{title}</Text>
          </div>
        </Link>
      </div>
    );
  }
  if (size === "md") {
    return (
      <div className={styles.mainComp}>
        <Link
          href={url}
          style={{ textDecoration: "none" }}
          prefetch={true}
          target="_blank"
        >
          <div className={styles.Chipmd}>
            <Text size="lg">{title}</Text>
          </div>
        </Link>
      </div>
    );
  }
}
