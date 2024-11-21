import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-section">
        <h1 className="contact-heading">JALPAAN</h1>
        <p className="contact-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="info-sections">
        <div className="company-section">
          <h2 className="section-heading">COMPANY</h2>
          <ul className="company-links">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="contact-info-section">
          <h2 className="section-heading">GET IN TOUCH</h2>
          <p className="contact-phone">+1-212-456-7890</p>
          <p className="contact-email">contact@tomato.com</p>
        </div>
      </div>

      <div className="image-section">
        <img src="/images/face.png" alt="Image 1" className="contact-image" />
        <img src="/images/twitter.jpg" alt="Image 2" className="contact-image" />
        <img src="/images/linkedin.jpg" alt="Image 3" className="contact-image" />
      </div>

      <hr className="separator" />

      <div className="copyright">
        <p>Copyright 2024 © Tomato.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default ContactUs;
