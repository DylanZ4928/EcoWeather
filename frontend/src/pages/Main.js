import React from "react";
import { Link } from "react-router-dom";
import NamePrompt from "./utils/name.js";

const Main = () => {
  const adminClick = () => {
    console.log("Admin Click");
  };

  return (
    <div className="admin home">
      <div className="adminHome">
        <NamePrompt />
        <Link to="/AdminLogin">
          <button className="adminAccessButton" onClick={adminClick}>
            Admin Access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
