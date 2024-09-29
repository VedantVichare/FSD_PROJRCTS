
import React, { useState } from 'react';
import './form.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validate = () => {
    let errors = {};
    let emailRegex = /\S+@\S+\.\S+/;
    
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">User Information Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={formErrors.name ? 'error' : ''}
              placeholder="Enter your name"
            />
            {formErrors.name && <p className="error-msg"><FaTimesCircle /> {formErrors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={formErrors.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {formErrors.email && <p className="error-msg"><FaTimesCircle /> {formErrors.email}</p>}
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={formErrors.phone ? 'error' : ''}
              placeholder="Enter your phone number"
            />
            {formErrors.phone && <p className="error-msg"><FaTimesCircle /> {formErrors.phone}</p>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {isSubmitted && (
          <p className="success-msg">
            <FaCheckCircle /> Form submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default form;
