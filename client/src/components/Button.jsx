import styles from "../stylemodules/button.module.css";

export default function Button({ text, type }) {
  return <button type={type}>{text}</button>;
}
