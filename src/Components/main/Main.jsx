import { useContext } from "react";
import { useImmer } from "use-immer";
import CartContext from "./Cart/CartContext";
import RegisterContext from "./Register/RegisterContext";
import styles from "./Main.module.scss";
import Register from "./Register/Register";
import Cart from "./Cart/Cart";

function Main() {
  /** Cart **/
  const cart = useContext(CartContext);
  const [data, updateData] = useImmer(cart);
  // 計算總金額 total
  let total = 0;
  data.forEach((product) => {
    total += product.price * product.quantity;
  });
  // 設定 total 格式
  total = total.toLocaleString("zh-TW", {
    style: "currency",
    currency: "TWD",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
    useGrouping: true,
  });

  /** Register **/
  const register = useContext(RegisterContext);
  const [registerData, updateRegisterData] = useImmer(register);

  return (
    <main>
      <div className={styles.container}>
        <RegisterContext.Provider value={{ registerData, updateRegisterData }}>
          <CartContext.Provider value={{ data, total, updateData }}>
            <Register />
            <Cart />
          </CartContext.Provider>
        </RegisterContext.Provider>
      </div>
    </main>
  );
}

export default Main;
