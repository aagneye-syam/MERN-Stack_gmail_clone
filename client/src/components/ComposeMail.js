import React from "react";
import { useState } from "react";

import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
  },
});

const ToWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
    marginTop: 10,
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  borderRadius: 18,
  fontWeight: 500,
  textTransform: "none",
  width: 100,
});

function ComposeMail({ openDialog, setOpenDialog }) {
  const [data, setData] = useState({});
  const sendEmailService = useApi(API_URLS.saveSendEmail);

  const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525,
  };

  const closeComposeMail = (e) => {
    e.preventDefault();

    setOpenDialog(false);
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "saagneye2003@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }

    const payload = {
      to: data.to,
      from: "saagneye2003@gmail.com",
      subject: data.subject,
      body: data.body,
      data: new Date(),
      image: "",
      name: "code for interview",
      starred: "false",
      type: "send",
    };

    sendEmailService.call(payload)

    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <CloseIcon fontSize="small" onClick={(e) => closeComposeMail(e)} />
        </Header>
        <ToWrapper>
          <InputBase
            placeholder="To"
            name="to"
            onChange={(e) => onValueChange(e)}
          />
          <InputBase
            placeholder="Subject"
            name="subject"
            onChange={(e) => onValueChange(e)}
          />
        </ToWrapper>
        <TextField
          multiline
          rows={20}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => onValueChange(e)}
          name="body"
        />
        <Footer>
          <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
          <DeleteOutlineIcon onClick={() => setOpenDialog(false)} />
        </Footer>
      </Dialog>
    </div>
  );
}

export default ComposeMail;
