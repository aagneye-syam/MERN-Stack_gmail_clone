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

const SearWrapper = styled(Box)({
  background: '#EAF1FB',
  marginLeft: 80,
  borderRadius:8,
  minWidth:690,
  maxWidth:720,
  height:48,
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  padding: '0 20px'
})

function Header() {
  return (
    <div>
      <StyledAppBar position='static'>
        <Toolbar>
         <MenuIcon color='action'/>
         <Box display="flex">
           <Box flexGrow={1}>
             <img src={gmailLogo} alt='logo' style={{ width:110, height:30, marginLeft: 15}}/>
           </Box>
           <SearWrapper display="flex" sx={{ ml: 2 }}>
             <SearchIcon color='action'/>
             <InputBase />
             <TuneIcon color='action' />
           </SearWrapper>
         </Box>
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}

export default Header
