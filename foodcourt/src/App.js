import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './RouterConfig';
import './App.css';

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <div className="App">
      <Router>
        <RoutesConfig submittedData={submittedData} setSubmittedData={setSubmittedData} />
      </Router>
    </div>
  );
};

export default App;