import React, { useState, useEffect } from "react";

async function eventUpdate(setEvent) {
  const response = await fetch("/event").catch((err) => {
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
    setEvent([{ event: "Nothing", eventDate: "N/A", id: ""}]);
    return;
  }
}

function FetchEvent() {
  const [event, setEvent] = useState([{ title: "", date: "", id: ""}]);

  useEffect(() => {
    eventUpdate(setEvent);
    //console.log(event);
  }, []);

  const events = event.map((e) => (
    <tr key={e._id}>
      <td>{e.title}</td>
      <td>{e.date}</td>
    </tr>
  ))

  return (
    <div>
      <table className="eventTable">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Event Date</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    </div>
  );
}

export default FetchEvent;
