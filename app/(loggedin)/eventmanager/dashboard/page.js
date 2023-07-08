import Cards from "@/components/eventmanager/cards/cards";
import styles from "./eventmanager.module.css";
import Heading from "@/components/common/Heading/Heading";

export default function Eventmanager() {
  return (
    <>
      <section className={styles.eventCards}>
        <Cards link="/eventmanager/createEvent" label="Create Events" />
        <Cards link="/" label="event analytics" />
      </section>

      <Heading size="md">Recent</Heading>
    </>
  );
}
