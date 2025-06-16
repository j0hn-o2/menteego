import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './landingPage.css'; // Assuming you have a CSS file for styling

function LandingPage() {
  return (
    <div className="container">
      <h1>Welcome to Our Service</h1>
      <p>Your journey to better productivity starts here.</p>
      <button className="cta-button">Get Started</button>
    </div>
  );

}

export default LandingPage;