import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MobileApp from './pages/MobileApp';
import ContactUs from './pages/ContactUs';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        {/* Sections for smooth scrolling */}
        <div id="home" className="section">
          <Home />
        </div>
        <div id="menu" className="section">
          <Menu />
        </div>
        <div id="mobile-app" className="section">
          <MobileApp />
        </div>
        <div id="contact-us" className="section">
          <ContactUs />
        </div>
      </div>
    </Router>
  );
};

export default App;
