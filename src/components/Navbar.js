import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import './Modal.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/images/pizza1.jpg',
      title: 'Pizza',
      price: 200,
      quantity: 1,
    },
    {
      id: 2,
      image: '/images/burger1.jpg',
      title: 'Burger',
      price: 100,
      quantity: 2,
    },
  ]);

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Cart totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCharges = 50;
  const grandTotal = subtotal + deliveryCharges;

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    terms: false,
  });
  const [formErrors, setFormErrors] = useState({});

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    resetForm();
    setIsLoginForm(false);
  };

  // Reset all form inputs and errors
  const resetForm = () => {
    setFormValues({ name: '', email: '', password: '', terms: false });
    setFormErrors({});
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!isLoginForm && !formValues.name.trim()) errors.name = 'Name is required.';
    if (!formValues.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Enter a valid email.';
    }
    if (!formValues.password.trim()) errors.password = 'Password is required.';
    if (!formValues.terms) errors.terms = 'You must agree to the terms.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(isLoginForm ? 'Login successful!' : 'Account created successfully!');
      toggleModal();
    }
  };

  // Switch between Login and Sign In forms
  const toggleFormType = () => {
    setIsLoginForm(!isLoginForm);
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
        <img
          src="/images/cart.jpg"
          alt="Cart"
          className="cart-icon"
          onClick={toggleCart}
          />
          <button className="signin-btn" onClick={toggleModal}>Sign In</button>
        </div>
      </nav>
      {isCartOpen && (
  <div className="cart-container">
    <h2>Your Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td><img src={item.image} alt={item.title} className="cart-item-image" /></td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price * item.quantity}</td>
            <td>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Horizontal Line */}
    <hr className="cart-divider" />

    {/* Cart Summary */}
    <div className="cart-summary">
      <p>Subtotal: ₹{subtotal}</p>
      <p>Delivery Charges: ₹{deliveryCharges}</p>
      <p>Grand Total: ₹{grandTotal}</p>
    </div>

    <button className="close-cart-btn" onClick={toggleCart}>
      Close
    </button>
  </div>
)}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="modal-form">
              <h2 className="modal-title">{isLoginForm ? 'Login' : 'Sign In'}</h2>

              {/* Input fields */}
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
              {formErrors.password && <p className="error-text">{formErrors.password}</p>}

              {/* Terms */}
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formValues.terms}
                  onChange={handleInputChange}
                  id="terms"
                />
                <label htmlFor="terms">
                  I agree to the <span>Terms and Conditions</span>.
                </label>
              </div>
              {formErrors.terms && <p className="error-text">{formErrors.terms}</p>}

              {/* Submit */}
              <button type="submit" className="modal-btn">
                {isLoginForm ? 'Login' : 'Create Account'}
              </button>

              {/* Toggle form */}
              <p className="modal-login">
                {isLoginForm ? 'Don’t have an account? ' : 'Already have an account? '}
                <span onClick={toggleFormType}>
                  {isLoginForm ? 'Sign In' : 'Login'} here
                </span>
              </p>
            </form>

            {/* Close button */}
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
