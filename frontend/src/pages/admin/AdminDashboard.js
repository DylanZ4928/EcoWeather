import React from "react";
import { Link } from "react-router-dom";
import FetchEvent from "../utils/fetchEvent";

const AdminDashboard = () => {
  const backAPage = () => {
    console.log("Back");
  };
  const newEvent = () => {
    console.log("New Event");
  };
  const changeLocation = () => {
    console.log("Change Location");
  };
  return (
    <div className="admin AdminDashboard">
      <h1>Admin Dashboard</h1>
      <Link to="/AdminLogin">
        <button onClick={backAPage}>Exit</button>
      </Link>
      <Link to="/NewEvent">
        <button onClick={newEvent}>New Event</button>
      </Link>
      <Link to="/ChangeLocation">
        <button onClick={changeLocation}>Change Location</button>
      </Link>
      <FetchEvent />
    </div>
  );
};

export default AdminDashboard;
