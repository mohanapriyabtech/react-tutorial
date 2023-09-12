import React from 'react';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="element">
     <div className='header'>
        <h1 className ="header-sentence">Learing </h1>
    </div>
      
      <div className="dashboard-container"></div>
      
      
      <nav className="vertical-navbar">
        <ul>
          <li><a href="#section1">Menu</a></li>
          <li><a href="#section2">School</a></li>
          <li><a href="#section3">College</a></li>
          <li><a href="#section1">Bank Exam</a></li>
          <li><a href="#section2">Tnpsc</a></li>
          <li><a href="#section3">Contact</a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
