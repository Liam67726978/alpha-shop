import CartContext from "./CartContext";
import { useContext } from "react";
import classNames from "classnames";
import styles from "./ProductList.module.scss";
import Icons from "./icons";

function ProductList() {
  const { data, updateData } = useContext(CartContext);

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
    <ul className={styles.productList}>
      {data.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      ))}
    </ul>
  );
}

function Product({ product, handleIncrease, handleDecrease }) {
  const price = product.price * product.quantity;

  return (
    <li className={styles.productContainer}>
      <img className={styles.imgContainer} src={product.img} alt="" />

      <div className={styles.productInfo}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <Icons.Minus
              className={classNames(styles.productAction)}
              onClick={() => handleDecrease(product.id)}
            />
            <span className={styles.productCount}>{product.quantity}</span>
            <Icons.Plus
              className={classNames(styles.productAction)}
              onClick={() => handleIncrease(product.id)}
            />
          </div>
        </div>
        <div className={styles.productPrice}>${price}</div>
      </div>
    </li>
  );
}

export default ProductList;
