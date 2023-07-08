import Link from "next/link";
import Heading from "../../common/Heading/Heading";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function LandingNavbar() {
  return (
    <nav>
      <div className={styles.navContainer}>
        <Link href="/" style={{ textDecoration: "none" }} prefetch={false}>
          <div className={styles.leftDiv}>
            <Image src="/logo.png" height={60} width={60} alt="logo" />
            <Heading size="md" fontFamily="Ubuntu">
              SimpleLink
            </Heading>
          </div>
        </Link>

        <div className={styles.rightDiv}>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <Heading size="sm" fontFamily="Ubuntu" color="var(--purple-4)">
              Login
            </Heading>
          </Link>
          <Link href="/register" style={{ textDecoration: "none" }}>
            <Heading size="sm" fontFamily="Ubuntu">
              Register
            </Heading>
          </Link>
        </div>
      </div>
    </nav>
  );
}
