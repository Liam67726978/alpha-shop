import styles from "./CartInfo.module.scss";
import data from "./data";

function CartInfo() {
  let total = 0;
  data.forEach((product) => {
    total += product.price;
  });
  return (
    <>
      <div className={`${styles.cartInfo} shipping`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </div>
      <div className={styles.cartInfo}>
        <div className={`${styles.text} total`}>小計</div>
        <div className={styles.price}>${total}</div>
      </div>
    </>
  );
}

export default CartInfo;
