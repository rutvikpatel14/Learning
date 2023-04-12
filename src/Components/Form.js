import React, { useState } from 'react';


const Form = () => {
    
    
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        password: '',
        confirmPassword: ''
    });
    

  const [formErrors, setFormErrors] = useState({
    name: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const addressRegex = /^[0-9a-zA-Z\s,'-]*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/;

    if (!formData.name.match(nameRegex)) {
      errors.name = 'Please enter a valid name';
    }
    if (!formData.address.match(addressRegex)) {
      errors.address = 'Please enter a valid address';
    }
    if (!formData.password.match(passwordRegex)) {
      errors.password =
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number');
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = alert('Passwords do not match');
    }

    if (Object.keys(errors).length === 0) {
        alert('Success');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <span>{formErrors.name}</span>}
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        {formErrors.address && <span>{formErrors.address}</span>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && <span>{formErrors.password}</span>}
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
