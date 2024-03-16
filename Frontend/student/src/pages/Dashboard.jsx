import React from "react";
import { BrowserRouter, Router, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <center>
        <h1>Welcome to the Dashboard, {username}</h1>
      </center>
    </div>
  );
};

export default Dashboard;
