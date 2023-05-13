import { useState } from "react";
import styles from "./Register.module.scss";
import Form from "./Form";
import Progress from "./Progress";
import Control from "./Control";

function Register() {
  const [step, setStep] = useState(1);

  function handlePrevStep() {
    step > 1 && setStep(step - 1);
  }
  function handleNextStep() {
    step < 3 && setStep(step + 1);
  }

  return (
    <section className={styles.container}>
      <Progress step={step} />
      <Form step={step} />
      <Control
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
        step={step}
      />
    </section>
  );
}

export default Register;
