import React from 'react';

function Emails({ openDrawer }) {
  return (
    <div style={openDrawer ? { marginLeft: 250, width:'100%' } : { width:'100%'}}>
        Hello from email
    </div>
  );
}

export default Emails;
