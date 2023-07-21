"use clinet";
import { useEffect, useState } from "react";
import styles from "./editLinksComponent.module.css";
import { Getlinks } from "@/api/simpleLinks/simplelinksServices";
import EditLinks from "../editLinksChip/editLinksChip";
import { store } from "@/redux/store";
import { setInitialLinks } from "@/redux/slices/linksSlice";

export default function EditLinksComponent({ name }) {
  const [Links, setLinks] = useState([]);
  let z = [];
  const getLinks = async () => {
    const res = await Getlinks(name);
    store.dispatch(setInitialLinks(res[1].SimpleLink.links));

    setLinks(res[1].SimpleLink.links);
  };
  useEffect(() => {
    getLinks();
  }, []);
  const updateLinks = async ({ links }) => {
    // const res = await UpdateLinks(links);
    // console.log(res);
    return 1;
  };

  return (
    <section className={styles.mainComp}>
      {Links.map((data, index) => {
        return (
          <EditLinks
            name={data.name}
            url={data.url}
            key={index}
            UpdateLinks={() => {
              updateLinks();
            }}
            Links={Links}
            index={index}
          />
        );
      })}
    </section>
  );
}
