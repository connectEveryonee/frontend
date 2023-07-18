"use client";
import { RiDeleteBinLine, RiEdit2Line, RiUpload2Line } from "react-icons/ri";
import styles from "./editLinks.module.css";
import Heading from "@/components/common/Heading/Heading";
import Input from "@/components/common/input/input";
import { useState } from "react";

export default function EditLinks() {
  var z = false;
  const [editctr, seteditctr] = useState({
    name: true,
    url: true,
  });
  const [linkData, setlinkData] = useState({
    name: "Portfolio",
    url: "C:UsersSuyashprogrammingconnectEveryonesimplelinkscomponentsdashboardeditLinkseditLinks.js",
  });
  return (
    <div className={styles.mainComp}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Input
            disabled={editctr.name}
            className={styles.input}
            onChange={(e) => setlinkData({ ...linkData, name: e.target.value })}
            value={linkData.name}
          ></Input>
          <RiEdit2Line
            size={24}
            onClick={(e) => {
              seteditctr({ ...editctr, name: !linkData.name });
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.content}>
          {" "}
          <Input
            disabled={editctr.url}
            className={styles.input}
            onChange={(e) => setlinkData({ ...linkData, url: e.target.value })}
            value={linkData.url}
          />
          <RiEdit2Line
            size={24}
            onClick={(e) => {
              seteditctr({ ...editctr, url: !linkData.url });
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className={styles.actionContainer}>
        <RiUpload2Line size={25} />
        <RiDeleteBinLine size={25} />
      </div>
    </div>
  );
}
