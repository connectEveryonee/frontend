import Heading from "../common/Heading/Heading";
import Text from "../common/text/text";
import styles from "./modal.module.css";

export const Modal = ({ visible = false, children, color }) => {
  return (
    <div className={styles.mainComp}>
      <dialog open={visible} className={styles.dialogComp}>
        <Text size="lg" color={color}>
          {children}
        </Text>
      </dialog>
    </div>
  );
};
