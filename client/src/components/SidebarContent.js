import React from "react";
import { Box, Button } from "@mui/material";
import CreateOutlined from "@mui/icons-material/Create";

function SidebarContent() {
  return (
    <div>
      <Box>
        <Button>
          <CreateOutlined />
          Compose
        </Button>
      </Box>
    </div>
  );
}

export default SidebarContent;
