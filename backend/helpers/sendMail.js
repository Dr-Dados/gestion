const nodemailer = require("nodemailer");
//env variables
require("dotenv").config();

const sendMail = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: "Support",
    to: email,
    subject: subject,
    text: text,
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = sendMail;
