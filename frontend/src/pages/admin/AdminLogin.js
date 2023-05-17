import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);

  const submitForm = () => {
    console.log("Admin Login Successful");
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="adminLoginForm">
      <form action="/login" method="post">
        <div className="input-container">
          <label>Email:</label>
          <input type="email" name="email" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" name="password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input onClick={submitForm} type="submit" />
        </div>
      </form>
    </div>
  );

  const backAPage = () => {
    console.log("Back");
  };

  const newAdmin = () => {
    console.log("New Admin");
  };

  const adminLogin = () => {
    console.log("Login");
  };

  return (
    <div className="admin AdminLogin">
      <div className="adminLogin">
        <Link to="/">
          <button onClick={backAPage}>Exit</button>
        </Link>
        <div className="login-form">
          <div className="title">Admin Login</div>
          {isSubmitted ? (
            <div>
              <Link to="/AdminDashboard">
                <button onClick={adminLogin}>Login</button>
              </Link>
            </div>
          ) : (
            renderForm
          )}
        </div>
        <Link to="/NewAdmin">
          <button onClick={newAdmin} className="newAdminButton">
            New Admin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
