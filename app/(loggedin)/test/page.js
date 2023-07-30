"use client";
import styles from "./linksComponent.module.css";
import { RiAddFill } from "react-icons/ri";
import Heading from "@/components/common/Heading/Heading";

import { useState } from "react";
import TrialEditLinks from "@/components/dashboard/editLinks/editLinksChip/dndeditChips";
import LinkForm from "@/components/dashboard/linkForm/linkforms";
import update from "immutability-helper";
import { useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function LinkComponent() {
  const [signal, setsignal] = useState(true);

  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
    {
      id: 4,
      text: "Create some examples",
    },
    {
      id: 5,
      text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    },
    {
      id: 6,
      text: "???",
    },
    {
      id: 7,
      text: "PROFIT",
    },
  ]);
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);
  const renderCard = useCallback((card, index) => {
    return (
      <TrialEditLinks
        key={index}
        name={card.text}
        id={index}
        index={index}
        moveCard={moveCard}
      />
    );
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
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
          )}
          {cards.map((data, index) => {
            return renderCard(data, index);
          })}
        </div>
      </section>
    </DndProvider>
  );
}
