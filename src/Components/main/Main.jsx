import styles from "./Main.module.scss";
import Register from "./Register/Register";

function Main() {
  return (
    <main>
      <div className={styles.container}>
        <Register />
      </div>
    </main>
  );
}

export default Main;
