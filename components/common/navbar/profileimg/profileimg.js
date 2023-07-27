"use client";

import styles from "./profileimg.module.css";
import Text from "../../text/text";
// import { Logout } from "@/apiServices/services/authServices";
import {  useRouter } from "next/navigation";
import { RiUser3Line } from "react-icons/ri";

export default function Profileimg() {
  const router = useRouter();
  const handleLogout = async () => {
    // const logout = await Logout();
    // if (logout === 200) {
    //   router.push("/login");
    // }
    localStorage.removeItem('userName')
    localStorage.removeItem('token')
   router.push('/login')
  };
  return (
    <ul className={styles.dropDown}>
      <RiUser3Line size={25} style={{ cursor: "pointer" }} />
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
