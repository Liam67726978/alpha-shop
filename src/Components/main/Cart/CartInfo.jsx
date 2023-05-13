import styles from "./CartInfo.module.scss";

function CartInfo({ data }) {
  let total = 0;
  data.forEach((product) => {
    total += product.price * product.quantity;
  });
  return (
    <>
      <div className={`${styles.cartInfo} shipping`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </div>
      <div className={styles.cartInfo}>
        <div className={`${styles.text}`}>小計</div>
        <div className={styles.price}>${total}</div>
      </div>
    </>
  );
}

export default CartInfo;
