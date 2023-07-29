import Text from "@/components/common/text/text";
import HomeCard from "../homeCard/homeCard";
import styles from "./ourServices.module.css";
import Heading from "@/components/common/Heading/Heading";


import { PiInfinityBold } from "react-icons/pi";
import { BiCustomize } from "react-icons/bi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { DiGoogleAnalytics } from "react-icons/di";

export default function OurServices() {
  return (
    <>
      <section>
        <article className={styles.mainContiner}>
          <Heading
            className={styles.heading}
            size="lg"
            fontFamily="var(--system-font)"
          >
            What can you do with{" "}
            <span
              style={{
                boxShadow: "inset 0 -18px rgba(255,184,46,.9);",
              }}
            >
              SimpleLinks?
            </span>
          </Heading>
          <div className={styles.process}>
            <HomeCard
              icon={<PiInfinityBold size={50} color="var(--purple-3)" />}
              title="Unlimited Links"
              description="An hassle-free and easy event management platform"
            />

            <HomeCard
              icon={<BiCustomize size={50} color="var(--purple-3)" />}
              title="Custom Themes"
              description="we are all ready just sign up and start attending."
            />
          </div>
          <div className={styles.process}>
            <HomeCard
              icon={<LiaMoneyBillSolid size={50} color="var(--purple-3)" />}
              title="Absolutely free"
              description=" Free  for everyone."
            />

            <HomeCard
              icon={<DiGoogleAnalytics size={50} color="var(--purple-3)" />}
              title="Analytics"
              description="Aanalytics for your tweets to monitor your growth"
            />
          </div>
          <Text size="lg" fontFamily="var(--system-font)">
            More services coming soon
          </Text>
        </article>
      </section>
    </>
  );
}
