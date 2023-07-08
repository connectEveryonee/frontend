"use client";
import Image from "next/image";
import styles from "./profileimg.module.css";
import Text from "../../text/text";
import { Logout } from "@/apiServices/services/authServices";
import { useRouter } from "next/navigation";

export default function Profileimg() {
  const router = useRouter();
  const handleLogout = async () => {
    const logout = await Logout();
    if (logout === 200) {
      router.push("/login");
    }
  };
  return (
    <ul className={styles.dropDown}>
      <Image
        className={styles.profileImg}
        height={50}
        width={50}
        src="/defaultUser.png"
        alt="defaultuser"
      />
      <div className={styles.dropDownContent}>
        <li>
          <a href="/">
            <Text size="lg">Profile</Text>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handleLogout();
            }}
            style={{ cursor: "pointer" }}
          >
            <Text size="lg">logout</Text>
          </a>
        </li>
      </div>
    </ul>
  );
}
