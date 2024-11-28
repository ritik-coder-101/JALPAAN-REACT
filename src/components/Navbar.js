import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import './Modal.css';
import './seat.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTableDropdownOpen, setIsTableDropdownOpen] = useState(false);
  const [isSeatLayoutOpen, setIsSeatLayoutOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("Day"); // default is Day

  const [tableDetails, setTableDetails] = useState({
    location: '',
    time: '',
    people: '',
    concert: false,
  });

  const [seats, setSeats] = useState([
    { id: 1, status: 'vacant' },
    { id: 2, status: 'booked' },
    { id: 3, status: 'vacant' },
    { id: 4, status: 'vacant' },
    { id: 5, status: 'booked' },
    { id: 6, status: 'vacant' },
    { id: 7, status: 'vacant' },
    { id: 8, status: 'vacant' },
    { id: 9, status: 'vacant' },
    { id: 10, status: 'vacant' },
    { id: 11, status: 'vacant' },
    { id: 12, status: 'vacant' },
    { id: 13, status: 'vacant' },
    { id: 14, status: 'vacant' },
    { id: 15, status: 'vacant' },
    { id: 16, status: 'vacant' },
    { id: 17, status: 'vacant' },
    { id: 18, status: 'vacant' },
    { id: 19, status: 'booked' },
    { id: 20, status: 'booked' },
  ]);

  const toggleSeatSelection = (id) => {
    const selectedSeatsCount = seats.filter((seat) => seat.status === 'selected').length;
  
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === id) {
          // If the seat is already selected, deselect it
          if (seat.status === 'selected') {
            return { ...seat, status: 'vacant' };
          }
          // If the seat is vacant, allow selection only if within limit
          if (seat.status === 'vacant' && selectedSeatsCount < tableDetails.people) {
            return { ...seat, status: 'selected' };
          }
        }
        return seat;
      })
    );
  };

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/images/pizza1.jpg',
      title: 'Pizza',
      price: 250,
      quantity: 1,
    },
    {
      id: 2,
      image: '/images/burger1.jpg',
      title: 'Burger',
      price: 150,
      quantity: 2,
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCharges = 50;
  const grandTotal = subtotal + deliveryCharges;

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

  const toggleTableDropdown = () => {
    setIsTableDropdownOpen(!isTableDropdownOpen);
  };

  const handleTableDetailsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTableDetails({
      ...tableDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleSubmitTableBooking = () => {
    alert(`Table booked successfully! Details: ${JSON.stringify(tableDetails)}`);
    setIsTableDropdownOpen(false);
    setTableDetails({ location: '', time: '', people: '', concert: false });
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
          <img
            src="/images/table.png"
            alt="Table"
            className="table-icon"
            onClick={toggleTableDropdown}
          />
          <img
            src="/images/cart.jpg"
            alt="Cart"
            className="cart-icon"
            onClick={toggleCart}
          />
          <button className="signin-btn" onClick={() => setIsModalOpen(true)}>Sign In</button>
        </div>
      </nav>

      {/* Table Dropdown */}
      {isTableDropdownOpen && (
  <div className="table-dropdown">
    {!isSeatLayoutOpen ? (
      <>
        <h2>Book Your Table</h2>

        {/* Table Location */}
        <div className="dropdown-section">
          <label>Where do you want your table?</label>
          <select
            name="location"
            value={tableDetails.location}
            onChange={handleTableDetailsChange}
            className="dropdown-input"
          >
            <option value="">Select Location</option>
            <option value="Balcony">Balcony</option>
            <option value="Roof">Roof</option>
            <option value="Hall">Hall</option>
            <option value="Near Pool">Near Pool</option>
          </select>
        </div>

        {/* Time Selection */}
        <div className={`time-selection-container ${selectedTime === "Day" ? "day-background" : "night-background"}`}>
          <button
    className={`time-btn ${selectedTime === "Day" ? 'day-selected' : ''}`}
    onClick={() => handleTimeSelection('Day')}
  >
    Day
  </button>
  <button
    className={`time-btn ${selectedTime === "Night" ? 'night-selected' : ''}`}
    onClick={() => handleTimeSelection('Night')}
  >
    Night
  </button>
</div>

        {/* Number of People */}
        <div className="dropdown-section">
          <label>Number of People</label>
          <input
            type="number"
            name="people"
            value={tableDetails.people}
            onChange={handleTableDetailsChange}
            placeholder="Enter number of guests"
            className="dropdown-input"
          />
        </div>

        {/* Concert Option */}
        <div className="dropdown-section">
          <label>
            <input
              type="checkbox"
              name="concert"
              checked={tableDetails.concert}
              onChange={handleTableDetailsChange}
            />
            Book a concert
          </label>
        </div>

        {/* Choose Seat Button */}
        <div className="dropdown-actions1">
          <button
            className="choose-seat-btn"
            onClick={() => setIsSeatLayoutOpen(true)}
            disabled={!tableDetails.people}
          >
            Choose Your Seat
          </button>
        </div>

        {/* Submit and Close */}
        <div className="dropdown-actions">
          <button className="submit-btn" onClick={handleSubmitTableBooking}>
            Submit
          </button>
          <button className="close-btn" onClick={toggleTableDropdown}>
            Close
          </button>
        </div>
      </>
    ) : (
      <>
        <h2>Choose Your Seat</h2>
        <p className='Ready-text'>
      Number of Seats Allowed: {tableDetails.people}
    </p>
    
    {/* Display the appropriate message based on the condition */}
    {seats.filter((seat) => seat.status === 'selected').length < tableDetails.people ? (
      <p className='Ready-text'>
        Seats selected: {seats.filter((seat) => seat.status === 'selected').length}
      </p>
    ) : (
      <p className='warning-text'>
        You can't select more seats than the specified number of people!
      </p>
    )}
        <div className="seat-grid">
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${seat.status}`}
              onClick={() => toggleSeatSelection(seat.id)}
            >
              {seat.id}
            </div>
          ))}
        </div>

        {/* Back to Table Dropdown */}
        <div className="dropdown-actions1">
          <button className="back-btn" onClick={() => setIsSeatLayoutOpen(false)}>
            Back to Table Booking
          </button>
        </div>
      </>
    )}
  </div>
)}



      {/* Cart Dropdown */}
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
