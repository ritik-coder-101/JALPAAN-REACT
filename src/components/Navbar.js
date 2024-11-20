import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import './Modal.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    terms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
    terms: false,
  });

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    resetForm();
    setIsLoginForm(false); // Default to Sign In form
  };

  // Reset all form inputs and errors
  const resetForm = () => {
    setFormValues({ name: '', email: '', password: '', terms: false });
    setLoginValues({ email: '', password: '', terms: false });
    setFormErrors({});
  };

  // Handle input changes for both forms
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updateValues = isLoginForm ? loginValues : formValues;
    const setValues = isLoginForm ? setLoginValues : setFormValues;

    setValues({
      ...updateValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validate Sign In form
  const validateSignInForm = () => {
    const errors = {};
    if (!formValues.name.trim()) errors.name = 'Name is required';
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!formValues.password.trim()) errors.password = 'Password is required';
    if (!formValues.terms) errors.terms = 'You must agree to the terms';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Validate Login form
  const validateLoginForm = () => {
    const errors = {};
    if (!loginValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginValues.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!loginValues.password.trim()) errors.password = 'Password is required';
    if (!loginValues.terms) errors.terms = 'You must agree to the terms';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoginForm) {
      if (validateLoginForm()) {
        alert('Login successful!');
        toggleModal();
      }
    } else {
      if (validateSignInForm()) {
        alert('Account created successfully!');
        toggleModal();
      }
    }
  };

  // Switch to Login form
  const showLoginForm = () => {
    setIsLoginForm(true);
    resetForm();
  };

  // Switch to Sign In form
  const showSignInForm = () => {
    setIsLoginForm(false);
    resetForm();
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-logo">JALPAAN</h1>
        <ul className="navbar-links">
          <li><Link smooth to="#home">Home</Link></li>
          <li><Link smooth to="#menu">Menu</Link></li>
          <li><Link smooth to="#mobile-app">Mobile App</Link></li>
          <li><Link smooth to="#contact-us">Contact Us</Link></li>
        </ul>
        <div className="navbar-actions">
          <img src="/images/cart.jpg" alt="Cart" className="cart-icon" />
          <button className="signin-btn" onClick={toggleModal}>Sign In</button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="modal-form">
              <h2 className="modal-title">{isLoginForm ? 'Login' : 'Sign In'}</h2>

              {/* Form Inputs */}
              {!isLoginForm && (
                <>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="modal-input"
                  />
                  {formErrors.name && <p className="error-text">{formErrors.name}</p>}
                </>
              )}
              <input
                type="email"
                name="email"
                value={isLoginForm ? loginValues.email : formValues.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="modal-input"
              />
              {formErrors.email && <p className="error-text">{formErrors.email}</p>}
              <input
                type="password"
                name="password"
                value={isLoginForm ? loginValues.password : formValues.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="modal-input"
              />
              {formErrors.password && <p className="error-text">{formErrors.password}</p>}

              {/* Terms & Conditions */}
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="terms"
                  checked={isLoginForm ? loginValues.terms : formValues.terms}
                  onChange={handleInputChange}
                  id="terms"
                />
                <label htmlFor="terms">
                  I agree to the <span>Terms and Conditions</span>.
                </label>
              </div>
              {formErrors.terms && <p className="error-text">{formErrors.terms}</p>}

              {/* Submit Button */}
              <button type="submit" className="modal-btn">
                {isLoginForm ? 'Login' : 'Create Account'}
              </button>

              {/* Toggle Form Link */}
              <p className="modal-login">
                {isLoginForm
                  ? "Create a new account? "
                  : "Already have an account? "}
                <span onClick={isLoginForm ? showSignInForm : showLoginForm}>
                  {isLoginForm ? 'Sign In' : 'Login'} here
                </span>
              </p>
            </form>

            {/* Close Button */}
            <button className="close-modal-btn" onClick={toggleModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
