import styles from "../stylemodules/home.module.css";
import { Link } from "react-router-dom";
import { BsPhone } from "react-icons/bs";
import { LuWrench, LuShoppingCart } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.headercontainer}>
        <h1>Welcome to Stelfix</h1>
        <h3>iStellenbosch</h3>
      </div>
      <div className={styles.buttoncontainer}>
        <Link to="/repair">
          <Button text="Request Repair" type="button" />
        </Link>
        <Link to="/buysell">
          <Button text="Buy/Sell iPhones" type="button" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.infocontainer}>
          <div className={styles.infocard}>
            <img src="../assets/repair.jpg" alt="iPhone Repair" />
            <div className={styles.infocardtext}>
              <h2>Quality iPhone Repairs</h2>
              <p>
                At Stelfix, we excel in repairing iPhone screens and batteries,
                ensuring your device is returned to pristine condition by our
                dedicated technicians."
              </p>
            </div>
          </div>
          <div className={styles.infocard}>
            <img src="../assets/buy-iphone.jpg" alt="Buy iPhone" />
            <div className={styles.infocardtext}>
              <h2>Buy and Sell iPhones</h2>
              <p>
                Discover our selection of pre-owned iPhones for purchase or
                trade-in your unwanted phones hassle-free to earn cash!
              </p>
            </div>
          </div>
          <div className={styles.infocard}>
            <img src="../assets/website.jpeg" alt="Website" />
            <div className={styles.infocardtext}>
              <h2>Easy Online Interaction</h2>
              <p>
                Easily request repairs or inquire about our products online with
                our user-friendly website, simplifying your assistance process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
