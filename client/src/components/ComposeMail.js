import React from "react";

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
  const config = {
    Host: "smtp.elasticemail.com",
    Username: "mernstack1234@yopmail.com",
    Password: "9459CD08212EDD34DCA26543C2ED0CF4A9A3",
    Port: 2525,
  };

  const closeComposeMail = (e) => {
    e.preventDefault();

    setOpenDialog(false);
  };

  const sendMail = () => {
    if (window.Email) {
      window.Email.send({
        ...config,
        To: "saagneye2003@gmail.com",
        From: "saagneye2003@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body",
      }).then((message) => alert(message));
    }
    setOpenDialog(false);
  };

  return (
    <div>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <CloseIcon fontSize="small" onClick={(e) => closeComposeMail(e)} />
        </Header>
        <ToWrapper>
          <InputBase placeholder="To" />
          <InputBase placeholder="Subject" />
        </ToWrapper>
        <TextField
          multiline
          rows={20}
          variant="standard"
          InputProps={{ disableUnderline: true }}
        />
        <Footer>
          <SendButton onClick={() => sendMail()}>Send</SendButton>
          <DeleteOutlineIcon onClick={() => setOpenDialog(false)} />
        </Footer>
      </Dialog>
    </div>
  );
}

export default ComposeMail;
