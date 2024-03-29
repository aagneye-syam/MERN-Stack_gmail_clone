import React from "react";
import { useState } from "react";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import CreateOutlined from "@mui/icons-material/Create";
import SIDEBAR_DATA from "../config/Sidebar.config";
import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 16,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
});

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  "& > ul > li > svg": {
    marginRight: 20,
  },
});

function SidebarContent() {
  const [openDialog,setOpenDialog] = useState(false)
  
  const onComposeClick = () => {
    setOpenDialog(true);
  }

  return (
    <div>
      <Container>
        <ComposeButton onClick={()=> onComposeClick()}>
          <CreateOutlined style={{ paddingRight: "10px" }} />
          Compose
        </ComposeButton>
        <List>
          {SIDEBAR_DATA.map(data => (
            <ListItem>
              <data.icon fontSize="small" />
              {data.title}
            </ListItem>
          ))}
        </List>
        <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </Container>
    </div>
  );
}

export default SidebarContent;
