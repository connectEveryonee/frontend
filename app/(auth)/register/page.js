"use client";
import styles from "./signUp.module.css";
import Heading from "@/components/common/Heading/Heading";
import Button, { CustomButton } from "@/components/common/Button/Button";
import { Suspense, useState } from "react";
import Link from "next/link";
import Text from "@/components/common/text/text";
import { useRouter } from "next/navigation";
import { CustomInput } from "@/components/common/input/input";
import { ErrorToast, SucessToast, WarningTost } from "@/utility/toaster";
import { RegisterApi } from "@/api/auth/authServices";
import { CheckuserName } from "@/api/user/userService";

export default function SignuP() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    roles: ["user"],
  });

  const register = async () => {
    if (!userData.email || !userData.password) {
      WarningTost("plz fill all feilds");
    } else {
      const res = await RegisterApi({ ...userData });
      console.log();
      if (res.status === 200) {
        SucessToast("Sucessful Registration", router.push("/login"));
      } else {
        ErrorToast(res.response.data);
      }
    }
  };
  const SubmitHandele = async () => {
    const userNameCheker = await CheckuserName(userData.userName);

    if (userData.userName.includes(" ")) {
      WarningTost("No Spaces in User Name");
    } else {
      if (userNameCheker.status === 403) {
        ErrorToast(
          "username already exits",
          setUserData({ ...userData, userName: "" })
        );
      } else {
        register();
      }
    }
  };

  return (
    <section className={styles.mainContiner}>
      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <Heading size="md" fontFamily="Ubuntu">
            Register
          </Heading>
          <form className={styles.loginForm}>
            <div className={styles.shortflex}>
              <div>
                <CustomInput
                  className="input-medium"
                  type="string"
                  size="lg"
                  label="UserName:"
                  value={userData.userName}
                  onChange={(e) => {
                    e.preventDefault();
                    setUserData({ ...userData, userName: e.target.value });
                  }}
                />
              </div>
            </div>
            <div>
              <CustomInput
                size="lg"
                type="email"
                label="Email :"
                value={userData.email}
                onChange={(e) => {
                  e.preventDefault();
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
            </div>
            <div>
              <CustomInput
                size="lg"
                type="password"
                label="Password :"
                value={userData.password}
                onChange={(e) => {
                  e.preventDefault();
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
            </div>

            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                SubmitHandele();
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
          <Text>
            Already have an account?{" "}
            <Link
              href="/login"
              style={{ textDecoration: "none", color: "var(grey)" }}
            >
              {" "}
              Login
            </Link>
          </Text>
        </div>
      </main>
    </section>
  );
}
