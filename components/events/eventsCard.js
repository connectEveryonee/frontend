import Image from "next/image";
import Text from "../common/text/text";
import styles from "./eventsCard.module.css";
import Heading from "../common/Heading/Heading";
import Button, { CustomButton } from "../common/Button/Button";

export default function EventsCard({ eventName, description, location, date }) {
  const dateformat = new Date(date).toDateString();

  // const date = new Date();
  // console.log(date.toDateString());
  // console.log(date);
  return (
    <div className={styles.mainContainer}>
      <Image
        src="/home/Event.jpg"
        style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
        width={275}
        height={190}
        alt="heading"
      />
      <div className={styles.heading}>
        <Heading size="sm">{eventName}</Heading>

        <Heading className={styles.date} size="sm" color="var(--purple-3)">
          {dateformat}
        </Heading>
        <Text size="lg" color="grey">
          {description}
        </Text>
        <div className={styles.button}>
          <CustomButton size="md">book now</CustomButton>
        </div>
      </div>
    </div>
  );
}
