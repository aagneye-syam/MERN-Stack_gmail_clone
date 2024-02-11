import { response } from "express";
import Email from "../model/email.js";

export const saveSendEmails = (req, res) => {
  try {
       const email = new Email(request.body);
       email.save();

       response.status(200).json('email saved sucesssfully');
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export default saveSendEmails;
