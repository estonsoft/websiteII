// layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: '1600px',
        height: '6255px',
        margin: '0 auto', // center the layout horizontally
        // padding: '20px', 
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF', 
        display: 'flex',
         flexDirection: 'column', 
         alignItems: 'center', 
        // justifyContent:'center',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
