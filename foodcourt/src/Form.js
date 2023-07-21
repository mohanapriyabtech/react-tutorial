import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import styles from './App.css';
import DisplayData from './DisplayData';


const RegistrationForm = () => {
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submittedData, setSubmittedData] = useState([]);


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

      // Add the formData object to the submittedData array
      setSubmittedData([...submittedData, formData]);

      // // Clear the input fields after successful form submission
      // setName('');
      // setEmail('');
      // setPassword('');
        {/* Conditionally render the DisplayData component */}
      {submittedData.length > 0 && <DisplayData submittedData={submittedData} />}
      // toast.success(`User ${name} successfully registered!!`);
      navigate('/login');
    }
  };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div className="success" style={{ display: submitted ? '' : 'none' }}>
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div className="error" style={{ display: error ? '' : 'none' }}>
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      {/* <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div> */}

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input" value={name} type="text" />

        <label className="label">Email</label>
        <input onChange={handleEmail} className="input" value={email} type="email" />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input" value={password} type="password" />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        <ToastContainer />
      </form>
     
    </div>
  );
};

export default RegistrationForm;
