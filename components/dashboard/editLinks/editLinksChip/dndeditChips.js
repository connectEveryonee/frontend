"use client";
import { RiDeleteBinLine, RiEdit2Line, RiUpload2Line } from "react-icons/ri";
import styles from "./editLinksChip.module.css";
import Input from "@/components/common/input/input";
import { useState } from "react";
import { UpdateLinks } from "@/api/simpleLinks/updateLinksItems";
import { DeleteLinkElemet } from "@/api/simpleLinks/deleteLinkElementServices";
import { store } from "@/redux/store";
import { DeleteLinkItem, setInitialLinks } from "@/redux/slices/linksSlice";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useCallback } from "react";
// import { ItemTypes } from "./ItemTypes.js";

export default function TrialEditLinks({
  name,
  url,
  id,
  Links,
  index,
  moveCard,
}) {
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
    store.dispatch(setInitialLinks(newLinks));
  };
  const deleteLink = async () => {
    const newLinks = [...Links];
    newLinks.splice(index, 1);
    await DeleteLinkElemet(newLinks);
    store.dispatch(DeleteLinkItem(index));
  };

  // trial

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div className={styles.mainComp} data-handler-id={handlerId} ref={ref}>
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
