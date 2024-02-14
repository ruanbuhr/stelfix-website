import styles from "../stylemodules/checkbox.module.css";

export default function Checkbox({
  title,
  detail,
  property,
  setDetails,
  required,
}) {
  function handleChange(property, e) {
    const isChecked = e.target.checked;
    setDetails((prev) => ({
      ...prev,
      [property]: isChecked,
    }));
  }

  return (
    <label className={styles.inputfield}>
      {title}
      <input
        className={styles.input}
        type="checkbox"
        value={detail}
        onChange={(e) => handleChange(property, e)}
        required={required}
      ></input>
    </label>
  );
}
