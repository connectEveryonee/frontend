"use client";

import { useRouter } from "next/navigation";
import Heading from "../Heading/Heading";

import styles from "./chip.module.css";

export default function Chip({ label, size, herf = "" }) {
  const router = useRouter();
  if (size === "md") {
    return (
      <div
        className={styles.medium}
        onClick={() => {
          router.push(herf);
        }}
      >
        <Heading size="sm" color="var(--white-1)">
          {label}
        </Heading>
      </div>
    );
  }
  if (size === "lg") {
    return (
      <div
        className={styles.large}
        onClick={(e) => {
          e.preventDefault();
          router.push(herf);
        }}
      >
        <Heading size="sm" color="var(--white-1)">
          {label}
        </Heading>
      </div>
    );
  }
}
