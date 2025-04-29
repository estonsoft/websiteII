import React from 'react';
import './Alert.css';

const Alert = () => {
  return (
    <div className="alert-container">
      <div className="alert-item alert-title">10k+</div>
      <div className="alert-item alert-subtitle">Customers trusted EstonSoft</div>
      
      <div className="alert-item alert-percentage-container">
        <div className="alert-percentage">93%</div>
        <div className="alert-description">Satisfaction rate from our customers.</div>
      </div>
      
      <div className="alert-item alert-rating-container">
        <div className="alert-percentage">4.9</div>
        <div className="alert-description">Average customer ratings out of 5.00!</div>
      </div>
    </div>
  );
};

export default Alert;