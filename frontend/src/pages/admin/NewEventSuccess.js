import React from "react";
import { Link } from "react-router-dom";

const NewEventSuccess = () => {
  const toDashboard = () => {
    console.log("Back to Dashboard");
  };
  const toHome = () => {
    console.log("Logout");
  };
  return (
    <div className="admin NewEventSuccess">
      <div className="newEventSuccess">
        <h1>Successfully Created A New Event</h1>
        <div className="eventSuccessButton">
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

export default NewEventSuccess;
