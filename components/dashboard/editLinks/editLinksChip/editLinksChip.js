"use client";
import { RiDeleteBinLine, RiEdit2Line, RiUpload2Line } from "react-icons/ri";
import styles from "./editLinksChip.module.css";
import Input from "@/components/common/input/input";
import { useState } from "react";
import { UpdateLinks } from "@/api/simpleLinks/updateLinksItems";
import { DeleteLinkElemet } from "@/api/simpleLinks/deleteLinkElementServices";
import { store } from "@/redux/store";
import { DeleteLinkItem, setInitialLinks } from "@/redux/slices/linksSlice";

export default function EditLinks({ name, url, Links, index }) {
  const [editctr, seteditctr] = useState({
    name: true,
    url: true,
  });
  const [linkData, setlinkData] = useState({
    name: name,
    url: url,
  });
  const updateLink = async () => {
    const newLinks = [...Links];
    newLinks[index] = linkData;
    await UpdateLinks(newLinks);
    store.dispatch(setInitialLinks(newLinks))
  };
  const deleteLink = async () => {
    const newLinks = [...Links];
    newLinks.splice(index, 1);
    await DeleteLinkElemet(index);
    store.dispatch(DeleteLinkItem(newLinks));
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
