"use client";
import Text from "@/components/common/text/text";
import styles from "./login.module.css";
import Heading from "@/components/common/Heading/Heading";
import { CustomButton } from "@/components/common/Button/Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginApi } from "@/api/auth/authServices";
import { CustomInput } from "@/components/common/input/input";
import { ErrorToast, SucessToast, WarningTost } from "@/utility/toaster";
import { store } from "@/redux/store";
import { SetUser } from "@/redux/slices/userSlice";

export default function Signin() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleChange = async () => {
    if (!userData.email || !userData.password) {
      WarningTost("Please enter all feilds");
    } else {
      if (userData.email.match("@") != null) {
        const res = await LoginApi({ ...userData });

        if (res.status !== 200) {
          ErrorToast("unsucessful regestration");
        } else {
          store.dispatch(SetUser(res.data.userInfo));
          SucessToast("sucessful regesgration", router.push("/dashboard"));
        }
      } else {
        window.alert("enter valid email");
      }
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <Heading size="md" fontFamily="Ubuntu">
          Signin
        </Heading>
        <div className={styles.loginForm}>
          <div>
            <CustomInput
              size="lg"
              type="email"
              label="Email :"
              onChange={(e) => {
                e.preventDefault();
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div>
            <CustomInput
              size="lg"
              label="Password :"
              type="password"
              value={userData.password}
              onChange={(e) => {
                e.preventDefault();
                setUserData({ ...userData, password: e.target.value });
              }}
            />
          </div>

          <CustomButton
            size="lg"
            onClick={(e) => {
              handleChange(e);
            }}
            type="submit"
          >
            Submit
          </CustomButton>
        </div>
        <Text>
          Dont have an account ?{" "}
          <Link
            href="/register"
            style={{ textDecoration: "none", color: "var(grey)" }}
          >
            {" "}
            signUp
          </Link>
        </Text>
      </div>
    </main>
  );
}
