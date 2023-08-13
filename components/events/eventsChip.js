"use client";
import { UpdateAnalytucs } from "@/api/analytics/analytics";
import Text from "../common/text/text";
import styles from "./eventsChip.module.css";
import Link from "next/link";
import { store } from "@/redux/store";

export default function EventsChip({ url, title, size = "lg", userName }) {
  if (size === "lg") {
    return (
      <div className={styles.mainComp}>
        <Link
          href={url}
          style={{ textDecoration: "none" }}
          prefetch={true}
          target="_blank"
          onClick={async () => {
            await UpdateAnalytucs(userName, title);
          }}
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
          onClick={async () => {
            await UpdateAnalytucs(userName, title);
          }}
        >
          <div className={styles.Chipmd}>
            <Text size="lg">{title}</Text>
          </div>
        </Link>
      </div>
    );
  }
}
