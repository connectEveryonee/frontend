import Image from "next/image";

import styles from "./profile.module.css";
import Input from "@/components/common/input/input";

export default function Profile() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.fromContainer}>
          <Input size="lg" label="Name" />
          <Input size="lg" label="Name" />
          <Input size="lg" label="Name" />
          <Input size="lg" label="Name" />
          <Input size="lg" label="Name" />
        </div>
        <Image
          className={styles.imgDiv}
          src="/defaultUser.png"
          height={200}
          width={200}
          alt="default image"
        />

        {/* <Image
          className={styles.imgDiv}
          src="/defaultUser.png"
          height={200}
          width={200}
        /> */}
      </main>
    </>
  );
}
