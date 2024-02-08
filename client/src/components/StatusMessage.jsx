import React from "react";
import Button from "./Button";
import styles from "../stylemodules/statusmessage.module.css";

export default function StatusMessage({ message, onClose }) {
  function handleClick(e) {
    e.preventDefault();
    onClose();
  }

  return (
    <div className={styles.statusoverlay} onClick={handleClick}>
      <div className={styles.statusform}>
        <p>{message}</p>
        <Button text="OK" type="button" />
      </div>
    </div>
  );
}
