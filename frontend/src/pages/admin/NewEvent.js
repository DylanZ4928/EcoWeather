import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewEvent = () => {
  const [isSubmitted] = useState(false);

  const backToDashboard = () => {
    console.log("Back to Admin Dashboard");
  };
  const addEvent = () => {
    console.log("Add New Event");
  };
  const renderForm = (
    <div className="form">
      <form action="/addEvent" method="post">
        <div className="input-container">
          <label>Event Title:</label>
          <input type="text" name="title" required />
        </div>
        <div className="input-container">
          <label>Event Date:</label>
          <input type="date" name="date" required />
        </div>
        <div className="button-container">
          <input onClick={addEvent} type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="admin NewEvent">
      <div className="event-form">
        <div className="title">Add New Event</div>
        {isSubmitted ? (
          <div>
            <Link to="/NewEventSuccess">
              <button onClick={addEvent}>Add Event</button>
            </Link>
          </div>
        ) : (
          renderForm
        )}
      </div>
      <Link to="/AdminDashboard">
        <button onClick={backToDashboard}>Admin Dashboard</button>
      </Link>
    </div>
  );
};

export default NewEvent;

/*
    <h2>New Event</h2>
      <br />
      <p>Enter Event Name</p>
      <input type="text" />
      <br />
      <br />
      <p>Enter Date</p>
      <input type="date" />
      <br />
      <Link to="/NewEventSuccess">
        <button onClick={addEvent}>Add Event</button>
      </Link>
*/
