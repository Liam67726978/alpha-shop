import styles from "./Cart.module.scss";
import ProductList from "./ProductList";
import CartInfo from "./CartInfo";

function Cart() {
  return (
    <section className={styles.container}>
      <Title />
      <ProductList />
      <CartInfo />
    </section>
  );
}

function Title() {
  return <h3 className={styles.cartTitle}>購物籃</h3>;
}

export default Cart;
