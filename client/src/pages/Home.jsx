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
        <h3>Your Trusted iPhone Repair Experts in Stellenbosch</h3>
      </div>
      <div className={styles.buttoncontainer}>
        <Link to="/repair">
          <Button text="Request Repair" type="button" />
        </Link>
        <Link to="/buysell">
          <Button text="Buy/Sell iPhones" type="button" />
        </Link>
      </div>
      <div className={styles.infocontainer}>
        <h2>What we offer</h2>
        <div className={styles.infocardcontainer}>
          <div className={styles.infocard}>
            <div>
              <BsPhone className={styles.icon} />
              <h3>Quality iPhone Repairs</h3>
            </div>
            <p>
              At Stelfix we specialize in repairing iPhone screens and
              batteries. Our skilled technicians are committed to providing
              top-notch services, ensuring your beloved iPhone is in prestine
              condition.
            </p>
          </div>
          <div className={styles.infocard}>
            <div>
              <LuWrench className={styles.icon} />
              <h3>Fast and Reliable Service</h3>
            </div>
            <p>
              We understand the importance of your iPhone in your daily life.
              That's why we offer one day repair services to get your device
              back in your hands with in 24 hours. Whether it's a cracked screen
              or a battery replacement, we've got you covered.
            </p>
          </div>
          <div className={styles.infocard}>
            <div>
              <LuShoppingCart className={styles.icon} />
              <h3>Buy and Sell iPhones</h3>
            </div>
            <p>
              Looking for a new iPhone or wanting to upgrade? Find out about our
              selection of second-hand iPhones available for purchase. We also
              offer a hassle-free platform for you to sell your unwanted phones.
              Turn your old devices into cash!
            </p>
          </div>
          <div className={styles.infocard}>
            <div>
              <CgWebsite className={styles.icon} />
              <h3>Easy Online Interaction</h3>
            </div>
            <p>
              For your convenience, you can request a repair or inquire about
              our products online. Our user-friendly website makes it simple to
              get the assistance you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
