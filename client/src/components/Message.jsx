import styles from "../stylemodules/message.module.css";
export default function Message({ detail, property, setDetails }) {
  function handleChange(property, e) {
    setDetails((prev) => ({
      ...prev,
      [property]: e.target.value,
    }));
  }
  return (
    <label className={styles.messagefield}>
      <textarea
        className={styles.message}
        value={detail}
        onChange={(e) => handleChange(property, e)}
      ></textarea>
    </label>
  );
}
