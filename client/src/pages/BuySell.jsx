import { useState } from "react";
import styles from "../stylemodules/form.module.css";
import Input from "../components/Input";
import SelectBuySell from "../components/SelectBuySell";
import SelectDevice from "../components/SelectDevice";
import Button from "../components/Button";
import StatusMessage from "../components/StatusMessage";

export default function BuySell() {
  const [details, setDetails] = useState({
    buysell: "",
    name: "",
    surname: "",
    email: "",
    device: "",
    date: "",
    addr1: "",
    addr2: "",
    addr3: "",
  });

  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/send-buysell", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(
          "Order has been submitted successfully. We will correspond with you shortly."
        );
        setShowStatus(true);
      })
      .catch((error) => {
        setStatus(
          "An error occurred while submitting the order. Please try again later."
        );
        setShowStatus(true);
      });

    setDetails({
      buysell: "",
      name: "",
      surname: "",
      email: "",
      device: "",
      date: "",
      addr1: "",
      addr2: "",
      addr3: "",
    });
  }

  function handleCloseStatus() {
    setShowStatus(false);
  }

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h1 className={styles.header}>Buy/Sell Order</h1>
        <div className={styles.details}>
          <span className={styles.title}>Personal Details</span>
          <div className={styles.fields}>
            <Input
              title="Name"
              type="text"
              detail={details.name}
              property="name"
              setDetails={setDetails}
              required={true}
            />
            <Input
              title="Surname"
              type="text"
              detail={details.surname}
              property="surname"
              setDetails={setDetails}
              required={true}
            />
            <Input
              title="e-mail"
              type="email"
              detail={details.email}
              property="email"
              setDetails={setDetails}
              required={true}
            />
          </div>
        </div>

        <div className={styles.details}>
          <span className={styles.title}>Buy or Sell</span>
          <div className={styles.fields}>
            <SelectBuySell
              detail={details.buysell}
              property="buysell"
              setDetails={setDetails}
              required={true}
            />
          </div>
        </div>

        <div className={styles.details}>
          <span className={styles.title}>Device to Buy/Sell</span>
          <div className={styles.fields}>
            <SelectDevice
              title="Model"
              detail={details.device}
              property="device"
              setDetails={setDetails}
              required={true}
            />
          </div>
        </div>

        <div className={styles.details}>
          <span className={styles.title}>Address and Date</span>
          <span className={styles.addresstext}>
            If you want us to pick up or deliver your device please enter the
            following:
          </span>
          <div className={styles.fields}>
            <Input
              title="Address Line 1"
              type="text"
              detail={details.addr1}
              property="addr1"
              setDetails={setDetails}
              required={false}
            />
            <Input
              title="Address Line 2"
              type="text"
              detail={details.addr2}
              property="addr2"
              setDetails={setDetails}
              required={false}
            />
            <Input
              title="Address Line 3"
              type="text"
              detail={details.addr3}
              property="addr3"
              setDetails={setDetails}
              required={false}
            />
            <Input
              title="Date"
              type="date"
              detail={details.date}
              property="date"
              setDetails={setDetails}
              required={false}
            />
          </div>
        </div>
        <div className={styles.buttoncontainer}>
          <Button text="Submit Order" type="submit" />
        </div>
      </form>

      {showStatus && (
        <StatusMessage message={status} onClose={handleCloseStatus} />
      )}
    </div>
  );
}
