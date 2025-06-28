import React from 'react';
import './Alert.css';

const Alert = () => {
  return (
    <div className="alert-container">
      <div className="alert-item">
        <div className="alert-title">10k+</div>
        <div className="alert-description">Customers trusted EstonSoft</div>
      </div>

      <div className="alert-item">
        <div className="alert-title">93%</div>
        <div className="alert-description">Satisfaction rate from our customers.</div>
      </div>

      <div className="alert-item">
        <div className="alert-title">4.9</div>
        <div className="alert-description">Average customer ratings out of 5.00!</div>
      </div>
    </div>
  );
};

export default Alert;