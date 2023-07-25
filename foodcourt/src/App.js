import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Login from './Login';

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);
  console.log(submittedData,)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form setSubmittedData={setSubmittedData} />} />
          <Route path="/login" element={<Login submittedData={submittedData} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
