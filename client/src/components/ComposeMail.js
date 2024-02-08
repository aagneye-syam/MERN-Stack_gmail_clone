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
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';  

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
  display:'flex',
  justifyContent:'space-between',
  padding:'10px 15px',
  alignItems:'center'

})


function ComposeMail() {
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <CloseIcon fontSize="small" />
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
          <Button>Send</Button>
          <DeleteOutlineIcon />
        </Footer>
      </Dialog>
    </div>
  );
}

export default ComposeMail;
