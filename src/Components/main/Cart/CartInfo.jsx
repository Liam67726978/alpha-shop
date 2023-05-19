import CartContext from "./CartContext";
import { useContext } from "react";
import styles from "./CartInfo.module.scss";

function CartInfo() {
  const { total } = useContext(CartContext);

  return (
    <>
      <div className={`${styles.cartInfo} shipping`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </div>
      <div className={styles.cartInfo}>
        <div className={`${styles.text}`}>小計</div>
        <div className={styles.price}>{total}</div>
      </div>
    </>
  );
}

export default CartInfo;
