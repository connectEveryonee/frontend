"use client";
import styles from "./link.module.css";
import EventsChip from "@/components/events/eventsChip";
import Heading from "@/components/common/Heading/Heading";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";

export default function CustomLinks({ userName }) {
  const [Links, setLinks] = useState([]);
  const [user, setuser] = useState("");
  const name = store.getState().user.userName;

  const initialSetUp = async () => {
    setLinks(store.getState().Links);
    setuser("@" + userName);
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
          <Heading size="sm" color="var(--black-1)">
            <b>{user}</b>
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
