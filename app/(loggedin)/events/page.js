import GetEvent from "@/apiServices/services/eventServices";
import EventsCard from "@/components/events/eventsCard";
import styles from "./events.module.css";
import GetCookie from "@/utility/cookies/cookies";

export default async function Page() {
  const token = await GetCookie({ name: "access_token" });
  const eventsData = await GetEvent({ token });

  return (
    <>
      <div className={styles.eventsContainer}>
        {eventsData &&
          eventsData.map((data, index) => {
            return <EventsCard {...data} key={index} />;
          })}
      </div>
    </>
  );
}
