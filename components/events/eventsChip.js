import Image from "next/image";
import Text from "../common/text/text";
import styles from "./eventsChip.module.css";
import Heading from "../common/Heading/Heading";
import Button, { CustomButton } from "../common/Button/Button";
import Link from "next/link";

export default function EventsChip({ url, title }) {
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