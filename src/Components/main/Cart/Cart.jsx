import styles from "./Cart.module.scss";
import { useImmer } from "use-immer";
import initialData from "./data";
import ProductList from "./ProductList";
import CartInfo from "./CartInfo";

function Cart() {
  const [data, updateData] = useImmer(initialData);

  function handleIncrease(id) {
    updateData((draft) => {
      const product = draft.find((p) => p.id === id);
      if (product) {
        product.quantity += 1;
      }
    });
  }
  function handleDecrease(id) {
    updateData((draft) => {
      const product = draft.find((p) => p.id === id);
      // 刪除數量為0的商品
      for (let i = 0; i < draft.length; i++) {
        draft[i].quantity === 1 && draft.splice(i, 1);
      }
      draft.filter((product) => product.quantity === 0);

      // 大於0正常渲染
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    });
  }

  return (
    <section className={styles.container}>
      <Title />
      <ProductList
        data={data}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <CartInfo data={data} />
    </section>
  );
}

function Title() {
  return <h3 className={styles.cartTitle}>購物籃</h3>;
}

export default Cart;
