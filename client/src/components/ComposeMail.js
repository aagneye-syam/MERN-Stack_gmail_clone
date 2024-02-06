import React from "react";
import { Dialog } from "@mui/material";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

function ComposeMail() {
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        Hello
      </Dialog>
    </div>
  );
}

export default ComposeMail;
