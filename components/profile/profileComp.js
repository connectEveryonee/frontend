"use client";
import Image from "next/image";
import Heading from "../common/Heading/Heading";
import styles from "./profileComp.module.css";

import { useEffect, useState } from "react";
import { GetUser } from "@/api/user/userService";
import Input from "../common/input/input";
import { ImageUpload } from "./imageUpload/imageUpload";

export default function PorfileComp() {
  const [userData, setuserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const getUser = async () => {
    const res = await GetUser({ name: "ram", token: "ram" });

    setuserData({
      ...userData,
      userName: res.data[0].userName,
      email: res.data[0].email,
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <section className={styles.mainComp}>
        <div className={styles.profileComp}>
          {/* <Image
            src="/default.png"
            width={200}
            height={200}
            alt="profile photo"
          /> */}
          
        </div>
        <div className={styles.userForm}>
          <Heading size="md" fontFamily="var(--system-font)">
            User Info
          </Heading>
          <Input
            label="User name"
            value={userData.userName}
            onChange={(e) => {
              setuserData({ ...userData, userName: e.target.value });
            }}
          />
          <Input
            label="Email"
            value={userData.email}
            onChange={(e) => {
              setuserData({ ...userData, email: e.target.value });
            }}
          />
          <Input
            type="password"
            value={userData.password}
            onChange={(e) => {
              setuserData({ ...userData, password: e.target.value });
            }}
          />
          <Input
            type="password"
            label="Confirm Password"
            value={userData.confirmPassword}
            onChange={(e) => {
              setuserData({ ...userData, confirmPassword: e.target.value });
            }}
          />
        </div>
      </section>
    </>
  );
}
