import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ registerUser }) => {
  

  const navigate = useNavigate();

  const handleInputChange = (e) => {
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit")
   
  };

  return (
    <div className="form">
      <h1>User Registration</h1>
        <form className="input-box" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
        />

        <button type="submit"  onClick = {handleSubmit}>Submit</button>
        </form>
      
    </div>
  );
};

export default RegistrationForm;