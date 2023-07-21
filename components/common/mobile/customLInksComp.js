"use client";
import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./link.module.css";
import EventsChip from "@/components/events/eventsChip";
import Heading from "@/components/common/Heading/Heading";

export default async function CustomLinks({ name }) {
  const q = await Getlinks(name);

  const Links = await q[1].SimpleLink.links;

  return (
    <>
      <div className={styles.mainComp}>
        <div className={styles.headingComp}>
          <Heading size="sm" cplor="var(--black-1)">
            {" "}
            <b>@</b> {"ram"}
          </Heading>
        </div>
        <div className={styles.links}>
          {Links.map((data, index) => {
            return (
              <EventsChip
                size="md"
                key={index}
                url={data.url}
                title={data.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
