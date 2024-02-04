import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { gmailLogo } from '../constants/constant';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { InputBase,Box } from '@mui/material';

const StyledAppBar = styled(AppBar)({
  background: '#F5F5F5',
  boxShadow: 'none'
})

const SearWrapper = Styled(Box)({

})

function Header() {
  return (
    <div>
      <StyledAppBar position='static'>
        <Toolbar>
         <MenuIcon color='action'/>
         <img src={gmailLogo} alt='logo' style={{ width:110, height:30, marginLeft:15}}/>
        </Toolbar>
        <Box>
          <SearchIcon color='action'/>
          <InputBase />
          <TuneIcon color='action' />
        </Box>
      </StyledAppBar>
    </div>
  )
}

export default Header
