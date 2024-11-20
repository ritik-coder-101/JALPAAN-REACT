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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsLoginForm(false);
    resetForm();
  };

  const resetForm = () => {
    setFormValues({ name: '', email: '', password: '', terms: false });
    setLoginValues({ email: '', password: '', terms: false });
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (isLoginForm) {
      setLoginValues({
        ...loginValues,
        [name]: type === 'checkbox' ? checked : value,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const validateSignInForm = () => {
    const errors = {};
    if (!formValues.name) errors.name = 'Name is required';
    if (!formValues.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      errors.email = 'Enter a valid email';
    if (!formValues.password) errors.password = 'Password is required';
    if (!formValues.terms) errors.terms = 'You must agree to the terms';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateLoginForm = () => {
    const errors = {};
    if (!loginValues.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(loginValues.email))
      errors.email = 'Enter a valid email';
    if (!loginValues.password) errors.password = 'Password is required';
    if (!loginValues.terms) errors.terms = 'You must agree to the terms';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

  const showLoginForm = () => {
    setIsLoginForm(true);
    resetForm();
  };

  const showSignInForm = () => {
    setIsLoginForm(false);
    resetForm();
  };

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
        <div className="navbar-actions">
          <img src="/images/cart.jpg" alt="Cart" className="cart-icon" />
          <button className="signin-btn" onClick={toggleModal}>
            Sign In
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="modal-form">
              {!isLoginForm ? (
                <>
                  <h2 className="modal-title">Sign In</h2>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="modal-input"
                  />
                  {formErrors.name && <p className="error-text">{formErrors.name}</p>}
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="modal-input"
                  />
                  {formErrors.email && <p className="error-text">{formErrors.email}</p>}
                  <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="modal-input"
                  />
                  {formErrors.password && (
                    <p className="error-text">{formErrors.password}</p>
                  )}
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formValues.terms}
                      onChange={handleInputChange}
                      id="terms"
                    />
                    <label htmlFor="terms">I agree to the <span>Terms and Conditions</span>.</label>
                  </div>
                  {formErrors.terms && <p className="error-text">{formErrors.terms}</p>}
                  <button type="submit" className="modal-btn">Create Account</button>
                  <p className="modal-login">
                    Already have an account?{' '}
                    <span onClick={showLoginForm}>Login here</span>
                  </p>
                </>
              ) : (
                <>
                  <h2 className="modal-title">Login</h2>
                  <input
                    type="email"
                    name="email"
                    value={loginValues.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="modal-input"
                  />
                  {formErrors.email && <p className="error-text">{formErrors.email}</p>}
                  <input
                    type="password"
                    name="password"
                    value={loginValues.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="modal-input"
                  />
                  {formErrors.password && (
                    <p className="error-text">{formErrors.password}</p>
                  )}
                  <button type="submit" className="modal-btn">Login</button>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={loginValues.terms}
                      onChange={handleInputChange}
                      id="login-terms"
                    />
                    <label htmlFor="login-terms">
                      I agree to the <span>Terms and Conditions</span>.
                    </label>
                  </div>
                  {formErrors.terms && <p className="error-text">{formErrors.terms}</p>}
                  <p className="modal-login">
                    Create a new account?{' '}
                    <span onClick={showSignInForm}>Click here</span>
                  </p>
                </>
              )}
            </form>
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
