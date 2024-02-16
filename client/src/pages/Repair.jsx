import { useState } from "react";
import styles from "../stylemodules/form.module.css";
import Input from "../components/Input";
import SelectDevice from "../components/SelectDevice";
import Button from "../components/Button";
import StatusMessage from "../components/StatusMessage";
import YesNo from "../components/YesNo";
import CheckBox from "../components/Checkbox";

export default function Repair() {
  const [details, setDetails] = useState({
    name: "",
    id: "",
    email: "",
    device: "",
    screen: "",
    battery: "",
    addr1: "",
    addr2: "",
    addr3: "",
    consent: false,
  });

  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://stelfix.co.za/send-repair", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(
          "Request has been submitted successfully. We will correspond with you shortly."
        );
        setShowStatus(true);
      })
      .catch((error) => {
        setStatus(
          "An error occurred while submitting the request. Please try again later."
        );
        setShowStatus(true);
      });

    setDetails({
      name: "",
      id: "",
      email: "",
      device: "",
      screen: "",
      battery: "",
      addr1: "",
      addr2: "",
      addr3: "",
      consent: false,
    });
  }

  function handleCloseStatus() {
    setShowStatus(false);
  }

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h1 className={styles.header}>Repair Request</h1>
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
              title="ID Number"
              type="Text"
              detail={details.id}
              property="id"
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
          <span className={styles.title}>Device</span>
          <div className={styles.fields}>
            <SelectDevice
              title="Model"
              detail={details.device}
              property="device"
              setDetails={setDetails}
              required={true}
            />
            <YesNo
              title="Screen"
              detail={details.screen}
              property="screen"
              setDetails={setDetails}
              required={false}
            />
            <YesNo
              title="Battery"
              detail={details.battery}
              property="battery"
              setDetails={setDetails}
              required={false}
            />
          </div>
        </div>

        <div className={styles.details}>
          <span className={styles.title}>Address</span>
          <span className={styles.addresstext}>
            If you want us to pick up and deliver your device please enter the
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
          </div>
        </div>

        <div className={styles.details}>
          <span className={styles.title}>Consent</span>
          <div className={styles.addresstext}>
            <div className={styles.privacypolicy}>
              <CheckBox
                title=""
                detail={details.consent}
                property="consent"
                setDetails={setDetails}
                required={false}
              />
              <h4>I agree to the Privacy Policy</h4>
            </div>
            <h4>Make Sure:</h4>
            <ol>
              <li>that your device is backed up.</li>
              <li>
                you know that your device will not have a dust or water
                resistant rating after the repair.
              </li>
              <li>
                you remember your Stelfix email with your id for prove of
                ownership.
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.buttoncontainer}>
          <Button text="Request Repair" type="submit" />
        </div>
      </form>

      {showStatus && (
        <StatusMessage message={status} onClose={handleCloseStatus} />
      )}
    </div>
  );
}
