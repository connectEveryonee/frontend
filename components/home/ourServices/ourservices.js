import Text from "@/components/common/text/text";
import HomeCard from "../homeCard/homeCard";
import styles from "./ourServices.module.css";
import Heading from "@/components/common/Heading/Heading";
import Chip from "@/components/common/chip/chip";

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
            What can you do with SimpleLinks?
          </Heading>
          <div className={styles.process}>
            <HomeCard
              title="Unlimited Links"
              description="An hassle-free and easy event management platform"
            />

            <HomeCard
              title="Custom Themes"
              description="we are all ready just sign up and start attending."
            />
          </div>
          <div className={styles.process}>
            <HomeCard
              title="Absolutely free"
              description=" Free  for everyone."
            />

            <HomeCard
              title="Analytics"
              description="Aanalytics for your tweets to monitor your growth"
            />
          </div>
          <Text size="lg" fontFamily="var(--system-font)">
            More services comming soon
          </Text>
        </article>
      </section>
    </>
  );
}
