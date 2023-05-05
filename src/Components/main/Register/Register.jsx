import styles from "./Register.module.scss";
import Form from "./Form";
import Progress from "./Progress";
import Control from "./Control";

function Register() {
  return (
    <section className={styles.container}>
      <Progress />
      <Form />
      <Control />
    </section>
  );
}

export default Register;
