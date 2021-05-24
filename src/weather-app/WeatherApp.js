import LocationInput from "./LocationInput.js";
import CurrentWeather from "./CurrentWeather.js";
import Forecast from "./Forecast.js";
import { useState, useEffect } from "react";

function WeatherApp({
  match: {
    params: { location },
  },
}) {
  console.log(location);
  const [position, setPosition] = useState(false);
  useEffect(() => {
    if (location !== "home") {
      setPosition(location.split(","));
    }
  }, [location]);

  return (
    <div
      className="App"
      style={{
        width: "60%",
        minWidth: "min-content",
        margin: "auto",
        backgroundColor: "lightgray",
        padding: "2%",
      }}
    >
      <LocationInput setPosition={setPosition} />
      <CurrentWeather position={position} />
      <Forecast position={position} />
    </div>
  );
}

export default WeatherApp;
