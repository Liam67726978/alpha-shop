import styles from "./Control.module.scss";
import Icons from "./Icons";

function Control() {
  return (
    <div className={styles.controlWrapper}>
      <button className={styles.prevBtn}>
        <Icons.Arrow className={styles.prevArrow} />
        上一步
      </button>
      <button className={styles.nextBtn}>
        下一步
        <Icons.Arrow className={styles.nextArrow} />
      </button>
    </div>
  );
}

export default Control;
