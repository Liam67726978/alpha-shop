import { useContext } from "react";
import RegisterContext from "./RegisterContext";
import styles from "./Form.module.scss";
import Icons from "./Icons";

const optionData = [
  { city: "基隆市", value: "KLU" },
  { city: "新北市", value: "TPH" },
  { city: "臺北市", value: "TPE" },
  { city: "桃園市", value: "TYC" },
  { city: "新竹縣", value: "HSH" },
  { city: "新竹市", value: "HSC" },
  { city: "苗栗市", value: "MAC" },
  { city: "苗栗縣", value: "MAL" },
  { city: "臺中市", value: "TXG" },
  { city: "彰化縣", value: "CWH" },
  { city: "彰化市", value: "CWS" },
  { city: "南投市", value: "NTC" },
  { city: "南投縣", value: "NTO" },
  { city: "雲林縣", value: "YLH" },
  { city: "嘉義縣", value: "CHY" },
  { city: "嘉義市", value: "CYI" },
  { city: "臺南市", value: "TNN" },
  { city: "高雄市", value: "KHH" },
  { city: "屏東縣", value: "IUH" },
  { city: "屏東市", value: "PTS" },
  { city: "宜蘭縣", value: "ILN" },
  { city: "宜蘭市", value: "ILC" },
  { city: "花蓮縣", value: "HWA" },
  { city: "花蓮市", value: "HWC" },
  { city: "臺東市", value: "TTC" },
  { city: "臺東縣", value: "TTT" },
  { city: "澎湖縣", value: "PEH" },
  { city: "金門縣", value: "KMN" },
  { city: "連江縣", value: "LNN" },
];

function Form({ step }) {
  return <div className={styles.formWrapper}>{renderForm(step)}</div>;
}

function renderForm(step) {
  if (step === 1) return <AddressPhase />;
  else if (step === 2) return <ShippingPhase />;
  else return <CreditCardPhase />;
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
            <select name="city" id="city" defaultValue="" required>
              <option value="" disabled hidden>
                請選擇縣市
              </option>
              {optionData.map((city) => {
                return (
                  <option key={city.value} value={city.value}>
                    {city.city}
                  </option>
                );
              })}
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
  const { registerData, updateRegisterData } = useContext(RegisterContext);
  // 更新 name
  function handleChangeName(e) {
    updateRegisterData((draft) => {
      draft.name = e.target.value;
    });
  }
  // 更新 number
  function handleChangeNumber(e) {
    updateRegisterData((draft) => {
      draft.number = e.target.value;
    });
  }
  // 更新 date
  function handleChangeDate(e) {
    updateRegisterData((draft) => {
      draft.date = e.target.value;
    });
  }
  // 更新 cvc
  function handleChangeCvc(e) {
    updateRegisterData((draft) => {
      draft.cvc = e.target.value;
    });
  }

  return (
    <form className={styles.creditCardForm}>
      <h3 className={styles.formTitle}>付款資訊</h3>
      <div className={styles.formBody}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">持卡人姓名</label>
          <input
            type="text"
            placeholder="John Doe"
            value={registerData.name}
            onChange={handleChangeName}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="cardNumber">卡號</label>
          <input
            id="cardNumber"
            type="text"
            placeholder="1111 2222 3333 4444"
            value={registerData.number}
            onChange={handleChangeNumber}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="expiryDate">有效期限</label>
          <input
            id="expiryDate"
            type="text"
            placeholder="MM/YY"
            value={registerData.date}
            onChange={handleChangeDate}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="securityCode">CVC / CCV</label>
          <input
            type="securityCode"
            placeholder="123"
            value={registerData.cvc}
            onChange={handleChangeCvc}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
