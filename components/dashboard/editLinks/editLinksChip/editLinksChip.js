"use client";
import { RiDeleteBinLine, RiEdit2Line, RiUpload2Line } from "react-icons/ri";
import styles from "./editLinksChip.module.css";
import Input from "@/components/common/input/input";
import { useState } from "react";
import { UpdateLinks } from "@/api/simpleLinks/updateLinksItems";
import { DeleteLinkElemet } from "@/api/simpleLinks/deleteLinkElementServices";

export default function EditLinks({ name, url, Links, index }) {
  console.table(Links);
  const [editctr, seteditctr] = useState({
    name: true,
    url: true,
  });
  const [linkData, setlinkData] = useState({
    name: name,
    url: url,
  });
  const updateLink = async () => {
    Links[index] = linkData;
    const res = await UpdateLinks(Links);
    console.log(res);
  };
  const deleteLink = async () => {
    const links = Links.splice(index, 1);
    const z = {
      Links,
      index,
    };
    console.table(z.Links);

    const ze = await DeleteLinkElemet(Links);
    // const res = await UpdateLinks( Links.splice(index,1));
  };

  // const UpdateLinks = async () => {};
  return (
    <div className={styles.mainComp}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Input
            disabled={editctr.name}
            className={styles.input}
            onChange={(e) => setlinkData({ ...linkData, name: e.target.value })}
            value={linkData.name}
          />
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
        <RiUpload2Line
          size={25}
          style={{ cursor: "pointer" }}
          onClick={() => {
            updateLink();
          }}
        />
        <RiDeleteBinLine
          size={25}
          style={{ cursor: "pointer" }}
          onClick={() => {
            deleteLink();
          }}
        />
      </div>
    </div>
  );
}
