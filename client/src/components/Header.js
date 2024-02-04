import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)({
  background: '#F5F5F5'
})

function Header() {
  return (
    <div>
      <StyledAppBar position='static'>
        <Toolbar>
         <MenuIcon/>
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}

export default Header
