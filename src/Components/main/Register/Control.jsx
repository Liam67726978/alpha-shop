import { useContext } from "react";
import CartContext from "../Cart/CartContext";
import RegisterContext from "./RegisterContext";
import styles from "./Control.module.scss";
import classNames from "classnames";
import Icons from "./Icons";

function Control({ onPrevStep, onNextStep, step }) {
  return (
    <div className={styles.controlWrapper}>
      <PrevButton onPrevStep={onPrevStep} step={step} />
      <NextButton onNextStep={onNextStep} step={step} />
      <ConfirmOrderButton step={step} />
    </div>
  );
}

function PrevButton({ onPrevStep, step }) {
  const btnClass = classNames({
    [styles.prevBtn]: true,
    [styles.hidden]: step === 1,
  });
  return (
    <button className={btnClass} onClick={onPrevStep}>
      <Icons.Arrow className={styles.prevArrow} />
      上一步
    </button>
  );
}

function NextButton({ onNextStep, step }) {
  if (step < 3) {
    return (
      <button className={styles.nextBtn} onClick={onNextStep}>
        下一步
        <Icons.Arrow className={styles.nextArrow} />
      </button>
    );
  }
}

function ConfirmOrderButton({ step }) {
  const { registerData } = useContext(RegisterContext);
  const { total } = useContext(CartContext);
  function handleshowInformation() {
    console.log(`
    ***信用卡資料***
    姓名：      ${registerData.name}
    卡號：      ${registerData.number}
    有效期限：  ${registerData.date}
    CVC / CCV: ${registerData.cvc}

    ***總金額***
    消費: ${total}
    `);
  }
  if (step === 3) {
    return (
      <button
        className={styles.confirmOrderButton}
        onClick={handleshowInformation}
      >
        確認下單
      </button>
    );
  }
}

export default Control;
