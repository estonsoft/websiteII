import React from 'react';

const Alert = () => {
  return (
    <div
      style={{
        width: '100%', 
        height: '140px',
        background: '#473BF0',
        position: 'fixed',
        bottom: '0',
        left: '0',
        zIndex: '1000', 
        color: 'white',
        fontFamily: 'sans-serif',
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        padding: '0 20px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>10K+</h2>
        <p style={{ margin: '4px 0 0', fontSize: '16px' }}>Customers trusted EstonSoft</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>93%</h2>
        <p style={{ margin: '4px 0 0', fontSize: '16px' }}>Satisfaction rate from our customers.</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>4.9</h2>
        <p style={{ margin: '4px 0 0', fontSize: '16px' }}>Average customer ratings out of 5.00!</p>
      </div>
    </div>
  );
};

export default Alert;
