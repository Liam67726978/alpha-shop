import CartContext from "./CartContext";
import { useContext } from "react";
import { useImmer } from "use-immer";
import styles from "./Cart.module.scss";
import ProductList from "./ProductList";
import CartInfo from "./CartInfo";

function Cart() {
  const cart = useContext(CartContext);
  const [data, updateData] = useImmer(cart);

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
    <CartContext.Provider value={{ data, handleIncrease, handleDecrease }}>
      <section className={styles.container}>
        <Title />
        <ProductList />
        <CartInfo />
      </section>
    </CartContext.Provider>
  );
}

function Title() {
  return <h3 className={styles.cartTitle}>購物籃</h3>;
}

export default Cart;
