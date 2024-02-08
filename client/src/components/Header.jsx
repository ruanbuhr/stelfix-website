import styles from "../stylemodules/header.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img
          src="../assets/stelfix_logo.png"
          className={styles.headerimg}
          alt="Logo"
        ></img>
      </Link>

      <div
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className={styles.menu}
      >
        <FaBars />
      </div>

      <ul className={menuOpen ? styles.open : ""}>
        <li>
          <Link to="/repair">Repair</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/buysell">Buy/Sell</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
