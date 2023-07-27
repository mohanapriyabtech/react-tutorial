import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'

const RegistrationForm = ({ registerUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
    setFormData({ name: '', email: '', password: '' });
    navigate('/login', { state: { formData } });
  };

  return (
    <div className="form">
      <h1>User Registration</h1>
        <form className="input-box" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <button type="submit"  hansleSubmit = {handleSubmit}>Submit</button>
        </form>
      
    </div>
  );
};

export default RegistrationForm;
