"use client";

import Heading from "../common/Heading/Heading";
import styles from "./profileComp.module.css";
import { useEffect, useState } from "react";
import { GetUser } from "@/api/user/userService";
import Input from "../common/input/input";
import { store } from "@/redux/store";
import { RiEditFill } from "react-icons/ri";

export default function PorfileComp() {
  const [userData, setuserData] = useState({
    userName: "",
    email: "",
    password: "root",
    confirmPassword: "",
  });
  const [editFlag, setEditFlag] = useState(true);
  const getUser = async () => {
    const res = await GetUser({
      name: store.getState().user.userName,
      token: store.getState().user.token,
    });

    setuserData({
      ...userData,
      userName: res.data[0].userName,
      email: res.data[0].email,
      password: res.data[0].password,
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
          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading size="md" fontFamily="var(--system-font)">
              User Info
            </Heading>

            <RiEditFill
              size={36}
              alt="edit user info"
              style={{ cursor: "pointer" }}
              onClick={()=>{
                setEditFlag(!editFlag)
              }}
            />
          </div>
          <Input
            label="User name"
            value={userData.userName}
            onChange={(e) => {
              setuserData({ ...userData, userName: e.target.value });
            }}
            disabled={editFlag}
          />
          <Input
            label="Email"
            value={userData.email}
            onChange={(e) => {
              setuserData({ ...userData, email: e.target.value });
            }}
            disabled={editFlag}
          />
          <Input
            label="Password"
            type="password"
            value={userData.password}
            onChange={(e) => {
              setuserData({ ...userData, password: e.target.value });
            }}
            disabled={editFlag}
          />
          <Input
            type="password"
            label="Confirm Password"
            value={userData.confirmPassword}
            onChange={(e) => {
              setuserData({ ...userData, confirmPassword: e.target.value });
            }}
            disabled={editFlag}
          />
        </div>
      </section>
    </>
  );
}
