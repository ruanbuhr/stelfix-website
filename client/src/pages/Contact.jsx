import styles from "../stylemodules/form.module.css";
import { useState } from "react";
import Input from "../components/Input";
import Message from "../components/Message";
import Button from "../components/Button";
import StatusMessage from "../components/StatusMessage";

export default function Contact() {
  const [details, setDetails] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://www.stelfix.co.za/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(
          "Message has been submitted successfully. We will correspond with you shortly."
        );
        setShowStatus(true);
      })
      .catch((error) => {
        setStatus(
          "An error occurred while submitting the message. Please try again later."
        );
        setShowStatus(true);
      });

    setDetails({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  }

  function handleCloseStatus() {
    setShowStatus(false);
  }

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h1 className={styles.header}>Contact</h1>
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
              title="Cell Number"
              type="Text"
              detail={details.number}
              property="number"
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
          <span className={styles.title}>Message</span>
          <Message
            detail={details.message}
            property="message"
            setDetails={setDetails}
          />
        </div>

        <div className={styles.buttoncontainer}>
          <Button text="Send" type="submit" />
        </div>
      </form>

      {showStatus && (
        <StatusMessage message={status} onClose={handleCloseStatus} />
      )}
    </div>
  );
}
