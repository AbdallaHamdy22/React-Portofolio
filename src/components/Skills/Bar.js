import React from 'react';
import './Bar.css';

const ProgressBar = ({ label, progress }) => {
  return (
    <div className="progress-item">
      <div className="label">
        <span>{label}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: progress }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
