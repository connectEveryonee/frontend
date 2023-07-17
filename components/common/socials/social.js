import {
  RiTwitterFill,
  RiYoutubeFill,
  RiSpotifyFill,
  RiGithubFill,
} from "react-icons/ri";
import styles from "./socials.module.css";
import Heading from "../Heading/Heading";

export function Socials() {
  return (
    <>
      <div className={styles.mainComp}>
        <Heading size="sm" color="grey">
          Select a Flavour
        </Heading>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
        >
          <div className={styles.socialComp}>
            <RiTwitterFill color="RGB(29, 155, 240)" size={50} />
            twitter
          </div>
          <div className={styles.socialComp}>
            <RiYoutubeFill color="#FF0000" size={50} />
            youtube
          </div>
          <div className={styles.socialComp}>
            <RiSpotifyFill color="RGB(29, 185, 84" size={50} />
            spotify
          </div>
          <div className={styles.socialComp}>
            <RiGithubFill color="#171515" size={50} />
            github
          </div>
        </div>
      </div>
    </>
  );
}
