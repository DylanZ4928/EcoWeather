import React, { useState } from "react";
import { useEffect } from "react";
// Clouds
// Clear
// Tornado
// Squall
// Ash
// Dust
// Sand
// Fog
// Dust
// Haze
// Smoke
// Mist
// Snow
// Rain
// Drizzle
// Thunderstorm

const backgroundClear = require("../images/backgroundclear.png");
const backgroundClouds = require("../images/clouds.png");
const backgroundRain = require("../images/rainingclouds.png");
const backgroundThunderstorm = require("../images/thunderstormrain.png");

const backgroundDefault = backgroundClear;

async function backgroundChange(setBackground, setConditions) {
  const response = await fetch("/weather").catch((err) => {
    console.log("Weather fetch failed!");
    setBackground(backgroundDefault);
    setConditions([""]);
    return;
  });
  const weatherJSON = await response.json();
  console.log(weatherJSON);

  if (weatherJSON.weatherMain && weatherJSON.weatherTemp) {
    setConditions([weatherJSON.weatherTemp, weatherJSON.weatherMain]);
  } else {
    setConditions([""]);
  }

  switch (weatherJSON.weatherMain) {
    default:
    case "Clear":
      setBackground(backgroundClear);
      return;
    case "Clouds":
    case "Fog":
    case "Mist":
      setBackground(backgroundClouds);
      return;
    case "Rain":
    case "Drizzle":
    case "Squall":
      setBackground(backgroundRain);
      return;
    case "Tornado":
    case "Thunderstorm":
      setBackground(backgroundThunderstorm);
      return;
  }
}

function Background() {
  const [background, setBackground] = useState(backgroundDefault);

  //Syntax: [Temperature, Description]
  const [conditions, setConditions] = useState(["", ""]);

  // Re-render every 3 seconds. Taken from:
  // https://stackoverflow.com/questions/39426083/update-react-component-every-second

	useEffect(() => {
		const interval = setInterval(() => backgroundChange(setBackground, setConditions), 3 * 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

  return (
    <div>
      <img id="background" src={background} alt="" />
      <div className="weather">
        {conditions[0] !== "" ? (
          <h2>
            {Math.round(conditions[0])} °C
            <br />
            {conditions[1]}
          </h2>
        ) : (
          <h2>Weather not currently available</h2>
        )}
      </div>
    </div>
  );
}

export default Background;
