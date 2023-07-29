"use client";
import Text from "@/components/common/text/text";
import styles from "./linkForm.module.css";
import { RiCloseFill } from "react-icons/ri";
import Input from "@/components/common/input/input";
import { Socials } from "@/components/common/socials/social";
import Button from "@/components/common/Button/Button";

import { NewUpdateLink } from "@/api/simpleLinks/updateSimpleLinkService";
import { useState } from "react";
import { SucessToast, WarningTost } from "@/utility/toaster";
import { store } from "@/redux/store";
import { UpdateLinkLitems } from "@/redux/slices/linksSlice";
import { IsURL } from "@/utility/UrlChecker";

export default function LinkForm({ onCrossClick }) {
  const [linkData, setlinkData] = useState({
    name: "",
    url: "",
  });

  const urlCheck = IsURL(linkData.url);
  const z = async () => {
    if (linkData.name.length > 0 && urlCheck) {
      try {
        const res = await NewUpdateLink({ body: linkData });
        store.dispatch(UpdateLinkLitems(linkData));
        onCrossClick();
        SucessToast("Sucessfully added role");
      } catch (err) {
        console.log(err);
      }
    } else {
      WarningTost("Enter a  proper url");
    }
  };

  return (
    <>
      <div className={styles.mainComp}>
        <div className={styles.heading}>
          <Text size="lg">Enter Url</Text>
          <RiCloseFill
            size={25}
            onClick={() => {
              onCrossClick();
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.linkForm}>
          <Input
            size="lg"
            value={linkData.name}
            onChange={(e) => {
              e.preventDefault();
              setlinkData({ ...linkData, name: e.target.value });
            }}
            placeholder="Title"
          />
          <Input
            size="lg"
            value={linkData.link}
            onChange={(e) => {
              e.preventDefault();
              setlinkData({ ...linkData, url: e.target.value });
            }}
            placeholder="url"
          />
        </div>

        <Button
          size="lg"
          onClick={async () => {
            await z();
          }}
        >
          Add Link
        </Button>
        {/* <Socials /> */}
      </div>
    </>
  );
}
