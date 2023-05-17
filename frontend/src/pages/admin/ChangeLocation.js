import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChangeLocation = () => {
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  const backToDashboard = () => {
    console.log("Back to Admin Dashboard");
  };
  const backAPage = () => {
    console.log("Back");
  };

  const renderForm = (
    <form action="/addLocation" method="post">
      <input type="text" name="location" />
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  );

  return (
    <div className="admin ChangeLocation">
      <div className="changeLocation">
        <div className="changeLocationForm">
          <div className="title">Enter Your City</div>
          <p>Please enter as "Country, Country Code", ie: Melbourne, AU</p>
          {isSubmitted ? (
            <div>
              <Link to="/AdminDashboard">
                <button onClick={backToDashboard}>Admin Dashboard</button>
              </Link>
            </div>
          ) : (
            renderForm
          )}
        </div>
        <Link to="/AdminDashboard">
          <button className="back-button" onClick={backAPage}>
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChangeLocation;
