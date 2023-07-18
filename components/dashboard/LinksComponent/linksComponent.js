import styles from "./linksComponent.module.css";
import { RiAddFill } from "react-icons/ri";
import Heading from "@/components/common/Heading/Heading";
import LinkForm from "../linkForm/linkforms";
import { useState } from "react";
import EditLinks from "../editLinks/editLinks";

export default function LinkComponent() {
  var modal = false;
  const [signal, setsignal] = useState(true);
  return (
    <section className={styles.mainComp}>
      <div className={styles.addLinkComp}>
        {signal === true ? (
          <button
            className={styles.large}
            onClick={() => {
              setsignal(!signal);
            }}
          >
            <RiAddFill size={45} color="var(--white-1)" />
            <Heading size="sm" color="var(--white-1)">
              Add Link
            </Heading>
          </button>
        ) : null}
        {signal === true ? null : (
          <section>
            <LinkForm onCrossClick={() => setsignal(!signal)} />
          </section>
        )}{" "}
        <div className={styles.editLinks}>
          <EditLinks />
        </div>
        {/* {modal === true ? (
          <button
            className={styles.large}
            onClick={() => {
              setsignal(!signal);
            }}
          >
            <RiAddFill size={45} color="var(--white-1)" />
            <Heading size="sm" color="var(--white-1)">
              Add Link
            </Heading>
          </button>
        ) : (
          <LinkForm />
        )} */}
      </div>
    </section>
  );
}
