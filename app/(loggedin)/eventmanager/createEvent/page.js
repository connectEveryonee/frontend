"use client";
import Input from "@/components/common/input/input";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./createEvent.module.css";
import { useState } from "react";
import Heading from "@/components/common/Heading/Heading";
import Button, { CustomButton } from "@/components/common/Button/Button";
import { Modal } from "@/components/modal/modal";

export default function CreateEvent() {
  const [evetData, setevetData] = useState({
    eventName: "",
    description: "",
    date: "",
    hosts: [],
    guestSpeakers: [],
    mode: "",
  });
  const [CurrentSpeaker, setCurrentSpeaker] = useState({
    SpeakerName: "",
    topic: "",
  });
  let s = false;
  const handleadd = () => {
    const z = { ...evetData };

    z.guestSpeakers.push({
      ...CurrentSpeaker,
    });

    // setevetData({ ...evetData, guestSpeakers: z });
    setevetData((evetData.guestSpeakers = z));
    console.log(evetData);
  };

  const handleDelete = (index) => {
    const speakers = [...CurrentSpeaker];
    speakers.splice(index - 1, index);
    setevetData({ ...evetData, guestSpeakers: speakers });
  };
  return (
    <main className={styles.mainDiv}>
      <Heading size="md" color="var(--purple-3)">
        Event Information
      </Heading>
      <Input
        size="lg"
        label="Event Name"
        value={evetData.eventName}
        onChange={(e) =>
          setevetData({ ...evetData, eventName: e.target.value })
        }
      />
      <Input
        size="lg"
        type="text"
        label="Description"
        value={evetData.description}
        onChange={(e) =>
          setevetData({ ...evetData, description: e.targe.value })
        }
      />
      <Input
        size="lg"
        label="Host"
        value={evetData.hosts}
        onChange={(e) => setevetData({ ...evetData, hosts: e.target.value })}
      />
      <Input
        size="lg"
        label="Date and Time"
        type="datetime-local"
        value={evetData.date}
        onChange={(e) => setevetData({ ...evetData, date: e.target.value })}
      />
      <div>
        <Heading size="sm" color="var(--purple-3)">
          Event Type
        </Heading>
        <div style={{ gap: "50px", display: "flex" }}>
          <label>
            {" "}
            <input type="radio" />
            Offline
          </label>

          <label>
            {" "}
            <input type="radio" />
            Online
          </label>
        </div>
      </div>
      <Button size="sm" onClick={() => {}}>
        Add Speaker
      </Button>
      <div className={styles.speakerDiv}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <Heading size="sm" color="var(--purple-3)" style={{ flex: 2 }}>
            Speaker{" "}
          </Heading>
          <RiDeleteBin6Line
            color="var(--purple-3)"
            size={35}
            style={{
              marginTop: "0.5rem",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => handleDelete(index)}
          />
        </div>
        <Input size="lg" label="Speaker Name" />
        <Input size="lg" label="Topic" />
      </div>
    </main>
  );
}
