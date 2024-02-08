import styles from "../stylemodules/input.module.css";

export default function SelectBuySell({
  detail,
  property,
  setDetails,
  required,
}) {
  function handleChange(property, e) {
    setDetails((prev) => ({
      ...prev,
      [property]: e.target.value,
    }));
  }

  return (
    <label className={styles.inputfield}>
      <select
        className={styles.input}
        value={detail}
        onChange={(e) => handleChange(property, e)}
        required={required}
      >
        <option value="" disabled>
          Do you want to buy or sell?
        </option>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
    </label>
  );
}
