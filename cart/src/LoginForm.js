import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ registeredUsers }) => {

  console.log(registeredUsers, "login")
  const [formData, setFormData] = useState({
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
    // Check if the user with provided email and password exists
    const user = registeredUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      alert('Login successful!');
      navigate('/product')
      // Do something after successful login, like redirecting to the dashboard
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/')}>{"< Back to registration"}</button>
    </div>
  );
};

export default LoginForm;
