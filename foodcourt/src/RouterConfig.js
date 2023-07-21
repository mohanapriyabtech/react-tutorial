import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import Login from './Login';

const RoutesConfig = ({ submittedData, setSubmittedData }) => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/login" element={<Login setSubmittedData={setSubmittedData} />} />
    </Routes>
  );
};

export default RoutesConfig;