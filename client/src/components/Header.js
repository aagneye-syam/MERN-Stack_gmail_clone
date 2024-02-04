import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div>
      <AppBar>
        <Toolbar>
         <MenuIcon/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
