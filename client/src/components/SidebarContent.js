import React from "react";
import { Box, Button,styled } from "@mui/material";
import CreateOutlined from "@mui/icons-material/Create";
import SIDEBAR_DATA from "../config/Sidebar.config";

const ComposeButton = styled(Button)({
        background:'#c2e7ff',
        color: '#001d35',
        padding: 16,
        borderRadius:16,
        minWidth: 140,
        textTransform:'none'
})

function SidebarContent() {
  return (
    <div>
      <Box>
        <ComposeButton>
        <CreateOutlined style={{paddingRight:'10px'}} />
           Compose
        </ComposeButton>

      </Box>
    </div>
  );
}

export default SidebarContent;
