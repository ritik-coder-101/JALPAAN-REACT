import React from 'react';
import './MobileApp.css';  // Assuming the CSS styles are defined here

const MobileApp = () => {
  return (
    <div className="mobile-app-container">
      <h2 className="app-text">For Better Experience Download</h2>
      <h3 className="app-subtext">JALPAAN App</h3>
      <div className="images-container">
        <img src="/images/play.jpg" alt="App Image 1" className="app-image" />
        <img src="/images/ip.jpg" alt="App Image 2" className="app-image" />
      </div>
    </div>
  );
}

export default MobileApp;
