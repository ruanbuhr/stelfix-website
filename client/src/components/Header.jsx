import styles from "../stylemodules/header.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu(e) {
    setMenuOpen(false);
  }

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
          <Link to="/repair" onClick={closeMenu}>
            Repair
          </Link>
        </li>
        <li>
          <Link to="/pricing" onClick={closeMenu}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/buysell" onClick={closeMenu}>
            Buy/Sell
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
