const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("./dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "stelfix.business@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/send-message", (req, res) => {
  const { name, number, email, message } = req.body;

  const emailContent = `
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Number:</strong> ${number}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Message:</strong> ${message}</li>
    </ul>
    `;

  const mailOptions = {
    from: '"Stelfix Message" <stelfix.business@gmail.com>',
    to: "info@stelfix.co.za",
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
  const {
    name,
    id,
    email,
    device,
    screen,
    battery,
    addr1,
    addr2,
    addr3,
    consent,
  } = req.body;

  const emailContent = `
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>ID Number:</strong> ${id}</li>
      <li><strong>e-mail:</strong> ${email}</li>
      <li><strong>Device:</strong> ${device}</li>
      <li><strong>Screen:</strong> ${screen}</li>
      <li><strong>Battery:</strong> ${battery}</li>
      <li><strong>Address Line 1:</strong> ${addr1}</li>
      <li><strong>Address Line 2:</strong> ${addr2}</li>
      <li><strong>Address Line 3:</strong> ${addr3}</li>
      <li><strong>Consent:</strong> ${consent}</li>
    </ul>
    `;

  const mailOptions = {
    from: '"Stelfix Repair" <stelfix.business@gmail.com>',
    to: "info@stelfix.co.za",
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
  const { buysell, name, number, email, device, addr1, addr2, addr3 } =
    req.body;

  const emailContent = `
    <ul>
      <li><strong>Buy/Sell:</strong> ${buysell}</li>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Number:</strong> ${number}</li>
      <li><strong>e-mail:</strong> ${email}</li>
      <li><strong>Device:</strong> ${device}</li>
      <li><strong>Address Line 1:</strong> ${addr1}</li>
      <li><strong>Address Line 2:</strong> ${addr2}</li>
      <li><strong>Address Line 3:</strong> ${addr3}</li>
    </ul>
    `;

  const mailOptions = {
    from: '"Stelfix Buy/Sell" <stelfix.business@gmail.com>',
    to: "info@stelfix.co.za",
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "robots.txt"));
});

app.listen(process.env.PORT);
