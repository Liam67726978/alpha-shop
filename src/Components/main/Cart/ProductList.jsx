import CartContext from "./CartContext";
import { useContext } from "react";
import classNames from "classnames";
import styles from "./ProductList.module.scss";
import Icons from "./icons";

function ProductList() {
  const { data } = useContext(CartContext);
  return (
    <ul className={styles.productList}>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

function Product({ product }) {
  const { handleIncrease, handleDecrease } = useContext(CartContext);
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
