import styles from "./Progress.module.scss";
import Icons from "./Icons";

function Progress() {
  return (
    <div className={styles.progressWrapper}>
      <h2 className={styles.registerTitle}>結帳</h2>
      <div className={styles.stepWrapper}>
        <span className={styles.stepGroup}>
          <span className={styles.stepNumber}>
            <Icons.Step1 className={styles.active} />
          </span>
          <span className={styles.stepText}>寄送地址</span>
        </span>
        <div className={styles.stepLineWrapper}>
          <span className={styles.stepLine}></span>
        </div>
        <span className={styles.stepGroup}>
          <span className={styles.stepNumber}>
            <Icons.Step2 />
          </span>
          <span className={styles.stepText}>運送方式</span>
        </span>
        <div className={styles.stepLineWrapper}>
          <span className={styles.stepLine}></span>
        </div>
        <span className={styles.stepGroup}>
          <span className={styles.stepNumber}>
            <Icons.Step3 />
          </span>
          <span className={styles.stepText}>付款資訊</span>
        </span>
      </div>
    </div>
  );
}

export default Progress;
