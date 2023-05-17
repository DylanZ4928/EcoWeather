import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";

const NewAdmin = () => {
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  const backAPage = () => {
    console.log("Back");
  };

  const newAdmin = () => {
    console.log("Create Admin");
  };

  const renderForm = (
    <form
      id="registration"
      class="collapse"
      action="/registration"
      method="post"
    >
      <p>Email</p>
      <input type="email" name="email" />
      <p>Password</p>
      <input type="text" name="password" />
      <div className="button-container">
        <input onClick={newAdmin} type="submit" />
      </div>
    </form>
  );

  return (
    <div className="admin NewAdmin">
      <div className="newAdmin">
        <div className="admin-creation-form">
          <div className="title">Create New Admin</div>
          {isSubmitted ? (
            <div>
              <Link to="/AdminDashboard">
                <button onClick={newAdmin}>New Admin</button>
              </Link>
            </div>
          ) : (
            renderForm
          )}
        </div>
        <Link to="/AdminLogin">
          <button className="back-button" onClick={backAPage}>
            Exit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewAdmin;
