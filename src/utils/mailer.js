import dotenv from 'dotenv';
dotenv.config();

import * as nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
  secure: true,
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const getMailOptions = ({ subject, content }) => {
  return {
    to: process.env.EMAIL_USER_TWO,
    subject: subject,
    text: content,
  };
};
