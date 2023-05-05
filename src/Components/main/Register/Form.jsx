import styles from "./Form.module.scss";
import Icons from "./Icons";

function Form() {
  return (
    <div className={styles.formWrapper}>
      <AddressPhase />
      {/* <ShippingPhase /> */}
      {/* <CreditCardPhase /> */}
    </div>
  );
}

function AddressPhase() {
  return (
    <form className={styles.addressForm}>
      <h3 className={styles.formTitle}>寄送地址</h3>
      <div className={styles.formBody}>
        <div className={styles.inputGroup}>
          <label htmlFor="salutation">稱謂</label>
          <span className={styles.selectWrapper}>
            <Icons.Triangle className={styles.triangleIcon} />
            <select name="salutation" id="salutation">
              <Icons.Triangle />
              <option value="male">先生</option>
              <option value="female">小姐</option>
            </select>
          </span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="name">姓名</label>
          <input id="name" type="text" placeholder="請輸入姓名" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">電話</label>
          <input id="phone" type="tel" placeholder="請輸入行動電話" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="請輸入電子郵件" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="city">縣市</label>
          <span className={styles.selectWrapper}>
            <Icons.Triangle className={styles.triangleIcon} />
            <select name="city" id="city" required>
              <option value="" disabled selected hidden>
                請選擇縣市
              </option>
              <option value="KLU">基隆市</option>
              <option value="TPH">新北市</option>
              <option value="TPE">臺北市</option>
              <option value="TYC">桃園市</option>
              <option value="HSH">新竹縣</option>
              <option value="HSC">新竹市</option>
              <option value="MAC">苗栗市</option>
              <option value="MAL">苗栗縣</option>
              <option value="TXG">臺中市</option>
              <option value="CWH">彰化縣</option>
              <option value="CWS">彰化市</option>
              <option value="NTC">南投市</option>
              <option value="NTO">南投縣</option>
              <option value="YLH">雲林縣</option>
              <option value="CHY">嘉義縣</option>
              <option value="CYI">嘉義市</option>
              <option value="TNN">臺南市</option>
              <option value="KHH">高雄市</option>
              <option value="IUH">屏東縣</option>
              <option value="PTS">屏東市</option>
              <option value="ILN">宜蘭縣</option>
              <option value="ILC">宜蘭市</option>
              <option value="HWA">花蓮縣</option>
              <option value="HWC">花蓮市</option>
              <option value="TTC">臺東市</option>
              <option value="TTT">臺東縣</option>
              <option value="PEH">澎湖縣</option>
              <option value="KMN">金門縣</option>
              <option value="LNN">連江縣</option>
            </select>
          </span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="address">地址</label>
          <input id="address" type="text" placeholder="請輸入地址" />
        </div>
      </div>
    </form>
  );
}

function ShippingPhase() {
  return (
    <form className={styles.shoppingForm}>
      <h3 className={styles.formTitle}>運送方式</h3>
      <div className={styles.formBody}>
        <label className={styles.inputGroup} htmlFor="shippingStandard">
          <input id="shippingStandard" type="radio" name="shippingRadio" />
          <div className={styles.radioInfo}>
            <p>標準運送</p>
            <p>約 3~7 個工作天</p>
          </div>
        </label>
        <label className={styles.inputGroup} htmlFor="shippingDHL">
          <input id="shippingDHL" type="radio" name="shippingRadio" />
          <div className={styles.radioInfo}>
            <p>DHL 貨運</p>
            <p>48 小時內送達</p>
          </div>
        </label>
      </div>
    </form>
  );
}

function CreditCardPhase() {
  return (
    <form className={styles.creditCardForm}>
      <h3 className={styles.formTitle}>付款資訊</h3>
      <div className={styles.formBody}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">持卡人姓名</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="cardNumber">卡號</label>
          <input
            id="cardNumber"
            type="text"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="expiryDate">有效期限</label>
          <input id="expiryDate" type="text" placeholder="MM/YY" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="securityCode">CVC / CCV</label>
          <input type="securityCode" placeholder="123" />
        </div>
      </div>
    </form>
  );
}

export default Form;
