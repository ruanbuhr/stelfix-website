import styles from "../stylemodules/input.module.css";

export default function Input({
  title,
  type,
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
      {title}
      <input
        className={styles.input}
        type={type}
        value={detail}
        onChange={(e) => handleChange(property, e)}
        required={required}
      ></input>
    </label>
  );
}
