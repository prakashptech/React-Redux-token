// Dashboard.js

import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {

  const profile=()=>{
    window.location.href='/'
  }
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Profile</h2>
        <button onClick={profile}>Login</button>
        
      </div>
      <div className="content">
        <h2>Welcome to the Dashboard</h2>
        <div className="cards-container">
          
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
