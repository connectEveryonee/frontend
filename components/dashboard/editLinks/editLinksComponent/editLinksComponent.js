"use clinet";
import { use, useEffect, useState } from "react";
import styles from "./editLinksComponent.module.css";
import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import EditLinks from "../editLinksChip/editLinksChip";
import { store } from "@/redux/store";
import { setInitialLinks } from "@/redux/slices/linksSlice";

export default function EditLinksComponent() {
  const userName = store.getState().user.userName;

  const [Links, setLinks] = useState([]);

  const initialSetUp = async () => {
    const data = await Getlinks(userName);
    store.dispatch(setInitialLinks(data));
    setLinks(store.getState().Links);
  };
  useEffect(() => {
    initialSetUp();
  }, []);

  store.subscribe(() => {
    setLinks(store.getState().Links);
  });

  return (
    <section className={styles.mainComp}>
      {Links.map((data, index) => {
        return (
          <EditLinks
            name={data.name}
            url={data.url}
            key={index}
            Links={Links}
            index={index}
          />
        );
      })}
    </section>
  );
}
