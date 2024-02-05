import React from 'react'
import { Drawer,styled } from '@mui/material';

function Sidebar() {
  return (
    <div>
      <Drawer 
        anchor='left'
        open='true'
        hideBackdrop={true}
        ModalProps={{
          keepMounted:true
        }}
        variant="persistent "
      >
        hello
      </Drawer> 
    </div>
  )
}

export default Sidebar  