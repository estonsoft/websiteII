import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1601px', // keeps your design's intended width
        minHeight: '100vh', // full height but allows content to grow
        maxHeight:'6255px',
        margin: '0 auto',
        // padding: '1rem',
        boxSizing: 'border-box',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
