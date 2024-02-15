import styles from "../stylemodules/input.module.css";

export default function YesNo({
  title,
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
      <select
        className={styles.input}
        value={detail}
        onChange={(e) => handleChange(property, e)}
        required={required}
      >
        <option value="" disabled>
          Yes/No
        </option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </label>
  );
}
