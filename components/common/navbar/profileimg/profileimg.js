"use client";

import styles from "./profileimg.module.css";
import Text from "../../text/text";
// import { Logout } from "@/apiServices/services/authServices";
import { useRouter } from "next/navigation";
import { RiUser3Line } from "react-icons/ri";
import { useState } from "react";
import Heading from "../../Heading/Heading";

export default function Profileimg() {
  const [opener, setOpener] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className={styles.dropDown}>
      {/* <Heading size="sm" fontFamily="var(--system-font)">
        Profile
      </Heading> */}
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push("/profile");
        }}
      >
        <Heading size="sm" fontFamily="var(--system-font)">
          Profile
        </Heading>
      </div>
      <div
        onClick={() => {
          handleLogout();
        }}
        style={{ cursor: "pointer" }}
      >
        <Heading size="sm" fontFamily="var(--system-font)">
          Logout
        </Heading>
      </div>
    </div>
  );
}
