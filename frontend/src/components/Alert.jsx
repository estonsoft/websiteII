import React from 'react';
import './Alert.css';

const Alert = () => {
  return (
    <div className="alert-container">
      <div className="stat-box stat-box-1">
        <h2>10K+</h2>
        <p>Customers trusted EstonSoft</p>
      </div>

      <div className="stat-box stat-box-2">
        <h2>93%</h2>
        <p>Satisfaction rate from our customers.</p>
      </div>

      <div className="stat-box stat-box-3">
        <h2>4.9</h2>
        <p>Average customer ratings out of 5.00!</p>
      </div>
    </div>
  );
};

export default Alert;