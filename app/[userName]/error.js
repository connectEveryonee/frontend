'use client'
import Heading from "@/components/common/Heading/Heading";
import styles from "./link.module.css";
import Text from "@/components/common/text/text";

export default function Error() {
  return (
    <>
      <section className={styles.mainComp}>
        {" "}
        <Heading size="md" fontFamily="var(--system-font)">
          "The page you’re looking for doesn’t exist."
        </Heading>
        <div>
          <Text size="lg" color="grey">
            Grap this username by{" "}
            <a href="/register" style={{ textDecoration: "none" }}>
              Registering
            </a>
          </Text>
        </div>
      </section>
    </>
  );
}
