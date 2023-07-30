import PropTypes from "prop-types";
import styles from "./Heading.module.css";

export default function Heading({
  children,
  size = "lg",
  color = "#333",
  fontFamily,
  className,
}) {
  if (size === "lg") {
    return (
      <center>
        {" "}
        <h1
          style={{ color, fontFamily: fontFamily }}
          className={`${styles.heading__lg} ${styles.heading} ${className}`}
        >
          {children}
        </h1>
      </center>
    );
  }
  if (size === "md") {
    return (
      <h2
        style={{ color, fontFamily: fontFamily }}
        className={`${styles.heading__md} ${styles.heading} ${className}`}
      >
        {children}
      </h2>
    );
  }
  if (size === "sm") {
    return (
      <h3
        style={{ color, fontFamily: fontFamily }}
        className={`${styles.heading__sm} ${styles.heading} ${className}`}
      >
        {children}
      </h3>
    );
  }
}

Heading.prototype = {
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  color: PropTypes.string,
  children: PropTypes.string,
};
