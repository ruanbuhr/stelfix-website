import styles from "../stylemodules/footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footercontent}>
        <img src="../../assets/watermark.png" alt="Watermark"></img>
        <p>
          Your premier iPhone repair shop in Stellenbosch, delivering expert
          phone repairs overnight for a seamless and efficient experience. For
          further information contact{" "}
          <a href="mailto:info@stelfix.co.za">info@stelfix.co.za</a>
        </p>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/stelfix/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/stelfix.co.za/">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.footercontent}>
        <h4>Navigation</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </div>
      <div className={styles.footercontent}>
        <h4>Help</h4>
        <ul>
          <li>
            <Link to="/termsandconditions">Terms and Conditions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
