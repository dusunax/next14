import styles from "@styles/spinner.module.css";
import { MotionDiv } from "../motion-div";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Spinner() {
  return (
    <>
      <section className={styles.container}>
        <MotionDiv
          className={styles.spinner}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, ease: "easeIn", duration: 0.5 }}
          variants={variants}
        ></MotionDiv>
      </section>
    </>
  );
}
