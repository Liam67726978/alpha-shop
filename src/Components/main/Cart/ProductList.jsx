import classNames from "classnames";
import styles from "./ProductList.module.scss";
import Icons from "./icons";

function ProductList({ data, onIncrease, onDecrease }) {
  return (
    <ul className={styles.productList}>
      {data.map((product) => (
        <Product
          key={product.id}
          product={product}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </ul>
  );
}

function Product({ product, onIncrease, onDecrease }) {
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
              onClick={() => onDecrease(product.id)}
            />
            <span className={styles.productCount}>{product.quantity}</span>
            <Icons.Plus
              className={classNames(styles.productAction)}
              onClick={() => onIncrease(product.id)}
            />
          </div>
        </div>
        <div className={styles.productPrice}>${price}</div>
      </div>
    </li>
  );
}

export default ProductList;
