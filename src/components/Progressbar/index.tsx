import '../../utils/styles/ProgressBar.css';
import React from 'react';

const ProgressBar = ({ uploadProgress, width }) => {
  return (
    <div className="progress-bar-container" style={{ width: `${width}` }}>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
      </div>
      <span>Uploading logfile, please wait... ({`${uploadProgress}%`})</span>
    </div>
  );
};

export default ProgressBar;
