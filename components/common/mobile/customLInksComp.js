"use client";
import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import styles from "./link.module.css";
import EventsChip from "@/components/events/eventsChip";
import Heading from "@/components/common/Heading/Heading";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";

export default function CustomLinks({ name ,token}) {
  const [Links, setLinks] = useState([]);

  const initialSetUp = async () => {
    const data = await Getlinks({name:name,token:token});
    setLinks(data);
  };
  useEffect(() => {
    initialSetUp();
  }, []);

  store.subscribe(() => {
    setLinks(store.getState().Links);
  });

  return (
    <>
      <div className={styles.mainComp}>
        <div className={styles.headingComp}>
          <Heading size="sm" cplor="var(--black-1)">
            {" "}
            <b>@</b> {name}
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
