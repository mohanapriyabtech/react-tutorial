// DisplayData.js
import React from 'react';

const DisplayData = ({ submittedData }) => {
  return (
    <div>
      <h2>Submitted Data:</h2>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            <strong>Name:</strong> {data.name}, <strong>Email:</strong> {data.email},{' '}
            <strong>Password:</strong> {data.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;