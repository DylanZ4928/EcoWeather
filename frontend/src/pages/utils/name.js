import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NamePrompt() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  // Store name in local storage and redirect to home page
  const submitName = () => {
    localStorage.setItem("name", name);
    setTimeout(() => navigate("/Home"), 200);
  };

  return (
    <div id="nameForm">
      <h1 className="userNameInput">Type your name below:</h1>
      <input
        type="text"
        className="userNameTextBox"
        name="name"
        onChange={onChangeHandler}
        value={name}
      />
      <br />
      <button className="userInputButton" type="button" onClick={submitName}>
        Enter
      </button>
    </div>
  );
}

export default NamePrompt;
