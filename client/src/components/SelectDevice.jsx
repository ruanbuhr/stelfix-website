import styles from "../stylemodules/input.module.css";

export default function SelectDevice({
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
          Select a device
        </option>
        <option value="iphone-11-pro-max">iPhone 11 Pro Max</option>
        <option value="iphone-11-pro">iPhone 11 Pro</option>
        <option value="iphone-11">iPhone 11 </option>
        <option value="iphone-xs-max">iPhone XS Max</option>
        <option value="iphone-xs">iPhone XS</option>
        <option value="iphone-xr">iPhone XR</option>
        <option value="iphone-x">iPhone X</option>
        <option value="iphone-8-plus">iPhone 8 Plus</option>
        <option value="iphone-8">iPhone 8</option>
        <option value="iphone-7-plus">iPhone 7 Plus</option>
        <option value="iphone-7">iPhone 7</option>
        <option value="iphone-6s-plus">iPhone 6s Plus</option>
        <option value="iphone-6s">iPhone 6s</option>
        <option value="iphone-6-plus">iPhone 6 Plus</option>
        <option value="iphone-6">iPhone 6</option>
        <option value="iphone-se">iPhone SE</option>
        <option value="iphone-5s">iPhone 5s</option>
      </select>
    </label>
  );
}
