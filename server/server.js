const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: "mail.stelfix.co.za",
  port: 465,
  secure: true,
  auth: {
    user: "no-reply@stelfix.co.za",
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/send-message", (req, res) => {
  const { name, surname, email, message } = req.body;

  const emailContent = `
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Surname:</strong> ${surname}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Message:</strong> ${message}</li>
    </ul>
    `;

  const mailOptions = {
    from: '"Stelfix Message" <no-reply@stelfix.co.za>',
    to: "ruanbuhr1234@gmail.com",
    subject: "Customer Message",
    html: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).json({ message: "Email sent", info: info.response });
  });
});

app.post("/send-repair", (req, res) => {
  const { name, surname, email, device, date, addr1, addr2, addr3 } = req.body;

  const emailContent = `
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Surname:</strong> ${surname}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Device:</strong> ${device}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Address Line 1:</strong> ${addr1}</li>
      <li><strong>Address Line 2:</strong> ${addr2}</li>
      <li><strong>Address Line 3:</strong> ${addr3}</li>
    </ul>
    `;

  const mailOptions = {
    from: '"Stelfix Repair" <no-reply@stelfix.co.za>',
    to: "ruanbuhr1234@gmail.com",
    subject: "Repair Request",
    html: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).json({ message: "Email sent", info: info.response });
  });
});

app.post("/send-buysell", (req, res) => {
  const { buysell, name, surname, email, device, date, addr1, addr2, addr3 } =
    req.body;

  const emailContent = `
    <ul>
      <li><strong>Buy/Sell:</strong> ${buysell}</li>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Surname:</strong> ${surname}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Device:</strong> ${device}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Address Line 1:</strong> ${addr1}</li>
      <li><strong>Address Line 2:</strong> ${addr2}</li>
      <li><strong>Address Line 3:</strong> ${addr3}</li>
    </ul>
    `;

  const mailOptions = {
    from: '"Stelfix Buy/Sell" <no-reply@stelfix.co.za>',
    to: "ruanbuhr1234@gmail.com",
    subject: "Buy/Sell Order",
    html: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).json({ message: "Email sent", info: info.response });
  });
});

app.listen(process.env.PORT);
