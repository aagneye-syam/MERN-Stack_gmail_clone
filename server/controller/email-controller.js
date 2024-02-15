import { response } from "express";
import Email from "../model/email.js";

export const saveSendEmails = (req, res) => {
  try {
    const email = new Email(req.body);
    email.save();

    response.status(200).json("email saved successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export default saveSendEmails;
