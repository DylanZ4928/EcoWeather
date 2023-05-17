import React, { useState, useEffect } from "react";

const butterfly = require("../media/butterflyanimated.gif");

async function eventFetch(setEvent) {
  const response = await fetch("/todaysEvents").catch((err) => {
    console.log("Event Fetch Failed!");
    setEvent([{ event: "Event Fetch Failed", eventDate: "N/A" }]);
    return;
  });

  const eventJSON = await response.json();
  // console.log(eventJSON);

  if (eventJSON != null) {
    setEvent(eventJSON);
    return;
  } else {
    setEvent([{ event: "Nothing", eventDate: "N/A", id: "" }]);
    return;
  }
}

const Butterfly = () => {
  const [event, setEvent] = useState([{ title: "Nothing", date: "", id: "" }]);

  useEffect(() => {
    eventFetch(setEvent);
    //console.log(event);
  }, []);

  const events = event.map((e) => (
    <div key={e._id}>
      <h2>{e.title}</h2>
    </div>
  ));

  return (
    <div id="butterfly-box">
      <img className="butterflyImg" src={butterfly} alt="butterfly" />
      <div className="eventDialogue">
        <div>
          <h1>Today's Events:</h1>
        </div>
        <div className="eventDisplay">{events}</div>
      </div>
    </div>
  );
};

export default Butterfly;
