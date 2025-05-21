import React, { useState } from 'react';
import { registerUser } from '../../services/authService';
import './signup.css';

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitted) {
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    let message = '';

    if (name === 'name') {
      if (!value.trim()) message = 'Name is required';
    }

    if (name === 'email') {
      if (!value.trim()) {
        message = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        message = 'Invalid email format';
      }
    }

    if (name === 'password') {
      if (!value) {
        message = 'Password is required';
      } else if (value.length < 6) {
        message = 'Password must be at least 6 characters';
      }
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const validateForm = () => {
    let newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
      if (!value.trim()) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    return Object.values(newErrors).every((msg) => msg === undefined || msg === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const isValid = validateForm();
    if (isValid) {
      const result = await registerUser(formData);
      console.log(result);
      // Optionally reset form here
    }
  };

  return (
    <div className='sign-up-container'>
      <div className="img-section">
        <div className="img-container">
          <img src="/images/Amazon_logo - 1.svg" alt="logo" />
        </div>
      </div>
      <div className="main-form">
        <div className="form-div">
          <h3>Create Account</h3>
          <p>All fields are required</p>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Your Name</label><br />
              <input
                type="text"
                name="name"
                className={errors.name ? 'input-error' : ''}
                placeholder="First and last name"
                value={formData.name}
                onChange={onHandleChange}
              />
              {errors.name && <p className="error-msg">{errors.name}</p>}
            </div>

            <div className="form-control">
              <label>Email</label><br />
              <input
                type="email"
                name="email"
                className={errors.email ? 'input-error' : ''}
                value={formData.email}
                onChange={onHandleChange}
              />
              {errors.email && <p className="error-msg">{errors.email}</p>}
            </div>

            <div className="form-control">
              <label>Password (at least 6 characters)</label><br />
              <input
                type="password"
                name="password"
                className={errors.password ? 'input-error' : ''}
                value={formData.password}
                onChange={onHandleChange}
              />
              {errors.password && <p className="error-msg">{errors.password}</p>}
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
