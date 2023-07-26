import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({registerUser}) => {
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

  console.log(formData,"formdata")

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do any validation if required
    // Save data to localStorage or send it to the server
    registerUser(formData);
    navigate('/login', { state: { formData } });
  };

  return (
    <div className="form">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
