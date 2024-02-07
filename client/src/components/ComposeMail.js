import React from "react";
import { Box, Dialog,Typography,styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display:'flex'
})

function ComposeMail() {
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <CloseIcon fontSize="small" />
        </Header>
        <Box>

        </Box>
        <Box>
          Textarea
        </Box>
      </Dialog>

    </div>
  );
}

export default ComposeMail;
