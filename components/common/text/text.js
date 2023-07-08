import PropTypes from "prop-types";
import styles from "./Text.module.css";

export default function Text({ children, size = "md", color = "#333", type }) {
  if (size === "lg") {
    return (
      <p style={{ color,fontFamily:type }} className={`${styles.paragraph__lg} ${styles.paragraph}`}>
        {children}
      </p>
    );
  }
  if (size == "md") {
    return (
      <p style={{ color }} className={`${styles.paragraph__md} ${styles.paragraph}`}>
        {children}
      </p>
    );
  }
  if (size == "sm") {
    return (
      <p style={{ color }} className={`${styles.paragraph__sm} ${styles.paragraph}`}>
        {children}
      </p>
    );
  }
}

Text.prototype = {
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  color: PropTypes.string,
  children: PropTypes.string,
};
