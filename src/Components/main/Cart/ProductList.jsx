import styles from "./ProductList.module.scss";
import data from "./data";
import Icons from "./icons";

function ProductList() {
  return (
    <ul className={styles.productList}>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

function Product({ product }) {
  return (
    <li className={styles.productContainer}>
      <img className={styles.imgContainer} src={product.img} alt="" />

      <div className={styles.productInfo}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <Icons.Minus className={`${styles.productAction} minus`} />
            <span className={styles.productCount}>{product.quantity}</span>
            <Icons.Plus className={`${styles.productAction} plus`} />
          </div>
        </div>
        <div className={styles.productPrice}>${product.price}</div>
      </div>
    </li>
  );
}

export default ProductList;
