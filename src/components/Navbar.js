import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="navbar-logo">JALPAAN</h1>
        <ul className="navbar-links">
          <li><Link smooth to="#home">Home</Link></li>
          <li><Link smooth to="#menu">Menu</Link></li>
          <li><Link smooth to="#mobile-app">Mobile App</Link></li>
          <li><Link smooth to="#contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
