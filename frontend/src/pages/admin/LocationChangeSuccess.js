import React from "react";
import { Link } from "react-router-dom";

const LocationChangeSuccess = () => {
  const toDashboard = () => {
    console.log("Back to Dashboard");
  };
  const toHome = () => {
    console.log("Logout");
  };
  return (
    <div className="admin LocationChangeSuccess">
      <div className="locationChangeSuccess">
        <h1>Location Change Success</h1>
        <div className="locationChangeButton">
          <Link to="/AdminDashboard">
            <button onClick={toDashboard}>Return to Dashboard</button>
          </Link>
          <Link to="/">
            <button onClick={toHome}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationChangeSuccess;
