import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Login from './Login';


const RegistrationForm = ({ setSubmittedData }) => {

  const [isRegistered, setIsRegistered] = useState(false);
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
      toast.error('Please enter all the fields');
    } else {
      setSubmitted(true);
      setError(false);

      // Create a new object to store the data
      const formData = {
        name: name,
        email: email,
        password: password,
      };
      let user_list = []
      user_list.push(formData)

      // Add the formData object to the submittedData array
      setSubmittedData((prevData) => [...prevData, formData]);
      console.log(setSubmittedData,"register")

      // Clear the input fields after successful form submission
      setName('');
      setEmail('');
      setPassword('');

      toast.success(`User ${name} successfully registered!!`);
      navigate('/login');
    }
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      <form>
        <label className="label">Name</label>
        <input onChange={handleName} className="input" value={name} type="text" />

        <label className="label">Email</label>
        <input onChange={handleEmail} className="input" value={email} type="email" />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input" value={password} type="password" />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        {/* {isRegistered && <Login setSubmittedData={setSubmittedData} />} */}
        <ToastContainer />
      </form>
    </div>
  );
};

export default RegistrationForm;