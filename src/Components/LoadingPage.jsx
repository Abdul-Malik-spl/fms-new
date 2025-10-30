import React from 'react';
import '../App.css';

const CleaningLoader = () => {
  return (
    <div className="cleaning-loader-wrapper">
      <div className="cleaning-icon">
        🧹
      </div>
      <p className="cleaning-text">Loading...</p>
    </div>
  );
};

export default CleaningLoader;
