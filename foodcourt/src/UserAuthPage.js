import React, { useState } from 'react';
import Login from './Login';
import Form from './Form'

const UserAuthPage = () => {
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <>
      <Form setSubmittedData={setSubmittedData} />
      <Login submittedData={submittedData} />
    </>
  );
};

export default UserAuthPage;