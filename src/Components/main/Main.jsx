import styles from "./Main.module.scss";
import Register from "./Register/Register";
import Cart from "./Cart/Cart";

function Main() {
  return (
    <main>
      <div className={styles.container}>
        <Register />
        <Cart />
      </div>
    </main>
  );
}

export default Main;
