import React from 'react'
import { Drawer} from '@mui/material';

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
    
        sx={{
          '& .MuiDrawer-paper' : {
            marginTop:'64px',
            width:250,
            background:'#F5F5F5',
            borderRight:'none',
            height:'cal(100vh - 64px)',


          }
        }}
      >
        hello
      </Drawer> 
    </div>
  )
}

export default Sidebar  